import { test, expect } from "@playwright/test";

const STORY_URL = (id: string) =>
  `/iframe.html?id=${id}&viewMode=story&globals=locale:en`;

const STORIES = [
  "components-data-structures-pivottable--default",
  "components-data-structures-pivottable--totals",
  "components-data-structures-pivottable--nested-columns",
  "components-data-structures-pivottable--collapsed",
];

test.describe("PivotTable", () => {
  test("exposes the rows in reading order, with row headings before their values", async ({ page }) => {
    await page.goto(STORY_URL(STORIES[0]));
    await page.waitForLoadState("networkidle");
    // アクセシビリティツリーは部分一致で比べる（先頭のグループと、その最初の明細行まで）
    await expect(page.getByRole("table")).toMatchAriaSnapshot(`
      - table "Units sold, January to June 2026":
        - caption: Units sold, January to June 2026
        - rowgroup:
          - row "Product Q1 Q2":
            - columnheader "Product"
            - columnheader "Q1"
            - columnheader "Q2"
          - row "Jan Feb Mar Apr May Jun":
            - columnheader "Jan"
            - columnheader "Feb"
            - columnheader "Mar"
            - columnheader "Apr"
            - columnheader "May"
            - columnheader "Jun"
        - rowgroup:
          - row "Drinks 2,430 2,261 2,613 2,672 3,035 3,172":
            - rowheader "Drinks":
              - button "Drinks" [expanded]
            - cell "2,430"
            - cell "2,261"
            - cell "2,613"
            - cell "2,672"
            - cell "3,035"
            - cell "3,172"
          - row "Drip coffee 1,284 1,192 1,347 1,301 1,226 1,158":
            - rowheader "Drip coffee"
            - cell "1,284"
    `);
  });

  // `headers` を、実装とは別の道具（描画後の位置）で確かめる。列の見出しは「そのセルの真上に
  // 掛かっている見出し」を上から順に、行の見出しは「同じ行の見出し」と「それより浅い字下げで
  // 直前にある行の見出し」を根から順に並べたものと一致するはず。
  for (const id of STORIES) {
    test(`every cell lists the headings it sits under, row path first (${id.split("--")[1]})`, async ({ page }) => {
      await page.goto(STORY_URL(id));
      await page.waitForLoadState("networkidle");
      const result = await page.evaluate(() => {
        const table = document.querySelector("table.wim-pivot-table")!;
        const text = (el: Element) => (el.textContent ?? "").trim();
        const columnHeaders = Array.from(table.querySelectorAll("thead th")).map((th) => ({
          th,
          box: th.getBoundingClientRect(),
        }));
        const bodyRows = Array.from(table.querySelectorAll("tbody tr, tfoot tr"));
        const indent = (th: Element) => parseFloat(getComputedStyle(th).paddingLeft);
        const mismatches: string[] = [];
        let cells = 0;
        bodyRows.forEach((tr, rowIndex) => {
          const own = tr.querySelector("th")!;
          // 祖先: 上へ遡り、字下げが今より浅い見出しを順に拾う（総計の行は tfoot なので祖先なし）
          const rowPath = [own];
          if (tr.parentElement!.tagName === "TBODY") {
            let depth = indent(own);
            for (let i = rowIndex - 1; i >= 0 && depth > indent(bodyRows[0].querySelector("th")!); i--) {
              const candidate = bodyRows[i].querySelector("th")!;
              if (indent(candidate) < depth) {
                rowPath.unshift(candidate);
                depth = indent(candidate);
              }
            }
          }
          Array.from(tr.querySelectorAll("td")).forEach((td) => {
            cells++;
            const box = td.getBoundingClientRect();
            const centre = box.left + box.width / 2;
            const columnPath = columnHeaders
              .filter(({ th, box: b }) => b.left <= centre && centre <= b.right && th.id.indexOf("corner") === -1)
              .sort((a, b) => a.box.top - b.box.top)
              .map(({ th }) => th);
            const expected = [...rowPath, ...columnPath].map(text).join(" > ");
            const actual = (td.getAttribute("headers") ?? "")
              .split(" ")
              .filter(Boolean)
              .map((ref) => {
                const el = document.getElementById(ref);
                return el ? text(el) : `(missing ${ref})`;
              })
              .join(" > ");
            if (expected !== actual) mismatches.push(`"${text(td)}": headers = ${actual} / layout = ${expected}`);
          });
        });
        return { cells, mismatches };
      });
      // 0 件のセルを照合して緑になるのを防ぐ
      expect(result.cells).toBeGreaterThan(10);
      expect(result.mismatches).toEqual([]);
    });
  }

  test("collapses and expands a row group from the keyboard, keeping focus on its button", async ({ page }) => {
    await page.goto(STORY_URL(STORIES[0]));
    await page.waitForLoadState("networkidle");
    const drinks = page.getByRole("button", { name: "Drinks" });
    await page.keyboard.press("Tab");
    await expect(drinks).toBeFocused();
    await page.keyboard.press("Enter");
    await expect(drinks).toHaveAttribute("aria-expanded", "false");
    await expect(page.getByRole("rowheader", { name: "Drip coffee" })).toHaveCount(0);
    // 小計の行は残る
    await expect(page.getByRole("row", { name: /^Drinks 2,430/ })).toBeVisible();
    await expect(drinks).toBeFocused();
    await page.keyboard.press("Space");
    await expect(drinks).toHaveAttribute("aria-expanded", "true");
    await expect(page.getByRole("rowheader", { name: "Drip coffee" })).toBeVisible();
  });
});
