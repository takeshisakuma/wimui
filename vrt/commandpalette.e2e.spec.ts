import { test, expect } from "@playwright/test";
import { waitForStoryReady } from "./story-ready";

// 閉じたあと、フォーカスが開いたボタンへ戻るか（T308）。以前は body へ落ちていた ──
// パレットの検索欄は自分でフォーカスを取るので、FocusTrap が「開く前のフォーカス」を覚える時点で、
// 既に検索欄にフォーカスがあった。戻り先が、閉じたときには消えている要素になっていた。
for (const story of ["default", "controlled"]) {
  test.describe(`CommandPalette (${story})`, () => {
    test.beforeEach(async ({ page }) => {
      await page.goto(`/iframe.html?id=components-overlays-commandpalette--${story}&viewMode=story&globals=locale:en`);
      await waitForStoryReady(page);
    });

    const open = async (page: import("@playwright/test").Page) => {
      const opener = page.locator("#storybook-root button").first();
      await opener.focus();
      await page.keyboard.press("Enter");
      await expect(page.getByRole("dialog")).toBeVisible();
      // 開いたら、検索欄にフォーカスがある
      await expect(page.getByRole("combobox")).toBeFocused();
      return opener;
    };

    test("Escape closes the palette and returns focus to the opener", async ({ page }) => {
      const opener = await open(page);
      await page.keyboard.press("Escape");
      await expect(page.getByRole("dialog")).toHaveCount(0);
      await expect(opener).toBeFocused();
    });

    test("choosing an item closes the palette and returns focus to the opener", async ({ page }) => {
      const opener = await open(page);
      await page.keyboard.press("Enter");
      await expect(page.getByRole("dialog")).toHaveCount(0);
      await expect(opener).toBeFocused();
    });
  });
}
