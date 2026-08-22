#!/usr/bin/env node
/**
 * ドキュメントの本文に書かれたトークン名が実在するか。
 *
 * `check-scss-token-refs.js` は **`var(--wim-…)` という書き方**を見る。だから
 * SCSS と TSX のインライン style は守られているが、**MDX の本文とロケールの
 * 文言に素で書かれたトークン名は誰も見ていなかった**。ここは利用者が読んで
 * そのままコピーする場所なので、実在しない名前は「効かない CSS」を配って
 * いるのと同じである。
 *
 * 2026-08-22 の初回走査で 4 種類が落ちていた:
 *
 *   `--wim-color-intent-danger` / `--wim-color-intent-success`
 *       … `PasswordStrength` の Tokens 節（en / ja / pt）。実装は
 *         `--wim-color-danger` / `-warning` / `-success`
 *   `--wim-duration-normal`
 *       … `CodeBlock` の Motion 節（en / ja / pt）。実装は `--wim-duration-fast`
 *   `--wim-color-text-default`
 *       … `Span` の Tokens 節（**ja だけ**。en は具体名を挙げていない）
 *   `--wim-color-decoration-highlight-color`
 *       … `docs/TypographyTokens.mdx`。実在するのは
 *         `--wim-comp-decoration-highlight-color` で、`DecorationVisualizer` は
 *         これを `background: var(…)` に流していた ＝ **見本の色が出ていなかった**
 *
 * **判定は「族」ではなく「実在するか」**。`check-scss-token-refs.js` が族で
 * 絞っているのは、SCSS には**意図的な拡張点**（`var(--wim-field-bg, …)` の
 * ようなコンポーネント固有のフック）が混ざるからである。本文にはその事情が
 * 無い ── 書いてある名前は読み手がそのまま使う名前なので、実在しなければ誤り。
 *
 * そのぶん対象は本文に絞る（MDX とロケール JSON のみ。TSX は上のガードの担当）。
 *
 * Usage: node scripts/check-doc-token-refs.js
 */
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, "..");

/** 実在するトークン = 生成物 + src の SCSS が宣言しているもの（`--wim-comp-*` を含む）。 */
function readDeclared() {
  const names = new Set();
  const walk = (dir) => {
    for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
      const p = path.join(dir, e.name);
      if (e.isDirectory()) walk(p);
      else if (/\.(scss|css)$/.test(e.name)) {
        for (const m of fs.readFileSync(p, "utf8").matchAll(/(--wim-[a-zA-Z0-9-]+)\s*:/g)) names.add(m[1]);
      }
    }
  };
  walk(path.join(root, "src"));
  return names;
}

const declared = readDeclared();
// 自己検証: 走査が壊れると「全部実在しない」に化けるので、先に既知の名前で確かめる。
for (const known of ["--wim-color-surface", "--wim-spacing-md", "--wim-font-size-sm", "--wim-comp-decoration-highlight-color"]) {
  if (!declared.has(known)) {
    console.error(`走査が成立していない: ${known} が読めていない（\`npm run tokens:build\` を先に）`);
    process.exit(1);
  }
}

/** 対象: MDX の本文とロケール JSON の文言。生成物のスナップショットは除く。 */
function targets() {
  const out = [];
  const walk = (dir, re) => {
    if (!fs.existsSync(dir)) return;
    for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
      const p = path.join(dir, e.name);
      if (e.isDirectory()) walk(p, re);
      else if (re.test(e.name) && !e.name.startsWith(".")) out.push(p);
    }
  };
  walk(path.join(root, "docs"), /\.mdx$/);
  walk(path.join(root, "stories"), /\.mdx$/);
  walk(path.join(root, "public", "locales"), /\.json$/);
  return out;
}

const bad = [];
for (const file of targets()) {
  const rel = path.relative(root, file).split(path.sep).join("/");
  fs.readFileSync(file, "utf8").split("\n").forEach((line, i) => {
    for (const m of line.matchAll(/--wim-[a-zA-Z0-9-]+/g)) {
      const name = m[0];
      // `--wim-control-padding-x|y-sm|md|lg` のような**まとめ書き**は 1 つの名前ではない
      const after = line[m.index + name.length];
      if (after === "|" || after === "*") continue;
      if (name.endsWith("-")) continue;
      if (declared.has(name)) continue;
      bad.push({ name, rel, line: i + 1, text: line.trim().slice(0, 100) });
    }
  });
}

if (bad.length) {
  console.error(`✗ ${bad.length} 件、本文に書かれたトークンが実在しない:`);
  for (const b of bad) {
    const stem = b.name.replace(/-[a-z0-9]+$/, "");
    const near = [...declared].filter((n) => n.startsWith(stem)).slice(0, 4);
    console.error(`  - ${b.name}  <-  ${b.rel}:${b.line}`);
    console.error(`      ${b.text}`);
    if (near.length) console.error(`      近い名前: ${near.join(", ")}`);
  }
  console.error("\n実装が実際に使っているトークン名に直すこと（本文の名前は読み手がそのままコピーする）。");
  process.exit(1);
}

console.log(`✓ 本文のトークン参照はすべて実在する（${declared.size} トークン / ${targets().length} ファイル）。`);
