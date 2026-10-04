import { test, expect } from "@playwright/test";
import { waitForStoryReady } from "./story-ready";

const STORY_URL =
  "/iframe.html?id=components-selection-controls-select--default&viewMode=story&globals=locale:en";

// Tab でフォーカスが外へ出たら、リストは閉じる。以前は開いたまま残った
// （MultiSelect / Combobox / Cascader / ModelSelector / PhoneInput は閉じていた）。
test.describe("Select", () => {
  test("Tab closes the list and focus moves on", async ({ page }) => {
    await page.goto(STORY_URL);
    await waitForStoryReady(page);
    // 行き先を作る（ストーリーには Select しか無い）。body に着いただけでは、フォーカスを失ったのと区別できない。
    await page.evaluate(() => {
      const next = document.createElement("button");
      next.id = "after-select";
      next.textContent = "next";
      document.body.appendChild(next);
    });
    const trigger = page.getByRole("combobox");
    await trigger.focus();
    await page.keyboard.press("ArrowDown");
    await expect(page.getByRole("listbox")).toBeVisible();

    await page.keyboard.press("Tab");
    await expect(page.getByRole("listbox")).toHaveCount(0);
    await expect(trigger).toHaveAttribute("aria-expanded", "false");
    await expect(page.locator("#after-select")).toBeFocused();
  });
});
