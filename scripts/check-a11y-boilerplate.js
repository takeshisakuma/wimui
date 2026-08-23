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
 * **その走査をここに同梱してある（`--triage`）。** 初回は使い捨てのスクリプトで
 * 数えたが、**信号の取り方を少し変えるだけで件数が変わる**（`VisuallyHidden` と
 * live region と id 結線を落とすと 34 → 31 になった）。**手元でしか再現できない数字は
 * 引き継げない**ので、数え方ごとリポジトリに置く。
 *
 * Usage:
 *   node scripts/check-a11y-boilerplate.js            # ラチェット（CI で走る）
 *   node scripts/check-a11y-boilerplate.js --triage   # 残りを着手順に並べる
 */
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import { resolveLocale } from "./lib/locale-keys.js";

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

// **画面に出るほうの値を読む。** 最初の版は `public/locales/en` を歩いて 1 つの表に
// 潰していたが、`readdir` はアルファベット順なので**後のファイルが前を上書き**し、
// i18next（`ALL_NAMESPACES` の順で**先勝ち**）とは逆の勝者を読んでいた。
// それで `label` と `visuallyhidden` を「定型文のまま」と 2 件数え間違えていた
// （どちらも実際には中身のある文が出ていた）。詳細は `lib/locale-keys.js`。
const { values: locales } = resolveLocale(root, "en");

let total = 0;
const current = new Set();
for (const [key, text] of Object.entries(locales)) {
  const leaf = key.slice(key.lastIndexOf(".") + 1);
  const m = /^([A-Za-z0-9]+)_a11y_desc$/.exec(leaf);
  if (!m) continue;
  total += 1;
  if (BOILERPLATE.includes(text.trim())) current.add(m[1]);
}

/**
 * `--triage`: 残りを「実装に a11y の判断が入っている順」に並べる。
 * **信号の集合をここに固定しておくのが要点** ── 集合が変われば件数が変わるので、
 * 数字だけを引き継ぐと次に数えた人と食い違う。
 */
if (process.argv.includes("--triage")) {
  const SIGNALS = [
    ["role", /\brole=["'{]/g],
    ["aria-*", /\baria-[a-z]+=/g],
    ["focus", /\.focus\(\)|tabIndex|FocusTrap|autoFocus/g],
    ["VisuallyHidden", /VisuallyHidden/g],
    ["live", /aria-live|role="status"|role="alert"/g],
    ["key", /onKeyDown|onKeyUp|KeyboardEvent/g],
    ["id 結線", /aria-labelledby|aria-describedby|htmlFor/g],
  ];
  const byName = {};
  for (const f of walk(path.join(root, "src", "components"), /\.tsx$/)) {
    if (/\.test\./.test(f)) continue;
    byName[path.basename(f, ".tsx").toLowerCase()] = f;
  }
  const rows = [];
  for (const base of current) {
    const f = byName[base.toLowerCase()];
    if (!f) {
      rows.push({ base, score: 0, hits: ["ソース不明"] });
      continue;
    }
    const src = fs.readFileSync(f, "utf8");
    let score = 0;
    const hits = [];
    for (const [label, re] of SIGNALS) {
      const n = (src.match(re) || []).length;
      if (n) {
        hits.push(`${label}:${n}`);
        score += n;
      }
    }
    rows.push({ base, score, hits });
  }
  rows.sort((a, b) => b.score - a.score);
  const withSignals = rows.filter((r) => r.score > 0);
  console.log(`定型文が残っているもの ${rows.length} 件`);
  console.log(`  実装に a11y の痕跡があるもの: ${withSignals.length}（ここから着手する）`);
  console.log(`  痕跡が無いもの: ${rows.length - withSignals.length}（無理に書かせない）\n`);
  for (const r of withSignals) {
    console.log(`  ${String(r.score).padStart(3)}  ${r.base.padEnd(20)} ${r.hits.join(" ")}`);
  }
  console.log(`\n痕跡なし: ${rows.filter((r) => !r.score).map((r) => r.base).join(", ")}`);
  process.exit(0);
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
  current.size === 0
    ? "\n✓ 中身の無い定型文は 1 件も残っていません（2026-08-23 に 91 → 0）。ここから増やさないための検査です。"
    : `\n✓ 定型文は増えていません（残り ${current.size} 件 — 実装に a11y の判断が入っているものから順に埋めてください）。`,
);
