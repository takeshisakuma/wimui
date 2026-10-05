import { test, expect, type Page } from "@playwright/test";
import { waitForStoryReady } from "./story-ready";

const url = (id: string, density: string) =>
  `/iframe.html?id=${id}&viewMode=story&globals=locale:en;density:${density}`;

/** 幅と高さ（px）。見えていない要素は数えない。 */
const boxes = (page: Page, selector: string) =>
  page.evaluate(
    (sel) =>
      Array.from(document.querySelectorAll(`#storybook-root ${sel}`))
        .map((el) => el.getBoundingClientRect())
        .filter((r) => r.height > 0)
        .map((r) => ({ w: Math.round(r.width * 10) / 10, h: Math.round(r.height * 10) / 10 })),
    selector,
  );

/** ボタンの sm / md / lg の高さ（高さの段）。 */
const ladder = async (page: Page, density: string) => {
  await page.goto(url("components-buttons-iconbutton--sizes", density));
  await waitForStoryReady(page);
  const found = (await boxes(page, ".wim-icon-button")).map((box) => box.h);
  expect(found).toHaveLength(3);
  return found;
};

// T313: ThemeToggle は `size` を変えても 24px のままだった（指定は 12 / 16 / 22.4px で、当たり判定の
// 下限 24px に 3 つとも切り上げられていた）。ボタンと同じ高さの段に乗せる。
for (const density of ["comfortable", "compact"]) {
  test.describe(`ThemeToggle sizes (${density})`, () => {
    test("the icon variant is a square on the button height ladder", async ({ page }) => {
      const expected = await ladder(page, density);
      await page.goto(url("components-buttons-themetoggle--sizes", density));
      await waitForStoryReady(page);
      expect(await boxes(page, ".wim-theme-toggle > button")).toEqual(expected.map((h) => ({ w: h, h })));
    });

    test("the segmented variant is as tall as a button of the same size", async ({ page }) => {
      const expected = await ladder(page, density);
      await page.goto(url("components-buttons-themetoggle--segmented-sizes", density));
      await waitForStoryReady(page);
      expect((await boxes(page, ".wim-theme-toggle[role='group']")).map((box) => box.h)).toEqual(expected);
    });

    test("the icon grows with the size", async ({ page }) => {
      await page.goto(url("components-buttons-themetoggle--sizes", density));
      await waitForStoryReady(page);
      const icons = (await boxes(page, ".wim-theme-toggle > button svg")).map((box) => box.h);
      expect(icons).toHaveLength(3);
      expect(icons[0]).toBeLessThan(icons[1]);
      expect(icons[1]).toBeLessThan(icons[2]);
    });
  });
}
