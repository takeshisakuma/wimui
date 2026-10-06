import { test, expect } from "@playwright/test";
import { waitForStoryReady } from "./story-ready";

const STORY_URL =
  "/iframe.html?id=components-navigation-utilities-speeddial--default&viewMode=story&globals=locale:en";
const CLICK_STORY_URL =
  "/iframe.html?id=components-navigation-utilities-speeddial--click-trigger&viewMode=story&globals=locale:en";

// 閉じた SpeedDial のアクションは、opacity: 0 で消しているだけだった。Tab を押すと最初に見えない
// ボタンへ着き、Enter でそのまま実行された。既定（hover）ではキーボードで開く手段も無かった（T306）。
test.describe("SpeedDial", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(STORY_URL);
    await waitForStoryReady(page);
  });

  test("Tab reaches the trigger first while closed, never an invisible action", async ({ page }) => {
    await page.keyboard.press("Tab");
    const trigger = page.locator('.wim-speed-dial [aria-haspopup="true"]');
    await expect(trigger).toBeFocused();
    await expect(trigger).toHaveAttribute("aria-expanded", "false");
    // 名前はアイコン名ではない
    await expect(trigger).toHaveAccessibleName("Open menu");
  });

  test("Enter opens it from the keyboard and focuses the first action; Escape returns to the trigger", async ({ page }) => {
    const trigger = page.locator('.wim-speed-dial [aria-haspopup="true"]');
    await trigger.focus();
    await page.keyboard.press("Enter");
    await expect(trigger).toHaveAttribute("aria-expanded", "true");
    const focusedInActions = () =>
      page.evaluate(() => {
        const active = document.activeElement;
        return !!active && active !== document.body && !active.hasAttribute("aria-haspopup") && !!active.closest(".wim-speed-dial");
      });
    await expect.poll(focusedInActions).toBe(true);

    await page.keyboard.press("Escape");
    await expect(trigger).toHaveAttribute("aria-expanded", "false");
    await expect(trigger).toBeFocused();
  });

  // 既定（hover）をキーボードで開いて実行すると、開いたまま残っていた（T322）。click モードは閉じるが、
  // フォーカスを持ったアクションが inert になる。どちらも、閉じて引き金へ戻る（Dropdown と同じ形）。
  for (const [mode, storyUrl] of [
    ["hover", STORY_URL],
    ["click", CLICK_STORY_URL],
  ]) {
    test(`running an action from the keyboard closes it and returns focus to the trigger (${mode})`, async ({ page }) => {
      await page.goto(storyUrl);
      await waitForStoryReady(page);
      const trigger = page.locator('.wim-speed-dial [aria-haspopup="true"]');
      await trigger.focus();
      await page.keyboard.press("Enter");
      await expect(trigger).toHaveAttribute("aria-expanded", "true");
      await expect(page.getByRole("button", { name: "Copy" })).toBeFocused();

      await page.keyboard.press("Enter");
      await expect(trigger).toHaveAttribute("aria-expanded", "false");
      await expect(trigger).toBeFocused();
    });
  }

  test("closes when focus leaves after a keyboard open", async ({ page }) => {
    await page.evaluate(() => {
      const next = document.createElement("button");
      next.id = "after-speed-dial";
      next.textContent = "next";
      document.body.appendChild(next);
    });
    const trigger = page.locator('.wim-speed-dial [aria-haspopup="true"]');
    await trigger.focus();
    await page.keyboard.press("Enter");
    await expect(trigger).toHaveAttribute("aria-expanded", "true");
    await page.locator("#after-speed-dial").focus();
    await expect(trigger).toHaveAttribute("aria-expanded", "false");
  });
});
