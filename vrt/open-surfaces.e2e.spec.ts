import { test, expect, type Page } from "@playwright/test";
import { waitForStoryReady } from "./story-ready";

const url = (id: string, theme: string) =>
  `/iframe.html?id=${id}&viewMode=story&globals=theme:${theme};locale:en`;

// T320: 開いた面（リスト・メニュー・カレンダー）の枠・角丸・影が、部品で 2 通りあった。
// Select / MultiSelect / PhoneInput は枠が `--wim-color-line`（入力欄の線）で、dark でだけ明るく
// （rgb(182,182,182) と rgb(100,100,100)）、選択系と日付系の 7 部品は角丸が `--wim-radius-component`（4px）、
// ModelSelector は影が `--wim-shadow-md` だった。開いた面は引き金が入力欄でもパネルの側なので、
// 枠は `--wim-color-border`、角丸は `--wim-radius-overlay`、影は `--wim-shadow-overlay` に揃える。
//
// 面は「開いた中身（role）を含み、影と枠を持つ、いちばん内側の箱」で見つける。
// 開く部品を足したら、`Open` のストーリーをここへ足す。
const OPEN_STORIES = [
  "components-selection-controls-select--open",
  "components-selection-controls-multiselect--open",
  "components-selection-controls-combobox--open",
  "components-basic-inputs-phoneinput--open",
  "components-ai-modelselector--open",
  "components-pickers-sliders-datepicker--open",
  "components-pickers-sliders-daterangepicker--open",
  "components-advanced-inputs-cascader--open",
  "components-advanced-inputs-treeselect--open",
  "components-buttons-splitbutton--open",
  "components-navigation-elements-menubar--open",
  "components-overlays-contextmenu--open",
  "components-alerts-notifications-popconfirm--open",
];

type Surface = { borderColor: string; radius: string; shadow: string };

const readSurfaces = (page: Page) =>
  page.evaluate(() => {
    const CONTENT =
      '[role="listbox"],[role="menu"],[role="tree"],[role="grid"],[role="dialog"],[role="alertdialog"],[role="option"],[role="menuitem"]';
    const probe = document.createElement("div");
    probe.style.cssText =
      "position:absolute;border:1px solid var(--wim-color-border);border-radius:var(--wim-radius-overlay);box-shadow:var(--wim-shadow-overlay)";
    document.body.appendChild(probe);
    const read = (el: Element) => {
      const cs = getComputedStyle(el);
      return {
        borderColor: cs.borderTopColor,
        radius: cs.borderTopLeftRadius,
        shadow: cs.boxShadow,
      };
    };
    const expected = read(probe);
    probe.remove();

    const candidates = Array.from(document.body.querySelectorAll("*")).filter((el) => {
      const cs = getComputedStyle(el);
      const rect = el.getBoundingClientRect();
      return (
        rect.width > 0 &&
        rect.height > 0 &&
        cs.boxShadow !== "none" &&
        parseFloat(cs.borderTopWidth) > 0 &&
        (el.matches(CONTENT) || el.querySelector(CONTENT) !== null)
      );
    });
    const innermost = candidates.filter(
      (el) => !candidates.some((other) => other !== el && el.contains(other)),
    );
    return { expected, found: innermost.map(read) };
  });

for (const theme of ["light", "dark"]) {
  test.describe(`open surfaces (${theme})`, () => {
    test("every opened surface uses the panel border, the overlay radius and the overlay shadow", async ({
      page,
    }) => {
      // 1 本で 13 ストーリーを開く
      test.setTimeout(240_000);
      const measured: Record<string, Surface[]> = {};
      let expected: Surface | undefined;
      for (const id of OPEN_STORIES) {
        await page.goto(url(id, theme));
        await waitForStoryReady(page);
        // 開くのは play か、開いた状態の prop。面が出るまで待つ（出なければ空のまま落とす）
        await expect
          .poll(async () => (await readSurfaces(page)).found.length, { timeout: 15_000 })
          .toBeGreaterThan(0)
          .catch(() => undefined);
        const result = await readSurfaces(page);
        expected = result.expected;
        measured[id] = result.found;
      }
      // 見本が読めていること（トークンが解決できないと、全部が「同じ」で通ってしまう）
      expect(expected?.radius).toBe("8px");
      expect(expected?.shadow).not.toBe("none");
      const want = Object.fromEntries(OPEN_STORIES.map((id) => [id, [expected]]));
      const got = Object.fromEntries(
        OPEN_STORIES.map((id) => [id, measured[id].length > 0 ? measured[id] : "no surface found"]),
      );
      // 面が 2 つ以上見つかる部品（Menubar の入れ子など）は、全部が同じであること
      for (const id of OPEN_STORIES) {
        if (Array.isArray(got[id])) {
          want[id] = (got[id] as Surface[]).map(() => expected);
        }
      }
      expect(got).toEqual(want);
    });
  });
}
