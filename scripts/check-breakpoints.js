#!/usr/bin/env node
/**
 * Guard: `BREAKPOINTS`（`src/hooks/useBreakpoint.ts`・公開している定数）が
 * `tokens/breakpoints.json` と同じ値を持つこと（T375）。
 *
 * **なぜ要るのか**: SCSS 側は `_breakpoints.scss` が生成物のトークンを読むので追従するが、
 * JS 側の `BREAKPOINTS` は手で書いた写しで、コメントで「同期を保つ」と言うだけだった。
 * `useBreakpointUp` / `useBreakpointDown` と、器の幅で形を変える部品（Gallery・CodeDiffViewer）は
 * この定数を読むので、トークンだけ変えると、CSS と JS で切り替わる幅が黙ってずれる。
 * 型もテストも通るので、赤が出ない。
 *
 * 引数（lint-staged が渡すファイル名）は使わず、常に 2 つのファイルを丸ごと比べる。
 * 部分集合を渡されても判定が変わらないようにするため。
 *
 * Usage: node scripts/check-breakpoints.js
 */
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const TOKENS = path.join(root, "tokens", "breakpoints.json");
const HOOK = path.join(root, "src", "hooks", "useBreakpoint.ts");
const rel = (p) => path.relative(root, p).split(path.sep).join("/");

const errors = [];

// tokens/breakpoints.json: { wim: { breakpoint: { xs: { value: "480px" }, ... } } }
const tokens = {};
const tokenEntries = JSON.parse(fs.readFileSync(TOKENS, "utf8"))?.wim?.breakpoint ?? {};
for (const [name, def] of Object.entries(tokenEntries)) {
  const m = /^(\d+(?:\.\d+)?)px$/.exec(String(def?.value ?? "").trim());
  if (!m) {
    errors.push(`${rel(TOKENS)}: ${name} の値 "${def?.value}" を px の数として読めない`);
    continue;
  }
  tokens[name] = Number(m[1]);
}

// useBreakpoint.ts: export const BREAKPOINTS: Record<Breakpoint, number> = { xs: 480, ... };
const hook = {};
const src = fs.readFileSync(HOOK, "utf8");
const block = /export const BREAKPOINTS\b[^=]*=\s*\{([^}]*)\}/.exec(src);
if (!block) {
  errors.push(`${rel(HOOK)}: export const BREAKPOINTS = { ... } が見つからない`);
} else {
  for (const entry of block[1].split(",")) {
    const text = entry.replace(/\/\/.*$/gm, "").trim();
    if (!text) continue;
    const m = /^(\w+)\s*:\s*(\d+(?:\.\d+)?)$/.exec(text);
    if (!m) {
      errors.push(`${rel(HOOK)}: BREAKPOINTS の項目 "${text}" を「名前: 数」として読めない`);
      continue;
    }
    hook[m[1]] = Number(m[2]);
  }
}

const tokenNames = Object.keys(tokens);
const hookNames = Object.keys(hook);
if (tokenNames.length === 0) errors.push(`${rel(TOKENS)}: ブレイクポイントを 1 つも読めない`);
if (block && hookNames.length === 0) errors.push(`${rel(HOOK)}: BREAKPOINTS の項目を 1 つも読めない`);

// 写しが見つからないときは、上の 1 行で足りる（名前ごとに「無い」を並べない）
for (const name of block ? new Set([...tokenNames, ...hookNames]) : []) {
  if (!(name in hook)) {
    errors.push(`${name}: ${rel(TOKENS)} にあるが BREAKPOINTS に無い`);
  } else if (!(name in tokens)) {
    errors.push(`${name}: BREAKPOINTS にあるが ${rel(TOKENS)} に無い`);
  } else if (hook[name] !== tokens[name]) {
    errors.push(`${name}: BREAKPOINTS は ${hook[name]}、${rel(TOKENS)} は ${tokens[name]}px`);
  }
}

if (errors.length > 0) {
  console.error("✗ BREAKPOINTS（JS）とブレイクポイントのトークンがずれている:");
  for (const e of errors) console.error(`  - ${e}`);
  console.error(`\n直し方: ${rel(HOOK)} の BREAKPOINTS を ${rel(TOKENS)} に合わせる。`);
  process.exit(1);
}

console.log(`✓ BREAKPOINTS（JS）はブレイクポイントのトークンと一致（${tokenNames.length} 個を照合）。`);
