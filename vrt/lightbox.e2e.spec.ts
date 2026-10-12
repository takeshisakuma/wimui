import { test, expect } from "@playwright/test";

const OPEN_STORY = "/iframe.html?id=components-media-lightbox--open&viewMode=story&globals=locale:en";

test.describe("Lightbox", () => {
  // このストーリーは画像が 1 枚で、表示と同時に play が引き金を押す。以前は、引き金が古い一覧を見て
  // 同じ画像をもう 1 回登録し、1 枚なのに「前へ・次へ」が出た（本番のビルドでだけ起きる。開発サーバーでは
  // 再現しないので、静的ビルドで流す CI が見張る）。
  test("a single image opened right after mount is registered once (no previous / next)", async ({ page }) => {
    await page.goto(OPEN_STORY);
    const dialog = page.getByRole("dialog");
    await expect(dialog).toBeVisible();
    // 対照: 開いていて、画像は描かれている
    await expect(dialog.locator("img")).toHaveCount(1);
    await expect(page.getByRole("button", { name: "Next" })).toHaveCount(0);
    await expect(page.getByRole("button", { name: "Previous" })).toHaveCount(0);
  });
});
