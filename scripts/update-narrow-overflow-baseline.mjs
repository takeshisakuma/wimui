#!/usr/bin/env node
/**
 * `vrt/narrow-overflow-baseline.json` を今の実測で作り直す。
 *
 * **測る関数は spec と共有している**（`vrt/narrow-overflow.ts`）ので、
 * 「凍結した正解」と「CI が見る値」が別々に育つことはない。
 *
 * Usage:
 *   npm run build-storybook
 *   node scripts/update-narrow-overflow-baseline.mjs
 */
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import { spawn } from "child_process";
import { chromium } from "playwright";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, "..");
const OUT = path.join(root, "vrt", "narrow-overflow-baseline.json");
const PORT = 6099;

// **spec と同じ関数を import する。** 写し取ると片方だけ直ったときにずれる。
import { measureNarrowOverflowInPage } from "../vrt/narrow-overflow.js";

const indexPath = path.join(root, "storybook-static", "index.json");
if (!fs.existsSync(indexPath)) {
  console.error("storybook-static/index.json が無い。先に `npm run build-storybook`。");
  process.exit(1);
}
const ids = Object.values(JSON.parse(fs.readFileSync(indexPath, "utf8")).entries)
  .filter((e) => e.type === "story")
  .map((e) => e.id);

const srv = spawn("npx", ["http-server@14", "storybook-static", "-p", String(PORT), "-c-1", "--silent"], { shell: true, stdio: "ignore", cwd: root });
for (let i = 0; i < 60; i++) {
  try { const r = await fetch(`http://localhost:${PORT}/index.json`); if (r.ok) break; } catch { /* まだ */ }
  await new Promise((r) => setTimeout(r, 500));
}

const browser = await chromium.launch();
const known = {};
let errors = 0;
const queue = [...ids];
await Promise.all(
  Array.from({ length: 4 }, async () => {
    const ctx = await browser.newContext({ viewport: { width: 390, height: 844 } });
    const page = await ctx.newPage();
    while (queue.length) {
      const id = queue.shift();
      try {
        await page.goto(`http://localhost:${PORT}/iframe.html?id=${id}&viewMode=story`, { waitUntil: "load", timeout: 20000 });
        await page.waitForSelector("#storybook-root > *", { timeout: 10000 }).catch(() => {});
        await page.waitForTimeout(200);
        const r = await page.evaluate(measureNarrowOverflowInPage);
        if (r.declared > 0) known[id] = r.declared;
      } catch {
        errors++;
        console.error(`  読み込めなかった: ${id}`);
      }
    }
    await ctx.close();
  }),
);
await browser.close();
srv.kill();

// **「0 件」はエラー件数とセットで読む**（T213 の教訓）。
if (errors > 0) {
  console.error(`\n✗ ${errors} 件が読み込めなかった。この状態で凍結すると「落ちなかった」と混同する。`);
  process.exit(1);
}

const sorted = Object.fromEntries(Object.keys(known).sort().map((k) => [k, known[k]]));
fs.writeFileSync(
  OUT,
  JSON.stringify(
    {
      comment:
        "390px でページ自体が横スクロールするストーリー（値は documentElement.scrollWidth - clientWidth）。" +
        "増やさないための凍結。更新は `npm run narrow:update`（先に build-storybook）。",
      known: sorted,
    },
    null,
    2,
  ) + "\n",
);
console.log(`\n✓ ${ids.length} ストーリーを測って ${Object.keys(sorted).length} 件を凍結した（読み込みエラー 0）。`);
