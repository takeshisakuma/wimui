import { test, expect } from "@playwright/test";
import { waitForStoryReady } from "./story-ready";

const url = (id: string) => `/iframe.html?id=${id}&viewMode=story&globals=locale:en`;
const STORY = "components-data-structures-jsonviewer--editable";

// T434: 行の操作ボタン（追加・削除など）を包む `.actions` は opacity 0 で、行のホバーでしか見えなかった。
// キーボードで乗ったボタンは箱ごと見えず（フォーカスの輪も見えない。WCAG 2.4.7）、
// タッチ端末では見えないまま押せた（削除を含む）。

test.describe("JsonViewer row actions are visible when focused (keyboard)", () => {
  test.use({ viewport: { width: 1280, height: 720 } });

  test("the group of the focused action is visible", async ({ page }) => {
    await page.goto(url(STORY));
    await waitForStoryReady(page);

    // 行のホバーで見えてしまわないよう、ポインターを中身から外しておく
    await page.mouse.move(1270, 710);

    let label = "";
    for (let i = 0; i < 30 && !label; i++) {
      await page.keyboard.press("Tab");
      label = await page.evaluate(() => {
        const el = document.activeElement as HTMLElement | null;
        return el?.closest('[class*="_actions_"]') ? (el.getAttribute("aria-label") ?? "action") : "";
      });
    }
    // 対照: 操作ボタンに乗った。乗らなければ何も確かめていない
    expect(label, "reached a row action by Tab").not.toBe("");

    await expect
      .poll(() =>
        page.evaluate(() => {
          const group = (document.activeElement as HTMLElement).closest('[class*="_actions_"]')!;
          return getComputedStyle(group).opacity;
        }),
      )
      .toBe("1");
  });
});

test.describe("JsonViewer row actions are visible on touch devices", () => {
  test.use({ viewport: { width: 390, height: 844 }, hasTouch: true, isMobile: true });

  test("every action group is visible without hovering", async ({ page }) => {
    await page.goto(url(STORY));
    await waitForStoryReady(page);

    const opacities = await page.evaluate(() => ({
      hoverNone: matchMedia("(hover: none) and (pointer: coarse)").matches,
      values: [...document.querySelectorAll('[class*="_actions_"]')].map((g) => getComputedStyle(g).opacity),
    }));

    // 対照: タッチ端末として動いていて、操作ボタンの箱がある
    expect(opacities.hoverNone).toBe(true);
    expect(opacities.values.length).toBeGreaterThan(0);
    expect(opacities.values.filter((v) => v !== "1"), "hidden action groups").toEqual([]);
  });
});
