type VisibleCountInput = {
  /** 各項目の幅。残す側の端から並べる（`collapseFrom="end"` なら先頭から） */
  itemWidths: number[];
  /** 「+N」の幅 */
  overflowWidth: number;
  /** 並びに使える幅 */
  available: number;
  gap: number;
  minVisibleItems: number;
  alwaysRenderOverflow: boolean;
};

// 小数の幅を足し合わせた誤差で、ちょうど収まる並びを 1 つ畳まないための遊び
const EPSILON = 0.5;

export type CollapseFrom = "start" | "end" | "middle";

/** `"middle"` のとき、畳まずに残す先頭の項目の数 */
export const pinnedCount = (collapseFrom: CollapseFrom, total: number) =>
  collapseFrom === "middle" ? Math.min(1, total) : 0;

/**
 * 見えている項目の数（`shown`）から、並べる順（項目の添字と「+N」の位置）と、畳んだ項目の添字を出す。
 * - `"end"`: 先頭から見せ、「+N」は末尾
 * - `"start"`: 末尾から見せ、「+N」は先頭
 * - `"middle"`: 先頭の 1 つを残し、2 つ目から畳む。「+N」は先頭のすぐ後ろ
 */
export const splitItems = (collapseFrom: CollapseFrom, total: number, shown: number) => {
  const pinned = pinnedCount(collapseFrom, total);
  // 残す先頭の項目は、数に関係なく見せる
  const count = Math.min(Math.max(shown, pinned), total);
  const hiddenCount = total - count;
  const range = (from: number, to: number) => Array.from({ length: Math.max(to - from, 0) }, (_, i) => from + i);
  if (collapseFrom === "end") {
    return { visible: range(0, count), hidden: range(count, total), overflowAt: count };
  }
  // 先頭から pinned 個のあと、hiddenCount 個を畳む（"start" は pinned = 0）
  return {
    visible: [...range(0, pinned), ...range(pinned + hiddenCount, total)],
    hidden: range(pinned, pinned + hiddenCount),
    overflowAt: pinned,
  };
};

/**
 * 収まる項目の数。バレルには載せない（OverflowList の中だけで使う計算）。
 */
export const getVisibleCount = ({
  itemWidths,
  overflowWidth,
  available,
  gap,
  minVisibleItems,
  alwaysRenderOverflow,
}: VisibleCountInput): number => {
  const count = itemWidths.length;
  const floor = Math.min(Math.max(minVisibleItems, 0), count);
  const sum = (widths: number[]) =>
    widths.reduce((total, width, index) => total + width + (index > 0 ? gap : 0), 0);

  if (!alwaysRenderOverflow && sum(itemWidths) <= available + EPSILON) return count;

  // 「+N」とその前の間隔を先に取っておき、残りに入るだけ並べる
  let used = overflowWidth;
  let visible = 0;
  for (const width of itemWidths) {
    const next = used + gap + width;
    if (next > available + EPSILON) break;
    used = next;
    visible += 1;
  }
  return Math.max(visible, floor);
};
