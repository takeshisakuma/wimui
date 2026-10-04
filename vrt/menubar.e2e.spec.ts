import { test, expect } from "@playwright/test";
import { waitForStoryReady } from "./story-ready";

const STORY_URL =
  "/iframe.html?id=components-navigation-elements-menubar--default&viewMode=story&globals=locale:en";

// メニューの中にフォーカスがあるまま閉じると、面ごと消えてフォーカスが body へ落ちる（T307）。
// 以前は Escape のときだけ引き金へ戻していた。項目の選択と Tab も、行き先を名指しで見る。
test.describe("Menubar", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(STORY_URL);
    await waitForStoryReady(page);
  });

  const openFirst = async (page: import("@playwright/test").Page) => {
    const trigger = page.locator('[role="menubar"] > * [role="menuitem"][aria-haspopup="menu"]').first();
    await trigger.focus();
    await page.keyboard.press("Enter");
    await expect(page.getByRole("menu")).toBeVisible();
    await expect(page.getByRole("menu").getByRole("menuitem").first()).toBeFocused();
    return trigger;
  };

  test("choosing an item closes the menu and returns focus to its trigger", async ({ page }) => {
    const trigger = await openFirst(page);
    await page.keyboard.press("Enter");
    await expect(page.getByRole("menu")).toHaveCount(0);
    await expect(trigger).toBeFocused();
  });

  test("Escape closes the menu and returns focus to its trigger", async ({ page }) => {
    const trigger = await openFirst(page);
    await page.keyboard.press("Escape");
    await expect(page.getByRole("menu")).toHaveCount(0);
    await expect(trigger).toBeFocused();
  });

  // 以前は、メニューが開いたまま、フォーカスだけ隣の項目へ移っていた（T302）。
  test("Tab closes the open menu and moves on to the next menubar item", async ({ page }) => {
    const trigger = await openFirst(page);
    await page.keyboard.press("Tab");
    await expect(page.getByRole("menu")).toHaveCount(0);
    await expect(trigger).toHaveAttribute("aria-expanded", "false");
    const next = page.locator('[role="menubar"] > * [role="menuitem"][aria-haspopup="menu"]').nth(1);
    await expect(next).toBeFocused();
  });
});
