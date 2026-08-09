#!/usr/bin/env node
/**
 * `--wim-color-<intent>-subtle` が、実際に置かれる面に対して見えるかを測る（T102）。
 *
 * **これらのトークンは `check:contrast` の対象外だった。** あちらが見るのは
 * intents SSOT の `base` / `on` / `text` / `subtle` の 4 ロールで、
 * `semantic.json` が定義する `*-subtle` トークン群は誰も測っていなかった。
 *
 * **最悪値ではなく現実的な親で測る。** 起票時は 8 サーフェスの最悪値で見て
 * 「primary 0.0054・他 0.0133 でどちらも下限割れ」と書いたが、これは粗すぎた。
 * 用途ごとに親は決まっているので、`surface` と `surface-app` に絞ると像が変わる
 * （実測 2026-08-09: 下限を割るのは **dark の primary-subtle** が主で、他は OK か際どい程度）。
 *
 * **枠への流用は別枠で見る。** 塗り用の淡いトークンを `border-color` に使うと、
 * 面として既に見えない濃さの線を引くことになる。さらに背景と枠に同じトークンを
 * 使っている箇所は、**枠が自分の背景に対して距離 0＝定義上まったく見えない**。
 */

import fs from 'node:fs';
import path from 'node:path';

import { composite, perceptualDistance } from './lib/color.js';
import { readThemes, resolveColorToken as resolve } from './lib/design-tokens.js';

const FLOOR = 0.015; // check-contrast.js の FILL_MIN と同じ
/**
 * **下限だけでは足りない。** 元の欠陥は両側から出ていた ── 一律のアルファでは
 * hue ごとに効きが違うため、`info-subtle` が 0.0188 で消えかけている一方
 * `warning-subtle` は 0.0955 と 5 倍濃く、`danger-subtle` の面だけが強く見えていた。
 * 下限しか見ないガードは後者を通すので、**上限とばらつき比も測る**。
 */
const CEILING = 0.05;
const MAX_SPREAD = 2.5; // 実測 2026-08-09 時点は 1.75 倍（0.0222〜0.0388）
const PARENTS = ['surface', 'surface-app'];
const COMPONENT_DIR = 'src/components';

const TOKENS = ['primary-subtle', 'danger-subtle', 'info-subtle', 'success-subtle', 'warning-subtle', 'neutral-subtle'];

const failures = [];
const rows = [];

for (const token of TOKENS) {
  for (const [theme, vars] of readThemes()) {
    const c = resolve(vars, token);
    if (!c) {
      console.error(`✗ --wim-color-${token} を解決できません（${theme}）。`);
      process.exit(1);
    }
    for (const parentName of PARENTS) {
      const parent = resolve(vars, parentName);
      if (!parent) continue;
      const d = perceptualDistance(composite(c, parent), parent);
      rows.push({ token, theme, parentName, d });
      if (d < FLOOR) failures.push({ token, theme, parentName, d, why: `下限 ${FLOOR} 割れ＝面が見えない` });
      else if (d > CEILING) failures.push({ token, theme, parentName, d, why: `上限 ${CEILING} 超え＝subtle が強すぎる` });
    }
  }
}

/** 塗り用トークンを枠に使っている箇所を拾う。 */
const walk = (dir, out = []) => {
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, e.name);
    if (e.isDirectory()) walk(p, out);
    else if (e.name.endsWith('.module.scss')) out.push(p);
  }
  return out;
};

const borderMisuse = [];
for (const file of walk(COMPONENT_DIR)) {
  const src = fs.readFileSync(file, 'utf8');
  const lines = src.split('\n');
  lines.forEach((line, i) => {
    const m = line.match(/border[a-z-]*:\s*[^;]*var\(--wim-color-([a-z]+-subtle)\)/);
    if (!m || m[1].startsWith('surface')) return;
    // 同じルール内で同じトークンを background にも使っていれば「自分の背景と同色」
    const around = lines.slice(Math.max(0, i - 4), i + 4).join('\n');
    const sameAsOwnBg = new RegExp(`background[a-z-]*:\\s*var\\(--wim-color-${m[1]}\\)`).test(around);
    borderMisuse.push({ file: file.replace(/\\/g, '/'), line: i + 1, token: m[1], sameAsOwnBg });
  });
}

console.log('--- check:subtle-tokens（*-subtle が置かれる面で見えるか） ---\n');
console.log('トークン            テーマ  親              知覚距離  判定');
for (const r of rows) {
  const bad = failures.find((f) => f === r || (f.token === r.token && f.theme === r.theme && f.parentName === r.parentName));
  console.log(
    `${r.token.padEnd(20)}${r.theme.padEnd(8)}${r.parentName.padEnd(16)}${r.d.toFixed(4).padStart(8)}  ${bad ? bad.why : 'OK'}`,
  );
}

const lo = Math.min(...rows.map((r) => r.d));
const hi = Math.max(...rows.map((r) => r.d));
const spread = hi / lo;
console.log(`\nばらつき: ${lo.toFixed(4)} 〜 ${hi.toFixed(4)} = ${spread.toFixed(2)} 倍（上限 ${MAX_SPREAD} 倍）`);
if (spread > MAX_SPREAD) {
  failures.push({
    token: '(全体)',
    theme: '-',
    parentName: '-',
    d: spread,
    why: `intent 間のばらつきが ${spread.toFixed(2)} 倍＝同じ "subtle" が intent ごとに違う濃さに見える`,
  });
}

if (borderMisuse.length > 0) {
  console.log(`\n塗り用トークンを枠に使っている箇所: ${borderMisuse.length} 件`);
  for (const b of borderMisuse) {
    console.log(`  ${b.file}:${b.line}  ${b.token}${b.sameAsOwnBg ? '  ← 背景と同色＝枠は見えない' : ''}`);
  }
}

const total = failures.length + borderMisuse.length;
if (total === 0) {
  console.log('\n✓ 下限割れも枠への流用もありません。');
  process.exit(0);
}

const count = (needle) => failures.filter((f) => f.why.includes(needle)).length;
console.error('\n✗ 検出:');
for (const [label, n] of [
  [`下限 ${FLOOR} 割れ（面が見えない）`, count('下限')],
  [`上限 ${CEILING} 超え（subtle が強すぎる）`, count('上限')],
  ['intent 間のばらつき超過', count('ばらつき')],
  ['塗り用トークンを枠に使用', borderMisuse.length],
]) {
  if (n > 0) console.error(`  ${label}: ${n} 件`);
}
console.error('\n  塗りは各テーマ・各 intent で知覚距離が揃うアルファへ、');
console.error('  枠は枠用のトークン（border / border-secondary / line）へ寄せること。');
process.exit(1);
