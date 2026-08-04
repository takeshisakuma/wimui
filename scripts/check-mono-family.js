#!/usr/bin/env node
/**
 * Guard: the monospace contract goes through `@include font.mono-family`, always.
 *
 * 等幅には**ソースを読んでも見えない**失敗の仕方が 2 つある。
 *
 * ① トークンを当てたのに子孫に届かない。UA スタイルシートの
 *    `code, pre, kbd, samp { font-family: monospace }` は、作成者の宣言が無い
 *    プロパティに対して生きる＝**親が mono を指定していても子孫の `<code>` には
 *    継承されない**。コンテナの computed は正しく `"Noto Sans Mono"` を返すので、
 *    computed ベースの検査も目視も素通りし、実描画（CDP
 *    `CSS.getPlatformFontsForNode`）を測って初めて出る。2026-07-30 に 3 件出た
 *    （`CodeBlock` の本文が Consolas で 286 グリフ、`Code` の block が 55、
 *    `ErrorBoundary` のスタックトレースが 924）。
 *
 * ② トークンを使わず独自スタックを直書きする。同じページの他の等幅コンポーネントと
 *    **別の書体**になるが、単体で見ている限り等幅なので気付けない。同日 2 件
 *    （`typography/Code` の `ui-monospace…`、`base.scss` の `.wim-t code`）。
 *
 * どちらも「検出する」より「書けなくする」ほうが安い（T48）。`font.mono-family` は
 * トークンの適用と子孫への継承を必ずセットで出すので、mixin を通す限り①は起こらない。
 * このガードは**その迂回路を塞ぐだけ**＝実描画の測定を一切しない静的検査で済む。
 *
 * 検出するもの:
 *   - `--wim-font-family-mono` を `font-family` に直接書いている（mixin を迂回＝①）
 *   - `font-family` に等幅スタックを直書きしている（トークン迂回＝②）
 *
 * 引数は取らず常に全量を読む（lint-staged からファイル名を渡されても無視する）。
 *
 * Usage: node scripts/check-mono-family.js
 */
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, "..");
const SRC = path.join(root, "src");

/** mixin 本体。ここだけがトークンを font-family に書いてよい。 */
const MIXIN_FILE = path.join(SRC, "styles", "_font-mixins.scss");

/** 生成物はトークン定義そのものなので対象外。 */
const SKIP_DIRS = new Set(["generated"]);

const MONO_STACK_HINT =
  /\b(ui-monospace|SFMono-Regular|Menlo|Monaco|Consolas|Liberation Mono|Courier New|Cascadia Code|Fira Code|Noto Sans Mono|monospace)\b/i;

function walk(dir, out = []) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    if (entry.isDirectory()) {
      if (SKIP_DIRS.has(entry.name)) continue;
      walk(path.join(dir, entry.name), out);
    } else if (entry.name.endsWith(".scss")) {
      out.push(path.join(dir, entry.name));
    }
  }
  return out;
}

function main() {
  if (!fs.existsSync(MIXIN_FILE)) {
    console.error(
      `✗ mono-family: ${path.relative(root, MIXIN_FILE)} が無い。` +
        " 等幅の契約を集約する mixin が消えている。",
    );
    process.exit(1);
  }

  const violations = [];
  let scanned = 0;
  let includes = 0;

  for (const file of walk(SRC)) {
    if (path.resolve(file) === path.resolve(MIXIN_FILE)) continue;
    scanned += 1;

    const lines = fs.readFileSync(file, "utf8").split(/\r?\n/);
    const rel = path.relative(root, file).replace(/\\/g, "/");

    // コメントは対象外（説明文に書体名が出る）。`//` だけを剥がしていたので
    // **`/* … */` の中に `font-family: monospace` と書くと落ちていた**（T67）。
    // UA の挙動を説明しようとすると必ずその文字列を書くことになるため、
    // 「なぜ mixin が要るのか」を書き残した人だけが罰される状態だった。
    // 複数行にまたがるので、ファイル単位で状態を持って剥がす。
    let inBlockComment = false;
    const stripComments = (line) => {
      let out = "";
      let rest = line;
      while (rest.length > 0) {
        if (inBlockComment) {
          const end = rest.indexOf("*/");
          if (end === -1) return out;
          rest = rest.slice(end + 2);
          inBlockComment = false;
        } else {
          const start = rest.indexOf("/*");
          if (start === -1) {
            out += rest;
            break;
          }
          out += rest.slice(0, start);
          rest = rest.slice(start + 2);
          inBlockComment = true;
        }
      }
      return out.replace(/\/\/.*$/, "");
    };

    lines.forEach((line, i) => {
      const code = stripComments(line);

      if (/@include\s+[\w.]*mono-family\b/.test(code)) {
        includes += 1;
        return;
      }

      const m = code.match(/(^|[^-\w])font-family\s*:\s*([^;]+)/);
      if (!m) return;
      const value = m[2];

      if (/--wim-font-family-mono/.test(value)) {
        violations.push({
          rel,
          line: i + 1,
          why: "トークンを直接書いている（mixin を迂回すると子孫の <code> に継承されない）",
          text: line.trim(),
        });
      } else if (MONO_STACK_HINT.test(value)) {
        violations.push({
          rel,
          line: i + 1,
          why: "等幅スタックの直書き（他の等幅コンポーネントと別書体になる）",
          text: line.trim(),
        });
      }
    });
  }

  if (violations.length) {
    console.error("✗ mono-family: 等幅の契約が mixin を迂回している:");
    for (const v of violations) {
      console.error(`  - ${v.rel}:${v.line}  ${v.why}`);
      console.error(`      ${v.text}`);
    }
    console.error(
      "\n  `@use \"…/styles/font-mixins\" as font;` して `@include font.mono-family;` に置き換える。\n" +
        "  mixin はトークンの適用と `code, pre, kbd, samp` への継承を必ずセットで出す。\n" +
        "  UA の `code { font-family: monospace }` は親の指定を子に継承させないため、\n" +
        "  トークンだけを当てると**コンテナの computed は正しいのに本文だけ汎用等幅**になる。",
    );
    process.exit(1);
  }

  console.log(
    `✓ mono-family OK (${scanned} SCSS を走査、${includes} 箇所が mixin 経由)。`,
  );
}

main();
