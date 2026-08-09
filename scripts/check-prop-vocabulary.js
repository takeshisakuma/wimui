#!/usr/bin/env node
/**
 * ある軸の語彙が、別の軸の prop に漏れていないかを見る（T114）。
 *
 * **「同じ prop 名で値の集合が違う」は検査にならない。** 実測すると、リテラル
 * union を持つ prop 73 種類のうち 16 種類で集合が割れていたが、その大半は
 * **割れているのが正しい**（`Skeleton.variant` の circle/rect/text は「音量」ではなく
 * 「種類」で、`Tag.variant` の solid/outline/subtle と一致するほうがおかしい）。
 * `variant` に至っては 38 コンポーネントで 17 通りあり、素朴に揃えようとすると
 * 設計を壊す。
 *
 * **見るべきなのは軸の混線のほう。** WIM UI は
 * 「intent＝意味」「variant＝音量」（`Foundation/Intents` / `Foundation/Variants`）
 * と分けているのに、intent の語が `variant` や `color` に載っている箇所がある。
 * `FloatButton.position` は画面の隅の enum に CSS の `static` を混ぜている。
 * どれも**踏んで再現できる不具合ではない**ので、型検査にも VRT にも a11y にも写らない。
 *
 * 型は `src/data/docgen_*.json` から取る。`prop-api-snapshot.json` は型エイリアスを
 * 解決できず 2409 件中 192 件が `undefined` になるが、docgen は
 * `SnackbarPosition` のようなエイリアスも 6 リテラルまで解決している。
 */

import fs from 'node:fs';
import path from 'node:path';

const DATA_DIR = 'src/data';

const AXES = {
  intent: ['primary', 'secondary', 'danger', 'success', 'warning', 'info', 'neutral'],
  'CSS position': ['static', 'relative', 'absolute', 'fixed', 'sticky'],
};

/**
 * 語が同じでも意味が違うもの。**「なぜ正当か」を書けないものは載せない。**
 * ここが緩むと検査そのものが意味を失う。
 */
const ALLOW = new Map([
  ['VoiceVisualizer.sentiment', '`neutral` は感情の中立。intent の neutral とは別の軸'],
  ['Stats.Trend.direction', '`neutral` は増減なしの意味。方向の語彙'],
  ['Textarea.fieldSizing', '`fixed` は CSS の `field-sizing: fixed`。position ではない'],
  ['CounterTextarea.fieldSizing', '同上'],
  ['Link.priority', '`primary` / `secondary` は**階層**の語彙。intent ではなくリンクの優先度で、variant と同じ軸'],
]);

const docgen = {};
if (fs.existsSync(DATA_DIR)) {
  for (const f of fs.readdirSync(DATA_DIR).filter((x) => /^docgen_(?!index).+\.json$/.test(x))) {
    Object.assign(docgen, JSON.parse(fs.readFileSync(path.join(DATA_DIR, f), 'utf8')));
  }
}
if (Object.keys(docgen).length === 0) {
  console.error('✗ docgen データがありません。`npm run build` か Storybook を一度動かしてください。');
  process.exit(1);
}

const literals = (tsType) => {
  if (!tsType || tsType.name !== 'union' || !Array.isArray(tsType.elements)) return null;
  const vals = [];
  for (const e of tsType.elements) {
    if (e.name !== 'literal') return null; // `string | "a"` のような混在は語彙ではない
    vals.push(String(e.value).replace(/^["']|["']$/g, ''));
  }
  return vals.length >= 2 ? vals : null;
};

const findings = [];
let scanned = 0;
for (const [comp, info] of Object.entries(docgen)) {
  const props = info?.props;
  if (!props) continue;
  for (const [name, p] of Object.entries(props)) {
    const vals = literals(p?.tsType);
    if (!vals) continue;
    scanned += 1;
    for (const [axis, words] of Object.entries(AXES)) {
      // その prop が intent そのものなら漏れではない
      if (axis === 'intent' && name === 'intent') continue;
      // 値がすべて CSS の position キーワードなら、それは CSS の position を通す prop
      if (axis === 'CSS position' && vals.every((v) => words.includes(v))) continue;
      const leaked = vals.filter((v) => words.includes(v));
      if (leaked.length === 0) continue;
      const key = `${comp}.${name}`;
      if (ALLOW.has(key)) continue;
      findings.push({ key, axis, leaked, vals });
    }
  }
}

console.log('--- check:prop-vocabulary（軸の混線）---\n');
console.log(`リテラル union を持つ prop: ${scanned} 件 / 除外リスト: ${ALLOW.size} 件`);

if (findings.length === 0) {
  console.log('\n✓ 他の軸の語彙が漏れている prop はありません。');
  process.exit(0);
}

console.error(`\n✗ 他の軸の語彙が漏れている prop: ${findings.length} 件\n`);
for (const f of findings) {
  console.error(`  ${f.key}`);
  console.error(`    値      : ${f.vals.join(' / ')}`);
  console.error(`    ${f.axis} の語: ${f.leaked.join(' / ')}\n`);
}
console.error('  intent は意味、variant は音量（`Foundation/Intents` / `Foundation/Variants`）。');
console.error('  意味の語を variant / color に載せない。CSS のキーワードを配置の語彙に混ぜない。');
console.error('  語が同じで意味が違うだけなら、理由を添えて ALLOW に入れること。');
process.exit(1);
