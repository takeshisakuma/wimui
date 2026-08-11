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
 * Usage: node scripts/check-chart-palette.js
 */
import fs from "fs";

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
function readPalette(mode) {
  const file =
    mode === "light"
      ? "src/tokens/generated/_css-vars.scss"
      : "src/tokens/generated/_css-vars-dark.scss";
  const css = fs.readFileSync(file, "utf8");
  const read = (name) => {
    const m = new RegExp(`--wim-color-${name}:\\s*(#[0-9a-fA-F]{3,6})`).exec(css);
    if (!m) throw new Error(`${file} に --wim-color-${name} が無い`);
    const hex = m[1].toLowerCase();
    return hex.length === 4
      ? `#${hex[1]}${hex[1]}${hex[2]}${hex[2]}${hex[3]}${hex[3]}`
      : hex;
  };
  return { series: SLOTS.map(read), neutral: read(NEUTRAL_SLOT) };
}

function check(mode) {
  const { series, neutral } = readPalette(mode);
  const [lo, hi] = BAND[mode];
  const surface = SURFACE[mode];
  const problems = [];
  const notes = [];

  const offband = series.filter((c) => {
    const L = oklch(c)[0];
    return L < lo || L > hi;
  });
  if (offband.length) problems.push(`明度帯（${lo}–${hi}）の外: ${offband.join(" ")}`);

  const lowChroma = series.filter((c) => oklch(c)[1] < CHROMA_FLOOR);
  if (lowChroma.length) problems.push(`彩度が下限 ${CHROMA_FLOOR} 未満: ${lowChroma.join(" ")}`);

  // 散布図など**すべての組**が同時に出る図があるので all-pairs で見る
  const pairs = [];
  for (let i = 0; i < series.length; i++)
    for (let j = i + 1; j < series.length; j++) pairs.push([series[i], series[j]]);

  let worstCvd = null;
  for (const kind of ["protan", "deutan"])
    for (const [a, b] of pairs) {
      const d = deltaE(a, b, kind);
      if (!worstCvd || d < worstCvd[0]) worstCvd = [d, kind, a, b];
    }
  if (worstCvd[0] < CVD_FLOOR)
    problems.push(
      `CVD の分離が ${CVD_FLOOR} 未満: ${worstCvd[2]}↔${worstCvd[3]} ΔE ${worstCvd[0].toFixed(1)}（${worstCvd[1]}）`,
    );
  else if (worstCvd[0] < CVD_TARGET)
    notes.push(
      `CVD ΔE ${worstCvd[0].toFixed(1)}（${worstCvd[2]}↔${worstCvd[3]} / ${worstCvd[1]}）= 6〜8 の帯。**凡例と直接ラベルが要る**`,
    );

  let worstNormal = null;
  for (const [a, b] of pairs) {
    const d = deltaE(a, b);
    if (!worstNormal || d < worstNormal[0]) worstNormal = [d, a, b];
  }
  if (worstNormal[0] < NORMAL_FLOOR)
    problems.push(
      `正常色覚での分離が ${NORMAL_FLOOR} 未満: ${worstNormal[1]}↔${worstNormal[2]} ΔE ${worstNormal[0].toFixed(1)}`,
    );

  const lowContrast = [...series, neutral]
    .map((c) => [c, contrast(c, surface)])
    .filter(([, r]) => r < CONTRAST_MIN);
  if (lowContrast.length)
    notes.push(
      `面（${surface}）との対比が ${CONTRAST_MIN}:1 未満: ` +
        lowContrast.map(([c, r]) => `${c} ${r.toFixed(2)}`).join(" / ") +
        " ── ラベルか表での補いが要る",
    );

  return { problems, notes, worstCvd, worstNormal };
}

function main() {
  console.log("--- check:chart-palette（系列色が見分けられるか） ---\n");
  let failed = false;
  for (const mode of ["light", "dark"]) {
    const { problems, notes, worstCvd, worstNormal } = check(mode);
    console.log(
      `${mode}: CVD 最悪 ΔE ${worstCvd[0].toFixed(1)} / 正常色覚 最悪 ΔE ${worstNormal[0].toFixed(1)}`,
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
}

main();
