import { test, expect, type Page } from "@playwright/test";
import { waitForStoryReady } from "./story-ready";

const url = (id: string) => `/iframe.html?id=${id}&viewMode=story&globals=locale:en`;

// T432: Select の一覧は引き金の隣に描いていて、外側の overflow の箱（スクロールする Dialog の本文・
// カード）で切れた（Playground のタイムゾーンで UTC が半分隠れた）。いまは body の影の箱に描く。
// body へ出しても変わってはいけないもの（Tab の行き先・Dialog の中での選択）も確かめる。

const optionsCovered = (page: Page) =>
  page.evaluate(() => {
    const t = [...document.querySelectorAll('[aria-expanded="true"]')].pop();
    const list = t && document.getElementById(t.getAttribute("aria-controls") ?? "");
    if (!list) return { checked: 0, covered: ["no list"] };
    const covered: string[] = [];
    let checked = 0;
    for (const el of list.querySelectorAll<HTMLElement>('[role="option"]')) {
      const r = el.getBoundingClientRect();
      if (r.height < 2 || r.bottom <= 0 || r.top >= window.innerHeight) continue;
      // 一覧の中のスクロールで隠れている項目は数えない（ModelSelector の一覧は高さに上限があってスクロールする）。
      // 一覧から上へ、影の箱に着くまでのスクロール・切り取りの箱の内側に、中心があるかを見る
      const cx = r.left + r.width / 2;
      const cy = r.top + r.height / 2;
      let hidden = false;
      for (let p = el.parentElement; p && p !== document.body; p = p.parentElement) {
        const s = getComputedStyle(p);
        if (/(auto|scroll|hidden)/.test(s.overflowY + s.overflowX)) {
          const b = p.getBoundingClientRect();
          if (cx < b.left || cx >= b.right || cy < b.top || cy >= b.bottom) hidden = true;
        }
        if (p === list) break;
      }
      if (hidden) continue;
      checked += 1;
      const hit = document.elementFromPoint(r.left + r.width / 2, r.top + r.height / 2);
      if (!hit || !(el === hit || el.contains(hit))) covered.push((el.textContent ?? "").trim().slice(0, 20));
    }
    return { checked, covered };
  });

test.describe("Select list is drawn outside clipping boxes (1280px)", () => {
  test.use({ viewport: { width: 1280, height: 720 } });

  test("Playground: every timezone option can be clicked", async ({ page }) => {
    await page.goto(url("patterns-playground--default"));
    await waitForStoryReady(page);
    // 引き金はラベルの名前で引く（状態や表示中の値で引くと、開いた・選んだあとに見失う）
    const trigger = page.getByRole("combobox", { name: "Digest timezone" });
    await trigger.click();
    await expect(trigger).toHaveAttribute("aria-expanded", "true");

    const result = await optionsCovered(page);
    // 対照: 選択肢を数えた
    expect(result.checked).toBeGreaterThan(0);
    expect(result.covered, "options clipped or covered").toEqual([]);
  });

  test("Dialog: choosing an option keeps the dialog open and updates the value", async ({ page }) => {
    await page.goto(url("components-overlays-dialog--with-popups-inside"));
    await waitForStoryReady(page);
    await page.locator("button:visible").first().click();
    const dialog = page.locator('[role="dialog"]').last();
    await expect(dialog).toBeVisible();

    const trigger = dialog.getByRole("combobox", { name: "Repeat" });
    await expect(trigger).toHaveText(/Every week/);
    await trigger.click();
    await expect(trigger).toHaveAttribute("aria-expanded", "true");
    await page.getByRole("option", { name: "Does not repeat" }).click();

    await expect(dialog).toBeVisible();
    await expect(trigger).toHaveText(/Does not repeat/);
  });
});

test.describe("MultiSelect list is drawn outside clipping boxes (1280px)", () => {
  test.use({ viewport: { width: 1280, height: 720 } });

  // 全量測定（#1274）で見つけた形: Dialog の本文（overflow: auto）の下端で一覧が切れ、4 項目のうち 2 つしか見えなかった
  test("Dialog: every guest option can be clicked", async ({ page }) => {
    await page.goto(url("components-overlays-dialog--with-popups-inside"));
    await waitForStoryReady(page);
    await page.locator("button:visible").first().click();
    const dialog = page.locator('[role="dialog"]').last();
    await expect(dialog).toBeVisible();

    const trigger = dialog.getByRole("combobox", { name: "Guests" });
    await trigger.click();
    await expect(trigger).toHaveAttribute("aria-expanded", "true");

    const result = await optionsCovered(page);
    // 対照: 選択肢を数えた
    expect(result.checked).toBeGreaterThan(2);
    expect(result.covered, "options clipped or covered").toEqual([]);
  });
});

// 切れる画面がストーリーに無い部品は、全量測定（#1274）と同じく、ストーリーを overflow: hidden の箱で
// 包んで確かめる（箱の高さは中身のまま。一覧は箱の外へはみ出す位置に開く）
const CLIPPED_IN_BOX = [
  { name: "ModelSelector", id: "components-ai-modelselector--default" },
  { name: "Cascader", id: "components-advanced-inputs-cascader--default" },
];

test.describe("Lists are drawn outside an overflow: hidden box (1280px)", () => {
  test.use({ viewport: { width: 1280, height: 720 } });

  for (const { name, id } of CLIPPED_IN_BOX) {
    test(`${name}: every option can be clicked when the story sits in a clipping box`, async ({ page }) => {
      await page.goto(url(id));
      await waitForStoryReady(page);
      await page.evaluate(() => {
        const root = document.getElementById("storybook-root")!;
        const box = document.createElement("div");
        box.style.cssText = "position:relative;overflow:hidden;padding:16px";
        root.parentElement!.insertBefore(box, root);
        box.appendChild(root);
      });
      await page.locator("#storybook-root [aria-haspopup], #storybook-root [role=combobox]").first().click();

      const result = await optionsCovered(page);
      // 対照: 選択肢を数えた
      expect(result.checked).toBeGreaterThan(0);
      expect(result.covered, "options clipped or covered").toEqual([]);
    });
  }
});

test.describe("Select keeps the Tab order when its list is in the body", () => {
  test.use({ viewport: { width: 1280, height: 720 } });

  for (const { key, expected } of [
    { key: "Tab", expected: "AFTER" },
    { key: "Shift+Tab", expected: "trigger" },
  ]) {
    test(`${key} from the search field goes to ${expected}`, async ({ page }) => {
      await page.goto(url("components-selection-controls-select--searchable"));
      await waitForStoryReady(page);
      // 前後に停止点を置く（ストーリーには Select しか無い）
      await page.evaluate(() => {
        const root = document.getElementById("storybook-root")!;
        const before = document.createElement("button");
        before.textContent = "BEFORE";
        root.prepend(before);
        const after = document.createElement("button");
        after.textContent = "AFTER";
        root.append(after);
      });

      const trigger = page.getByRole("combobox").first();
      await trigger.focus();
      await page.keyboard.press("Enter");
      // 対照: 検索欄（body 側）にフォーカスが入った
      await expect
        .poll(() => page.evaluate(() => document.activeElement?.tagName === "INPUT" && !document.getElementById("storybook-root")!.contains(document.activeElement)))
        .toBe(true);

      await page.keyboard.press(key);
      if (expected === "trigger") await expect(trigger).toBeFocused();
      else await expect(page.getByRole("button", { name: expected })).toBeFocused();
      await expect(trigger).toHaveAttribute("aria-expanded", "false");
    });
  }
});
