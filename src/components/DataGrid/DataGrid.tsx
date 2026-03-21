import React from "react";
import classNames from "classnames";
import {
  Table,
  TableHeader,
  TableBody,
  TableRow,
  TableHead,
  TableCell,
  getNextSortDirection,
} from "../Table/Table";
import { Checkbox } from "../Checkbox/Checkbox";
import { Pagination } from "../Pagination/Pagination";
import { Spinner } from "../Spinner/Spinner";
import { EmptyState } from "../EmptyState/EmptyState";
import { useTranslation } from "react-i18next";
import { useDataGridKeyboard } from "./useDataGridKeyboard";
import { useFixedColumns } from "./useFixedColumns";
import { useInfiniteScroll } from "./useInfiniteScroll";
import "./datagrid.scss";

export interface DataGridColumn<T> {
  /** Unique key for the column */
  key: string;
  /** Header text or element */
  header: React.ReactNode;
  /** Width of the column (e.g., '100px', '20%') */
  width?: string | number;
  /** Whether the column is sortable */
  sortable?: boolean;
  /** Custom render function for the cell */
  render?: (value: T[keyof T], row: T, index: number) => React.ReactNode;
  /** Text alignment */
  align?: "left" | "center" | "right";
  /** Data index in the row object (defaults to key if not provided) */
  dataIndex?: keyof T;
  /** Whether the column is fixed to the left or right */
  fixed?: boolean | "left" | "right";
}

export interface DataGridProps<T> {
  /** Column definitions */
  columns: DataGridColumn<T>[];
  /** Data rows */
  rows: T[];
  /** Loading state */
  loading?: boolean;
  /** Whether to show selection checkboxes */
  selection?: boolean;
  /** Array of selected row keys */
  selectedRowKeys?: React.Key[];
  /** Callback when selection changes */
  onSelectionChange?: (selectedRowKeys: React.Key[]) => void;
  /** Unique key for each row */
  rowKey?: keyof T | ((row: T) => React.Key);
  /** Current sort configuration */
  sortConfig?: { key: string; direction: "asc" | "desc" | "none" };
  /** Callback when sorting changes */
  onSort?: (key: string, direction: "asc" | "desc" | "none") => void;
  /** Pagination configuration */
  pagination?: {
    total: number;
    pageSize: number;
    current: number;
    onPageChange: (page: number) => void;
  };
  /** Infinite scroll / load more configuration */
  loadMore?: {
    onLoadMore: () => void;
    hasMore: boolean;
    loading: boolean;
    threshold?: number;
  };
  /** Whether to show striped rows */
  striped?: boolean;
  /** Whether to show borders */
  bordered?: boolean;
  /** Whether to highlight rows on hover */
  hoverable?: boolean;
  /** Whether the header is sticky */
  stickyHeader?: boolean;
  /** Fixed height for the grid */
  height?: string | number;
  /** Maximum height for the grid */
  maxHeight?: string | number;
  /** Mobile view: Switch to card layout */
  mobileCard?: boolean;
  /** Additional class name */
  className?: string;
  /** Message to show when data is empty */
  emptyMessage?: React.ReactNode;
  /** Accessibility label for selecting all rows */
  a11y_select_all_rows?: string;
}

export function DataGrid<T extends Record<string, unknown>>({
  columns,
  rows,
  loading = false,
  selection = false,
  selectedRowKeys = [],
  onSelectionChange,
  rowKey = "id" as keyof T,
  sortConfig,
  onSort,
  pagination,
  loadMore,
  striped = false,
  bordered = false,
  hoverable = true,
  stickyHeader = false,
  height,
  maxHeight,
  mobileCard = false,
  className,
  emptyMessage,
  a11y_select_all_rows,
}: DataGridProps<T>) {
  const { t } = useTranslation(["components", "common"]);
  const actualEmptyMessage = emptyMessage ?? t("datagrid_empty");
  const actualSelectAllRowsA11y =
    a11y_select_all_rows ?? t("a11y_select_all_rows");

  const { focusedCell, setFocusedCell, containerRef, handleKeyDown } =
    useDataGridKeyboard(columns, rows, selection);

  const { fixedLeftOffsets, fixedRightOffsets } = useFixedColumns(
    columns,
    selection,
  );

  const { loaderRef } = useInfiniteScroll(
    loadMore as DataGridProps<Record<string, unknown>>["loadMore"],
  );

  const getRowKey = (row: T): React.Key => {
    if (typeof rowKey === "function") {
      return rowKey(row);
    }
    return row[rowKey] as React.Key;
  };

  const handleSelectAll = (checked: boolean) => {
    if (!onSelectionChange) return;
    if (checked) {
      onSelectionChange(rows.map((row) => getRowKey(row)));
    } else {
      onSelectionChange([]);
    }
  };

  const handleSelectRow = (key: React.Key, checked: boolean) => {
    if (!onSelectionChange) return;
    if (checked) {
      onSelectionChange([...selectedRowKeys, key]);
    } else {
      onSelectionChange(selectedRowKeys.filter((k) => k !== key));
    }
  };

  const handleSort = (key: string) => {
    if (!onSort) return;
    const direction = getNextSortDirection(
      sortConfig?.direction || "none",
      sortConfig?.key === key,
    );
    onSort(key, direction);
  };

  const isAllSelected =
    rows.length > 0 && selectedRowKeys.length === rows.length;
  const isSomeSelected =
    selectedRowKeys.length > 0 && selectedRowKeys.length < rows.length;

  const totalCols = columns.length + (selection ? 1 : 0);

  return (
    <div
      ref={containerRef}
      className={classNames(
        "wim-datagrid",
        loading && "wim-datagrid--loading",
        className,
      )}
      role="grid"
      aria-rowcount={rows.length + 1}
      aria-colcount={totalCols}
      tabIndex={0}
      onKeyDown={handleKeyDown}
    >
      <div className="wim-datagrid__container">
        <Table
          striped={striped}
          bordered={bordered}
          hoverable={hoverable}
          stickyHeader={stickyHeader}
          fullWidth
          height={height}
          maxHeight={maxHeight}
          mobileCard={mobileCard}
        >
          <TableHeader>
            <TableRow>
              {selection && (
                <TableHead
                  selection
                  stickyLeft
                  leftOffset={0}
                  stickyZIndex={stickyHeader ? 121 : 21}
                  data-row={-1}
                  data-col={-1}
                  tabIndex={
                    focusedCell.row === -1 && focusedCell.col === -1 ? 0 : -1
                  }
                  onFocus={() => setFocusedCell({ row: -1, col: -1 })}
                >
                  <Checkbox
                    checked={isAllSelected}
                    indeterminate={isSomeSelected}
                    onChange={(e) => handleSelectAll(e.target.checked)}
                    aria-label={actualSelectAllRowsA11y}
                    tabIndex={-1}
                  />
                </TableHead>
              )}
              {columns.map((column, columnIndex) => {
                const fixedLeft =
                  column.fixed === true || column.fixed === "left";
                const fixedRight = column.fixed === "right";
                const fixedLeftInfo = fixedLeft
                  ? fixedLeftOffsets[column.key]
                  : undefined;
                const fixedRightInfo = fixedRight
                  ? fixedRightOffsets[column.key]
                  : undefined;

                return (
                  <TableHead
                    key={column.key}
                    style={{
                      width: column.width,
                      minWidth: column.width,
                      maxWidth: column.width,
                      textAlign: column.align,
                    }}
                    sortable={column.sortable}
                    sortDirection={
                      sortConfig?.key === column.key
                        ? sortConfig.direction
                        : "none"
                    }
                    onSort={() => handleSort(column.key)}
                    stickyLeft={fixedLeft}
                    leftOffset={fixedLeftInfo?.offset}
                    stickyRight={fixedRight}
                    rightOffset={fixedRightInfo?.offset}
                    stickyZIndex={
                      fixedLeftInfo
                        ? stickyHeader
                          ? fixedLeftInfo.zIndex + 100
                          : fixedLeftInfo.zIndex
                        : fixedRightInfo
                          ? stickyHeader
                            ? fixedRightInfo.zIndex + 100
                            : fixedRightInfo.zIndex
                          : undefined
                    }
                    data-row={-1}
                    data-col={columnIndex}
                    tabIndex={
                      focusedCell.row === -1 && focusedCell.col === columnIndex
                        ? 0
                        : -1
                    }
                    onFocus={() => setFocusedCell({ row: -1, col: columnIndex })}
                  >
                    {column.header}
                  </TableHead>
                );
              })}
            </TableRow>
          </TableHeader>
          <TableBody>
            {rows.length === 0 && !loading ? (
              <TableRow>
                <TableCell colSpan={columns.length + (selection ? 1 : 0)}>
                  <div className="wim-datagrid__empty" role="status" aria-live="polite">
                    {typeof actualEmptyMessage === "string" ? (
                      <EmptyState
                        title="No Data"
                        description={actualEmptyMessage}
                      />
                    ) : (
                      actualEmptyMessage
                    )}
                  </div>
                </TableCell>
              </TableRow>
            ) : (
              rows.map((row, rowIndex) => {
                const key = getRowKey(row);
                const isSelected = selectedRowKeys.includes(key);

                return (
                  <TableRow key={key} selected={isSelected}>
                    {selection && (
                      <TableCell
                        selection
                        stickyLeft
                        leftOffset={0}
                        stickyZIndex={21}
                        data-row={rowIndex}
                        data-col={-1}
                        tabIndex={
                          focusedCell.row === rowIndex &&
                          focusedCell.col === -1
                            ? 0
                            : -1
                        }
                        onFocus={() => setFocusedCell({ row: rowIndex, col: -1 })}
                      >
                        <Checkbox
                          checked={isSelected}
                          onChange={(e) =>
                            handleSelectRow(key, e.target.checked)
                          }
                          aria-label={t("datagrid_select_row", {
                            index: rowIndex + 1,
                          })}
                          tabIndex={-1}
                        />
                      </TableCell>
                    )}
                    {columns.map((column, columnIndex) => {
                      const value = column.dataIndex
                        ? row[column.dataIndex]
                        : (row as Record<string, T[keyof T]>)[column.key];

                      const fixedLeft =
                        column.fixed === true || column.fixed === "left";
                      const fixedRight = column.fixed === "right";
                      const fixedLeftInfo = fixedLeft
                        ? fixedLeftOffsets[column.key]
                        : undefined;
                      const fixedRightInfo = fixedRight
                        ? fixedRightOffsets[column.key]
                        : undefined;

                      return (
                        <TableCell
                          key={column.key}
                          style={{
                            minWidth: column.width,
                            maxWidth: column.width,
                            textAlign: column.align,
                          }}
                          label={
                            typeof column.header === "string"
                              ? column.header
                              : undefined
                          }
                          stickyLeft={fixedLeft}
                          leftOffset={fixedLeftInfo?.offset}
                          stickyRight={fixedRight}
                          rightOffset={fixedRightInfo?.offset}
                          stickyZIndex={
                            fixedLeftInfo?.zIndex || fixedRightInfo?.zIndex
                          }
                          data-row={rowIndex}
                          data-col={columnIndex}
                          tabIndex={
                            focusedCell.row === rowIndex &&
                            focusedCell.col === columnIndex
                              ? 0
                              : -1
                          }
                          onFocus={() =>
                            setFocusedCell({ row: rowIndex, col: columnIndex })
                          }
                        >
                          {column.render
                            ? column.render(value, row, rowIndex)
                            : value as React.ReactNode}
                        </TableCell>
                      );
                    })}
                  </TableRow>
                );
              })
            )}
            {loadMore && loadMore.hasMore && (
              <TableRow>
                <TableCell colSpan={columns.length + (selection ? 1 : 0)}>
                  <div
                    ref={loaderRef}
                    className="wim-datagrid__loader"
                    aria-live="polite"
                    aria-label={loadMore.loading ? t("datagrid_loading_more", "Loading more rows") : undefined}
                  >
                    {loadMore.loading && <Spinner size="small" />}
                  </div>
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
        {loading && (
          <div className="wim-datagrid__loading-overlay">
            <Spinner size="large" />
          </div>
        )}
      </div>

      {pagination && (
        <div className="wim-datagrid__footer">
          <Pagination
            total={pagination.total}
            pageSize={pagination.pageSize}
            current={pagination.current}
            onChange={pagination.onPageChange}
          />
        </div>
      )}
    </div>
  );
}

export default DataGrid;
