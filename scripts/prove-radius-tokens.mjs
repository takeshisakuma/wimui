#!/usr/bin/env node
/**
 * prove:radius-tokens — `check:radius-tokens` が「鳴るべき経路で鳴り、鳴ってはいけない形で鳴らない」
 * ことを実証する（AGENTS.md 委任時の約束 1）。
 *
 * 通す入口は 3 つ:
 *   - **全量**（audit:lib / CI）: 実ファイルに故意の違反を差し込み、終わったら必ず戻す。
 *   - **lint-staged**: 同じ差し込みで、そのファイル 1 つだけを**絶対パスで**渡す。
 *   - **--probe**（注記を無視）: 直す前のコミットの実物で鳴る。
 * リリース PR の経路は無い（package.json も生成物も読まない）。
 *
 * Usage: npm run prove:radius-tokens
 */
import fs from 'fs';
import os from 'os';
import path from 'path';
import { execFileSync } from 'node:child_process';

const run = (args = []) => {
  try {
    return { code: 0, out: execFileSync('node', ['scripts/check-radius-tokens.js', ...args], { encoding: 'utf8' }) };
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

const SCSS_FILE = 'src/components/layout/Divider/divider.module.scss';
const TS_FILE = 'src/components/__prove-radius-tokens.ts';
const SCSS_CASES = [
  { name: '値トークン md', css: '.proveTemp {\n  border-radius: var(--wim-radius-md);\n}', expect: 'radius-value-token' },
  { name: '値トークン lg（フォールバックつき）', css: '.proveTemp {\n  border-radius: var(--wim-radius-lg, 8px);\n}', expect: 'radius-value-token' },
  { name: '値トークン xl', css: '.proveTemp {\n  border-radius: var(--wim-radius-xl);\n}', expect: 'radius-value-token' },
  { name: '値トークン 2xl', css: '.proveTemp {\n  border-radius: var(--wim-radius-2xl);\n}', expect: 'radius-value-token' },
  { name: '角を個別に指定', css: '.proveTemp {\n  border-top-left-radius: var(--wim-radius-lg);\n}', expect: 'radius-value-token' },
  { name: '上の 2 角だけ値トークン', css: '.proveTemp {\n  border-radius: var(--wim-radius-lg) var(--wim-radius-lg) 0 0;\n}', expect: 'radius-value-token' },
  { name: 'mixin の既定値', css: '@mixin prove-temp($radius: var(--wim-radius-md)) {\n  border-radius: $radius;\n}', expect: 'radius-value-mixin' },
  { name: '@include に値トークンを渡す', css: '.proveTemp {\n  @include prove-temp($radius: var(--wim-radius-lg));\n}', expect: 'radius-value-mixin' },
  { name: '[鳴らない] component', css: '.proveTemp {\n  border-radius: var(--wim-radius-component);\n}', expect: null },
  { name: '[鳴らない] container', css: '.proveTemp {\n  border-radius: var(--wim-radius-container);\n}', expect: null },
  { name: '[鳴らない] overlay', css: '.proveTemp {\n  border-radius: var(--wim-radius-overlay);\n}', expect: null },
  { name: '[鳴らない] sm（サブ要素）', css: '.proveTemp {\n  border-radius: var(--wim-radius-sm);\n}', expect: null },
  { name: '[鳴らない] full（ピル・円）', css: '.proveTemp {\n  border-radius: var(--wim-radius-full);\n}', expect: null },
  { name: '[鳴らない] 役割から 1 段足す', css: '.proveTemp {\n  border-radius: calc(var(--wim-radius-container) + var(--wim-radius-md));\n}', expect: null },
  { name: '[鳴らない] 役割から余白を引く', css: '.proveTemp {\n  border-radius: calc(var(--wim-radius-component) - var(--wim-focus-outline-offset));\n}', expect: null },
  { name: '[鳴らない] 注記つき（同じ行）', css: '.proveTemp {\n  border-radius: var(--wim-radius-lg); /* radius-value-ok: 実証用 */\n}', expect: null },
  { name: '[鳴らない] 注記つき（直上のコメント）', css: '.proveTemp {\n  // radius-value-ok: 実証用\n  border-radius: var(--wim-radius-lg);\n}', expect: null },
  { name: '[鳴らない] コメントの中だけ', css: '.proveTemp {\n  /* border-radius: var(--wim-radius-lg); */\n  color: inherit;\n}', expect: null },
  { name: '[鳴らない] 角丸でないプロパティ', css: '.proveTemp {\n  --prove-width: var(--wim-radius-md);\n  border-width: var(--wim-radius-md);\n}', expect: null },
];
const TS_CASES = [
  { name: 'インラインの borderRadius', src: 'export const proveTemp = { borderRadius: "var(--wim-radius-md)" };\n', expect: 'radius-value-inline' },
  { name: '[鳴らない] インラインの役割トークン', src: 'export const proveTemp = { borderRadius: "var(--wim-radius-overlay)" };\n', expect: null },
  { name: '[鳴らない] インラインの注記つき', src: '// radius-value-ok: 実証用\nexport const proveTemp = { borderRadius: "var(--wim-radius-md)" };\n', expect: null },
];

// 前回の実行が途中で落ちて差し込みが残っていると、それを「元」として保存してしまう。先に確かめる。
const dirty = execFileSync('git', ['status', '--porcelain', '--', SCSS_FILE, TS_FILE], { encoding: 'utf8' }).trim();
if (dirty) {
  console.log(`✗ ${SCSS_FILE} か ${TS_FILE} に未コミットの変更があります。戻してから流してください:\n${dirty}`);
  process.exit(1);
}

const original = fs.readFileSync(SCSS_FILE, 'utf8');
try {
  const base = run();
  check('前提: 差し込み前の全量は緑', base.code === 0, base.out);
  const entries = (file) => [['全量', []], ['lint-staged', [path.resolve(file)]]];
  for (const c of SCSS_CASES) {
    fs.writeFileSync(SCSS_FILE, `${original}\n${c.css}\n`);
    for (const [entry, a] of entries(SCSS_FILE)) {
      const r = run(a);
      check(`${entry.padEnd(11)} ${c.name}`, c.expect ? r.code === 1 && r.out.includes(`[${c.expect}]`) : r.code === 0, r.out);
    }
  }
  fs.writeFileSync(SCSS_FILE, original);
  for (const c of TS_CASES) {
    fs.writeFileSync(TS_FILE, c.src);
    for (const [entry, a] of entries(TS_FILE)) {
      const r = run(a);
      check(`${entry.padEnd(11)} ${c.name}`, c.expect ? r.code === 1 && r.out.includes(`[${c.expect}]`) : r.code === 0, r.out);
    }
  }
} finally {
  fs.writeFileSync(SCSS_FILE, original);
  fs.rmSync(TS_FILE, { force: true });
}

// --probe: 直す前の実物（main の d2c4e425a0。値トークンを直に使っていた）が鳴る
const KNOWN = [
  ['src/components/feedback/Tour/tour.module.scss', 'radius-value-token'],
  ['src/components/data-display/QRCode/qrcode.module.scss', 'radius-value-token'],
  ['src/components/data-display/DescriptionList/description-list.module.scss', 'radius-value-token'],
  ['src/components/data-display/Card/card.module.scss', 'radius-value-token'],
  ['src/styles/_indicator-mixins.scss', 'radius-value-mixin'],
  ['src/components/helpers.ts', 'radius-value-inline'],
];
for (const [file, rule] of KNOWN) {
  const tmp = path.join(os.tmpdir(), `prove-radius-d2c4e425a0-${path.basename(file)}`);
  fs.writeFileSync(tmp, execFileSync('git', ['show', `d2c4e425a0:${file}`]));
  const res = run(['--probe', tmp]);
  fs.rmSync(tmp);
  check(`--probe     直す前の実物が鳴る: d2c4e425a0:${path.basename(file)}`, res.code === 1 && res.out.includes(`[${rule}]`), res.out);
}

if (failed > 0) {
  console.log(`\n✗ ${failed} 件が期待と違いました。`);
  process.exit(1);
}
console.log('\n✓ すべての経路で期待どおりでした。');
