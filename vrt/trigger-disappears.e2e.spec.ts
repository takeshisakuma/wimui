import { test, expect, type Page } from "@playwright/test";

/**
 * T412: 開いたまま引き金が見えなくなったら、面を閉じること。
 *
 * 以前は、引き金を `display: none` にすると、Popover と Dropdown の面が引き金から離れて画面の左上に
 * 浮いたまま残った（画面幅で引き金を隠すツールバーや、タブを切り替えて引き金が消える画面で起きる）。
 * 引き金の大きさが変わっただけ（見えている）のときは、閉じてはいけない。
 */
const CASES = [
  {
    name: "Popover",
    url: "/iframe.html?id=components-overlays-popover--default&viewMode=story&globals=locale:en",
    panel: '[role="dialog"]',
  },
  {
    name: "Dropdown",
    url: "/iframe.html?id=components-overlays-dropdown--basic&viewMode=story&globals=locale:en",
    panel: '[role="menu"]',
  },
];

const trigger = (page: Page) => page.locator("#storybook-root button").first();

for (const c of CASES) {
  test.describe(`${c.name}: the trigger disappears while open`, () => {
    test.beforeEach(async ({ page }) => {
      await page.goto(c.url);
      await page.waitForLoadState("networkidle");
      await trigger(page).click();
      await expect(page.locator(c.panel).first()).toBeVisible();
    });

    test("closes the panel when the trigger is hidden", async ({ page }) => {
      await trigger(page).evaluate((el) => {
        (el as HTMLElement).style.display = "none";
      });
      await expect(page.locator(c.panel)).toHaveCount(0);
    });

    test("keeps the panel open when the trigger only changes size", async ({ page }) => {
      await trigger(page).evaluate((el) => {
        (el as HTMLElement).style.minWidth = "240px";
      });
      await page.waitForTimeout(500);
      await expect(page.locator(c.panel).first()).toBeVisible();
    });
  });
}
