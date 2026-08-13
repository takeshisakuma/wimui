/**
 * グラフの辺が地に対して 3:1 を満たすか（T159）。
 *
 * WCAG 1.4.11 は「内容の理解に必要な図形」に 3:1 を要求する。ノードグラフの辺は
 * まさにそれで、辺が読めなければグラフは絵でしかない。だが**どのガードも見ていなかった**:
 *
 *   - axe は SVG の `stroke` 対 背景を評価しない（a11y スイートは緑のままだった）
 *   - `check:contrast` / `check:contrast:scss` は**テキスト色の組み合わせ**が対象
 *   - `NodeGraph` に至っては **SCSS に色の記述が無かった**（React Flow 既定の
 *     `#b1b1b7` がそのまま出ていた）ので、SCSS を走査する種類のガードでは
 *     原理的に見つからない
 *
 * 実測（修正前）: InteractiveGraph light 1.25 / dark 2.25、NodeGraph light 2.13 /
 * dark 5.41（dark だけ偶然通っていた）。4 通り中 3 通りが未達。
 *
 * このガードは 2 つを見る:
 *   ① React Flow を使うコンポーネントが、辺の色を `--wim-comp-graph-edge` で
 *      **明示している**こと（上流の既定に任せない ── 任せた結果が上の 2.13:1）
 *   ② `--wim-comp-graph-edge` の値が、**グラフが載りうるすべての地**
 *      （`surface` / `surface-app` × light / dark）に対して 3:1 以上であること
 *
 * ②があるので「トークンを薄い色に変える」でも鳴る。①があるので「新しいグラフ
 * コンポーネントが辺を塗り忘れる」でも鳴る。
 *
 * Usage:
 *   node scripts/check-graph-edge-contrast.js
 */

import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import { globSync } from "glob";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, "..");

const MIN_RATIO = 3; // WCAG 1.4.11 (non-text contrast)
const EDGE_TOKEN = "--wim-comp-graph-edge";
/** グラフが載りうる面。どちらの上でも読めなければならない。 */
const SURFACES = ["--wim-color-surface", "--wim-color-surface-app"];

/* ── 色の計算 ── */

function toRgb(hex) {
  let h = hex.replace("#", "").trim();
  if (h.length === 3) h = h.split("").map((c) => c + c).join("");
  return [0, 2, 4].map((i) => parseInt(h.slice(i, i + 2), 16));
}

function luminance(rgb) {
  const f = (v) => {
    const s = v / 255;
    return s <= 0.03928 ? s / 12.92 : Math.pow((s + 0.055) / 1.055, 2.4);
  };
  const [r, g, b] = rgb.map(f);
  return 0.2126 * r + 0.7152 * g + 0.0722 * b;
}

function contrast(a, b) {
  const x = luminance(toRgb(a));
  const y = luminance(toRgb(b));
  return (Math.max(x, y) + 0.05) / (Math.min(x, y) + 0.05);
}

/* ── ① 辺の色を明示しているか ── */

const graphScss = globSync("src/components/**/*.module.scss", { posix: true }).filter((f) =>
  fs.readFileSync(f, "utf8").includes("react-flow__"),
);

const failures = [];

if (graphScss.length === 0) {
  failures.push("React Flow を使う SCSS が 1 つも見つかりません（走査対象の指定が壊れている可能性）。");
}

for (const file of graphScss) {
  const src = fs.readFileSync(file, "utf8");
  const rule = /react-flow__edge-path[^{]*\{([^}]*)\}/.exec(src);
  if (!rule) {
    failures.push(
      `${file}: React Flow を使っているのに \`.react-flow__edge-path\` の規則がありません。` +
        `\n     上流の既定色（#b1b1b7）がそのまま出ます ── 白地で 2.13:1 です。` +
        `\n     \`stroke: var(${EDGE_TOKEN});\` を置いてください。`,
    );
    continue;
  }
  if (!rule[1].includes(`var(${EDGE_TOKEN})`)) {
    const stroke = /stroke:\s*([^;]+);/.exec(rule[1]);
    failures.push(
      `${file}: 辺の色が \`${EDGE_TOKEN}\` ではありません（現在: ${stroke ? stroke[1].trim() : "指定なし"}）。` +
        `\n     面を仕切る線用のトークン（border 系）は 3:1 に届きません。`,
    );
  }
}

/* ── ② トークンの値が 3:1 を満たすか ── */

/** `_component-colors.scss` / 生成トークンから、テーマごとの値を読む。 */
function readVar(file, name) {
  const src = fs.readFileSync(path.join(root, file), "utf8");
  const hits = [...src.matchAll(new RegExp(`${name}:\\s*(#[0-9a-fA-F]{3,8})\\s*;`, "g"))].map(
    (m) => m[1],
  );
  return hits;
}

const edgeValues = readVar("src/styles/_component-colors.scss", EDGE_TOKEN);
// :root / prefers-color-scheme / [data-theme="dark"] の 3 ブロックに置く規約なので、
// 1 つ目が light、以降が dark。ブロックが増減したら気づけるよう本数も見る。
if (edgeValues.length !== 3) {
  failures.push(
    `src/styles/_component-colors.scss: ${EDGE_TOKEN} の宣言が ${edgeValues.length} 件です（light / prefers-dark / [data-theme=dark] の 3 件が要ります）。`,
  );
}

const themes = [
  { name: "light", edge: edgeValues[0], tokens: "src/tokens/generated/_css-vars.scss" },
  { name: "dark", edge: edgeValues[1], tokens: "src/tokens/generated/_css-vars-dark.scss" },
];

const measured = [];
for (const theme of themes) {
  if (!theme.edge) continue;
  for (const surface of SURFACES) {
    const bg = readVar(theme.tokens, surface)[0];
    if (!bg) {
      failures.push(`${theme.tokens}: ${surface} の値を読めませんでした。`);
      continue;
    }
    const ratio = contrast(theme.edge, bg);
    measured.push({ theme: theme.name, surface, edge: theme.edge, bg, ratio });
    if (ratio < MIN_RATIO) {
      failures.push(
        `${theme.name} / ${surface}: 辺 ${theme.edge} が地 ${bg} に対して ${ratio.toFixed(2)}:1（${MIN_RATIO}:1 未満）。`,
      );
    }
  }
}

/* ── 結果 ── */

console.log("--- check:graph-edge (グラフの辺が地に対して 3:1 を満たすか) ---\n");
console.log(`React Flow を使う SCSS: ${graphScss.length} 件`);
for (const f of graphScss) console.log(`  - ${f}`);
console.log("");
for (const m of measured) {
  console.log(
    `  ${m.theme.padEnd(6)} ${m.surface.padEnd(24)} 辺 ${m.edge} / 地 ${m.bg}  ${m.ratio.toFixed(2)}:1 ${m.ratio >= MIN_RATIO ? "✓" : "✗"}`,
  );
}

if (failures.length) {
  console.error(`\n❌ グラフの辺が読めない箇所が ${failures.length} 件あります。\n`);
  for (const f of failures) console.error(`   - ${f}`);
  console.error(
    "\n   WCAG 1.4.11 は「内容の理解に必要な図形」に 3:1 を要求します。辺が読めなければ" +
      "\n   グラフは絵でしかありません。axe は SVG の stroke を評価しないので、ここで止めます。\n",
  );
  process.exit(1);
}

console.log("\n✓ すべての地で 3:1 を満たしています。");
process.exit(0);
