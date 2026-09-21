#!/usr/bin/env node
/**
 * Guard: 品質ゲートの一覧が 1 つの正本（`docs/rules/quality-gates.md`）から外れていないか（2026-09-21）。
 *
 * 同じ一覧が 3 か所にあり、3 つとも中身が違っていた ── `AGENTS.md` の表、
 * `.github/pull_request_template.md` の Quality gates、`scaffold` が出す一覧。
 * 見る場所によってゲートが変わっていた。表は `docs/rules/quality-gates.md` に寄せ、
 * `scaffold` はそこから読んで出す（`readGateCommands`）。PR テンプレートだけは
 * GitHub が PR ごとにチェックボックスとして出すので写しを消せない。だから
 * **コマンドの集合が一致すること**をここで見る。
 *
 * 見るもの:
 *   1. 正本の表の「コマンド」列と、PR テンプレートの Quality gates のチェックボックスに
 *      出てくる `npm run <script>` の集合が一致する
 *   2. どちらかに書いた `npm run <script>` が `package.json` に実在する（存在しない名前は
 *      npm が exit 1 だけ返し、ゲートが落ちたように見える）
 *
 * Usage: node scripts/check-quality-gates.mjs
 */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
export const SOURCE = "docs/rules/quality-gates.md";
const TEMPLATE = ".github/pull_request_template.md";

const NPM_RUN = /npm run ([a-z0-9][a-z0-9:_-]*)/gi;
const splitCells = (line) => line.split("\\|").join("§").split("|");

/** 正本の表の「コマンド」列にある `npm run` の script 名を、表の順に返す。 */
export function readGateCommands(text) {
  const lines = text.split(/\r?\n/);
  const header = lines.findIndex((l) => /^\|/.test(l) && /コマンド/.test(l));
  if (header < 0) throw new Error(`${SOURCE} に「コマンド」列を持つ表が無い`);
  const col = splitCells(lines[header]).findIndex((c) => c.trim() === "コマンド");
  const out = [];
  for (let i = header + 2; i < lines.length && /^\|/.test(lines[i]); i++) {
    for (const m of (splitCells(lines[i])[col] ?? "").matchAll(NPM_RUN)) if (!out.includes(m[1])) out.push(m[1]);
  }
  if (out.length === 0) throw new Error(`${SOURCE} の表からコマンドを 1 つも読めなかった`);
  return out;
}

/** PR テンプレートの Quality gates 節のチェックボックスにある script 名。 */
export function readTemplateCommands(text) {
  const lines = text.split(/\r?\n/);
  const start = lines.findIndex((l) => /^## Quality gates/.test(l));
  if (start < 0) throw new Error(`${TEMPLATE} に「## Quality gates」が無い`);
  const out = new Set();
  for (let i = start + 1; i < lines.length && !/^## /.test(lines[i]); i++) {
    if (!/^- \[ \]/.test(lines[i])) continue;
    for (const m of lines[i].matchAll(NPM_RUN)) out.add(m[1]);
  }
  return out;
}

export function compare({ source, template, scripts }) {
  const gates = new Set(readGateCommands(source));
  const tpl = readTemplateCommands(template);
  const bad = [];
  for (const g of gates) if (!tpl.has(g)) bad.push(`\`${g}\` は正本にあるが PR テンプレートに無い`);
  for (const t of tpl) if (!gates.has(t)) bad.push(`\`${t}\` は PR テンプレートにあるが正本に無い`);
  const all = new Set([...source.matchAll(NPM_RUN), ...template.matchAll(NPM_RUN)].map((m) => m[1]));
  for (const s of all) if (!scripts.has(s)) bad.push(`\`npm run ${s}\` は package.json に無い`);
  return { bad, gates: [...gates] };
}

function main() {
  const read = (f) => fs.readFileSync(path.join(ROOT, f), "utf8");
  const scripts = new Set(Object.keys(JSON.parse(read("package.json")).scripts));
  const { bad, gates } = compare({ source: read(SOURCE), template: read(TEMPLATE), scripts });
  if (bad.length) {
    console.error(`✗ 品質ゲートの一覧がずれている（正本: ${SOURCE}）:`);
    for (const b of bad) console.error(`  - ${b}`);
    process.exit(1);
  }
  console.log(`✓ 品質ゲートは正本と PR テンプレートで一致（${gates.length} コマンド・すべて package.json に実在）。`);
}

if (process.argv[1] && path.resolve(process.argv[1]) === fileURLToPath(import.meta.url)) main();
