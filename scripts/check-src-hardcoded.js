#!/usr/bin/env node
/**
 * Guard: `src/components/**` に UI テキストを直書きしない（T40）。
 *
 * **既存の 2 つのガードの間に穴があった**:
 *   - `check-stories-hardcoded` は `stories/**` しか見ない
 *   - `check-i18n-components` は「src は型付きキー（`WimI18nKey`）で守る」として
 *     **意図的に src を走査しない**
 *
 * しかし型が守るのは**キーの間違い**であって、**`t()` を呼ばない生文字列**は
 * 誰の網にもかからない。起票時（2026-07-27）は `DataGrid` のページャ文言と
 * aria-label / alt が計 11 件漏れていた。
 *
 * **2026-08-01 の実測は 27 件**（`QueryBuilder` 20 / `PhoneInput` 4 /
 * `Carousel` 2 / `GanttChart` 1）。起票時の 11 件は `DataGrid` の分で、
 * そこは解消済みだが**別のコンポーネントに同じ形が残っていた**。
 * 起票時の設計どおり**ラチェットで開始**し、減らすたびに基準を下げ、
 * 0 になったらハードゲートにする。
 *
 * **受け入れ条件は過去のコミットで実証した**: T40 起票時の `DataGrid.tsx`
 * （`c1be9254`）の 353 行目 `{infiniteScroll.hasMore && "Loading more..."}` を
 * 検出できることを確認している（`--probe <file>` で任意のファイルを走査できる）。
 *
 * 検出するもの（`check-stories-hardcoded` と同じ考え方）:
 *   1. テキスト系 prop の生文字列（`aria-label` / `alt` / `placeholder` …）
 *   2. JSX の生テキスト子要素（2 語以上の英文）
 *   3. `&&` や `?:` で出す生の文字列リテラル（`DataGrid` の 11 件がこの形だった）
 *
 * 逃がし: `i18n-ignore`（同一行）/ `i18n-ignore-next-line` /
 * `i18n-ignore-start` 〜 `i18n-ignore-end`。**固有名詞やトークン名にだけ使う。**
 *
 * Usage:
 *   node scripts/check-src-hardcoded.js
 *   node scripts/check-src-hardcoded.js --probe path/to/file.tsx
 */
import fs from "fs";
import path from "path";
import { globSync } from "glob";

const argv = process.argv.slice(2);
const probeIdx = argv.indexOf("--probe");
const probeFiles = probeIdx >= 0 ? argv.slice(probeIdx + 1) : [];

const files =
  probeFiles.length > 0
    ? probeFiles
    : globSync("src/components/**/*.tsx", { posix: true }).filter(
        (f) => !f.endsWith(".test.tsx") && !f.endsWith(".stories.tsx"),
      );

/** URL / CSS 値 / トークン / 単語 1 つの識別子などは対象外。 */
const IGNORE_VALUE = /^(https?:|var\(|#|\d|[A-Z_]+$|[a-z-]+$)|@[a-z]+\.|@example|@wim/;

/**
 * CSS の値は「2 語以上の英字」に見えるが UI テキストではない
 * （`transform 0.4s cubic-bezier(...)` / `all var(--wim-duration-base) ...` など）。
 * 関数記法・単位付き数値・CSS 変数のいずれかを含むものは値とみなす。
 */
const LOOKS_LIKE_CSS = /var\(|[a-z-]+\([^)]*\)|\b\d+(\.\d+)?(px|s|ms|deg|%|em|rem|vh|vw)\b/;
const TEXT_PROPS =
  "(?:aria-label|alt|placeholder|title|label|description|content|caption|message|helperText|emptyText|loadingText|emptyMessage)";

const results = [];

for (const file of files) {
  if (!fs.existsSync(file)) continue;
  const lines = fs.readFileSync(file, "utf8").split("\n");
  let ignoreBlock = false;

  lines.forEach((line, i) => {
    if (line.includes("i18n-ignore-start")) { ignoreBlock = true; return; }
    if (line.includes("i18n-ignore-end")) { ignoreBlock = false; return; }
    if (ignoreBlock) return;
    if (line.includes("i18n-ignore")) return;
    if (i > 0 && lines[i - 1].includes("i18n-ignore-next-line")) return;
    // コメント行と型定義行（`"asc" | "desc"` のようなユニオン）は対象外
    if (/^\s*(\/\/|\/?\*)/.test(line)) return;
    if (/^\s*\w+\??:\s*.*\|/.test(line)) return;

    // 1) テキスト系 prop の生文字列
    const propRe = new RegExp(`\\b${TEXT_PROPS}="([^"]*[A-Za-z]{2,}[^"]*)"`, "g");
    let pm;
    while ((pm = propRe.exec(line)) !== null) {
      if (!IGNORE_VALUE.test(pm[1]) && !LOOKS_LIKE_CSS.test(pm[1])) {
        results.push({ file, line: i + 1, kind: "prop", text: pm[0].slice(0, 80) });
      }
    }

    // 2) JSX の生テキスト子要素（2 語以上）
    const childRe = />([^<>{}`]*[A-Za-z]{2,}\s+[A-Za-z][^<>{}`]*)</g;
    let cm;
    while ((cm = childRe.exec(line)) !== null) {
      const v = cm[1].trim();
      if (v && !IGNORE_VALUE.test(v) && !LOOKS_LIKE_CSS.test(v)) {
        results.push({ file, line: i + 1, kind: "child", text: v.slice(0, 80) });
      }
    }

    // 3) `&&` / `?:` の右辺に置かれた文字列リテラル。
    //    `DataGrid` の `{hasMore && "Loading more..."}` がこの形だった。
    //    文の途中に見える英語（2 語以上、または 3 文字以上 + 句読点）を拾う。
    const exprRe = /(?:&&|\?|:)\s*"([^"]*[A-Za-z]{2,}[^"]*)"/g;
    let em;
    while ((em = exprRe.exec(line)) !== null) {
      const v = em[1];
      const looksLikeSentence = /\s/.test(v.trim()) || /[.!?…]/.test(v);
      if (looksLikeSentence && !IGNORE_VALUE.test(v) && !LOOKS_LIKE_CSS.test(v)) {
        results.push({ file, line: i + 1, kind: "expr", text: `"${v}"`.slice(0, 80) });
      }
    }
  });
}

/**
 * ラチェット。減らしたらこの値を下げてコミットする。**増やすことは許さない。**
 * 内訳（2026-08-01）: QueryBuilder 20（演算子ラベル）/ PhoneInput 4（国名と
 * "Select country"）/ Carousel 2（DEFAULT_LABELS）/ GanttChart 1。
 * いずれも**英語のフォールバックが UI に出る**形なので、本来は t() に通したい。
 */
const BASELINE = 27;

const scope = probeFiles.length > 0 ? `${probeFiles.length} probe file(s)` : `${files.length} files`;
console.log(`--- src の生 UI 文字列 (${scope}) ---\n`);

for (const r of results) {
  console.log(`  ${path.relative(".", r.file).replace(/\\/g, "/")}:${r.line}  [${r.kind}]  ${r.text}`);
}

// probe（過去のコミットを流し込む受け入れ条件の検証）は 1 件でも鳴らす。
if (probeFiles.length > 0) {
  console.log(`\n${results.length} 件検出。`);
  process.exit(results.length > 0 ? 1 : 0);
}

console.log(`\nsrc の生 UI 文字列: ${results.length} 件（baseline: ${BASELINE}）`);

if (results.length > BASELINE) {
  console.error(
    "\n✗ 増えている。`useWimTranslation()` の `t()` と型付きキー（`WimI18nKey`）に通すこと。" +
      "\n  固有名詞・トークン名など意図的な英語なら `i18n-ignore-next-line` で逃がす（理由をコメントに書く）。",
  );
  process.exit(1);
}

if (results.length < BASELINE) {
  console.log(
    `  減ったので scripts/check-src-hardcoded.js の BASELINE を ${results.length} に下げてコミットしてください。`,
  );
}

console.log("✓ baseline を超えていません。");
