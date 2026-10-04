import { test, expect } from "@playwright/test";
import { waitForStoryReady } from "./story-ready";

const url = (id: string) => `/iframe.html?id=${id}&viewMode=story&globals=locale:en`;

// T316: カタログのエラーのストーリーは、利用者と AI がそのまま写す手本。エラー文（role="alert"）が
// 見えているのに、入力欄から辿れない組み方（Label ＋ Input ＋ 別に置いた FieldError）になっていた。
test.describe("error stories tie the message to the field", () => {
  for (const id of [
    "components-basic-inputs-input--danger",
    "components-basic-inputs-textarea--danger",
    "components-form-layout-fieldtemplate--with-error",
  ]) {
    test(id, async ({ page }) => {
      await page.goto(url(id));
      await waitForStoryReady(page);

      const field = page.locator("#storybook-root").locator("input, textarea").first();
      await expect(field).toHaveAttribute("aria-invalid", "true");

      const describedBy = await field.getAttribute("aria-describedby");
      expect(describedBy).toBeTruthy();
      // 指している先が実在して、見えているエラー文そのものであること
      const alert = page.locator("#storybook-root").getByRole("alert");
      await expect(alert).toHaveCount(1);
      const alertText = ((await alert.textContent()) ?? "").trim();
      expect(alertText.length).toBeGreaterThan(0);
      const described = await page.evaluate(
        (ids) =>
          ids
            .split(" ")
            .map((one) => document.getElementById(one)?.textContent?.trim() ?? "")
            .join(" "),
        describedBy!,
      );
      expect(described).toContain(alertText);
    });
  }
});
