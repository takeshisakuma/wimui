/**
 * 狭い画面（390px）でページ自体が横スクロールしないことのラチェット。
 *
 * **CI は 1280px でしか撮っていない**（VRT も tap-target も）。狭幅の崩れは
 * 赤が出ないので、T216（`FeatureComparison` の表が潰れる）のような欠陥が
 * ユーザーの指摘で初めて出てくる。#493 で全 1065 ストーリーを測って 22 件見つけ、
 * 13 件を直した。**残り 9 件を凍結し、増えたときだけ落とす。**
 *
 * VRT に 390px のプロファイルを足すとベースラインが倍増するが、この検査は
 * **画像を持たない**（数値の比較だけ）ので凍結するのは ID の一覧だけで済む。
 *
 * ベースラインの更新: `npm run narrow:update`
 */
import { test, expect } from "@playwright/test";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

import { waitForStoryReady } from "./story-ready";
import { measureNarrowOverflowInPage, NARROW_WIDTH, NARROW_HEIGHT } from "./narrow-overflow.js";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const indexPath = path.resolve(__dirname, "../storybook-static/index.json");

if (!fs.existsSync(indexPath)) {
  console.error("Error: storybook-static/index.json not found.");
  console.error("Please run 'npm run build-storybook' before running narrow-overflow tests.");
  process.exit(1);
}

interface StoryEntry {
  id: string;
  title: string;
  name: string;
  type: "story" | "docs";
}

const index = JSON.parse(fs.readFileSync(indexPath, "utf-8"));
const stories = Object.values(index.entries).filter(
  (entry: unknown): entry is StoryEntry => (entry as StoryEntry).type === "story",
);

const baselinePath = path.resolve(__dirname, "narrow-overflow-baseline.json");
const baseline: Record<string, number> = JSON.parse(fs.readFileSync(baselinePath, "utf-8")).known ?? {};

const filter = process.env.FILTER || "";

test.use({ viewport: { width: NARROW_WIDTH, height: NARROW_HEIGHT } });

test.describe(`Narrow viewport horizontal overflow (${NARROW_WIDTH}px)`, () => {
  for (const story of stories) {
    if (filter && !story.title.toLowerCase().includes(filter.toLowerCase())) continue;

    test(`${story.title} › ${story.name}`, async ({ page }) => {
      await page.goto(`/iframe.html?id=${story.id}&viewMode=story`);
      await waitForStoryReady(page);

      const { declared, actual, culprits } = await page.evaluate(measureNarrowOverflowInPage);
      const known = Object.prototype.hasOwnProperty.call(baseline, story.id);

      if (known) {
        // 凍結済み。**直ったら教える**（落とさない ── 直した PR を赤くしない）。
        if (declared === 0) {
          console.log(
            `[prunable] ${story.id} はもう横スクロールしない。narrow-overflow-baseline.json から外せる（npm run narrow:update）`,
          );
        }
        return;
      }

      const where = culprits
        .map((c) => `${c.tag}.${c.cls} (right=${c.right} w=${c.width})`)
        .join(" / ");
      expect(
        declared,
        `${story.id} は ${NARROW_WIDTH}px でページが横スクロールする（宣言 ${declared}px / 実測 ${actual}px）。` +
          `\nはみ出しているもの: ${where || "(切っている祖先の中にあり、要素としては特定できない)"}` +
          `\n固定幅のデモ箱なら min(Npx, 100vw - 2rem)、折り返せない行なら wrap、` +
          `\n表なら狭幅モード（DESIGN.md）。直せない事情があるなら npm run narrow:update で凍結する。`,
      ).toBe(0);
    });
  }
});
