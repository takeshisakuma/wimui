#!/usr/bin/env node
/**
 * prove:opacity-forwards — `check:opacity-forwards` が「鳴るべき経路で鳴り、鳴ってはいけない形で鳴らない」
 * ことを実証する（AGENTS.md 委任時の約束 1）。
 *
 * 通す入口は 3 つ:
 *   - **全量**（audit:lib / CI）: 実ファイルに故意の違反を差し込み、終わったら必ず戻す。
 *   - **lint-staged**: 同じ差し込みで、そのファイル 1 つだけを**絶対パスで**渡す。
 *   - **--probe**（注記を無視）: 直す前のコミットの実物（Tooltip / HoverCard）で鳴る。
 * リリース PR の経路は無い（package.json も生成物も読まない）。
 *
 * Usage: npm run prove:opacity-forwards
 */
import fs from 'fs';
import os from 'os';
import path from 'path';
import { execFileSync } from 'node:child_process';

const run = (args = []) => {
  try {
    return { code: 0, out: execFileSync('node', ['scripts/check-opacity-forwards.js', ...args], { encoding: 'utf8' }) };
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
const RULE = 'hidden-until-animation';
const CASES = [
  { name: '同じ規則に opacity: 0 と forwards', css: '.proveTemp {\n  opacity: 0;\n  animation: prove-in 1s forwards;\n}', expect: RULE },
  { name: 'both', css: '.proveTemp {\n  opacity: 0;\n  animation: prove-in 1s ease-out both;\n}', expect: RULE },
  { name: 'animation-fill-mode で指定', css: '.proveTemp {\n  opacity: 0;\n  animation: prove-in 1s;\n  animation-fill-mode: forwards;\n}', expect: RULE },
  { name: '修飾クラスの入れ子（&.visible）', css: '.proveTemp {\n  opacity: 0;\n\n  &.visible {\n    animation: prove-in 1s forwards;\n  }\n}', expect: RULE },
  { name: '属性の入れ子（&[data-state]）', css: '.proveTemp {\n  opacity: 0;\n\n  &[data-state="open"] {\n    animation: prove-in 1s forwards;\n  }\n}', expect: RULE },
  { name: 'opacity: 0.0', css: '.proveTemp {\n  opacity: 0.0;\n  animation: prove-in 1s forwards;\n}', expect: RULE },
  { name: '[鳴らない] 既定は見えていて、from から入る', css: '.proveTemp {\n  animation: prove-in 1s;\n}', expect: null },
  { name: '[鳴らない] opacity: 0 だが終わりの値を留めない', css: '.proveTemp {\n  opacity: 0;\n  animation: prove-in 1s;\n}', expect: null },
  { name: '[鳴らない] 既定は見えていて forwards（Video の形）', css: '.proveTemp {\n  animation: prove-out 1s forwards;\n}', expect: null },
  { name: '[鳴らない] 半透明と forwards', css: '.proveTemp {\n  opacity: 0.5;\n  animation: prove-in 1s forwards;\n}', expect: null },
  { name: '[鳴らない] 子孫の要素のアニメーション', css: '.proveTemp {\n  opacity: 0;\n\n  & .child {\n    animation: prove-in 1s forwards;\n  }\n}', expect: null },
  { name: '[鳴らない] 入れ子の別クラス', css: '.proveTemp {\n  opacity: 0;\n\n  .child {\n    animation: prove-in 1s forwards;\n  }\n}', expect: null },
  { name: '[鳴らない] 注記つき（同じ行）', css: '.proveTemp {\n  opacity: 0;\n  animation: prove-in 1s forwards; /* opacity-forwards-ok: 実証用 */\n}', expect: null },
  { name: '[鳴らない] 注記つき（直上のコメント）', css: '.proveTemp {\n  opacity: 0;\n  // opacity-forwards-ok: 実証用\n  animation: prove-in 1s forwards;\n}', expect: null },
  { name: '[鳴らない] コメントの中だけ', css: '.proveTemp {\n  opacity: 0;\n  /* animation: prove-in 1s forwards; */\n}', expect: null },
  { name: '[鳴らない] transition の opacity', css: '.proveTemp {\n  opacity: 0;\n  transition: opacity 1s;\n\n  &.visible {\n    opacity: 1;\n  }\n}', expect: null },
];

// 前回の実行が途中で落ちて差し込みが残っていると、それを「元」として保存してしまう。先に確かめる。
const dirty = execFileSync('git', ['status', '--porcelain', '--', SCSS_FILE], { encoding: 'utf8' }).trim();
if (dirty) {
  console.log(`✗ ${SCSS_FILE} に未コミットの変更があります。戻してから流してください:\n${dirty}`);
  process.exit(1);
}

const original = fs.readFileSync(SCSS_FILE, 'utf8');
try {
  const base = run();
  check('前提: 差し込み前の全量は緑', base.code === 0, base.out);
  for (const c of CASES) {
    fs.writeFileSync(SCSS_FILE, `${original}\n${c.css}\n`);
    for (const [entry, a] of [['全量', []], ['lint-staged', [path.resolve(SCSS_FILE)]]]) {
      const r = run(a);
      check(`${entry.padEnd(11)} ${c.name}`, c.expect ? r.code === 1 && r.out.includes(`[${c.expect}]`) : r.code === 0, r.out);
    }
  }
  // 読めないファイルは「0 件」にしない
  fs.writeFileSync(SCSS_FILE, `${original}\n.proveTemp {\n  opacity: 0;\n`);
  for (const [entry, a] of [['全量', []], ['lint-staged', [path.resolve(SCSS_FILE)]]]) {
    const r = run(a);
    check(`${entry.padEnd(11)} 構文が壊れたファイルは「読めなかった」で落ちる`, r.code === 1 && r.out.includes('読めなかった'), r.out);
  }
} finally {
  fs.writeFileSync(SCSS_FILE, original);
}

// --probe: 直す前の実物（#809 の親。既定が opacity: 0 で forwards だった）が鳴る
const BEFORE = 'f2274751c7^';
const KNOWN = [
  'src/components/overlay/Tooltip/tooltip.module.scss',
  'src/components/overlay/HoverCard/hover-card.module.scss',
];
for (const file of KNOWN) {
  const tmp = path.join(os.tmpdir(), `prove-opacity-forwards-${path.basename(file)}`);
  // execFileSync はシェルを通さないので、`^` はそのまま git に届く（cmd.exe 経由だと食われる）
  fs.writeFileSync(tmp, execFileSync('git', ['show', `${BEFORE}:${file}`]));
  const res = run(['--probe', tmp]);
  fs.rmSync(tmp);
  check(`--probe     直す前の実物が鳴る: ${path.basename(file)}`, res.code === 1 && res.out.includes(`[${RULE}]`), res.out);
}
// 直したあとの実物は鳴らない（--probe は注記を無視するので、注記で通っているのではない）
for (const file of [...KNOWN, 'src/components/media/Video/video.module.scss']) {
  const res = run(['--probe', file]);
  check(`--probe     いまの実物は鳴らない: ${path.basename(file)}`, res.code === 0, res.out);
}

if (failed > 0) {
  console.log(`\n✗ ${failed} 件が期待と違いました。`);
  process.exit(1);
}
console.log('\n✓ すべての経路で期待どおりでした。');
