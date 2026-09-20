#!/usr/bin/env node
/**
 * prove:skills-spec — `check:skills` を故意に壊して実証する。
 *
 * AGENTS.md の約束「未実証のガード、および『0 件』という結果は信用しない」。
 * 実在の skill は触らず、**一時的な skill ディレクトリを作って**壊し方を並べる
 * （最後に必ず消す。消し残すと本番の `check:skills` が落ちるので、それ自体が検知になる）。
 *
 * 見るのは 9 通り:
 *   1. いまの状態では鳴らない
 *   2. SKILL.md が無いと鳴る
 *   3. frontmatter が無いと鳴る
 *   4. `name` が無いと鳴る
 *   5. `name` が大文字混じりだと鳴る
 *   6. `name` が親ディレクトリ名と違うと鳴る（仕様の必須。いちばん起きやすい）
 *   7. `description` が無いと鳴る
 *   8. 仕様に無い frontmatter キー（綴り間違い）で鳴る
 *   9. 正しく書いた一時 skill では鳴らない（＝ 2〜8 が形式の問題を見ている証拠）
 *  10. 後始末で元どおり
 *
 * Usage: npm run prove:skills-spec
 */
import fs from "node:fs";
import path from "node:path";
import { execFileSync } from "node:child_process";
import { fileURLToPath } from "node:url";

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const TMP = path.join(ROOT, ".agents", "skills", "prove-temp-skill");

const run = () => {
  try {
    execFileSync("node", ["scripts/check-skills.mjs"], { cwd: ROOT, encoding: "utf8" });
    return 0;
  } catch (e) {
    return e.status ?? 1;
  }
};

const results = [];
const check = (name, ok) => {
  results.push(ok);
  console.log(`${ok ? "OK " : "NG "} ${name}`);
};

/** 一時 skill を「この中身」で置く。`null` ならディレクトリだけ作る。 */
const place = (body) => {
  fs.mkdirSync(TMP, { recursive: true });
  const file = path.join(TMP, "SKILL.md");
  if (body === null) fs.rmSync(file, { force: true });
  else fs.writeFileSync(file, body, "utf8");
};

const VALID = [
  "---",
  "name: prove-temp-skill",
  "description: A temporary skill used by prove:skills-spec. Never loaded in real work.",
  "---",
  "",
  "# 実証用",
  "",
  "このファイルは `prove:skills-spec` が作って消す。",
  "",
].join("\n");

try {
  check("1. いまの状態では鳴らない", run() === 0);

  place(null);
  check("2. SKILL.md が無いと鳴る", run() !== 0);

  place("# frontmatter が無い\n");
  check("3. frontmatter が無いと鳴る", run() !== 0);

  place(VALID.replace("name: prove-temp-skill\n", ""));
  check("4. name が無いと鳴る", run() !== 0);

  place(VALID.replace("name: prove-temp-skill", "name: Prove-Temp-Skill"));
  check("5. name が大文字混じりだと鳴る", run() !== 0);

  place(VALID.replace("name: prove-temp-skill", "name: some-other-name"));
  check("6. name が親ディレクトリ名と違うと鳴る", run() !== 0);

  place(VALID.replace(/description: .*\n/, ""));
  check("7. description が無いと鳴る", run() !== 0);

  place(VALID.replace("---\nname:", "---\ndescriptoin: typo\nname:"));
  check("8. 仕様に無い frontmatter キーで鳴る", run() !== 0);

  place(VALID);
  check("9. 正しく書いた一時 skill では鳴らない", run() === 0);

  // --- 受け入れルール（2026-09-21）。仕様ではなくリポジトリ側の取り決め。 ---
  place(VALID.replace("---\n\n# 実証用", "allowed-tools: Bash\n---\n\n# 実証用"));
  check("11. allowed-tools を理由なしで持つと鳴る", run() !== 0);

  place(
    VALID.replace(
      "---\n\n# 実証用",
      "allowed-tools: Bash\nmetadata:\n  allowed_tools_reason: 実証用の一時 skill。実作業では読み込まれない。\n---\n\n# 実証用",
    ),
  );
  check("12. 理由を書けば allowed-tools でも鳴らない", run() === 0);

  place(VALID.replace("---\n\n# 実証用", "metadata:\n  origin: vendor\n---\n\n# 実証用"));
  check("13. 外来 skill で source / reviewed が無いと鳴る", run() !== 0);

  place(
    VALID.replace(
      "---\n\n# 実証用",
      "metadata:\n  origin: vendor\n  source: https://example.com/skills/temp\n  reviewed: 2026-09-21\n---\n\n# 実証用",
    ),
  );
  check("14. 出所と読んだ日を書けば鳴らない", run() === 0);
} finally {
  fs.rmSync(TMP, { recursive: true, force: true });
}

check("10. 後始末で元どおり（一時 skill が消え、--check が緑）", !fs.existsSync(TMP) && run() === 0);

process.exit(results.every(Boolean) ? 0 : 1);
