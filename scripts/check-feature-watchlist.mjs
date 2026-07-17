#!/usr/bin/env node
/**
 * docs/feature-watchlist.json の各機能について、web-features パッケージの
 * Baseline ステータスを判定する（IMPROVEMENTS.md T14）。
 *
 * - 各 watch 項目の `target`（"low" = Newly Available / "high" = Widely Available、
 *   既定 "high"）へ到達した項目を「昇格」として報告する
 * - CI（.github/workflows/feature-watchlist.yml）は昇格項目ごとに Issue を起票する
 *   （重複防止はワークフロー側でタイトル一致チェック）
 * - watchlist の id が web-features に存在しない場合は exit 1（リネーム追随のため）
 *
 * Usage:
 *   node scripts/check-feature-watchlist.mjs            # 人間向けレポート
 *   node scripts/check-feature-watchlist.mjs --json     # 昇格項目を JSON 出力（CI 用）
 */
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import { features } from "web-features";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const WATCHLIST = path.join(__dirname, "..", "docs", "feature-watchlist.json");

const RANK = { false: 0, low: 1, high: 2 };

const { watch } = JSON.parse(fs.readFileSync(WATCHLIST, "utf8"));
const jsonMode = process.argv.includes("--json");

const errors = [];
const promoted = [];
const pending = [];

for (const entry of watch) {
  const feature = features[entry.id];
  if (!feature) {
    errors.push(`watchlist id "${entry.id}" は web-features に存在しません（リネーム/削除を確認）`);
    continue;
  }
  const baseline = String(feature.status.baseline); // false | "low" | "high"
  const target = entry.target ?? "high";
  const reached = RANK[baseline] >= RANK[target];
  const info = {
    id: entry.id,
    name: feature.name,
    baseline,
    target,
    baseline_low_date: feature.status.baseline_low_date ?? null,
    baseline_high_date: feature.status.baseline_high_date ?? null,
    action: entry.action,
  };
  (reached ? promoted : pending).push(info);
}

if (errors.length) {
  console.error("✗ feature-watchlist.json が不正です:");
  for (const e of errors) console.error(`  - ${e}`);
  process.exit(1);
}

if (jsonMode) {
  console.log(JSON.stringify(promoted));
} else {
  console.log(`Baseline 判定（web-features ${featuresVersion()}）`);
  for (const p of pending) {
    console.log(`  待機: ${p.id} (${p.name}) — baseline: ${p.baseline} / target: ${p.target}`);
  }
  for (const p of promoted) {
    console.log(`★ 昇格: ${p.id} (${p.name}) — baseline: ${p.baseline}（low: ${p.baseline_low_date} / high: ${p.baseline_high_date}）`);
    console.log(`    → ${p.action}`);
  }
  if (promoted.length === 0) console.log("昇格した機能はありません。");
}

function featuresVersion() {
  try {
    const pkg = JSON.parse(
      fs.readFileSync(path.join(__dirname, "..", "node_modules", "web-features", "package.json"), "utf8"),
    );
    return `v${pkg.version}`;
  } catch {
    return "(version unknown)";
  }
}
