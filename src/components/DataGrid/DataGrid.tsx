import React from "react";
import classNames from "classnames";
import { Table, TableHeader, TableBody, TableRow, TableHead, TableCell } from "../Table/Table";
import { Checkbox } from "../Checkbox/Checkbox";
import { Pagination } from "../Pagination/Pagination";
import { Spinner } from "../Spinner/Spinner";
import { EmptyState } from "../EmptyState/EmptyState";
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
    render?: (value: any, row: T, index: number) => React.ReactNode;
    /** Text alignment */
    align?: "left" | "center" | "right";
    /** Data index in the row object (defaults to key if not provided) */
    dataIndex?: keyof T;
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
    /** Additional class name */
    className?: string;
    /** Message to show when data is empty */
    emptyMessage?: React.ReactNode;
}

export function DataGrid<T extends Record<string, any>>({
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
    striped = false,
    bordered = false,
    hoverable = true,
    stickyHeader = false,
    height,
    maxHeight,
    className,
    emptyMessage = "No data available",
}: DataGridProps<T>) {
    const getRowKey = (row: T): React.Key => {
        if (typeof rowKey === "function") {
            return rowKey(row);
        }
        return row[rowKey] as unknown as React.Key;
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
        let direction: "asc" | "desc" | "none" = "asc";
        if (sortConfig?.key === key) {
            if (sortConfig.direction === "asc") direction = "desc";
            else if (sortConfig.direction === "desc") direction = "none";
        }
        onSort(key, direction);
    };

    const isAllSelected = rows.length > 0 && selectedRowKeys.length === rows.length;
    const isSomeSelected = selectedRowKeys.length > 0 && selectedRowKeys.length < rows.length;

    return (
        <div
            className={classNames(
                "wim-datagrid",
                loading && "wim-datagrid--loading",
                className
            )}
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
                >
                    <TableHeader>
                        <TableRow>
                            {selection && (
                                <TableHead selection>
                                    <Checkbox
                                        checked={isAllSelected}
                                        indeterminate={isSomeSelected}
                                        onChange={(e) => handleSelectAll(e.target.checked)}
                                        aria-label="Select all rows"
                                    />
                                </TableHead>
                            )}
                            {columns.map((column) => (
                                <TableHead
                                    key={column.key}
                                    style={{ width: column.width, textAlign: column.align }}
                                    sortable={column.sortable}
                                    sortDirection={sortConfig?.key === column.key ? sortConfig.direction : "none"}
                                    onSort={() => handleSort(column.key)}
                                >
                                    {column.header}
                                </TableHead>
                            ))}
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {rows.length === 0 && !loading ? (
                            <TableRow>
                                <TableCell colSpan={columns.length + (selection ? 1 : 0)}>
                                    <div className="wim-datagrid__empty">
                                        {typeof emptyMessage === "string" ? (
                                            <EmptyState
                                                title="No Data"
                                                description={emptyMessage}
                                            />
                                        ) : (
                                            emptyMessage
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
                                            <TableCell selection>
                                                <Checkbox
                                                    checked={isSelected}
                                                    onChange={(e) => handleSelectRow(key, e.target.checked)}
                                                    aria-label={`Select row ${rowIndex + 1}`}
                                                />
                                            </TableCell>
                                        )}
                                        {columns.map((column) => {
                                            const value = column.dataIndex ? row[column.dataIndex] : (row as any)[column.key];
                                            return (
                                                <TableCell
                                                    key={column.key}
                                                    style={{ textAlign: column.align }}
                                                    label={typeof column.header === 'string' ? column.header : undefined}
                                                >
                                                    {column.render ? column.render(value, row, rowIndex) : value}
                                                </TableCell>
                                            );
                                        })}
                                    </TableRow>
                                );
                            })
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
