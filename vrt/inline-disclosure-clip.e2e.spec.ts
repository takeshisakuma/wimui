import { test, expect } from "@playwright/test";
import { waitForStoryReady } from "./story-ready";

const url = (id: string) => `/iframe.html?id=${id}&viewMode=story&globals=locale:en`;

// T432 の B 案: InlineDisclosure（Toolbar・AvatarGroup・Breadcrumb の畳んだ一覧）は、一覧を body へ出さない
// （ボタンのすぐ後ろに続く中身で、Tab の順・閉じる判定・読み上げの順を DOM の順が支えている）。
// 代わりに、外側の中身を切る箱の余白で開く向きを決める。以前は画面の余白だけを見ていて、箱の下端が
// 近くても下へ開き、一覧が箱で切れた。
//
// 箱は、引き金の上に余白があり、下にはほとんど余白が無いように作る（上へ開けば収まる配置）。
const CASES = [
  { name: "Toolbar", id: "components-layout-toolbar--collapsed" },
  { name: "AvatarGroup", id: "components-data-indicators-avatargroup--collapsed" },
  { name: "Breadcrumb", id: "components-navigation-elements-breadcrumb--collapsed" },
];

test.describe("InlineDisclosure opens towards the room inside a clipping box (1280px)", () => {
  test.use({ viewport: { width: 1280, height: 720 } });

  for (const { name, id } of CASES) {
    test(`${name}: every item in the opened list can be clicked`, async ({ page }) => {
      await page.goto(url(id));
      await waitForStoryReady(page);

      // 引き金は押す前に要素そのものを掴む（状態で引く locator は、開いた瞬間に別のボタンを指す）
      const trigger = (await page.locator('#storybook-root button[aria-expanded="false"]').first().elementHandle())!;
      // 箱: 上に 320px の余白、下端は引き金の下端から 8px
      await trigger.evaluate((t) => {
        const root = document.getElementById("storybook-root")!;
        const box = document.createElement("div");
        box.style.cssText = "position:relative;overflow:hidden;padding-top:320px";
        root.parentElement!.insertBefore(box, root);
        box.appendChild(root);
        const bottom = t.getBoundingClientRect().bottom + 8 - box.getBoundingClientRect().top;
        box.style.height = `${bottom}px`;
      });

      await trigger.click();
      await expect.poll(() => trigger.getAttribute("aria-expanded")).toBe("true");

      const result = await trigger.evaluate((t) => {
        const panel = document.getElementById(t.getAttribute("aria-controls") ?? "");
        if (!panel) return { side: null, checked: 0, covered: ["no panel"] };
        const covered: string[] = [];
        let checked = 0;
        for (const el of panel.querySelectorAll<HTMLElement>(":scope > li")) {
          const r = el.getBoundingClientRect();
          if (r.height < 2) continue;
          checked += 1;
          const hit = document.elementFromPoint(r.left + r.width / 2, r.top + r.height / 2);
          if (!hit || !(el === hit || el.contains(hit))) covered.push((el.textContent ?? "").trim().slice(0, 20));
        }
        return { side: panel.getAttribute("data-side"), checked, covered };
      });

      // 対照: 項目を数えた
      expect(result.checked).toBeGreaterThan(0);
      expect(result.side).toBe("top");
      expect(result.covered, "items clipped by the box").toEqual([]);
    });
  }
});
