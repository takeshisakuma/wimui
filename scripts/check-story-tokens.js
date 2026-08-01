#!/usr/bin/env node
/**
 * Guard: 合成画面のインライン style が参照するトークンは実在しなければならない。
 *
 * `check-scss-token-refs.js` は **SCSS しか走査しない**。しかし合成画面
 * （`stories/Patterns/**`・`sandbox/**`・docs の MDX）はコンポーネントを介さず
 * `style={{ ... "var(--wim-…)" }}` でトークンを直接参照する。ここに存在しない
 * 名前を書いても、**CSS は宣言ごと無効になるだけで何のエラーも出ない**。
 *
 * 実際に 2 件出荷されていた（2026-08-01・T52）:
 *   - `Page.stories.tsx` の MaintenancePage: `background: var(--wim-color-warning-light)`
 *     — そんなトークンは無い（`-muted` は primary と text にしかない）。結果、
 *     警告色の円が**透明**で描かれていた
 *   - `AI.stories.tsx` のツールバー 2 行: `height: var(--wim-spacing-6xl)`
 *     — spacing は 5xl 止まり。結果、指定した行高が**効いていなかった**
 *
 * **VRT はこれを守れない**。壊れた状態でベースラインを撮っているので、
 * 「いつもどおり」に見えてしまう。型でも lint でも catch できない。
 *
 * ルール: フォールバックの無い `var(--wim-…)` は、どこかで定義されていること。
 * `var(--wim-x, fallback)` は**意図的なテーマフック**なので対象外
 * （例: `--wim-feature-comparison-footer-padding` は既定値つきの拡張点）。
 *
 * 引数は取らず常に全量を読む（部分集合では「どこかで定義されているか」を
 * 判定できないため。lint-staged からファイル名を渡されても無視する）。
 *
 * Usage: node scripts/check-story-tokens.js
 */
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, "..");

/** 参照側（合成画面）。 */
const SCAN = [
  { dir: "stories", exts: [".tsx", ".mdx"] },
  { dir: "sandbox", exts: [".tsx"] },
  { dir: "docs", exts: [".mdx"] },
];

/** 定義側。SCSS のどこで定義されていてもよい（トークン / 制御 / コンポーネント局所）。 */
const DEFINE_DIR = path.join(root, "src");

function walk(dir, exts, out = []) {
  if (!fs.existsSync(dir)) return out;
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, e.name);
    if (e.isDirectory()) walk(p, exts, out);
    else if (exts.some((x) => e.name.endsWith(x))) out.push(p);
  }
  return out;
}

/** `--wim-foo: …` の左辺をすべて集める。 */
function collectDefinitions() {
  const defined = new Set();
  for (const file of walk(DEFINE_DIR, [".scss", ".css"])) {
    const src = fs.readFileSync(file, "utf8");
    for (const m of src.matchAll(/(--wim-[a-zA-Z0-9-]+)\s*:/g)) defined.add(m[1]);
  }
  return defined;
}

/**
 * `var(--x)` / `var(--x, fallback)` を数える。ネストした `var()` も拾えるよう、
 * `var(` の直後の名前だけを見て、次の非空白文字が `,` ならフォールバックありとする。
 */
function* varRefs(src) {
  const re = /var\(\s*(--wim-[a-zA-Z0-9-]+)\s*([,)])/g;
  let m;
  while ((m = re.exec(src))) {
    yield { name: m[1], hasFallback: m[2] === ",", index: m.index };
  }
}

const lineOf = (src, index) => src.slice(0, index).split(/\r?\n/).length;

/**
 * コメント内の言及は参照ではない（「ここには var(--wim-spacing-6xl) と書かれていた」
 * のような由来メモで誤検知しないため）。行数がずれないよう、中身を空白に置き換える。
 * `//` は `https://` を巻き込まないよう、直前が `:` でない場合のみ落とす。
 */
function stripComments(src) {
  return src
    .replace(/\/\*[\s\S]*?\*\//g, (m) => m.replace(/[^\n]/g, " "))
    .replace(/(^|[^:])\/\/[^\n]*/g, (m, p1) => p1 + " ".repeat(m.length - p1.length));
}

function main() {
  const defined = collectDefinitions();
  const violations = [];
  let files = 0;
  let refs = 0;

  for (const { dir, exts } of SCAN) {
    for (const file of walk(path.join(root, dir), exts)) {
      const src = stripComments(fs.readFileSync(file, "utf8"));
      // ファイル自身がインラインで定義しているもの（`"--wim-x": value`）も定義済み扱い。
      const localDefs = new Set(
        [...src.matchAll(/["'](--wim-[a-zA-Z0-9-]+)["']\s*:/g)].map((m) => m[1]),
      );
      files += 1;
      for (const ref of varRefs(src)) {
        refs += 1;
        if (ref.hasFallback) continue;
        if (defined.has(ref.name) || localDefs.has(ref.name)) continue;
        violations.push({
          rel: path.relative(root, file).replace(/\\/g, "/"),
          line: lineOf(src, ref.index),
          name: ref.name,
        });
      }
    }
  }

  if (violations.length) {
    console.error("✗ 合成画面が存在しないトークンを参照している:");
    for (const v of violations) {
      console.error(`  - ${v.rel}:${v.line}  ${v.name}`);
    }
    console.error(
      "\n  存在しない名前を書くと **CSS は宣言ごと無効になるだけ**で、何のエラーも出ない\n" +
        "  （背景が透明になる・高さが効かない、等）。VRT も壊れた状態でベースラインを\n" +
        "  撮っているので守ってくれない。実在するトークンに直すか、意図的な拡張点なら\n" +
        "  `var(--wim-x, 既定値)` とフォールバックを付けること。",
    );
    process.exit(1);
  }

  console.log(
    `✓ story tokens OK (${files} ファイル / ${refs} 参照、未定義の参照なし)。`,
  );
}

main();
