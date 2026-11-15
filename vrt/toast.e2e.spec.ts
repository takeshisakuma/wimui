import { test, expect } from "@playwright/test";

/**
 * T393: トーストは、読んでいる間・操作している間は消えないこと。
 *
 * 以前は、自動で消えるタイマーを止める口が無かった ── ポインターを載せたままでも、閉じるボタンに
 * フォーカスを置いたままでも既定の 3 秒で消え、フォーカスは文書（body）へ落ちた。単体テストは
 * 偽の時計で流すので、ここでは本物の時計とフォーカスで確かめる。
 */
const URL = "/iframe.html?id=components-alerts-notifications-toast--interactive&viewMode=story&globals=locale:en";

/** 既定の duration（3000ms）＋閉じる動きの分を、十分に過ぎる時間 */
const PAST_DURATION = 4500;

test.describe("Toast: the auto-close timer pauses while the toast is in use", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(URL);
    await page.waitForLoadState("networkidle");
    await page.locator("#storybook-root button").first().click();
    await expect(page.locator(".wim-toast")).toBeVisible();
  });

  test("closes by itself when left alone (the control for the tests below)", async ({ page }) => {
    await page.mouse.move(0, 0);
    await expect(page.locator(".wim-toast")).toHaveCount(0, { timeout: PAST_DURATION });
  });

  test("stays while focus is on its close button, and focus does not fall to the document", async ({ page }) => {
    const close = page.locator(".wim-toast").getByRole("button");
    await close.focus();
    await page.waitForTimeout(PAST_DURATION);

    await expect(page.locator(".wim-toast")).toBeVisible();
    await expect(close).toBeFocused();
  });

  test("stays while the pointer is over it, and closes after the pointer leaves", async ({ page }) => {
    await page.locator(".wim-toast").hover();
    await page.waitForTimeout(PAST_DURATION);
    await expect(page.locator(".wim-toast")).toBeVisible();

    await page.mouse.move(0, 0);
    await expect(page.locator(".wim-toast")).toHaveCount(0, { timeout: PAST_DURATION });
  });
});
