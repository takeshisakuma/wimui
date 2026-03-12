import { test, expect, type Page, type Locator } from "@playwright/test";

const STORY_URL = (id: string) =>
  `/iframe.html?id=${id}&viewMode=story&globals=locale:en`;

const DEFAULT_STORY = "components-advanced-inputs-signaturepad--default";
const DISABLED_STORY = "components-advanced-inputs-signaturepad--disabled";
const CUSTOM_COLORS_STORY =
  "components-advanced-inputs-signaturepad--custom-colors";

/** Draw a simple line on the canvas from (startX, startY) to (endX, endY). */
async function drawOnCanvas(
  page: Page,
  canvas: Locator,
  startX: number,
  startY: number,
  endX: number,
  endY: number,
) {
  const box = await canvas.boundingBox();
  if (!box) throw new Error("Could not get canvas bounding box");

  await page.mouse.move(box.x + startX, box.y + startY);
  await page.mouse.down();
  await page.mouse.move(box.x + endX, box.y + endY, { steps: 10 });
  await page.mouse.up();
}

test.describe("SignaturePad", () => {
  test.describe("initial state", () => {
    test("canvas is rendered", async ({ page }) => {
      await page.goto(STORY_URL(DEFAULT_STORY));
      const canvas = page.locator("canvas.wim-signature-pad__canvas");
      await expect(canvas).toBeVisible();
    });

    test("clear button is disabled when canvas is empty", async ({ page }) => {
      await page.goto(STORY_URL(DEFAULT_STORY));
      const clearButton = page.getByRole("button");
      await expect(clearButton).toBeDisabled();
    });
  });

  test.describe("drawing behavior", () => {
    test("clear button becomes enabled after drawing", async ({ page }) => {
      await page.goto(STORY_URL(DEFAULT_STORY));
      const canvas = page.locator("canvas.wim-signature-pad__canvas");
      const clearButton = page.getByRole("button");

      await expect(clearButton).toBeDisabled();
      await drawOnCanvas(page, canvas, 50, 50, 150, 100);
      await expect(clearButton).toBeEnabled();
    });

    test("canvas has non-empty pixel data after drawing", async ({ page }) => {
      await page.goto(STORY_URL(DEFAULT_STORY));
      const canvas = page.locator("canvas.wim-signature-pad__canvas");

      await drawOnCanvas(page, canvas, 50, 50, 200, 100);

      // Evaluate canvas pixel data to verify something was drawn
      const hasDrawnPixels = await page.evaluate(() => {
        const canvas = document.querySelector(
          "canvas.wim-signature-pad__canvas",
        ) as HTMLCanvasElement;
        const ctx = canvas.getContext("2d");
        if (!ctx) return false;
        const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
        // Check if any non-transparent pixel exists
        return imageData.data.some((value, index) => index % 4 === 3 && value > 0);
      });

      expect(hasDrawnPixels).toBe(true);
    });

    test("clicking clear button resets the canvas", async ({ page }) => {
      await page.goto(STORY_URL(DEFAULT_STORY));
      const canvas = page.locator("canvas.wim-signature-pad__canvas");
      const clearButton = page.getByRole("button");

      await drawOnCanvas(page, canvas, 50, 50, 150, 100);
      await expect(clearButton).toBeEnabled();

      await clearButton.click();
      await expect(clearButton).toBeDisabled();
    });

    test("canvas is transparent after clearing", async ({ page }) => {
      await page.goto(STORY_URL(DEFAULT_STORY));
      const canvas = page.locator("canvas.wim-signature-pad__canvas");
      const clearButton = page.getByRole("button");

      await drawOnCanvas(page, canvas, 50, 50, 150, 100);
      await clearButton.click();

      const isEmpty = await page.evaluate(() => {
        const canvas = document.querySelector(
          "canvas.wim-signature-pad__canvas",
        ) as HTMLCanvasElement;
        const ctx = canvas.getContext("2d");
        if (!ctx) return true;
        const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
        return imageData.data.every((value, index) => index % 4 !== 3 || value === 0);
      });

      expect(isEmpty).toBe(true);
    });

    test("pen color is applied when drawing", async ({ page }) => {
      await page.goto(STORY_URL(CUSTOM_COLORS_STORY));
      const canvas = page.locator("canvas.wim-signature-pad__canvas");

      await drawOnCanvas(page, canvas, 50, 80, 200, 80);

      // Verify red pixels exist (penColor is #ff4d4f in the custom colors story)
      const hasRedPixels = await page.evaluate(() => {
        const canvas = document.querySelector(
          "canvas.wim-signature-pad__canvas",
        ) as HTMLCanvasElement;
        const ctx = canvas.getContext("2d");
        if (!ctx) return false;
        const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
        for (let i = 0; i < imageData.data.length; i += 4) {
          const r = imageData.data[i];
          const g = imageData.data[i + 1];
          const a = imageData.data[i + 3];
          // #ff4d4f has high red, low green
          if (a > 0 && r > 200 && g < 100) return true;
        }
        return false;
      });

      expect(hasRedPixels).toBe(true);
    });
  });

  test.describe("disabled state", () => {
    test("clear button is disabled", async ({ page }) => {
      await page.goto(STORY_URL(DISABLED_STORY));
      const clearButton = page.getByRole("button");
      await expect(clearButton).toBeDisabled();
    });

    test("canvas remains empty after drawing attempt", async ({ page }) => {
      await page.goto(STORY_URL(DISABLED_STORY));
      const canvas = page.locator("canvas.wim-signature-pad__canvas");

      await drawOnCanvas(page, canvas, 50, 50, 150, 100);

      // Clear button stays disabled → canvas is still empty
      const clearButton = page.getByRole("button");
      await expect(clearButton).toBeDisabled();

      const isEmpty = await page.evaluate(() => {
        const canvas = document.querySelector(
          "canvas.wim-signature-pad__canvas",
        ) as HTMLCanvasElement;
        const ctx = canvas.getContext("2d");
        if (!ctx) return true;
        const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
        return imageData.data.every((value, index) => index % 4 !== 3 || value === 0);
      });

      expect(isEmpty).toBe(true);
    });
  });
});
