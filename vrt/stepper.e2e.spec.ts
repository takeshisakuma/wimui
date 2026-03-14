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

    test("first step has process status class", async ({ page }) => {
      const firstItem = page.locator(".wim-stepper__item").first();
      await expect(firstItem).toHaveClass(/wim-stepper__item--process/);
    });

    test("steps after the current have wait status class", async ({ page }) => {
      const secondItem = page.locator(".wim-stepper__item").nth(1);
      await expect(secondItem).toHaveClass(/wim-stepper__item--wait/);
    });

    test("renders step titles", async ({ page }) => {
      const titles = page.locator(".wim-stepper__title");
      await expect(titles.first()).toBeVisible();
    });
  });

  test.describe("error status", () => {
    test("error step has error status class", async ({ page }) => {
      await page.goto(STORY_URL(ERROR_STORY));
      await page.waitForLoadState("networkidle");

      const items = page.locator(".wim-stepper__item");
      const hasError = await items
        .filter({ has: page.locator(".wim-stepper__item--error") })
        .count();
      expect(hasError).toBeGreaterThan(0);
    });
  });

  test.describe("interactive", () => {
    test.beforeEach(async ({ page }) => {
      await page.goto(STORY_URL(INTERACTIVE_STORY));
      await page.waitForLoadState("networkidle");
    });

    test("clicking a step updates the current step", async ({ page }) => {
      const items = page.locator(".wim-stepper__item");
      const thirdItem = items.nth(2);

      await thirdItem.click();
      await expect(thirdItem).toHaveClass(/wim-stepper__item--process/);
    });

    test("steps before current become finish status", async ({ page }) => {
      const items = page.locator(".wim-stepper__item");

      // Click third step
      await items.nth(2).click();

      // First two steps should now be finished
      await expect(items.nth(0)).toHaveClass(/wim-stepper__item--finish/);
      await expect(items.nth(1)).toHaveClass(/wim-stepper__item--finish/);
    });

    test("steps after current remain wait status", async ({ page }) => {
      const items = page.locator(".wim-stepper__item");

      // Click second step
      await items.nth(1).click();

      // Third step should still be waiting
      await expect(items.nth(2)).toHaveClass(/wim-stepper__item--wait/);
    });

    test("Enter key activates a focused step", async ({ page }) => {
      const items = page.locator(".wim-stepper__item");
      const thirdItem = items.nth(2);

      await thirdItem.focus();
      await page.keyboard.press("Enter");

      await expect(thirdItem).toHaveClass(/wim-stepper__item--process/);
    });

    test("Space key activates a focused step", async ({ page }) => {
      const items = page.locator(".wim-stepper__item");
      const secondItem = items.nth(1);

      await secondItem.focus();
      await page.keyboard.press("Space");

      await expect(secondItem).toHaveClass(/wim-stepper__item--process/);
    });
  });
});
