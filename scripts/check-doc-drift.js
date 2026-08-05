#!/usr/bin/env node
/**
 * Guard: docs が**実装と食い違っていないか**（本文の内容そのもの）。
 *
 * `audit-mdx` は「必須セクションがあるか」「Docgen 参照が解決するか」「書式」を見る。
 * **本文が何を主張しているかは誰も見ていなかった。** 2026-08-05 に手で当たったら
 * 3 種類のズレが出た:
 *
 *   - `docs/LayoutSelection.mdx` は **`Box` の `component` prop** を使えと書いていた。
 *     `Box` の prop は最初のコミットから **`as`** で、`component` は一度も存在しない。
 *     **書き写すと動かない**指示が、2026-02-28 からそのまま出ていた。
 *   - `Breadcrumb` と `Icon` の docs は size を **`small` / `medium` / `large`** と
 *     書いていた。実際は `sm` / `md` / `lg`（`ComponentSizeBasic`）。
 *   - **出荷アイコン 88 個のうち 14 個が `Icon.mdx` のギャラリーに無かった**。
 *     0.16.0 で足した分（T78 の RichTextEditor 由来 9 個ほか）がそのまま漏れていた。
 *
 * どれも「人が読めば気付く」類だが、**3 言語 × 200 超の MDX を人が読み直すことは無い**。
 *
 * 見るもの:
 *   ① `<Canvas of={X.Y} />` が指すストーリー export が実在するか
 *   ② docs の文言がバッククォートで名指しする **prop 名**が、そのコンポーネント一族に在るか
 *   ③ 出荷アイコンが `Icon.mdx` のギャラリーに載っているか
 *
 * **②はノイズとの戦いになる。** 最初の版は 56 件出したが**中身は全部ノイズ**だった:
 *   - `Text` が `textarea_*` のキーを、`Code` が `codediff_*` を拾っていた
 *     （接頭辞を `startsWith(base)` で見ていたため）→ `base + "_"` の完全一致にした
 *   - `size="small"` の `small` を prop 名として数えていた
 *     → docgen の tsType から**取りうる値**を集めて除外する
 * **「鳴る」だけでは足りず、「鳴ってはいけないところで鳴らない」まで含めて設計する。**
 *
 * もう 1 つの落とし穴: **ロケール JSON は入れ子**（`components.json` は最上位 61 キーの
 * うち文字列が 2 つだけ）。最上位だけを見ると走査対象がほぼ空になり、**「ズレなし」が
 * 「計測不成立」の意味になる**。最初の版は実際にこれで検出漏れした。
 *
 * Usage: node scripts/check-doc-drift.js
 */
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, "..");

/**
 * ギャラリーに載せない出荷アイコン。**非推奨のものだけ**が正当な理由。
 * export を消すのは破壊的変更なので残っているが、カタログに並べると
 * 「使ってよい語彙」に見えてしまう。
 */
const NOT_IN_GALLERY = {
  CloseSmallIcon: "非推奨（2026-08-05 に CloseIcon と統合。次の major で外す）",
};

const walk = (dir, re, acc = []) => {
  if (!fs.existsSync(dir)) return acc;
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, e.name);
    if (e.isDirectory()) walk(p, re, acc);
    else if (re.test(e.name)) acc.push(p);
  }
  return acc;
};
const rel = (p) => path.relative(root, p).replace(/\\/g, "/");

const mdxFiles = [
  ...walk(path.join(root, "stories"), /\.mdx$/),
  ...walk(path.join(root, "docs"), /\.mdx$/),
];

// --- ① <Canvas of={…}> が指すストーリー ---
const missingStories = [];
for (const f of mdxFiles) {
  const src = fs.readFileSync(f, "utf8");
  const imports = {};
  for (const m of src.matchAll(/import\s+\*\s+as\s+(\w+)\s+from\s+"([^"]+)"/g)) imports[m[1]] = m[2];
  for (const m of src.matchAll(/<Canvas\s+of=\{(\w+)\.(\w+)\}/g)) {
    const [, ns, story] = m;
    if (!imports[ns]) continue;
    const target = path.resolve(path.dirname(f), `${imports[ns]}.tsx`);
    if (!fs.existsSync(target)) {
      missingStories.push([rel(f), `${ns}.${story}`, "ストーリーファイルが無い"]);
    } else if (!new RegExp(`export const ${story}\\b`).test(fs.readFileSync(target, "utf8"))) {
      missingStories.push([rel(f), `${ns}.${story}`, "その export が無い"]);
    }
  }
}

// --- ③ 出荷アイコン vs ギャラリー ---
const toPascal = (n) => `${n.split("-").map((s) => s[0].toUpperCase() + s.slice(1)).join("")}Icon`;
const shipped = fs
  .readdirSync(path.join(root, "src", "icon"))
  .filter((f) => f.endsWith(".svg"))
  .map((f) => toPascal(f.replace(".svg", "")));
const gallerySrc = fs.readFileSync(path.join(root, "stories/media/Icon/Icon.mdx"), "utf8");
const listed = new Set([...gallerySrc.matchAll(/<IconItem name="([A-Za-z]+)"/g)].map((m) => m[1]));
const ungalleried = shipped.filter((n) => !listed.has(n) && !(n in NOT_IN_GALLERY));
const ghosts = [...listed].filter((n) => !shipped.includes(n));
// 除外リストが**古くなっていないか**も見る。消えたアイコンの言い訳が残り続けないように。
const staleExclusions = Object.keys(NOT_IN_GALLERY).filter((n) => !shipped.includes(n) || listed.has(n));

// --- ② docs が名指しする prop ---
const docgen = {};
for (const f of walk(path.join(root, "src", "data"), /^docgen_.*\.json$/)) {
  Object.assign(docgen, JSON.parse(fs.readFileSync(f, "utf8")));
}
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

/**
 * **prop の「取りうる値」を集める。** docs は `variant="dots"` の `dots` を裏書きで
 * 書くのが普通なので、値を prop 名として数えると findings がノイズで埋まる。
 *
 * docgen の tsType だけでは足りない ── `LoaderVariant` のような**型エイリアス**は
 * 名前しか残らず、`bars` / `dots` / `pulse` が値だと分からない（実際これで 3 件の
 * 偽陽性が出た）。**ソースの union 宣言からも集める。**
 */
const valuePool = new Set();
for (const f of [...walk(path.join(root, "src"), /\.tsx?$/)]) {
  if (/\.test\./.test(f)) continue;
  const src = fs.readFileSync(f, "utf8");
  for (const m of src.matchAll(/(?:export\s+)?type\s+\w+\s*=\s*([^;]{0,400});/g)) {
    const body = m[1];
    if (!body.includes("|")) continue;
    for (const lit of body.matchAll(/"([A-Za-z][\w-]*)"/g)) valuePool.add(lit[1]);
  }
}

const families = {};
for (const [comp, entry] of Object.entries(docgen)) {
  const base = comp.split(".")[0];
  const fam = (families[base] ??= { props: new Set(), values: new Set() });
  for (const [name, p] of Object.entries(entry.props ?? {})) {
    fam.props.add(name);
    // tsType は入れ子なので、文字列リテラルを丸ごと拾う（`"sm"` のような取りうる値）
    for (const m of JSON.stringify(p.tsType ?? {}).matchAll(/\\"([A-Za-z][\w-]*)\\"/g)) fam.values.add(m[1]);
    if (p.defaultValue?.value) fam.values.add(String(p.defaultValue.value).replace(/['"]/g, ""));
  }
}

/**
 * 判定は 2 本立てる。**1 本にまとめると、片方を通すために広げた条件が
 * もう片方の穴になる。** 実際そうなった: `bars` / `dots` / `pulse`（`Loader` の値が
 * `Icon` の比較表に出てくる）を黙らせるために値プールを全体共有にしたら、
 * **`WimRadiusKey` に `"component"` というトークン名がある**ために
 * **Box の `component` prop という当の誤りが隠れた**。
 *
 *   A. 「`X` prop」と**書いてある**もの → X はその一族の prop でなければならない。
 *      値プールは見ない（`radius="component"` が正当でも、`component` prop は無い）。
 *   B. バッククォートの裸の語 → 一族の prop か、**どこかの型の値**であればよい。
 *      他コンポーネントの値を引き合いに出す文（比較表）が普通にあるため広く取る。
 */
const staleProps = [];
const seen = new Set();
const push = (base, key, name, rule) => {
  const id = `${base}|${name}`;
  if (seen.has(id)) return;
  seen.add(id);
  staleProps.push([base, key, name, rule]);
};

for (const [base, fam] of Object.entries(families)) {
  if (!fam.props.size) continue;
  const prefix = `${base.toLowerCase()}_`;
  for (const [key, val] of Object.entries(locales)) {
    const leaf = key.slice(key.lastIndexOf(".") + 1).toLowerCase();
    if (!leaf.startsWith(prefix)) continue;

    // A: 「`X` prop」「prop `X`」と名指ししている
    for (const m of [...val.matchAll(/`(\w+)`\s+(?:prop|Prop)\b/g), ...val.matchAll(/\b(?:prop|Prop)\s+`(\w+)`/g)]) {
      const name = m[1];
      if (!/^[a-z][A-Za-z]*$/.test(name) || /^on[A-Z]/.test(name)) continue;
      if (fam.props.has(name)) continue;
      push(base, key, name, "prop と名指し");
    }

    // B: 裸のバッククォート
    for (const m of val.matchAll(/`(\w+)`/g)) {
      const name = m[1];
      if (!/^[a-z][A-Za-z]*$/.test(name)) continue;
      // DOM のイベントハンドラは docgen に載らない（継承なので）。`onClick` は
      // TabBar.Item で実際に効くのに「無い」と報告されていた。
      if (/^on[A-Z]/.test(name)) continue;
      if (name === "true" || name === "false") continue;
      if (fam.props.has(name) || fam.values.has(name) || valuePool.has(name)) continue;
      push(base, key, name, "prop にも値にも無い");
    }
  }
}
const uniqueStale = staleProps;

// --- 報告 ---
console.log("--- check:doc-drift（docs の本文が実装と一致しているか）---\n");
console.log(
  `MDX ${mdxFiles.length} / en の文言 ${Object.keys(locales).length} / props を持つコンポーネント ` +
    `${Object.values(families).filter((f) => f.props.size).length} / 出荷アイコン ${shipped.length}`,
);

let failed = false;

if (missingStories.length) {
  failed = true;
  console.error(`\n✗ <Canvas of={…}> が実在しないストーリーを指しています（${missingStories.length} 件）:`);
  for (const [f, ref, why] of missingStories) console.error(`  - ${f}: ${ref} — ${why}`);
}

if (ungalleried.length) {
  failed = true;
  console.error(`\n✗ 出荷しているのに Icon.mdx のギャラリーに無いアイコン（${ungalleried.length} 件）:`);
  console.error(`  ${ungalleried.join(" ")}`);
  console.error(
    "\n  `stories/media/Icon/Icon.mdx` の該当する節に `<IconItem>` を足してください。\n" +
      "  載せない正当な理由がある場合（非推奨など）は、このスクリプトの `NOT_IN_GALLERY` に理由つきで書きます。",
  );
}
if (ghosts.length) {
  failed = true;
  console.error(`\n✗ ギャラリーにあるが出荷していないアイコン（${ghosts.length} 件）:`);
  console.error(`  ${ghosts.join(" ")}`);
}
if (staleExclusions.length) {
  failed = true;
  console.error(`\n✗ NOT_IN_GALLERY の記載が現実と合っていません（${staleExclusions.length} 件）:`);
  for (const n of staleExclusions) console.error(`  - ${n}: ${NOT_IN_GALLERY[n]}`);
}

if (uniqueStale.length) {
  failed = true;
  console.error(`\n✗ docs が名指ししているが、その prop が無いコンポーネント（${uniqueStale.length} 件）:`);
  for (const [comp, key, name, rule] of uniqueStale) console.error(`  - ${comp}: \`${name}\`  [${rule}]  (${key})`);
  console.error(
    "\n  実装を読んで、正しい prop 名・正しい値に直してください。**prop でないもの**\n" +
      "  （設計上の寸法など）をバッククォートで囲っている場合は、囲みを外します。",
  );
}

if (failed) process.exit(1);

console.log(
  `\n✓ ズレはありません（ギャラリー ${listed.size} / 除外 ${Object.keys(NOT_IN_GALLERY).length} 件は理由つき）。`,
);
