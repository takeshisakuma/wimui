import { default as React } from '../../../../node_modules/react';
export { useTableSort, getNextSortDirection } from './useTableSort';
export type { SortDirection, SortConfig, UseTableSortOptions, UseTableSortReturn } from './useTableSort';
export interface TableProps extends React.TableHTMLAttributes<HTMLTableElement> {
    /** Whether to render as a child element. */
    asChild?: boolean;
    /** Whether to show striped (zebra) rows */
    striped?: boolean;
    /** Whether to show borders between cells */
    bordered?: boolean;
    /** Whether rows highlight on hover */
    hoverable?: boolean;
    /** Whether to take full width of parent */
    fullWidth?: boolean;
    /** Whether the header sticks to the top while scrolling */
    stickyHeader?: boolean;
    /** Scrollbar style of the container */
    scrollbar?: "default" | "subtle" | "hidden";
    /**
     * Mobile view: switch to a card layout below a container width.
     * `true` / `"sm"` switches under 576px, `"md"` under 768px (the old default).
     */
    mobileCard?: boolean | "sm" | "md";
    /** Height of the container (enables vertical scrolling) */
    height?: string | number;
    /** Maximum height of the container (enables vertical scrolling) */
    maxHeight?: string | number;
    /** Additional class name for the scroll container */
    containerClassName?: string;
    /**
     * Add outer border and border-radius to the container (DataGrid look)
     */
    card?: boolean;
}
declare const Table: React.ForwardRefExoticComponent<TableProps & React.RefAttributes<HTMLTableElement>>;
export interface TableHeaderProps extends React.HTMLAttributes<HTMLTableSectionElement> {
    /** Whether to render as a child element. */
    asChild?: boolean;
}
export declare const TableHeader: React.ForwardRefExoticComponent<TableHeaderProps & React.RefAttributes<HTMLTableSectionElement>>;
export interface TableBodyProps extends React.HTMLAttributes<HTMLTableSectionElement> {
    /** Whether to render as a child element. */
    asChild?: boolean;
}
export declare const TableBody: React.ForwardRefExoticComponent<TableBodyProps & React.RefAttributes<HTMLTableSectionElement>>;
export interface TableFooterProps extends React.HTMLAttributes<HTMLTableSectionElement> {
    /** Whether to render as a child element. */
    asChild?: boolean;
}
export declare const TableFooter: React.ForwardRefExoticComponent<TableFooterProps & React.RefAttributes<HTMLTableSectionElement>>;
export interface TableRowProps extends React.HTMLAttributes<HTMLTableRowElement> {
    /** Whether to render as a child element. */
    asChild?: boolean;
    /** Whether the row is in the selected state */
    selected?: boolean;
}
export declare const TableRow: React.ForwardRefExoticComponent<TableRowProps & React.RefAttributes<HTMLTableRowElement>>;
export interface TableHeadProps extends React.ThHTMLAttributes<HTMLTableCellElement> {
    /** Whether to render as a child element. */
    asChild?: boolean;
    /** Whether the column is sortable */
    sortable?: boolean;
    /** Current sort direction of the column */
    sortDirection?: "asc" | "desc" | "none";
    /** Callback when the sortable header is activated */
    onSort?: (e: React.SyntheticEvent) => void;
    /** Whether this is a selection (checkbox) column */
    selection?: boolean;
    /** Whether the cell sticks to the left edge while scrolling */
    stickyLeft?: boolean;
    /** Whether the cell sticks to the right edge while scrolling */
    stickyRight?: boolean;
    /** Offset from the left edge when stickyLeft is set */
    leftOffset?: string | number;
    /** Offset from the right edge when stickyRight is set */
    rightOffset?: string | number;
    /** z-index applied to the sticky cell */
    stickyZIndex?: number;
}
export declare const TableHead: React.ForwardRefExoticComponent<TableHeadProps & React.RefAttributes<HTMLTableCellElement>>;
export interface TableCellProps extends React.TdHTMLAttributes<HTMLTableCellElement> {
    /** Whether to render as a child element. */
    asChild?: boolean;
    /** Whether this is a selection (checkbox) cell */
    selection?: boolean;
    /** Header label shown in the mobile card layout */
    label?: string;
    /** Whether the cell sticks to the left edge while scrolling */
    stickyLeft?: boolean;
    /** Whether the cell sticks to the right edge while scrolling */
    stickyRight?: boolean;
    /** Offset from the left edge when stickyLeft is set */
    leftOffset?: string | number;
    /** Offset from the right edge when stickyRight is set */
    rightOffset?: string | number;
    /** z-index applied to the sticky cell */
    stickyZIndex?: number;
}
export declare const TableCell: React.ForwardRefExoticComponent<TableCellProps & React.RefAttributes<HTMLTableCellElement>>;
declare const TableComponent: typeof Table & {
    Header: typeof TableHeader;
    Body: typeof TableBody;
    Footer: typeof TableFooter;
    Row: typeof TableRow;
    Head: typeof TableHead;
    Cell: typeof TableCell;
};
export { TableComponent as Table };
export default TableComponent;
