import { test, expect } from "@playwright/test";

/**
 * T392: 入力欄の消去ボタンをキーボードで押したあと、フォーカスがその欄に残ること。
 *
 * 消去ボタンは、値が空になると描かれなくなる。以前は、フォーカスを置いたまま消えて、フォーカスが
 * 文書（body）へ落ちていた ── 次の Tab はページの先頭から始まり、いま消した欄を探し直すことになる。
 * 消去ボタンは InputBase が描くので、入力欄（Input）と、引き金を持つ選択系（Select）の 2 つの形で確かめる。
 */
const story = (id: string) => `/iframe.html?id=${id}&viewMode=story&globals=locale:en`;

test.describe("InputBase: focus stays in the field after the clear button removes itself", () => {
  test("Input: focus moves to the input", async ({ page }) => {
    await page.goto(story("components-basic-inputs-input--clearable"));
    await page.waitForLoadState("networkidle");

    const clear = page.getByRole("button", { name: "Clear input" });
    await clear.focus();
    await page.keyboard.press("Enter");

    await expect(clear).toHaveCount(0);
    const input = page.locator("#storybook-root input");
    await expect(input).toHaveValue("");
    await expect(input).toBeFocused();
  });

  test("Select: focus moves to the trigger, and the list stays closed", async ({ page }) => {
    await page.goto(story("components-selection-controls-select--with-clear-button"));
    await page.waitForLoadState("networkidle");

    const clear = page.getByRole("button", { name: "Clear input" });
    await clear.focus();
    await page.keyboard.press("Enter");

    await expect(clear).toHaveCount(0);
    const trigger = page.locator("#storybook-root [role='combobox']");
    await expect(trigger).toBeFocused();
    await expect(trigger).toHaveAttribute("aria-expanded", "false");
  });
});
