import { test, expect } from "@playwright/test";

const STORY_URL = (id: string) =>
  `/iframe.html?id=${id}&viewMode=story&globals=locale:en`;

const DEFAULT_STORY = "components-pickers-sliders-rangeslider--default";
const DISABLED_STORY = "components-pickers-sliders-rangeslider--disabled";
const STEP_STORY = "components-pickers-sliders-rangeslider--step";

test.describe("RangeSlider", () => {
  test.describe("keyboard navigation", () => {
    test("ArrowRight increases min handle value", async ({ page }) => {
      await page.goto(STORY_URL(DEFAULT_STORY));
      const thumbs = page.getByRole("slider");
      const minThumb = thumbs.first();

      await expect(minThumb).toHaveAttribute("aria-valuenow", "20");
      await minThumb.focus();
      await page.keyboard.press("ArrowRight");
      await expect(minThumb).toHaveAttribute("aria-valuenow", "21");
    });

    test("ArrowLeft decreases min handle value", async ({ page }) => {
      await page.goto(STORY_URL(DEFAULT_STORY));
      const minThumb = page.getByRole("slider").first();

      await expect(minThumb).toHaveAttribute("aria-valuenow", "20");
      await minThumb.focus();
      await page.keyboard.press("ArrowLeft");
      await expect(minThumb).toHaveAttribute("aria-valuenow", "19");
    });

    test("ArrowLeft decreases max handle value", async ({ page }) => {
      await page.goto(STORY_URL(DEFAULT_STORY));
      const maxThumb = page.getByRole("slider").last();

      await expect(maxThumb).toHaveAttribute("aria-valuenow", "80");
      await maxThumb.focus();
      await page.keyboard.press("ArrowLeft");
      await expect(maxThumb).toHaveAttribute("aria-valuenow", "79");
    });

    test("ArrowRight increases max handle value", async ({ page }) => {
      await page.goto(STORY_URL(DEFAULT_STORY));
      const maxThumb = page.getByRole("slider").last();

      await expect(maxThumb).toHaveAttribute("aria-valuenow", "80");
      await maxThumb.focus();
      await page.keyboard.press("ArrowRight");
      await expect(maxThumb).toHaveAttribute("aria-valuenow", "81");
    });

    test("Home key sets min handle to minimum value", async ({ page }) => {
      await page.goto(STORY_URL(DEFAULT_STORY));
      const minThumb = page.getByRole("slider").first();

      await minThumb.focus();
      await page.keyboard.press("Home");
      await expect(minThumb).toHaveAttribute("aria-valuenow", "0");
    });

    test("End key sets max handle to maximum value", async ({ page }) => {
      await page.goto(STORY_URL(DEFAULT_STORY));
      const maxThumb = page.getByRole("slider").last();

      await maxThumb.focus();
      await page.keyboard.press("End");
      await expect(maxThumb).toHaveAttribute("aria-valuenow", "100");
    });

    test("min handle cannot exceed max handle without allowCross", async ({
      page,
    }) => {
      await page.goto(STORY_URL(DEFAULT_STORY));
      const minThumb = page.getByRole("slider").first();

      await minThumb.focus();
      // End key tries to set min to 100, but max is at 80 → capped at 80
      await page.keyboard.press("End");
      await expect(minThumb).toHaveAttribute("aria-valuenow", "80");
    });

    test("max handle cannot go below min handle without allowCross", async ({
      page,
    }) => {
      await page.goto(STORY_URL(DEFAULT_STORY));
      const maxThumb = page.getByRole("slider").last();

      await maxThumb.focus();
      // Home key tries to set max to 0, but min is at 20 → capped at 20
      await page.keyboard.press("Home");
      await expect(maxThumb).toHaveAttribute("aria-valuenow", "20");
    });

    test("step is respected during keyboard navigation", async ({ page }) => {
      await page.goto(STORY_URL(STEP_STORY));
      const minThumb = page.getByRole("slider").first();

      const initialValue = await minThumb.getAttribute("aria-valuenow");
      await minThumb.focus();
      await page.keyboard.press("ArrowRight");
      const afterValue = await minThumb.getAttribute("aria-valuenow");
      expect(Number(afterValue) - Number(initialValue)).toBe(10);
    });
  });

  test.describe("drag behavior", () => {
    test("dragging min handle to the right increases its value", async ({
      page,
    }) => {
      await page.goto(STORY_URL(DEFAULT_STORY));
      const minThumb = page.getByRole("slider").first();

      await expect(minThumb).toHaveAttribute("aria-valuenow", "20");

      const box = await minThumb.boundingBox();
      if (!box) throw new Error("Could not get bounding box");

      const startX = box.x + box.width / 2;
      const startY = box.y + box.height / 2;

      await page.mouse.move(startX, startY);
      await page.mouse.down();
      await page.mouse.move(startX + 60, startY, { steps: 10 });
      await page.mouse.up();

      const valuenow = await minThumb.getAttribute("aria-valuenow");
      expect(Number(valuenow)).toBeGreaterThan(20);
    });

    test("dragging max handle to the left decreases its value", async ({
      page,
    }) => {
      await page.goto(STORY_URL(DEFAULT_STORY));
      const maxThumb = page.getByRole("slider").last();

      await expect(maxThumb).toHaveAttribute("aria-valuenow", "80");

      const box = await maxThumb.boundingBox();
      if (!box) throw new Error("Could not get bounding box");

      const startX = box.x + box.width / 2;
      const startY = box.y + box.height / 2;

      await page.mouse.move(startX, startY);
      await page.mouse.down();
      await page.mouse.move(startX - 60, startY, { steps: 10 });
      await page.mouse.up();

      const valuenow = await maxThumb.getAttribute("aria-valuenow");
      expect(Number(valuenow)).toBeLessThan(80);
    });

    test("clicking the track moves the nearest handle", async ({ page }) => {
      await page.goto(STORY_URL(DEFAULT_STORY));
      const thumbs = page.getByRole("slider");

      // Track is between 0%–100%. Click near the left end → moves min handle
      const track = page.locator(".wim-range-slider");
      const trackBox = await track.boundingBox();
      if (!trackBox) throw new Error("Could not get track bounding box");

      // Click at 5% of track width → should move min handle toward 5
      const clickX = trackBox.x + trackBox.width * 0.05;
      const clickY = trackBox.y + trackBox.height / 2;
      await page.mouse.click(clickX, clickY);

      const minValue = Number(await thumbs.first().getAttribute("aria-valuenow"));
      expect(minValue).toBeLessThan(20);
    });
  });

  test.describe("disabled state", () => {
    test("disabled handles do not respond to keyboard", async ({ page }) => {
      await page.goto(STORY_URL(DISABLED_STORY));
      const thumbs = page.getByRole("slider");
      const minThumb = thumbs.first();

      const initialValue = await minThumb.getAttribute("aria-valuenow");
      await minThumb.focus();
      await page.keyboard.press("ArrowRight");
      await expect(minThumb).toHaveAttribute("aria-valuenow", initialValue!);
    });

    test("disabled handles have aria-disabled attribute", async ({ page }) => {
      await page.goto(STORY_URL(DISABLED_STORY));
      const thumbs = page.getByRole("slider");
      for (const thumb of await thumbs.all()) {
        await expect(thumb).toHaveAttribute("aria-disabled", "true");
      }
    });
  });
});
