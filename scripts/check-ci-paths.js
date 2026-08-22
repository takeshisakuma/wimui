/**
 * VRT / a11y のトリガー `paths` が腐っていないかを見張る（T92）。
 *
 * この 2 つのワークフローは `paths` フィルタを持つ。フィルタが実態から漏れると
 * **「対象なのに 1 本も起動しない」** という形で壊れ、しかもその場では何も起きない。
 * 影響が出るのは次に VRT を走らせた無関係な PR が落ちたときで、落ちた側は自分の
 * 変更を疑うため原因にたどり着けない。同じ形で 3 度再発している:
 *
 *   #185 — `threshold` を変えた PR が **main で VRT を 1 本も起動しなかった**
 *          （`push` 側の paths だけ漏れていた）
 *   #219 — `sandbox/**` が漏れており、レシピを足しても VRT が走らず、
 *          **次の無関係な PR #220 が自分と関係ない差分で落ちた**
 *   #250 / #272 — `package.json` / `package-lock.json` が漏れており、
 *          **`playwright` と Storybook を同時に上げても VRT も a11y も走らない**
 *
 * 根本は「**2 ファイル × 2 トリガー = 4 箇所が独立に腐る**」こと。人が 4 箇所を
 * 手で同期し続ける限り再発するので、機械に見張らせる。
 *
 * 見るのは 3 点:
 *   1. `pull_request.paths` と `push.paths` が**完全に一致**すること（#185 の形）
 *   2. 自分自身のワークフローファイル・`package.json` / `package-lock.json` を
 *      含むこと（#250 / #272 と、#9 / #10 / #19 の actions 差し替えの形）
 *   3. `workflow_dispatch` を持つこと ── `paths` をどれだけ揃えても漏れは残るので、
 *      **確かめたいときに手で起動できる**逃げ道を必ず持たせる（a11y には無かった）
 */

import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, "..");

// 撮影・検査の道具が変われば結果が変わる。どちらのワークフローにも必須。
const REQUIRED_PATHS = ["package.json", "package-lock.json"];

// 2026-08-22: `narrow-overflow.yml` と `tap-target.yml` も同じ形（全ストーリーを
// ブラウザで測るゲート）なので、同じ規約で見張る。
const TARGETS = ["vrt.yml", "a11y.yml", "tap-target.yml", "narrow-overflow.yml"];

/**
 * `on:` 直下のトリガーごとに `paths:` の配列を拾う、用途を絞った読み取り。
 *
 * 汎用 YAML パーサは引かない（この 2 ファイルのために依存を増やすと、その依存の
 * 更新自体がまさにこのガードの対象になる）。代わりに**読めなかったら落ちる**形に
 * して、書式が変わったまま黙って素通りすることを防ぐ。
 */
function readTriggerPaths(file) {
  const lines = fs.readFileSync(file, "utf8").split(/\r?\n/);
  const triggers = {};
  let trigger = null;
  let pathsIndent = null;

  for (const line of lines) {
    if (!line.trim() || line.trim().startsWith("#")) continue;
    const indent = line.length - line.trimStart().length;

    // `paths:` の項目を集めている最中か
    if (pathsIndent !== null) {
      const item = line.trim().match(/^-\s+"?([^"]+)"?\s*$/);
      if (indent > pathsIndent && item) {
        triggers[trigger].push(item[1]);
        continue;
      }
      pathsIndent = null; // 配列の終わり
    }

    if (indent === 0) {
      trigger = null; // `on:` を抜けた（jobs: など）
      continue;
    }
    if (indent === 2 && line.trim().endsWith(":")) {
      trigger = line.trim().slice(0, -1);
      if (!(trigger in triggers)) triggers[trigger] = null;
      continue;
    }
    if (trigger && line.trim() === "paths:") {
      triggers[trigger] = [];
      pathsIndent = indent;
    }
  }
  return triggers;
}

const errors = [];
let checked = 0;

for (const name of TARGETS) {
  const file = path.join(root, ".github", "workflows", name);
  if (!fs.existsSync(file)) {
    errors.push(`${name}: ファイルが見つからない（TARGETS の指定が古い）`);
    continue;
  }
  checked++;
  const triggers = readTriggerPaths(file);
  const self = `.github/workflows/${name}`;

  for (const t of ["pull_request", "push"]) {
    if (!(t in triggers)) {
      errors.push(`${name}: \`${t}\` トリガーが無い`);
      continue;
    }
    if (triggers[t] === null || triggers[t].length === 0) {
      errors.push(
        `${name}: \`${t}.paths\` を読み取れなかった（書式が変わった可能性。` +
          `フィルタ自体を外したのなら TARGETS から外すこと）`,
      );
      continue;
    }
    for (const required of [...REQUIRED_PATHS, self]) {
      if (!triggers[t].includes(required)) {
        errors.push(`${name}: \`${t}.paths\` に "${required}" が無い`);
      }
    }
  }

  // #185 の形。2 つのリストが独立に腐るのを禁じる。
  if (Array.isArray(triggers.pull_request) && Array.isArray(triggers.push)) {
    const onlyPr = triggers.pull_request.filter((p) => !triggers.push.includes(p));
    const onlyPush = triggers.push.filter((p) => !triggers.pull_request.includes(p));
    if (onlyPr.length || onlyPush.length) {
      errors.push(
        `${name}: \`pull_request.paths\` と \`push.paths\` が食い違っている` +
          (onlyPr.length ? `\n    pull_request にだけある: ${onlyPr.join(", ")}` : "") +
          (onlyPush.length ? `\n    push にだけある: ${onlyPush.join(", ")}` : ""),
      );
    }
  }

  if (!("workflow_dispatch" in triggers)) {
    errors.push(
      `${name}: \`workflow_dispatch\` が無い ── \`paths\` の漏れは必ず残るので、` +
        `手で起動して確かめる逃げ道を持たせること`,
    );
  }
}

console.log("--- Checking VRT / a11y trigger paths (T92) ---");
// 母数を出す。「0 件」がガードの緑なのか走査対象が空なのかを出力で見分けられるように
// する（T84 / T89 と同じ）。
console.log(`走査: ワークフロー ${checked} / ${TARGETS.length} ファイル`);

if (checked !== TARGETS.length || errors.length) {
  console.error("\n✗ トリガーの paths に穴がある:\n");
  for (const e of errors) console.error(`  - ${e}`);
  console.error(
    "\n`paths` の漏れは「その場では何も起きず、次の無関係な PR が落ちる」形で出る。",
  );
  process.exit(1);
}

console.log("✓ pull_request / push の paths は一致し、道具の更新も dispatch も揃っている。");
