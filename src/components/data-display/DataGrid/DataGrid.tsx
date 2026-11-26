import React, { useMemo, useCallback, useState, useLayoutEffect } from "react";
import { useWimTranslation } from "@/i18n/useWimTranslation";
import { commonNs } from "@/i18n/generated/common";
import { dataDisplayNs } from "@/i18n/generated/data-display";
import classNames from "classnames";
import { Table } from "../Table/Table";
import { Checkbox } from "../../form/Checkbox/Checkbox";
import { Radio } from "../../form/Radio/Radio";
import { VisuallyHidden } from "../../layout/VisuallyHidden/VisuallyHidden";
import { Pagination } from "../../navigation/Pagination/Pagination";
import { useAnnounce, useAnnounceAppearance } from "../../_internal/useAnnounce";
import { useFixedColumns, type FixedColumnInfo } from "./useFixedColumns";
import { useDataGridKeyboard } from "./useDataGridKeyboard";
import { useInfiniteScroll } from "./useInfiniteScroll";
import styles from "./datagrid.module.scss";

export type DataGridColumn<T> = {
  key: string;
  /** If provided, read cell value from this field instead of `key` */
  dataIndex?: string;
  title: React.ReactNode;
  /**
   * Column width. This is a **floor, not a cap** — the table is
   * `table-layout: auto`, so a column never renders narrower than this but
   * grows past it when the content asks for room or when the table has
   * spare width to hand out. Use `maxWidth` when the content has to stop.
   */
  width?: string | number;
  /**
   * Stop the cell's content at this width. Long values are clipped here
   * instead of pushing the column wider and starving its neighbours (T85),
   * and this is what makes `Text truncate` produce an ellipsis inside a
   * cell (T86).
   *
   * **This caps the content, not the column.** The table still distributes
   * spare width, so a column can be drawn wider than `maxWidth` with the
   * content stopping early — at 1280px a `maxWidth: 200` column measured
   * 523px wide with 303px of empty space to the right of the ellipsis
   * (T93). Set it to the width the text should stop at, not to the width
   * you want the column to be.
   */
  maxWidth?: string | number;
  sortable?: boolean;
  fixed?: "left" | "right";
  /**
   * Expose this column's cells as row headers (`role="rowheader"`), so a screen reader can name
   * the row while moving across it. Use it on the column that identifies the row, such as a name.
   */
  rowHeader?: boolean;
  render?: (value: unknown, record: T, index: number) => React.ReactNode;
};

type SelectionConfig<T> = {
  type?: "checkbox" | "radio";
  selectedRowKeys: string[];
  onChange: (keys: string[], records: T[]) => void;
};

export type DataGridProps<T> = {
  /** Column definitions */
  columns: DataGridColumn<T>[];
  /** Row data */
  data: T[];
  /** Row key: a field name or a function that derives the key from a record */
  rowKey?: string | ((record: T) => string);
  /**
   * Loading state.
   * `true` / `"blocking"` fades the grid and blocks interaction (first load — the
   * rows are not there yet, or are about to be replaced wholesale).
   * `"refresh"` only announces `aria-busy`: the rows stay readable and usable while
   * fresh data is fetched. It deliberately does not dim, because fading the content
   * drops secondary text below the AA contrast floor.
   */
  loading?: boolean | "blocking" | "refresh";
  /** Whether to show striped (zebra) rows */
  striped?: boolean;
  /** Whether to show borders between cells */
  bordered?: boolean;
  /** Whether rows highlight on hover */
  hoverable?: boolean;
  /** Whether the header sticks to the top while scrolling */
  stickyHeader?: boolean;
  /** Height of the grid (enables vertical scrolling) */
  height?: string | number;
  /** Maximum height of the grid (enables vertical scrolling) */
  maxHeight?: string | number;
  /**
   * Message or element to display when there are no rows. Defaults to a localized
   * "No data" text; pass `null` to show nothing. Not shown during a blocking `loading`
   * (the rows are not there yet, so "no data" would be untrue).
   */
  emptyMessage?: React.ReactNode;
  /** Enable the card layout below a container width (`true`/`"sm"` = 576px, `"md"` = 768px) */
  mobileCard?: boolean | "sm" | "md";
  /** Row selection: a boolean shorthand or a full configuration object */
  selection?: boolean | SelectionConfig<T>;
  /** Selected row keys (used with boolean `selection`) */
  selectedRowKeys?: string[];
  /** Selection change callback (used with boolean `selection`) */
  onSelectionChange?: (keys: string[], records: T[]) => void;
  /** Current sort configuration */
  sortConfig?: {
    key: string;
    direction: "asc" | "desc" | "none";
  };
  /** Callback when the sort configuration changes */
  onSortChange?: (key: string, direction: "asc" | "desc" | "none") => void;
  /** Pagination configuration, or false to disable pagination */
  pagination?: {
    current: number;
    pageSize: number;
    total: number;
    onChange: (page: number, pageSize: number) => void;
  } | false;
  /** Infinite-scroll configuration for dynamic loading */
  infiniteScroll?: {
    hasMore: boolean;
    onLoadMore: () => void;
    threshold?: number;
  };
  /** Additional class names */
  className?: string;
  /** Accessibility label for the grid */
  ariaLabel?: string;
  /** Accessible name for the grid. Takes precedence over `ariaLabel`. */
  "aria-label"?: string;
  /** ID of the element that labels the grid. Takes precedence over `aria-label`. */
  "aria-labelledby"?: string;
};

export function DataGrid<T extends Record<string, unknown>>({
  columns,
  data,
  rowKey = "id",
  loading = false,
  striped = false,
  bordered = false,
  hoverable = true,
  stickyHeader = true,
  height,
  maxHeight,
  emptyMessage,
  mobileCard = false,
  selection: selectionProp,
  selectedRowKeys: propsSelectedRowKeys,
  onSelectionChange,
  sortConfig,
  onSortChange,
  pagination,
  infiniteScroll,
  className,
  ariaLabel,
  // 標準の属性でも名前を付けられる（T341）。以前は受ける口が無く、渡しても黙って捨てられていた。
  "aria-label": ariaLabelAttr,
  "aria-labelledby": ariaLabelledBy,
}: DataGridProps<T>) {
  const { t } = useWimTranslation([commonNs, dataDisplayNs]);
  // "refresh" は読める・触れるまま更新中であることだけを伝える。従来の boolean は
  // blocking と同義（既定の挙動を変えない）。
  const radioName = React.useId();
  const isBusy = loading !== false && loading !== undefined;
  const isBlocking = loading === true || loading === "blocking";
  // Normalize selection to a consistent object form
  const selection: SelectionConfig<T> | null = useMemo(() => {
    if (!selectionProp) return null;
    if (selectionProp === true) {
      return {
        type: "checkbox",
        selectedRowKeys: propsSelectedRowKeys ?? [],
        onChange: (keys: string[], records: T[]) => {
          onSelectionChange?.(keys, records);
        },
      };
    }
    return selectionProp;
  }, [selectionProp, propsSelectedRowKeys, onSelectionChange]);

  const isRadio = selection?.type === "radio";
  const SelectControl: React.ElementType = isRadio ? Radio : Checkbox;

  // 1. Column Processing (Fixed columns)
  // 選択の列は中身（チェックボックスと、密度で変わる余白）の幅なので、左に固定した列の
  // 位置は、その列を測った幅から積む。固定した列が左に無ければ測らない
  const selectionHeadRef = React.useRef<HTMLTableCellElement>(null);
  const [selectionWidth, setSelectionWidth] = useState<number>();
  const measureSelection = !!selection && columns.some((col) => col.fixed === "left");
  React.useLayoutEffect(() => {
    const cell = selectionHeadRef.current;
    if (!measureSelection || !cell || typeof ResizeObserver === "undefined") return undefined;
    // observe した時点で 1 回呼ばれるので、初回の計測も兼ねる。密度で変わるのは左右の余白
    // だけで、中身（チェックボックス）は変わらないので、既定の content-box ではなく
    // border-box を見張る（content-box だと、密度を切り替えても通知が来なかった）
    const observer = new ResizeObserver(() => setSelectionWidth(cell.offsetWidth));
    observer.observe(cell, { box: "border-box" });
    return () => observer.disconnect();
  }, [measureSelection]);
  const { fixedLeftOffsets, fixedRightOffsets } = useFixedColumns(columns, !!selection, selectionWidth);

  const getStickyProps = (columnKey: string, isHeader = false) => {
    const leftInfo = fixedLeftOffsets[columnKey] as FixedColumnInfo & { isLast?: boolean };
    if (leftInfo) {
      return {
        stickyLeft: true,
        leftOffset: leftInfo.offset,
        stickyZIndex: isHeader ? 1000 + leftInfo.zIndex : leftInfo.zIndex,
        className: classNames(
          styles.cellFixed,
          leftInfo.isLast && styles.cellFixedLeftLast,
        ),
      };
    }
    const rightInfo = fixedRightOffsets[columnKey] as FixedColumnInfo & { isFirst?: boolean };
    if (rightInfo) {
      return {
        stickyRight: true,
        rightOffset: rightInfo.offset,
        stickyZIndex: isHeader ? 1000 + rightInfo.zIndex : rightInfo.zIndex,
        className: classNames(
          styles.cellFixed,
          rightInfo.isFirst && styles.cellFixedRightFirst,
        ),
      };
    }
    return {};
  };

  // 2. Selection Handling
  const getRowKey = useCallback((record: T) => {
    if (typeof rowKey === "function") return rowKey(record);
    return record[rowKey as keyof T] as string;
  }, [rowKey]);

  const isAllSelected = useMemo(() => {
    if (!selection || data.length === 0) return false;
    return data.every((record) => selection.selectedRowKeys.includes(getRowKey(record)));
  }, [data, selection, getRowKey]);

  const isSomeSelected = useMemo(() => {
    if (!selection) return false;
    return (
      !isAllSelected && data.some((record) => selection.selectedRowKeys.includes(getRowKey(record)))
    );
  }, [data, selection, isAllSelected, getRowKey]);

  const handleSelectAll = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!selection) return;
    const checked = e.target.checked;
    const newKeys = checked ? data.map(getRowKey) : [];
    const newRecords = checked ? data : [];
    selection.onChange(newKeys, newRecords);
  };

  // 全体の行数と、各行の全体での位置（T421）。ページ送りは外側で切り出したページを data に渡す作りなので、
  // 以前は aria-rowcount が「そのページの行数 + 見出し」で、2 ページ目の 1 行目も「11 行のうち 2 行目」と
  // 読まれていた。pagination.total（全体の件数）と、いまのページの手前にある件数から出す。
  // 続きを読み込む形（infiniteScroll）で、まだ続きがあるあいだは全体が分からないので -1（ARIA の「不明」）。
  const rowIndexOffset = pagination ? (pagination.current - 1) * pagination.pageSize : 0;
  const ariaRowCount = pagination
    ? pagination.total + 1
    : infiniteScroll?.hasMore
      ? -1
      : data.length + 1;

  const handleSelectRow = (record: T, e: React.ChangeEvent<HTMLInputElement>) => {
    if (!selection) return;
    const checked = e.target.checked;
    const key = getRowKey(record);
    const newKeys = isRadio
      ? [key]
      : checked
      ? [...selection.selectedRowKeys, key]
      : selection.selectedRowKeys.filter((k) => k !== key);
    const newRecords = data.filter((r) => newKeys.includes(getRowKey(r)));
    selection.onChange(newKeys, newRecords);
  };

  // 3. Keyboard Navigation
  const { focusedCell, setFocusedCell, handleKeyDown, containerRef } = useDataGridKeyboard(
    columns,
    data,
    !!selection,
  );

  // 3b. Tab の止まり先は表の中で 1 つ（T420）。APG の grid と同じく、Tab で入るのは「いまのセル」だけで、
  // セルの間は矢印で移る。以前は表の本体（`<table>`）も止まり先で、セルの中のチェックボックス・ボタン・
  // リンクも全部 Tab に残っていた（実測: Patterns/Admin/IntakeQueue の 8 行を通り抜けるのに Tab 35 回）。
  // セルの中の操作要素は、いまのセルのものだけを Tab に乗せる。利用者の `render` の中身にも効くよう、
  // 描画のたびに DOM で付け替える。外した要素には元の tabindex を data-wim-tab に覚えさせ、そのセルに戻ったら返す。
  useLayoutEffect(() => {
    const grid = containerRef.current;
    if (!grid) return;
    const focusables = grid.querySelectorAll<HTMLElement>(
      'a[href],button,input,select,textarea,[contenteditable=true],[tabindex]:not([data-row])',
    );
    for (const el of focusables) {
      const cell = el.closest<HTMLElement>("[data-row]");
      if (!cell || cell === el) continue;
      const isCurrent =
        Number(cell.dataset.row) === focusedCell.row && Number(cell.dataset.col) === focusedCell.col;
      if (isCurrent) {
        if (el.dataset.wimTab !== undefined) {
          const original = el.dataset.wimTab;
          if (original === "") el.removeAttribute("tabindex");
          else el.setAttribute("tabindex", original);
          delete el.dataset.wimTab;
        }
      } else if (el.dataset.wimTab === undefined) {
        el.dataset.wimTab = el.getAttribute("tabindex") ?? "";
        el.setAttribute("tabindex", "-1");
      }
    }
  });

  // クリックなどでセルの中にフォーカスが入ったら、そのセルを「いまのセル」にする。表の外へ Tab で
  // 出て戻ったとき、最後に触ったセルへ戻る（以前は最初のセルのままで、触ったセルと食い違った）
  const handleGridFocus = (e: React.FocusEvent) => {
    const cell = (e.target as HTMLElement).closest<HTMLElement>("[data-row]");
    if (!cell) return;
    const row = Number(cell.dataset.row);
    const col = Number(cell.dataset.col);
    if (row !== focusedCell.row || col !== focusedCell.col) setFocusedCell({ row, col });
  };

  // 4. Infinite Scroll
  const { loaderRef } = useInfiniteScroll(infiniteScroll as DataGridProps<Record<string, unknown>>["infiniteScroll"]);

  const colCount = columns.length + (selection ? 1 : 0);

  // 並べ替えたことを、読み上げで告げる。見出しを押してもフォーカスは同じ見出しに残り、変わるのは
  // `aria-sort` と行の並びだけなので、告げないと何も読まれない（ナレーター + Chrome の実機で、
  // 昇順・降順が読まれなかった）。先に在る領域の文字を書き換える（Pagination と同じ形）。
  const { announce: announceSort, region: sortAnnouncementRegion } = useAnnounce();
  // 空の表示は、行が 0 になったときに差し込む。文字は先に在る領域で告げる（T353）
  // 既定の文が無いと、行が 0 件の表は見出しだけになり、空なのか読み込み前なのか分からない（T440）。
  // 読み込み中（blocking）は行がまだ来ていないだけなので、空とは言わない。
  const emptyContent = emptyMessage === undefined ? t("data_grid.empty") : emptyMessage;
  const showEmpty = data.length === 0 && !isBlocking && Boolean(emptyContent);
  const { ref: emptyRef, region: emptyRegion } = useAnnounceAppearance(showEmpty);

  return (
    <div
      className={classNames(
        "wim-data-grid",
        styles.root,
        isBlocking && styles.loading,
        // 狭い幅でカード表示に切り替わる場合、外側のパネル装飾も一緒に降ろす必要がある
        // （切替自体は Table 側のコンテナクエリが行う）。
        mobileCard === "md" ? styles.mobileCardMd : mobileCard && styles.mobileCard,
        className,
      )}
      aria-busy={isBusy || undefined}
    >
      {sortAnnouncementRegion}
      {emptyRegion}
      <div
        className={styles.container}
        style={{ height, maxHeight }}
        // blocking 中はフェード（opacity）した内容を a11y ツリー/タブ順から外す。
        // 半透明化で低下したコントラストを axe が過渡的に評価するのを防ぐ（busy は root で告知）。
        inert={isBlocking || undefined}
      >
        <Table
          ref={containerRef}
          onKeyDown={handleKeyDown}
          onFocus={handleGridFocus}
          role="grid"
          aria-label={ariaLabelledBy ? undefined : (ariaLabelAttr ?? ariaLabel ?? t("a11y.data_grid"))}
          aria-labelledby={ariaLabelledBy}
          aria-rowcount={ariaRowCount}
          aria-colcount={colCount}
          striped={striped}
          bordered={bordered}
          hoverable={hoverable}
          stickyHeader={stickyHeader}
          mobileCard={mobileCard}
          fullWidth
          className={classNames("wim-table", styles.table)}
          containerClassName={styles.tableContainer}
        >
          <Table.Header>
            <Table.Row aria-rowindex={1}>
              {selection && (
                <Table.Head
                  ref={selectionHeadRef}
                  role="columnheader"
                  selection
                  stickyLeft
                  leftOffset={0}
                  stickyZIndex={1150}
                  data-row={-1}
                  data-col={-1}
                  aria-label={isRadio ? t("data_grid.radio_column") : t("a11y.select_all_rows")}
                  tabIndex={focusedCell.row === -1 && focusedCell.col === -1 ? 0 : -1}
                >
                  {/* ラジオには全選択が無いので、見出しの文字だけを読ませる（空の見出しにしない） */}
                  {isRadio ? (
                    <VisuallyHidden>{t("data_grid.radio_column")}</VisuallyHidden>
                  ) : (
                    <Checkbox
                      checked={isAllSelected}
                      indeterminate={isSomeSelected}
                      onChange={handleSelectAll}
                      aria-label={t("a11y.select_all_rows")}
                    />
                  )}
                </Table.Head>
              )}
              {columns.map((col, colIndex) => {
                const stickyProps = getStickyProps(col.key, true);
                return (
                  <Table.Head
                    role="columnheader"
                    key={col.key}
                    style={{ width: col.width, minWidth: col.width }}
                    // **並べ替えられるときだけ、並べ替えられると見せる。**
                    // `col.sortable` だけで判定していたため、`onSortChange` を渡して
                    // いない画面でも記号・`aria-sort`・フォーカスが付き、**押しても
                    // 何も起きなかった**（実測: 押しても aria-sort は none のまま）。
                    // 見た目だけでなく、読み上げに「並べ替え可能」と伝わる分だけ悪い。
                    sortable={Boolean(col.sortable && onSortChange)}
                    sortDirection={sortConfig?.key === col.key ? sortConfig.direction : "none"}
                    onSort={() => {
                      if (!col.sortable || !onSortChange) return;
                      const nextDir =
                        sortConfig?.key === col.key
                          ? sortConfig.direction === "asc"
                            ? "desc"
                            : sortConfig.direction === "desc"
                              ? "none"
                              : "asc"
                          : "asc";
                      const column = typeof col.title === "string" ? col.title : col.key;
                      announceSort(
                        nextDir === "asc"
                          ? t("dataGrid.sorted_ascending", { column })
                          : nextDir === "desc"
                            ? t("dataGrid.sorted_descending", { column })
                            : t("dataGrid.sort_cleared", { column }),
                      );
                      onSortChange(col.key, nextDir);
                    }}
                    {...stickyProps}
                    tabIndex={focusedCell.row === -1 && focusedCell.col === colIndex ? 0 : -1}
                    data-row={-1}
                    data-col={colIndex}
                  >
                    {col.title}
                  </Table.Head>
                );
              })}
            </Table.Row>
          </Table.Header>
          <Table.Body>
            {data.map((record, rowIndex) => {
              const key = getRowKey(record);
              const isSelected = selection?.selectedRowKeys.includes(key);

              return (
                <Table.Row key={key} selected={isSelected} aria-rowindex={rowIndexOffset + rowIndex + 2}>
                  {selection && (
                    <Table.Cell
                      role="gridcell"
                      selection
                      stickyLeft
                      leftOffset={0}
                      stickyZIndex={150}
                      data-row={rowIndex}
                      data-col={-1}
                      tabIndex={focusedCell.row === rowIndex && focusedCell.col === -1 ? 0 : -1}
                    >
                      <SelectControl
                        name={isRadio ? radioName : undefined}
                        checked={!!isSelected}
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleSelectRow(record, e)}
                        // 行ごとに違う名前にする。以前は、どの行も同じ「行を選択」で、読み上げでは
                        // どの行のチェックなのかが分からなかった。
                        aria-label={t("a11y.select_row_numbered", { row: rowIndex + 1 })}
                      />
                    </Table.Cell>
                  )}
                  {columns.map((col, colIndex) => {
                    const stickyProps = getStickyProps(col.key, false);
                    const fieldKey = col.dataIndex ?? col.key;
                    const value = record[fieldKey];
                    return (
                      <Table.Cell
                        role={col.rowHeader ? "rowheader" : "gridcell"}
                        key={col.key}
                        label={typeof col.title === "string" ? col.title : undefined}
                        {...stickyProps}
                        data-row={rowIndex}
                        data-col={colIndex}
                        tabIndex={focusedCell.row === rowIndex && focusedCell.col === colIndex ? 0 : -1}
                      >
                        {/* T85/T93: 中身を止めるのは `maxWidth` **だけ**。表は
                            `table-layout: auto` なので、セルの `width` / `max-width` は
                            ブラウザへの要望でしかなく、中身が要求すれば無視される
                            （実測: `th` に `max-width` を足しても 1px も動かない）。
                            セルの内側をブロックで包んで `max-width` を持たせると、
                            セルの max-content 幅が頭打ちになり列が太らなくなる。
                            これで `Text truncate` も初めて省略記号を出す（T86）。
                            **一度は `width` にこの役目を兼ねさせたが（#277）、`width` は
                            下限としても効くため、同じ 1 つの値が「列幅の下限」と
                            「中身の上限」の両方になっていた。** 表が余りを配ると列だけが
                            広がり、中身は宣言幅で切られたまま右に空白が残る（1280px で
                            303px）。意味が 2 つあるものは prop も 2 つに分ける（T93）。
                            `maxWidth` 未指定の列は包まないので既存の描画は変わらない。 */}
                        {col.maxWidth != null ? (
                          <div style={{ maxWidth: col.maxWidth }}>
                            {col.render ? col.render(value, record, rowIndex) : (value as React.ReactNode)}
                          </div>
                        ) : col.render ? (
                          col.render(value, record, rowIndex)
                        ) : (
                          (value as React.ReactNode)
                        )}
                      </Table.Cell>
                    );
                  })}
                </Table.Row>
              );
            })}
          </Table.Body>
        </Table>
        {showEmpty && (
          <div ref={emptyRef} className={styles.empty}>
            {emptyContent}
          </div>
        )}
        {infiniteScroll?.hasMore && (
          <div ref={loaderRef} className={styles.loader}>
            {infiniteScroll.hasMore && t("dataGrid.loading_more")}
          </div>
        )}
      </div>

      {pagination && (
        <div className={styles.footer} inert={isBlocking || undefined}>
          <div className={styles.info}>
            {t("dataGrid.displaying", { shown: data.length, total: pagination.total })}
            {selection?.selectedRowKeys && selection.selectedRowKeys.length > 0 && (
              <span className={styles.selectionInfo}>
                {t("dataGrid.rows_selected", { selected: selection.selectedRowKeys.length })}
              </span>
            )}
          </div>
          <div className={styles.pagination}>
            <Pagination
              className={styles.paginationContent}
              current={pagination.current}
              total={pagination.total}
              pageSize={pagination.pageSize}
              onChange={pagination.onChange}
            />
          </div>
        </div>
      )}
    </div>
  );
}

