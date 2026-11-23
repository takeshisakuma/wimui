import { test, expect } from "@playwright/test";
import { waitForStoryReady } from "./story-ready";

const url = (id: string) => `/iframe.html?id=${id}&viewMode=story&globals=locale:en`;

// 狭い幅でハンバーガーから開いたメニューの上端が、ヘッダーの下に入って押せなかった。形は 2 つ:
// - Navbar.Menu: バーは開いている間も面より上に残る（トグルが閉じるボタン）。面の上の余白（35px）が
//   バー（64px）より低く、先頭の項目がバーの下に入っていた
// - AppShell の sidebar の枠: z-index（90）が重なりの文脈を作り、中の Sidebar のドロワー（2000）が
//   ヘッダーの枠（100）の下に閉じ込められていた
// VRT は 1280px で撮るので、この幅の開いた姿は写らない。押せるかを Playwright の判定で確かめる。
const STORIES = [
  "components-application-shell-navbar--default",
  "components-application-shell-navbar--glass-effect",
  "components-application-shell-navbar--with-mobile-menu",
  "components-application-shell-navbar--centered-links",
  "components-application-shell-navbar--built-in-responsive",
  "components-application-shell-appshell--with-sidebar",
  "patterns-newsroom--default",
];

test.describe("Mobile menu opened from the header (390px)", () => {
  test.use({ viewport: { width: 390, height: 844 } });

  for (const id of STORIES) {
    test(`${id}: every item in the opened menu can be clicked`, async ({ page }) => {
      await page.goto(url(id));
      await waitForStoryReady(page);

      await page.getByRole("button", { name: "Open menu" }).first().click();
      // 開いた面: Navbar.Menu は Drawer（dialog）、AppShell は Sidebar のドロワー
      const panel = page.locator('[role="dialog"], .wim-sidebar[class*="mobile-open"]').first();
      await expect(panel).toBeVisible();

      // Navbar.MenuItem と Sidebar.Item は div なので、タグではなくクラスで拾う。
      // Sidebar.Header の見出しも入れる ── 上端の行がいちばん覆われやすい。
      // 判定は elementFromPoint（その点を押したら何に当たるか）。Playwright の trial click は
      // 「位置が落ち着かない」でも落ちるので、覆われているかの判定には使わない
      const measure = () =>
        panel.evaluate((root) => {
          const selector =
            'a, button, [role="treeitem"], [role="menuitem"], [class*="menuItem"], [class*="_item_"], [class*="_header_"]';
          const covered: string[] = [];
          let checked = 0;
          for (const el of root.querySelectorAll<HTMLElement>(selector)) {
            const r = el.getBoundingClientRect();
            if (r.width === 0 || r.height === 0 || r.bottom <= 0 || r.top >= window.innerHeight) continue;
            checked += 1;
            const hit = document.elementFromPoint(r.left + r.width / 2, r.top + r.height / 2);
            if (!hit || !(el === hit || el.contains(hit))) {
              covered.push(`"${(el.textContent ?? "").trim().slice(0, 16)}" at ${Math.round(r.top)}px`);
            }
          }
          const box = root.getBoundingClientRect();
          return { checked, covered, x: Math.round(box.x), y: Math.round(box.y) };
        });

      // 開き切って止まるまで測り直す: 項目を 1 件以上数え、面の位置が 100ms あけて 2 回同じ。
      // 以前は「位置が 2 回同じ」だけを待ってから 1 回測っていて、遅い CI で 1 回目だけ
      // 項目が 0 件になった（#1274 の E2E・GlassEffect。手元では CPU を 6 倍遅くしても再現せず、
      // 原因は確かめられていない）。項目が 0 件の間は待ち、覆われていれば従来どおり下で落ちる
      let result = await measure();
      await expect
        .poll(async () => {
          const a = await measure();
          await page.waitForTimeout(100);
          const b = await measure();
          result = b;
          return b.checked > 0 && a.x === b.x && a.y === b.y;
        })
        .toBe(true);

      // 対照: 項目を数えた。0 件なら何も確かめていない
      expect(result.checked).toBeGreaterThan(0);
      expect(result.covered, "items covered by another element").toEqual([]);
    });
  }
});
