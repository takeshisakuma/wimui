#!/usr/bin/env node
/**
 * Guard: skill が Agent Skills の公開仕様（https://agentskills.io/specification）に沿っているか。
 *
 * **この形式は 1 ベンダーの都合ではなく開いた標準**で、Claude Code / Codex / Cursor /
 * Gemini CLI / Copilot ほかが同じ `SKILL.md` を読む。だからこのリポジトリの skill は
 * 「Claude Code 向けの設定」ではなく、**どのエージェントでも読める資産**として書く。
 *
 * 仕様が決めるのは **形式**（`SKILL.md` + 任意の `scripts/` `references/` `assets/`）
 * であって、**置き場は決めていない**。探索先は実装ごとに違う（Claude Code は
 * `.claude/skills/`）。このリポジトリは `.agents/skills/` を実体にし、`prepare` が
 * `.claude/skills/` へ繋ぐ（`check:skills-mirror`）。**その二重化は仕様の側では解けない。**
 *
 * 見るもの（仕様の必須・推奨をそのまま機械にした）:
 *   1. skill ディレクトリに `SKILL.md` が在る
 *   2. YAML frontmatter が在り、`name` と `description` を持つ
 *   3. `name` は 1〜64 文字・小文字英数とハイフンのみ・先頭末尾がハイフンでない・
 *      連続ハイフンが無い・**親ディレクトリ名と一致する**
 *   4. `description` は 1〜1024 文字
 *   5. 既知でないキーを frontmatter に置いていない（`license` / `compatibility` /
 *      `metadata` / `allowed-tools` は仕様にある任意キー）
 *   6. `SKILL.md` は 500 行以内（仕様の推奨。超えるなら `references/` へ出す）
 *
 * Usage: node scripts/check-skills.mjs
 */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const SKILLS_DIR = path.join(ROOT, ".agents", "skills");

/** 仕様が定める frontmatter のキー。これ以外は綴り間違いとして扱う。 */
const KNOWN_KEYS = new Set(["name", "description", "license", "compatibility", "metadata", "allowed-tools"]);

/** `name` の規則（仕様より）。 */
const NAME_RE = /^[a-z0-9]+(-[a-z0-9]+)*$/;

/** frontmatter を最小限だけ読む（値が複数行に渡るものは 1 行目だけで足りる）。 */
function parseFrontmatter(text) {
  if (!text.startsWith("---\n")) return null;
  const end = text.indexOf("\n---", 4);
  if (end < 0) return null;
  const body = text.slice(4, end);
  const out = {};
  let current = null;
  for (const line of body.split("\n")) {
    const m = line.match(/^([A-Za-z][A-Za-z0-9_-]*):\s?(.*)$/);
    if (m) {
      current = m[1];
      out[current] = m[2];
    } else if (current && /^\s+\S/.test(line)) {
      // 折り返し・ネスト（metadata など）。キーの存在だけ分かればよい。
      out[current] += " " + line.trim();
    }
  }
  return out;
}

const problems = [];

if (!fs.existsSync(SKILLS_DIR)) {
  console.log("✓ `.agents/skills/` が無い（skill 未使用）。");
  process.exit(0);
}

const dirs = fs
  .readdirSync(SKILLS_DIR, { withFileTypes: true })
  .filter((e) => e.isDirectory())
  .map((e) => e.name);

for (const dir of dirs) {
  const rel = `.agents/skills/${dir}`;
  const file = path.join(SKILLS_DIR, dir, "SKILL.md");
  if (!fs.existsSync(file)) {
    problems.push(`${rel}: SKILL.md が無い（仕様の必須ファイル）。`);
    continue;
  }
  const text = fs.readFileSync(file, "utf8");
  const fm = parseFrontmatter(text);
  if (fm === null) {
    problems.push(`${rel}/SKILL.md: YAML frontmatter（\`---\` で囲む）が無い。`);
    continue;
  }

  for (const key of Object.keys(fm)) {
    if (!KNOWN_KEYS.has(key)) {
      problems.push(`${rel}/SKILL.md: 仕様に無い frontmatter キー \`${key}\`（綴り間違い？）。`);
    }
  }

  const name = (fm.name ?? "").trim();
  if (name === "") {
    problems.push(`${rel}/SKILL.md: \`name\` が無い（必須）。`);
  } else {
    if (name.length > 64) problems.push(`${rel}/SKILL.md: \`name\` が 64 文字を超えている（${name.length}）。`);
    if (!NAME_RE.test(name)) {
      problems.push(
        `${rel}/SKILL.md: \`name: ${name}\` が規則に合わない（小文字英数とハイフンのみ・先頭末尾と連続のハイフン不可）。`,
      );
    }
    if (name !== dir) {
      problems.push(`${rel}/SKILL.md: \`name: ${name}\` が親ディレクトリ名 \`${dir}\` と一致しない（仕様の必須）。`);
    }
  }

  const description = (fm.description ?? "").trim();
  if (description === "") {
    problems.push(`${rel}/SKILL.md: \`description\` が無い（必須。**何をするか＋いつ使うか**を書く）。`);
  } else if (description.length > 1024) {
    problems.push(`${rel}/SKILL.md: \`description\` が 1024 文字を超えている（${description.length}）。`);
  }

  const lineCount = text.split("\n").length;
  if (lineCount > 500) {
    problems.push(
      `${rel}/SKILL.md: ${lineCount} 行（仕様の推奨は 500 行以内）。詳細は \`references/\` へ出して、本体は入口に保つこと。`,
    );
  }
}

if (problems.length > 0) {
  console.error("✗ Agent Skills の仕様（https://agentskills.io/specification）から外れています:");
  for (const p of problems) console.error(`  - ${p}`);
  process.exit(1);
}

console.log(`✓ skill ${dirs.length} 件は Agent Skills の仕様に沿っている（name / description / 行数 / frontmatter キー）。`);
