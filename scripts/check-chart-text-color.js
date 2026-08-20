#!/usr/bin/env node
/**
 * Guard: チャートの**文字**が、非テキスト用に設計された色で描かれていないか（T212）。
 *
 * 起票の実測（2026-08-19・T206 の全量実測）は **473 ノード / 14 ストーリー / light + dark**。
 * 内訳は 2 つで、**どちらも「非テキスト用の色を文字に使った」という同じ形**だった:
 *
 *   ① 軸の目盛り（396 ノード） `CHART_THEME.axis.stroke` = `text-disabled` が、recharts の
 *      既定（目盛りラベルを `fill: stroke` で描く）でそのまま**文字色**になっていた。
 *      **無効状態のための色**なので、地がサーフェスでも足りない ── 実測 light 3.45 / dark 3.34。
 *   ② 凡例のラベル（77 ノード） recharts の `<Legend>` は既定でラベルの文字色に**系列色**を使う。
 *      系列パレットは `check-chart-palette.js` が **`contrastMin: 3` ＝非テキスト前提**で
 *      設計しているので、文字に使うと**構造的に**届かない（実測 light の secondary で 2.02）。
 *
 * **なぜ a11y スイートが緑だったのか。** チャートの文字は SVG の中にあり、地は面・グリッド線・
 * 系列の塗りが重なるので、axe は背景を決められず `color-contrast` を **incomplete** に落とす。
 * incomplete は `vrt/a11y-incomplete.json` で凍結してあるため、**赤は出ない**。
 * つまり緑だったのは通ったからではなく、**測られていなかったから**（T206 と同じ構図）。
 * 実測は `scripts/measure-a11y-incomplete.mjs` がやる。ここはその結果が**戻らないよう**に縛る。
 *
 * ── 見るもの ──────────────────────────────────────────────────────────
 *   A. `CHART_THEME` の**文字を塗る 2 つの入口**が、テキスト用トークンで、
 *      チャートが載りうる面すべてに対して **4.5:1** を満たすか。
 *      （`axis.stroke` は軸線・目盛り線＝**非テキスト**なので 1.4.11 の 3:1 で見る。別基準。）
 *   B. `src/components/charts/**` の `<Legend>` が **全部** `{...CHART_THEME.legend}` を
 *      spread しているか。1 つでも外れると、そこだけ既定の系列色に戻る。
 *   C. 目盛りを描く軸が **全部** `{...CHART_THEME.axis}` を spread しているか。
 *      外れると `stroke` の既定（recharts の `#666`）が文字色になる。
 *
 * **色の計算は自分で書かない**（T108 で再実装が本物と食い違った実績がある）。
 * `scripts/lib/color.js` と `scripts/lib/design-tokens.js` ＝ `check:contrast` と同じ道具を使う。
 *
 * **読めなかったものは黙って 0 件にしない**（T54 の教訓）。A の 2 つの入口が
 * 抽出できなければ、その時点で失敗する ── 「見つからなかった」を「違反なし」と混ぜない。
 *
 * Usage: node scripts/check-chart-text-color.js
 *   引数は取らない（lint-staged から部分集合を渡されても全量を見る。`check:slop` の
 *   ラチェットが部分集合を全体基準と比べて**常に素通り**していた件と同じ轍を踏まない）。
 */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { parseColor, contrastRatio, fmt } from "./lib/color.js";
import { readThemes, resolveColorToken } from "./lib/design-tokens.js";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const HELPERS = path.join(root, "src", "components", "helpers.ts");
const CHARTS_DIR = path.join(root, "src", "components", "charts");

const TEXT_MIN = 4.5;
/** 軸線・目盛り線は非テキスト（WCAG 1.4.11）。文字と同じ基準で見ない。 */
const NON_TEXT_MIN = 3;

/**
 * チャートが実際に載る面。`surface` は Card の中、`surface-subtle` は沈めた面、
 * `surface-app` はページ地（Storybook のキャンバスもこれ）。
 * **チャートは自分の背景を塗らない**（`*.module.scss` に `background` が 1 つも無い）ので、
 * 置かれた地がそのまま文字の地になる ── 3 つとも到達しうる。
 */
const TEXT_SURFACES = ["surface", "surface-subtle", "surface-app"];

/**
 * 非テキスト（軸線・目盛り線）は**ページ地を含めない**。
 *
 * **黙って甘くしているのではない。** このガードを書いた時点の実測で、
 * `axis.stroke` (= `text-disabled`) は `surface-app` の light で **2.74**（1.4.11 の要 3）
 * と足りていない。ただしこれは**軸の線の話で、T212（文字）とは別の欠陥**であり、
 * 直すと線の色そのものを変える設計判断になる。**T215 として起票してある。**
 * ここに `surface-app` を足すのは T215 を直すときで、そのとき同時にこの行を消すこと。
 */
const NON_TEXT_SURFACES = ["surface", "surface-subtle"];

/** `var(--wim-color-foo)` → `foo`。それ以外（生の hex 等）は null。 */
const tokenOf = (value) => {
  const m = /^var\(--wim-color-([a-z0-9-]+)\)$/.exec(String(value).trim());
  return m ? m[1] : null;
};

const failures = [];
const notes = [];

// ── A. CHART_THEME の入口を抽出する ───────────────────────────────────────
const source = fs.readFileSync(HELPERS, "utf-8");

/**
 * 文字を塗る入口。**キー名で固定して読む** ── 形が変わったら読めずに落ちる。
 * `label` はエラー文と、この定数が何を塗るのかの説明。
 */
const TEXT_ENTRIES = [
  {
    label: "軸の目盛りラベル (CHART_THEME.axis.tick.fill)",
    re: /axis:\s*\{[\s\S]*?tick:\s*\{[^}]*?fill:\s*"([^"]+)"/,
  },
  {
    label: "凡例のラベル (CHART_THEME.legend.labelStyle.color)",
    re: /legend:\s*\{[\s\S]*?labelStyle:\s*\{[^}]*?color:\s*"([^"]+)"/,
  },
];

/** 非テキストの入口。基準が違うので別に持つ。 */
const NON_TEXT_ENTRIES = [
  {
    label: "軸線・目盛り線 (CHART_THEME.axis.stroke)",
    re: /axis:\s*\{[^}]*?stroke:\s*"([^"]+)"/,
  },
];

const readEntry = (entry) => {
  const m = entry.re.exec(source);
  if (!m) {
    failures.push(
      `${entry.label} を src/components/helpers.ts から読み取れなかった。` +
        `形が変わったならこのガードの正規表現も直すこと（読めない = 違反なし、にはしない）。`,
    );
    return null;
  }
  const token = tokenOf(m[1]);
  if (!token) {
    failures.push(`${entry.label} がトークンではない: ${m[1]}（--wim-color-* を使うこと）`);
    return null;
  }
  return { ...entry, raw: m[1], token };
};

const textEntries = TEXT_ENTRIES.map(readEntry).filter(Boolean);
const nonTextEntries = NON_TEXT_ENTRIES.map(readEntry).filter(Boolean);

const themes = readThemes();

const checkAgainstSurfaces = (entry, min, surfaces) => {
  for (const [theme, vars] of themes) {
    const fg = resolveColorToken(vars, entry.token);
    if (!fg) {
      failures.push(`${entry.label}: ${theme} で ${entry.token} を解決できなかった`);
      continue;
    }
    for (const surface of surfaces) {
      const bg = resolveColorToken(vars, surface);
      if (!bg) {
        failures.push(`${entry.label}: ${theme} で ${surface} を解決できなかった`);
        continue;
      }
      const ratio = contrastRatio(fg, bg);
      const line = `${entry.label} — ${theme} / ${surface}: ${fmt(ratio)} (要 ${min})`;
      if (ratio < min) failures.push(line);
      else notes.push(line);
    }
  }
};

for (const entry of textEntries) checkAgainstSurfaces(entry, TEXT_MIN, TEXT_SURFACES);
for (const entry of nonTextEntries) checkAgainstSurfaces(entry, NON_TEXT_MIN, NON_TEXT_SURFACES);

// ── B / C. 使う側で spread が外れていないか ───────────────────────────────
const chartFiles = fs
  .readdirSync(CHARTS_DIR, { withFileTypes: true })
  .filter((d) => d.isDirectory())
  .flatMap((d) =>
    fs
      .readdirSync(path.join(CHARTS_DIR, d.name))
      .filter((f) => f.endsWith(".tsx") && !f.endsWith(".test.tsx") && !f.endsWith(".stories.tsx"))
      .map((f) => path.join(CHARTS_DIR, d.name, f)),
  );

if (chartFiles.length === 0) {
  failures.push(`${CHARTS_DIR} に走査対象の .tsx が 1 つも無い（走査が成立していない）`);
}

/** 目盛りを描く軸。`ZAxis` は目盛りを描かないので対象外。 */
const AXIS_TAGS = ["XAxis", "YAxis", "PolarAngleAxis", "PolarRadiusAxis"];

/**
 * 開きタグの中身を取り出す。**`>` の素朴な非貪欲マッチでは切れる** ──
 * `tickFormatter={(val) => xAxisKey[val]}` のアロー関数の `>` で終わってしまい、
 * その後ろにある `{...CHART_THEME.axis}` が見えずに**偽陽性**になる
 * （このガードの最初の版が実際に Heatmap の XAxis / YAxis で 2 件出した）。
 * 波括弧の深さを数えて、深さ 0 の `>` で閉じる。
 */
function openTags(text, tag) {
  const out = [];
  const start = new RegExp(`<${tag}(?![A-Za-z0-9])`, "g");
  for (let m = start.exec(text); m; m = start.exec(text)) {
    let depth = 0;
    for (let i = m.index + m[0].length; i < text.length; i += 1) {
      const ch = text[i];
      if (ch === "{") depth += 1;
      else if (ch === "}") depth -= 1;
      else if (ch === ">" && depth === 0) {
        out.push(text.slice(m.index + m[0].length, i));
        break;
      }
    }
  }
  return out;
}

let legendTags = 0;
let axisTags = 0;

for (const file of chartFiles) {
  const text = fs.readFileSync(file, "utf-8");
  const rel = path.relative(root, file).replace(/\\/g, "/");

  for (const props of openTags(text, "Legend")) {
    legendTags += 1;
    if (!/\{\s*\.\.\.CHART_THEME\.legend\s*\}/.test(props)) {
      failures.push(
        `${rel}: <Legend> が {...CHART_THEME.legend} を spread していない。` +
          `既定ではラベルの文字色に**系列色**（非テキスト前提のパレット）が使われる。`,
      );
    }
  }

  for (const tag of AXIS_TAGS) {
    for (const props of openTags(text, tag)) {
      // 目盛りを描かない軸（`tick={false}` / `hide`）は文字が無いので対象外。
      if (/\btick=\{false\}/.test(props) || /\bhide\b/.test(props)) continue;
      axisTags += 1;
      if (!/\{\s*\.\.\.CHART_THEME\.axis\s*\}/.test(props)) {
        failures.push(
          `${rel}: <${tag}> が {...CHART_THEME.axis} を spread していない。` +
            `既定では recharts の stroke (#666) が目盛りの文字色になる。`,
        );
      }
    }
  }
}

// 走査が成立していることを、既知の母数で確かめる（0 件を信用しない）。
if (legendTags === 0) failures.push("<Legend> を 1 つも見つけられなかった（走査が成立していない）");
if (axisTags === 0) failures.push("目盛りを描く軸を 1 つも見つけられなかった（走査が成立していない）");

// ── 結果 ─────────────────────────────────────────────────────────────
if (failures.length > 0) {
  console.error("check:chart-text-color — チャートの文字色に問題があります（T212）\n");
  for (const f of failures) console.error(`  ✗ ${f}`);
  console.error(
    `\n実測で確かめるには: node scripts/measure-a11y-incomplete.mjs --only chart` +
      `（storybook-static を配信したうえで）`,
  );
  process.exit(1);
}

console.log(
  `check:chart-text-color — OK（文字の入口 ${textEntries.length} / 非テキスト ${nonTextEntries.length}、` +
    `<Legend> ${legendTags} 件・軸 ${axisTags} 件が CHART_THEME を spread）`,
);
for (const n of notes) console.log(`  ・${n}`);
