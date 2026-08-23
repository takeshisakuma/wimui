#!/usr/bin/env node
/**
 * Guard: **a11y 節が「何も言っていない定型文」のまま増えないか**（T222）。
 *
 * MDX の必須セクションは `audit-mdx` が「在るか」だけを見る。**中身は誰も見ていない。**
 * 2026-08-23 に数えたら `doc.<component>_a11y_desc` 151 件のうち **91 件（60%）が
 * 一字一句同じ 2 つの文**だった:
 *
 *   - 「Follows WAI-ARIA guidelines with proper roles, labels, and keyboard
 *     navigation support.」… 82 件
 *   - 「Accessible through screen readers with proper ARIA roles and labels for
 *     data points.」… 9 件（チャート用）
 *
 * **これは読みにくいだけの問題ではない。** T219（`Progress` /`ProgressRing` は
 * `label` / `aria-label` / `aria-labelledby` のいずれか 1 つが**型で必須**）という
 * 中心的な取り決めが、まさにこの定型文の中に埋もれて出荷されていた。
 * 定型文は「書いていない」ことを「書いてある」ように見せる。
 *
 * **全部を一度に埋めるのは AI-slop を量産するだけなので、ラチェットにする。**
 * 既知の分は `a11y-boilerplate-baseline.json` に凍結し、
 *   - 一覧に無いコンポーネントが定型文を使ったら失敗（**増やせない**）
 *   - 一覧にあるのに定型文でなくなっていたら失敗（**直したら台帳から外す**）
 * の 2 方向で締める。片方向だと台帳が現実から離れていく。
 *
 * **書けないものに無理に固有の文を書かせない。** `keyboard_desc` の 22 件が
 * 「特別なキーボード操作は要らない」で揃っているのは**正しい定型文**で、
 * レイアウト部品や見出しに独自の a11y 記述をひねり出させると質が下がる。
 * だからこのガードは「消せ」ではなく「増やすな」しか言わない。
 *
 * **優先順位は実装から決められる。** 対象コンポーネントのソースを
 * `role=` / `aria-*` / フォーカス制御 / キー操作 で走査すると、**a11y の判断が
 * 実際に入っているもの**が浮く（初回はこの方法で `TreeView` / `Menu` /
 * `Transfer` / `CommandPalette` / `TreeSelect` / `ToggleGroup` / `ContextMenu` /
 * `DataGrid` の 8 件を選び、実装を読んで書いた）。痕跡が 0 のものは後回しでよい。
 *
 * Usage: node scripts/check-a11y-boilerplate.js
 */
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, "..");
const BASELINE = path.join(__dirname, "a11y-boilerplate-baseline.json");

/**
 * 「何も言っていない」と判定する文。**完全一致でのみ数える。**
 * 似た文を正規表現で括ると、少しでも中身を足した文まで巻き込んで
 * 「直したのに鳴る」ことになり、直す動機を削ぐ。
 */
const BOILERPLATE = [
  "Follows WAI-ARIA guidelines with proper roles, labels, and keyboard navigation support.",
  "Accessible through screen readers with proper ARIA roles and labels for data points.",
];

const walk = (dir, re, acc = []) => {
  if (!fs.existsSync(dir)) return acc;
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, e.name);
    if (e.isDirectory()) walk(p, re, acc);
    else if (re.test(e.name)) acc.push(p);
  }
  return acc;
};

// **入れ子のロケール JSON を再帰で潰す。** 最上位だけ見ると走査対象がほぼ空になり、
// 「0 件」が「計測不成立」の意味になる（`check-doc-drift` が一度踏んだ穴）。
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

let total = 0;
const current = new Set();
for (const [key, text] of Object.entries(locales)) {
  const leaf = key.slice(key.lastIndexOf(".") + 1);
  const m = /^([A-Za-z0-9]+)_a11y_desc$/.exec(leaf);
  if (!m) continue;
  total += 1;
  if (BOILERPLATE.includes(text.trim())) current.add(m[1]);
}

const baseline = JSON.parse(fs.readFileSync(BASELINE, "utf8"));
const known = new Set(baseline.known);

const added = [...current].filter((n) => !known.has(n)).sort();
const fixed = [...known].filter((n) => !current.has(n)).sort();

console.log("--- check:a11y-boilerplate（a11y 節が中身の無い定型文のままでないか）---\n");
console.log(
  `a11y 節 ${total} 件 / うち定型文 ${current.size} 件（凍結 ${known.size} 件）`,
);

let failed = false;

if (added.length) {
  failed = true;
  console.error(`\n✗ 定型文の a11y 節が増えています（${added.length} 件）:`);
  for (const n of added) console.error(`  - ${n}`);
  console.error(
    "\n  **そのコンポーネントの実装を読んで、実際に何をしているかを書いてください。**\n" +
      "  `role` を固定している / `aria-*` を計算している / フォーカスを移している\n" +
      "  なら、書くことは必ずあります。3 言語とも直すこと。",
  );
}

if (fixed.length) {
  failed = true;
  console.error(`\n✗ 直っているのに凍結一覧に残っています（${fixed.length} 件）:`);
  for (const n of fixed) console.error(`  - ${n}`);
  console.error(
    `\n  \`${path.relative(root, BASELINE).replace(/\\/g, "/")}\` の \`known\` から外してください。\n` +
      "  台帳が現実より大きいままだと、残件の数が嘘になります。",
  );
}

if (failed) process.exit(1);

console.log(
  `\n✓ 定型文は増えていません（残り ${current.size} 件 — 実装に a11y の判断が入っているものから順に埋めてください）。`,
);
