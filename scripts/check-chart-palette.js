#!/usr/bin/env node
/**
 * Guard: チャートの系列色が**見分けられる**か（T138）。
 *
 * 起票のきっかけは 9 枚目の合成画面で、**画面を書く前**に既存の `CHART_COLORS` を
 * 検査に通したら 4 項目落ちたこと ── とくに **系列 1 と 2 の差が ΔE 10.8**（下限 15）
 * で、色覚に関係なく見分けにくかった。dark も light と同じ hex のままだった。
 *
 * 検査は `dataviz` skill の validator（`scripts/validate_palette.js`）と同じ 5 つ。
 * 外部のスクリプトに依存させないよう、必要な計算だけをここに持ってきている。
 *
 *   1. 明度帯       OKLCH の L がモードの帯に入っているか
 *   2. 彩度の下限   OKLCH の C が下限以上か（下回ると灰色に見える）
 *   3. CVD の分離   protan / deutan で見たときの OKLab ΔE（×100）
 *   4. 正常色覚の下限  無変換の ΔE（**ここが下限を割ると誰にも見分けられない**）
 *   5. 面との対比   サーフェスに対する WCAG 比
 *
 * **`chart-secondary` は categorical の検査から外す。** あれは「その他」の枠で、
 * 系列の色相ではない（灰色なので彩度の下限に構造的に掛からない）。対比だけ見る。
 *
 * **CVD が 6〜8 の帯は「二次符号化があれば可」。** このライブラリのチャートは
 * 凡例と直接ラベルを出すのでその条件を満たす。8 未満 6 以上は警告、6 未満は失敗。
 *
 * ── 判定のついでに数値を出す（T151） ──────────────────────────────────────
 *
 * `Charts.mdx` は「3:1 を満たすこと」「隣り合う系列が分かれること」を条件として
 * 書いているが、**その根拠の数値は 1 つも書いていない**。手で書き写すと、真実が
 * トークンと MDX の 2 か所になり、**パレットを変えたときに赤を出さずに古びる**
 * （T138 で実際に差し替えたときがその場面だった）。
 *
 * ここは既に ΔE も対比も計算しているので、判定のついでに結果を
 * `src/data/chart-palette.json` へ吐き、MDX はそれを読む。数値の真実はこの 1 か所に
 * なり、**ガードが赤を出す＝資料も同時に直る**。`slop-dictionary.json` → `llms.txt`
 * と同じ SSOT の形。
 *
 * 既定の実行はコミット済みの JSON が**古びていたら落ちる**。比較は**バイトではなく
 * 値**で行う（`check:llms` が CRLF のせいで Windows でだけ落ちた件と同じ轍を踏まない）。
 * リリースで動く値（version など）は 1 つも含めない ── `llms.txt` が version を焼き
 * 込んでリリース PR を構造的にマージ不能にした件（#116）と同じ形にしないため。
 *
 * Usage:
 *   node scripts/check-chart-palette.js            # 検査 + 生成物が古びていないか
 *   node scripts/check-chart-palette.js --update   # 検査 + 生成物を書き直す
 */
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, "..");
/** MDX が読む生成物。数値の真実はここ 1 か所（T151）。 */
const OUTPUT = path.join(root, "src", "data", "chart-palette.json");

const updateMode = process.argv.includes("--update");

/**
 * **これは「対比の帯」ではなく「細いマークが見える明度の帯」**（OKLab の L）。
 *
 * T152 の起票時に「帯（dark の下限 0.48）が 3:1 に必要な L≈0.61 と矛盾して
 * いる」と書いたが、**矛盾ではなく別のものを測っている**。2px の線や 8px の
 * 点として置いたときに沈まない／飛ばない範囲がこの帯で、地に対する
 * コントラスト比はここでは決まらない。
 *
 * 2026-08-12、利用者は **T152 を案①で決めた** ── dark で 3:1 に届かない
 * 3 色をそのまま受け入れ、**対比は強制せず計測に留める**。したがってこの
 * 帯を 3:1 から導いた値へ引き上げることはしない（引き上げると、この色空間
 * では通る色が無くなる）。代わりに `checkCategoricalLegends()` が
 * 「色が唯一の手がかりにならないこと」を機械で保証している。
 */
const BAND = { light: [0.43, 0.77], dark: [0.48, 0.67] };
const CHROMA_FLOOR = 0.1;
const CVD_TARGET = 8;
const CVD_FLOOR = 6;
const NORMAL_FLOOR = 15;
const CONTRAST_MIN = 3;

/** チャートが載る面（カードのサーフェス）。 */
const SURFACE = { light: "#ffffff", dark: "#393939" };

/** `CHART_COLORS` の並び順そのもの。順番も語彙なので、ここを入れ替えない。 */
const SLOTS = [
  "chart-primary",
  "chart-info",
  "chart-success",
  "chart-warning",
  "chart-danger",
];
const NEUTRAL_SLOT = "chart-secondary";

// ── 色の計算（sRGB → OKLab / OKLCH、CVD シミュレーション、WCAG 比） ──────────
const toLinear = (c) => (c <= 0.04045 ? c / 12.92 : ((c + 0.055) / 1.055) ** 2.4);
const rgb = (hex) => [1, 3, 5].map((i) => parseInt(hex.slice(i, i + 2), 16) / 255);

function oklab(hex) {
  const [r, g, b] = rgb(hex).map(toLinear);
  const l = Math.cbrt(0.4122214708 * r + 0.5363325363 * g + 0.0514459929 * b);
  const m = Math.cbrt(0.2119034982 * r + 0.6806995451 * g + 0.1073969566 * b);
  const s = Math.cbrt(0.0883024619 * r + 0.2817188376 * g + 0.6299787005 * b);
  return [
    0.2104542553 * l + 0.793617785 * m - 0.0040720468 * s,
    1.9779984951 * l - 2.428592205 * m + 0.4505937099 * s,
    0.0259040371 * l + 0.7827717662 * m - 0.808675766 * s,
  ];
}

function oklch(hex) {
  const [L, a, b] = oklab(hex);
  return [L, Math.hypot(a, b), ((Math.atan2(b, a) * 180) / Math.PI + 360) % 360];
}

/** Brettel / Viénot 系の簡易 LMS 変換で 2 型色覚を近似する。 */
function simulate(hex, kind) {
  if (!kind) return hex;
  const [r, g, b] = rgb(hex).map(toLinear);
  const L = 0.31399022 * r + 0.63951294 * g + 0.04649755 * b;
  const M = 0.15537241 * r + 0.75789446 * g + 0.08670142 * b;
  const S = 0.01775239 * r + 0.10944209 * g + 0.87256922 * b;
  let l = L,
    m = M,
    s = S;
  if (kind === "protan") l = 1.05118294 * M - 0.05116099 * S;
  if (kind === "deutan") m = 0.9513092 * L + 0.04866992 * S;
  if (kind === "tritan") s = -0.86744736 * L + 1.86727089 * M;
  const R = 5.47221206 * l - 4.6419601 * m + 0.16963708 * s;
  const G = -1.1252419 * l + 2.29317094 * m - 0.1678952 * s;
  const B = 0.02980165 * l - 0.19318073 * m + 1.16364789 * s;
  const enc = (v) => {
    const c = Math.max(0, Math.min(1, v));
    const srgb = c <= 0.0031308 ? c * 12.92 : 1.055 * c ** (1 / 2.4) - 0.055;
    return Math.round(srgb * 255)
      .toString(16)
      .padStart(2, "0");
  };
  return `#${enc(R)}${enc(G)}${enc(B)}`;
}

const deltaE = (a, b, kind) => {
  const [l1, a1, b1] = oklab(simulate(a, kind));
  const [l2, a2, b2] = oklab(simulate(b, kind));
  return Math.hypot(l1 - l2, a1 - a2, b1 - b2) * 100;
};

const relLum = (hex) => {
  const [r, g, b] = rgb(hex).map(toLinear);
  return 0.2126 * r + 0.7152 * g + 0.0722 * b;
};
const contrast = (a, b) => {
  const [hi, lo] = [relLum(a), relLum(b)].sort((x, y) => y - x);
  return (hi + 0.05) / (lo + 0.05);
};

// ── 出荷されている値を読む（生成物ではなくトークンの出力を見る） ─────────────
/**
 * その色が**どの PCCS の段から来たか**を、トークンの原典から読む。
 * `_css-vars*.scss` には解決後の hex しか残らないので、段の名前はここでしか取れない。
 */
function readSteps(mode) {
  const file = mode === "light" ? "tokens/color/semantic.json" : "tokens/themes/dark.json";
  const source = JSON.parse(fs.readFileSync(path.join(root, file), "utf8"));
  const colors = source?.wim?.color ?? {};
  return (name) => {
    const value = colors[name]?.value;
    const m = /^\{pccs\.([^}]+)\}$/.exec(value ?? "");
    if (!m) throw new Error(`${file} の ${name} が PCCS の段を指していない（${value}）`);
    return m[1];
  };
}

function readPalette(mode) {
  const file =
    mode === "light"
      ? "src/tokens/generated/_css-vars.scss"
      : "src/tokens/generated/_css-vars-dark.scss";
  const css = fs.readFileSync(path.join(root, file), "utf8");
  const step = readSteps(mode);
  const read = (name) => {
    const m = new RegExp(`--wim-color-${name}:\\s*(#[0-9a-fA-F]{3,6})`).exec(css);
    if (!m) throw new Error(`${file} に --wim-color-${name} が無い`);
    const raw = m[1].toLowerCase();
    const hex =
      raw.length === 4 ? `#${raw[1]}${raw[1]}${raw[2]}${raw[2]}${raw[3]}${raw[3]}` : raw;
    return { token: name, pccs: step(name), hex };
  };
  return { series: SLOTS.map(read), neutral: read(NEUTRAL_SLOT) };
}

/** 生成物に入れる数値は丸める（丸めないと最下位の桁で「古びた」判定が揺れる）。 */
const round = (n, digits) => Number(n.toFixed(digits));

function check(mode) {
  const { series, neutral } = readPalette(mode);
  const [lo, hi] = BAND[mode];
  const surface = SURFACE[mode];
  const problems = [];
  const notes = [];

  const offband = series.filter((c) => {
    const L = oklch(c.hex)[0];
    return L < lo || L > hi;
  });
  if (offband.length)
    problems.push(`明度帯（${lo}–${hi}）の外: ${offband.map((c) => c.hex).join(" ")}`);

  const lowChroma = series.filter((c) => oklch(c.hex)[1] < CHROMA_FLOOR);
  if (lowChroma.length)
    problems.push(`彩度が下限 ${CHROMA_FLOOR} 未満: ${lowChroma.map((c) => c.hex).join(" ")}`);

  // 散布図など**すべての組**が同時に出る図があるので all-pairs で見る
  const pairs = [];
  for (let i = 0; i < series.length; i++)
    for (let j = i + 1; j < series.length; j++) pairs.push([series[i], series[j]]);

  let worstCvd = null;
  for (const kind of ["protan", "deutan"])
    for (const [a, b] of pairs) {
      const d = deltaE(a.hex, b.hex, kind);
      if (!worstCvd || d < worstCvd.deltaE) worstCvd = { deltaE: d, kind, a, b };
    }
  if (worstCvd.deltaE < CVD_FLOOR)
    problems.push(
      `CVD の分離が ${CVD_FLOOR} 未満: ${worstCvd.a.hex}↔${worstCvd.b.hex} ΔE ${worstCvd.deltaE.toFixed(1)}（${worstCvd.kind}）`,
    );
  else if (worstCvd.deltaE < CVD_TARGET)
    notes.push(
      `CVD ΔE ${worstCvd.deltaE.toFixed(1)}（${worstCvd.a.hex}↔${worstCvd.b.hex} / ${worstCvd.kind}）= 6〜8 の帯。**凡例と直接ラベルが要る**`,
    );

  let worstNormal = null;
  for (const [a, b] of pairs) {
    const d = deltaE(a.hex, b.hex);
    if (!worstNormal || d < worstNormal.deltaE) worstNormal = { deltaE: d, a, b };
  }
  if (worstNormal.deltaE < NORMAL_FLOOR)
    problems.push(
      `正常色覚での分離が ${NORMAL_FLOOR} 未満: ${worstNormal.a.hex}↔${worstNormal.b.hex} ΔE ${worstNormal.deltaE.toFixed(1)}`,
    );

  const lowContrast = [...series, neutral]
    .map((c) => [c, contrast(c.hex, surface)])
    .filter(([, r]) => r < CONTRAST_MIN);
  if (lowContrast.length)
    notes.push(
      `面（${surface}）との対比が ${CONTRAST_MIN}:1 未満: ` +
        lowContrast.map(([c, r]) => `${c.hex} ${r.toFixed(2)}`).join(" / ") +
        " ── ラベルか表での補いが要る",
    );

  /** MDX が読む形。**判定に使った値そのもの**で、書き写しは 1 つも挟まない。 */
  const describe = (c) => ({
    token: c.token,
    pccs: c.pccs,
    hex: c.hex,
    contrast: round(contrast(c.hex, surface), 2),
    lightness: round(oklch(c.hex)[0], 3),
    chroma: round(oklch(c.hex)[1], 3),
  });
  const report = {
    surface,
    lightnessBand: [lo, hi],
    series: series.map(describe),
    neutral: describe(neutral),
    separation: {
      normal: {
        deltaE: round(worstNormal.deltaE, 1),
        between: [worstNormal.a.token, worstNormal.b.token],
      },
      cvd: {
        deltaE: round(worstCvd.deltaE, 1),
        kind: worstCvd.kind,
        between: [worstCvd.a.token, worstCvd.b.token],
      },
    },
  };

  return { problems, notes, worstCvd, worstNormal, report };
}

function buildDocument(reports) {
  return {
    $generated:
      "scripts/check-chart-palette.js — 手で編集しない。`npm run check:chart-palette:update` で作り直す。",
    thresholds: {
      chromaFloor: CHROMA_FLOOR,
      normalDeltaEFloor: NORMAL_FLOOR,
      cvdDeltaEFloor: CVD_FLOOR,
      cvdDeltaETarget: CVD_TARGET,
      contrastMin: CONTRAST_MIN,
    },
    modes: reports,
  };
}

const serialize = (doc) => `${JSON.stringify(doc, null, 2)}\n`;

/**
 * T152（案① ＝ 2026-08-12 に利用者が決定）で受け入れた穴の**支え**を固定する。
 *
 * dark の `chart-info` 2.15 / `chart-success` 2.16 / `chart-danger` 2.99 は
 * 地に対して 3:1 に届かない。**選び直しでは解けない**（青で「3:1 かつ彩度
 * 0.1 以上」を満たす PCCS の段は 0 件）し、面を暗くする案も**トークンの
 * 無彩色の段の中では `#000000` しか通らない**うえ、その面は dark の地に
 * 対して対比 1.1 前後＝面として浮かない。so 対比は**強制せず計測に留める**
 * と決めた。
 *
 * **代わりに保証するのが「色は唯一の手がかりではない」こと。** 今は
 * カテゴリ配色（`CHART_COLORS` を変数 index で引く ＝ 系列ごとに色相を
 * 変える使い方）をするチャートが、例外なく `<Legend />` を無条件で出して
 * いる。これは prop で消せないので構造的に保証されている ── **この事実が
 * 案①の全体重を支えている**ので、機械で固定する。
 *
 * 対象外（色を系列の区別に使っていない）:
 *   `GaugeChart` / `ScatterChart` は `CHART_COLORS[0]` の 1 色だけ、
 *   `FunnelChart`（T137）と `Treemap`（T148）は 1 色相の濃淡へ移した。
 */
const CATEGORICAL_CHARTS = [];

function checkCategoricalLegends() {
  const dir = path.join(root, "src/components/charts");
  const problems = [];
  CATEGORICAL_CHARTS.length = 0;

  for (const name of fs.readdirSync(dir)) {
    const file = path.join(dir, name, `${name}.tsx`);
    if (!fs.existsSync(file)) continue;
    const source = fs.readFileSync(file, "utf8");

    // コメントを落としてから見る（過去の経緯を書いた行に `CHART_COLORS` が
    // 残っているだけのファイルを対象に数えてしまうため）。
    const code = source
      .replace(/\/\*[\s\S]*?\*\//g, "")
      .replace(/^\s*\/\/.*$/gm, "");

    // 変数 index で引いている＝系列ごとに色相を変えている
    if (!/CHART_COLORS\[\s*(?!\d)[A-Za-z_$]/.test(code)) continue;
    CATEGORICAL_CHARTS.push(name);

    if (!/<Legend[\s/>]/.test(code)) {
      problems.push(`${name}: カテゴリ配色を使っているのに <Legend /> が無い`);
      continue;
    }
    // 「無条件」であること。prop や状態で出し分けると、利用者が消せてしまう。
    if (/[?&|]\s*(?:\{\s*)?<Legend[\s/>]/.test(code) || /\{\s*\w+\s*&&\s*<Legend/.test(code)) {
      problems.push(`${name}: <Legend /> が条件付きで描かれている（利用者が消せる）`);
    }
  }

  if (CATEGORICAL_CHARTS.length === 0) {
    problems.push(
      "カテゴリ配色を使うチャートが 1 件も見つからない（走査が成立していない）",
    );
  }
  return problems;
}

function main() {
  console.log("--- check:chart-palette（系列色が見分けられるか） ---\n");
  let failed = false;
  const reports = {};
  for (const mode of ["light", "dark"]) {
    const { problems, notes, worstCvd, worstNormal, report } = check(mode);
    reports[mode] = report;
    console.log(
      `${mode}: CVD 最悪 ΔE ${worstCvd.deltaE.toFixed(1)} / 正常色覚 最悪 ΔE ${worstNormal.deltaE.toFixed(1)}`,
    );
    for (const n of notes) console.log(`  · ${n}`);
    for (const p of problems) {
      failed = true;
      console.error(`  ✗ ${p}`);
    }
  }
  if (failed) {
    console.error(
      "\n✗ 系列色が検査を通らない。**手で色を作らず**、`tokens/color/base.json` の\n" +
        "  既存ステップから通る組を探すこと（dataviz skill の snap-to-passing）。\n" +
        "  light と dark は明度帯が違うので**別々に選ぶ**。",
    );
    process.exit(1);
  }
  console.log("\n✓ 系列色は検査を通っています。");

  const legendProblems = checkCategoricalLegends();
  if (legendProblems.length > 0) {
    for (const p of legendProblems) console.error(`  ✗ ${p}`);
    console.error(
      "\n✗ **色が唯一の手がかりになっている。**\n" +
        "  dark の `chart-info` / `chart-success` / `chart-danger` は地に対して 3:1 に届かず、\n" +
        "  それを**承知で受け入れる**と決めた（T152・案①）。成り立つ条件は\n" +
        "  「**色を系列の区別に使うチャートは、必ず凡例を出す**」ことだけなので、\n" +
        "  ここが崩れると受け入れの根拠ごと無くなる。`<Legend />` を消すか、\n" +
        "  prop で消せるようにするなら、**先に T152 の判断をやり直すこと**。",
    );
    process.exit(1);
  }
  console.log(
    `✓ カテゴリ配色を使う ${CATEGORICAL_CHARTS.length} 件は、いずれも凡例を無条件で出しています（T152・案①の前提）。`,
  );

  // ── 数値の SSOT（T151）。MDX はここを読むので、色を変えたら資料も同時に動く ──
  const doc = buildDocument(reports);
  const relative = path.relative(root, OUTPUT).replace(/\\/g, "/");
  if (updateMode) {
    fs.writeFileSync(OUTPUT, serialize(doc), "utf8");
    console.log(`✓ ${relative} を書き出しました。`);
    return;
  }
  // **バイトではなく値で比べる**（CRLF で Windows だけ落ちる偽陽性を作らない）
  let committed = null;
  try {
    committed = JSON.parse(fs.readFileSync(OUTPUT, "utf8"));
  } catch {
    committed = null;
  }
  if (JSON.stringify(committed) !== JSON.stringify(doc)) {
    console.error(
      `\n✗ ${relative} が古い（Charts.mdx はここから数値を読んでいる）。\n` +
        "  `npm run check:chart-palette:update` を実行してコミットに含めること。",
    );
    process.exit(1);
  }
  console.log(`✓ ${relative} は最新です。`);
}

main();
