import { test, expect } from "@playwright/test";

const STORY_URL = (id: string) =>
  `/iframe.html?id=${id}&viewMode=story&globals=locale:en`;

const DEFAULT_STORY = "components-navigation-elements-stepper--default";
const INTERACTIVE_STORY =
  "components-navigation-elements-stepper--interactive";
const ERROR_STORY =
  "components-navigation-elements-stepper--error-status";

test.describe("Stepper", () => {
  test.describe("default rendering", () => {
    test.beforeEach(async ({ page }) => {
      await page.goto(STORY_URL(DEFAULT_STORY));
      await page.waitForLoadState("networkidle");
    });

    test("current step has process status class", async ({ page }) => {
      // Default story has current=1, so the second item (index 1) is in process
      const currentItem = page.locator('[data-testid="stepper-item"]').nth(1);
      await expect(currentItem).toHaveAttribute("data-status", "process");
    });

    test("steps after the current have wait status class", async ({ page }) => {
      // Default story has current=1, so the third item (index 2) is waiting
      const thirdItem = page.locator('[data-testid="stepper-item"]').nth(2);
      await expect(thirdItem).toHaveAttribute("data-status", "wait");
    });

    test("renders step titles", async ({ page }) => {
      const titles = page.locator('[data-testid="stepper-title"]');
      await expect(titles.first()).toBeVisible();
    });
  });

  test.describe("error status", () => {
    test("error step has error status class", async ({ page }) => {
      await page.goto(STORY_URL(ERROR_STORY));
      await page.waitForLoadState("networkidle");

      // ErrorStatus story has current=1 and status="error", so item at index 1 has error class
      await expect(page.locator('[data-testid="stepper-item"]').nth(1)).toHaveAttribute(
        "data-status",
        "error",
      );
    });
  });

  test.describe("interactive", () => {
    test.beforeEach(async ({ page }) => {
      await page.goto(STORY_URL(INTERACTIVE_STORY));
      await page.waitForLoadState("networkidle");
    });

    test("clicking a step updates the current step", async ({ page }) => {
      const items = page.locator('[data-testid="stepper-item"]');
      const thirdItem = items.nth(2);

      await thirdItem.click();
      await expect(thirdItem).toHaveAttribute("data-status", "process");
    });

    test("steps before current become finish status", async ({ page }) => {
      const items = page.locator('[data-testid="stepper-item"]');

      // Click third step
      await items.nth(2).click();

      // First two steps should now be finished
      await expect(items.nth(0)).toHaveAttribute("data-status", "finish");
      await expect(items.nth(1)).toHaveAttribute("data-status", "finish");
    });

    test("steps after current remain wait status", async ({ page }) => {
      const items = page.locator('[data-testid="stepper-item"]');

      // Click second step
      await items.nth(1).click();

      // Third step should still be waiting
      await expect(items.nth(2)).toHaveAttribute("data-status", "wait");
    });

    test("Enter key activates a focused step", async ({ page }) => {
      const items = page.locator('[data-testid="stepper-item"]');
      const thirdItem = items.nth(2);

      await thirdItem.focus();
      await page.keyboard.press("Enter");

      await expect(thirdItem).toHaveAttribute("data-status", "process");
    });

    test("Space key activates a focused step", async ({ page }) => {
      const items = page.locator('[data-testid="stepper-item"]');
      const secondItem = items.nth(1);

      await secondItem.focus();
      await page.keyboard.press("Space");

      await expect(secondItem).toHaveAttribute("data-status", "process");
    });
  });
});
