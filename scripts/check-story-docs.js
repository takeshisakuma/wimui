#!/usr/bin/env node
/**
 * Guard: **書いたのに docs ページに出ないストーリーが増えないか**（T224）。
 *
 * ストーリーは 2 つの場所に出る ── サイドバーの独立エントリと、その部品の
 * docs ページ（MDX）。**サイドバーには出るが docs ページには出ない**という
 * 状態は、どのガードも見ていなかった。2026-08-23 に数えたら **188 件**が
 * この状態で、`LoadingOverlay` は 9 件中 6 件が docs ページに無かった。
 *
 * `RULES.md` 459 行目「ストーリー掲載時の注意点（重複排除）」は
 * `<Stories />` と個別 `<Canvas>` の**併用による重複**を戒めているが、
 * **どちらも無い場合**には触れていない。掲載漏れは静かに増える。
 *
 * **このガードは「載せろ」とは言わない。** T224 の方針（①`<Stories />` を足す
 * ②個別に `<Canvas>` で載せる ③サイドバーで足りるものは載せないと明文化する）は
 * まだ決まっていない。決まるまでの間、**意図せず増えたときに気付ける**ように
 * 現状を凍結するだけ。方針が ③ になっても、この数え方はそのまま使える。
 *
 * 掲載と数えるもの（**実際にそのページへ描画される経路だけ**）:
 *   - `<Canvas of={Stories.Name} />` / `<Story of={Stories.Name} />`
 *   - `<Stories />` … 既定 `includePrimary = true` なので**全部**出る
 *     （`includePrimary={false}` のときだけ先頭が外れる。実装を
 *     `node_modules/@storybook/addon-docs/dist/blocks.js` で確認した）
 *   - `<Primary />` … 先頭のストーリーが出る
 *
 * **`<Primary />` を数えるかどうかで件数が 26 件変わる**（188 ⇄ 214）。
 * T224 の起票時の 215 件は `<Primary />` を掲載と数えていない値で、
 * **`<Primary />` は実際にそのストーリーを描画する**のでここでは掲載と数える。
 * 数え方が違えば数も違う ── 起票時の数字と突き合わせるときはここを見ること。
 *
 * **走査対象は `.storybook/main.ts` の glob と一致していなければ意味がない。**
 * `docs/**\/*.mdx` を見落とすと `stories/Token/Presets.stories.tsx` が
 * 「docs ページが無い」に化ける（実際には `docs/Presets.mdx` に載っている）。
 * glob が変わったらこのガードを落として気付かせる。
 *
 * **`tags: ["autodocs"]` は 1 件も生きていない。** 12 ファイルに文字列としては
 * 在るが**すべてコメントアウト**されている。コメントを外さずに数えると
 * `Image` の 5 件が「自動 docs ページに出ている」ことにされて消える
 * （最初の版が実際にそうなっていた）。**書いてあることと効いていることは別。**
 *
 * Usage:
 *   node scripts/check-story-docs.js          # ラチェット（CI で走る）
 *   node scripts/check-story-docs.js --list   # 掲載漏れをファイル別に並べる
 */
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, "..");
const BASELINE = path.join(__dirname, "story-docs-baseline.json");

/**
 * `.storybook/main.ts` の `stories` に書かれているべき glob。
 * ここを増やしたら、下の `SCAN_DIRS` も一緒に増やすこと。
 */
const EXPECTED_GLOBS = [
  "../docs/**/*.mdx",
  "../stories/**/*.mdx",
  "../stories/**/*.stories.@(js|jsx|mjs|ts|tsx)",
];
const SCAN_DIRS = ["docs", "stories"];

function verifyGlobs() {
  const main = fs.readFileSync(path.join(root, ".storybook/main.ts"), "utf8");
  const block = /stories:\s*\[([\s\S]*?)\]/.exec(main);
  if (!block) return ["`.storybook/main.ts` の `stories:` 配列が読めませんでした。"];
  const found = [...block[1].matchAll(/["']([^"']+)["']/g)].map((m) => m[1]);
  const added = found.filter((g) => !EXPECTED_GLOBS.includes(g));
  const removed = EXPECTED_GLOBS.filter((g) => !found.includes(g));
  const problems = [];
  if (added.length) problems.push(`Storybook が読む glob が増えています: ${added.join(" / ")}`);
  if (removed.length) problems.push(`想定していた glob がありません: ${removed.join(" / ")}`);
  return problems;
}

function walk(dir, out = []) {
  const abs = path.join(root, dir);
  if (!fs.existsSync(abs)) return out;
  for (const e of fs.readdirSync(abs, { withFileTypes: true })) {
    const rel = `${dir}/${e.name}`;
    if (e.isDirectory()) walk(rel, out);
    else out.push(rel);
  }
  return out;
}

/** 行コメント / ブロックコメントを落とす（`// tags: ["autodocs"]` を拾わないため）。 */
const stripComments = (src) =>
  src
    .split("\n")
    .map((l) => l.replace(/^\s*\/\/.*$/, ""))
    .join("\n")
    .split(/\/\*[\s\S]*?\*\//)
    .join("");

const read = (rel) => fs.readFileSync(path.join(root, rel), "utf8");

const files = SCAN_DIRS.flatMap((d) => walk(d));
const storyFiles = files.filter((f) => /\.stories\.(js|jsx|mjs|ts|tsx)$/.test(f)).sort();
const mdxFiles = files.filter((f) => f.endsWith(".mdx")).sort();

/** stories ファイル → その中で `export const` されている名前（定義順）。 */
const storyExports = new Map();
for (const f of storyFiles) {
  const names = [];
  for (const line of stripComments(read(f)).split("\n")) {
    const m = /^export const ([A-Za-z0-9_$]+)/.exec(line);
    if (m) names.push(m[1]);
  }
  storyExports.set(f, names);
}

/** MDX 側の掲載状況。 */
const onPage = new Map(); // stories ファイル → 個別に載っている名前
const allShown = new Set(); // `<Stories />` で全部出る
const skipsFirst = new Set(); // `<Stories includePrimary={false} />` かつ `<Primary />` 無し
const firstShown = new Set(); // `<Primary />` で先頭が出る
const hasPage = new Set(); // docs ページに載っている（＝ページが在る）

const addShown = (f, name) => {
  if (!onPage.has(f)) onPage.set(f, new Set());
  onPage.get(f).add(name);
};

for (const mdx of mdxFiles) {
  const src = read(mdx);
  const dir = path.posix.dirname(mdx);

  // import * as Alias from "./Foo.stories";
  const alias = new Map();
  let m;
  const importRe = /import\s+\*\s+as\s+([A-Za-z0-9_$]+)\s+from\s+["']([^"']+)["']/g;
  while ((m = importRe.exec(src))) {
    if (!/\.stories$/.test(m[2])) continue;
    const base = path.posix.normalize(path.posix.join(dir, m[2]));
    const hit = storyFiles.find((f) => f.startsWith(`${base}.`));
    if (hit) alias.set(m[1], hit);
  }

  // <Canvas of={Alias.Name} /> / <Story of={Alias.Name} />
  const canvasRe = /<(?:Canvas|Story)\s+of=\{([A-Za-z0-9_$]+)\.([A-Za-z0-9_$]+)\}/g;
  while ((m = canvasRe.exec(src))) {
    const f = alias.get(m[1]);
    if (!f) continue;
    addShown(f, m[2]);
    hasPage.add(f);
  }

  // <Stories /> と <Primary /> は <Meta of={Alias}> が指す 1 本に効く
  const stories = /<Stories\b/.test(src);
  const includePrimaryFalse = /<Stories[^>]*includePrimary=\{false\}/.test(src);
  const primary = /<Primary\b/.test(src);
  const metaRe = /<Meta\s+of=\{([A-Za-z0-9_$]+)\}/g;
  while ((m = metaRe.exec(src))) {
    const f = alias.get(m[1]);
    if (!f) continue;
    hasPage.add(f);
    if (stories) {
      allShown.add(f);
      if (includePrimaryFalse && !primary) skipsFirst.add(f);
    }
    if (primary) firstShown.add(f);
  }
}

/** 掲載漏れ（docs ページは在るのに、そのストーリーだけ出ていない）。 */
const missing = [];
/** docs ページ自体が無い stories ファイル。 */
const pageless = [];

for (const [f, names] of storyExports) {
  if (!hasPage.has(f)) {
    if (names.length) pageless.push(f);
    continue;
  }
  names.forEach((name, i) => {
    if (allShown.has(f) && !(i === 0 && skipsFirst.has(f))) return;
    if (onPage.get(f)?.has(name)) return;
    if (i === 0 && firstShown.has(f)) return;
    missing.push(`${f}::${name}`);
  });
}
missing.sort();
pageless.sort();

if (process.argv.includes("--list")) {
  const perFile = new Map();
  for (const k of missing) {
    const f = k.split("::")[0];
    perFile.set(f, [...(perFile.get(f) || []), k.split("::")[1]]);
  }
  const rows = [...perFile.entries()].sort((a, b) => b[1].length - a[1].length || a[0].localeCompare(b[0]));
  console.log(`docs ページに出ていないストーリー ${missing.length} 件 / ${rows.length} ファイル\n`);
  for (const [f, names] of rows) {
    console.log(`  ${String(names.length).padStart(2)}  ${f.split("/").pop()}  ${names.join(", ")}`);
  }
  console.log(`\ndocs ページ自体が無い stories ファイル ${pageless.length} 件:`);
  for (const f of pageless) console.log(`  - ${f}`);
  process.exit(0);
}

const baseline = JSON.parse(fs.readFileSync(BASELINE, "utf8"));
const known = new Set(baseline.known);
const knownPageless = new Set(baseline.knownPageless);

const globProblems = verifyGlobs();
const added = missing.filter((k) => !known.has(k));
const fixed = [...known].filter((k) => !missing.includes(k)).sort();
const addedPageless = pageless.filter((f) => !knownPageless.has(f));
const fixedPageless = [...knownPageless].filter((f) => !pageless.includes(f)).sort();

console.log("--- check:story-docs（書いたのに docs ページに出ないストーリー）---\n");
console.log(
  `stories ファイル ${storyFiles.length} / MDX ${mdxFiles.length} / story export ${[...storyExports.values()].reduce((s, v) => s + v.length, 0)}`,
);
console.log(
  `docs ページに出ていない ${missing.length} 件（凍結 ${known.size}）/ docs ページ自体が無い ${pageless.length} ファイル（凍結 ${knownPageless.size}）`,
);

let failed = false;

if (globProblems.length) {
  failed = true;
  console.error("\n✗ Storybook が読む対象と、このガードが走査する対象がずれています:");
  for (const p of globProblems) console.error(`  - ${p}`);
  console.error(
    "\n  `scripts/check-story-docs.js` の `EXPECTED_GLOBS` / `SCAN_DIRS` を合わせてください。\n" +
      "  ずれたままだと、載っているものを「載っていない」と数えます。",
  );
}

if (added.length) {
  failed = true;
  console.error(`\n✗ docs ページに出ないストーリーが増えています（${added.length} 件）:`);
  for (const k of added) console.error(`  - ${k}`);
  console.error(
    "\n  その MDX に `<Canvas of={…} />` を足すか、`<Stories />` に切り替えてください。\n" +
      "  **意図してサイドバーだけに置く**なら `scripts/story-docs-baseline.json` の\n" +
      "  `known` に理由つきで足すこと（T224 の方針が決まるまでの暫定）。",
  );
}

if (fixed.length) {
  failed = true;
  console.error(`\n✗ 載ったのに凍結一覧に残っています（${fixed.length} 件）:`);
  for (const k of fixed) console.error(`  - ${k}`);
  console.error(
    "\n  `scripts/story-docs-baseline.json` の `known` から外してください。\n" +
      "  台帳が現実より大きいままだと、残件の数が嘘になります。",
  );
}

if (addedPageless.length) {
  failed = true;
  console.error(`\n✗ docs ページを持たない stories ファイルが増えています（${addedPageless.length} 件）:`);
  for (const f of addedPageless) console.error(`  - ${f}`);
  console.error(
    "\n  部品のストーリーなら MDX を書いてください。`stories/Patterns/**` のように\n" +
      "  **意図して docs ページを持たない**ものは `knownPageless` へ足すこと。",
  );
}

if (fixedPageless.length) {
  failed = true;
  console.error(`\n✗ docs ページができたのに凍結一覧に残っています（${fixedPageless.length} 件）:`);
  for (const f of fixedPageless) console.error(`  - ${f}`);
  console.error("\n  `knownPageless` から外してください。");
}

if (failed) process.exit(1);

console.log(
  `\n✓ 掲載漏れは増えていません（残り ${missing.length} 件 — T224 の方針が決まるまで凍結）。`,
);
