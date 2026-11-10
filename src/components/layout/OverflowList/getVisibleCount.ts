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
