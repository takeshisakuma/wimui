import { test, expect } from "@playwright/test";
import { waitForStoryReady } from "./story-ready";

const STORY_URL =
  "/iframe.html?id=components-navigation-elements-hamburgermenu--default&viewMode=story&globals=locale:en";

// 開いた状態で Escape を押しても、aria-expanded="true" のままだった（T305）。
test.describe("HamburgerMenu", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(STORY_URL);
    await waitForStoryReady(page);
  });

  test("Escape closes it and keeps focus on the button", async ({ page }) => {
    const trigger = page.locator("#storybook-root .wim-hamburger-menu");
    await trigger.focus();
    await page.keyboard.press("Enter");
    await expect(trigger).toHaveAttribute("aria-expanded", "true");
    await page.keyboard.press("Escape");
    await expect(trigger).toHaveAttribute("aria-expanded", "false");
    await expect(trigger).toBeFocused();
  });

  // 開く面は利用者が置く。フォーカスがその中（ボタンの外）にあっても閉じて、ボタンへ戻る。
  test("Escape pressed elsewhere on the page closes it and returns focus to the button", async ({ page }) => {
    await page.evaluate(() => {
      const inPanel = document.createElement("button");
      inPanel.id = "in-panel";
      inPanel.textContent = "in panel";
      document.body.appendChild(inPanel);
    });
    const trigger = page.locator("#storybook-root .wim-hamburger-menu");
    await trigger.click();
    await expect(trigger).toHaveAttribute("aria-expanded", "true");
    await page.locator("#in-panel").focus();
    await page.keyboard.press("Escape");
    await expect(trigger).toHaveAttribute("aria-expanded", "false");
    await expect(trigger).toBeFocused();
  });

  test("Escape does nothing while closed", async ({ page }) => {
    const trigger = page.locator("#storybook-root .wim-hamburger-menu");
    await trigger.focus();
    await page.keyboard.press("Escape");
    await expect(trigger).toHaveAttribute("aria-expanded", "false");
  });
});
