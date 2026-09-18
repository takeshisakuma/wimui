#!/usr/bin/env node
/**
 * prove:skills — `skills:link` と `check:skills-mirror` を、故意に壊して実証する。
 *
 * CLAUDE.md の約束「未実証のガードは信用しない」。ここで見るのは 5 通り:
 *   1. 何も無い状態から張れる（clone 直後 = `npm install` の経路）
 *   2. 張れたものが**複製ではなくリンク**である（この環境の `ln -s` は複製を作るため）
 *   3. 繋がっているときに `--check` が鳴らない
 *   4. 複製が古くなったら `--check` が鳴る
 *   5. ミラーが消えたら `--check` が鳴る
 *
 * Usage: npm run prove:skills
 */
import fs from 'node:fs';
import path from 'node:path';
import { execFileSync } from 'node:child_process';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const SOURCE = path.join(ROOT, '.agents', 'skills');
const MIRROR = path.join(ROOT, '.claude', 'skills');

const run = (args) => {
  try {
    return { code: 0, out: execFileSync('node', ['scripts/link-skills.mjs', ...args], { cwd: ROOT, encoding: 'utf8' }) };
  } catch (e) {
    return { code: e.status ?? 1, out: (e.stdout ?? '') + (e.stderr ?? '') };
  }
};
const removeMirror = () => {
  if (!fs.lstatSync(MIRROR, { throwIfNoEntry: false })) return;
  try {
    if (process.platform === 'win32') execFileSync('cmd', ['/c', 'rmdir', '/s', '/q', MIRROR], { stdio: 'ignore' });
    else fs.rmSync(MIRROR, { recursive: true, force: true });
  } catch {
    fs.rmSync(MIRROR, { recursive: true, force: true });
  }
};
const isLink = () => fs.lstatSync(MIRROR, { throwIfNoEntry: false })?.isSymbolicLink() === true;

const results = [];
const check = (name, ok, detail = '') => {
  results.push(ok);
  console.log(`${ok ? 'OK ' : 'NG '} ${name}${detail ? ` — ${detail}` : ''}`);
};

// 1 & 2: 何も無い状態から張れて、それがリンクであること
removeMirror();
const created = run([]);
check('1. clone 直後の状態から張れる', created.code === 0 && fs.existsSync(path.join(MIRROR, 'composition-guidelines', 'SKILL.md')));
check('2. 張れたものが複製ではなくリンク', isLink(), isLink() ? `readlink → ${fs.readlinkSync(MIRROR)}` : '複製になっている');

// 3: 繋がっているときは鳴らない
check('3. 繋がっているとき --check は鳴らない', run(['--check']).code === 0);

// 4: 古い複製は鳴る
removeMirror();
fs.mkdirSync(path.dirname(MIRROR), { recursive: true });
fs.cpSync(SOURCE, MIRROR, { recursive: true });
const stale = path.join(MIRROR, 'composition-guidelines', 'SKILL.md');
fs.writeFileSync(stale, fs.readFileSync(stale, 'utf8') + '\n<!-- 故意にずらした -->\n');
check('4. 古い複製は --check が鳴る', run(['--check']).code !== 0);

// 5: ミラーが無ければ鳴る
removeMirror();
check('5. ミラーが無いと --check が鳴る', run(['--check']).code !== 0);

// 後始末: 正しい状態へ戻す
const restored = run([]);
check('6. 後始末で元どおり繋がる', restored.code === 0 && isLink() && run(['--check']).code === 0);

process.exit(results.every(Boolean) ? 0 : 1);
