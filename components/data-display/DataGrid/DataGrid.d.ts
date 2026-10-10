import { default as React } from '../../../../node_modules/react';
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
    /** Message or element to display when data is empty */
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
};
export declare function DataGrid<T extends Record<string, unknown>>({ columns, data, rowKey, loading, striped, bordered, hoverable, stickyHeader, height, maxHeight, emptyMessage, mobileCard, selection: selectionProp, selectedRowKeys: propsSelectedRowKeys, onSelectionChange, sortConfig, onSortChange, pagination, infiniteScroll, className, ariaLabel, }: DataGridProps<T>): React.JSX.Element;
export {};
