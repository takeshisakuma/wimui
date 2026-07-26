/**
 * check:prop-classes — 型は受け付けるのに CSS クラスが無い prop 値の検出（T33）。
 *
 * `Card` の `padding="xl"` が典型だった: 型は `ComponentSize` 全体を受け取るのに
 * `.padding-xl` が存在せず、**書いても黙って無効**。誰も端の値を使っていなかったので
 * 誰も気づかず、呼び出し側が style で padding を直書きする原因になっていた（#109）。
 *
 * 仕組み: `styles[\`<prefix>-${prop}\`]` 形式のクラス参照を持つコンポーネントについて、
 *   - prop が受け付ける値      … docgen（`src/data/docgen_<category>.json` の tsType）
 *   - 実際に存在するクラス      … 同ディレクトリの `*.module.scss`
 * を突き合わせる。
 *
 * 文字列リテラルの union だけを対象にする（`number` や広い型は「全値に対応するクラス」
 * という概念が成り立たないため）。
 *
 * **ラチェット方式**。既存の欠落を凍結し、増加だけを止める。
 * 減らしたら MISSING_BASELINE を実測値まで下げること。
 *
 * 使い方: node scripts/check-prop-classes.js
 * 引数は取らない（lint-staged から部分集合を渡されても全量を見る）。
 */
import fs from 'node:fs';
import path from 'node:path';
import { globSync } from 'glob';

// 2026-07-26 実測。内訳は実行結果に出る。
const MISSING_BASELINE = 11;

const TEMPLATE_RE = /styles\[`([a-zA-Z][\w-]*)-\$\{(\w+)\}`\]/g;

// docgen は gitignore された生成物。CI のクリーンチェックアウトには存在しない。
if (!fs.existsSync('src/data/docgen_index.json')) {
  const { generateDocgenData } = await import('./docgen-plugin.js');
  await generateDocgenData();
}

const docgen = {};
for (const f of globSync('src/data/docgen_*.json', { posix: true })) {
  if (f.endsWith('docgen_index.json')) continue;
  Object.assign(docgen, JSON.parse(fs.readFileSync(f, 'utf8')));
}

/** tsType から文字列リテラルを再帰的に集める。リテラル以外が混ざる型は null。 */
function literalValues(tsType) {
  if (!tsType) return null;
  if (tsType.name === 'literal') {
    const m = String(tsType.value).match(/^"(.*)"$/);
    return m ? [m[1]] : null;
  }
  if (tsType.name === 'union' && Array.isArray(tsType.elements)) {
    const out = [];
    for (const el of tsType.elements) {
      const vs = literalValues(el);
      if (!vs) return null; // number など、値を列挙できない要素が混ざっている
      out.push(...vs);
    }
    return out;
  }
  return null;
}

const missing = [];
const skipped = [];

for (const tsx of globSync('src/components/**/*.tsx', { posix: true })) {
  if (tsx.endsWith('.test.tsx')) continue;
  const src = fs.readFileSync(tsx, 'utf8');
  const hits = [...src.matchAll(TEMPLATE_RE)];
  if (hits.length === 0) continue;

  const component = path.basename(tsx, '.tsx');
  const scssFiles = globSync(`${path.posix.dirname(tsx)}/*.module.scss`, { posix: true });
  if (scssFiles.length === 0) continue;
  const scss = scssFiles.map((f) => fs.readFileSync(f, 'utf8')).join('\n');

  for (const [, prefix, prop] of hits) {
    const entry = docgen[component];
    const propDef = entry && entry.props && entry.props[prop];
    if (!propDef) {
      skipped.push(`${component}.${prop}: docgen に prop が無い`);
      continue;
    }
    const values = literalValues(propDef.tsType);
    if (!values) {
      skipped.push(`${component}.${prop}: 値を列挙できない型（${propDef.tsType?.raw ?? '?'}）`);
      continue;
    }
    for (const v of values) {
      // CSS モジュールのクラス名。`.padding-2xl` は SCSS 上 `&.padding-2xl` 等で現れる
      const re = new RegExp(`[.&]${prefix}-${v.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}\\b`);
      if (!re.test(scss)) {
        missing.push(`${component}: ${prop}="${v}" → .${prefix}-${v} が ${path.basename(scssFiles[0])} に無い`);
      }
    }
  }
}

console.log('--- check:prop-classes (型は受け付けるのに CSS が無い prop 値) ---');
console.log(`\n欠落: ${missing.length} 件（baseline: ${MISSING_BASELINE}）`);
for (const m of missing) console.log(`  ${m}`);

if (skipped.length > 0) {
  console.log(`\n対象外 ${skipped.length} 件:`);
  for (const s of skipped) console.log(`  ${s}`);
}

if (missing.length > MISSING_BASELINE) {
  console.log(`\n[FAIL] ベースライン超過。型が受け付ける値には CSS クラスを用意するか、`);
  console.log(`       prop の型をそのコンポーネントが実際に対応する値へ狭めてください。`);
  console.log(`       （書いても効かない prop は、呼び出し側が style へ逃げる原因になります）`);
  console.log('\n✗ check:prop-classes failed.');
  process.exit(1);
}

if (missing.length < MISSING_BASELINE) {
  console.log(`\nベースラインを ${missing.length} に更新できます（scripts/check-prop-classes.js）。`);
}

console.log('\n✓ 欠落は増えていません。');
