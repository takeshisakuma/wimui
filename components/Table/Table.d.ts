import { default as React } from '../../../node_modules/react';
export { useTableSort } from './useTableSort';
export type { SortDirection, SortConfig, UseTableSortOptions, UseTableSortReturn } from './useTableSort';
type TableProps = React.TableHTMLAttributes<HTMLTableElement> & {
    striped?: boolean;
    bordered?: boolean;
    hoverable?: boolean;
    fullWidth?: boolean;
    stickyHeader?: boolean;
    scrollbar?: "default" | "subtle" | "hidden";
    height?: string | number;
    maxHeight?: string | number;
    className?: string;
    children: React.ReactNode;
};
declare const Table: ({ striped, bordered, hoverable, fullWidth, stickyHeader, scrollbar, height, maxHeight, className, children, ...props }: TableProps) => import("react/jsx-runtime").JSX.Element;
export declare const TableHeader: ({ className, children, ...props }: React.HTMLAttributes<HTMLTableSectionElement>) => import("react/jsx-runtime").JSX.Element;
export declare const TableBody: ({ className, children, ...props }: React.HTMLAttributes<HTMLTableSectionElement>) => import("react/jsx-runtime").JSX.Element;
export declare const TableFooter: ({ className, children, ...props }: React.HTMLAttributes<HTMLTableSectionElement>) => import("react/jsx-runtime").JSX.Element;
type TableRowProps = React.HTMLAttributes<HTMLTableRowElement> & {
    selected?: boolean;
};
export declare const TableRow: ({ selected, className, children, ...props }: TableRowProps) => import("react/jsx-runtime").JSX.Element;
type TableHeadProps = React.ThHTMLAttributes<HTMLTableCellElement> & {
    sortable?: boolean;
    sortDirection?: "asc" | "desc" | "none";
    onSort?: (e: React.MouseEvent) => void;
    selection?: boolean;
};
export declare const TableHead: ({ sortable, sortDirection, onSort, className, children, ...props }: TableHeadProps) => import("react/jsx-runtime").JSX.Element;
type TableCellProps = React.TdHTMLAttributes<HTMLTableCellElement> & {
    selection?: boolean;
};
export declare const TableCell: ({ selection, className, children, ...props }: TableCellProps) => import("react/jsx-runtime").JSX.Element;
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
