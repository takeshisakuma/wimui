#!/usr/bin/env node
/**
 * Guard: 鏡像の対になっているべきアイコンが、本当に鏡像か（T79）。
 *
 * 2026-08-05 に「名前と形が一致していない」アイコンが 2 件出た:
 *   - `skip-forward` … 右向きの矢印をどこにも持っていなかった。矢じりのつもりの
 *     短い折れ線が円の外に浮いているだけで、`skip-back` の鏡像になっていなかった。
 *   - `hourglass` … 中身が Feather の `inbox`（受け皿）だった。`AgentStatus` の
 *     waiting で毎日描画されていたのに、誰も気付いていなかった。
 *
 * **どちらも他のどの仕組みにも引っかからない。** `check:icons` は契約
 * （24×24・線幅 2・線画）を満たしているので緑、VRT は壊れた形が毎回同じように
 * 描かれるので緑（T43 の「ズレたまま安定」と同型）、a11y はアイコンが
 * `aria-hidden` なので緑。**「規格に合っているか」と「名前どおりに読めるか」は
 * 別の問い**で、後者を誰も検査していなかった。
 *
 * ここで見るのはそのうち機械で決着する部分 ── **対になっているべきものが対か**。
 * 描画して片方を反転し、重なり（IoU）を測る。実測での分離は明確だった:
 *
 *   真の鏡像   chevron-left/right, arrow-left/right, skip-back/forward,
 *              chevron-up/down, arrow-up/down … いずれも **1.000**
 *   対でない   log-in/log-out 0.653, eye/eye-off 0.639, play/pause 0.525,
 *              thumb-up/down 0.386, maximize/minimize 0.196
 *
 * 閾値 0.98 はこの分布から決めた（アンチエイリアスの揺れは通し、形の違いは通さない）。
 * **対でないものを PAIRS に入れないこと** — `log-in` / `log-out` は矢印の向きだけが
 * 変わって扉は動かないし、`thumb-up` / `thumb-down` は 180 度回転であって反転ではない。
 *
 * ブラウザが要るので `audit:lib` には入れていない（Lint ワークフローには
 * Playwright のブラウザが無い）。a11y ワークフローに相乗りしている。
 *
 * Usage: node scripts/check-icon-mirrors.js
 */
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import { chromium } from "playwright";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, "..");
const ICON_DIR = path.join(root, "src", "icon");

/** [A, B, 反転軸] — B を反転すると A に重なるべき対。 */
const PAIRS = [
  ["chevron-left", "chevron-right", "x"],
  ["arrow-left", "arrow-right", "x"],
  ["skip-back", "skip-forward", "x"],
  ["chevron-up", "chevron-down", "y"],
  ["arrow-up", "arrow-down", "y"],
];

const THRESHOLD = 0.98;

const read = (name) => {
  const file = path.join(ICON_DIR, `${name}.svg`);
  if (!fs.existsSync(file)) return null;
  return fs.readFileSync(file, "utf8").replace(/<!--[\s\S]*?-->/g, "");
};

const missing = PAIRS.flatMap(([a, b]) => [a, b]).filter((n) => !read(n));
if (missing.length) {
  console.error(`✗ PAIRS に書かれているのに存在しないアイコン: ${missing.join(", ")}`);
  console.error("  改名したなら PAIRS も直してください。");
  process.exit(1);
}

let browser;
try {
  browser = await chromium.launch();
} catch (e) {
  console.error("✗ Chromium を起動できませんでした（`npx playwright install chromium`）。");
  console.error(`  ${e.message.split("\n")[0]}`);
  process.exit(1);
}

const page = await browser.newPage();
await page.goto("about:blank");

const results = await page.evaluate(async (pairs) => {
  const SIZE = 128;
  const raster = async (src, flip) => {
    const url = URL.createObjectURL(new Blob([src], { type: "image/svg+xml" }));
    const img = new Image();
    img.src = url;
    await img.decode();
    const c = document.createElement("canvas");
    c.width = SIZE;
    c.height = SIZE;
    const ctx = c.getContext("2d");
    ctx.clearRect(0, 0, SIZE, SIZE);
    if (flip === "x") { ctx.translate(SIZE, 0); ctx.scale(-1, 1); }
    if (flip === "y") { ctx.translate(0, SIZE); ctx.scale(1, -1); }
    ctx.drawImage(img, 0, 0, SIZE, SIZE);
    URL.revokeObjectURL(url);
    const d = ctx.getImageData(0, 0, SIZE, SIZE).data;
    const bits = new Uint8Array(SIZE * SIZE);
    for (let i = 0; i < bits.length; i++) bits[i] = d[i * 4 + 3] > 40 ? 1 : 0;
    return bits;
  };
  const out = [];
  for (const { a, b, axis, srcA, srcB } of pairs) {
    const A = await raster(srcA, null);
    const B = await raster(srcB, axis);
    let inter = 0;
    let union = 0;
    for (let i = 0; i < A.length; i++) {
      if (A[i] || B[i]) union += 1;
      if (A[i] && B[i]) inter += 1;
    }
    out.push({ a, b, axis, iou: union ? inter / union : 1 });
  }
  return out;
}, PAIRS.map(([a, b, axis]) => ({ a, b, axis, srcA: read(a), srcB: read(b) })));

await browser.close();

console.log("--- check:icons:mirror（対になっているべきアイコンが対か。T79）---\n");
const bad = [];
for (const r of results) {
  const ok = r.iou >= THRESHOLD;
  if (!ok) bad.push(r);
  console.log(`${ok ? "✓" : "✗"} ${(`${r.a} ⇔ ${r.b}`).padEnd(34)} ${r.axis} 反転で重なり ${r.iou.toFixed(3)}`);
}

if (bad.length) {
  console.error(`\n✗ 鏡像になっていない対が ${bad.length} 件（閾値 ${THRESHOLD}）:`);
  for (const r of bad) console.error(`  - ${r.a} ⇔ ${r.b}: ${r.iou.toFixed(3)}`);
  console.error(
    "\n  片方が名前どおりの形になっていない可能性があります。**契約（線幅・寸法）は\n" +
      "  満たしていても、形が名前と合っているかは別の問い**で、VRT も a11y も\n" +
      "  そこは見ません（壊れた形が毎回同じように描かれ、アイコンは aria-hidden）。\n" +
      "  意図して対でなくしたのなら PAIRS から外し、理由を書いてください。",
  );
  process.exit(1);
}

console.log(`\n✓ ${results.length} 対とも鏡像です。`);
