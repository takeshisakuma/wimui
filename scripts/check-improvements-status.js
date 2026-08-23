#!/usr/bin/env node
/**
 * Guard: IMPROVEMENTS.md の状態列が本文と矛盾していないか。
 *
 * この表は「残っているものを一覧で見る」ためにあるのに、**完了しても状態列を
 * 直さない**ことが繰り返し起きていた。2026-08-01 の掃除時点で、済んでいるのに
 * `P1` / `P2` / `未着手` のままだった行が **5 件**あった（T28 / T29 / T44 /
 * T45 / T50）。うち T50 は**完了記録そのものが本文にも無かった**。
 *
 * 番号を振っても状態が嘘なら、完了済みが上位に居座って本当の残件が埋もれる。
 * 人が読んで気付く前提にせず、機械に突き合わせさせる。
 *
 * 見るもの:
 *   1. 状態列が未完了（P1/P2/P3/未着手）なのに、本文に完了記録（「済（日付…）」
 *      「**済**」）がある行 → 矛盾
 *   2. 「済」なのに完了の根拠（日付か PR 番号）が**行のどこにも**無い行
 *
 * 表ごとにヘッダーが違う（`状態` の表と `優先` の表がある）ので、
 * ヘッダー行から状態列の位置を毎回読み直す。
 *
 * **このガードで catch できないもの**: 「実際は済んでいるのに、ファイルの
 * どこにもそう書かれていない」（T50 がこれだった）。ファイル内の矛盾は見えるが、
 * ファイルと現実のズレは見えない。そこは人間かレビューが埋めるしかない。
 *
 * Usage: node scripts/check-improvements-status.js
 */
import fs from "fs";

const FILE = "IMPROVEMENTS.md";
const ID = /^\|\s*(T\d+|CI-\d+|SMOKE)\s*\|/;
const OPEN = /^\*\*(P\d|未着手)|^未着手/;
const DONE_IN_BODY = /\*\*済\*\*|済（20\d\d-\d\d-\d\d|済（#|済（PR #/;
const DONE_STATUS = /^\*\*済|^済/;
const EVIDENCE = /20\d\d-\d\d-\d\d|#\d{2,}/;

/**
 * 行をセルに割る。**`\|`（エスケープ済み）は区切りに数えない。**
 *
 * 列数の検査だけがこの規則を守っていて、**状態列の取り出しは素の `split("|")` の
 * ままだった**（2026-08-23 に発覚）。`\|` を含む行では添字がずれ、`CI-10` の状態列は
 * **`"danger \"` として読まれていた** ── `**未着手**` に一致しないので**未完了に
 * 数えられず**、`**済**` にも一致しないので根拠の検査も素通りしていた。
 *
 * つまり**このガードの「未完了 N 件」は、本文に縦棒を書いた行を黙って落としていた。**
 * 残件の数を出すことがこのガードの仕事なので、これは数え方そのものの誤り。
 * 実測では 2 行が該当し、うち 1 行（`CI-10`）が実際に隠れていた（7 → 6 と出ていた）。
 */
const splitCells = (line) => line.split("\\|").join("§").split("|");
/** 表の列数。 */
const cellCount = (line) => splitCells(line).length;

function main() {
  if (!fs.existsSync(FILE)) {
    console.error(`✗ ${FILE} が無い。`);
    process.exit(1);
  }

  const lines = fs.readFileSync(FILE, "utf8").split(/\r?\n/);
  let statusIdx = -1;
  const contradictions = [];
  const unevidenced = [];
  let checked = 0;
  let open = 0;
  const malformed = [];
  let headerCols = 0;
  let headerLine = 0;

  lines.forEach((line, i) => {
    if (/^\|\s*#\s*\|/.test(line)) {
      statusIdx = line.split("|").findIndex((c) => /状態|優先/.test(c));
      headerCols = cellCount(line);
      headerLine = i + 1;
      return;
    }
    const m = line.match(ID);
    if (!m || statusIdx < 0) return;

    // 列数がヘッダーと合っているか。合っていない行は**表として壊れて描画される**
    // （余った列は落ち、足りない行は隣の列にずれ込む）。2026-08-05 の実測で 10 行が
    // 壊れていた: 完了記録を「6 列目」として足したもの・末尾の区切りを書き忘れたもの・
    // 本文の素の縦棒（`"from" | "to"` や `git diff | head`）が区切りに化けたもの。
    // 状態列しか見ていなかったので、このガード自身がそれを見逃していた。
    const cols = cellCount(line);
    if (headerCols > 0 && cols !== headerCols) {
      malformed.push({ line: i + 1, id: m[1], cols, headerCols, headerLine });
    }

    const status = (splitCells(line)[statusIdx] ?? "").trim();
    if (!status) return;
    checked += 1;

    if (OPEN.test(status)) {
      open += 1;
      if (DONE_IN_BODY.test(line)) {
        contradictions.push({ line: i + 1, id: m[1], status: status.slice(0, 40) });
      }
    } else if (DONE_STATUS.test(status) && !EVIDENCE.test(line)) {
      // 根拠は行のどこにあってもよい（多くの行は本文側に日付や PR 番号を書いている）。
      unevidenced.push({ line: i + 1, id: m[1], status: status.slice(0, 40) });
    }
  });

  let failed = false;

  if (contradictions.length) {
    failed = true;
    console.error("✗ 状態列が未完了なのに、本文には完了記録がある:");
    for (const c of contradictions) {
      console.error(`  - ${FILE}:${c.line}  ${c.id}  状態列='${c.status}'`);
    }
    console.error(
      "\n  完了したら状態列も直すこと。直さないと、済んだ項目が P1 として\n" +
        "  居座り続け、本当の残件が埋もれる。",
    );
  }

  if (unevidenced.length) {
    failed = true;
    console.error(
      `${contradictions.length ? "\n" : ""}✗ 「済」だが根拠（日付か PR 番号）が状態列に無い:`,
    );
    for (const u of unevidenced) {
      console.error(`  - ${FILE}:${u.line}  ${u.id}  状態列='${u.status}'`);
    }
    console.error("\n  `**済**（2026-08-01・#191）` のように、いつ何で済んだかを残すこと。");
  }

  if (malformed.length) {
    failed = true;
    console.error(
      `${failed && (contradictions.length || unevidenced.length) ? "\n" : ""}✗ 表の列数がヘッダーと合っていない:`,
    );
    for (const b of malformed) {
      console.error(
        `  - ${FILE}:${b.line}  ${b.id}  ${b.cols} 列（${b.headerLine} 行目のヘッダーは ${b.headerCols} 列）`,
      );
    }
    console.error(
      "\n  多い場合は本文に素の `|` が紛れている（`\"from\" | \"to\"` や `git diff | head` 等）。\n" +
        "  `\\|` へエスケープするか、完了記録を新しい列として足さず検証方法セルの中へ入れること。\n" +
        "  少ない場合は末尾の区切りが抜けている。",
    );
  }

  if (failed) process.exit(1);

  console.log(
    `✓ IMPROVEMENTS.md の状態列は本文と整合（${checked} 行を照合、未完了 ${open} 件）。`,
  );
}

main();
