import { test, expect } from "@playwright/test";

const STORY_URL = (id: string) =>
  `/iframe.html?id=${id}&viewMode=story&globals=locale:en`;

const DEFAULT_STORY = "components-overlays-drawer--default";
const LEFT_STORY = "components-overlays-drawer--left";
const TOP_STORY = "components-overlays-drawer--top";
const BOTTOM_STORY = "components-overlays-drawer--bottom";

test.describe("Drawer", () => {
  test.describe("open/close behavior", () => {
    test("opens on trigger click", async ({ page }) => {
      await page.goto(STORY_URL(DEFAULT_STORY));
      await page.waitForLoadState("networkidle");

      await expect(page.locator(".wim-drawer-content")).not.toBeVisible();
      await page.getByRole("button", { name: /open/i }).click();
      await expect(page.locator(".wim-drawer-content")).toBeVisible();
    });

    test("closes with close button", async ({ page }) => {
      await page.goto(STORY_URL(DEFAULT_STORY));
      await page.waitForLoadState("networkidle");

      await page.getByRole("button", { name: /open/i }).click();
      await expect(page.locator(".wim-drawer-content")).toBeVisible();

      await page.locator(".wim-drawer-close-button").click();
      await expect(page.locator(".wim-drawer-content")).not.toBeVisible();
    });

    test("closes on Escape key", async ({ page }) => {
      await page.goto(STORY_URL(DEFAULT_STORY));
      await page.waitForLoadState("networkidle");

      await page.getByRole("button", { name: /open/i }).click();
      await expect(page.locator(".wim-drawer-content")).toBeVisible();
      await page.keyboard.press("Escape");
      await expect(page.locator(".wim-drawer-content")).not.toBeVisible();
    });

    test("returns focus to trigger button after closing", async ({ page }) => {
      await page.goto(STORY_URL(DEFAULT_STORY));
      await page.waitForLoadState("networkidle");

      const trigger = page.getByRole("button", { name: /open/i });
      await trigger.click();
      await page.keyboard.press("Escape");
      await expect(trigger).toBeFocused();
    });

    test("drawer title is visible when open", async ({ page }) => {
      await page.goto(STORY_URL(DEFAULT_STORY));
      await page.waitForLoadState("networkidle");

      await page.getByRole("button", { name: /open/i }).click();
      await expect(page.locator(".wim-drawer-title")).toBeVisible();
    });
  });

  test.describe("side variants", () => {
    test("Left drawer has left side class", async ({ page }) => {
      await page.goto(STORY_URL(LEFT_STORY));
      await page.waitForLoadState("networkidle");

      await page.getByRole("button", { name: /open/i }).click();
      await expect(page.locator(".wim-drawer-content--left")).toBeVisible();
    });

    test("Top drawer has top side class", async ({ page }) => {
      await page.goto(STORY_URL(TOP_STORY));
      await page.waitForLoadState("networkidle");

      await page.getByRole("button", { name: /open/i }).click();
      await expect(page.locator(".wim-drawer-content--top")).toBeVisible();
    });

    test("Bottom drawer has bottom side class", async ({ page }) => {
      await page.goto(STORY_URL(BOTTOM_STORY));
      await page.waitForLoadState("networkidle");

      await page.getByRole("button", { name: /open/i }).click();
      await expect(page.locator(".wim-drawer-content--bottom")).toBeVisible();
    });
  });
});
