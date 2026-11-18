#!/usr/bin/env node
/**
 * prove:part-api — `check:part-api` が「鳴るべき経路で鳴り、鳴ってはいけない経路で鳴らない」
 * ことを、**故意の変更を部品のソースへ差し込んで**実証する（T384）。差し込みは必ず元に戻す。
 *
 * スナップショットではなくソースを触るのが要点（`prove:prop-api` と同じ）。抽出まで含めて本物の経路を通す。
 *
 * Usage: npm run prove:part-api
 */
import fs from 'node:fs';
import { execFileSync } from 'node:child_process';

const TARGET = 'src/components/data-display/Calendar/Calendar.tsx';
const ANCHOR = '                    data-part="day"\n';

const run = () => {
  try {
    return { code: 0, out: execFileSync('node', ['scripts/check-part-api.js'], { encoding: 'utf8', stdio: 'pipe' }) };
  } catch (e) {
    return { code: e.status ?? 1, out: (e.stdout ?? '') + (e.stderr ?? '') };
  }
};

const CASES = [
  { name: 'P1. 何も触らなければ鳴らない（スナップショットが現物と一致している）', put: null, expect: false },
  { name: 'P2. 部位名を消すと「無くなりました」で鳴る（破壊）', put: '', expect: true, match: /部位名が無くなりました[\s\S]*Calendar \[data-part="day"\]/ },
  {
    name: 'P3. 部位名を変えると、消えた側と増えた側の両方で鳴る（改名）',
    put: '                    data-part="date"\n',
    expect: true,
    match: /無くなりました[\s\S]*"day"[\s\S]*スナップショットに無い部位名[\s\S]*"date"/,
  },
  {
    name: 'P4. 部位名を足すと「スナップショットに無い」で鳴る（遅れ）',
    put: ANCHOR,
    also: [{ find: '<div key={rowIndex} role="row">', put: '<div key={rowIndex} role="row" data-part="week">' }],
    expect: true,
    match: /スナップショットに無い部位名[\s\S]*"week"/,
    mustNot: /無くなりました/,
  },
  { name: 'P5. 式で渡すと「直書きにする」で鳴る', put: '                    data-part={"d" + "ay"}\n', expect: true, match: /文字列の直書き/ },
  { name: 'P6. kebab-case でない名前は鳴る', put: '                    data-part="Day"\n', expect: true, match: /kebab-case/ },
];

const original = fs.readFileSync(TARGET, 'utf8');
if (!original.includes(ANCHOR)) {
  console.error(`✗ 差し込み先 ${JSON.stringify(ANCHOR)} が ${TARGET} に無い（スクリプトを直す）`);
  process.exit(1);
}

let failed = 0;
try {
  for (const c of CASES) {
    let src = original;
    if (c.put !== null) src = src.replace(ANCHOR, c.put);
    for (const a of c.also ?? []) src = src.replace(a.find, a.put);
    fs.writeFileSync(TARGET, src);
    const { code, out } = run();
    const fired = code !== 0;
    const ok = fired === c.expect && (!c.match || c.match.test(out)) && (!c.mustNot || !c.mustNot.test(out));
    console.log(`${ok ? '✓' : '✗'} ${c.name}（exit ${code}）`);
    if (!ok) {
      failed++;
      console.log(out.split('\n').map((l) => `    ${l}`).join('\n'));
    }
  }
} finally {
  fs.writeFileSync(TARGET, original);
}

if (failed > 0) {
  console.error(`\n✗ ${failed} 件が期待どおりに鳴らなかった`);
  process.exit(1);
}
console.log(`\n✓ ${CASES.length} ケースすべて期待どおり`);
