import { useMemo } from "react";
import type { DataGridColumn } from "./DataGrid";

export type FixedColumnInfo = { offset: number | string; zIndex: number };

function parsePixelWidth(width: string | number | undefined): number {
  if (typeof width === "number") return width;
  if (typeof width === "string" && width.endsWith("px"))
    return parseInt(width, 10);
  return 0;
}

// 選択の列を測る前（初回の描画・ResizeObserver の無い環境）の見込み
const SELECTION_FALLBACK_WIDTH = 60;

/**
 * @param selectionWidth 選択の列の、測った幅（px）。選択の列は中身（チェックボックスと
 *   密度で変わる余白）の幅なので、決め打ちの値で積むと、横にスクロールしたときに
 *   左に固定した列とのあいだに隙間や重なりができる
 */
export function useFixedColumns<T>(
  columns: DataGridColumn<T>[],
  selection: boolean,
  selectionWidth?: number,
): {
  fixedLeftOffsets: Record<string, FixedColumnInfo>;
  fixedRightOffsets: Record<string, FixedColumnInfo>;
} {
  return useMemo(() => {
    const fixedLeftOffsets: Record<string, FixedColumnInfo & { isLast?: boolean; isFirst?: boolean }> = {};
    let currentLeftOffset = selection ? (selectionWidth ?? SELECTION_FALLBACK_WIDTH) : 0;
    let currentLeftZIndex = 100;

    const fixedLeft = columns.filter(col => col.fixed === "left");
    fixedLeft.forEach((col, index) => {
      fixedLeftOffsets[col.key] = {
        offset: currentLeftOffset === 0 ? 0 : `${currentLeftOffset}px`,
        zIndex: currentLeftZIndex--,
        isLast: index === fixedLeft.length - 1,
      } as FixedColumnInfo & { isLast: boolean };
      currentLeftOffset += parsePixelWidth(col.width);
    });

    const fixedRightOffsets: Record<string, FixedColumnInfo> = {};
    let currentRightOffset = 0;
    let currentRightZIndex = 100;

    const fixedRight = columns.filter(col => col.fixed === "right");
    fixedRight.reverse().forEach((col, index) => {
      fixedRightOffsets[col.key] = {
        offset: currentRightOffset === 0 ? 0 : `${currentRightOffset}px`,
        zIndex: currentRightZIndex--,
        isFirst: index === fixedRight.length - 1,
      } as FixedColumnInfo & { isFirst: boolean };
      currentRightOffset += parsePixelWidth(col.width);
    });

    return { fixedLeftOffsets, fixedRightOffsets };
  }, [columns, selection, selectionWidth]);
}
