import { expect, fireEvent, userEvent, waitFor } from "storybook/test";

/**
 * 「開いた姿」をストーリーにするための play。
 *
 * 選択系・日付系・メニュー系の部品は `open` / `defaultOpen` を持たないものが多く、
 * カタログのストーリーは閉じた姿だけだった（2026-10-04 の点検: 開く引き金を持つ 27 部品のうち
 * 18 部品は、開いた姿が VRT にも a11y の CI にも 1 枚も写っていなかった）。開いたリストや
 * カレンダーの見た目を変えても何も赤くならない。
 *
 * 最初の「開く引き金」（`aria-haspopup` か `aria-expanded` を持つ要素）を押し、開いたことを
 * `aria-expanded="true"` で確かめる。play が例外を投げたら `vrt/play-functions.e2e.spec.ts` が落とす。
 */
export const openFirstPopup = async ({ canvasElement }: { canvasElement: HTMLElement }) => {
  const trigger = canvasElement.querySelector<HTMLElement>("[aria-haspopup], [aria-expanded]");
  await expect(trigger).not.toBeNull();
  if (!trigger) return;
  await userEvent.click(trigger);
  await waitFor(() => expect(trigger).toHaveAttribute("aria-expanded", "true"));
};

type OpenAction = "click" | "contextmenu";

/**
 * 引き金に `aria-haspopup` / `aria-expanded` を持たない部品用（ContextMenu / Tour / Lightbox /
 * CommandPalette）。`openFirstPopup` は属性で引き金を探すので、これらは拾えない。
 *
 * 引き金はキャンバスの中から、開いた面は `document` 全体から探す（Portal で body に出るものがある）。
 * 開いた面が出なければ例外を投げる（`vrt/play-functions.e2e.spec.ts` が落とす）── 閉じたままの姿を
 * 「開いた姿」として撮らないため。
 */
export const openWith =
  (action: OpenAction, triggerSelector: string, openedSelector: string) =>
  async ({ canvasElement }: { canvasElement: HTMLElement }) => {
    const trigger = canvasElement.querySelector<HTMLElement>(triggerSelector);
    await expect(trigger).not.toBeNull();
    if (!trigger) return;
    if (action === "click") await userEvent.click(trigger);
    else {
      // 座標を渡さないと (0, 0) になり、メニューが画面の隅に出る（キーボードで開いた扱いにもなる）。
      const rect = trigger.getBoundingClientRect();
      fireEvent.contextMenu(trigger, {
        clientX: Math.round(rect.left + rect.width / 2),
        clientY: Math.round(rect.top + rect.height / 2),
      });
    }
    await waitFor(() => expect(document.querySelector(openedSelector)).not.toBeNull(), { timeout: 3000 });
  };
