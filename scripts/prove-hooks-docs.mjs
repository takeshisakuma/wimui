#!/usr/bin/env node
/**
 * prove:hooks-docs — `check:hooks-docs` が「鳴るべき経路で鳴り、鳴ってはいけない経路で鳴らない」
 * ことを、故意の変更をソースと文書へ差し込んで実証する（T380）。差し込みは必ず元に戻す。
 *
 * ソースを触るのが要点: 公開している hooks の一覧は入口から型チェッカーで数えるので、
 * 実際に export を足して、その経路で数えられることまで確かめる。
 *
 * Usage: npm run prove:hooks-docs
 */
import fs from 'node:fs';
import { execFileSync } from 'node:child_process';

const SRC = 'src/hooks/useAutoResize.ts';
const MDX = 'docs/Hooks.mdx';

const run = () => {
  try {
    return { code: 0, out: execFileSync('node', ['scripts/check-hooks-docs.js'], { encoding: 'utf8', stdio: 'pipe' }) };
  } catch (e) {
    return { code: e.status ?? 1, out: (e.stdout ?? '') + (e.stderr ?? '') };
  }
};

const CASES = [
  { name: 'P1. 何も触らなければ鳴らない', edits: [], expect: false },
  {
    name: 'P2. JSDoc も文書も無い hook を公開すると鳴る（要約・例・文書ページ・llms の 4 つ）',
    edits: [{ file: SRC, append: '\nexport const useProveTemp = () => 1;\n' }],
    expect: true,
    match: [/useProveTemp.*JSDoc の要約が無い/, /useProveTemp.*@example が無い/, /useProveTemp.*HookDoc name="useProveTemp"/, /useProveTemp.*「Hooks」の節に無い/],
  },
  {
    name: 'P3. 文書ページから hook を外すと鳴る',
    edits: [{ file: MDX, replace: ['<HookDoc name="useWim" />', ''] }],
    expect: true,
    match: [/useWim.*HookDoc name="useWim"/],
  },
  {
    name: 'P4. 公開していない hook が文書ページに残ると鳴る',
    edits: [{ file: MDX, append: '\n<HookDoc name="useDialog" />\n' }],
    expect: true,
    match: [/useDialog は公開している hook ではない/],
  },
];

const originals = new Map([SRC, MDX].map((f) => [f, fs.readFileSync(f, 'utf8')]));
let allOk = true;
try {
  for (const c of CASES) {
    for (const [f, text] of originals) fs.writeFileSync(f, text);
    for (const e of c.edits) {
      const before = originals.get(e.file);
      if (e.replace && !before.includes(e.replace[0])) {
        console.error(`✗ ${c.name}: ${e.file} に目印 "${e.replace[0]}" がありません`);
        allOk = false;
      }
      fs.writeFileSync(e.file, e.append ? before + e.append : before.replace(e.replace[0], e.replace[1]));
    }
    const { code, out } = run();
    const rang = code !== 0;
    const missed = (c.match ?? []).filter((re) => !re.test(out));
    const ok = rang === c.expect && missed.length === 0;
    if (!ok) allOk = false;
    console.log(
      `${ok ? 'OK ' : 'NG '} ${c.name} → ${rang ? '鳴った' : '鳴らない'}（期待: ${c.expect ? '鳴る' : '鳴らない'}）` +
        (missed.length ? ` ── 期待した指摘が無い: ${missed.map(String).join(' / ')}` : ''),
    );
  }
} finally {
  for (const [f, text] of originals) fs.writeFileSync(f, text);
}

console.log(allOk ? '\n✓ prove:hooks-docs — 全ケース期待どおり。' : '\n✗ prove:hooks-docs — 期待と違うケースがあります。');
process.exit(allOk ? 0 : 1);
