#!/usr/bin/env node
/**
 * Guard: 合成ルールの 3 つの出力が単一ソースから外れていないか（T39）。
 *
 * 合成ルールは 3 箇所で使われる:
 *   - `DESIGN.md`            … 人間と `composition-guidelines` skill が読む規範（日本語・根拠つき）
 *   - `public/llms*.txt`     … 外部 AI への主配信（英語・そのまま従える粒度）
 *   - `scripts/judge-slop.mjs` … LLM 採点のルーブリック
 *
 * 以前は 3 箇所に本文を手で書き写しており、**同期が破れていた**。2026-08-01 の実測:
 * DESIGN.md の「エレベーションのスタンスも 1 画面 1 つ」と
 * 「`intent` は省略せず明示する」は **llms.txt に 1 度も届いていなかった**
 * （llms 側の Must rules は 10 件、DESIGN.md の必須ルールは 12 件）。
 *
 * いまは `scripts/composition-rules.json` が単一ソースで、llms.txt と judge-slop は
 * そこから生成される。**残るのは DESIGN.md** ── こちらは根拠と実例を含む散文なので
 * 生成せず、**「SSOT の全ルールが DESIGN.md にも書かれている」ことを検証する**。
 *
 * 見るもの:
 *   1. SSOT の各ルールの `designAnchor` が DESIGN.md に存在する
 *   2. `judge` を持つルールが judge-slop のルーブリックに出る（生成物の健全性）
 *   3. `en` を持つルールが llms.txt に出る（生成物の健全性）
 *
 * Usage: node scripts/check-composition-rules.js
 */
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, "..");

const read = (rel) => fs.readFileSync(path.join(root, rel), "utf8");

const ssot = JSON.parse(read("scripts/composition-rules.json"));
const design = read("DESIGN.md");
const llms = fs.existsSync(path.join(root, "public/llms.txt"))
  ? read("public/llms.txt")
  : null;

const missingInDesign = [];
const missingInLlms = [];

for (const rule of ssot.rules) {
  if (!rule.id) {
    console.error("✗ id の無いルールがある");
    process.exit(1);
  }
  if (rule.designAnchor && !design.includes(rule.designAnchor)) {
    missingInDesign.push(rule);
  }
  if (llms && rule.en) {
    // 英語本文の先頭 40 文字で照合する（生成側で番号が付くため全文一致は使えない）
    const probe = rule.en.slice(0, 40);
    if (!llms.includes(probe)) missingInLlms.push(rule);
  }
}

let failed = false;

if (missingInDesign.length) {
  failed = true;
  console.error("✗ SSOT にあるが DESIGN.md に見当たらないルール:");
  for (const r of missingInDesign) {
    console.error(`  - ${r.id}  （探した語: "${r.designAnchor}"）`);
  }
  console.error(
    "\n  DESIGN.md は根拠と実例を含む規範なので生成しない。SSOT にルールを足したら\n" +
      "  DESIGN.md 側にも本文を書き、`designAnchor` がその本文に含まれるようにすること。",
  );
}

if (missingInLlms.length) {
  failed = true;
  console.error(
    `${missingInDesign.length ? "\n" : ""}✗ SSOT にあるが llms.txt に出ていないルール:`,
  );
  for (const r of missingInLlms) console.error(`  - ${r.id}`);
  console.error("\n  `npm run llms:build` を実行して差分をコミットすること。");
}

if (failed) process.exit(1);

const judged = ssot.rules.filter((r) => r.judge).length;
const inLlms = ssot.rules.filter((r) => r.en).length;
console.log(
  `✓ 合成ルールは単一ソースと一致（${ssot.rules.length} ルール / llms.txt へ ${inLlms} / judge-slop へ ${judged}）。`,
);
