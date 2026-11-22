import { test, expect } from "@playwright/test";
import { waitForStoryReady } from "./story-ready";

const url = (id: string) => `/iframe.html?id=${id}&viewMode=story&globals=locale:en`;
const STORY = "components-basic-inputs-inlineedit--default";

// T435: InlineEdit の鉛筆のアイコン（編集できる場所だと分かる手がかり）は、ホバーでしか見えなかった。
// キーボードで乗っても出ず（フォーカスはアイコンの箱ではなく外側の preview に乗るのに、箱の
// :focus-within で拾おうとしていた）、タッチ端末では文字をタップした瞬間に編集へ移るので一度も出なかった。

test.describe("InlineEdit shows the edit icon when focused (keyboard)", () => {
  test.use({ viewport: { width: 1280, height: 720 } });

  test("the icon is visible while the preview has keyboard focus", async ({ page }) => {
    await page.goto(url(STORY));
    await waitForStoryReady(page);
    // ホバーで見えてしまわないよう、ポインターを中身から外しておく
    await page.mouse.move(1270, 710);

    let found = false;
    for (let i = 0; i < 10 && !found; i++) {
      await page.keyboard.press("Tab");
      found = await page.evaluate(() => !!document.activeElement?.querySelector('[class*="_editIconWrapper_"]'));
    }
    // 対照: 編集できる値に乗った
    expect(found, "reached an InlineEdit preview by Tab").toBe(true);

    await expect
      .poll(() =>
        page.evaluate(
          () => getComputedStyle(document.activeElement!.querySelector('[class*="_editIconWrapper_"]')!).opacity,
        ),
      )
      .toBe("1");
  });
});

test.describe("InlineEdit shows the edit icon on touch devices", () => {
  test.use({ viewport: { width: 390, height: 844 }, hasTouch: true, isMobile: true });

  test("every edit icon is visible without hovering", async ({ page }) => {
    await page.goto(url(STORY));
    await waitForStoryReady(page);

    const state = await page.evaluate(() => ({
      touch: matchMedia("(hover: none) and (pointer: coarse)").matches,
      values: [...document.querySelectorAll('[class*="_editIconWrapper_"]')].map((w) => getComputedStyle(w).opacity),
    }));

    // 対照: タッチ端末として動いていて、アイコンがある
    expect(state.touch).toBe(true);
    expect(state.values.length).toBeGreaterThan(0);
    expect(state.values.filter((v) => v !== "1"), "hidden edit icons").toEqual([]);
  });
});
