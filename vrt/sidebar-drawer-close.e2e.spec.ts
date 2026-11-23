import { test, expect, type Page } from "@playwright/test";
import { waitForStoryReady } from "./story-ready";

const url = (id: string) => `/iframe.html?id=${id}&viewMode=story&globals=locale:en`;
const SIDEBAR = url("components-application-shell-sidebar--default");
const APP_SHELL = url("components-application-shell-appshell--with-sidebar");

// T433: 狭い幅の Sidebar のドロワーは、閉じる手段が暗幕を押すことだけで、キーボードでは閉じられず、
// 開いてもフォーカスが中へ移らなかった。Drawer と同じ動きになっていることを、行き先まで名指しで確かめる
const drawer = (page: Page) => page.locator(".wim-sidebar");
const closeInDrawer = (page: Page) => drawer(page).getByRole("button", { name: "Close menu" });
const focusInDrawer = (page: Page) => drawer(page).evaluate((el) => el.contains(document.activeElement));

test.describe("Sidebar drawer with its own close button (390px)", () => {
  test.use({ viewport: { width: 390, height: 844 } });

  const trigger = (page: Page) => page.getByRole("button", { name: "Sidebar Menu" });

  test.beforeEach(async ({ page }) => {
    await page.goto(SIDEBAR);
    await waitForStoryReady(page);
    await trigger(page).focus();
    await page.keyboard.press("Enter");
    await expect(closeInDrawer(page)).toBeFocused();
  });

  test("Tab stays inside, Escape closes and returns to the trigger", async ({ page }) => {
    for (let i = 0; i < 12; i += 1) {
      await page.keyboard.press("Tab");
      expect(await focusInDrawer(page)).toBe(true);
    }
    await page.keyboard.press("Escape");
    await expect(closeInDrawer(page)).toHaveCount(0);
    await expect(trigger(page)).toBeFocused();
  });

  test("the close button closes and returns focus to the trigger", async ({ page }) => {
    await page.keyboard.press("Enter");
    await expect(closeInDrawer(page)).toHaveCount(0);
    await expect(trigger(page)).toBeFocused();
  });
});

test.describe("Sidebar drawer closed from the AppShell header (390px)", () => {
  test.use({ viewport: { width: 390, height: 844 } });

  // 引き金の名前は開くと変わるので、開く前に要素を掴む
  const open = async (page: Page) => {
    await page.goto(APP_SHELL);
    await waitForStoryReady(page);
    const handle = await page.getByRole("button", { name: "Open menu" }).first().elementHandle();
    await handle!.focus();
    await page.keyboard.press("Enter");
    await expect(drawer(page)).toHaveClass(/mobile-open/);
    return handle!;
  };
  const isFocused = (handle: Awaited<ReturnType<typeof open>>) =>
    handle.evaluate((el) => el === document.activeElement);

  test("shows one close control, and Tab cycles only the trigger and the drawer", async ({ page }) => {
    const handle = await open(page);
    await expect(closeInDrawer(page)).toHaveCount(0);
    await expect(page.getByRole("button", { name: "Close menu" })).toHaveCount(1);

    for (let i = 0; i < 12; i += 1) {
      await page.keyboard.press(i % 3 === 2 ? "Shift+Tab" : "Tab");
      expect((await isFocused(handle)) || (await focusInDrawer(page))).toBe(true);
    }
  });

  test("Escape closes and returns focus to the trigger", async ({ page }) => {
    const handle = await open(page);
    await page.keyboard.press("Escape");
    await expect(drawer(page)).not.toHaveClass(/mobile-open/);
    expect(await isFocused(handle)).toBe(true);
  });

  test("the trigger closes the drawer", async ({ page }) => {
    const handle = await open(page);
    await handle.focus();
    await page.keyboard.press("Enter");
    await expect(drawer(page)).not.toHaveClass(/mobile-open/);
    expect(await isFocused(handle)).toBe(true);
  });
});

test.describe("Sidebar at a wide viewport", () => {
  test.use({ viewport: { width: 1280, height: 800 } });

  test("has no drawer close button and does not take focus", async ({ page }) => {
    await page.goto(SIDEBAR);
    await waitForStoryReady(page);
    await expect(closeInDrawer(page)).toHaveCount(0);
    expect(await focusInDrawer(page)).toBe(false);
  });
});
