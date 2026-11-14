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

  // T381: 見出しから年と月の一覧へ上がり、キーボードだけで遠い日付を選べる。
  // 一覧の中の Escape は 1 段下りるだけで、面は閉じない（面を閉じる Escape は document で受けている）
  test.describe("month and year levels (T381)", () => {
    test("picks a date decades back with the keyboard, and Escape steps down without closing", async ({ page }) => {
      await page.goto(STORY_URL(DEFAULT_STORY));
      await page.waitForLoadState("networkidle");
      await page.getByRole("combobox").click();
      const dialog = page.getByRole("dialog");
      await expect(dialog).toBeVisible();

      const title = dialog.getByRole("button", { name: /Choose month$/ });
      await title.click();
      const months = dialog.getByRole("grid", { name: /^Months of \d{4}$/ });
      await expect(months).toBeVisible();
      await expect(months.locator('[role="gridcell"]')).toHaveCount(12);
      await expect(months.locator('[tabindex="0"]')).toBeFocused();

      // Escape は年・月の一覧を 1 段下りるだけ（面は開いたまま）
      await page.keyboard.press("Escape");
      await expect(dialog).toBeVisible();
      await expect(dialog.getByRole("button", { name: /Choose month$/ })).toBeVisible();

      await dialog.getByRole("button", { name: /Choose month$/ }).click();
      await dialog.getByRole("button", { name: /Choose year$/ }).click();
      const years = dialog.getByRole("grid", { name: /^Years \d{4} to \d{4}$/ });
      await expect(years).toBeVisible();

      // 12 年前の頁へ 2 回、そこで左端の年を選び、3 月、10 日
      await dialog.getByRole("button", { name: "Previous 12 years" }).click();
      await dialog.getByRole("button", { name: "Previous 12 years" }).click();
      const firstYear = years.locator('[role="gridcell"]').first();
      const yearText = (await firstYear.textContent())!.trim();
      await firstYear.click();
      await dialog.getByRole("gridcell", { name: new RegExp(`^March ${yearText}$`) }).click();
      await dialog.getByLabel(`${yearText}-3-10`).click();

      await expect(dialog).not.toBeVisible();
      await expect(page.getByRole("combobox")).toHaveValue(new RegExp(yearText));
    });
  });
});
