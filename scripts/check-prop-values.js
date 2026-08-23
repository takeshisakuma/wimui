#!/usr/bin/env node
/**
 * Guard: docs が主張する **prop の「値」と「既定値」** が実装と合っているか。
 *
 * `check:doc-drift` は **prop 名**までしか見ない。しかもその判定 B は
 * 「どこかの型の値ならよい」と全体プールで許すので、**`size="small"` のような
 * 値の誤りは構造的に検出できない** ── 同スクリプトのヘッダーが手柄として挙げている
 * Breadcrumb / Icon の `small` / `medium` / `large` は、**いま同じ間違いを入れても
 * 鳴らない**（2026-08-23 に実測して確認した）。既定値の記述は誰も見ていなかった。
 *
 * 見るもの:
 *   ① docs 本文の `prop="value"` の **value** が、その prop の取りうる値に在るか
 *   ② prop 説明キーの `@default X` が、docgen の `defaultValue` と一致するか
 *   ③ docs 本文の「defaults to `X`」が、docgen の `defaultValue` と一致するか
 *   ④ prop 説明キーが**実在する prop を指しているか**（T226。2026-08-23 に 13 件）
 *   ⑤ props 表の**説明欄が空のまま**出る prop が無いか（T220。同日 8 件 → 0 件）
 *
 * **①③は書いた当日は 0 件だった。②が本命で、初回に 2 件の実害が出た:**
 *   - `Alert.titleTag` … docs は `h4`、実装は **`div`**。読んだ人は「見出しが出る」と
 *     信じるが出ない（T211「見出しに見えるが要素が div」と同じ形）
 *   - `Heatmap.colorRange` … docs は `--wim-color-primary`、実装は
 *     **`--wim-color-chart-primary`**。どちらも実在するので `check:doc-token-refs`
 *     では捕まらない。書き写すとチャートの色が変わる
 *
 * **設計上の要点 3 つ。**
 *
 * 1. **値は prop ごとに持つ。** 全体プールで許すと ① の意味が消える
 *    （それが `check:doc-drift` の B が値を見られない理由そのもの）。
 *
 * 2. **`Extract<A, B>` は第 2 型引数だけを採る。** 素直にユニオンを畳むと
 *    第 1 型引数まで許してしまい、`Button size="5xl"` が通る
 *    （`Button.size` は `Extract<ComponentSize, "sm" | "md" | "lg">`）。
 *    表示側の `stories/Docgen.tsx` も第 2 型引数だけを出しており、そちらが正しい。
 *
 * 3. **`computed: true` の既定値は比較しない。** `new Date().getFullYear()` に対して
 *    docs が「current year」と書くのは**正しい言い換え**で、式を書き写せという要求は
 *    ドキュメントを悪くする。式かリテラルかは docgen が `computed` で持っているので、
 *    人の判断を挟まずに分けられる。
 *
 * **読めなかったものは必ず数えて出す。** 値を解決できない prop（`boolean` /
 * `ReactNode` / 開いた `string` など）は判定しようがない。それを黙って 0 件に
 * 混ぜると、「ズレなし」が「見ていない」の意味になる（`check:doc-drift` が
 * ロケール JSON の入れ子で一度踏んだのと同じ穴）。
 *
 * **ここで見ないもの**: docs 本文が名指しする prop 名そのものの誤り
 * （`check:doc-drift` の判定 A/B の担当）。
 *
 * Usage: node scripts/check-prop-values.js
 */
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, "..");

const walk = (dir, re, acc = []) => {
  if (!fs.existsSync(dir)) return acc;
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, e.name);
    if (e.isDirectory()) walk(p, re, acc);
    else if (re.test(e.name)) acc.push(p);
  }
  return acc;
};

// --- docgen（`docgen_index.json` は props 空の一覧なので混ぜない） ---
const docgen = {};
for (const f of walk(path.join(root, "src", "data"), /^docgen_.*\.json$/)) {
  if (path.basename(f) === "docgen_index.json") continue;
  for (const [name, entry] of Object.entries(JSON.parse(fs.readFileSync(f, "utf8")))) {
    const existing = Object.keys(docgen[name]?.props ?? {}).length;
    if (existing && !Object.keys(entry.props ?? {}).length) continue;
    docgen[name] = entry;
  }
}

/**
 * 型エイリアスの値表。`tsType` は `ButtonIntent` のように**名前しか残さない**ので、
 * ソースの union 宣言から引けるようにしておく。
 */
const aliasValues = {};
for (const f of walk(path.join(root, "src"), /\.tsx?$/)) {
  if (/\.test\./.test(f)) continue;
  const src = fs.readFileSync(f, "utf8");
  for (const m of src.matchAll(/type\s+(\w+)\s*=\s*([^;]{0,600});/g)) {
    const [, name, body] = m;
    if (!body.includes('"')) continue;
    const vals = [...body.matchAll(/"([^"]+)"/g)].map((x) => x[1]);
    if (!vals.length) continue;
    (aliasValues[name] ??= new Set());
    for (const v of vals) aliasValues[name].add(v);
  }
}

/** その型が取りうる文字列リテラル。解決できなければ空集合を返す。 */
const literalsOf = (t, depth = 0) => {
  const out = new Set();
  if (!t || depth > 6) return out;
  // 要点 2: Extract<A, B> は絞った後（第 2 型引数）だけが正しい
  if (t.name === "Extract" && t.elements?.[1]) {
    for (const v of literalsOf(t.elements[1], depth + 1)) out.add(v);
    return out;
  }
  if (t.name === "literal" && typeof t.value === "string") {
    out.add(t.value.replace(/^["']|["']$/g, ""));
  }
  if (t.name && aliasValues[t.name]) for (const v of aliasValues[t.name]) out.add(v);
  if (Array.isArray(t.elements)) {
    for (const el of t.elements) for (const v of literalsOf(el, depth + 1)) out.add(v);
  }
  return out;
};

/** `Table.Header` → `tableHeader`（`stories/Docgen.tsx` の `toDocBaseName` と同じ規則） */
const toDocBase = (name) => {
  const compact = name.replace(/\./g, "");
  return compact.charAt(0).toLowerCase() + compact.slice(1);
};

/**
 * 一族（`Card` と `Card.Header` をまとめた単位）ごとの prop 表。
 * ロケールキーの接頭辞は一族の頭で書かれるため、値の照合も一族で持つ。
 */
const families = {};
const propsByDocBase = {};
for (const [comp, entry] of Object.entries(docgen)) {
  const base = comp.split(".")[0];
  const fam = (families[base] ??= {});
  propsByDocBase[toDocBase(comp)] = entry.props ?? {};
  for (const [name, p] of Object.entries(entry.props ?? {})) {
    const cur = (fam[name] ??= { values: new Set(), resolved: false });
    const vals = literalsOf(p.tsType);
    if (vals.size) {
      cur.resolved = true;
      for (const v of vals) cur.values.add(v);
    }
  }
}

// --- en の文言（**入れ子なので必ず再帰で潰す**） ---
const locales = {};
const flatten = (obj, prefix = "") => {
  for (const [k, v] of Object.entries(obj)) {
    if (typeof v === "string") locales[prefix + k] = v;
    else if (v && typeof v === "object") flatten(v, `${prefix}${k}.`);
  }
};
for (const f of walk(path.join(root, "public/locales/en"), /\.json$/)) {
  flatten(JSON.parse(fs.readFileSync(f, "utf8")));
}
/** 自己テスト用。実運用では未設定。 */
if (process.env.WIM_INJECT_LOCALES) {
  Object.assign(locales, JSON.parse(fs.readFileSync(process.env.WIM_INJECT_LOCALES, "utf8")));
}

const leafOf = (key) => key.slice(key.lastIndexOf(".") + 1);
/** 比較用に空白を落とす（`4/3` と `4 / 3` を同じと見る）。囲みの引用符も外す。 */
const norm = (s) => String(s).trim().replace(/^["']|["']$/g, "").replace(/\s+/g, "");

// =====================================================================
// ① docs 本文の `prop="value"`
// =====================================================================
const badValues = [];
let valueRefsChecked = 0;
let valueRefsSkipped = 0;
let valueRefsNotAProp = 0;
for (const [base, props] of Object.entries(families)) {
  if (!Object.keys(props).length) continue;
  const prefix = `${base.toLowerCase()}_`;
  for (const [key, text] of Object.entries(locales)) {
    if (!leafOf(key).toLowerCase().startsWith(prefix)) continue;
    for (const m of text.matchAll(/`(\w+)="([\w-]+)"`/g)) {
      const [, prop, value] = m;
      const info = props[prop];
      // prop 名の誤りは check:doc-drift の担当。ここでは知っている prop だけ見る。
      // **数は出す** ── docs の `x="y"` の多くは `role="region"` のような DOM 属性や
      // `Terminal` の `type` のようなデータ項目で、prop ではない。黙って落とすと
      // 「照合 5 件」が全体のうちどれだけなのか読めなくなる。
      if (!info) {
        valueRefsNotAProp += 1;
        continue;
      }
      if (!info.resolved) {
        valueRefsSkipped += 1;
        continue;
      }
      valueRefsChecked += 1;
      if (!info.values.has(value)) {
        badValues.push([base, prop, value, [...info.values].join(" | "), key]);
      }
    }
  }
}

// =====================================================================
// ② prop 説明キーの `@default`
// =====================================================================
const badDefaults = [];
let defaultsChecked = 0;
let defaultsComputed = 0;
let defaultsNoImpl = 0;
for (const [key, text] of Object.entries(locales)) {
  const m = /^([A-Za-z0-9]+)_prop_([A-Za-z_]\w*)$/.exec(leafOf(key));
  if (!m) continue;
  const dm = /@default[ \t]+(.+?)[ \t]*$/m.exec(text);
  if (!dm) continue;
  const props = propsByDocBase[m[1]];
  const def = props?.[m[2]]?.defaultValue;
  // 実在しない prop を指すキーは ④ が落とす。ここは「prop はあるが docgen に
  // 既定値の記録が無い」もの（分割代入以外で既定を与えている等）で、比較しようがない。
  if (!def) {
    defaultsNoImpl += 1;
    continue;
  }
  // 要点 3: 式の既定値に対して docs が言い換えるのは正しい
  if (def.computed) {
    defaultsComputed += 1;
    continue;
  }
  defaultsChecked += 1;
  if (norm(dm[1]) !== norm(def.value)) {
    badDefaults.push([m[1], m[2], dm[1].trim(), String(def.value), key, "@default"]);
  }
}

// =====================================================================
// ④ 実在しない prop を指す説明キー（T226）
// =====================================================================
/**
 * `doc.<component>_prop_<name>` は `stories/Docgen.tsx` が props 表の説明として引く。
 * **指し先の prop が無いキーは、どこにも描画されない。** それでいて `i18n:sync` は
 * 3 言語に同期し続け、`i18n:check` は件数に数える ── **翻訳コストだけ払って
 * 出力が 0 の文字列**が溜まる。
 *
 * 2026-08-23 に 13 件（3 言語で 39 個）あった。内訳と、そこから分かったこと:
 *   - `bentogrid_prop_*` 4 件 … 正しくは `bentoGridItem_prop_*`。**キー名の綴りが
 *     1 か所違うだけで黙って死ぬ**（`desc` は実際の prop 名 `description` とも違った）。
 *     その結果 `BentoGridItem` の 4 prop は説明が空欄のまま出荷され、正しい文言は
 *     死んだキーの中にあった。**`BentoGrid.mdx` はその props 表すら出していなかった。**
 *   - `contextmenu_prop_{1..5}_desc` 5 件 … 手書きの表を作りかけた残骸
 *   - 消えた prop 4 件 … `ScrollProgress.color` は JSDoc に改名の記録が残っていた
 *
 * **消す前に「参照されていない」を静的・動的の両方で確かめること。** 実行時に
 * このキーを組み立てるのは `Docgen` だけで、docgen に在る prop からしか作らない。
 */
const deadPropKeys = [];
let propKeysChecked = 0;
for (const key of Object.keys(locales)) {
  const m = /^([A-Za-z0-9]+)_prop_([A-Za-z_]\w*)$/.exec(leafOf(key));
  if (!m) continue;
  propKeysChecked += 1;
  const props = propsByDocBase[m[1]];
  if (!props) {
    deadPropKeys.push([key, `コンポーネント \`${m[1]}\` が docgen に無い`]);
  } else if (!(m[2] in props)) {
    deadPropKeys.push([key, `\`${m[1]}\` に \`${m[2]}\` という prop が無い`]);
  }
}

// =====================================================================
// ⑤ props 表で説明欄が空になる prop（T220）
// =====================================================================
/**
 * `Docgen` の説明は `t("doc.<base>_prop_<name>", { defaultValue: JSDoc })` なので
 * （`stories/Docgen.tsx`）、**locale キーが無く JSDoc も空のときだけ空欄**になる。
 * 表の 1 列がまるごと白いまま出荷されるので、読む側には「説明が無い prop」と
 * 「まだ書いていない prop」の区別が付かない。
 *
 * 2026-08-23 の初回は 8 件（`ProgressRing` の 6 件 ＝ T219 と同じ `WithAccessibleName`
 * が description ごと落としていた分、`IconButton` / `LinkButton` の `asChild` 各 1 件）。
 * **ベースラインは置かない。** T219 で 6 件が消え、残り 2 件もこの回で埋めて 0 になった
 * ので、**0 のまま維持する**のが正しい状態。
 *
 * **`MDX で props 表を出しているものだけ**を見る。表に出ないコンポーネントの
 * 空欄は誰の目にも触れないので、直す動機が無いものを赤くしない。
 */
const mdxFiles = [
  ...walk(path.join(root, "stories"), /\.mdx$/),
  ...walk(path.join(root, "docs"), /\.mdx$/),
];
const renderedProps = new Set();
for (const f of mdxFiles) {
  const src = fs.readFileSync(f, "utf8");
  for (const m of src.matchAll(/<Docgen[^>]*\/>/g)) {
    if (!/section="props"/.test(m[0])) continue;
    const name = m[0].match(/componentName="([^"]+)"/);
    if (name) renderedProps.add(name[1]);
  }
}
const localeLeaves = new Set(Object.keys(locales).map(leafOf));
const blankDescriptions = [];
let describedChecked = 0;
for (const comp of renderedProps) {
  const entry = docgen[comp];
  if (!entry) continue;
  const base = toDocBase(comp);
  for (const [name, p] of Object.entries(entry.props ?? {})) {
    describedChecked += 1;
    if ((p.description || "").trim()) continue;
    if (localeLeaves.has(`${base}_prop_${name}`)) continue;
    blankDescriptions.push([comp, name]);
  }
}

// =====================================================================
// ③ docs 本文の「defaults to `X`」
// =====================================================================
let proseDefaultsChecked = 0;
for (const [base, props] of Object.entries(families)) {
  const docBaseProps = propsByDocBase[toDocBase(base)];
  if (!docBaseProps) continue;
  const prefix = `${base.toLowerCase()}_`;
  for (const [key, text] of Object.entries(locales)) {
    if (!leafOf(key).toLowerCase().startsWith(prefix)) continue;
    const hits = [
      ...[...text.matchAll(/`(\w+)`[^.`]{0,60}?default(?:s|ed)?\s*(?:to|is|:)?\s*`([\w./-]+)`/gi)].map(
        (x) => [x[1], x[2]],
      ),
      ...[...text.matchAll(/default(?:s|ed)?\s*(?:to|is|:)\s*`([\w./-]+)`[^.`]{0,40}?`(\w+)`/gi)].map(
        (x) => [x[2], x[1]],
      ),
    ];
    for (const [prop, value] of hits) {
      const def = docBaseProps[prop]?.defaultValue;
      if (!def || def.computed) continue;
      proseDefaultsChecked += 1;
      if (norm(value) !== norm(def.value)) {
        badDefaults.push([toDocBase(base), prop, value, String(def.value), key, "本文"]);
      }
    }
  }
}

// =====================================================================
// 報告
// =====================================================================
console.log("--- check:prop-values（docs が書く prop の値・既定値が実装と一致しているか）---\n");
const resolvableProps = Object.values(families).reduce(
  (a, props) => a + Object.values(props).filter((p) => p.resolved).length,
  0,
);
const allProps = Object.values(families).reduce((a, props) => a + Object.keys(props).length, 0);
console.log(
  `一族 ${Object.keys(families).length} / prop ${allProps}（うち取りうる値を解決できた ${resolvableProps}）/ en の文言 ${Object.keys(locales).length}`,
);
console.log(
  `照合した数 — 値の記述 ${valueRefsChecked} 件（prop ではない語だったもの ${valueRefsNotAProp}・型を解決できず判定不能 ${valueRefsSkipped}）/ ` +
    `@default ${defaultsChecked} 件（式のため対象外 ${defaultsComputed}・実装に既定値の記録が無く比較不能 ${defaultsNoImpl}）/ ` +
    `本文の既定値 ${proseDefaultsChecked} 件 / prop 説明キー ${propKeysChecked} 件 / 表に出る prop の説明 ${describedChecked} 件`,
);

let failed = false;

if (badValues.length) {
  failed = true;
  console.error(`\n✗ docs が書いている値が、その prop の取りうる値に無い（${badValues.length} 件）:`);
  for (const [base, prop, value, allowed, key] of badValues) {
    console.error(`  - ${base}: ${prop}="${value}"  実際は ${allowed}  (${key})`);
  }
}

if (badDefaults.length) {
  failed = true;
  console.error(`\n✗ docs の既定値が実装と違う（${badDefaults.length} 件）:`);
  for (const [base, prop, docsValue, implValue, key, where] of badDefaults) {
    console.error(`  - ${base}.${prop}: docs は ${docsValue} / 実装は ${implValue}  [${where}]  (${key})`);
  }
  console.error(
    "\n  実装を読んで docs 側を直すこと。**実装のほうが間違っている場合もある**ので、\n" +
      "  どちらを直すかは値の意味から決める（`Alert.titleTag` は docs が `h4` と書き、\n" +
      "  実装は `div` だった ── 直したのは docs 側ではなく、どちらが正しいかを見てから）。",
  );
}

if (deadPropKeys.length) {
  failed = true;
  console.error(`\n✗ 実在しない prop を指す説明キー（${deadPropKeys.length} 件・3 言語で ${deadPropKeys.length * 3} 個の文字列）:`);
  for (const [key, why] of deadPropKeys) console.error(`  - ${key} — ${why}`);
  console.error(
    "\n  **どこにも描画されないまま翻訳され続けます。** キー名の綴り違い（`bentogrid` と\n" +
      "  `bentoGridItem`）なら rename、消えた prop なら 3 言語とも削除してください。\n" +
      "  消す前に、静的な参照（リポジトリ全体の grep）と動的な組み立て（`t()` の\n" +
      "  テンプレート）の両方で未参照を確かめること。",
  );
}

if (blankDescriptions.length) {
  failed = true;
  console.error(`\n✗ props 表の説明欄が空のまま出る prop（${blankDescriptions.length} 件）:`);
  for (const [comp, name] of blankDescriptions) console.error(`  - ${comp}.${name}`);
  console.error(
    "\n  ソースに JSDoc を書くか、`doc.<component>_prop_<prop>` のキーを 3 言語で\n" +
      "  足してください。**locale キーがあると JSDoc は表に出ない**ので、キーを持つ\n" +
      "  コンポーネントでは JSDoc だけ直しても表示は変わりません。",
  );
}

if (failed) process.exit(1);

console.log("\n✓ docs が書く prop の値・既定値は実装と一致しています。");
