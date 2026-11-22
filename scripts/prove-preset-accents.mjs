#!/usr/bin/env node
/**
 * prove:preset-accents — `check:preset-accents` が「鳴るべき経路で鳴り、鳴ってはいけない形で鳴らない」
 * ことを実証する（AGENTS.md 委任時の約束 1）。
 *
 * 通す入口:
 *   - **全量**（audit:lib / CI）と **lint-staged**: このチェックは引数を取らず、常に元の JSON を全部読む。
 *     lint-staged は `tokens/**\/*.json` の変更で同じコマンドを走らせるので、部分集合で判定がぶれない。
 *     それでも、lint-staged が渡す形（ファイルの絶対パスを引数に付ける）で同じ結果になることを確かめる。
 *   - **過去の実物**: #1266 のあとの main（既定の primary が Soft と同じ sf20）の JSON で鳴る。
 *   - **生成物が古い状態**: 生成物（`_css-vars*.scss`）は読まないので、JSON だけ変えた直後でも鳴る。
 * リリース PR の経路は無い（package.json も生成物も読まない）。
 *
 * 実ファイルを書き換えて試し、終わったら必ず戻す。
 *
 * Usage: npm run prove:preset-accents
 */
import fs from 'node:fs';
import path from 'node:path';
import { execFileSync } from 'node:child_process';

const SEMANTIC = 'tokens/color/semantic.json';
const DARK = 'tokens/themes/dark.json';
const SOFT = 'tokens/presets/soft.json';
const BOLD = 'tokens/presets/bold.json';
const FILES = [SEMANTIC, DARK, SOFT, BOLD];

const run = (args = []) => {
  try {
    return { code: 0, out: execFileSync('node', ['scripts/check-preset-accents.js', ...args], { encoding: 'utf8', stdio: ['ignore', 'pipe', 'pipe'] }) };
  } catch (e) {
    return { code: e.status ?? 1, out: (e.stdout ?? '') + (e.stderr ?? '') };
  }
};

let failed = 0;
const check = (name, ok, out) => {
  console.log(`${ok ? 'ok  ' : 'NG  '} ${name}`);
  if (!ok) {
    failed += 1;
    console.log(out.split('\n').slice(-12).map((l) => `      ${l}`).join('\n'));
  }
};

const original = Object.fromEntries(FILES.map((f) => [f, fs.readFileSync(f, 'utf8')]));
const restore = () => {
  for (const [f, s] of Object.entries(original)) fs.writeFileSync(f, s);
};

const edit = (file, fn) => {
  const json = JSON.parse(original[file]);
  fn(json);
  fs.writeFileSync(file, JSON.stringify(json, null, 2) + '\n');
};
const setPrimary = (light, dark) => {
  edit(SEMANTIC, (j) => (j.wim.color.primary.value = light));
  edit(DARK, (j) => (j.wim.color.primary.value = dark ?? light));
};

const CASES = [
  {
    name: '今の状態は通る',
    apply: () => {},
    expect: 0,
  },
  {
    name: '既定の primary を Soft と同じ sf20 にすると鳴る（#1266 の形）',
    apply: () => setPrimary('{pccs.sf20}'),
    expect: 1,
    match: 'プリセット soft',
  },
  {
    name: 'dark の primary だけ Soft と同じにしても鳴る',
    apply: () => setPrimary('{pccs.v16}', '{pccs.sf20}'),
    expect: 1,
    match: '既定の primary（dark）',
  },
  {
    name: '同じ色を hex で直に書いても鳴る',
    apply: () => setPrimary('#5c5791'),
    expect: 1,
    match: 'プリセット soft',
  },
  {
    name: '隣の段（sf19）でも近すぎれば鳴る',
    apply: () => setPrimary('{pccs.sf19}'),
    expect: 1,
    match: 'プリセット soft',
  },
  {
    name: 'プリセット同士が同じ色でも鳴る',
    apply: () => edit(BOLD, (j) => (j.accent = '{pccs.sf20}')),
    expect: 1,
    match: 'プリセット bold',
  },
  {
    name: '読めない参照は飛ばさず落ちる',
    apply: () => edit(SEMANTIC, (j) => (j.wim.color.primary.value = '{wim.color.info}')),
    expect: 1,
    match: '読めない値',
  },
  {
    name: '既定を別の色（v18）に変えても、プリセットと離れていれば鳴らない',
    apply: () => setPrimary('{pccs.v18}'),
    expect: 0,
  },
];

try {
  for (const c of CASES) {
    restore();
    c.apply();
    for (const [entry, args] of [
      ['全量', []],
      ['lint-staged', FILES.map((f) => path.resolve(f))],
    ]) {
      const r = run(args);
      const ok = r.code === c.expect && (!c.match || r.out.includes(c.match));
      check(`[${entry}] ${c.name}`, ok, r.out);
    }
  }

  // 過去の実物: #1266 のあとの main（06207e7166）の JSON をそのまま置く。
  restore();
  for (const f of [SEMANTIC, DARK, SOFT]) {
    fs.writeFileSync(f, execFileSync('git', ['show', `06207e7166:${f}`], { encoding: 'utf8' }));
  }
  const r = run();
  check('[過去の実物] #1266 のあとの main で鳴る', r.code === 1 && r.out.includes('プリセット soft'), r.out);
} finally {
  restore();
}

const dirty = execFileSync('git', ['status', '--porcelain', '--', ...FILES], { encoding: 'utf8' }).trim();
check('試したあと、元のファイルに戻っている', dirty === '', dirty);

console.log(failed === 0 ? '\n✓ prove:preset-accents passed' : `\n✗ ${failed} 件が期待どおりでない`);
process.exit(failed === 0 ? 0 : 1);
