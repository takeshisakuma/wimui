import { useMemo } from "react";
import type { DataGridColumn } from "./DataGrid";

export type FixedColumnInfo = { offset: number | string; zIndex: number };

function parsePixelWidth(width: string | number | undefined): number {
  if (typeof width === "number") return width;
  if (typeof width === "string" && width.endsWith("px"))
    return parseInt(width, 10);
  return 0;
}

export function useFixedColumns<T>(
  columns: DataGridColumn<T>[],
  selection: boolean,
): {
  fixedLeftOffsets: Record<string, FixedColumnInfo>;
  fixedRightOffsets: Record<string, FixedColumnInfo>;
} {
  return useMemo(() => {
    const fixedLeftOffsets: Record<string, FixedColumnInfo & { isLast?: boolean; isFirst?: boolean }> = {};
    let currentLeftOffset = selection ? 60 : 0;
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
  }, [columns, selection]);
}
