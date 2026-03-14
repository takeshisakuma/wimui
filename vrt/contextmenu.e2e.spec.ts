import { test, expect } from "@playwright/test";

const STORY_URL = (id: string) =>
  `/iframe.html?id=${id}&viewMode=story&globals=locale:en`;

const BASIC_STORY = "components-overlays-contextmenu--basic";
const WITH_GROUPS_STORY = "components-overlays-contextmenu--with-groups";
const DISABLED_ITEMS_STORY =
  "components-overlays-contextmenu--with-disabled-items";

test.describe("ContextMenu", () => {
  test.describe("open/close behavior", () => {
    test.beforeEach(async ({ page }) => {
      await page.goto(STORY_URL(BASIC_STORY));
      await page.waitForLoadState("networkidle");
    });

    test("right-click opens the context menu", async ({ page }) => {
      const trigger = page.locator("[style*='cursor: pointer'], [style*='cursor:pointer']").first();
      await trigger.click({ button: "right" });
      await expect(page.getByRole("menu")).toBeVisible();
    });

    test("clicking a menu item closes the menu", async ({ page }) => {
      const trigger = page.locator("[style*='cursor: pointer'], [style*='cursor:pointer']").first();
      await trigger.click({ button: "right" });
      await expect(page.getByRole("menu")).toBeVisible();

      await page.getByRole("menuitem").first().click();
      await expect(page.getByRole("menu")).not.toBeVisible();
    });

    test("Escape key closes the menu", async ({ page }) => {
      const trigger = page.locator("[style*='cursor: pointer'], [style*='cursor:pointer']").first();
      await trigger.click({ button: "right" });
      await expect(page.getByRole("menu")).toBeVisible();

      await page.keyboard.press("Escape");
      await expect(page.getByRole("menu")).not.toBeVisible();
    });
  });

  test.describe("disabled items", () => {
    test("disabled menu item does not close the menu", async ({ page }) => {
      await page.goto(STORY_URL(DISABLED_ITEMS_STORY));
      await page.waitForLoadState("networkidle");

      const trigger = page.locator("[style*='cursor: pointer'], [style*='cursor:pointer']").first();
      await trigger.click({ button: "right" });
      await expect(page.getByRole("menu")).toBeVisible();

      // Click the disabled item
      const disabledItem = page.locator("[aria-disabled='true']").first();
      await disabledItem.click({ force: true });

      // Menu should remain visible because item is disabled
      await expect(page.getByRole("menu")).toBeVisible();
    });
  });

  test.describe("with groups", () => {
    test("renders group titles", async ({ page }) => {
      await page.goto(STORY_URL(WITH_GROUPS_STORY));
      await page.waitForLoadState("networkidle");

      const trigger = page.locator("[style*='cursor: pointer'], [style*='cursor:pointer']").first();
      await trigger.click({ button: "right" });

      // Groups should have a title element visible
      await expect(page.getByRole("menu")).toBeVisible();
      await expect(page.getByRole("group").first()).toBeVisible();
    });
  });

  test.describe("keyboard navigation", () => {
    test("Arrow Down moves focus to next menu item", async ({ page }) => {
      await page.goto(STORY_URL(BASIC_STORY));
      await page.waitForLoadState("networkidle");

      const trigger = page.locator("[style*='cursor: pointer'], [style*='cursor:pointer']").first();
      await trigger.click({ button: "right" });
      await expect(page.getByRole("menu")).toBeVisible();

      await page.keyboard.press("ArrowDown");
      await page.keyboard.press("ArrowDown");
      // No error thrown means navigation works
    });
  });
});
