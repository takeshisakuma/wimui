#!/usr/bin/env node
/**
 * `vrt/a11y-incomplete.json`（incomplete のラチェット）を、実測から作り直す。
 *
 *   A11Y_INCOMPLETE_UPDATE=1 npx playwright test vrt/a11y.spec.ts   # 全量。断片を書き出す
 *   node scripts/update-a11y-incomplete.js                          # 断片 → ベースライン
 *
 * **部分実行の結果でベースラインを作らないこと。** シャードや `--grep` で
 * 走らせた断片から作ると、走らなかったストーリーの許可が丸ごと消え、
 * 次の CI が「消えた incomplete」で一斉に落ちる。ここでは
 * `storybook-static/index.json` の母数と突き合わせ、**1 通りでも欠けていたら
 * 書き込まずに落とす**（`check:slop` のラチェットが部分集合を全体と比べて
 * 素通りしていた件と同じ穴。CLAUDE.md「委任時の 2 つの約束」1）。
 */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, "..");
const FRAGMENT_DIR = path.join(root, "vrt", ".a11y-incomplete");
const BASELINE_PATH = path.join(root, "vrt", "a11y-incomplete.json");
const INDEX_PATH = path.join(root, "storybook-static", "index.json");
const THEMES = ["light", "dark"];

function fail(msg) {
  console.error(`\n[a11y-incomplete] ${msg}\n`);
  process.exit(1);
}

if (!fs.existsSync(FRAGMENT_DIR)) {
  fail(
    "断片がない。先に `A11Y_INCOMPLETE_UPDATE=1 npx playwright test vrt/a11y.spec.ts` を全量で走らせること。",
  );
}
if (!fs.existsSync(INDEX_PATH)) {
  fail("storybook-static/index.json がない。先に `npm run build-storybook`。");
}

const index = JSON.parse(fs.readFileSync(INDEX_PATH, "utf-8"));
const stories = Object.values(index.entries).filter((e) => e.type === "story");

const fragmentFiles = fs
  .readdirSync(FRAGMENT_DIR)
  .filter((f) => f.endsWith(".json"))
  .map((f) => path.join(FRAGMENT_DIR, f));

// **前の走行の置き土産を混ぜない。** スペック側は断片を消さない（ワーカーが
// 遅れて起動すると、先に書かれた断片を消しうるため）ので、古い測定が残りうる。
// 測定はそのビルドより後でなければおかしいので、`index.json` より古い断片は拒否する。
//
// `--ci` のときは見ない: 断片は別ジョブのアーティファクトから降ってくるので
// このジョブのビルドより**必ず古い**し、クリーンチェックアウトなので
// 「前の走行の残り」が存在しえない（守るべき事故が起きない経路）。
const isCI = process.argv.includes("--ci");
const buildTime = fs.statSync(INDEX_PATH).mtimeMs;
const stale = isCI ? [] : fragmentFiles.filter((f) => fs.statSync(f).mtimeMs < buildTime);
if (stale.length > 0) {
  fail(
    `storybook のビルドより古い断片が ${stale.length} 件ある（例: ${path.basename(stale[0])}）。` +
      `\n  前の走行の残りが混ざっている。\`rm -rf vrt/.a11y-incomplete\` してから測り直すこと。`,
  );
}

const fragments = fragmentFiles.map((f) => JSON.parse(fs.readFileSync(f, "utf-8")));

const seen = new Set(fragments.map((f) => `${f.story}@${f.theme}`));
const missing = [];
for (const s of stories) {
  for (const theme of THEMES) {
    if (!seen.has(`${s.id}@${theme}`)) missing.push(`${s.id}@${theme}`);
  }
}
if (missing.length > 0) {
  fail(
    `走査できていない組み合わせが ${missing.length} 件ある（例: ${missing.slice(0, 5).join(", ")}）。` +
      `\n  全量（${stories.length} ストーリー × ${THEMES.length} テーマ = ${stories.length * THEMES.length} 通り）が揃うまでベースラインは書き換えない。`,
  );
}

const previous = fs.existsSync(BASELINE_PATH)
  ? JSON.parse(fs.readFileSync(BASELINE_PATH, "utf-8"))
  : { reasons: {}, unstable: {}, stories: {} };

const next = {
  reasons: previous.reasons ?? {},
  unstable: previous.unstable ?? {},
  stories: {},
};
for (const f of fragments.sort((a, b) => a.story.localeCompare(b.story))) {
  if (f.rules.length === 0) continue;
  next.stories[f.story] ??= {};
  next.stories[f.story][f.theme] = [...f.rules].sort();
}
// テーマの並びを light → dark に揃える（差分を読みやすくするため）
for (const [id, byTheme] of Object.entries(next.stories)) {
  next.stories[id] = Object.fromEntries(
    THEMES.filter((t) => byTheme[t]).map((t) => [t, byTheme[t]]),
  );
}

const flatten = (b) =>
  new Set(
    Object.entries(b.stories ?? {}).flatMap(([id, byTheme]) =>
      Object.entries(byTheme).flatMap(([theme, rules]) =>
        rules.map((r) => `${r} @ ${id} (${theme})`),
      ),
    ),
  );
const before = flatten(previous);
const after = flatten(next);
const added = [...after].filter((k) => !before.has(k));
const removed = [...before].filter((k) => !after.has(k));

const rulesInUse = new Set([...after].map((k) => k.split(" @ ")[0]));
const withoutReason = [...rulesInUse].filter((r) => !next.reasons[r]);
for (const r of Object.keys(next.reasons)) {
  if (!rulesInUse.has(r)) delete next.reasons[r];
}
for (const r of Object.keys(next.unstable)) {
  if (!rulesInUse.has(r)) delete next.unstable[r];
}

/*
 * **「出たり出なかったり」の免除（`unstable`）は、この走行だけでは決められない。**
 * 1 回の測定では「今回は出なかった」と「もう出ない」を区別できないので、ここは
 * 前のベースラインの判断をそのまま持ち越し、消すのは人がやる。実測で分かった例は
 * `frame-tested`（外部 iframe が読み込めた回にだけ出る）。
 */

fs.writeFileSync(BASELINE_PATH, `${JSON.stringify(next, null, 2)}\n`);
fs.rmSync(FRAGMENT_DIR, { recursive: true, force: true });

const combos = [...after].length;
console.log(`[a11y-incomplete] ${stories.length} ストーリー × ${THEMES.length} テーマを走査`);
console.log(`  許可: ${combos} 通り / ${rulesInUse.size} ルール / ${Object.keys(next.stories).length} ストーリー`);
console.log(`  増: ${added.length}  減: ${removed.length}`);
for (const k of added.slice(0, 20)) console.log(`   + ${k}`);
for (const k of removed.slice(0, 20)) console.log(`   - ${k}`);
if (withoutReason.length > 0) {
  console.log(
    `\n  **理由が未記入のルールが ${withoutReason.length} 件ある**: ${withoutReason.join(", ")}`,
  );
  console.log(
    "  `reasons` に「なぜ機械には判定できないのか」を書くこと（`npm run check:a11y-incomplete` が空を許さない）。",
  );
}
