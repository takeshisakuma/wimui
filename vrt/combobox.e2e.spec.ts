import { test, expect } from "@playwright/test";

/**
 * T411: 項目をクリックで選んだあと、フォーカスが入力欄に残ること。
 *
 * 以前は、項目（フォーカスを受けない要素）を押した瞬間に入力欄からフォーカスが外れ、選んで一覧が
 * 閉じると、押した項目ごと消えてフォーカスが文書（body）へ落ちた。次の Tab が文書の先頭から始まる。
 * キーボード（↓ と Enter）で選ぶと入力欄に残るので、単体テストのキーの経路では見えなかった。
 */
const URL = "/iframe.html?id=components-selection-controls-combobox--default&viewMode=story&globals=locale:en";

test.describe("Combobox: choosing an option with the mouse", () => {
  test("keeps focus on the input after the click", async ({ page }) => {
    await page.goto(URL);
    await page.waitForLoadState("networkidle");
    const input = page.getByRole("combobox").first();
    await input.click();
    await page.keyboard.press("ArrowDown");
    const option = page.getByRole("option").nth(1);
    await expect(option).toBeVisible();
    const label = (await option.innerText()).trim();

    await option.click();

    await expect(input).toHaveValue(label);
    await expect(page.getByRole("listbox")).toBeHidden();
    await expect(input).toBeFocused();
  });
});
