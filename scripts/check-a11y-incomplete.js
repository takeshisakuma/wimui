#!/usr/bin/env node
/**
 * incomplete ラチェット（`vrt/a11y-incomplete.json`）の**構造**を検査する。
 *
 * スペック側（`vrt/a11y.spec.ts`）は「そのストーリーで見えるもの」しか照合できない。
 * だから **消えたストーリーの許可**（孤児）と **理由の書かれていないルール**は、
 * どのシャードにも当たらないまま永久に残る ── VRT の置き去りベースライン（T204）と
 * 同じ穴なので、同じやり方で塞ぐ。
 *
 *   node scripts/check-a11y-incomplete.js
 *
 * ローカルの `storybook-static/` は古いことがある（T106 の教訓: ストーリーを消した
 * 直後のローカル緑は嘘）。CI は a11y ワークフローのビルド直後に走らせる。
 */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, "..");
const BASELINE_PATH = path.join(root, "vrt", "a11y-incomplete.json");
const INDEX_PATH = path.join(root, "storybook-static", "index.json");
const THEMES = ["light", "dark"];

const problems = [];

if (!fs.existsSync(BASELINE_PATH)) {
  console.error("[a11y-incomplete] vrt/a11y-incomplete.json が無い");
  process.exit(1);
}
const baseline = JSON.parse(fs.readFileSync(BASELINE_PATH, "utf-8"));
const stories = baseline.stories ?? {};
const reasons = baseline.reasons ?? {};
const unstable = baseline.unstable ?? {};
const unstableStories = baseline.unstableStories ?? {};

// 1. 形（ここが崩れるとスペック側は黙って全部を「許可なし」と読む）
for (const [id, byTheme] of Object.entries(stories)) {
  if (typeof byTheme !== "object" || byTheme === null || Array.isArray(byTheme)) {
    problems.push(`${id}: テーマごとのオブジェクトになっていない`);
    continue;
  }
  for (const [theme, rules] of Object.entries(byTheme)) {
    if (!THEMES.includes(theme)) problems.push(`${id}: 知らないテーマ "${theme}"`);
    if (!Array.isArray(rules) || rules.some((r) => typeof r !== "string")) {
      problems.push(`${id} (${theme}): ルールの配列になっていない`);
      continue;
    }
    if (rules.length === 0) problems.push(`${id} (${theme}): 空の許可（消すこと）`);
    const sorted = [...rules].sort();
    if (JSON.stringify(sorted) !== JSON.stringify(rules)) {
      problems.push(`${id} (${theme}): 並びがソートされていない（差分が読めなくなる）`);
    }
    if (new Set(rules).size !== rules.length) {
      problems.push(`${id} (${theme}): 同じルールが重複している`);
    }
  }
}

// 2. 理由の無い許可を作らせない（「見たうえで許す」が要件。T205）
const rulesInUse = new Set(
  Object.values(stories).flatMap((byTheme) => Object.values(byTheme).flat()),
);
for (const rule of [...rulesInUse].sort()) {
  const why = reasons[rule];
  if (!why || String(why).trim().length < 10) {
    problems.push(`ルール "${rule}" の理由が書かれていない（reasons に追記する）`);
  }
}
for (const rule of Object.keys(reasons)) {
  if (!rulesInUse.has(rule)) {
    problems.push(`ルール "${rule}" の理由だけが残っている（許可はもう無い。消すこと）`);
  }
}

// 3. 「出たり出なかったり」の免除も、理由が要るし、置き去りにさせない。
//    ここが緩むと**消えた incomplete を一切見なくなる**（ラチェットの片側が死ぬ）。
for (const [rule, why] of Object.entries(unstable)) {
  if (!why || String(why).trim().length < 10) {
    problems.push(`unstable の "${rule}" に理由が無い（何がどう揺れるのか書く）`);
  }
  if (!rulesInUse.has(rule)) {
    problems.push(`unstable の "${rule}" は許可に無い（消すこと）`);
  }
}

for (const [id, why] of Object.entries(unstableStories)) {
  if (!why || String(why).trim().length < 10) {
    problems.push(`unstableStories の "${id}" に理由が無い（何がどう揺れるのか書く）`);
  }
  if (!stories[id]) {
    problems.push(`unstableStories の "${id}" は許可を 1 つも持っていない（消すこと）`);
  }
}

// 4. 消えたストーリーの許可（孤児）
if (fs.existsSync(INDEX_PATH)) {
  const index = JSON.parse(fs.readFileSync(INDEX_PATH, "utf-8"));
  const known = new Set(
    Object.values(index.entries)
      .filter((e) => e.type === "story")
      .map((e) => e.id),
  );
  for (const id of Object.keys(stories)) {
    if (!known.has(id)) {
      problems.push(`${id}: このストーリーはもう存在しない（許可が置き去り）`);
    }
  }
  for (const id of Object.keys(unstableStories)) {
    if (!known.has(id)) {
      problems.push(`${id}: このストーリーはもう存在しない（unstableStories が置き去り）`);
    }
  }
} else {
  console.log(
    "[a11y-incomplete] storybook-static/index.json が無いので孤児の検査は省略した（形と理由だけ見た）",
  );
}

if (problems.length > 0) {
  console.error(`\n[a11y-incomplete] ${problems.length} 件\n`);
  for (const p of problems) console.error(`  - ${p}`);
  console.error(
    "\n  直し方: 実測から作り直す（`A11Y_INCOMPLETE_UPDATE=1 npx playwright test vrt/a11y.spec.ts` → `npm run a11y:incomplete:update`）か、理由を書く。\n",
  );
  process.exit(1);
}

const combos = Object.values(stories).reduce(
  (n, byTheme) => n + Object.values(byTheme).flat().length,
  0,
);
console.log(
  `[a11y-incomplete] OK — ${combos} 通り / ${rulesInUse.size} ルール / ${Object.keys(stories).length} ストーリー（すべて理由つき）`,
);
