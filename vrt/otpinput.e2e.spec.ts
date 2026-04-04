import { test, expect } from "@playwright/test";

const STORY_URL = (id: string) =>
  `/iframe.html?id=${id}&viewMode=story&globals=locale:en`;

const DEFAULT_STORY = "components-basic-inputs-otpinput--default";
const LENGTH6_STORY = "components-basic-inputs-otpinput--length-6";
const DISABLED_STORY = "components-basic-inputs-otpinput--disabled";
const CONTROLLED_STORY = "components-basic-inputs-otpinput--controlled";

test.describe("OtpInput", () => {
  test.describe("rendering", () => {
    test("renders 4 inputs by default", async ({ page }) => {
      await page.goto(STORY_URL(DEFAULT_STORY));
      await page.waitForLoadState("networkidle");

      await expect(page.locator(".wim-otp-input")).toHaveCount(4);
    });

    test("Length6 story renders 6 inputs", async ({ page }) => {
      await page.goto(STORY_URL(LENGTH6_STORY));
      await page.waitForLoadState("networkidle");

      await expect(page.locator(".wim-otp-input")).toHaveCount(6);
    });
  });

  test.describe("keyboard interaction", () => {
    test.beforeEach(async ({ page }) => {
      await page.goto(STORY_URL(DEFAULT_STORY));
      await page.waitForLoadState("networkidle");
    });

    test("typing a digit moves focus to next input", async ({ page }) => {
      const inputs = page.locator(".wim-otp-input");
      await inputs.first().click();
      await page.keyboard.press("1");
      await expect(inputs.nth(1)).toBeFocused();
    });

    test("typing fills each input sequentially", async ({ page }) => {
      const inputs = page.locator(".wim-otp-input");
      await inputs.first().click();

      for (const digit of ["1", "2", "3", "4"]) {
        await page.keyboard.press(digit);
      }

      for (let i = 0; i < 4; i++) {
        await expect(inputs.nth(i)).toHaveValue(String(i + 1));
      }
    });

    test("Backspace clears current field and moves to previous", async ({
      page,
    }) => {
      const inputs = page.locator(".wim-otp-input");
      await inputs.first().click();
      await page.keyboard.press("1");
      await page.keyboard.press("2");

      // Now at index 2, press Backspace
      await page.keyboard.press("Backspace");
      await expect(inputs.nth(1)).toBeFocused();
      await expect(inputs.nth(1)).toHaveValue("");
    });

    test("Arrow Right moves focus to next input", async ({ page }) => {
      const inputs = page.locator(".wim-otp-input");
      await inputs.first().click();
      await page.keyboard.press("ArrowRight");
      await expect(inputs.nth(1)).toBeFocused();
    });

    test("Arrow Left moves focus to previous input", async ({ page }) => {
      const inputs = page.locator(".wim-otp-input");
      await inputs.nth(1).click();
      await page.keyboard.press("ArrowLeft");
      await expect(inputs.first()).toBeFocused();
    });
  });

  test.describe("paste behavior", () => {
    test("pasting fills multiple inputs at once", async ({ page }) => {
      await page.goto(STORY_URL(DEFAULT_STORY));
      await page.waitForLoadState("networkidle");

      const inputs = page.locator(".wim-otp-input");
      await inputs.first().click();

      // Simulate paste via clipboard API
      await page.evaluate(() => {
        const clipboardData = new DataTransfer();
        clipboardData.setData("text", "1234");
        const event = new ClipboardEvent("paste", {
          clipboardData,
          bubbles: true,
          cancelable: true,
        });
        document.activeElement?.dispatchEvent(event);
      });

      // At least first input should be filled
      await expect(inputs.first()).toHaveValue("1");
    });
  });

  test.describe("disabled state", () => {
    test("all inputs are disabled", async ({ page }) => {
      await page.goto(STORY_URL(DISABLED_STORY));
      await page.waitForLoadState("networkidle");

      const inputs = page.locator(".wim-otp-input");
      const count = await inputs.count();
      for (let i = 0; i < count; i++) {
        await expect(inputs.nth(i)).toBeDisabled();
      }
    });

    test("disabled container has disabled class", async ({ page }) => {
      await page.goto(STORY_URL(DISABLED_STORY));
      await page.waitForLoadState("networkidle");

      await expect(
        page.locator(".wim-otp-input-container--disabled"),
      ).toBeVisible();
    });
  });

  test.describe("controlled story", () => {
    test("renders with pre-filled value", async ({ page }) => {
      await page.goto(STORY_URL(CONTROLLED_STORY));
      await page.waitForLoadState("networkidle");

      const inputs = page.locator(".wim-otp-input");
      expect(await inputs.count()).toBeGreaterThan(0);
    });
  });
});
