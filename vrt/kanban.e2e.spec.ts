import { test, expect, type Locator, type Page } from "@playwright/test";

/**
 * T379: マウスのドラッグができない人が、カードを動かせること。
 *
 * 以前は移動ボタンが `display: none` で、タッチ端末でしか出なかった ── キーボードの利用者には
 * カードを動かす手段が無かった。axe は検出しない（ボタンが無いことは違反ではない）ので、
 * 実際に Tab で届いて、動かして、フォーカスと告知を確かめる。
 */
const URL = "/iframe.html?id=components-data-structures-kanban--default&viewMode=story&globals=locale:en";

const column = (page: Page, name: string) => page.getByRole("group", { name, exact: true });

/** 祖先の opacity まで掛け合わせた、実際の見え方（隠しているのはボタンを包む要素） */
const shownOpacity = (locator: Locator) =>
  locator.evaluate((el) => {
    let o = 1;
    for (let n: Element | null = el; n; n = n.parentElement) o *= Number(getComputedStyle(n).opacity);
    return o;
  });

test.describe("Kanban: moving a card from the keyboard", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(URL);
    await page.waitForLoadState("networkidle");
    await expect(page.locator(".wim-kanban")).toBeVisible();
  });

  test("the move button is a Tab stop, appears on focus, and moves the card", async ({ page }) => {
    const todo = column(page, "To Do");
    const firstMove = todo.getByRole("button", { name: "Move card" }).first();

    // ふだんは見えない（ホバーもフォーカスも無い）
    await expect.poll(() => shownOpacity(firstMove)).toBe(0);

    // 1 つ目の停止点は盤（横スクロールの領域）、2 つ目が最初のカードの移動ボタン
    await page.keyboard.press("Tab");
    await page.keyboard.press("Tab");
    await expect(firstMove).toBeFocused();
    await expect.poll(() => shownOpacity(firstMove)).toBe(1);

    await page.keyboard.press("Enter");
    await expect(firstMove).toHaveAttribute("aria-expanded", "true");
    const menu = page.getByRole("group", { name: "Move to column" });
    await expect(menu).toBeVisible();

    // 盤は横スクロールの領域なので、中に絶対配置で開くと下端で切れていた（最後の「Done」が見えない）。
    // 切れていれば、その点にはメニューではなく盤の別の要素がある
    const lastOption = menu.getByRole("button", { name: "Done" });
    const onTop = await lastOption.evaluate((el) => {
      const r = el.getBoundingClientRect();
      return el.contains(document.elementFromPoint(r.left + r.width / 2, r.top + r.height / 2));
    });
    expect(onTop).toBe(true);

    // 移動先の最初は「In Progress」（今いる列は並ばない）
    await page.keyboard.press("Tab");
    await expect(menu.getByRole("button", { name: "In Progress" })).toBeFocused();
    await page.keyboard.press("Enter");

    // カードは移った先で作り直される。フォーカスは文書の先頭へ落ちず、移ったカードの移動ボタンにある
    const inProgress = column(page, "In Progress");
    await expect(inProgress.getByRole("listitem")).toHaveCount(2);
    await expect(todo.getByRole("listitem")).toHaveCount(1);
    await expect(inProgress.getByRole("button", { name: "Move card" }).last()).toBeFocused();

    // 移動先を告げる（フォーカスの読み上げと重ならないよう、遅れて入る）
    await expect(page.locator(".wim-kanban [role='status']")).toHaveText("Moved to In Progress");
  });

  test("Escape closes the menu and returns focus to the move button", async ({ page }) => {
    await page.keyboard.press("Tab");
    await page.keyboard.press("Tab");
    const firstMove = column(page, "To Do").getByRole("button", { name: "Move card" }).first();
    await expect(firstMove).toBeFocused();

    await page.keyboard.press("Enter");
    await page.keyboard.press("Tab");
    await page.keyboard.press("Escape");

    await expect(page.getByRole("group", { name: "Move to column" })).toHaveCount(0);
    await expect(firstMove).toBeFocused();
    await expect(firstMove).toHaveAttribute("aria-expanded", "false");
  });

  test("the focus ring of every move option stays inside the menu", async ({ page }) => {
    // 一覧は `overflow: hidden`。外側に描いた輪は切れて、左右が出ず、端の項目は上下の片方も出なかった
    // （実機で見つかった。閉じた姿しか測らない掃引には写らない）。輪の箱が、一覧の内側に収まること
    await page.keyboard.press("Tab");
    await page.keyboard.press("Tab");
    await page.keyboard.press("Enter");
    const menu = page.getByRole("group", { name: "Move to column" });
    await expect(menu).toBeVisible();

    const options = menu.getByRole("button");
    const count = await options.count();
    expect(count).toBeGreaterThanOrEqual(3);
    for (let i = 0; i < count; i += 1) {
      await page.keyboard.press("Tab");
      const option = options.nth(i);
      await expect(option).toBeFocused();
      const clipped = await option.evaluate((el) => {
        const cs = getComputedStyle(el);
        const reach = parseFloat(cs.outlineWidth) + parseFloat(cs.outlineOffset);
        const r = el.getBoundingClientRect();
        const list = el.parentElement as HTMLElement;
        const b = list.getBoundingClientRect();
        // 切り取るのは padding box（枠の内側）
        const inner = {
          left: b.left + list.clientLeft,
          top: b.top + list.clientTop,
          right: b.left + list.clientLeft + list.clientWidth,
          bottom: b.top + list.clientTop + list.clientHeight,
        };
        return {
          drawn: cs.outlineStyle !== "none" && parseFloat(cs.outlineWidth) > 0,
          left: r.left - reach < inner.left - 0.5,
          top: r.top - reach < inner.top - 0.5,
          right: r.right + reach > inner.right + 0.5,
          bottom: r.bottom + reach > inner.bottom + 0.5,
        };
      });
      expect(clipped, `option ${i}`).toEqual({ drawn: true, left: false, top: false, right: false, bottom: false });
    }
  });

  test("hovering a card shows its move button for mouse users who cannot drag", async ({ page }) => {
    const card = column(page, "To Do").getByRole("listitem").first();
    const move = card.getByRole("button", { name: "Move card" });
    await expect.poll(() => shownOpacity(move)).toBe(0);
    await card.hover();
    await expect.poll(() => shownOpacity(move)).toBe(1);

    // 角のボタンはカードの高さを変えない（ホバーで盤が揺れない）
    const before = await card.boundingBox();
    await page.mouse.move(0, 0);
    const after = await card.boundingBox();
    expect(after?.height).toBe(before?.height);
  });
});
