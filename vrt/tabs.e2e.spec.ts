import { test, expect } from "@playwright/test";

const STORY_URL = (id: string) =>
  `/iframe.html?id=${id}&viewMode=story&globals=locale:en`;

const DEFAULT_STORY = "components-navigation-elements-tabs--default";
const VERTICAL_STORY = "components-navigation-elements-tabs--vertical";

test.describe("Tabs", () => {
  test.describe("default (horizontal)", () => {
    test.beforeEach(async ({ page }) => {
      await page.goto(STORY_URL(DEFAULT_STORY));
      await page.waitForLoadState("networkidle");
    });

    test("first tab is selected by default", async ({ page }) => {
      const firstTab = page.getByRole("tab").first();
      await expect(firstTab).toHaveAttribute("aria-selected", "true");
    });

    test("clicking a tab shows its panel content", async ({ page }) => {
      const tabs = page.getByRole("tab");
      const secondTab = tabs.nth(1);
      await secondTab.click();
      await expect(secondTab).toHaveAttribute("aria-selected", "true");

      // The first tab should no longer be selected
      await expect(tabs.first()).toHaveAttribute("aria-selected", "false");
    });

    test("only one tab panel is visible at a time", async ({ page }) => {
      const panels = page.getByRole("tabpanel");
      await expect(panels).toHaveCount(1);
    });

    test("Arrow Right moves focus to next tab", async ({ page }) => {
      const firstTab = page.getByRole("tab").first();
      const secondTab = page.getByRole("tab").nth(1);

      await firstTab.focus();
      await page.keyboard.press("ArrowRight");
      await expect(secondTab).toBeFocused();
    });

    test("Arrow Left moves focus to previous tab", async ({ page }) => {
      const secondTab = page.getByRole("tab").nth(1);
      const firstTab = page.getByRole("tab").first();

      await secondTab.click();
      await page.keyboard.press("ArrowLeft");
      await expect(firstTab).toBeFocused();
    });

    test("End key moves focus to last tab", async ({ page }) => {
      const firstTab = page.getByRole("tab").first();
      const lastTab = page.getByRole("tab").last();

      await firstTab.focus();
      await page.keyboard.press("End");
      await expect(lastTab).toBeFocused();
    });

    test("Home key moves focus to first tab", async ({ page }) => {
      const lastTab = page.getByRole("tab").last();
      const firstTab = page.getByRole("tab").first();

      await lastTab.focus();
      await page.keyboard.press("Home");
      await expect(firstTab).toBeFocused();
    });
  });

  test.describe("vertical orientation", () => {
    test.beforeEach(async ({ page }) => {
      await page.goto(STORY_URL(VERTICAL_STORY));
      await page.waitForLoadState("networkidle");
    });

    test("tablist has vertical orientation", async ({ page }) => {
      await expect(page.getByRole("tablist")).toHaveAttribute(
        "aria-orientation",
        "vertical",
      );
    });

    test("Arrow Down moves focus to next tab", async ({ page }) => {
      const firstTab = page.getByRole("tab").first();
      const secondTab = page.getByRole("tab").nth(1);

      await firstTab.focus();
      await page.keyboard.press("ArrowDown");
      await expect(secondTab).toBeFocused();
    });

    test("Arrow Up moves focus to previous tab", async ({ page }) => {
      const secondTab = page.getByRole("tab").nth(1);
      const firstTab = page.getByRole("tab").first();

      await secondTab.click();
      await page.keyboard.press("ArrowUp");
      await expect(firstTab).toBeFocused();
    });
  });
});
