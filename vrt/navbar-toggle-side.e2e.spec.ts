import { test, expect, type Page } from "@playwright/test";
import { waitForStoryReady } from "./story-ready";

const url = (id: string) => `/iframe.html?id=${id}&viewMode=story&globals=locale:en`;

// T436: `Navbar.Menu` を左から出しても、引き金は右のままだった（composition.md の必須ルール 16）
const boxes = async (page: Page) => {
  const toggle = await page.getByRole("button", { name: "Open menu" }).boundingBox();
  const brand = await page.locator(".wim-navbar span").first().boundingBox();
  return { toggle: toggle!, brand: brand! };
};

test.describe("Navbar.Toggle follows the side of the menu (390px)", () => {
  test.use({ viewport: { width: 390, height: 844 } });

  test("position=left: the trigger is at the left end, next to the brand", async ({ page }) => {
    await page.goto(url("components-application-shell-navbar--menu-from-left"));
    await waitForStoryReady(page);
    const { toggle, brand } = await boxes(page);
    expect(toggle.x).toBeLessThan(brand.x);
    expect(toggle.x).toBeLessThan(40);
    // 2 つの間が space-between で開かない
    expect(brand.x - (toggle.x + toggle.width)).toBeLessThan(24);
  });

  test("position=left: the trigger stays pressable while open and closes the menu", async ({ page }) => {
    await page.goto(url("components-application-shell-navbar--menu-from-left"));
    await waitForStoryReady(page);
    // 名前は開くと変わるので、開く前に要素を掴む
    const handle = (await page.getByRole("button", { name: "Open menu" }).elementHandle())!;
    await handle.click();
    await expect(page.getByRole("dialog")).toBeVisible();
    await expect
      .poll(() =>
        handle.evaluate((el) => {
          const r = el.getBoundingClientRect();
          return el.contains(document.elementFromPoint(r.left + r.width / 2, r.top + r.height / 2));
        }),
      )
      .toBe(true);
    await handle.click();
    await expect(page.getByRole("dialog")).toHaveCount(0);
  });

  test("the default menu keeps the trigger on the right", async ({ page }) => {
    await page.goto(url("components-application-shell-navbar--with-mobile-menu"));
    await waitForStoryReady(page);
    const { toggle, brand } = await boxes(page);
    expect(toggle.x).toBeGreaterThan(brand.x + brand.width);
    expect(toggle.x + toggle.width).toBeGreaterThan(340);
  });
});
