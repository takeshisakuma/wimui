import { test, expect } from "@playwright/test";

const STORY_URL = (id: string) =>
  `/iframe.html?id=${id}&viewMode=story&globals=locale:en`;

const STORIES = [
  "components-data-structures-pivottable--default",
  "components-data-structures-pivottable--totals",
  "components-data-structures-pivottable--nested-columns",
  "components-data-structures-pivottable--collapsed",
  "components-data-structures-pivottable--sticky-headers",
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

  test("keeps every heading level in view, stacked without a gap, while scrolling vertically", async ({ page }) => {
    await page.setViewportSize({ width: 1100, height: 700 });
    await page.goto(STORY_URL("components-data-structures-pivottable--sticky-headers"));
    await page.waitForLoadState("networkidle");
    const read = (scrollTop: number) =>
      page.evaluate((y) => {
        const table = document.querySelector("table.wim-pivot-table")!;
        const box = table.parentElement!;
        box.scrollTop = y;
        const boxTop = box.getBoundingClientRect().top;
        const levels = Array.from(table.querySelectorAll("thead tr")).map((tr) => {
          const rect = tr.querySelector("th:not([id$=corner])")!.getBoundingClientRect();
          return { top: rect.top - boxTop, bottom: rect.bottom - boxTop };
        });
        return { levels, max: box.scrollHeight - box.clientHeight };
      }, scrollTop);
    const { max } = await read(0);
    // 0 件のスクロール量で緑になるのを防ぐ（表が枠より高いこと）
    expect(max).toBeGreaterThan(100);
    const positions = new Set<string>();
    for (let y = 60; y <= max; y += 7) {
      const { levels } = await read(y);
      expect(levels.length).toBe(2);
      // 最上段は枠の上端に、次の段はその真下に（重なりも隙間も 1px 未満）
      expect(Math.abs(levels[0].top)).toBeLessThan(1);
      expect(Math.abs(levels[1].top - levels[0].bottom)).toBeLessThan(1);
      positions.add(levels.map((l) => l.top.toFixed(2)).join("/"));
    }
    // スクロール中、見出しは 1 画素も動かない
    expect([...positions]).toHaveLength(1);
  });

  test("pins the row headings on a wide screen and lets them scroll away on a narrow one", async ({ page }) => {
    const leftAfterScroll = async (width: number) => {
      await page.setViewportSize({ width, height: 700 });
      await page.goto(STORY_URL("components-data-structures-pivottable--sticky-headers"));
      await page.waitForLoadState("networkidle");
      return page.evaluate(() => {
        const table = document.querySelector("table.wim-pivot-table")!;
        const box = table.parentElement!;
        const before = table.querySelector("tbody th")!.getBoundingClientRect().left;
        box.scrollLeft = 80;
        return { moved: before - table.querySelector("tbody th")!.getBoundingClientRect().left, scrolled: box.scrollLeft };
      });
    };
    // 幅 800px: 表ははみ出し、見出しの列は半分以下 → 固定される
    const wide = await leftAfterScroll(800);
    expect(wide.scrolled).toBe(80);
    expect(wide.moved).toBe(0);
    // 幅 390px: 見出しの列が半分を超える → 一緒に流れる
    const narrow = await leftAfterScroll(390);
    expect(narrow.scrolled).toBe(80);
    expect(narrow.moved).toBe(80);
  });

  test("virtualized: renders a window of rows, keeps the scroll length and never points at a missing heading", async ({ page }) => {
    await page.setViewportSize({ width: 1280, height: 800 });
    await page.goto(STORY_URL("components-data-structures-pivottable--virtualized"));
    await page.waitForLoadState("networkidle");
    const read = (scrollTop: number | null) =>
      page.evaluate(async (y) => {
        const table = document.querySelector("table.wim-pivot-table")!;
        const box = table.parentElement!;
        if (y !== null) box.scrollTop = y;
        await new Promise((r) => requestAnimationFrame(() => requestAnimationFrame(r)));
        const rows = Array.from(table.querySelectorAll<HTMLElement>("tbody tr[data-row-index]"));
        const missing: string[] = [];
        table.querySelectorAll("[headers]").forEach((cell) => {
          for (const id of cell.getAttribute("headers")!.split(" ")) if (id && !document.getElementById(id)) missing.push(id);
        });
        // 見えている範囲（固定した見出しの下〜枠の下端）に、行が途切れなく描かれているか
        const headerBottom = Math.max(...Array.from(table.querySelectorAll("thead th")).map((th) => th.getBoundingClientRect().bottom));
        const boxBottom = box.getBoundingClientRect().bottom;
        const visible = rows.filter((tr) => tr.getBoundingClientRect().bottom > headerBottom && tr.getBoundingClientRect().top < boxBottom);
        return {
          rendered: rows.length,
          first: Number(rows[0].dataset.rowIndex),
          firstRowIndex: rows[0].getAttribute("aria-rowindex"),
          rowCount: table.getAttribute("aria-rowcount"),
          missing: missing.length,
          gapAbove: visible[0].getBoundingClientRect().top - headerBottom,
          scrollHeight: box.scrollHeight,
          max: box.scrollHeight - box.clientHeight,
        };
      }, scrollTop);

    const start = await read(null);
    // 992 行 ＋ 見出し 2 段 ＋ 総計
    expect(start.rowCount).toBe("995");
    expect(start.first).toBe(0);
    expect(start.firstRowIndex).toBe("3");
    expect(start.rendered).toBeLessThan(40);
    // 全行ぶんの長さがある（1 行 30px としても 992 行で約 3 万 px）
    expect(start.scrollHeight).toBeGreaterThan(30_000);

    for (const y of [1234, start.max / 2, start.max]) {
      const at = await read(y);
      expect(at.rendered).toBeLessThan(40);
      expect(at.missing).toBe(0);
      // 見出しのすぐ下に空白が見えていない
      expect(at.gapAbove).toBeLessThanOrEqual(0.5);
      expect(at.scrollHeight).toBe(start.scrollHeight);
      expect(at.first).toBeGreaterThan(0);
    }
  });

  test("virtualized: the focused row stays in the page after scrolling away", async ({ page }) => {
    await page.setViewportSize({ width: 1280, height: 800 });
    await page.goto(STORY_URL("components-data-structures-pivottable--virtualized"));
    await page.waitForLoadState("networkidle");
    const first = page.getByRole("button", { name: "Kichijoji" });
    await first.focus();
    await page.evaluate(async () => {
      const box = document.querySelector("table.wim-pivot-table")!.parentElement!;
      box.scrollTop = box.scrollHeight;
      await new Promise((r) => requestAnimationFrame(() => requestAnimationFrame(r)));
    });
    await expect(first).toBeFocused();
    // 末尾の行が描かれていて、祖先の名前を見出しの中に持つ
    await expect(page.getByRole("rowheader", { name: /^Kuramae,.*Jun 30$/ })).toBeVisible();
  });
});
