import { test, expect, type Page } from "@playwright/test";
import { waitForStoryReady } from "./story-ready";

const URL = "/iframe.html?id=components-application-shell-appshell--with-sidebar&viewMode=story&globals=locale:en";

// T433: 狭い幅の Sidebar のドロワーは、閉じる手段が暗幕を押すことだけで、キーボードでは閉じられず、
// 開いてもフォーカスが中へ移らなかった。Drawer と同じ動きになっていることを、行き先まで名指しで確かめる
const drawer = (page: Page) => page.locator(".wim-sidebar");
const closeInDrawer = (page: Page) => drawer(page).getByRole("button", { name: "Close menu" });

test.describe("Sidebar drawer: closing from the keyboard (390px)", () => {
  test.use({ viewport: { width: 390, height: 844 } });

  test.beforeEach(async ({ page }) => {
    await page.goto(URL);
    await waitForStoryReady(page);
  });

  const openFromKeyboard = async (page: Page) => {
    const trigger = page.getByRole("button", { name: "Open menu" }).first();
    await trigger.focus();
    await page.keyboard.press("Enter");
    await expect(closeInDrawer(page)).toBeFocused();
  };

  test("opening moves focus in, Tab stays inside, Escape closes and returns to the trigger", async ({ page }) => {
    await openFromKeyboard(page);

    for (let i = 0; i < 12; i += 1) {
      await page.keyboard.press("Tab");
      expect(await drawer(page).evaluate((el) => el.contains(document.activeElement))).toBe(true);
    }

    await page.keyboard.press("Escape");
    await expect(closeInDrawer(page)).toHaveCount(0);
    await expect(page.getByRole("button", { name: "Open menu" }).first()).toBeFocused();
  });

  test("the close button closes and returns focus to the trigger", async ({ page }) => {
    await openFromKeyboard(page);
    await page.keyboard.press("Enter");
    await expect(closeInDrawer(page)).toHaveCount(0);
    await expect(page.getByRole("button", { name: "Open menu" }).first()).toBeFocused();
  });
});

test.describe("Sidebar at a wide viewport", () => {
  test.use({ viewport: { width: 1280, height: 800 } });

  test("has no drawer close button and does not take focus", async ({ page }) => {
    await page.goto(URL);
    await waitForStoryReady(page);
    await expect(closeInDrawer(page)).toHaveCount(0);
    expect(await drawer(page).evaluate((el) => el.contains(document.activeElement))).toBe(false);
  });
});
