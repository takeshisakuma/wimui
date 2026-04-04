import { test, expect } from "@playwright/test";

const STORY_URL = (id: string) =>
  `/iframe.html?id=${id}&viewMode=story&globals=locale:en`;

const DEFAULT_STORY = "components-pickers-sliders-datepicker--default";
const DISABLED_STORY = "components-pickers-sliders-datepicker--disabled";

test.describe("DatePicker", () => {
  test.describe("open/close behavior", () => {
    test("opens calendar on click", async ({ page }) => {
      await page.goto(STORY_URL(DEFAULT_STORY));
      await page.waitForLoadState("networkidle");

      const input = page.getByRole("combobox");
      await expect(page.getByRole("dialog")).not.toBeVisible();
      await input.click();
      await expect(page.getByRole("dialog")).toBeVisible();
    });

    test("closes calendar on Escape", async ({ page }) => {
      await page.goto(STORY_URL(DEFAULT_STORY));
      await page.waitForLoadState("networkidle");

      await page.getByRole("combobox").click();
      await expect(page.getByRole("dialog")).toBeVisible();
      await page.keyboard.press("Escape");
      await expect(page.getByRole("dialog")).not.toBeVisible();
    });

    test("selecting a date closes the calendar", async ({ page }) => {
      await page.goto(STORY_URL(DEFAULT_STORY));
      await page.waitForLoadState("networkidle");

      await page.getByRole("combobox").click();
      await expect(page.getByRole("dialog")).toBeVisible();

      // Click any visible day cell that is not disabled
      const dayCell = page
        .getByRole("dialog")
        .getByRole("gridcell")
        .first();
      await dayCell.click();

      await expect(page.getByRole("dialog")).not.toBeVisible();
    });

    test("input reflects selected date value", async ({ page }) => {
      await page.goto(STORY_URL(DEFAULT_STORY));
      await page.waitForLoadState("networkidle");

      const input = page.getByRole("combobox");
      await input.click();
      const dayButton = page
        .getByRole("dialog")
        .getByRole("gridcell")
        .first();
      await dayButton.click();

      // Input should have a non-empty value after selection
      const value = await input.inputValue();
      expect(value.length).toBeGreaterThan(0);
    });
  });

  test.describe("disabled state", () => {
    test("disabled DatePicker does not open calendar", async ({ page }) => {
      await page.goto(STORY_URL(DISABLED_STORY));
      await page.waitForLoadState("networkidle");

      const input = page.getByRole("combobox");
      await input.click({ force: true });
      await expect(page.getByRole("dialog")).not.toBeVisible();
    });
  });
});
