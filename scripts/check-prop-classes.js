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
// 値の解決規則は共通モジュールに置く（T54 と同じものを使う。片方だけが
// `(typeof CONST)[number]` を解けると、もう片方が同じ変更を見落とす）。
import { enumerableValues } from './lib/prop-types.js';

// 2026-07-26 実測。内訳は実行結果に出る。
// 11 → 6: 既定値の除外で偽陽性 2 件が消え、トークンが実在する 3 値（Card の
// padding-xs / radius-xl / radius-2xl）を実装した。残る 6 件は対応するトークンが
// 無く、実装すると値が互いに区別できないため、型を狭める側で解決する（T38）。
// 6 → 0: 2026-08-02（0.13.0）。`CardProps` の `padding` / `radius` を
// `CARD_STYLED_*`（SCSS が実装する値の配列）から導き、書けない値は書けなくした。
// **ラチェットではなく 0 が正**になったので、増えたら必ず落ちる。
const MISSING_BASELINE = 0;

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
    const values = enumerableValues(propDef.tsType, tsx);
    if (!values) {
      skipped.push(`${component}.${prop}: 値を列挙できない型（${propDef.tsType?.raw ?? '?'}）`);
      continue;
    }
    // 既定値は基底スタイルが実装するのが普通で、修飾クラスは要らない。
    // 例: `Spinner` の `labelPosition = "right"` は既定で、SCSS には `.label-bottom`
    // しか無い（右寄せは素の状態）。`FAQSection` の `layout = "top"` も同様。
    // これを欠落として数えると偽陽性になる。
    const defaultRaw = propDef.defaultValue && propDef.defaultValue.value;
    const defaultValue = defaultRaw && String(defaultRaw).replace(/^["']|["']$/g, '');

    for (const v of values) {
      if (v === defaultValue) continue;
      // CSS モジュールのクラス名。`.padding-2xl` は SCSS 上 `&.padding-2xl` 等で現れる
      const re = new RegExp(`[.&]${prefix}-${v.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}\\b`);
      if (!re.test(scss)) {
        missing.push(`${component}: ${prop}="${v}" → .${prefix}-${v} が ${path.basename(scssFiles[0])} に無い`);
      }
    }
  }
}

// --- 素の `styles.foo` 参照（T58） ---------------------------------------
//
// 上はテンプレート形（`styles[`padding-${prop}`]`）だけを見る。**素の
// `styles.foo` は誰も見ていなかった**ので、SCSS に無いクラス名を書いても
// `undefined` が付くだけで、その状態・部位のスタイルが黙って当たらない。
//
// T32 の 3 枚目で `AppShell` の `styles.withSidebar` を踏んだのが発端で、
// 数えたら 21 コンポーネントに 35 件あった。多くは **prop が効いていない**形:
// `Drawer` の `showOverlay={false}` / `slideIn` / `slideOut`、`List` の
// `fullWidth`、`Stepper` の無効ステップ、`ModelSelector` の選択中の強調、
// `GanttChart` のフォーカス表示。
//
// **同ディレクトリの `*.module.scss` に加え、import している module も読む**
// （親の module を使うコンポーネントを偽陽性にしないため。実測では該当なしだが、
// 将来そう書かれたときに誤検出で止まらないようにしておく）。
// 35 → 33: 2026-08-02。`Drawer` の `showOverlay` と `List` の `fullWidth` を実装した
// （どちらも「prop が黙って無視される」形だった）。残り 33 は見た目の設計判断が要る。
// 33 → 31: 同日。`GanttChart` の `.focused` と `ModelSelector` の `.selected` は
// **足りないのではなく死んだ参照**だった（前者は `:focus-visible` が、後者はチェック
// アイコンが既に同じ状態を描いている）。**33 件すべてが「クラスを足す」で直るとは
// 限らない** — 1 件ずつ「足す / 消す」を判定すること。
// 31 → 23: 同日 2 巡目。**8 件のうち 7 件が「消す」だった**。無効状態は
// `:disabled`（Combobox / SmartSearchInput）が既に持ち、トリガーは意図的に無スタイル
// （Dialog / BottomSheet。Drawer は SCSS に空の `.trigger` を置いている）、
// ストリーミング表示は `.cursor` が描いている。**足したのは Stepper の無効ステップ 1 件だけ**で、
// それも `<div>` に `:disabled` は当たらないので既存の `aria-disabled` に紐づけた。
const BARE_CLASS_BASELINE = 23;
const bareMissing = [];

for (const tsx of globSync('src/components/**/*.tsx', { posix: true })) {
  if (tsx.endsWith('.test.tsx')) continue;
  const src = fs.readFileSync(tsx, 'utf8');
  const dir = path.posix.dirname(tsx);

  const scssPaths = new Set(globSync(`${dir}/*.module.scss`, { posix: true }));
  for (const m of src.matchAll(/import\s+\w+\s+from\s+["']([^"']+\.module\.scss)["']/g)) {
    scssPaths.add(path.posix.normalize(path.posix.join(dir, m[1])));
  }
  const files = [...scssPaths].filter((f) => fs.existsSync(f));
  if (files.length === 0) continue;

  const scss = files.map((f) => fs.readFileSync(f, 'utf8')).join('\n');
  const defined = new Set([...scss.matchAll(/[.&]([a-zA-Z][\w-]*)/g)].map((m) => m[1]));

  const used = new Set([
    ...[...src.matchAll(/\bstyles\.([a-zA-Z][\w]*)/g)].map((m) => m[1]),
    ...[...src.matchAll(/\bstyles\[\s*["']([a-zA-Z][\w-]*)["']\s*\]/g)].map((m) => m[1]),
  ]);
  for (const u of [...used].sort()) {
    if (!defined.has(u)) {
      bareMissing.push(`${tsx.replace('src/components/', '')}: styles.${u} が SCSS に無い`);
    }
  }
}

console.log('--- check:prop-classes (型は受け付けるのに CSS が無い prop 値) ---');
console.log(`\n欠落: ${missing.length} 件（baseline: ${MISSING_BASELINE}）`);
for (const m of missing) console.log(`  ${m}`);

console.log(
  `\n実体の無いクラス参照: ${bareMissing.length} 件（baseline: ${BARE_CLASS_BASELINE}）`,
);
if (bareMissing.length > BARE_CLASS_BASELINE) {
  for (const b of bareMissing) console.log(`  ${b}`);
}

if (skipped.length > 0) {
  console.log(`\n対象外 ${skipped.length} 件:`);
  for (const s of skipped) console.log(`  ${s}`);
}

let failed = false;

if (missing.length > MISSING_BASELINE) {
  console.log(`\n[FAIL] ベースライン超過。型が受け付ける値には CSS クラスを用意するか、`);
  console.log(`       prop の型をそのコンポーネントが実際に対応する値へ狭めてください。`);
  console.log(`       （書いても効かない prop は、呼び出し側が style へ逃げる原因になります）`);
  failed = true;
}

if (bareMissing.length > BARE_CLASS_BASELINE) {
  console.log(`\n[FAIL] 実体の無いクラス参照が増えています（T58）。`);
  console.log(`       \`styles.foo\` は SCSS に \`.foo\` が無いと \`undefined\` になり、`);
  console.log(`       その状態・部位のスタイルが黙って当たりません（prop が効かない形になります）。`);
  failed = true;
}

if (failed) {
  console.log('\n✗ check:prop-classes failed.');
  process.exit(1);
}

if (missing.length < MISSING_BASELINE) {
  console.log(`\nベースラインを ${missing.length} に更新できます（MISSING_BASELINE）。`);
}
if (bareMissing.length < BARE_CLASS_BASELINE) {
  console.log(
    `ベースラインを ${bareMissing.length} に更新できます（BARE_CLASS_BASELINE）。`,
  );
}

console.log('\n✓ 欠落は増えていません。');
