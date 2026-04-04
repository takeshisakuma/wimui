import { test, expect } from "@playwright/test";

const STORY_URL = (id: string) =>
  `/iframe.html?id=${id}&viewMode=story&globals=locale:en`;

const DEFAULT_STORY = "components-selection-controls-multiselect--default";
const MULTI_SELECTED_STORY =
  "components-selection-controls-multiselect--multiple-selected";
const CLEAR_STORY =
  "components-selection-controls-multiselect--with-clear-button";
const DISABLED_STORY =
  "components-selection-controls-multiselect--disabled";

test.describe("MultiSelect", () => {
  test.describe("open/close behavior", () => {
    test.beforeEach(async ({ page }) => {
      await page.goto(STORY_URL(DEFAULT_STORY));
      await page.waitForLoadState("networkidle");
    });

    test("opens listbox on trigger click", async ({ page }) => {
      await expect(page.getByRole("listbox")).not.toBeVisible();
      await page.locator(".wim-multiselect-trigger").click();
      await expect(page.getByRole("listbox")).toBeVisible();
    });

    test("closes listbox on Escape", async ({ page }) => {
      await page.locator(".wim-multiselect-trigger").click();
      await expect(page.getByRole("listbox")).toBeVisible();
      await page.keyboard.press("Escape");
      await expect(page.getByRole("listbox")).not.toBeVisible();
    });

    test("closes listbox on second trigger click", async ({ page }) => {
      await page.locator(".wim-multiselect-trigger").click();
      await expect(page.getByRole("listbox")).toBeVisible();
      await page.locator(".wim-multiselect-trigger").click();
      await expect(page.getByRole("listbox")).not.toBeVisible();
    });
  });

  test.describe("selection", () => {
    test("selecting an option adds a badge", async ({ page }) => {
      await page.goto(STORY_URL(DEFAULT_STORY));
      await page.waitForLoadState("networkidle");

      await page.locator(".wim-multiselect-trigger").click();
      const firstOption = page.getByRole("option").first();
      const optionText = await firstOption.innerText();
      await firstOption.click();

      await expect(
        page.locator(".wim-multiselect-badge").filter({ hasText: optionText }),
      ).toBeVisible();
    });

    test("clicking selected option deselects it", async ({ page }) => {
      await page.goto(STORY_URL(DEFAULT_STORY));
      await page.waitForLoadState("networkidle");

      await page.locator(".wim-multiselect-trigger").click();
      const firstOption = page.getByRole("option").first();
      // Select the option (dropdown stays open in multi-select)
      await firstOption.click();
      await expect(page.locator(".wim-multiselect-badge")).toHaveCount(1);

      // Click the same option again to deselect (dropdown is still open)
      await firstOption.click();
      await expect(page.locator(".wim-multiselect-badge")).toHaveCount(0);
    });

    test("badge remove button deselects the option", async ({ page }) => {
      await page.goto(STORY_URL(MULTI_SELECTED_STORY));
      await page.waitForLoadState("networkidle");

      const badges = page.locator(".wim-multiselect-badge");
      const initialCount = await badges.count();
      expect(initialCount).toBeGreaterThan(0);

      // Delete button is rendered by Chip component as .wim-chip__delete
      await page.locator(".wim-chip__delete").first().click();
      await expect(badges).toHaveCount(initialCount - 1);
    });

    test("can select multiple options", async ({ page }) => {
      await page.goto(STORY_URL(DEFAULT_STORY));
      await page.waitForLoadState("networkidle");

      await page.locator(".wim-multiselect-trigger").click();
      const options = page.getByRole("option");
      // Select two options in one open session (dropdown stays open)
      await options.nth(0).click();
      await options.nth(1).click();

      await expect(page.locator(".wim-multiselect-badge")).toHaveCount(2);
    });
  });

  test.describe("clear button", () => {
    test("clear button removes all selections", async ({ page }) => {
      await page.goto(STORY_URL(CLEAR_STORY));
      await page.waitForLoadState("networkidle");

      // Select an option first
      await page.locator(".wim-multiselect-trigger").click();
      await page.getByRole("option").first().click();
      await expect(page.locator(".wim-multiselect-badge")).toHaveCount(1);

      // Clear all
      await page.getByRole("button", { name: /clear/i }).click();
      await expect(page.locator(".wim-multiselect-badge")).toHaveCount(0);
    });
  });

  test.describe("keyboard navigation", () => {
    test.beforeEach(async ({ page }) => {
      await page.goto(STORY_URL(DEFAULT_STORY));
      await page.waitForLoadState("networkidle");
    });

    test("Arrow Down opens the listbox", async ({ page }) => {
      await page.locator(".wim-multiselect-trigger").focus();
      await page.keyboard.press("ArrowDown");
      await expect(page.getByRole("listbox")).toBeVisible();
    });

    test("Enter selects focused option", async ({ page }) => {
      await page.locator(".wim-multiselect-trigger").click();
      await page.keyboard.press("ArrowDown");
      await page.keyboard.press("Enter");
      await expect(page.locator(".wim-multiselect-badge")).toHaveCount(1);
    });
  });

  test.describe("disabled state", () => {
    test("disabled trigger does not open listbox", async ({ page }) => {
      await page.goto(STORY_URL(DISABLED_STORY));
      await page.waitForLoadState("networkidle");

      await page.locator(".wim-multiselect-trigger").click({ force: true });
      await expect(page.getByRole("listbox")).not.toBeVisible();
    });

    test("disabled trigger has aria-disabled attribute", async ({ page }) => {
      await page.goto(STORY_URL(DISABLED_STORY));
      await page.waitForLoadState("networkidle");

      await expect(page.locator(".wim-multiselect-trigger")).toHaveAttribute(
        "aria-disabled",
        "true",
      );
    });
  });
});
