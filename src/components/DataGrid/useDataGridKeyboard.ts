import React, { useState, useRef } from "react";
import type { DataGridColumn } from "./DataGrid";

export function useDataGridKeyboard<T>(
  columns: DataGridColumn<T>[],
  rows: T[],
  selection: boolean,
) {
  const [focusedCell, setFocusedCell] = useState<{ row: number; col: number }>(
    { row: -1, col: selection ? -1 : 0 },
  );
  const containerRef = useRef<HTMLDivElement>(null);

  const handleKeyDown = (e: React.KeyboardEvent) => {
    const { row, col } = focusedCell;
    let nextRow = row;
    let nextCol = col;

    const minCol = selection ? -1 : 0;
    const maxCol = columns.length - 1;
    const minRow = -1;
    const maxRow = rows.length - 1;

    switch (e.key) {
      case "ArrowRight":
        if (col < maxCol) nextCol++;
        break;
      case "ArrowLeft":
        if (col > minCol) nextCol--;
        break;
      case "ArrowDown":
        if (row < maxRow) nextRow++;
        break;
      case "ArrowUp":
        if (row > minRow) nextRow--;
        break;
      case "Home":
        if (e.ctrlKey) {
          nextRow = minRow;
          nextCol = minCol;
        } else {
          nextCol = minCol;
        }
        break;
      case "End":
        if (e.ctrlKey) {
          nextRow = maxRow;
          nextCol = maxCol;
        } else {
          nextCol = maxCol;
        }
        break;
      case "Enter":
      case " ": {
        const activeEl = document.activeElement as HTMLElement;
        if (activeEl?.getAttribute("role") === "columnheader") return;
        if (activeEl?.classList.contains("wim-table__cell")) {
          const innerInteractive = activeEl.querySelector(
            'input, button, [role="button"]',
          ) as HTMLElement;
          if (innerInteractive) {
            innerInteractive.click();
            e.preventDefault();
          }
        }
        return;
      }
      default:
        return;
    }

    if (nextRow !== row || nextCol !== col) {
      e.preventDefault();
      setFocusedCell({ row: nextRow, col: nextCol });
      setTimeout(() => {
        const target = containerRef.current?.querySelector(
          `[data-row="${nextRow}"][data-col="${nextCol}"]`,
        ) as HTMLElement;
        target?.focus();
      }, 0);
    }
  };

  return { focusedCell, setFocusedCell, containerRef, handleKeyDown };
}
