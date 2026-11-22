import { test, expect } from "@playwright/test";
import { waitForStoryReady } from "./story-ready";

const url = (id: string) => `/iframe.html?id=${id}&viewMode=story&globals=locale:en`;

// 狭い幅でハンバーガーから開いたメニューを、ハンバーガー（開くと閉じるボタンになる）で閉じられるか。
// Navbar.Menu はバーが面より上に残る。AppShell の Sidebar のドロワーは、暗幕ともども本文の枠
// （ヘッダーの下）から出るので、ヘッダーは覆われない。#1269 から #1272 までは暗幕がヘッダーも覆い、
// Sidebar だけ閉じ方が「暗幕を押す」になっていた（256px では押す場所も無かった）。
// Sidebar のドロワーでは、暗幕の帯が残ること（#1272）も確かめる
const STORIES = [
  "components-application-shell-navbar--default",
  "components-application-shell-navbar--with-mobile-menu",
  "components-application-shell-appshell--with-sidebar",
  "patterns-newsroom--default",
];
const WIDTHS = [256, 390];

for (const width of WIDTHS) {
  test.describe(`Mobile menu can be closed by pointer (${width}px)`, () => {
    test.use({ viewport: { width, height: 844 } });

    for (const id of STORIES) {
      test(`${id}: the opened menu can be closed`, async ({ page }) => {
        await page.goto(url(id));
        await waitForStoryReady(page);

        await page.getByRole("button", { name: "Open menu" }).first().click();
        const panel = page.locator('[role="dialog"], .wim-sidebar[class*="mobile-open"]').first();
        await expect(panel).toBeVisible();
        // 開くアニメーションが終わるのを待つ（面の位置が 2 回続けて同じになるまで）
        await expect
          .poll(async () => {
            const a = await panel.boundingBox();
            await page.waitForTimeout(100);
            const b = await panel.boundingBox();
            // 開き切った面は画面の中にある（上から出るものは y = 0、横から出るものは x = 0）
            return !!a && !!b && a.y === b.y && a.x === b.x && a.x >= 0 && a.y >= 0;
          })
          .toBe(true);

        // 引き金がその点で一番上にあるか（暗幕に覆われていないか）
        const toggle = page.getByRole("button", { name: "Close menu" }).first();
        const toggleOnTop = await toggle.evaluate((el) => {
          const r = el.getBoundingClientRect();
          const hit = document.elementFromPoint(r.left + r.width / 2, r.top + r.height / 2);
          return !!hit && (hit === el || el.contains(hit));
        });

        expect(toggleOnTop, "the toggle (now a close button) is covered by the overlay").toBe(true);

        if (id.includes("navbar") === false) {
          // Sidebar のドロワー: 右端の点が面の外か（暗幕の帯が残っているか）
          const box = await panel.boundingBox();
          expect(box, "panel box").not.toBeNull();
          expect(box!.x + box!.width, "the drawer covers the whole width, leaving no overlay strip").toBeLessThan(width - 8);
        }

        await toggle.click();
        await expect(page.locator('[role="dialog"], .wim-sidebar[class*="mobile-open"]')).toHaveCount(0);
      });
    }
  });
}
