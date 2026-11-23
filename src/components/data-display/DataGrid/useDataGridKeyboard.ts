import React, { useState, useRef, useLayoutEffect } from "react";
import type { DataGridColumn } from "./DataGrid";

/** 1 回の PageUp / PageDown で動く行数。見えている行から、見出しに隠れる 1 行を引く */
const rowsPerPage = (cell: HTMLElement | null) => {
  const row = cell?.closest("tr");
  const rowHeight = row?.getBoundingClientRect().height ?? 0;
  if (!row || rowHeight === 0) return 10;
  let viewport = window.innerHeight;
  for (let el = row.parentElement; el; el = el.parentElement) {
    if (/auto|scroll/.test(getComputedStyle(el).overflowY) && el.scrollHeight > el.clientHeight) {
      viewport = el.clientHeight;
      break;
    }
  }
  return Math.max(1, Math.floor(viewport / rowHeight) - 1);
};

export function useDataGridKeyboard<T>(
  columns: DataGridColumn<T>[],
  rows: T[],
  selection: boolean,
) {
  const [focusedCell, setFocusedCell] = useState<{ row: number; col: number }>(
    { row: -1, col: selection ? -1 : 0 },
  );
  const containerRef = useRef<HTMLTableElement>(null);
  // 矢印で移ったあと、フォーカスを移す先。状態が描画に反映された直後に移す（T420）。
  // 以前は setTimeout(0) で後から移していて、キーを続けて押すと、あとのキー（Tab など）より
  // 後にフォーカスが動き、Tab で入ったセルの中のボタンからセルへ引き戻されることがあった
  const pendingFocus = useRef(false);

  useLayoutEffect(() => {
    if (!pendingFocus.current) return;
    pendingFocus.current = false;
    const target = containerRef.current?.querySelector(
      `[data-row="${focusedCell.row}"][data-col="${focusedCell.col}"]`,
    ) as HTMLElement | null;
    target?.focus();
  }, [focusedCell]);

  const handleKeyDown = (e: React.KeyboardEvent) => {
    // いまのセルは、キーを受けた要素の祖先のセルから読む。状態は描画が追いつく前だと 1 つ前のまま
    const cell = (e.target as HTMLElement).closest<HTMLElement>("[data-row]");
    const row = cell ? Number(cell.dataset.row) : focusedCell.row;
    const col = cell ? Number(cell.dataset.col) : focusedCell.col;
    let nextRow = row;
    let nextCol = col;

    const minCol = selection ? -1 : 0;
    const maxCol = columns.length - 1;
    const minRow = -1;
    const maxRow = rows.length - 1;
    // セルの中の入力欄では、全選択・空白・ページ送りはその欄のもの
    const editing = (e.target as HTMLElement).matches(
      'input:not([type="checkbox"]):not([type="radio"]),textarea,select,[contenteditable="true"]',
    );

    if (selection && !editing) {
      const all = (e.ctrlKey || e.metaKey) && !e.shiftKey && !e.altKey && e.key.toLowerCase() === "a";
      if (all || (e.key === " " && e.shiftKey && row >= 0)) {
        const box = containerRef.current?.querySelector<HTMLInputElement>(
          `[data-row="${all ? -1 : row}"][data-col="-1"] input`,
        );
        if (box) {
          e.preventDefault();
          if (!all || !box.checked) box.click();
          return;
        }
      }
    }

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
      case "PageDown":
        if (editing) return;
        e.preventDefault();
        nextRow = Math.min(row + rowsPerPage(cell), maxRow);
        break;
      case "PageUp":
        if (editing) return;
        e.preventDefault();
        if (row > 0) nextRow = Math.max(row - rowsPerPage(cell), 0);
        break;
      case "Enter":
      case " ": {
        const activeEl = document.activeElement as HTMLElement;
        if (activeEl?.getAttribute("role") === "columnheader") return;
        if (activeEl?.tagName === "TD" || activeEl?.tagName === "TH" || activeEl?.getAttribute("role") === "gridcell") {
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
      pendingFocus.current = true;
      setFocusedCell({ row: nextRow, col: nextCol });
    }
  };

  return { focusedCell, setFocusedCell, containerRef, handleKeyDown };
}
