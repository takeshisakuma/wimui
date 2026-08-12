#!/usr/bin/env node
/**
 * check:field-roots — `FieldTemplate` に包まれる部品の根が、**黙って親いっぱいに
 * 伸びない**ことを保証する（T125）。
 *
 * `FieldTemplate` の `.content` は flex の縦並びなので、その子（部品の根）は
 * flex アイテムになる。**flex アイテムの `display: inline-*` は `flex` /
 * `block` へ blockify されて黙って捨てられ**、既定の `align-items: stretch` で
 * 親いっぱいに引き伸ばされる。つまり `display: inline-flex`（＝内容幅に縮む
 * 意図）だけを書いた根は、**書いた意図と逆の結果**になる。
 *
 * 実測（T125・1280px の親 1260px）: `SignaturePad` の根は 1152px（`max-width:
 * 90vw` だけが効いている状態）まで伸び、`width={400}` の canvas の右端から
 * **690px 離れたところに `Clear` ボタンが座っていた**。`Rating` の根は 1260px で、
 * 星の右に押しても何も起きない空白が広がっていた。
 *
 * **どのガードも見ていなかった。** `check:shrinkable-roots` は**逆向き**の事故
 * （`width: 100%` ＋ `min-width: 0` で 1 文字幅まで潰れる）を見るもので、
 * 伸びる側は対象外。単体ストーリーも `layout: "centered"` で枠が内容とほぼ同じ
 * 幅だったため、VRT にも a11y にも映らなかった。
 *
 * 判定: `<FieldTemplate` を描く TSX の隣の `*.module.scss` で、**`.root` の直下の
 * 宣言**に `display: inline-*` があるのに `width` が無いものを落とす。
 * `width: fit-content`（`ToggleGroup` と `FieldTemplate` の色欄で使っている手）か、
 * 意図的に広げるなら `width: 100%` を明示すること。**どちらを選んだのかが
 * 読める状態にするのがこのガードの目的**で、`inline-*` の一行に頼らせない。
 *
 * `align-self: flex-start` でも幅は直るが**勧めない** ── 行方向の flex 親
 * （`Group align="center"` など）に置いたときに交差軸の揃えまで変えてしまう。
 *
 * Usage: node scripts/check-field-roots.js
 * 引数は取らない（lint-staged から部分集合を渡されても全量を見る）。
 */
import fs from "node:fs";
import path from "node:path";
import { globSync } from "glob";

/** `.root { … }` の**直下の宣言だけ**を取り出す（入れ子は落とす）。 */
function rootDeclarations(source) {
  const start = source.search(/^\s*\.root\s*\{/m);
  if (start === -1) return null;

  const open = source.indexOf("{", start);
  let depth = 0;
  let end = -1;
  for (let i = open; i < source.length; i++) {
    if (source[i] === "{") depth++;
    else if (source[i] === "}") {
      depth--;
      if (depth === 0) {
        end = i;
        break;
      }
    }
  }
  if (end === -1) return null;

  const body = source.slice(open + 1, end);

  // 入れ子（`&.disabled { … }` / `@media { … }` など）を取り除く
  let flat = "";
  depth = 0;
  for (const char of body) {
    if (char === "{") depth++;
    else if (char === "}") depth--;
    else if (depth === 0) flat += char;
  }
  return flat;
}

const files = globSync("src/components/**/*.tsx", { posix: true }).filter(
  (f) => !f.endsWith(".test.tsx"),
);

const problems = [];
let checked = 0;

for (const file of files) {
  const source = fs.readFileSync(file, "utf8");
  if (!/<FieldTemplate[\s>]/.test(source)) continue;

  const dir = path.dirname(file);
  const styles = globSync(`${dir}/*.module.scss`, { posix: true });
  if (styles.length === 0) continue;

  for (const style of styles) {
    const declarations = rootDeclarations(fs.readFileSync(style, "utf8"));
    if (declarations === null) continue;
    checked++;

    const inline = declarations.match(/display:\s*(inline-[a-z]+)/);
    if (!inline) continue;
    if (/(^|\s|;)width:/.test(declarations)) continue;

    problems.push({ style, display: inline[1] });
  }
}

console.log("--- check:field-roots（field の中で根が黙って伸びないか） ---\n");
console.log(`FieldTemplate に包まれる根: ${checked} 件を照合\n`);

if (checked === 0) {
  console.error("✗ 対象が 1 件も見つからない（走査が成立していない）。");
  process.exit(1);
}

for (const p of problems) {
  console.error(
    `  ✗ ${p.style}: .root が \`display: ${p.display}\` だけで幅を決めている`,
  );
}

if (problems.length > 0) {
  console.error(
    "\n✗ `FieldTemplate` の `.content` は flex の縦並びなので、この根は flex アイテムになる。\n" +
      "  **`display: inline-*` は blockify されて捨てられ**、`align-items: stretch` で\n" +
      "  親いっぱいに引き伸ばされる ── 書いた意図と逆の結果になる。\n" +
      "  内容幅に縮めたいなら `width: fit-content`、意図的に広げるなら `width: 100%` を\n" +
      "  **明示すること**（`align-self: flex-start` は行方向の親で交差軸の揃えまで変える）。",
  );
  process.exit(1);
}

console.log("✓ 幅の決め方はどれも明示されています。");
