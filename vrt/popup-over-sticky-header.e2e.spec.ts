import { test, expect } from "@playwright/test";
import { waitForStoryReady } from "./story-ready";

const url = (id: string) => `/iframe.html?id=${id}&viewMode=story&globals=locale:en`;

// 開いた一覧が、同じ画面の表の固定見出しの下に潜っていた。
// - T429: Table の固定見出しが `--wim-z-overlay`（1000）に載っていて、同じ 1000 のその場に描く
//   一覧（Select）は、DOM で後ろにある見出しに負けた（Admin の IntakeQueue）
// - T430: Kanban の移動先の一覧が `z-index: 10` だった（ViewportFamily の監査画面）
// どちらも、全量測定（elementFromPoint）で見つけた。同じ測り方で、一覧の全項目が押せるかを見る。
// `stickyCover`: 一覧が表の見出しと重なるかは画面の配置しだいで、Kanban は今の配置では重ならない。
// 表の固定見出しが取りうるいちばん高い層（角のセル。--wim-z-sticky + 20）と同じ高さの覆いを、
// 一覧に重ねて置き、層の上下そのものを確かめる
const CASES = [
  { id: "patterns-admin--intake-queue-default", trigger: { role: "combobox" as const, name: "Origin" }, stickyCover: false },
  { id: "audit-viewportfamily--overview", trigger: { role: "button" as const, name: /Move/ }, stickyCover: true },
];

test.describe("Opened lists are not covered by a sticky table header (1280px)", () => {
  test.use({ viewport: { width: 1280, height: 720 } });

  for (const { id, trigger, stickyCover } of CASES) {
    test(`${id}: every option in the opened list can be clicked`, async ({ page }) => {
      await page.goto(url(id));
      await waitForStoryReady(page);

      const opener = page.getByRole(trigger.role, { name: trigger.name }).first();
      await opener.click();
      await expect(opener).toHaveAttribute("aria-expanded", "true");

      if (stickyCover) {
        await opener.evaluate((t) => {
          const id = t.getAttribute("aria-controls")?.split(" ")[0];
          const panel = id && document.getElementById(id);
          if (!panel) return;
          const r = panel.getBoundingClientRect();
          const cover = document.createElement("div");
          cover.style.cssText = `position:fixed;left:${r.left}px;top:${r.top}px;width:${r.width}px;height:${r.height}px;z-index:calc(var(--wim-z-sticky) + 20)`;
          document.body.appendChild(cover);
        });
      }

      // 面は、押した引き金の aria-controls から引く（画面にはほかにも開いた要素がある ── 監査の画面の
      // アコーディオンなど。最初に見つかった aria-expanded="true" を使うと、別の面を測る）
      const measure = () =>
        opener.evaluate((t) => {
          const id = t.getAttribute("aria-controls")?.split(" ")[0];
          const panel = (id && document.getElementById(id)) || null;
          if (!panel) return { checked: 0, covered: ["no panel"] };
          const covered: string[] = [];
          let checked = 0;
          for (const el of panel.querySelectorAll<HTMLElement>('[role="option"], [role="menuitem"], button')) {
            const r = el.getBoundingClientRect();
            if (r.width === 0 || r.height === 0 || r.bottom <= 0 || r.top >= window.innerHeight) continue;
            checked += 1;
            const hit = document.elementFromPoint(r.left + r.width / 2, r.top + r.height / 2);
            if (!hit || !(el === hit || el.contains(hit))) {
              covered.push(`"${(el.textContent ?? "").trim().slice(0, 20)}" by ${hit?.tagName.toLowerCase()}.${String(hit?.getAttribute("class") ?? "").split(" ")[0]} at ${Math.round(r.top)}px`);
            }
          }
          return { checked, covered };
        });

      // 開いた直後の約 150ms は、Kanban の一覧が後ろのカードの下に描かれる（移動ボタンの箱の不透明度が
      // 0 から 1 へ変わる途中で、重なりの文脈ができる）。覆われ続けるかを見たいので、覆われた項目が
      // 無くなるまで最大 2 秒待つ。見出しの下に潜り続ける欠陥は、待っても消えずに落ちる
      let result = await measure();
      await expect
        .poll(async () => {
          result = await measure();
          return result.covered;
        }, { timeout: 2_000 })
        .toEqual([]);

      // 対照: 項目を数えた。0 件なら何も確かめていない
      expect(result.checked).toBeGreaterThan(0);
      expect(result.covered, "options covered by another element").toEqual([]);
    });
  }
});
