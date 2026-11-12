#!/usr/bin/env node
/**
 * 読み上げの告知を、部品ごとに書かせない（T367）。
 *
 * 告知は「先に在る、画面に見えない status 領域の文字を書き換える」形でしか読まれない
 * （2026-10-12、ナレーター + Chrome で 28 部品中 11 が外れた）。その形を
 * `src/components/_internal/useAnnounce.tsx` の 1 か所にまとめたので、部品が
 * `VisuallyHidden` に `role="status"` / `role="alert"` / `aria-live` を付けて自前の領域を
 * 書いたら落とす。自前で書くと、外れた形（中身ごと差し込む・入れ子にする・同じ文を
 * 入れ直す）に戻りやすい。
 *
 * 見えている要素に付ける `role="status"`（Spinner など）は対象にしない ── 告知のための
 * 見えない領域だけを見る。
 *
 * Usage: node scripts/check-announce-regions.js
 */
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, "..");
const COMPONENTS = path.join(root, "src", "components");
const ALLOWED = new Set([path.join(COMPONENTS, "_internal", "useAnnounce.tsx")]);

const REGION = /<VisuallyHidden\b[^>]*?(\brole=(["'{])[^>]*?|\baria-live=)[^>]*>/gs;

function listFiles(dir) {
  const out = [];
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) out.push(...listFiles(full));
    else if (/\.tsx$/.test(entry.name) && !/\.(test|stories)\.tsx$/.test(entry.name)) out.push(full);
  }
  return out;
}

// コメントの中の書き方の例は数えない
const stripComments = (text) => text.replace(/\/\*[\s\S]*?\*\//g, "").replace(/(^|[^:"'`])\/\/[^\n]*/g, "$1");

const problems = [];
for (const file of listFiles(COMPONENTS)) {
  if (ALLOWED.has(file)) continue;
  const text = stripComments(fs.readFileSync(file, "utf8"));
  for (const match of text.matchAll(REGION)) {
    const tag = match[0];
    if (!/\brole=["'{]?["']?(status|alert)|\brole=\{|\baria-live=/.test(tag)) continue;
    const line = text.slice(0, match.index).split("\n").length;
    problems.push(`${path.relative(root, file)}:${line}  ${tag.replace(/\s+/g, " ").slice(0, 100)}`);
  }
}

if (problems.length > 0) {
  console.error("読み上げの領域を、部品が自前で書いています（useAnnounce を使う）:");
  for (const p of problems) console.error(`  - ${p}`);
  console.error(
    "\n  src/components/_internal/useAnnounce.tsx の useAnnounce / useAnnounceValue を使う。" +
      "\n  書き方は docs/rules/implementation.md の「操作の結果を、読み上げで告げる」。",
  );
  process.exit(1);
}
console.log("✓ 読み上げの領域は useAnnounce の 1 か所だけ（部品の自前の領域は 0 件）。");
