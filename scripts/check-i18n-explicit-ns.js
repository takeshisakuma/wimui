#!/usr/bin/env node
/**
 * Guard: **`ns:key` と名前空間を名指しした参照が、その名前空間に実在するか**（ラチェット）。
 *
 * i18next は `ALL_NAMESPACES` の順で先勝ちなので、複製されたキーは「負けている側は
 * 表示されない」と読める。**ところが名前空間を名指しすれば、並び順で負けていても
 * そちらが出る。** つまり「負けている複製」は消してよいとは限らない。
 *
 * さらに `fallbackNS: ALL_NAMESPACES` が設定されている（`.storybook/i18n.ts` /
 * `src/i18n/instance.ts`）ので、**名指しした名前空間にキーが無くても落ちない** ──
 * 黙って別の名前空間の値が出る。**壊れないぶん気付けない。**
 *
 * これで実際に踏んだ（2026-08-26 / T229 の 5 回目）: `otp.digit` を「`components` が
 * 勝つので `form` 側は死んでいる」と判断して `form.json` から消したが、
 * `stories/form/OtpInput/OtpInput.stories.tsx` は `t("form:otp.digit", { index })` と
 * 名指しで引いていた。エラーにはならず、**OTP の各桁の読み上げが ja で
 * 「{{index}}番目の桁」から「{{index}}番目の数字」に変わる**ところだった。
 *
 * **なぜ既存の検査を全部すり抜けたか**:
 *   - `check-locale-duplicates` は「複製が在るか」しか見ない。参照は見ない
 *   - `scripts/lib/locale-keys.js` の `resolveLocale` は**素の解決しか模していない**
 *     ので、`ns:` 付きの経路は再現されない。「解決結果が変わっていない」という
 *     検証は、この壊れ方に対して**構造的に無力**だった
 *   - `i18n:check` は 3 言語間の整合を見るだけで、参照側は見ない
 *
 * **数えるもの**: `stories/` `docs/` `src/` の中の `"<ns>:<key>"` 文字列リテラルで、
 * `<ns>` は実在するのに `<key>` がそこに無いもの。今日の件数で凍結し、**増えたら落ちる**。
 * 「消したせいで名指しが宙に浮いた」がこれで捕まる。
 *
 * **キーがどの名前空間にも無いもの**は fallbackNS でも拾えない＝素で壊れているので、
 * ラチェットとは別に**無条件で落とす**。
 *
 * **見ないもの**: `` t(`docs_stories_display:${key}`) `` のようにテンプレートで
 * 組まれる参照。キーが実行時にしか決まらないので静的には追えない。件数だけ出す。
 *
 * Usage: node scripts/check-i18n-explicit-ns.js [--list]
 */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { readNamespaceOrder } from "./lib/locale-keys.js";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, "..");
const BASELINE = path.join(__dirname, "i18n-explicit-ns-baseline.json");
const LOCALES = ["en", "ja", "pt"];
const SCAN_DIRS = ["stories", "docs", "src"];
const SKIP = /(^|[\\/])(node_modules|generated|__snapshots__)([\\/]|$)/;
const EXT = /\.(tsx?|jsx?|mdx|json)$/;

const namespaces = new Set(readNamespaceOrder(root));

/** locale/ns -> Set<平坦化したキー>、および「どこかに在るキー」の集合。 */
const keysIn = new Map();
const anywhere = new Set();
for (const locale of LOCALES) {
  const dir = path.join(root, "public", "locales", locale);
  for (const file of fs.readdirSync(dir)) {
    if (!file.endsWith(".json")) continue;
    const ns = path.basename(file, ".json");
    const set = new Set();
    const flatten = (obj, prefix = "") => {
      for (const [k, v] of Object.entries(obj)) {
        if (typeof v === "string") {
          set.add(prefix + k);
          anywhere.add(prefix + k);
        } else if (v && typeof v === "object") flatten(v, `${prefix}${k}.`);
      }
    };
    flatten(JSON.parse(fs.readFileSync(path.join(dir, file), "utf8")));
    keysIn.set(`${locale}/${ns}`, set);
  }
}

function walk(dir, out = []) {
  if (!fs.existsSync(dir)) return out;
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, e.name);
    if (SKIP.test(p)) continue;
    if (e.isDirectory()) walk(p, out);
    else if (EXT.test(e.name)) out.push(p);
  }
  return out;
}

const REF = /["'`]([a-z][a-z0-9_-]*):([A-Za-z][A-Za-z0-9_.]*)["'`]/g;
const TEMPLATE = /`([a-z][a-z0-9_-]*):\$\{/g;

/** 名指しした名前空間にキーが無いもの（fallbackNS で別の値が出る）。 */
const adrift = new Set();
/** どの名前空間にも無いもの（素で壊れている）。 */
const broken = [];
let checked = 0;
let dynamic = 0;

for (const file of SCAN_DIRS.flatMap((d) => walk(path.join(root, d)))) {
  const src = fs.readFileSync(file, "utf8");
  for (const m of src.matchAll(TEMPLATE)) if (namespaces.has(m[1])) dynamic += 1;
  for (const m of src.matchAll(REF)) {
    const [, ns, key] = m;
    if (!namespaces.has(ns)) continue;
    checked += 1;
    const here = LOCALES.some((l) => keysIn.get(`${l}/${ns}`)?.has(key));
    if (here) continue;
    if (!anywhere.has(key)) broken.push({ file: path.relative(root, file).replace(/\\/g, "/"), ref: `${ns}:${key}` });
    else adrift.add(`${ns}:${key}`);
  }
}

const current = [...adrift].sort();

if (process.argv.includes("--list")) {
  console.log(`名指しした名前空間にキーが無い参照: ${current.length} 件\n`);
  for (const r of current) console.log(`  ${r}`);
  process.exit(0);
}

const baseline = JSON.parse(fs.readFileSync(BASELINE, "utf8"));
const known = new Set(baseline.known);
const added = current.filter((r) => !known.has(r));
const fixed = [...known].filter((r) => !adrift.has(r));

console.log("--- check:i18n-explicit-ns（ns:key の名指し参照）---\n");
console.log(
  `名指し参照 ${checked} 件を照合（テンプレート組み立て ${dynamic} 件は静的に追えないので対象外）`,
);
console.log(`名指し先にキーが無いもの ${current.length}（凍結 ${known.size}）/ どこにも無いもの ${broken.length}`);

let failed = false;

if (broken.length) {
  failed = true;
  console.error(`\n✗ どの名前空間にも無いキーを引いています（${broken.length} 件）:`);
  for (const b of broken.slice(0, 20)) console.error(`  - ${b.file}\n      ${b.ref}`);
}

if (added.length) {
  failed = true;
  console.error(`\n✗ 名指し先にキーが無い参照が増えています（${added.length} 件）:`);
  for (const r of added.slice(0, 20)) console.error(`  - ${r}`);
  console.error(
    "\n  **名前空間を名指しした参照は、並び順で負けていても表示される。**\n" +
      "  複製を消すときは、消す側を `ns:key` で引いている箇所が無いか必ず確かめること。\n" +
      "  `fallbackNS` があるのでエラーにはならず、**黙って別の名前空間の値に変わる。**",
  );
}

if (fixed.length) {
  failed = true;
  console.error(`\n✗ 直っているのに凍結一覧に残っています（${fixed.length} 件）:`);
  for (const r of fixed.slice(0, 20)) console.error(`  - ${r}`);
  console.error(
    `\n  \`${path.relative(root, BASELINE).replace(/\\/g, "/")}\` の \`known\` から外してください。`,
  );
}

if (failed) process.exit(1);
console.log(`\n✓ 名指し参照は増えていません（宙に浮いているもの ${current.length} 件）。`);
