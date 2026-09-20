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
/** リポジトリの受け入れルール違反（仕様の逸脱とは分けて出す）。 */
const policy = [];

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

  /**
   * --- ここから下は**仕様ではなく、このリポジトリの受け入れルール**（2026-09-21）---
   *
   * 他所で作られた skill を取り込む前提で足した。**skill はエージェントが従う指示**で、
   * `allowed-tools` まで書けるので、取り込みは依存を 1 つ増やすのと同じ。仕様の検査
   * （`name` / `description` / 行数）は**形式しか見ない**ため、中身が「テストを消してよい」
   * と書いてあっても通る。せめて**出所と、読んだ日と、ツール権限の理由**は機械で要求する。
   *
   * **`.agents/skills/vendor/` のようなサブディレクトリでは分けられない** ── skill の探索は
   * `.agents/skills` の**直下のディレクトリ**を見る作りで（このスクリプトも各ツールも）、
   * 中間ディレクトリは「SKILL.md が無い skill」として落ちる。だから出所は**置き場ではなく
   * `metadata`** で表す。
   */
  const meta = fm.metadata ?? "";
  const allowedTools = (fm["allowed-tools"] ?? "").trim();
  if (allowedTools !== "" && !/allowed_tools_reason\s*:\s*\S/.test(meta)) {
    policy.push(
      `${rel}/SKILL.md: \`allowed-tools\` を持つなら \`metadata.allowed_tools_reason\` に理由を書くこと（ツール権限を持ち込む形なので、黙って入れない）。`,
    );
  }
  if (/origin\s*:\s*vendor\b/.test(meta)) {
    if (!/source\s*:\s*\S/.test(meta)) {
      policy.push(`${rel}/SKILL.md: 外来 skill（\`metadata.origin: vendor\`）は \`metadata.source\` に取得元を書くこと。`);
    }
    if (!/reviewed\s*:\s*\d{4}-\d{2}-\d{2}/.test(meta)) {
      policy.push(
        `${rel}/SKILL.md: 外来 skill は \`metadata.reviewed\` に**中身を読んだ日**（YYYY-MM-DD）を書くこと。`,
      );
    }
  }

  const lineCount = text.split("\n").length;
  if (lineCount > 500) {
    problems.push(
      `${rel}/SKILL.md: ${lineCount} 行（仕様の推奨は 500 行以内）。詳細は \`references/\` へ出して、本体は入口に保つこと。`,
    );
  }
}

if (policy.length > 0) {
  console.error("✗ 外来 skill の受け入れルール（AGENTS.md）から外れています:");
  for (const p of policy) console.error(`  - ${p}`);
  console.error("  skill はエージェントが従う指示です。出所・読んだ日・ツール権限の理由を書くこと。");
  process.exit(1);
}

if (problems.length > 0) {
  console.error("✗ Agent Skills の仕様（https://agentskills.io/specification）から外れています:");
  for (const p of problems) console.error(`  - ${p}`);
  process.exit(1);
}

console.log(`✓ skill ${dirs.length} 件は Agent Skills の仕様に沿っている（name / description / 行数 / frontmatter キー）。`);
