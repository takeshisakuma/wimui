import { default as React } from '../../../../node_modules/react';
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
export type DataGridLabels = {
    empty?: React.ReactNode;
    selectAllRows?: string;
    selectRow?: (index: number) => string;
    loadingMore?: string;
};
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
    sortConfig?: {
        key: string;
        direction: "asc" | "desc" | "none";
    };
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
    /** 手動翻訳用のラベル */
    labels?: DataGridLabels;
}
export declare function DataGrid<T extends Record<string, unknown>>({ columns, rows, loading, selection, selectedRowKeys, onSelectionChange, rowKey, sortConfig, onSort, pagination, loadMore, striped, bordered, hoverable, stickyHeader, height, maxHeight, mobileCard, className, emptyMessage, labels, }: DataGridProps<T>): import("react/jsx-runtime").JSX.Element;
export default DataGrid;
