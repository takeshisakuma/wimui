import { expect, userEvent, waitFor } from "storybook/test";

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
