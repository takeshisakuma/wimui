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

  // T331: 印の位置と大きさは、現在地が変わったときにしか測り直していなかった。現在地が同じままでも、
  // リンクの大きさは変わる（フォントの読み込み・表示言語の切り替え・入れ物の幅）。そのたびに、印が
  // リンクからずれたまま残っていた（実測: リンクの幅 152px に対して、印は 87px のまま）。
  const markerOffset = (page: import("@playwright/test").Page) =>
    page.evaluate(() => {
      const root = document.querySelector(".wim-anchor")!;
      const active = root.querySelector('[aria-current="location"]');
      const marker = [...root.querySelectorAll<HTMLElement>("span")].find((el) => el.style.opacity === "1");
      if (!active || !marker) return null;
      const a = active.getBoundingClientRect();
      const m = marker.getBoundingClientRect();
      const horizontal = a.width > 0 && Math.abs(m.width - a.width) < Math.abs(m.height - a.height);
      // 印は、縦並びではリンクと同じ高さ・同じ上端、横並びでは同じ幅・同じ左端に置かれる
      return {
        size: Math.round(horizontal ? a.width : a.height),
        off: horizontal
          ? Math.abs(m.left - a.left) + Math.abs(m.width - a.width)
          : Math.abs(m.top - a.top) + Math.abs(m.height - a.height),
      };
    });

  test("the marker follows the active link when the links change size", async ({ page }) => {
    await page.goto(STORY_URL, { waitUntil: "domcontentloaded" });
    await waitForStoryReady(page);
    await expect.poll(async () => (await markerOffset(page))?.off ?? null).toBeLessThanOrEqual(1);
    const before = await markerOffset(page);

    // 現在地は変えずに、リンクの文字だけを大きくする（フォントの差し替えや、長い訳文と同じ種類の変化）
    await page.addStyleTag({ content: ".wim-anchor a { font-size: 28px !important; line-height: 2 !important; }" });
    // 対照: リンクの大きさが実際に変わっている。変わっていなければ、下の検査は何も確かめない
    await expect.poll(async () => (await markerOffset(page))?.size ?? 0).not.toBe(before!.size);
    await expect.poll(async () => (await markerOffset(page))?.off ?? null).toBeLessThanOrEqual(1);
  });

});
