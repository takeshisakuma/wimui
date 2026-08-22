#!/usr/bin/env node
/**
 * Audit の家族ページに一度も出てこないコンポーネントを、増やさないためのラチェット。
 *
 * `stories/Audit/**` は「同じ家族の部品を並べて、размер・variant・intent の
 * 一貫性を人が見る」ページである。**後から入ったコンポーネントは、誰かが
 * 思い出して足さない限り永久に載らない。** 2026-08-22 の初回計測では、
 * カタログ 223 件のうち **100 件**がどの家族ページにも出ていなかった。
 *
 * そのうち「家族ページは既にあるのに、後から入って畳み込まれていない」7 件
 * （`SplitButton` / `ProgressRing` / `Toolbar` / `Menubar` / `Spoiler` /
 * `RelativeTime` / `Countdown`）を畳み込み、**残りを baseline に凍結**した。
 * このガードは **baseline に無い名前が新しく落ちたとき**だけ落ちる。
 *
 * **判定は JSX タグ名の出現**である。したがって:
 *   - `ChatUI` / `Charts` のような**ファイル名・家族名のカタログ項目**は、
 *     タグとして書かれることが無いので永久に「未掲載」に出る（baseline 行き）
 *   - `ChatMessage` のように**親の内側で描かれる部品**も同様
 *
 * MAINTENANCE §7 の教訓に従い、**自己検証を先に置く** ── 走査が壊れると
 * 「全部未掲載」に化けるので、確実に載っているものが 0 件なら止める。
 *
 * Usage:
 *   node scripts/check-audit-coverage.js
 *   node scripts/check-audit-coverage.js --update   # baseline を今の状態で上書き
 */
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, "..");
const AUDIT_DIR = path.join(root, "stories", "Audit");
const CATALOG = path.join(root, "src", "data", "components.json");
const BASELINE = path.join(__dirname, "audit-coverage-baseline.json");

/** 家族ページを持たないカテゴリ（そもそも並べて見る対象ではない）。 */
const SKIP_CATEGORIES = new Set(["docs-only", "internal"]);

function auditSource() {
  const out = [];
  const walk = (dir) => {
    for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
      const p = path.join(dir, e.name);
      if (e.isDirectory()) walk(p);
      else if (/\.(tsx|mdx)$/.test(e.name)) out.push(fs.readFileSync(p, "utf8"));
    }
  };
  walk(AUDIT_DIR);
  return out.join("\n");
}

const src = auditSource();
// `<` を許すのはジェネリクス付き JSX（`<DataGrid<Row> …>`）のため
const appears = (name) =>
  new RegExp("<" + name.replace(/\./g, "\\.") + "[\\s/><]").test(src);

// 自己検証: 確実に載っているものが拾えないなら走査が壊れている
for (const known of ["Button", "IconButton", "Stack"]) {
  if (!appears(known)) {
    console.error(`✗ 走査が成立していない: <${known}> が Audit に見つからない`);
    process.exit(1);
  }
}

const catalog = JSON.parse(fs.readFileSync(CATALOG, "utf8"));
const missing = [];
for (const cat of catalog) {
  if (SKIP_CATEGORIES.has(cat.id)) continue;
  for (const c of cat.components || []) {
    if (!appears(c.name)) missing.push(c.name);
  }
}
missing.sort();

if (process.argv.includes("--update")) {
  fs.writeFileSync(
    BASELINE,
    JSON.stringify({ comment: "Audit の家族ページに出ていないコンポーネント。増やさないための凍結（scripts/check-audit-coverage.js）。", known: missing }, null, 2) + "\n",
  );
  console.log(`baseline を更新した（${missing.length} 件）。`);
  process.exit(0);
}

const baseline = new Set(JSON.parse(fs.readFileSync(BASELINE, "utf8")).known ?? []);
const added = missing.filter((n) => !baseline.has(n));
const fixed = [...baseline].filter((n) => !missing.includes(n));

if (fixed.length) {
  console.log(`baseline のうち ${fixed.length} 件は Audit に載った。刈り取れる（--update）:`);
  console.log("  " + fixed.sort().join(", "));
  console.log("");
}

if (added.length) {
  console.error(`✗ ${added.length} 件、Audit の家族ページに載っていないコンポーネントが増えた:`);
  for (const n of added) console.error(`  - ${n}`);
  console.error(
    "\nその家族のページ（stories/Audit/*FamilyAudit.stories.tsx）へ足すこと。" +
      "\nタグとして書かない項目（家族名・内側で描かれる部品）なら --update で baseline に入れる。",
  );
  process.exit(1);
}

console.log(
  `✓ Audit の掲載漏れは増えていない（カタログ ${missing.length + (catalog.reduce((n, c) => n + (SKIP_CATEGORIES.has(c.id) ? 0 : (c.components || []).length), 0) - missing.length)} 件中 未掲載 ${missing.length} 件・baseline ${baseline.size} 件）。`,
);
