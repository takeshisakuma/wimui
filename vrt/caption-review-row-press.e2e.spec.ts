import { test, expect } from "@playwright/test";
import { waitForStoryReady } from "./story-ready";

const URL = "/iframe.html?id=patterns-captions--caption-review&viewMode=story&globals=locale:en";

// T431: 押せる行の中の Popover を押すと、押下が行まで伝わり、変更履歴のパネルも開いていた。
// 説明の Popover はパネルの暗幕の下に隠れて読めない。Popover の面は body に描かれるが、
// React のイベントは面の中の押下も行へ伝えるので、面の中を押したときも確かめる
test.describe("CaptionReview: pressing inside a clickable row", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(URL);
    await waitForStoryReady(page);
  });

  const history = (page: import("@playwright/test").Page) => page.getByText("revision history");

  test("the flag opens only its popover, also when pressing inside the popover", async ({ page }) => {
    const flag = page.getByRole("button", { name: "reading rate" }).first();
    await flag.click();
    await expect(flag).toHaveAttribute("aria-expanded", "true");
    await expect(history(page)).toHaveCount(0);

    await page.getByRole("dialog").click();
    await expect(flag).toHaveAttribute("aria-expanded", "true");
    await expect(history(page)).toHaveCount(0);
  });

  test("pressing elsewhere in the row still opens the history panel", async ({ page }) => {
    const row = page.getByRole("button", { name: "reading rate" }).first().locator("xpath=ancestor::tr");
    await row.locator("td").first().click();
    await expect(history(page)).toBeVisible();
  });
});
