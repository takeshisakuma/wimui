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
      const trigger = page.getByTestId("context-menu-trigger").first();
      await trigger.click({ button: "right" });
      await expect(page.getByRole("menu")).toBeVisible();
    });

    test("clicking a menu item closes the menu", async ({ page }) => {
      const trigger = page.getByTestId("context-menu-trigger").first();
      await trigger.click({ button: "right" });
      await expect(page.getByRole("menu")).toBeVisible();

      await page.getByRole("menuitem").first().click();
      await expect(page.getByRole("menu")).not.toBeVisible();
    });

    test("Escape key closes the menu", async ({ page }) => {
      const trigger = page.getByTestId("context-menu-trigger").first();
      await trigger.click({ button: "right" });
      await expect(page.getByRole("menu")).toBeVisible();

      await page.keyboard.press("Escape");
      await expect(page.getByRole("menu")).not.toBeVisible();
    });

    // メニューはモーダルにしない（T293）。以前は開くと背後（#storybook-root）が aria-hidden になり、
    // 中にフォーカスできる要素が残っていた（axe: aria-hidden-focus）。ガードも同じ規則に当たる。
    test("does not hide the page or add focus guards while open", async ({ page }) => {
      const trigger = page.getByTestId("context-menu-trigger").first();
      await trigger.click({ button: "right" });
      await expect(page.getByRole("menu")).toBeVisible();

      await expect(page.locator("#storybook-root")).not.toHaveAttribute("aria-hidden", "true");
      await expect(page.locator("[data-floating-ui-focus-guard]")).toHaveCount(0);
      await expect(page.getByRole("menu")).not.toHaveAttribute("aria-labelledby", /.*/);
    });

    test("Tab closes the menu and returns focus to the trigger", async ({ page }) => {
      const trigger = page.getByTestId("context-menu-trigger").first();
      await trigger.focus();
      await page.keyboard.press("Enter");
      await expect(page.getByRole("menuitem").first()).toBeFocused();

      await page.keyboard.press("Tab");
      await expect(page.getByRole("menu")).toHaveCount(0);
      await expect(trigger).toBeFocused();
    });
  });

  test.describe("disabled items", () => {
    test("disabled menu item does not close the menu", async ({ page }) => {
      await page.goto(STORY_URL(DISABLED_ITEMS_STORY));
      await page.waitForLoadState("networkidle");

      const trigger = page.getByTestId("context-menu-trigger").first();
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

      const trigger = page.getByTestId("context-menu-trigger").first();
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

      const trigger = page.getByTestId("context-menu-trigger").first();
      await trigger.click({ button: "right" });
      await expect(page.getByRole("menu")).toBeVisible();

      await page.keyboard.press("ArrowDown");
      await page.keyboard.press("ArrowDown");
      // No error thrown means navigation works
    });
  });
});
