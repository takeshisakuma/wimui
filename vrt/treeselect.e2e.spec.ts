import { test, expect } from "@playwright/test";
import { waitForStoryReady } from "./story-ready";

const STORY_URL =
  "/iframe.html?id=components-advanced-inputs-treeselect--default-expanded&viewMode=story&globals=locale:en";

// T309: パネルの中のツリーで、矢印が 2 つ目より先へ進めなかった（tabIndex だけが移り、DOM のフォーカスが
// 元の項目に残っていた）。Escape も、フォーカスがパネルの中にあると効かなかった。
test.describe("TreeSelect", () => {
  test("arrow keys walk the tree past the second item", async ({ page }) => {
    await page.goto(STORY_URL);
    await waitForStoryReady(page);
    const trigger = page.getByRole("combobox");
    await trigger.focus();
    await page.keyboard.press("Enter");

    const items = page.getByRole("treeitem");
    await expect(items.first()).toBeFocused();
    expect(await items.count()).toBeGreaterThanOrEqual(4);

    await page.keyboard.press("ArrowDown");
    await expect(items.nth(1)).toBeFocused();
    await page.keyboard.press("ArrowDown");
    await expect(items.nth(2)).toBeFocused();
    await page.keyboard.press("ArrowDown");
    await expect(items.nth(3)).toBeFocused();
    await page.keyboard.press("ArrowUp");
    await expect(items.nth(2)).toBeFocused();
  });

  test("Escape inside the panel closes it and returns focus to the trigger", async ({ page }) => {
    await page.goto(STORY_URL);
    await waitForStoryReady(page);
    const trigger = page.getByRole("combobox");
    await trigger.focus();
    await page.keyboard.press("Enter");
    await expect(page.getByRole("treeitem").first()).toBeFocused();
    await page.keyboard.press("ArrowDown");

    await page.keyboard.press("Escape");
    await expect(page.getByRole("tree")).toHaveCount(0);
    await expect(trigger).toHaveAttribute("aria-expanded", "false");
    await expect(trigger).toBeFocused();
  });
});
