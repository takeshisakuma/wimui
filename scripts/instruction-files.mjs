#!/usr/bin/env node
/**
 * AGENTS.md を正本として `CLAUDE.md` / `GEMINI.md` を生成・検証する（T259）。
 *
 * この 3 ファイルは 2026-09-19 まで**どのガードも見ていなかった**。AGENTS.md と
 * GEMINI.md がバイト単位で同一だったのは仕組みではなく偶然で、片方だけ直せば
 * 片方のツールだけが古い指示を読む、という壊れ方をする。
 *
 * 配置:
 *   - `AGENTS.md`  … 正本。Codex / Cursor などはこれを直接読む。
 *   - `CLAUDE.md`  … `@AGENTS.md` の 1 行（Claude Code の import 構文）。
 *   - `GEMINI.md`  … AGENTS.md の写し。
 *
 * なぜ CLAUDE.md を消さず、散文の案内にもしないか（実測・2026-09-19、cc 2.1.278）:
 *   - `claude -p` で確かめたところ、`@AGENTS.md` と書いた回は AGENTS.md の中身が
 *     **tool を 1 回も呼ばずに**答えに出た（num_turns=1）。
 *   - 同じ場所を「AGENTS.md を参照してください」という散文にした回は「不明」。
 *     散文の転送では中身は届かない。
 *   - CLAUDE.md を消せば 2.1.277 以降の fallback で AGENTS.md が読まれるが、
 *     それ未満の環境では**指示が丸ごと消える**。import なら版を選ばない。
 *   - 切り替え設定（plugin `agents-md` の `instructionFiles`）は user / flag /
 *     policy settings からしか読まれない（`.claude/settings.json` には置けない）。
 *
 * Usage:
 *   node scripts/instruction-files.mjs           # AGENTS.md から 2 つを生成
 *   node scripts/instruction-files.mjs --check    # ずれていたら 1 で落ちる
 */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const SOURCE = 'AGENTS.md';
const IMPORT_LINE = '@AGENTS.md';

/** CLAUDE.md の全文（import 1 行 + なぜそうなっているかの案内）。 */
const FORWARDER = [
  '# CLAUDE.md',
  '',
  '指示の正本は `AGENTS.md` です。次の 1 行は Claude Code の import 構文で、AGENTS.md の中身をそのままこの場に読み込みます（「AGENTS.md を参照」という散文では中身は届きません＝T259 で実測）。',
  '',
  IMPORT_LINE,
  '',
].join('\n');

/** 正本が「栞」に戻っていないことを見るための錨。本文が在れば必ず含まれる。 */
const ANCHORS = ['エージェントへの委任ポリシー', 'よく使うコマンド', 'アーキテクチャ概要'];

const read = (name) => {
  const file = path.join(ROOT, name);
  return fs.existsSync(file) ? fs.readFileSync(file, 'utf8') : null;
};

const problems = [];
const source = read(SOURCE);

if (source === null) {
  problems.push(`${SOURCE} が無い。指示の正本なので、まずこれを置くこと。`);
} else {
  if (source.includes('\r\n')) {
    problems.push(`${SOURCE} に CRLF が混ざっている（写しとのバイト比較が Windows でだけ壊れる）。LF で保存すること。`);
  }
  const missing = ANCHORS.filter((a) => !source.includes(a));
  if (missing.length > 0) {
    problems.push(
      `${SOURCE} が正本の体を成していない（見出しが無い: ${missing.join(' / ')}）。` +
        `CLAUDE.md / GEMINI.md へ中身を戻すのではなく、${SOURCE} に書くこと。`,
    );
  }
  // 旧状態（AGENTS.md が CLAUDE.md へ本文を委ねる栞）への逆戻りを止める。
  for (const pointer of ['CLAUDE.md', 'GEMINI.md']) {
    if (new RegExp(`\`${pointer}\`\\s*を参照`).test(source)) {
      problems.push(`${SOURCE} が \`${pointer}\` へ本文を委ねている。正本が中身を持つこと（循環する）。`);
    }
  }
}

const expected = source === null ? null : { 'CLAUDE.md': FORWARDER, 'GEMINI.md': source };
const isCheck = process.argv.includes('--check');

if (expected !== null) {
  for (const [name, want] of Object.entries(expected)) {
    const got = read(name);
    if (got === want) continue;
    if (!isCheck) {
      fs.writeFileSync(path.join(ROOT, name), want, 'utf8');
      console.log(`書き換えた: ${name}`);
      continue;
    }
    problems.push(
      got === null
        ? `${name} が無い。\`npm run instructions:sync\` で生成すること。`
        : name === 'GEMINI.md'
          ? `GEMINI.md が ${SOURCE} の写しになっていない（${Buffer.byteLength(got)} / ${Buffer.byteLength(want)} バイト）。\`npm run instructions:sync\` で揃えること。`
          : `CLAUDE.md が \`${IMPORT_LINE}\` だけの転送になっていない。中身は ${SOURCE} に書き、\`npm run instructions:sync\` で戻すこと。`,
    );
  }
}

if (problems.length > 0) {
  console.error('指示ファイル（AGENTS.md / CLAUDE.md / GEMINI.md）がずれている:');
  for (const p of problems) console.error(`  - ${p}`);
  process.exit(1);
}

console.log(isCheck ? 'OK: AGENTS.md / CLAUDE.md / GEMINI.md は揃っている' : 'OK: AGENTS.md から 2 ファイルを揃えた');
