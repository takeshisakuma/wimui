#!/usr/bin/env node
/**
 * 出荷物（`src/` / `tokens/`）を変えた PR に changeset が付いているかを見る（2026-09-21）。
 * **いまは警告だけ**（`.github/workflows/changeset-reminder.yml` が PR にコメントする。
 * ジョブは落とさない）。数週間様子を見て、誤検出が空の changeset でさばけると分かったら
 * 落とす形に上げる（ユーザー判断）。
 *
 * **なぜ要るか**: 0.30.0 から 0.31.0 までの間に、利用者向けに `src/` を変えた PR は
 * #657 / #659 / #674 の 3 本で、**3 本とも changeset 無しでマージされた**。うち #674 は
 * `EmptyState` の既定の揃えを変える破壊的変更で、気付かなければ CHANGELOG に載らない
 * まま公開されていた。
 *
 * **changesets の `changeset status --since` をそのまま使わない理由**: この repo は
 * ルート全体が 1 パッケージなので、docs だけの PR でも「パッケージが変わった」と数えて
 * 落ちる（実測: `IMPROVEMENTS.md` だけのブランチで exit 1）。だから出荷物のパスで絞る。
 *
 * 警告しないもの:
 *   - 出荷物に触れていない PR（docs・ストーリー・スクリプト・CI）
 *   - テストだけの変更（`*.test.*`）
 *   - `.changeset/*.md` を足した PR ── 版を上げない変更（コメントの張り替えなど）は
 *     `npx changeset --empty` で空の changeset を足せば通る
 *
 * Usage: node scripts/check-changeset-needed.mjs [<base-ref>]   （既定: origin/main）
 *   changeset が要るのに無ければ exit 1（警告に使うかどうかは呼ぶ側が決める）
 */
import path from "node:path";
import { fileURLToPath } from "node:url";
import { execFileSync } from "node:child_process";

/** 出荷物になる変更か。 */
export function isShipped(file) {
  if (/\.test\.[cm]?[jt]sx?$/.test(file)) return false;
  return /^src\//.test(file) || /^tokens\//.test(file);
}

/** changeset のファイルか（README や設定は数えない）。 */
export function isChangeset(file) {
  return /^\.changeset\/[^/]+\.md$/.test(file) && !/\/README\.md$/.test(file);
}

/**
 * @param {string[]} changed  PR で変わったファイル（削除も含めてよい）
 * @param {string[]} added    PR で足されたファイル
 * @returns {{ needed: boolean, shipped: string[] }}
 */
export function needsChangeset(changed, added) {
  const shipped = changed.filter(isShipped);
  const hasChangeset = added.some(isChangeset);
  return { needed: shipped.length > 0 && !hasChangeset, shipped };
}

function git(args) {
  return execFileSync("git", args, { encoding: "utf8" }).split(/\r?\n/).filter(Boolean);
}

function main() {
  const base = process.argv[2] || "origin/main";
  const changed = git(["diff", "--name-only", `${base}...HEAD`]);
  const added = git(["diff", "--name-only", "--diff-filter=A", `${base}...HEAD`]);
  const { needed, shipped } = needsChangeset(changed, added);
  if (!needed) {
    console.log(
      shipped.length
        ? `✓ 出荷物を変えていて、changeset もある（${shipped.length} ファイル）。`
        : "✓ 出荷物（src/ / tokens/）に触れていないので changeset は要らない。",
    );
    return;
  }
  console.error(`! 出荷物を変えているのに changeset が無い（${shipped.length} ファイル）:`);
  for (const f of shipped.slice(0, 10)) console.error(`  - ${f}`);
  if (shipped.length > 10) console.error(`  …ほか ${shipped.length - 10}`);
  console.error(
    "\n  利用者に見える変更なら `npx changeset` で足す。版を上げない変更（コメントだけ等）なら `npx changeset --empty`。",
  );
  process.exit(1);
}

if (process.argv[1] && path.resolve(process.argv[1]) === fileURLToPath(import.meta.url)) main();
