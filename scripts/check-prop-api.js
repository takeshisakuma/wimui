#!/usr/bin/env node
/**
 * check:prop-api — **シンボルの増減を伴わない公開 API の破壊**を捕まえる（T54）。
 *
 * `check:api`（v2）が凍結しているのは「exports マップ」と「各バレルが出す
 * シンボル名」の 2 層。名前が増減しなければ通る。だから **prop の型が狭まっても、
 * 任意が必須になっても、prop が消えても、あちらは無風のまま緑になる**。
 *
 * 実測: T38（0.13.0）で `Card` の `padding` / `radius` の union を狭めたとき、
 * 利用者のコードはコンパイルしなくなるのに `check:api` は一言も言わなかった。
 * あのときは破壊と分かって出したから実害が無かっただけで、**意図せず狭めたときに
 * 気付ける仕組みが無い**。ここがその穴。
 *
 * ## 凍結ではなく分類
 *
 * `check:api` は「差分が出たら落ちる」凍結方式だが、prop は**足すほうが日常**なので
 * 同じ方式にすると毎回スナップショットを書き換えることになり、書き換えが儀式化して
 * 破壊の混入を見逃す。ここでは差分を**破壊 / 加算**に分類し、**破壊だけで落とす**:
 *
 *   破壊: prop が消えた / 任意 → 必須 / 受け付ける値が減った / 型が別物になった
 *   加算: prop が増えた（任意） / 必須 → 任意 / 受け付ける値が増えた
 *
 * 加算は黙って通し、スナップショットの更新を促すだけにする。
 *
 * ## 値の解決
 *
 * `(typeof CONST)[number]` は `scripts/lib/prop-types.js` が配列まで解いて**値の
 * 一覧として**保存する。ここを型の文字列のまま持つと、`CARD_STYLED_RADIUS` から
 * 1 値消しても文字列は変わらないので、**まさに守りたい変更が素通りする**。
 *
 * ## 使い方
 *
 *   node scripts/check-prop-api.js            # スナップショットと突き合わせる（CI）
 *   node scripts/check-prop-api.js --update   # スナップショットを書き直す
 *   node scripts/check-prop-api.js --probe <name.prop=value,...>  # 受け入れ条件の検証
 *
 * 破壊を意図して出すときは `--update` でスナップショットを更新し、**changeset に
 * 破壊として書く**こと。スナップショットの差分がレビューで見える形になる。
 */
import fs from 'node:fs';
import path from 'node:path';
import { globSync } from 'glob';
import { enumerableValues } from './lib/prop-types.js';

const SNAPSHOT = 'prop-api-snapshot.json';
const SNAPSHOT_VERSION = 1;

const argv = process.argv.slice(2);
const update = argv.includes('--update');
const probeIdx = argv.indexOf('--probe');
const probe = probeIdx >= 0 ? argv[probeIdx + 1] : null;

// docgen は gitignore された生成物。**「無ければ作る」ではなく毎回作り直す。**
//
// 実装中にこれで足をすくわれた: 「無ければ作る」にしていたため、ローカルでは
// **前回のビルドの docgen** と突き合わせていて、`Card` の型を狭めても
// 「差分なし」で緑になった。CI はクリーンチェックアウトなので毎回新しく、
// **ローカルだけが嘘をつく**形（`check:llms` が Windows でだけ落ちたのの逆向き）。
// キャッシュは内容ハッシュなので、温まっていれば 1 秒未満（T31）。
{
  const { generateDocgenData } = await import('./docgen-plugin.js');
  await generateDocgenData();
}

const docgen = {};
for (const f of globSync('src/data/docgen_*.json', { posix: true })) {
  if (f.endsWith('docgen_index.json')) continue;
  Object.assign(docgen, JSON.parse(fs.readFileSync(f, 'utf8')));
}
const exportCat = JSON.parse(fs.readFileSync('src/data/docgen_index.json', 'utf8'));

/** コンポーネント名 → それを宣言している .tsx（値の解決に要る） */
const tsxFor = new Map();
for (const tsx of globSync('src/components/**/*.tsx', { posix: true })) {
  if (tsx.endsWith('.test.tsx')) continue;
  tsxFor.set(path.basename(tsx, '.tsx'), tsx);
}

/**
 * 必須/任意は **docgen を信用できない**のでソースから読む。
 *
 * 実測（この実装中）: `radius` から `?` を外して本当に必須にしても、docgen は
 * `required: false` を返し続けた（既定値を持つ prop はそう扱われる）。docgen の値を
 * そのまま使うと、**この次元を見ているつもりで一度も見ていない**ガードになる。
 *
 * 読めるのはそのファイルに書かれている prop だけ。`React.ComponentPropsWithoutRef`
 * 由来のものはファイルに現れないので判定しない（それらは元から全部任意）。
 * 判定できなかった数は出力する。
 */
const optionalityCache = new Map();
function declaredOptionality(tsx) {
  if (optionalityCache.has(tsx)) return optionalityCache.get(tsx);
  const map = new Map();
  if (fs.existsSync(tsx)) {
    // 改行は正規化する。`.gitattributes` が LF なので CI は LF、Windows の
    // ワーキングコピーは CRLF になりうる。行の形に依存する判定を、
    // **プラットフォームで結果が変わる**まま出荷しない。
    const src = fs.readFileSync(tsx, 'utf8').replace(/\r\n/g, '\n');
    // **1 行で閉じる宣言だけを見る。** 値側を `[^;]+` にすると改行をまたいで
    // 次の `;` まで伸び、**関数の引数リストを prop 宣言として拾う**。
    // 実際 `TreeView.tsx` の `collect(nodes: TreeViewNode[], …)` を
    // `TreeViewProps.nodes` の宣言と誤読し、任意の prop を必須と報告した（CI で発覚）。
    // 複数行にわたる宣言は読めないが、読めないものは「判定しない」で通す。
    for (const m of src.matchAll(/^[ \t]{2,}([A-Za-z_$][\w$]*)(\?)?\s*:\s*[^;\n]+;[ \t]*$/gm)) {
      // 同名が複数の型ブロックに出る場合は最初を採る
      if (!map.has(m[1])) map.set(m[1], !m[2]);
    }
  }
  optionalityCache.set(tsx, map);
  return map;
}

/**
 * 現在の prop シグネチャ。`_internal` は公開契約ではないので対象外。
 * 形は `{ "Card.radius": { required, values? , type? } }`。
 * 値を列挙できるものは `values`（順不同・ソートして保存）、できないものは
 * 型の文字列そのまま（`type`）で持つ。
 */
let requiredUnknown = 0;
function collect() {
  requiredUnknown = 0;
  const out = {};
  for (const [name, def] of Object.entries(docgen)) {
    if (exportCat[name] === '_internal') continue;
    if (!def?.props) continue;
    // 複合コンポーネント（`Card.Header`）は基底の .tsx を探す
    const tsx = tsxFor.get(name) ?? tsxFor.get(name.split('.')[0]);
    const optionality = tsx ? declaredOptionality(tsx) : new Map();
    for (const [prop, d] of Object.entries(def.props)) {
      const values = tsx ? enumerableValues(d.tsType, tsx) : null;
      const entry = {};
      // ソースで読めたものだけ必須/任意を持つ。読めなければキーごと持たない
      // （false を入れると「任意だと確認した」と嘘をつくことになる）。
      if (optionality.has(prop)) entry.required = optionality.get(prop);
      else requiredUnknown += 1;
      if (values) entry.values = [...new Set(values)].sort();
      else entry.type = (d.tsType?.raw ?? d.tsType?.name ?? 'unknown').replace(/\s+/g, ' ').trim();
      out[`${name}.${prop}`] = entry;
    }
  }
  return out;
}

let current = collect();

// --probe: 受け入れ条件の検証。実際に値を消した状態を作らずに、
// 「その値が消えたら破壊として鳴るか」を確かめる。
if (probe) {
  for (const spec of probe.split(',')) {
    const [key, value] = spec.split('=');
    const entry = current[key];
    if (!entry?.values) {
      console.error(`✗ probe: ${key} は値を列挙できる prop ではありません`);
      process.exit(1);
    }
    entry.values = entry.values.filter((v) => v !== value);
  }
}

const previous = fs.existsSync(SNAPSHOT) ? JSON.parse(fs.readFileSync(SNAPSHOT, 'utf8')) : null;

if (update && !probe) {
  fs.writeFileSync(
    SNAPSHOT,
    `${JSON.stringify({ version: SNAPSHOT_VERSION, props: current }, null, 2)}\n`,
  );
  console.log(`✓ ${SNAPSHOT} を更新しました（${Object.keys(current).length} prop）。`);
  process.exit(0);
}

if (!previous) {
  console.error(`✗ ${SNAPSHOT} がありません。\`node scripts/check-prop-api.js --update\` で作成してください。`);
  process.exit(1);
}
if (previous.version !== SNAPSHOT_VERSION) {
  console.error(`✗ スナップショットの版が違います（${previous.version} ≠ ${SNAPSHOT_VERSION}）。--update してください。`);
  process.exit(1);
}

const before = previous.props ?? {};
const breaking = [];
const additive = [];

for (const [key, was] of Object.entries(before)) {
  const now = current[key];
  if (!now) {
    breaking.push(`${key}: prop が無くなりました`);
    continue;
  }
  // どちらかで読めていなければ比較しない（読めなかったことは件数で出す）
  if (was.required !== undefined && now.required !== undefined) {
    if (!was.required && now.required) {
      breaking.push(`${key}: 任意 → 必須（既存の呼び出しが落ちます）`);
    } else if (was.required && !now.required) {
      additive.push(`${key}: 必須 → 任意`);
    }
  }

  if (was.values && now.values) {
    const gone = was.values.filter((v) => !now.values.includes(v));
    const added = now.values.filter((v) => !was.values.includes(v));
    if (gone.length) breaking.push(`${key}: 受け付けなくなった値 ${gone.map((v) => `"${v}"`).join(' / ')}`);
    if (added.length) additive.push(`${key}: 受け付ける値が増えた ${added.map((v) => `"${v}"`).join(' / ')}`);
  } else if (was.values && !now.values) {
    // 列挙できた型が列挙できなくなった＝広がったのか狭まったのか判定できない。
    // 判定できないものを加算として黙らせるのは、このガードの目的に反する。
    breaking.push(`${key}: 値を列挙できる型ではなくなりました（${now.type}）。狭まっていないか確認してください`);
  } else if (!was.values && now.values) {
    additive.push(`${key}: 値を列挙できる型になりました`);
  } else if (was.type !== now.type) {
    breaking.push(`${key}: 型が変わりました\n      旧: ${was.type}\n      新: ${now.type}`);
  }
}

for (const [key, now] of Object.entries(current)) {
  if (key in before) continue;
  if (now.required === true) breaking.push(`${key}: 必須の prop が増えました（既存の呼び出しが落ちます）`);
  else additive.push(`${key}: prop が増えました`);
}

console.log('--- check:prop-api (prop シグネチャの破壊的変更) ---');
console.log(
  `\n${Object.keys(current).length} prop を照合（スナップショット ${Object.keys(before).length} prop` +
    ` ・必須/任意を判定できなかったもの ${requiredUnknown}）`,
);

// 照合できた prop が 0 なら、それは合格ではなく抽出の故障。
if (Object.keys(current).length === 0) {
  console.error('\n✗ 1 つも prop を取り出せませんでした（docgen の読み出しが空振りしています）。');
  process.exit(1);
}

if (additive.length > 0) {
  console.log(`\n加算（非破壊・${additive.length} 件）:`);
  for (const a of additive.slice(0, 20)) console.log(`  ${a}`);
  if (additive.length > 20) console.log(`  … 他 ${additive.length - 20} 件`);
}

if (breaking.length > 0) {
  console.log(`\n[FAIL] 破壊的変更（${breaking.length} 件）:`);
  for (const b of breaking) console.log(`  ${b}`);
  console.log(`\n  これらは利用者のコードがコンパイルしなくなる変更です。`);
  console.log(`  意図したものなら \`node scripts/check-prop-api.js --update\` でスナップショットを更新し、`);
  console.log(`  **changeset に破壊として書いてください**（差分がレビューに出る形になります）。`);
  console.log('\n✗ check:prop-api failed.');
  process.exit(1);
}

if (additive.length > 0) {
  console.log(`\n  加算のみです。\`node scripts/check-prop-api.js --update\` でスナップショットを更新してください。`);
}
console.log('\n✓ 破壊的な prop の変更はありません。');
