import { test, expect } from "@playwright/test";
import { waitForStoryReady } from "./story-ready";

// **モーダルの面（`aria-modal="true"`）から、Tab / Shift+Tab でフォーカスが外へ出ないか。**
//
// `FocusTrap` は「端の要素」に着いたときだけ折り返す。端の数え方が Tab の実際の停止点とずれると、
// 折り返しの条件に一度も当たらず、フォーカスが面の外へ出る。TreeSelect の開いたパネルがそうだった
// （2026-10-04・T300。末尾の `tabindex="-1"` のボタンが「最後の要素」として数えられていた）。
// 単体テスト（jsdom）は Tab の既定の動作を再現しないので、実ブラウザで押して確かめる。
//
// 面の前後に番兵のボタンを置く。番兵か body に着いたら「外へ出た」。
const STORIES = [
  "components-overlays-dialog--open",
  "components-overlays-drawer--open",
  "components-overlays-bottomsheet--open",
  "components-media-lightbox--open",
  "components-overlays-commandpalette--open",
  "components-pickers-sliders-datepicker--open",
  "components-pickers-sliders-daterangepicker--open",
  "components-advanced-inputs-treeselect--open",
];
const PRESSES = 20;

for (const id of STORIES) {
  for (const key of ["Tab", "Shift+Tab"]) {
    test(`${key} keeps focus inside the modal surface: ${id}`, async ({ page }) => {
      await page.goto(`/iframe.html?id=${id}&viewMode=story&globals=locale:en`);
      await waitForStoryReady(page);
      const dialog = page.locator('[role="dialog"][aria-modal="true"]');
      await expect(dialog).toBeVisible();
      // 開いた直後のフォーカスの移動（play・初期フォーカス）が済むのを待つ
      await expect
        .poll(() => page.evaluate(() => !!document.activeElement?.closest('[role="dialog"]')))
        .toBe(true);

      await page.evaluate(() => {
        const make = (sentinelId: string) => {
          const button = document.createElement("button");
          button.id = sentinelId;
          button.textContent = sentinelId;
          return button;
        };
        document.body.insertBefore(make("sentinel-before"), document.body.firstChild);
        document.body.appendChild(make("sentinel-after"));
      });

      const outside: string[] = [];
      for (let i = 0; i < PRESSES; i += 1) {
        await page.keyboard.press(key);
        const where = await page.evaluate(() => {
          const active = document.activeElement;
          if (!active || active === document.body) return "body";
          return active.closest('[role="dialog"]') ? "" : active.id || active.tagName.toLowerCase();
        });
        if (where) outside.push(`${i + 1} 回目: ${where}`);
      }
      expect(outside).toEqual([]);
    });
  }
}
