import { test, expect } from "@playwright/test";
import { waitForStoryReady } from "./story-ready";

const STORY_URL = "/iframe.html?id=components-navigation-elements-anchor--default&viewMode=story&globals=locale:en";

test.describe("Anchor", () => {
  // 現在地の判定と印の計測を描画のあと（effect）でやっていたころは、「現在地のリンクが無い」
  // 「リンクは現在地だが印が無い」という途中の姿が 1 フレームずつ描かれた（実測: 80 回の表示の
  // うち 66 回）。VRT では、印だけが無い絵（差 44 画素）が安定判定を通り抜けてベースラインに
  // 入った（T258）。途中の姿が 1 フレームも描かれないことを、描画のたびに数えて確かめる。
  test("never paints a frame without the active link or without its marker", async ({ page }) => {
    await page.addInitScript(() => {
      const frames = { total: 0, noActive: 0, activeNoMarker: 0 };
      (window as unknown as { __anchorFrames: typeof frames }).__anchorFrames = frames;
      const sample = () => {
        const root = document.querySelector(".wim-anchor");
        if (root) {
          const marker = root.querySelector<HTMLElement>("span[style], span");
          const active = root.querySelector("li > a[href='#part-1']")?.parentElement;
          const isActive = !!active && getComputedStyle(active.querySelector("a")!).fontWeight !== "400";
          const shown = !!marker && marker.style.opacity === "1" && parseFloat(marker.style.height) > 0;
          frames.total += 1;
          if (!isActive) frames.noActive += 1;
          else if (!shown) frames.activeNoMarker += 1;
        }
        requestAnimationFrame(sample);
      };
      requestAnimationFrame(sample);
    });

    const totals = { total: 0, noActive: 0, activeNoMarker: 0 };
    // 途中の姿が出るかどうかは回ごとに違ったので、何度か開く
    for (let i = 0; i < 6; i++) {
      await page.goto(STORY_URL, { waitUntil: "domcontentloaded" });
      await waitForStoryReady(page);
      const frames = await page.evaluate(
        () => (window as unknown as { __anchorFrames: typeof totals }).__anchorFrames,
      );
      totals.total += frames.total;
      totals.noActive += frames.noActive;
      totals.activeNoMarker += frames.activeNoMarker;
    }
    // 0 フレームを数えて緑になるのを防ぐ
    expect(totals.total).toBeGreaterThan(10);
    expect({ noActive: totals.noActive, activeNoMarker: totals.activeNoMarker }).toEqual({
      noActive: 0,
      activeNoMarker: 0,
    });
  });
});
