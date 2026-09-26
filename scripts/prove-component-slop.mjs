#!/usr/bin/env node
/**
 * prove:component-slop — `check:component-slop` が「鳴るべき経路で鳴り、鳴ってはいけない
 * 形で鳴らない」ことを実証する（AGENTS.md 委任時の約束 1）。
 *
 * 通す入口は 3 つ:
 *   - **全量**（audit:lib / CI）: 実ファイルに故意の違反を差し込み、終わったら必ず戻す。
 *   - **lint-staged**（ファイルを渡す）: 同じ差し込みで、そのファイル 1 つだけを**絶対パスで**
 *     渡しても同じ答えになること（lint-staged の渡し方。相対で試すと、絶対パスを
 *     取りこぼして素通りする形を見逃す）。
 *   - **--probe**（注記を無視）: 注記済みの既知の事例で鳴ること＝注記を消したら鳴る。
 * リリース PR（バージョンが上がった状態）は、このガードが package.json も生成物も
 * 読まないので経路が無い。
 *
 * **鳴らないことの確認が半分を占める**: 中央寄せの `translateY(-50%)`、背後を覆う層の
 * ぼかし、`&.glass` の opt-in、`:not(:hover)`、縮小の `scale(0.95)` は正当な形。
 *
 * Usage: npm run prove:component-slop
 */
import fs from 'fs';
import os from 'os';
import path from 'path';
import { execFileSync } from 'node:child_process';

const run = (args = []) => {
  try {
    return { code: 0, out: execFileSync('node', ['scripts/check-component-slop.js', ...args], { encoding: 'utf8' }) };
  } catch (e) {
    return { code: e.status ?? 1, out: (e.stdout ?? '') + (e.stderr ?? '') };
  }
};

let failed = 0;
const check = (name, ok, out) => {
  console.log(`${ok ? 'ok  ' : 'NG  '} ${name}`);
  if (!ok) {
    failed += 1;
    console.log(out.split('\n').slice(-15).map((l) => `      ${l}`).join('\n'));
  }
};

// --- 1. 実ファイルへの差し込み（全量 / lint-staged の 2 入口で同じ答えになるか） ---
const INSERT_FILE = 'src/components/layout/Divider/divider.module.scss';
const INSERTS = [
  { name: 'ホバーで浮かせる（lift トークン）', css: '.proveTemp:hover { transform: translateY(var(--wim-lift-sm)); }', expect: 'hover-lift' },
  { name: 'ホバーで拡大する', css: '.proveTemp { &:hover { transform: scale(1.03); } }', expect: 'hover-lift' },
  { name: '弾む easing', css: '.proveTemp { transition: transform 1s var(--wim-easing-out-back); }', expect: 'bounce-easing' },
  { name: '弾む easing（spring トークン）', css: '.proveTemp { transition: transform var(--wim-transition-spring); }', expect: 'bounce-easing' },
  { name: '弾む easing（out-back を包んだ transition-entrance）', css: '.proveTemp { transition: transform var(--wim-transition-entrance); }', expect: 'bounce-easing' },
  { name: '弾む easing（cubic-bezier の直書き）', css: '.proveTemp { transition: transform 1s cubic-bezier(0.34, 1.56, 0.64, 1); }', expect: 'bounce-easing' },
  { name: 'ホバーでフォールバック拡大', css: '.proveTemp:hover { transform: scale(var(--wim-x-scale, 1.05)); }', expect: 'hover-lift' },
  { name: '[鳴らない] 行き過ぎない曲線（standard / snap / 直書き）', css: '.proveTemp { transition: transform var(--wim-easing-snap), opacity var(--wim-transition-base), width 1s cubic-bezier(0.2, 0, 0, 1); }', expect: null },
  { name: 'blur に角丸トークン', css: '.proveTemp { filter: blur(var(--wim-radius-sm)); }', expect: 'blur-token' },
  { name: 'blur のフォールバックが生の px', css: '.proveTemp { filter: blur(var(--wim-x-blur, 6px)); }', expect: 'blur-token' },
  { name: '既定の面にすりガラス', css: '.proveTemp { backdrop-filter: blur(var(--wim-blur-sm)); }', expect: 'default-glass' },
  { name: '[鳴らない] 中央寄せの translateY(-50%)', css: '.proveTemp:hover { transform: translateY(-50%); }', expect: null },
  { name: '[鳴らない] 縮小 scale(0.95)', css: '.proveTemp:hover { transform: scale(0.95); }', expect: null },
  { name: '[鳴らない] :not(:hover) の中', css: '.proveTemp:not(:hover) { transform: translateY(var(--wim-lift-sm)); }', expect: null },
  { name: '[鳴らない] 背後を覆う層のぼかし', css: '.overlay { backdrop-filter: blur(var(--wim-blur-xs)); }', expect: null },
  { name: '[鳴らない] &.glass の opt-in', css: '.proveTemp { &.glass { backdrop-filter: blur(var(--wim-color-glass-blur)); } }', expect: null },
  { name: '[鳴らない] ホバーでない transform の lift', css: '.proveTemp.dragging { transform: translateY(var(--wim-lift-sm)); }', expect: null },
  { name: '[鳴らない] コメントの中', css: '/* .proveTemp:hover { transform: scale(1.1); } */', expect: null },
  { name: 'transition: all', css: '.proveTemp { transition: all var(--wim-transition-fast); }', expect: 'transition-all' },
  { name: 'プロパティ名なしの transition（仕様上 all）', css: '.proveTemp { transition: var(--wim-transition-fast); }', expect: 'transition-all' },
  { name: '複数項目の 1 つだけプロパティ名なし', css: '.proveTemp { transition: opacity var(--wim-transition-fast), var(--wim-transition-base); }', expect: 'transition-all' },
  { name: '[鳴らない] プロパティを列挙した transition', css: '.proveTemp { transition: background-color var(--wim-transition-fast), box-shadow 0.2s ease-in-out; }', expect: null },
  { name: '[鳴らない] transition: none', css: '.proveTemp { transition: none; }', expect: null },
  { name: '[逃がせる] 注記つき', css: '.proveTemp:hover { transform: scale(1.1); /* component-slop-ok: 実証用 */ }', expect: null },
];

const original = fs.readFileSync(INSERT_FILE, 'utf8');
try {
  const base = run();
  check('前提: 差し込み前の全量は緑', base.code === 0, base.out);
  for (const c of INSERTS) {
    // 1 行 1 宣言が前提のガードなので、実物の書き方どおりに改行して差し込む。
    const css = c.css.replace(/ \{ /g, ' {\n').replace(/; \}/g, ';\n}').replace(/ \} \}/g, '\n}\n}');
    fs.writeFileSync(INSERT_FILE, `${original}\n${css}\n`);
    for (const [entry, args] of [['全量', []], ['lint-staged', [path.resolve(INSERT_FILE)]]]) {
      const r = run(args);
      const ok = c.expect ? r.code === 1 && r.out.includes(`[${c.expect}]`) : r.code === 0;
      check(`${entry.padEnd(11)} ${c.name}`, ok, r.out);
    }
  }
} finally {
  fs.writeFileSync(INSERT_FILE, original);
}

// --- 2. --probe: 直す前の実物（過去のコミットから取り出す）が鳴る ---
// **今のファイルを指さない。** 最初の版は今のファイルを指していたので、T267 で直した
// 瞬間に違反が消え、この実証は落ちる（＝「鳴るか」ではなく「まだ直していないか」を
// 見ていた）。直す前のコミットから取り出せば、直したあとも同じ答えになる。
//   acec0e4 = #696（T267-①）のマージ。T267-②〜④ の違反が注記つきで残っている
//   8e894f7 = #701 のマージ。transition: all（T269）を直す前
const KNOWN = [
  ['acec0e4', 'src/components/form/Button/button.module.scss', ['hover-lift', 'bounce-easing']],
  ['acec0e4', 'src/components/data-display/TreeView/tree-view.module.scss', ['default-glass']],
  ['acec0e4', 'src/components/feedback/Alert/alert.module.scss', ['blur-token', 'default-glass']],
  ['acec0e4', 'src/components/data-display/Card/card.module.scss', ['hover-lift']],
  ['8e894f7', 'src/components/data-display/Badge/badge.module.scss', ['transition-all']],
  ['8e894f7', 'src/components/form/Button/button.module.scss', ['transition-all']],
];
for (const [commit, file, rules] of KNOWN) {
  const tmpKnown = path.join(os.tmpdir(), `prove-component-slop-${commit}-${path.basename(file)}`);
  // シェルを通さない（Windows の cmd.exe は `^` や `:` の扱いが違う）。
  fs.writeFileSync(tmpKnown, execFileSync('git', ['show', `${commit}:${file}`]));
  const r = run(['--probe', tmpKnown]);
  fs.rmSync(tmpKnown);
  check(
    `--probe     直す前の実物が鳴る: ${commit}:${path.basename(file)}（${rules.join(' / ')}）`,
    r.code === 1 && rules.every((x) => r.out.includes(`[${x}]`)),
    r.out,
  );
}

// --- 3. --probe: 置き換える前の形（main の Sidebar）が blur-token で鳴る ---
const tmp = path.join(os.tmpdir(), 'prove-component-slop-sidebar.scss');
fs.writeFileSync(tmp, '.overlay {\n  backdrop-filter: blur(var(--wim-radius-sm));\n}\n');
const r = run(['--probe', tmp]);
check('--probe     置き換え前の Sidebar（blur(var(--wim-radius-sm))）が鳴る', r.code === 1 && r.out.includes('[blur-token]'), r.out);
fs.rmSync(tmp);

if (failed > 0) {
  console.log(`\n✗ ${failed} 件が期待と違いました。`);
  process.exit(1);
}
console.log('\n✓ すべての経路で期待どおりでした。');
