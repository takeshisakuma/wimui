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
export type CollapseFrom = "start" | "end" | "middle";
/** `"middle"` のとき、畳まずに残す先頭の項目の数 */
export declare const pinnedCount: (collapseFrom: CollapseFrom, total: number) => number;
/**
 * 見えている項目の数（`shown`）から、並べる順（項目の添字と「+N」の位置）と、畳んだ項目の添字を出す。
 * - `"end"`: 先頭から見せ、「+N」は末尾
 * - `"start"`: 末尾から見せ、「+N」は先頭
 * - `"middle"`: 先頭の 1 つを残し、2 つ目から畳む。「+N」は先頭のすぐ後ろ
 */
export declare const splitItems: (collapseFrom: CollapseFrom, total: number, shown: number) => {
    visible: number[];
    hidden: number[];
    overflowAt: number;
};
/**
 * 収まる項目の数。バレルには載せない（OverflowList の中だけで使う計算）。
 */
export declare const getVisibleCount: ({ itemWidths, overflowWidth, available, gap, minVisibleItems, alwaysRenderOverflow, }: VisibleCountInput) => number;
export {};
