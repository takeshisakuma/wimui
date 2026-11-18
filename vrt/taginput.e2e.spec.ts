import { test, expect, type Page } from "@playwright/test";

/**
 * T409: 区切りを含む文字を貼り付けたとき、タグが分かれること。
 *
 * 以前は、打てばコンマで分かれるのに、貼り付けた「react, vue, svelte」は 1 つの値として入り、
 * Enter でコンマ入りの 1 つのタグになった。貼り付けは keydown を通らないので、キーの単体テストでは
 * 見えなかった。実物のブラウザで、DataTransfer を持たせた paste イベントを入力欄へ流して確かめる
 * （`otpinput.e2e.spec.ts` と同じ流し方）。
 */
const URL = "/iframe.html?id=components-advanced-inputs-taginput--default&viewMode=story&globals=locale:en";

const input = (page: Page) => page.locator(".wim-tag-input input");
/** 今あるタグの文字（削除ボタンの名前を除く） */
const tagTexts = (page: Page) =>
  page.locator(".wim-tag-input .wim-tag").evaluateAll((els) => els.map((el) => el.firstChild?.textContent?.trim() ?? el.textContent?.trim()));

const paste = (page: Page, text: string) =>
  input(page).evaluate((el, value) => {
    const data = new DataTransfer();
    data.setData("text", value);
    el.dispatchEvent(new ClipboardEvent("paste", { clipboardData: data, bubbles: true, cancelable: true }));
  }, text);

test.describe("TagInput: pasting separated text", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(URL);
    await page.waitForLoadState("networkidle");
    await expect(input(page)).toBeVisible();
  });

  test("a comma-separated paste becomes one tag per value", async ({ page }) => {
    const before = await page.locator(".wim-tag-input .wim-tag").count();
    await input(page).focus();
    await paste(page, "Vue, Svelte,\nSolid");
    await expect(page.locator(".wim-tag-input .wim-tag")).toHaveCount(before + 3);
    const texts = await tagTexts(page);
    expect(texts.slice(-3).map((t) => t?.replace(/\s+/g, " "))).toEqual(["Vue", "Svelte", "Solid"]);
    expect(texts.some((t) => t?.includes(","))).toBe(false);
    await expect(input(page)).toHaveValue("");
  });
});
