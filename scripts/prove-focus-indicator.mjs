#!/usr/bin/env node
/**
 * prove:focus-indicator — `check:focus-indicator` が「鳴るべき経路で鳴り、鳴ってはいけない
 * 形で鳴らない」ことを実証する（AGENTS.md 委任時の約束 1）。
 *
 * 通す入口は 3 つ:
 *   - **全量**（audit:lib / CI）: 実ファイルに故意の違反を差し込み、終わったら必ず戻す。
 *   - **lint-staged**: 同じ差し込みで、そのファイル 1 つだけを**絶対パスで**渡す。
 *   - **--probe**（注記を無視）: 直す前のコミットの実物で鳴る。
 * リリース PR の経路は無い（package.json も生成物も読まない）。
 *
 * Usage: npm run prove:focus-indicator
 */
import fs from 'fs';
import os from 'os';
import path from 'path';
import { execFileSync } from 'node:child_process';

const run = (args = []) => {
  try {
    return { code: 0, out: execFileSync('node', ['scripts/check-focus-indicator.js', ...args], { encoding: 'utf8' }) };
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

// 1 行 1 宣言で書く（ガードは行単位で宣言を読む）。
const INSERT_FILE = 'src/components/layout/Divider/divider.module.scss';
const CASES = [
  { name: 'primary の outline', css: '.proveTemp {\n  &:focus-visible {\n    outline: 2px solid var(--wim-color-primary);\n  }\n}', expect: 'focus-primary' },
  { name: 'primary の枠の色', css: '.proveTemp:focus {\n  border-color: var(--wim-color-primary);\n}', expect: 'focus-primary' },
  { name: '消すだけ（:focus-visible）', css: '.proveTemp:focus-visible {\n  outline: none;\n}', expect: 'focus-hidden' },
  { name: '淡い色だけ', css: '.proveTemp:focus-visible {\n  outline: none;\n  box-shadow: 0 0 0 3px oklch(from var(--wim-color-focus-outline) l c h / 0.15);\n}', expect: 'focus-faint-only' },
  { name: '淡い色だけ（field-focus）', css: '.proveTemp:focus-visible {\n  outline: none;\n  box-shadow: var(--wim-shadow-field-focus);\n}', expect: 'focus-faint-only' },
  { name: '[鳴らない] フォーカス色の outline', css: '.proveTemp:focus-visible {\n  outline: 2px solid var(--wim-color-focus-outline);\n}', expect: null },
  { name: '[鳴らない] マウスのときだけ消す', css: '.proveTemp:focus:not(:focus-visible) {\n  outline: none;\n}', expect: null },
  { name: '[鳴らない] 淡い輪＋フォーカス色の枠', css: '.proveTemp:focus {\n  border-color: var(--wim-color-focus-outline);\n  box-shadow: var(--wim-shadow-field-focus);\n}', expect: null },
  { name: '[鳴らない] :focus-within は見ない', css: '.proveTemp:focus-within {\n  outline: none;\n}', expect: null },
  { name: '[鳴らない] 注記つき', css: '.proveTemp:focus-visible {\n  outline: none; /* focus-indicator-ok: 実証用 */\n}', expect: null },
];

const original = fs.readFileSync(INSERT_FILE, 'utf8');
try {
  const base = run();
  check('前提: 差し込み前の全量は緑', base.code === 0, base.out);
  for (const c of CASES) {
    fs.writeFileSync(INSERT_FILE, `${original}\n${c.css}\n`);
    for (const [entry, args] of [['全量', []], ['lint-staged', [path.resolve(INSERT_FILE)]]]) {
      const r = run(args);
      const ok = c.expect ? r.code === 1 && r.out.includes(`[${c.expect}]`) : r.code === 0;
      check(`${entry.padEnd(11)} ${c.name}`, ok, r.out);
    }
  }
  // :focus で消しても、同じファイルに :focus-visible の表示があれば通す（ファイル単位の判定）
  fs.writeFileSync(INSERT_FILE, `${original}\n.proveTemp:focus {\n  outline: none;\n}\n.proveTemp:focus-visible {\n  outline: 2px solid var(--wim-color-focus-outline);\n}\n`);
  const r = run([path.resolve(INSERT_FILE)]);
  check('lint-staged [鳴らない] :focus で消し、:focus-visible で出し直す', r.code === 0, r.out);
} finally {
  fs.writeFileSync(INSERT_FILE, original);
}

// --probe: 直す前の実物（main の 778692422f。primary を直書きしていた）が鳴る
const KNOWN = [
  ['778692422f', 'src/components/navigation/Tabs/tabs.module.scss'],
  ['778692422f', 'src/components/form/Textarea/textarea.module.scss'],
  ['778692422f', 'src/components/form/Checkbox/checkbox.module.scss'],
];
for (const [commit, file] of KNOWN) {
  const tmp = path.join(os.tmpdir(), `prove-focus-${commit}-${path.basename(file)}`);
  fs.writeFileSync(tmp, execFileSync('git', ['show', `${commit}:${file}`]));
  const res = run(['--probe', tmp]);
  fs.rmSync(tmp);
  check(`--probe     直す前の実物が鳴る: ${commit}:${path.basename(file)}`, res.code === 1 && res.out.includes('[focus-primary]'), res.out);
}

if (failed > 0) {
  console.log(`\n✗ ${failed} 件が期待と違いました。`);
  process.exit(1);
}
console.log('\n✓ すべての経路で期待どおりでした。');
