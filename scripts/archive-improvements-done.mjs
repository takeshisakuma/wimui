#!/usr/bin/env node
/**
 * `IMPROVEMENTS.md` の台帳から「済」の行を `docs/history/improvements-ledger.md` へ移す。
 *
 * **なぜ移すのか**（2026-09-21）: `IMPROVEMENTS.md` は次のセッションが毎回最初に読む
 * ファイルなのに、容量の 9 割以上（273 行・993 KB）が**済んだ行**だった。残っている
 * 仕事を見るための台帳が、済んだ仕事の記録で埋まっていた。
 *
 * 移し方:
 *   - 「済」の判定は `check-improvements-status.js` と同じ（表のヘッダー `| # |` から
 *     状態列の位置を読み、その列が `済` / `**済` で始まる行）
 *   - 行は**1 文字も書き換えない**。退避先では元の見出しと表のヘッダーの下に置くので、
 *     どの表の行だったかは失われない
 *   - 同じ見出し・同じヘッダーの表が退避先に既にあれば、その表の末尾に足す
 *   - 元の表はヘッダーだけになっても残す（次の行をそこへ足せるように）
 *
 * Usage: node scripts/archive-improvements-done.mjs [--check]
 *   --check  移すべき行があれば一覧を出して exit 1（書き換えない）
 */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { execFileSync } from "node:child_process";

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const SRC = path.join(ROOT, "IMPROVEMENTS.md");
const DEST = path.join(ROOT, "docs", "history", "improvements-ledger.md");

export const ID = /^\|\s*(T\d+|CI-\d+|SMOKE)\s*\|/;
const HEADER = /^\|\s*#\s*\|/;
const DONE_STATUS = /^\*\*済|^済/;
const splitCells = (line) => line.split("\\|").join("§").split("|");

const DEST_INTRO = [
  "# 改善台帳の済んだ行",
  "",
  "> `IMPROVEMENTS.md` の台帳から、状態が「済」になった行を移した場所です（`npm run improvements:archive`）。行は**1 文字も書き換えていません**。見出しは元の表の見出しで、タスク番号（`T45` など）で検索すれば起票から完了までの記録に届きます。",
  ">",
  "> 新しい番号を振るときは `npm run check:improvements` が「次の番号」を出します（こちらの番号も数えています）。",
  "",
].join("\n");

/** 台帳を読み、済の行とその所属（見出し・表ヘッダー）を返す。 */
export function findDone(lines) {
  let heading = "";
  let header = null;
  let sep = null;
  let statusIdx = -1;
  const done = [];
  lines.forEach((line, i) => {
    if (/^#{1,6} /.test(line)) heading = line.replace(/^#{1,6} /, "");
    if (HEADER.test(line)) {
      header = line;
      sep = lines[i + 1];
      statusIdx = line.split("|").findIndex((c) => /状態|優先/.test(c));
      return;
    }
    if (!ID.test(line) || statusIdx < 0) return;
    const status = (splitCells(line)[statusIdx] ?? "").trim();
    if (DONE_STATUS.test(status)) done.push({ i, line, heading, header, sep });
  });
  return done;
}

function main() {
  const check = process.argv.includes("--check");
  const lines = fs.readFileSync(SRC, "utf8").split("\n");
  const done = findDone(lines);

  if (check) {
    if (done.length === 0) {
      console.log("✓ IMPROVEMENTS.md の台帳に「済」の行は残っていない。");
      return;
    }
    console.error(`✗ 「済」の行が ${done.length} 件、台帳に残っている（\`npm run improvements:archive\` で移せる）:`);
    for (const d of done) console.error(`  - IMPROVEMENTS.md:${d.i + 1}  ${d.line.match(ID)[1]}`);
    process.exit(1);
  }

  if (done.length === 0) {
    console.log("移す行は無い。");
    return;
  }

  // 退避先を「## 見出し」ごとのブロックに割る
  const destText = fs.existsSync(DEST) ? fs.readFileSync(DEST, "utf8") : DEST_INTRO;
  const dest = destText.replace(/\n*$/, "").split("\n");

  for (const d of done) {
    const title = `## ${d.heading}`;
    // 同じ見出しで同じヘッダーの表を探す
    let at = -1;
    for (let k = 0; k < dest.length; k++) {
      if (dest[k] === title && dest[k + 2] === d.header) {
        let end = k + 4;
        while (end < dest.length && ID.test(dest[end])) end++;
        at = end;
        break;
      }
    }
    if (at >= 0) dest.splice(at, 0, d.line);
    else dest.push("", title, "", d.header, d.sep, d.line);
  }

  const drop = new Set(done.map((d) => d.i));
  const kept = lines.filter((_, i) => !drop.has(i));

  fs.mkdirSync(path.dirname(DEST), { recursive: true });
  fs.writeFileSync(DEST, dest.join("\n") + "\n");
  fs.writeFileSync(SRC, kept.join("\n"));
  const kb = (s) => `${Math.round(Buffer.byteLength(s) / 1024)} KB`;
  staleRefs(done.map((d) => d.line.match(ID)[1]));
  console.log(
    `移した: ${done.length} 行 → docs/history/improvements-ledger.md（IMPROVEMENTS.md ${kb(lines.join("\n"))} → ${kb(kept.join("\n"))}）`,
  );
}

/**
 * 移した番号を `IMPROVEMENTS.md` の名前で指している箇所を出す（書き換えはしない）。
 * 移した瞬間にその参照は腐る ── 2026-09-21 の初回は 6 箇所（workflow 2 / json 2 / script / src）。
 * `execFileSync` を使う（Windows の `execSync` は cmd.exe を通り、引数の記号が食われる）。
 */
function staleRefs(ids) {
  const re = `IMPROVEMENTS[.]md.{0,12}(${ids.join("|")})([^0-9]|$)`;
  let out = "";
  try {
    out = execFileSync(
      "git",
      ["grep", "-n", "-E", re, "--", ":!IMPROVEMENTS.md", ":!docs/history", ":!CHANGELOG.md"],
      { cwd: ROOT, encoding: "utf8" },
    );
  } catch {
    return; // 一致なし（git grep は exit 1）
  }
  const lines = out.trim().split(/\r?\n/).filter(Boolean);
  if (!lines.length) return;
  console.log(
    `\n注意: 移した番号を IMPROVEMENTS.md の名前で指している箇所が ${lines.length} 件（docs/history/improvements-ledger.md へ張り替えること）:`,
  );
  for (const l of lines) console.log(`  - ${l.slice(0, 160)}`);
}

if (process.argv[1] && path.resolve(process.argv[1]) === fileURLToPath(import.meta.url)) main();
