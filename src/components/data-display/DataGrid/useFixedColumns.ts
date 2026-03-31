import { useMemo } from "react";
import type { DataGridColumn } from "./DataGrid";

type FixedColumnInfo = { offset: number | string; zIndex: number };

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
    const fixedLeftOffsets: Record<string, FixedColumnInfo> = {};
    let currentLeftOffset = selection ? 48 : 0;
    let currentLeftZIndex = 20;

    columns.forEach((col) => {
      if (col.fixed === true || col.fixed === "left") {
        fixedLeftOffsets[col.key] = {
          offset: currentLeftOffset === 0 ? 0 : `${currentLeftOffset}px`,
          zIndex: currentLeftZIndex--,
        };
        currentLeftOffset += parsePixelWidth(col.width);
      }
    });

    const fixedRightOffsets: Record<string, FixedColumnInfo> = {};
    let currentRightOffset = 0;
    let currentRightZIndex = 20;

    [...columns].reverse().forEach((col) => {
      if (col.fixed === "right") {
        fixedRightOffsets[col.key] = {
          offset: currentRightOffset === 0 ? 0 : `${currentRightOffset}px`,
          zIndex: currentRightZIndex--,
        };
        currentRightOffset += parsePixelWidth(col.width);
      }
    });

    return { fixedLeftOffsets, fixedRightOffsets };
  }, [columns, selection]);
}
