import React, { useMemo, useCallback } from "react";
import { useWimTranslation } from "@/i18n/useWimTranslation";
import classNames from "classnames";
import { Table } from "../Table/Table";
import { Checkbox } from "../../form/Checkbox/Checkbox";
import { Pagination } from "../../navigation/Pagination/Pagination";
import { useFixedColumns, type FixedColumnInfo } from "./useFixedColumns";
import { useDataGridKeyboard } from "./useDataGridKeyboard";
import { useInfiniteScroll } from "./useInfiniteScroll";
import styles from "./datagrid.module.scss";

export type DataGridColumn<T> = {
  key: string;
  /** If provided, read cell value from this field instead of `key` */
  dataIndex?: string;
  title: React.ReactNode;
  width?: string | number;
  sortable?: boolean;
  fixed?: "left" | "right";
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
  /** Whether the grid is in a loading state */
  loading?: boolean;
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
  /** Message or element to display when data is empty */
  emptyMessage?: React.ReactNode;
  /** Enable mobile card layout */
  mobileCard?: boolean;
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
}: DataGridProps<T>) {
  const { t } = useWimTranslation("common");
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

  // 1. Column Processing (Fixed columns)
  const { fixedLeftOffsets, fixedRightOffsets } = useFixedColumns(columns, !!selection);

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

  const handleSelectRow = (record: T, e: React.ChangeEvent<HTMLInputElement>) => {
    if (!selection) return;
    const checked = e.target.checked;
    const key = getRowKey(record);
    const newKeys = checked
      ? [...selection.selectedRowKeys, key]
      : selection.selectedRowKeys.filter((k) => k !== key);
    const newRecords = data.filter((r) => newKeys.includes(getRowKey(r)));
    selection.onChange(newKeys, newRecords);
  };

  // 3. Keyboard Navigation
  const { focusedCell, handleKeyDown, containerRef } = useDataGridKeyboard(
    columns,
    data,
    !!selection,
  );

  // 4. Infinite Scroll
  const { loaderRef } = useInfiniteScroll(infiniteScroll as DataGridProps<Record<string, unknown>>["infiniteScroll"]);

  const colCount = columns.length + (selection ? 1 : 0);

  return (
    <div
      className={classNames(
        "wim-data-grid",
        styles.root,
        loading && styles.loading,
        // 狭い幅でカード表示に切り替わる場合、外側のパネル装飾も一緒に降ろす必要がある
        // （切替自体は Table 側のコンテナクエリが行う）。
        mobileCard && styles.mobileCard,
        className,
      )}
      aria-busy={loading || undefined}
    >
      <div
        className={styles.container}
        style={{ height, maxHeight }}
        // loading 中はフェード（opacity）した内容を a11y ツリー/タブ順から外す。
        // 半透明化で低下したコントラストを axe が過渡的に評価するのを防ぐ（busy は root で告知）。
        inert={loading || undefined}
      >
        <Table
          ref={containerRef}
          onKeyDown={handleKeyDown}
          tabIndex={0}
          role="grid"
          aria-label={ariaLabel ?? t("a11y.data_grid")}
          aria-rowcount={data.length + 1}
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
            <Table.Row>
              {selection && (
                <Table.Head
                  role="columnheader"
                  selection
                  stickyLeft
                  leftOffset={0}
                  stickyZIndex={1150}
                  data-row={-1}
                  data-col={-1}
                  aria-label={t("a11y.select_all_rows")}
                  tabIndex={focusedCell.row === -1 && focusedCell.col === -1 ? 0 : -1}
                >
                  {(selection.type ?? "checkbox") === "checkbox" && (
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
                    sortable={col.sortable}
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
                      onSortChange(col.key, nextDir);
                    }}
                    {...stickyProps}
                    tabIndex={focusedCell.row === -1 && focusedCell.col === (selection ? colIndex + 1 : colIndex) ? 0 : -1}
                    data-row={-1}
                    data-col={selection ? colIndex + 1 : colIndex}
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
                <Table.Row key={key} selected={isSelected}>
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
                      <Checkbox
                        checked={isSelected}
                        onChange={(e) => handleSelectRow(record, e)}
                        aria-label={t("a11y.select_row")}
                      />
                    </Table.Cell>
                  )}
                  {columns.map((col, colIndex) => {
                    const stickyProps = getStickyProps(col.key, false);
                    const fieldKey = col.dataIndex ?? col.key;
                    const value = record[fieldKey];
                    return (
                      <Table.Cell
                        role="gridcell"
                        key={col.key}
                        label={typeof col.title === "string" ? col.title : undefined}
                        {...stickyProps}
                        data-row={rowIndex}
                        data-col={selection ? colIndex + 1 : colIndex}
                        tabIndex={focusedCell.row === rowIndex && focusedCell.col === (selection ? colIndex + 1 : colIndex) ? 0 : -1}
                      >
                        {col.render ? col.render(value, record, rowIndex) : (value as React.ReactNode)}
                      </Table.Cell>
                    );
                  })}
                </Table.Row>
              );
            })}
          </Table.Body>
        </Table>
        {data.length === 0 && emptyMessage && (
          <div role="status" className={styles.empty}>
            {emptyMessage}
          </div>
        )}
        {infiniteScroll?.hasMore && (
          <div ref={loaderRef} className={styles.loader}>
            {infiniteScroll.hasMore && "Loading more..."}
          </div>
        )}
      </div>

      {pagination && (
        <div className={styles.footer} inert={loading || undefined}>
          <div className={styles.info}>
            Displaying {data.length} of {pagination.total} records
            {selection?.selectedRowKeys && selection.selectedRowKeys.length > 0 && (
              <span className={styles.selectionInfo}>
                ({selection.selectedRowKeys.length} row(s) selected)
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

