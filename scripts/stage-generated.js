// lint-staged タスク内で生成物を git add するためのラッパー。
//
// lint-staged はステージ対象のファイル数が多いとコマンドをチャンク分割して
// 同じタスク列を複数回実行するため、素の `git add` は
//  - 別チャンクの git add
//  - lint-staged 自身の staging 処理（"Staging changes from tasks"）
// と .git/index.lock で衝突して "Unable to create index.lock" で落ちることがある。
// このスクリプトはロック競合時に短い待機を挟んでリトライする。
//
// 使い方: node scripts/stage-generated.js <path...> --
//   `--` 以降は無視する（lint-staged が末尾に付加するステージ済みファイル一覧を捨てるため）
import { execFileSync } from "node:child_process";
import { setTimeout as sleep } from "node:timers/promises";

const args = process.argv.slice(2);
const sep = args.indexOf("--");
const targets = sep === -1 ? args : args.slice(0, sep);

if (targets.length === 0) {
  console.error("stage-generated: 対象パスが指定されていません");
  process.exit(1);
}

const MAX_RETRIES = 10;
for (let attempt = 1; ; attempt++) {
  try {
    execFileSync("git", ["add", "--", ...targets], { stdio: "pipe" });
    break;
  } catch (err) {
    const msg = String(err.stderr ?? err.message ?? "");
    const isLock = msg.includes("index.lock");
    if (!isLock || attempt >= MAX_RETRIES) {
      console.error(msg || String(err));
      process.exit(1);
    }
    await sleep(150 * attempt);
  }
}
