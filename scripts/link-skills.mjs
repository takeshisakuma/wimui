#!/usr/bin/env node
/**
 * `.agents/skills/` を各ツール固有のディレクトリへ繋ぐ。`prepare` から走るので、
 * **clone して `npm install` した時点で自動的に張られる**（他のユーザーが手順を踏む必要が無い）。
 *
 * **なぜ SSOT が `.agents/skills/` なのか**（一次資料で確認・2026-09-19）:
 *   - Codex   … `.agents/skills` **のみ**。`.claude/skills` は読まない
 *               （https://learn.chatgpt.com/docs/build-skills）
 *   - Cursor  … `.agents/skills` / `.cursor/skills` に加え、互換で `.claude/skills` も読む
 *               （https://cursor.com/docs/skills）
 *   - Claude Code … `.claude/skills` **のみ**（https://code.claude.com/docs/en/skills）
 * つまり `.agents/` に実体を置き、`.claude/` を繋ぐのが、どのツールからも 1 つの本文に
 * 届く唯一の形。`.claude/` は `.gitignore` 配下のまま（生成物なので git に複製を作らない）。
 *
 * **symlink をそのまま使わない理由**（実測・2026-09-19）:
 * このリポジトリは `core.symlinks = false` で、Git Bash の `ln -s` は**リンクではなく
 * ディレクトリの複製**を作る。しかも exit 0 を返すので失敗に見えない ── 気づかないまま
 * SKILL.md が 2 つになり、片方だけが更新される。Windows では代わりに**ジャンクション**
 * （`mklink /J`）を使う。これは**管理者権限も開発者モードも要らない**ことを実測で確認した。
 *
 * 繋げなかった場合だけ複製にフォールバックする。複製は必ず古くなるので、
 * `check:skills-mirror` が中身の一致を見張る（`npm run check:skills-mirror`）。
 *
 * Usage: node scripts/link-skills.mjs [--check]
 */
import fs from 'node:fs';
import path from 'node:path';
import { execFileSync } from 'node:child_process';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const SOURCE = path.join(ROOT, '.agents', 'skills');
/** 繋ぎ先。増やすときはここだけを編集する。 */
const MIRRORS = [path.join(ROOT, '.claude', 'skills')];

const checkOnly = process.argv.includes('--check');
const rel = (p) => path.relative(ROOT, p).split(path.sep).join('/');

/** その名前で見えているものが、SOURCE と同じ中身に解決されるか。 */
function sameTree(a, b) {
  if (!fs.existsSync(a) || !fs.existsSync(b)) return false;
  const walk = (dir, base = '') => {
    const out = [];
    for (const e of fs.readdirSync(dir, { withFileTypes: true }).sort((x, y) => (x.name < y.name ? -1 : 1))) {
      const p = path.join(dir, e.name);
      const key = base ? `${base}/${e.name}` : e.name;
      if (e.isDirectory()) out.push(...walk(p, key));
      else out.push([key, fs.readFileSync(p, 'utf8')]);
    }
    return out;
  };
  const A = walk(a);
  const B = walk(b);
  if (A.length !== B.length) return false;
  return A.every(([k, v], i) => B[i][0] === k && B[i][1] === v);
}

/** ジャンクション（Windows）／シンボリックリンク（POSIX）。張れたら true。 */
function link(target, linkPath) {
  fs.mkdirSync(path.dirname(linkPath), { recursive: true });
  try {
    if (process.platform === 'win32') {
      // /J はジャンクション。symlink と違い管理者権限を要求しない。
      execFileSync('cmd', ['/c', 'mklink', '/J', linkPath, target], { stdio: 'ignore' });
    } else {
      fs.symlinkSync(target, linkPath, 'dir');
      // `ln -s` 相当が複製になる環境があるので、張った結果を必ず見る。
      if (!fs.lstatSync(linkPath).isSymbolicLink()) return false;
    }
    return sameTree(target, linkPath);
  } catch {
    return false;
  }
}

/** 繋げないときの最後の手段。`check:skills-mirror` が古くなったら落とす。 */
function copy(target, dest) {
  fs.rmSync(dest, { recursive: true, force: true });
  fs.cpSync(target, dest, { recursive: true });
  return sameTree(target, dest);
}

if (!fs.existsSync(SOURCE)) {
  console.log(`skills: ${rel(SOURCE)} が無いので何もしません。`);
  process.exit(0);
}

/**
 * 繋がっているか（＝複製ではないか）。**Windows のジャンクションも `isSymbolicLink()` が
 * true を返し、`readlinkSync` が実体を返すことを実測で確認した**（2026-09-19）。
 * 中身が一致しているだけでは足りない ── 一致した複製は、次に SSOT を触った瞬間に古くなる。
 */
function isLink(p) {
  const st = fs.lstatSync(p, { throwIfNoEntry: false });
  if (!st?.isSymbolicLink()) return false;
  try {
    return path.resolve(path.dirname(p), fs.readlinkSync(p)) === path.resolve(SOURCE);
  } catch {
    return false;
  }
}

let failed = false;
for (const mirror of MIRRORS) {
  if (isLink(mirror) && sameTree(SOURCE, mirror)) {
    console.log(`✓ skills: ${rel(mirror)} は ${rel(SOURCE)} に繋がっています。`);
    continue;
  }
  // 中身は同じでも**複製**なら張り直す。一致していることは、繋がっていることの証拠にならない。
  if (!checkOnly && !isLink(mirror) && sameTree(SOURCE, mirror)) {
    console.log(`  skills: ${rel(mirror)} は複製でした。繋ぎ直します。`);
  } else if (sameTree(SOURCE, mirror)) {
    console.log(`▲ skills: ${rel(mirror)} は複製ですが中身は一致しています（\`npm run skills:link\` で繋ぎ直せます）。`);
    continue;
  }
  if (checkOnly) {
    console.error(`✗ skills: ${rel(mirror)} が ${rel(SOURCE)} と一致しません。`);
    console.error(`  \`npm run skills:link\` で張り直すこと（clone 直後なら \`npm install\` でも走ります）。`);
    failed = true;
    continue;
  }
  // 既存が複製・空ディレクトリ・壊れたリンクのいずれでも、まず退ける。
  // ジャンクションは rmSync だと中身を辿りうるので、Windows では rmdir で外す。
  if (fs.existsSync(mirror) || fs.lstatSync(mirror, { throwIfNoEntry: false })) {
    try {
      if (process.platform === 'win32') execFileSync('cmd', ['/c', 'rmdir', mirror], { stdio: 'ignore' });
      else fs.rmSync(mirror, { recursive: true, force: true });
    } catch {
      fs.rmSync(mirror, { recursive: true, force: true });
    }
  }
  if (link(SOURCE, mirror)) {
    console.log(`✓ skills: ${rel(mirror)} → ${rel(SOURCE)} を繋ぎました。`);
  } else if (copy(SOURCE, mirror)) {
    console.log(`▲ skills: 繋げなかったので ${rel(mirror)} へ複製しました。`);
    console.log(`  複製は必ず古くなります。\`npm run check:skills-mirror\` が一致を見張ります。`);
  } else {
    console.error(`✗ skills: ${rel(mirror)} を用意できませんでした。`);
    failed = true;
  }
}

process.exit(failed ? 1 : 0);
