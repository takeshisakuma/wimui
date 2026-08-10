#!/usr/bin/env node
/**
 * `color` に渡したリテラルが本当に色になるかを見る。
 *
 * **色を当てる経路は 2 つある。** `Text` / `Spinner` / `Indicator` などは
 * `mappedColors` に載っている値だけ CSS クラスで塗り、それ以外は
 * `getColorValue()` に渡す。`getColorValue` は既知のキーを `var(--wim-color-*)`
 * に直すが、**知らない文字列はそのまま返す**。返った文字列が CSS の色として
 * 不正なら、宣言ごと破棄されて**継承した色が出る**。
 *
 * **壊れても何も赤くならない。** 型は `WimColor`（`LiteralWithAutocomplete`＝
 * 補完付きの任意文字列）なので通り、VRT はその「色が付いていない絵」を正として
 * 撮り、axe は色名を見ない。実測（2026-08-10）: `color="tertiary"` が 15 箇所
 * あって 1 つも色になっていなかった（正しくは `text-tertiary`。
 * `--wim-color-tertiary` というトークンは存在しない）。
 *
 * **片方の経路だけ追うと誤診する。** この検査を書く前、`getColorValue` だけを
 * 追って `Spinner color="neutral"` を「何も塗らない」と誤って結論した。実際は
 * `neutral` は `mappedColors` にあり、クラスで正しく塗られていた。だからここでは
 * 両方の経路を見る。
 */

import fs from 'node:fs';
import path from 'node:path';

const ROOTS = ['src', 'stories', 'sandbox'];

// --- getColorValue が知っているキー ---
const utils = fs.readFileSync('src/utilities/style-utils.ts', 'utf8');
const slice = utils.slice(utils.indexOf('const colorKeys'), utils.indexOf('if (colorKeys.includes'));
const COLOR_KEYS = new Set([...slice.matchAll(/"([^"]+)"/g)].map((m) => m[1]));
const OTHER_KEYS = new Set(['scrollbar-thumb', 'scrollbar-track']);

// --- CSS として素で有効な色 ---
const CSS_WORDS = new Set([
  'currentColor', 'transparent', 'inherit', 'initial', 'unset', 'revert',
  'black', 'white', 'red', 'green', 'blue', 'gray', 'grey', 'orange', 'yellow',
  'purple', 'pink', 'brown', 'cyan', 'magenta', 'lime', 'navy', 'teal', 'olive',
  'maroon', 'silver', 'gold', 'beige', 'coral', 'crimson', 'indigo', 'ivory',
  'khaki', 'lavender', 'plum', 'salmon', 'tan', 'violet', 'wheat',
]);
const isRawCss = (v) =>
  /^#[0-9a-f]{3,8}$/i.test(v) ||
  /^(rgb|rgba|hsl|hsla|oklch|oklab|lab|lch|color)\(/i.test(v) ||
  v.startsWith('var(') ||
  CSS_WORDS.has(v);

const walk = (d, a = []) => {
  if (!fs.existsSync(d)) return a;
  for (const e of fs.readdirSync(d, { withFileTypes: true })) {
    const p = path.join(d, e.name);
    if (e.isDirectory()) walk(p, a);
    else if (/\.tsx?$/.test(e.name)) a.push(p);
  }
  return a;
};

// --- コンポーネントごとの mappedColors（クラスで塗る値）---
const MAPPED = new Map();
for (const f of walk('src/components')) {
  const src = fs.readFileSync(f, 'utf8');
  const m = src.match(/const mappedColors = \[([\s\S]*?)\]/);
  if (!m) continue;
  const name = path.basename(f, '.tsx');
  MAPPED.set(name, new Set([...m[1].matchAll(/"([^"]+)"/g)].map((x) => x[1])));
}

// --- 検査対象は「開いた型」を取るものだけ ---
//
// `ChatAvatar.color` のように **閉じたリテラル union** の prop は TypeScript が
// 既に検証しているので見なくてよい（`"s1" | "s3" | …` は独自語彙で、専用クラスを
// 持ち `getColorValue` を通らない）。素通りが起きるのは `WimColor` のように
// `LiteralWithAutocomplete`＝任意文字列を許す型のときだけ。
const OPEN_COLOR = new Set();
for (const f of walk('src/components')) {
  const src = fs.readFileSync(f, 'utf8');
  if (/\b\w*[Cc]olor\?:[^;]*WimColor/.test(src)) OPEN_COLOR.add(path.basename(f, '.tsx'));
}

const files = ROOTS.flatMap((r) => walk(r)).filter((f) => !/\.test\./.test(f));

const findings = [];
let scanned = 0;
for (const file of files) {
  const src = fs.readFileSync(file, 'utf8');
  // `<Tag …  color="X"` の Tag を拾う（同じ開始タグの中に限る）
  for (const m of src.matchAll(/<([A-Z][\w.]*)((?:\s+[^<>]*?)?)\bcolor="([^"]+)"/g)) {
    const [, tag, , value] = m;
    scanned += 1;
    if (COLOR_KEYS.has(value) || OTHER_KEYS.has(value) || isRawCss(value)) continue;
    const base = tag.split('.').pop();
    if (MAPPED.get(base)?.has(value)) continue; // クラス経路で塗られる
    if (!OPEN_COLOR.has(base)) continue; // 閉じた union は TypeScript が見ている
    findings.push({ file: file.split(path.sep).join('/'), tag, value });
  }
}

console.log('--- check:color-values（色にならない色指定）---\n');
console.log(`走査した色リテラル: ${scanned} 件 / mappedColors を持つコンポーネント: ${MAPPED.size} 件`);

if (findings.length === 0) {
  console.log('\n✓ 解決できない色指定はありません。');
  process.exit(0);
}

const byValue = new Map();
for (const f of findings) {
  if (!byValue.has(f.value)) byValue.set(f.value, []);
  byValue.get(f.value).push(f);
}

console.error(`\n✗ 色にならない指定: ${findings.length} 件\n`);
for (const [value, list] of [...byValue.entries()].sort((a, b) => b[1].length - a[1].length)) {
  console.error(`  "${value}"  ${list.length} 件`);
  for (const f of list) console.error(`      ${f.file}  <${f.tag}>`);
  console.error('');
}
console.error('  どちらの経路でも解決されない値は、そのまま CSS へ渡って宣言ごと破棄されます。');
console.error('  色は付かず継承した色が出るので、画面は壊れず「少し違う」だけになります。');
console.error('  トークン名（`text-tertiary` 等）か、素の CSS 色を指定してください。');
process.exit(1);
