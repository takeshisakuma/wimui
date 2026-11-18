import { test, expect, type Page } from "@playwright/test";

/**
 * T408: ダイアログの中で開いた一覧・暦・メニュー・ダイアログに Escape を押したとき、閉じるのは一番上だけ。
 *
 * 以前は、閉じる部品がそれぞれ document で Escape を拾っていたので、先に開いていた外側のダイアログも
 * 同じ Escape で閉じた（Select・MultiSelect・Combobox・DatePicker・Dropdown・入れ子の Dialog の 6 つ）。
 * 入力中のフォームが、一覧を閉じようとしただけでダイアログごと消える。axe も単体テストも気づかない
 * （どの部品も、単体では正しく閉じる）ので、組んだ姿で Escape を押して確かめる。
 */
const URL = "/iframe.html?id=components-overlays-dialog--with-popups-inside&viewMode=story&globals=locale:en";

const outer = (page: Page) => page.getByRole("dialog", { name: "Edit “Design review”" });

test.describe("Dialog: Escape closes only the topmost layer", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(URL);
    await page.waitForLoadState("networkidle");
    await page.getByRole("button", { name: "Edit event" }).click();
    await expect(outer(page)).toBeVisible();
  });

  const INNERS: { name: string; open: (page: Page) => Promise<void>; isOpen: (page: Page) => ReturnType<Page["locator"]> }[] = [
    {
      name: "Select",
      open: async (page) => {
        await outer(page).getByRole("combobox", { name: "Repeat" }).click();
      },
      isOpen: (page) => page.getByRole("option", { name: "Every month" }),
    },
    {
      name: "MultiSelect",
      open: async (page) => {
        await outer(page).getByRole("combobox", { name: "Guests" }).click();
      },
      isOpen: (page) => page.getByRole("option", { name: "Yui Tanaka" }),
    },
    {
      name: "Combobox",
      open: async (page) => {
        await outer(page).getByRole("combobox", { name: "Room" }).focus();
        await page.keyboard.press("ArrowDown");
      },
      isOpen: (page) => page.getByRole("option", { name: "Cove (3F)" }),
    },
    {
      name: "DatePicker",
      open: async (page) => {
        await outer(page).locator(".wim-date-picker input").click();
      },
      isOpen: (page) => page.locator(".wim-calendar"),
    },
    {
      name: "Dropdown",
      open: async (page) => {
        await outer(page).getByRole("button", { name: "More actions" }).click();
      },
      isOpen: (page) => page.getByRole("menuitem", { name: "Duplicate" }),
    },
    {
      name: "nested Dialog",
      open: async (page) => {
        await outer(page).getByRole("button", { name: "Delete event…" }).click();
      },
      isOpen: (page) => page.getByRole("alertdialog", { name: "Delete “Design review”?" }),
    },
  ];

  for (const inner of INNERS) {
    test(`${inner.name}: the first Escape closes it and leaves the dialog open; the next one closes the dialog`, async ({ page }) => {
      await inner.open(page);
      await expect(inner.isOpen(page)).toBeVisible();

      await page.keyboard.press("Escape");
      await expect(inner.isOpen(page)).toBeHidden();
      // 閉じるアニメーションの間は、閉じかけの外側も「見えている」と数えられる。終わるのを待ってから見る
      // （待たずに見ると、直す前の MultiSelect と Combobox がすり抜けた）
      await page.evaluate(() => Promise.all(document.getAnimations().map((a) => a.finished.catch(() => undefined))));
      await page.waitForTimeout(300);
      await expect(outer(page)).toBeVisible();

      // 中が閉じたあとの Escape は、外側のダイアログを閉じる（中の部品が Escape を止め続けない）
      await page.keyboard.press("Escape");
      await expect(outer(page)).toBeHidden();
    });
  }
});
