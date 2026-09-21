#!/usr/bin/env node
/**
 * `MAINTENANCE.md`（定期点検）から、その週にやる項目のチェックリストを組み立てて
 * issue を立てる。`.github/workflows/maintenance-reminder.yml` が毎週月曜に呼ぶ。
 *
 * **なぜ issue なのか**（2026-09-21・ユーザー判断）: 定期点検は「壊れても赤が出ない」
 * ものの一覧で、**見に行く日を決めていなかっただけ**で放置されてきた。skill は
 * 依頼の内容で発火するので日付では起きない。だから日付で起こす仕組みを別に置く。
 * issue にしたのは、追加の課金なしで記録が残り、人もエージェントも同じものを見られるため。
 *
 * どの区分をいつ出すか:
 *   - 毎週 … 毎回
 *   - 隔週 … ISO 週番号が偶数の週
 *   - 四半期 … 1 / 4 / 7 / 10 月の **1 日**を含む週（月曜〜日曜）。「最初の 7 日を含む週」だと
 *     2 週続けて出ることがある（2026-09-28 の週と 10-05 の週）ので、1 日に絞って四半期に 1 回にした
 *   - リリース前 … 出さない（日付ではなくリリースが引き金。`RELEASING.md` の手順で見る）
 *
 * **区分の見出しや項目が読めなければ落とす。** `MAINTENANCE.md` の見出しを書き換えて
 * チェックリストが黙って空になるのが、この仕組みのいちばん悪い壊れ方なので。
 *
 * Usage:
 *   node scripts/maintenance-issue.mjs [--date YYYY-MM-DD] [--dry-run]
 *   --date     その日を含む週として組み立てる（既定: 今日・JST）
 *   --dry-run  issue を立てずにタイトルと本文を出す
 */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { execFileSync } from "node:child_process";

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
export const LABEL = "maintenance";
export const TITLE_PREFIX = "[定期点検]";

/** 区分の見出し（`## 毎週` など）。この 3 つが無ければ落とす。 */
export const CADENCES = ["毎週", "隔週", "四半期"];

/** `## 見出し` ごとに `### 項目` の見出しを集める。 */
export function parseSections(md) {
  const sections = new Map();
  let current = null;
  let inFence = false;
  for (const line of md.split(/\r?\n/)) {
    if (/^```/.test(line)) inFence = !inFence;
    if (inFence) continue;
    const h2 = line.match(/^## (.+)$/);
    if (h2) {
      current = h2[1].trim();
      sections.set(current, []);
      continue;
    }
    const h3 = line.match(/^### (.+)$/);
    if (h3 && current) sections.get(current).push(h3[1].trim());
  }
  return sections;
}

/** その日の週の月曜（UTC の日付として扱う）。 */
export function mondayOf(date) {
  const d = new Date(Date.UTC(date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate()));
  const dow = (d.getUTCDay() + 6) % 7; // 月曜 = 0
  d.setUTCDate(d.getUTCDate() - dow);
  return d;
}

/** ISO 8601 の週番号。 */
export function isoWeek(date) {
  const d = new Date(Date.UTC(date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate()));
  const day = d.getUTCDay() || 7;
  d.setUTCDate(d.getUTCDate() + 4 - day);
  const yearStart = new Date(Date.UTC(d.getUTCFullYear(), 0, 1));
  return Math.ceil(((d - yearStart) / 86400000 + 1) / 7);
}

/** その週に出す区分。 */
export function cadencesFor(date) {
  const monday = mondayOf(date);
  const out = ["毎週"];
  if (isoWeek(monday) % 2 === 0) out.push("隔週");
  for (let k = 0; k < 7; k++) {
    const d = new Date(monday);
    d.setUTCDate(monday.getUTCDate() + k);
    if ([0, 3, 6, 9].includes(d.getUTCMonth()) && d.getUTCDate() === 1) {
      out.push("四半期");
      break;
    }
  }
  return out;
}

const ymd = (d) => d.toISOString().slice(0, 10);

/** タイトルと本文を組み立てる。区分や項目が読めなければ throw。 */
export function buildIssue(md, date, { repo = "takeshisakuma/wimui", openIssues = [] } = {}) {
  const sections = parseSections(md);
  for (const c of CADENCES) {
    if (!sections.has(c)) throw new Error(`MAINTENANCE.md に「## ${c}」が無い（見出しを変えたならこのスクリプトも直すこと）`);
    if (sections.get(c).length === 0) throw new Error(`MAINTENANCE.md の「## ${c}」に「### 項目」が 1 つも無い`);
  }
  const monday = mondayOf(date);
  const cadences = cadencesFor(date);
  const title = `${TITLE_PREFIX} ${ymd(monday)} の週（${cadences.join(" + ")}）`;
  const url = `https://github.com/${repo}/blob/main/MAINTENANCE.md`;
  const body = [
    `今週の定期点検です。手順と「何を見れば終わりか」は [MAINTENANCE.md](${url}) の各項目にあります。`,
    "",
    "**ここにあるのは CI が見ていない＝壊れても赤が出ないものだけです。** 終わった項目にチェックを付け、見つけたものは `IMPROVEMENTS.md` に起票してください（番号は `npm run check:improvements` が出します）。",
    "",
    ...cadences.flatMap((c) => [`## ${c}`, "", ...sections.get(c).map((h) => `- [ ] ${h}`), ""]),
    ...(openIssues.length
      ? ["## 前回までの点検で閉じていないもの", "", ...openIssues.map((i) => `- #${i.number} ${i.title}`), ""]
      : []),
    "リリース前の項目（`## リリース前`）は日付ではなくリリースが引き金なので、ここには出しません。",
    "",
    "_この issue は `.github/workflows/maintenance-reminder.yml`（`scripts/maintenance-issue.mjs`）が自動で立てました。_",
  ].join("\n");
  return { title, body, cadences };
}

function jstToday() {
  return new Date(Date.now() + 9 * 3600 * 1000);
}

function gh(args) {
  return execFileSync("gh", args, { cwd: ROOT, encoding: "utf8" });
}

function main() {
  const argv = process.argv.slice(2);
  const dry = argv.includes("--dry-run");
  const di = argv.indexOf("--date");
  const date = di >= 0 ? new Date(`${argv[di + 1]}T00:00:00Z`) : jstToday();
  if (Number.isNaN(date.getTime())) throw new Error(`--date が読めない: ${argv[di + 1]}`);

  const md = fs.readFileSync(path.join(ROOT, "MAINTENANCE.md"), "utf8");
  const repo = process.env.GITHUB_REPOSITORY || "takeshisakuma/wimui";

  let openIssues = [];
  let existing = [];
  if (!dry) {
    gh(["label", "create", LABEL, "--color", "C5DEF5", "--description", "定期点検（MAINTENANCE.md）", "--force"]);
    const list = JSON.parse(gh(["issue", "list", "--label", LABEL, "--state", "all", "--limit", "50", "--json", "number,title,state"]));
    existing = list.map((i) => i.title);
    openIssues = list.filter((i) => i.state === "OPEN");
  }

  const { title, body } = buildIssue(md, date, { repo, openIssues });
  if (dry) {
    console.log(`# ${title}\n\n${body}`);
    return;
  }
  if (existing.includes(title)) {
    console.log(`skip（同じ週の issue が既にある）: ${title}`);
    return;
  }
  gh(["issue", "create", "--title", title, "--body", body, "--label", LABEL]);
  console.log(`created: ${title}`);
}

if (process.argv[1] && path.resolve(process.argv[1]) === fileURLToPath(import.meta.url)) main();
