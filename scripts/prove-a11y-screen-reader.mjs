#!/usr/bin/env node
/**
 * prove:a11y-screen-reader — `check:a11y-screen-reader` が「鳴るべき経路で鳴り、鳴ってはいけない経路で
 * 鳴らない」ことを、故意の変更を記録と MAINTENANCE.md へ差し込んで実証する（T400）。差し込みは必ず元に戻す。
 *
 * Usage: npm run prove:a11y-screen-reader
 */
import fs from 'node:fs';
import { execFileSync } from 'node:child_process';

const DATA = 'src/data/a11y-screen-reader.json';
const MAINT = 'MAINTENANCE.md';

const run = () => {
  try {
    return { code: 0, out: execFileSync('node', ['scripts/check-a11y-screen-reader.js'], { encoding: 'utf8', stdio: 'pipe' }) };
  } catch (e) {
    return { code: e.status ?? 1, out: (e.stdout ?? '') + (e.stderr ?? '') };
  }
};

/** 記録の先頭に 1 件足す（ほかの欄は正しい値にして、見たい欄だけを崩す）。 */
const addRecord = (patch) => (text) => {
  const data = JSON.parse(text);
  const base = { component: 'Dialog', date: '2026-10-12', reader: 'narrator', browser: 'chrome', result: 'ok', sources: ['MAINTENANCE 7-4 2026-10-12'] };
  data.records.unshift({ ...base, ...patch });
  return JSON.stringify(data, null, 2) + '\n';
};

const CASES = [
  { name: 'P1. 何も触らなければ鳴らない', edits: [], expect: false },
  { name: 'P2. 正しい記録を 1 件足しても鳴らない', edits: [[DATA, addRecord({})]], expect: false },
  { name: 'P3. 実在しない部品名で鳴る', edits: [[DATA, addRecord({ component: 'Dialg' })]], expect: true, match: [/Dialg は src\/data\/components\.json に無い/] },
  { name: 'P4. 台帳に無い T 番号で鳴る', edits: [[DATA, addRecord({ sources: ['T99999'] })]], expect: true, match: [/出典 T99999 の行が台帳に無い/] },
  { name: 'P5. 部品が出てこない台帳の行で鳴る', edits: [[DATA, addRecord({ sources: ['T379'] })]], expect: true, match: [/出典 T379 の行に Dialog が出てこない/] },
  { name: 'P6. 7-4 の表に無い日付で鳴る', edits: [[DATA, addRecord({ sources: ['MAINTENANCE 7-4 2026-01-01'] })]], expect: true, match: [/7-4 の表に無い/] },
  { name: 'P7. どこにも書かれていない PR 番号で鳴る', edits: [[DATA, addRecord({ sources: ['#99999'] })]], expect: true, match: [/出典 #99999 が台帳にも MAINTENANCE\.md にも書かれていない/] },
  { name: 'P8. 決めていない結果・日付の形・出典の形で鳴る', edits: [[DATA, addRecord({ result: 'good', date: '2026/10/12', sources: ['PR 994'] })]], expect: true, match: [/result は/, /date は YYYY-MM-DD/, /出典は T123/] },
  {
    name: 'P9. 7-4 の行から部品名を消すと、その行を出典にした記録で鳴る',
    edits: [[MAINT, (t) => t.replace('文字数カウント（FieldCharacterCount）', '文字数カウント')]],
    expect: true,
    match: [/FieldCharacterCount.*行に FieldCharacterCount が出てこない/],
  },
];

const files = [DATA, MAINT];
const originals = new Map(files.map((f) => [f, fs.readFileSync(f, 'utf8')]));
let allOk = true;
try {
  for (const c of CASES) {
    for (const [f, text] of originals) fs.writeFileSync(f, text);
    for (const [f, edit] of c.edits) {
      const after = edit(originals.get(f));
      if (after === originals.get(f)) {
        console.error(`✗ ${c.name}: ${f} が変わっていない（差し込みの目印が無い）`);
        allOk = false;
      }
      fs.writeFileSync(f, after);
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

console.log(allOk ? '\n✓ prove:a11y-screen-reader — 全ケース期待どおり。' : '\n✗ prove:a11y-screen-reader — 期待と違うケースがあります。');
process.exit(allOk ? 0 : 1);
