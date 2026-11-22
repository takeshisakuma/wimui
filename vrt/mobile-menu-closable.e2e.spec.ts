import { test, expect } from "@playwright/test";
import { waitForStoryReady } from "./story-ready";

const url = (id: string) => `/iframe.html?id=${id}&viewMode=story&globals=locale:en`;

// 狭い幅でハンバーガーから開いたメニューを、指で閉じられるか。
// #1269 で Sidebar のドロワーの暗幕がヘッダーも覆うようになり、閉じる手段は暗幕を押すことだけになった。
// 256px の画面では 260px のドロワーが画面を覆い、押す場所が無くなっていた（引き金は暗幕の下）。
// 閉じ方は部品で違うので、どちらかで閉じられれば通す:
// - 引き金が押せるなら引き金（Navbar.Menu: バーが面より上に残り、トグルが閉じるボタンになる）
// - 押せないなら画面の右端（Sidebar: 暗幕の帯）
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

        if (toggleOnTop) {
          await toggle.click();
        } else {
          // 右端の点が面の外か（暗幕の帯が残っているか）。面が画面を覆っていれば、押す場所が無い
          const edge = { x: width - 8, y: 844 / 2 };
          const box = await panel.boundingBox();
          expect(box, "panel box").not.toBeNull();
          expect(box!.x + box!.width, "the menu covers the whole width, leaving nothing to tap").toBeLessThan(edge.x);
          await page.mouse.click(edge.x, edge.y);
        }

        await expect(page.locator('[role="dialog"], .wim-sidebar[class*="mobile-open"]')).toHaveCount(0);
      });
    }
  });
}
