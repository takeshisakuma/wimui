#!/usr/bin/env node
/**
 * prove:instructions — `check:instructions` を故意に壊して実証する（T259）。
 *
 * AGENTS.md の約束「未実証のガード、および『0 件』という結果は信用しない」。
 * 見るのは 10 通り（実ファイルを一時的に壊し、最後に必ず戻す）:
 *   1. 揃っているときは鳴らない
 *   2. GEMINI.md が 1 文字ずれたら鳴る
 *   3. GEMINI.md が消えたら鳴る
 *   4. CLAUDE.md が散文の案内（import 行なし）になったら鳴る
 *        ── これが T259 でいちばん危ない壊れ方。実測では散文だと中身が届かない。
 *   5. CLAUDE.md に指示が書き足されたら鳴る（正本が 2 つになる）
 *   6. AGENTS.md が本文を CLAUDE.md へ委ねる「栞」へ逆戻りしたら鳴る
 *   7. AGENTS.md に CRLF が混ざったら鳴る
 *   8. lint-staged 経由（末尾にファイル名が付く呼ばれ方）でも同じ判定になる
 *        ── `check:slop` のラチェットは、ここを試していなかったので常に素通りしていた。
 *   9. `instructions:sync` がずれを直し、直した後は鳴らない
 *  10. 後始末で 3 ファイルが元どおりになる
 *
 * Usage: npm run prove:instructions
 */
import fs from 'node:fs';
import path from 'node:path';
import { execFileSync } from 'node:child_process';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const NAMES = ['AGENTS.md', 'CLAUDE.md', 'GEMINI.md'];
const file = (name) => path.join(ROOT, name);

const backup = Object.fromEntries(NAMES.map((n) => [n, fs.readFileSync(file(n), 'utf8')]));
const restore = () => {
  for (const n of NAMES) fs.writeFileSync(file(n), backup[n], 'utf8');
};

const run = (args = []) => {
  try {
    execFileSync('node', ['scripts/instruction-files.mjs', ...args], { cwd: ROOT, encoding: 'utf8' });
    return 0;
  } catch (e) {
    return e.status ?? 1;
  }
};

const results = [];
const check = (name, ok, detail = '') => {
  results.push(ok);
  console.log(`${ok ? 'OK ' : 'NG '} ${name}${detail ? ` — ${detail}` : ''}`);
};

try {
  check('1. 揃っているとき --check は鳴らない', run(['--check']) === 0);

  fs.writeFileSync(file('GEMINI.md'), backup['GEMINI.md'] + '故意にずらした\n', 'utf8');
  check('2. GEMINI.md のずれで鳴る', run(['--check']) !== 0);

  restore();
  fs.rmSync(file('GEMINI.md'));
  check('3. GEMINI.md の欠落で鳴る', run(['--check']) !== 0);

  restore();
  fs.writeFileSync(file('CLAUDE.md'), '# CLAUDE.md\n\n指示は `AGENTS.md` を参照してください。\n', 'utf8');
  check('4. CLAUDE.md が散文の案内（import 行なし）で鳴る', run(['--check']) !== 0);

  restore();
  fs.writeFileSync(file('CLAUDE.md'), backup['CLAUDE.md'] + '\nコミット前に `npm run lint` を走らせること。\n', 'utf8');
  check('5. CLAUDE.md への書き足しで鳴る', run(['--check']) !== 0);

  restore();
  fs.writeFileSync(file('AGENTS.md'), '# AGENTS.md\n\nよく使うコマンドは `CLAUDE.md` を参照してください。\n', 'utf8');
  check('6. AGENTS.md が栞へ逆戻りして鳴る', run(['--check']) !== 0);

  restore();
  fs.writeFileSync(file('AGENTS.md'), backup['AGENTS.md'].replace(/\n/g, '\r\n'), 'utf8');
  check('7. AGENTS.md の CRLF で鳴る', run(['--check']) !== 0);

  // 8: lint-staged は変更されたファイル名を引数に足して呼ぶ。部分集合しか見ない
  //    実装だと、ここで初めて素通りが露見する（`check:slop` がそうだった）。
  restore();
  const staged = ['--check', 'CLAUDE.md'];
  const greenViaStaged = run(staged) === 0;
  fs.writeFileSync(file('GEMINI.md'), backup['GEMINI.md'] + '故意にずらした\n', 'utf8');
  check('8. lint-staged 経由（引数つき）でも鳴る／鳴らないが変わらない', greenViaStaged && run(staged) !== 0);

  restore();
  fs.writeFileSync(file('GEMINI.md'), '空にした\n', 'utf8');
  const synced = run([]) === 0;
  check('9. sync が直し、直した後は鳴らない', synced && run(['--check']) === 0 && fs.readFileSync(file('GEMINI.md'), 'utf8') === backup['GEMINI.md']);
} finally {
  restore();
}

check('10. 後始末で元どおり（3 ファイルとも一致し、--check が緑）', NAMES.every((n) => fs.readFileSync(file(n), 'utf8') === backup[n]) && run(['--check']) === 0);

process.exit(results.every(Boolean) ? 0 : 1);
