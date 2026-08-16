/**
 * `release.yml` が T116 / T170 の契約を保っているか。
 *
 * どちらも「赤が出ない詰まり」で、壊れた瞬間は何も起きない:
 *
 *   T116 — `environment: release` が Version PR 経路に掛かると、承認されない
 *          ラン 1 本が concurrency を占有し、以降のリリースが無音で止まる
 *   T170 — Version PR のマージと version ジョブがぶつかると
 *          `cannot lock ref refs/heads/changeset-release/main` で落ちる。
 *          最後の run がこれだと、次の changeset まで Version PR が作られない
 *
 * ワークフローの YAML は PR のたびに目視されないので、契約を機械に置いておく。
 * 汎用 YAML パーサは引かない（この 1 ファイルのために依存を増やさない。
 * `check:ci-paths` と同じ）。**読めなかったら落ちる**形にして、書式が変わった
 * まま黙って素通りすることを防ぐ。
 *
 * 判定本体は `scripts/lib/release-workflow.js`（vitest から I/O 無しで呼ぶ）。
 *
 * Usage: node scripts/check-release-workflow.js
 */

import fs from "fs";
import path from "path";
import { fileURLToPath } from "node:url";
import {
  REQUIRED_JOBS,
  auditChangesetsPairing,
  auditReleaseYaml,
  splitJobs,
} from "./lib/release-workflow.js";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const RELEASE_YML = path.join(__dirname, "..", ".github", "workflows", "release.yml");

console.log("--- Checking release.yml contracts (T116 / T170) ---");
if (!fs.existsSync(RELEASE_YML)) {
  console.error("✗ .github/workflows/release.yml が無い");
  process.exit(1);
}
const yaml = fs.readFileSync(RELEASE_YML, "utf8");
const jobs = (() => {
  try {
    return splitJobs(yaml);
  } catch {
    return {};
  }
})();
// 母数を出す。「0 件」がガードの緑なのか走査対象が空なのかを出力で見分けられるように
// する（T84 / T89 と同じ）。
console.log(`走査: ジョブ ${Object.keys(jobs).length} 件（必須 ${REQUIRED_JOBS.length}）`);

const pkg = JSON.parse(
  fs.readFileSync(path.join(__dirname, "..", "package.json"), "utf8"),
);
const cliRange =
  pkg.devDependencies?.["@changesets/cli"] ?? pkg.dependencies?.["@changesets/cli"];
console.log(
  `走査: changesets/cli ${cliRange} と release.yml の action の組み合わせ（T201）`,
);

const errors = [...auditReleaseYaml(yaml), ...auditChangesetsPairing(yaml, cliRange)];
if (errors.length) {
  console.error("\n✗ release.yml の契約が崩れている:\n");
  for (const e of errors) console.error(`  - ${e}`);
  process.exit(1);
}
console.log(
  "✓ Version PR 経路に環境ゲートは無く、失敗した version は latest main から拾い直す。\n" +
    "  changesets の CLI と action も組になっている。",
);
