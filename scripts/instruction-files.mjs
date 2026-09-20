#!/usr/bin/env node
/**
 * AGENTS.md を正本として、各ツールの入口を生成・検証する（T259 / 2026-09-20）。
 *
 * この 3 ファイルは 2026-09-19 まで**どのガードも見ていなかった**。AGENTS.md と
 * GEMINI.md がバイト単位で同一だったのは仕組みではなく偶然で、片方だけ直せば
 * 片方のツールだけが古い指示を読む、という壊れ方をする。
 *
 * **2026-09-20 に GEMINI.md を廃止した。** 写しを持つ限り「腐りうる」状態は消えない。
 * Gemini CLI は既定の探索先こそ `GEMINI.md` だが、**プロジェクト直下の
 * `.gemini/settings.json`** を読み、`context.fileName` で読む先を変えられる
 * （https://geminicli.com/docs/reference/configuration）。**Claude Code とはここが非対称** ──
 * あちらの切り替え設定は user / flag / policy settings からしか読まれず repo に置けないので、
 * `CLAUDE.md` は import 1 行として残す。Gemini は repo に置けるので、写しは要らない。
 *
 * **この経路はこの環境では実行して確かめられない**（gemini CLI 未インストール）。
 * `CLAUDE.md` の import は `claude -p` で実測したが、こちらは公式ドキュメントが根拠。
 * 戻すのは簡単で、`GEMINI.md` を AGENTS.md の写しとして置き直せばよい。
 *
 * 配置:
 *   - `AGENTS.md`  … 正本。Codex / Cursor などはこれを直接読む。
 *   - `CLAUDE.md`  … `@AGENTS.md` の 1 行（Claude Code の import 構文）。
 *   - `.gemini/settings.json` … Gemini CLI の `context.fileName` を AGENTS.md に向ける。
 *                    **GEMINI.md は置かない**（写しは必ず腐る）。
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

/**
 * `docs/rules/**.md` が AGENTS.md の索引から漏れていないかを見る（2026-09-20・RULES.md 廃止）。
 *
 * 規則の置き場を 1 ファイルから 7 ファイルへ割ったので、**足したのに誰も辿れない規則**が
 * 作れるようになった。正本が索引を持っている限り、エージェントは "何をするとき何を読むか"
 * を 1 度の読み込みで知れる。索引に無いファイルは、置いた本人以外には存在しないのと同じ。
 *
 * 逆向き（索引にあるのにファイルが無い）も見る。切り出し元の `RULES.md` を消したので、
 * 同じ形の死んだ参照がまた生まれうる。
 */
function checkRulesIndex(source) {
  const dir = path.join(ROOT, 'docs', 'rules');
  if (!fs.existsSync(dir)) return [];
  const found = [];
  for (const name of fs.readdirSync(dir)) {
    if (!name.endsWith('.md')) continue;
    const rel = `docs/rules/${name}`;
    if (!source.includes(rel)) {
      found.push(`${rel} が ${SOURCE} の索引に無い（置いても誰も辿れない）。表に 1 行足すこと。`);
    }
  }
  for (const m of source.matchAll(/docs\/rules\/[A-Za-z0-9._-]+\.md/g)) {
    if (!fs.existsSync(path.join(ROOT, m[0]))) {
      found.push(`${SOURCE} が ${m[0]} を指しているが、そのファイルが無い。`);
    }
  }
  return found;
}

if (source !== null) problems.push(...checkRulesIndex(source));

/** Gemini CLI の入口。プロジェクト直下の設定で読む先を AGENTS.md に向ける。 */
const GEMINI_SETTINGS = '.gemini/settings.json';
const GEMINI_SETTINGS_BODY = JSON.stringify({ context: { fileName: [SOURCE] } }, null, 2) + '\n';

/**
 * `GEMINI.md` が戻ってきていないかを見る。
 *
 * 戻ってくること自体は起こりうる（他のツールが作る・過去の手順書をなぞる）。
 * **問題は、戻ってきた瞬間から Gemini CLI がそちらを読み、AGENTS.md の更新が届かなくなること。**
 * 2026-09-19 まで写しがずれても誰も気づかなかったのと同じ形なので、存在自体を赤にする。
 */
function checkGeminiEntrypoint(isCheck) {
  const found = [];
  const stale = read('GEMINI.md');
  if (stale !== null) {
    if (!isCheck && stale === source) {
      fs.rmSync(path.join(ROOT, 'GEMINI.md'));
      console.log('削除した: GEMINI.md（AGENTS.md の写しだった）');
    } else {
      found.push(
        stale === source
          ? 'GEMINI.md が戻っている（AGENTS.md の写し）。`npm run instructions:sync` で消すこと。'
          : 'GEMINI.md が戻っていて、しかも AGENTS.md と中身が違う。書いた内容を AGENTS.md へ移してから消すこと。',
      );
    }
  }

  const settingsPath = path.join(ROOT, GEMINI_SETTINGS);
  const raw = fs.existsSync(settingsPath) ? fs.readFileSync(settingsPath, 'utf8') : null;
  let parsed = null;
  if (raw !== null) {
    try {
      parsed = JSON.parse(raw);
    } catch {
      found.push(`${GEMINI_SETTINGS} が JSON として壊れている。`);
      return found;
    }
  }
  const names = [parsed?.context?.fileName ?? []].flat();
  if (!names.includes(SOURCE)) {
    if (!isCheck) {
      fs.mkdirSync(path.dirname(settingsPath), { recursive: true });
      fs.writeFileSync(settingsPath, GEMINI_SETTINGS_BODY, 'utf8');
      console.log(`書き換えた: ${GEMINI_SETTINGS}`);
    } else {
      found.push(
        raw === null
          ? `${GEMINI_SETTINGS} が無い。これが無いと Gemini CLI は既定の GEMINI.md を探し、**指示が 1 行も届かない**。\`npm run instructions:sync\` で生成すること。`
          : `${GEMINI_SETTINGS} の context.fileName が ${SOURCE} を含んでいない（いま: ${JSON.stringify(names)}）。`,
      );
    }
  }
  if (names.includes('GEMINI.md')) {
    found.push(`${GEMINI_SETTINGS} が GEMINI.md を読む先に残している。写しを復活させることになるので外すこと。`);
  }
  return found;
}

const expected = source === null ? null : { 'CLAUDE.md': FORWARDER };
const isCheck = process.argv.includes('--check');

if (source !== null) problems.push(...checkGeminiEntrypoint(isCheck));

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
        : `CLAUDE.md が \`${IMPORT_LINE}\` だけの転送になっていない。中身は ${SOURCE} に書き、\`npm run instructions:sync\` で戻すこと。`,
    );
  }
}

if (problems.length > 0) {
  console.error('指示の入口（AGENTS.md / CLAUDE.md / .gemini/settings.json）がずれている:');
  for (const p of problems) console.error(`  - ${p}`);
  process.exit(1);
}

console.log(
  isCheck
    ? 'OK: AGENTS.md / CLAUDE.md / .gemini/settings.json は揃っている（GEMINI.md は置かない）'
    : 'OK: AGENTS.md から各ツールの入口を揃えた',
);
