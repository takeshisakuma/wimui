import { test, expect } from "@playwright/test";
import { waitForStoryReady } from "./story-ready";

// メニューの中にフォーカスがあるまま閉じると、面ごと消えてフォーカスが body へ落ちる（T301）。
// Dropdown と、Dropdown をそのまま使う SplitButton の両方で、閉じたあとの行き先を名指しで見る。
// 「引き金から外れた」「body ではない」だけでは、失ったのか次へ進んだのか区別できないので、
// Tab の行き先には番兵のボタンを足す。
const TARGETS = [
  { name: "Dropdown", id: "components-overlays-dropdown--basic" },
  { name: "SplitButton", id: "components-buttons-splitbutton--default" },
];

for (const { name, id } of TARGETS) {
  test.describe(name, () => {
    test.beforeEach(async ({ page }) => {
      await page.goto(`/iframe.html?id=${id}&viewMode=story&globals=locale:en`);
      await waitForStoryReady(page);
    });

    const openWithKeyboard = async (page: import("@playwright/test").Page) => {
      const trigger = page.locator('#storybook-root [aria-haspopup="menu"]').first();
      await trigger.focus();
      await page.keyboard.press("Enter");
      await expect(page.getByRole("menu")).toBeVisible();
      await expect(page.getByRole("menuitem").first()).toBeFocused();
      return trigger;
    };

    // ↓ でも開く（T303）。開いた直後の ↓ が、同じキー入力で 2 つ目まで進まないことも見る。
    test("ArrowDown on the trigger opens the menu on its first item", async ({ page }) => {
      const trigger = page.locator('#storybook-root [aria-haspopup="menu"]').first();
      await trigger.focus();
      await page.keyboard.press("ArrowDown");
      await expect(page.getByRole("menu")).toBeVisible();
      await expect(page.getByRole("menuitem").first()).toBeFocused();
    });

    test("Escape closes the menu and returns focus to the trigger", async ({ page }) => {
      const trigger = await openWithKeyboard(page);
      await page.keyboard.press("Escape");
      await expect(page.getByRole("menu")).toHaveCount(0);
      await expect(trigger).toBeFocused();
    });

    test("choosing an item with Enter closes the menu and returns focus to the trigger", async ({ page }) => {
      const trigger = await openWithKeyboard(page);
      await page.keyboard.press("Enter");
      await expect(page.getByRole("menu")).toHaveCount(0);
      await expect(trigger).toBeFocused();
    });

    test("Tab closes the menu and moves to the control after the trigger", async ({ page }) => {
      // 行き先を、引き金の直後に作る。メニューは body 直下のポータルにあるので、フォーカスを引き金へ
      // 戻さずに Tab が走ると、文書の末尾へ飛ぶ（この番兵には着かない）。
      await page.evaluate(() => {
        const trigger = document.querySelector('#storybook-root [aria-haspopup="menu"]');
        const root = trigger?.closest(".wim-dropdown") ?? trigger;
        const next = document.createElement("button");
        next.id = "after-trigger";
        next.textContent = "next";
        root?.parentElement?.insertBefore(next, root.nextSibling);
        const last = document.createElement("button");
        last.id = "end-of-document";
        last.textContent = "end";
        document.body.appendChild(last);
      });
      await openWithKeyboard(page);
      await page.keyboard.press("Tab");
      await expect(page.getByRole("menu")).toHaveCount(0);
      await expect(page.locator("#after-trigger")).toBeFocused();
    });
  });
}
