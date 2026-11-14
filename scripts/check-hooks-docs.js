#!/usr/bin/env node
/**
 * check:hooks-docs — 公開している hooks に、文書が揃っているか（T380）。
 *
 * 2026-11-14 に数えたら、公開している hooks 13 個のうち使い方の文書があるのは 3 個、
 * llms に名前が出るのは 1 個だった。`check:story-docs` は部品しか見ないので、どのガードにも
 * 映らなかった。読んだエージェントは「無い」と思って `matchMedia` などを自前で書く。
 *
 * 公開している hooks は `scripts/lib/public-hooks.js` が入口から型チェッカーで数える
 * （`generate-llms.js` の「Hooks」の節と同じ一覧）。hook ごとに見るもの:
 *   1. JSDoc の要約と `@example` がある（llms と文書ページの例は、ここから作る）
 *   2. `docs/Hooks.mdx` に `<HookDoc name="…" />` がある
 *   3. `public/llms-full.txt` の「Hooks」の節に載っている（llms を作り直していなければ落ちる）
 * 逆向きに、`docs/Hooks.mdx` に、もう公開していない hook が残っていないかも見る。
 *
 * 実証は `npm run prove:hooks-docs`。
 *
 * Usage: node scripts/check-hooks-docs.js
 */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { publicHooks } from './lib/public-hooks.js';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const MDX = 'docs/Hooks.mdx';
const LLMS = 'public/llms-full.txt';

const hooks = await publicHooks(ROOT);
const mdx = fs.readFileSync(path.join(ROOT, MDX), 'utf8');
const llms = fs.readFileSync(path.join(ROOT, LLMS), 'utf8');
const llmsHooks = llms.split('\n## Hooks\n')[1]?.split('\n## ')[0] ?? '';

const problems = [];
for (const h of hooks) {
  const where = `${h.name}（${h.file}）`;
  if (!h.summary) problems.push(`${where}: JSDoc の要約が無い`);
  if (!h.example) problems.push(`${where}: JSDoc に @example が無い`);
  if (!mdx.includes(`<HookDoc name="${h.name}"`)) problems.push(`${where}: ${MDX} に <HookDoc name="${h.name}" /> が無い`);
  if (!llmsHooks.includes(`- **${h.name}**`)) problems.push(`${where}: ${LLMS} の「Hooks」の節に無い（npm run llms:build）`);
}
const publicNames = new Set(hooks.map((h) => h.name));
for (const [, name] of mdx.matchAll(/<HookDoc name="([^"]+)"/g)) {
  if (!publicNames.has(name)) problems.push(`${MDX}: ${name} は公開している hook ではない（外したなら、ページからも外す）`);
}

console.log('--- check:hooks-docs (公開している hooks の文書) ---');
console.log(`公開している hooks: ${hooks.length} 個（${hooks.map((h) => h.name).join(' / ')}）`);
if (problems.length) {
  console.error(`\n✗ ${problems.length} 件:`);
  for (const p of problems) console.error(`  - ${p}`);
  process.exit(1);
}
console.log('✓ JSDoc・文書ページ・llms のすべてに揃っている');
