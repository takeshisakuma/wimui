#!/usr/bin/env node
/**
 * プリセットのアクセントが、既定の `primary`（light / dark）とも、ほかのプリセットとも
 * 見分けられる色かを測る。
 *
 * **既定とプリセットが同じ色になると、プリセットの片方の軸が黙って消える。**
 * 2026-11-21、別の AI が既定の `primary` を `sf20` にしたが、それは Soft プリセットの
 * アクセントと同じ値だった。Soft は角丸だけのプリセットになり、Minimal の
 * 「既定のアクセントを保つ」も意味が変わった。`check:contrast` などは「色が読めるか」
 * しか見ないので、どの色相でも通る。生成スクリプトはプリセット側の参照が実在するかしか
 * 見ていなかった。
 *
 * **生成物ではなく元の JSON を読む。** `_css-vars*.scss` は `tokens:build` を流すまで
 * 古いので、lint-staged で `semantic.json` だけ変えた瞬間に古い値と比べて緑になる。
 * 読めない参照（`{pccs.x}` と hex 以外）は、黙って飛ばさず落とす。
 *
 * Usage:
 *   node scripts/check-preset-accents.js
 *   npm run prove:preset-accents
 */

import fs from 'node:fs';
import path from 'node:path';

import { parseColor, perceptualDistance } from './lib/color.js';

/**
 * 同じ色・近すぎる色とみなす OKLab 距離。`perceptualDistance` の「かろうじて分かる」目安
 * 0.02 の 2.5 倍。アクセントは画面の中で 1 色だけ立つ色なので、並べてやっと分かる差では
 * プリセットを切り替えた意味が無い。実測 2026-11-22: いちばん近い組は既定（v16）と
 * Soft（sf20）で 0.085。
 */
const MIN_DISTANCE = 0.05;

const ROOT = process.cwd();
const readJSON = (p) => JSON.parse(fs.readFileSync(path.join(ROOT, p), 'utf8'));

const pccs = readJSON('tokens/color/base.json').pccs;
const light = readJSON('tokens/color/semantic.json').wim.color;
const dark = readJSON('tokens/themes/dark.json').wim.color;

const unreadable = [];

function resolve(value, where) {
  const ref = typeof value === 'string' && value.match(/^\{pccs\.([\w-]+)\}$/);
  const hex = ref ? pccs[ref[1]]?.value : value;
  const color = typeof hex === 'string' && hex.startsWith('#') ? parseColor(hex) : null;
  if (!color) unreadable.push(`${where}: ${JSON.stringify(value)}`);
  return color && { hex, color };
}

const candidates = [
  { name: '既定の primary（light）', ...resolve(light.primary?.value, 'tokens/color/semantic.json primary') },
  { name: '既定の primary（dark）', ...resolve((dark.primary ?? light.primary)?.value, 'tokens/themes/dark.json primary') },
];

const presetsDir = path.join(ROOT, 'tokens/presets');
for (const file of fs.readdirSync(presetsDir).filter((f) => f.endsWith('.json')).sort()) {
  const preset = readJSON(`tokens/presets/${file}`);
  if (!preset.accent) continue; // アクセントを持たないプリセット（Minimal）は既定を継ぐ
  candidates.push({
    name: `プリセット ${file.replace(/\.json$/, '')}`,
    preset: true,
    ...resolve(preset.accent, `tokens/presets/${file} accent`),
  });
}

console.log('--- check:preset-accents（プリセットのアクセントが既定とも互いとも見分けられるか） ---\n');

const failures = [];
const readable = candidates.filter((c) => c.color);
for (let i = 0; i < readable.length; i++) {
  for (let j = i + 1; j < readable.length; j++) {
    const a = readable[i];
    const b = readable[j];
    if (!a.preset && !b.preset) continue; // 既定の light と dark は同じ色でよい
    const d = perceptualDistance(a.color, b.color);
    const ok = d >= MIN_DISTANCE;
    console.log(`${ok ? 'OK' : 'NG'}  ${d.toFixed(3)}  ${a.name} ${a.hex} / ${b.name} ${b.hex}`);
    if (!ok) failures.push(`${a.name} ${a.hex} と ${b.name} ${b.hex} の距離 ${d.toFixed(3)}（下限 ${MIN_DISTANCE}）`);
  }
}

if (unreadable.length > 0) {
  console.error(`\n✗ 読めない値が ${unreadable.length} 件あります（{pccs.x} か hex で書いてください）:`);
  for (const u of unreadable) console.error(`  - ${u}`);
}
if (failures.length > 0) {
  console.error(`\n✗ 見分けられないアクセントが ${failures.length} 組あります:`);
  for (const f of failures) console.error(`  - ${f}`);
  console.error('\n  既定の primary を変えるなら、同じ色のプリセットのアクセントも選び直してください。');
}
if (unreadable.length > 0 || failures.length > 0) process.exit(1);

console.log(`\n✓ ${readable.length} 色（プリセット ${readable.filter((c) => c.preset).length}）はすべて見分けられます。`);
