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
 * ## 構造体の中身（T94）
 *
 * 同じ穴が**型名の内側**にもあった。`DataGrid.columns` は `DataGridColumn<T>[]` と
 * いう**名前**で保存されていたので、`DataGridColumn` から `width` を丸ごと消しても
 * ── 全利用者のコードが壊れる変更なのに ── 文字列は変わらず、**2409 prop を同じ
 * 件数で照合して exit 0** だった（2026-08-07 に変異で実測）。
 *
 * 起票時に規模も測った: 2217 prop のうち **484 件（21.8%）が型名だけの凍結**で、
 * うち**利用者が自分で組み立てて渡すオブジェクト型が 155 件・66 種**
 * （`ChartDataPoint` / `Option` / `Edge` / `DashboardWidget` / `GalleryItem` /
 * `QueryGroup` / `SwipeActionItem` / `DataGridColumn` …）。
 *
 * そこで docgen が持っている構造（`tsType.signature.properties`）を**メンバー単位で
 * 展開して**保存する。prop 本体と同じ分類 ── メンバーが消えた・任意 → 必須・型が
 * 別物になったら破壊、任意メンバーが増えたら加算。
 *
 * **展開できないものは持たない。** `ReactNode` や `Date` や関数型は展開しても
 * 意味が無いし、`shape` が空のときに「中身を見た」と記録すると、prop 本体で
 * `required` を読めなかったときに**キーごと持たない**ことにしたのと同じ嘘になる。
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
// v2: 構造体 prop の中身（`shape`）を展開して持つようになった（T94）。
const SNAPSHOT_VERSION = 2;

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
//
// **ただしそのハッシュはコンポーネントのファイルしか見ていない（T94 で判明）。**
// `ChartDataPoint` のように**別のファイルで宣言された型**を書き換えても、どの
// コンポーネントのハッシュも変わらないのでキャッシュがそのまま使われ、**古い
// docgen と突き合わせて緑になる**。実測: `helpers.ts` の `ChartDataPoint` から
// `null` を落としても素通りし、キャッシュを消すと 6 つのチャートで検出された。
// 「毎回作り直す」と書きながら作り直せていなかったので、ここで消してから作る。
// コールドでも実測 5 秒なので、正しさを取る。
fs.rmSync('src/data/.docgen-cache.json', { force: true });
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
/**
 * オブジェクトの形を持つ tsType から、メンバー単位の形を取り出す（T94）。
 *
 * docgen は `{ name: "signature", type: "object", signature: { properties } }` を
 * 返す。**配列の要素**（`DataGridColumn<T>[]`）や**union の枝**（`Foo | Bar[]`）の
 * 中にあることが多いので、そこまで降りて探す。
 *
 * 見つからなければ `null`。**「中身が無い」ではなく「展開していない」**という
 * 意味なので、呼び出し側はキーごと持たないこと。
 */
function objectShape(tsType, depth = 0) {
  if (!tsType || depth > 3) return null;
  if (tsType.name === 'signature' && tsType.type === 'object') {
    const props = tsType.signature?.properties;
    if (!Array.isArray(props) || props.length === 0) return null;
    const shape = {};
    for (const p of props) {
      // インデックスシグネチャ（`[key: string]: T`）はメンバー名を持たない
      if (typeof p.key !== 'string') continue;
      const v = p.value ?? {};
      shape[p.key] = {
        required: v.required === true,
        type: (v.raw ?? v.name ?? 'unknown').replace(/\s+/g, ' ').trim(),
      };
    }
    return Object.keys(shape).length ? shape : null;
  }
  // 配列・union・ジェネリックは 1 段降りる。**最初に見つかった形だけ**を採る
  // （複数の枝が別々の形を持つ型は、どれを守るべきか決められないので持たない）。
  const children = tsType.elements ?? [];
  const found = children.map((c) => objectShape(c, depth + 1)).filter(Boolean);
  if (found.length === 1) return found[0];
  return null;
}

/**
 * 別名の下にある**実体**を文字列にする（T94）。
 *
 * `AreaChart.data` の型は `ChartDataPoint[]` として保存されるが、docgen は
 * その下を `Record<string, string | number | null>` まで解いている。表面の名前だけ
 * 持つと、**`ChartDataPoint` の定義を書き換えても文字列が変わらない**ので素通りする。
 *
 * オブジェクトの形（`shape`）が取れたものはそちらが詳しいのでここでは扱わない。
 */
function resolvedType(tsType, depth = 0) {
  if (!tsType || depth > 3) return null;
  if (tsType.name === 'Array' && tsType.elements?.length === 1) {
    const inner = resolvedType(tsType.elements[0], depth + 1);
    return inner ? `${inner}[]` : null;
  }
  if (tsType.name === 'union' && tsType.elements?.length) {
    const parts = tsType.elements.map((e) => resolvedType(e, depth + 1));
    return parts.every(Boolean) ? parts.join(' | ') : null;
  }
  // **リテラルはこの軸の担当ではない。** `keyof typeof ALL_ICONS` のような型は
  // literal の union として返るが、これを文字列にすると「値が 1 つ増えただけ」で
  // 変わる ── **アイコンを 1 個足すという加算で「中身が変わった」と鳴る**
  // （実測。この実装中に Icon.name / SpeedDial.icon / SpeedDial.activeIcon の
  // 3 件が偽陽性として出た）。値の増減は `values` 軸が破壊/加算に分類できる形で
  // 見ているので、ここでは諦めて何も持たない。
  if (tsType.name === 'literal') return null;
  // 形のある型は `shape` の担当。ここで raw を持つと巨大な文字列になる。
  if (tsType.name === 'signature') return null;
  return (tsType.raw ?? tsType.name ?? null)?.replace(/\s+/g, ' ').trim() ?? null;
}

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
      // T94: 型名の内側。展開できたときだけ持つ。
      const shape = values ? null : objectShape(d.tsType);
      if (shape) {
        entry.shape = Object.fromEntries(Object.keys(shape).sort().map((k) => [k, shape[k]]));
      } else if (!values) {
        // 形が取れないものは、せめて別名の下の実体を持つ。表面の名前と同じなら
        // **何も解決できていない**ということなので持たない（嘘をつかない）。
        const resolved = resolvedType(d.tsType);
        if (resolved && resolved !== entry.type) entry.resolvedType = resolved;
      }
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

/**
 * **キーを並べ替えてから書く（T76）。** 走査順のまま書いていたので、prop が
 * 1 件増えただけで **478 行の差分**が出ていた（実測: 消えたキー 477 / 増えたキー
 * 478 に対し、純減 0・純増 1）。差分が読めないことの実害は 2026-08-05 に出た ──
 * その 478 行を「`Kbd.*` や `Highlight.*` を削っている」と誤読し、**安全な更新を
 * 危険と報告して撤回した**。**本当に prop が消える変更が同じ差分に紛れても、
 * 同じように見落とす。**
 */
const sortKeys = (obj) =>
  Object.fromEntries(Object.keys(obj).sort().map((k) => [k, obj[k]]));

if (update && !probe) {
  fs.writeFileSync(
    SNAPSHOT,
    `${JSON.stringify({ version: SNAPSHOT_VERSION, props: sortKeys(current) }, null, 2)}\n`,
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

  // T94: 型名が同じでも中身が変わっていないか。prop 本体と同じ分類にする。
  if (was.shape && now.shape) {
    for (const [member, wasM] of Object.entries(was.shape)) {
      const nowM = now.shape[member];
      if (!nowM) {
        breaking.push(`${key}.${member}: ${was.type} からメンバーが無くなりました`);
        continue;
      }
      if (!wasM.required && nowM.required) {
        breaking.push(`${key}.${member}: 任意 → 必須（既存の呼び出しが落ちます）`);
      } else if (wasM.required && !nowM.required) {
        additive.push(`${key}.${member}: 必須 → 任意`);
      }
      if (wasM.type !== nowM.type) {
        breaking.push(`${key}.${member}: 型が変わりました\n      旧: ${wasM.type}\n      新: ${nowM.type}`);
      }
    }
    for (const [member, nowM] of Object.entries(now.shape)) {
      if (member in was.shape) continue;
      if (nowM.required) breaking.push(`${key}.${member}: 必須のメンバーが増えました（既存の呼び出しが落ちます）`);
      else additive.push(`${key}.${member}: メンバーが増えました`);
    }
  } else if (was.shape && !now.shape) {
    // 展開できていた型が展開できなくなった。中身が消えたのか、型そのものが
    // 別の形（union の枝が増えた等）になったのか判定できない。**判定できない
    // ものを加算として黙らせるのは、このガードの目的に反する。**
    breaking.push(`${key}: 中身を展開できなくなりました（${now.type}）。メンバーが減っていないか確認してください`);
  } else if (!was.shape && now.shape) {
    additive.push(`${key}: 中身を展開できるようになりました`);
  }

  // T94: 別名の下の実体。名前が同じでも定義が書き換わっていれば落ちる。
  if (was.resolvedType && now.resolvedType && was.resolvedType !== now.resolvedType) {
    breaking.push(
      `${key}: 型名は同じですが中身が変わりました（${now.type}）\n      旧: ${was.resolvedType}\n      新: ${now.resolvedType}`,
    );
  } else if (was.resolvedType && !now.resolvedType && !now.shape) {
    breaking.push(`${key}: 型名の下を解決できなくなりました（${now.type}）。中身が狭まっていないか確認してください`);
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
