#!/usr/bin/env node
/**
 * prove:instructions — `check:instructions` を故意に壊して実証する（T259）。
 *
 * AGENTS.md の約束「未実証のガード、および『0 件』という結果は信用しない」。
 * 見るのは 14 通り（実ファイルを一時的に壊し、最後に必ず戻す）:
 *   1. 揃っているときは鳴らない
 *   2. `.gemini/settings.json` が AGENTS.md を指さなくなったら鳴る
 *   3. `.gemini/settings.json` が消えたら鳴る
 *        ── これが無いと Gemini CLI は既定の `GEMINI.md` を探し、**指示が 1 行も届かない**。
 *   4. CLAUDE.md が散文の案内（import 行なし）になったら鳴る
 *        ── これが T259 でいちばん危ない壊れ方。実測では散文だと中身が届かない。
 *   5. CLAUDE.md に指示が書き足されたら鳴る（正本が 2 つになる）
 *   6. AGENTS.md が本文を CLAUDE.md へ委ねる「栞」へ逆戻りしたら鳴る
 *   7. AGENTS.md に CRLF が混ざったら鳴る
 *   8. lint-staged 経由（末尾にファイル名が付く呼ばれ方）でも同じ判定になる
 *        ── `check:slop` のラチェットは、ここを試していなかったので常に素通りしていた。
 *   9. `instructions:sync` がずれを直し、直した後は鳴らない
 *  11. `docs/rules/` に置いたのに AGENTS.md の索引に無いファイルで鳴る（2026-09-20）
 *        ── RULES.md を 7 ファイルへ割ったので、「置いたのに誰も辿れない規則」が作れる。
 *  12. 索引が実在しない `docs/rules/*.md` を指したら鳴る（死んだ参照）
 *  13. `GEMINI.md`（写し）が戻ってきたら鳴る（2026-09-20）
 *        ── 戻った瞬間から Gemini CLI はそちらを読み、AGENTS.md の更新が届かなくなる。
 *  14. 中身の違う `GEMINI.md` が置かれたら、**消さずに**鳴る（書いた内容を失わせない）
 *  10. 後始末で元どおりになる
 *
 * Usage: npm run prove:instructions
 */
import fs from 'node:fs';
import path from 'node:path';
import { execFileSync } from 'node:child_process';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const NAMES = ['AGENTS.md', 'CLAUDE.md', '.gemini/settings.json'];
const file = (name) => path.join(ROOT, name);

const backup = Object.fromEntries(NAMES.map((n) => [n, fs.readFileSync(file(n), 'utf8')]));
const restore = () => {
  for (const n of NAMES) {
    fs.mkdirSync(path.dirname(file(n)), { recursive: true });
    fs.writeFileSync(file(n), backup[n], 'utf8');
  }
  fs.rmSync(file('GEMINI.md'), { force: true });
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

  fs.writeFileSync(file('.gemini/settings.json'), JSON.stringify({ context: { fileName: ['NOTES.md'] } }, null, 2), 'utf8');
  check('2. .gemini/settings.json が AGENTS.md を指さないと鳴る', run(['--check']) !== 0);

  restore();
  fs.rmSync(file('.gemini/settings.json'));
  check('3. .gemini/settings.json の欠落で鳴る', run(['--check']) !== 0);

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
  fs.writeFileSync(file('CLAUDE.md'), backup['CLAUDE.md'] + '書き足した\n', 'utf8');
  check('8. lint-staged 経由（引数つき）でも鳴る／鳴らないが変わらない', greenViaStaged && run(staged) !== 0);

  restore();
  fs.writeFileSync(file('.gemini/settings.json'), '{}\n', 'utf8');
  const synced = run([]) === 0;
  check(
    '9. sync が直し、直した後は鳴らない',
    synced && run(['--check']) === 0 && JSON.parse(fs.readFileSync(file('.gemini/settings.json'), 'utf8')).context.fileName[0] === 'AGENTS.md',
  );

  // 11-12: 規則の置き場を割った分だけ、「置いたのに辿れない」「指しているのに無い」が
  //        作れるようになった。両方向とも鳴ることを見る。
  restore();
  const stray = path.join(ROOT, 'docs', 'rules', '__prove-stray.md');
  try {
    fs.writeFileSync(stray, '# 実証用の捨てファイル\n', 'utf8');
    check('11. 索引に無い docs/rules ファイルで鳴る', run(['--check']) !== 0);
  } finally {
    fs.rmSync(stray, { force: true });
  }
  check('11b. 捨てファイルを消したら鳴らない', run(['--check']) === 0);

  fs.writeFileSync(
    file('AGENTS.md'),
    backup['AGENTS.md'].replace('docs/rules/icons.md', 'docs/rules/__does-not-exist.md'),
    'utf8',
  );
  check('12. 索引が実在しないファイルを指したら鳴る', run(['--check']) !== 0);

  // 13-14: 廃止した写しが戻ってくる経路。`--check` は必ず鳴り、`sync` は
  //        **写しのときだけ**消す（人が書いた中身を黙って捨てない）。
  restore();
  fs.writeFileSync(file('GEMINI.md'), backup['AGENTS.md'], 'utf8');
  const copyFires = run(['--check']) !== 0;
  const copyRemoved = run([]) === 0 && !fs.existsSync(file('GEMINI.md'));
  check('13. 写しの GEMINI.md が戻ったら鳴り、sync が消す', copyFires && copyRemoved);

  fs.writeFileSync(file('GEMINI.md'), '# GEMINI.md\n\n手で書いた別の指示。\n', 'utf8');
  const otherFires = run(['--check']) !== 0;
  run([]);
  const kept = fs.existsSync(file('GEMINI.md'));
  check('14. 中身の違う GEMINI.md は鳴るが、sync は消さない', otherFires && kept);
} finally {
  restore();
}

check(
  '10. 後始末で元どおり（3 つの入口が一致し、GEMINI.md が無く、--check が緑）',
  NAMES.every((n) => fs.readFileSync(file(n), 'utf8') === backup[n]) &&
    !fs.existsSync(file('GEMINI.md')) &&
    run(['--check']) === 0,
);

process.exit(results.every(Boolean) ? 0 : 1);
