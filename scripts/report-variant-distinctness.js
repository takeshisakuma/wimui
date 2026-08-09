#!/usr/bin/env node
/**
 * variant × intent の 21 セルが互いに見分けられるかを総当たりで測る。
 *
 * **これはガードではなくレポート（常に exit 0）。** T101 ④ に書いたとおり、
 * 「2 つの変種が同じ見た目になった」は機械が拾えていない欠陥の型だが、
 * いきなり閾値で落とすと**意図的に同じにしている組**と区別できず偽陽性だらけになる。
 * まず実態（距離行列）を出して、どこが本当に潰れているかを見るための道具。
 *
 * 測る理由（2026-08-09、T101）: ユーザーが `Audit/IndicatorFamily` を見て
 * 「2 番目・7 番目・最後が見分けられない」と指摘した。実測すると light の
 * `solid/secondary` と `solid/neutral` は**背景も文字も完全一致**だった。
 * それでも `check:contrast` は緑 ── あれは**閾値**を見る道具で、
 * **セル同士が区別できるか**は見ていない。VRT も「前回と同じ」なら緑
 * （*変化*は見るが*類似*は見ない）。どちらの網にもかからない。
 *
 * セルの見え方は 3 チャンネルで表す:
 *   - fill   … 実際に塗られる面（サーフェスへ合成済み）
 *   - text   … 文字色
 *   - border … 枠の色。`solid` / `subtle` は `1px solid transparent` なので
 *              背景が border-box まで描かれる＝実効的には fill と同じ。
 *              `outline` だけ base の枠が乗る。
 * 3 つとも閾値未満なら「見分けられない」と判定する。
 */

import fs from 'node:fs';

import { composite, perceptualDistance } from './lib/color.js';
import { readThemes, resolveColorToken as resolve } from './lib/design-tokens.js';

// `check-contrast.js` の FILL_MIN と同じ。プロジェクトが既に持っている
// 「この距離を割ったら面として見分けられない」の基準を、セル間にも使う。
// `perceptualDistance` のコメントいわく 0.02 前後が「かろうじて分かる」目安なので、
// 0.015 はそれより保守的（＝偽陽性が出にくい）側。
const MIN_DISTANCE = 0.015;

// セルが載る面。ここを変えると結果が変わるので、既定は素の `surface` に固定する。
const SURFACE = 'surface';

const SUBTLE_ALPHA = (() => {
  const src = fs.readFileSync('src/styles/_token-common.scss', 'utf8');
  const fn = src.match(/@function\s+subtle-bg\s*\([\s\S]*?\n\}/);
  const m = fn && fn[0].match(/l\s+c\s+h\s*\/\s*([0-9.]+)\s*\)/);
  if (!m) {
    console.error('✗ subtle-bg() からアルファ値を読めませんでした。導出規則が変わった可能性があります。');
    process.exit(1);
  }
  return Number(m[1]);
})();

const { canonical } = JSON.parse(fs.readFileSync('tokens/intents.json', 'utf8'));
const VARIANTS = ['solid', 'outline', 'subtle'];

/** 1 セルの見え方を 3 チャンネルで返す。 */
function appearance(vars, roles, variant, surface) {
  const base = resolve(vars, roles.base);
  const on = resolve(vars, roles.on);
  const text = resolve(vars, roles.text);
  if (!base || !on || !text) return null;

  if (variant === 'solid') {
    const fill = composite(base, surface);
    return { fill, text: composite(on, fill), border: fill };
  }
  if (variant === 'outline') {
    // 背景は transparent なのでサーフェスそのもの。枠だけ base が乗る。
    return { fill: surface, text: composite(text, surface), border: composite(base, surface) };
  }
  const subtleFill = roles.subtle ? resolve(vars, roles.subtle) : { ...base, a: SUBTLE_ALPHA };
  const fill = composite(subtleFill, surface);
  return { fill, text: composite(text, fill), border: fill };
}

const rows = [];
for (const [theme, vars] of readThemes()) {
  const surface = resolve(vars, SURFACE);
  if (!surface) {
    console.error(`✗ ${theme}: --wim-color-${SURFACE} を解決できませんでした。`);
    process.exit(1);
  }
  for (const [intent, def] of Object.entries(canonical)) {
    if (!def.surface) continue;
    const roles =
      def.surface === true
        ? { base: def.color, on: `text-on-${def.color}`, text: `text-${def.color}` }
        : def.surface;
    for (const variant of VARIANTS) {
      const look = appearance(vars, roles, variant, surface);
      if (look) rows.push({ theme, intent, variant, ...look });
    }
  }
}

const collisions = [];
for (let i = 0; i < rows.length; i += 1) {
  for (let j = i + 1; j < rows.length; j += 1) {
    const a = rows[i];
    const b = rows[j];
    if (a.theme !== b.theme) continue;
    const dFill = perceptualDistance(a.fill, b.fill);
    const dText = perceptualDistance(a.text, b.text);
    const dBorder = perceptualDistance(a.border, b.border);
    if (dFill < MIN_DISTANCE && dText < MIN_DISTANCE && dBorder < MIN_DISTANCE) {
      collisions.push({ a, b, dFill, dText, dBorder });
    }
  }
}

/**
 * 同一 intent の中で `subtle` の塗りが `solid` から離れているか。
 *
 * 上の総当たりとは**別の問い**で、こちらを分けたのには理由がある。ユーザーが
 * 「最後（subtle/neutral）も見分けられない」と言ったとき、総当たりはそれを拾わなかった ──
 * 文字が `#000` と `#393939` で OKLab 距離 0.33（閾値の 22 倍）あるため、
 * 「3 チャンネルすべてが近い」には当たらないから。指標としてはそれで正しい。
 *
 * だが `subtle` の存在理由は「`solid` より淡い面」であって、**塗りが `solid` と
 * 同じなら文字色が違っても役割を果たしていない**。面は文字よりはるかに広い面積を
 * 占めるので、見た目の第一印象は塗りが決める。そこを直接測る。
 */
const fillOnly = [];
for (const [theme] of readThemes()) {
  const byKey = new Map(rows.filter((r) => r.theme === theme).map((r) => [`${r.variant}/${r.intent}`, r]));
  const intents = [...new Set(rows.filter((r) => r.theme === theme).map((r) => r.intent))];
  for (const intent of intents) {
    const solid = byKey.get(`solid/${intent}`);
    const subtle = byKey.get(`subtle/${intent}`);
    if (!solid || !subtle) continue;
    const d = perceptualDistance(solid.fill, subtle.fill);
    if (d < MIN_DISTANCE) fillOnly.push({ theme, intent, d });
  }
}

console.log('--- report:variant-distinctness (variant × intent の相互判別) ---');
console.log(
  `\n${rows.length} セル（${VARIANTS.length} variant × intent × 2 テーマ）を \`${SURFACE}\` 上で総当たり。`,
);
console.log(`判定: fill / text / border の 3 チャンネルすべてが ${MIN_DISTANCE} 未満なら「見分けられない」。\n`);

if (collisions.length === 0) {
  console.log('✓ 見分けられない組み合わせはありません。');
} else {
  console.log(`✗ 見分けられない組み合わせ ${collisions.length} 件:\n`);
  for (const { a, b, dFill, dText, dBorder } of collisions.sort(
    (x, y) => x.dFill + x.dText + x.dBorder - (y.dFill + y.dText + y.dBorder),
  )) {
    console.log(
      `  ${a.theme} ${a.variant}/${a.intent}  ≒  ${b.variant}/${b.intent}` +
        `   （面 ${dFill.toFixed(4)} / 文字 ${dText.toFixed(4)} / 枠 ${dBorder.toFixed(4)}）`,
    );
  }
  console.log(
    '\nこれはレポートなので exit 0 で終わる。意図的に同じにしている組があり得るため、' +
      '\n閾値で落とす前に一件ずつ「そうであるべきか」を決めること（T101 ④）。',
  );
}

console.log(`\n--- subtle の塗りが solid から離れているか（同一 intent 内） ---\n`);
if (fillOnly.length === 0) {
  console.log('✓ どの intent でも subtle の塗りは solid と区別できます。');
} else {
  console.log(`✗ subtle が solid と同じ面になっている intent ${fillOnly.length} 件:\n`);
  for (const { theme, intent, d } of fillOnly) {
    console.log(`  ${theme} ${intent}: solid と subtle の面の距離 ${d.toFixed(4)}（基準 ${MIN_DISTANCE}）`);
  }
  console.log(
    '\n`subtle` の存在理由は「`solid` より淡い面」なので、ここが潰れていると' +
      '\n文字色が違っても役割を果たしていない。',
  );
}
