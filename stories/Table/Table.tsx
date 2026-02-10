import React from "react";
import PropTypes from "prop-types";
import "./table.scss";
import { Icon } from "../Icon/Icon";

export { useTableSort } from "./useTableSort";
export type { SortDirection, SortConfig, UseTableSortOptions, UseTableSortReturn } from "./useTableSort";

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

export const Table = ({
    striped = false,
    bordered = false,
    hoverable = false,
    fullWidth = false,
    stickyHeader = false,
    scrollbar = "default",
    height,
    maxHeight,
    className,
    children,
    ...props
}: TableProps) => {
    const classes = [
        "wim-table",
        striped ? "wim-table--striped" : "",
        bordered ? "wim-table--bordered" : "",
        hoverable ? "wim-table--hoverable" : "",
        fullWidth ? "wim-table--full-width" : "",
        stickyHeader ? "wim-table--sticky-header" : "",
        className,
    ]
        .filter(Boolean)
        .join(" ");

    const containerClasses = [
        "wim-table-container",
        stickyHeader ? "wim-table-container--sticky" : "",
        scrollbar === "subtle" ? "subtle-scrollbar" : "",
        scrollbar === "hidden" ? "no-scrollbar" : "",
    ].filter(Boolean).join(" ");

    const containerStyle: React.CSSProperties = {
        height,
        maxHeight,
        overflow: (height || maxHeight) ? "auto" : undefined,
    };

    return (
        <div className={containerClasses} style={containerStyle}>
            <table className={classes} {...props}>
                {children}
            </table>
        </div>
    );
};

export const TableHeader = ({
    className,
    children,
    ...props
}: React.HTMLAttributes<HTMLTableSectionElement>) => (
    <thead className={["wim-table__header", className].filter(Boolean).join(" ")} {...props}>
        {children}
    </thead>
);

export const TableBody = ({
    className,
    children,
    ...props
}: React.HTMLAttributes<HTMLTableSectionElement>) => (
    <tbody className={["wim-table__body", className].filter(Boolean).join(" ")} {...props}>
        {children}
    </tbody>
);

export const TableFooter = ({
    className,
    children,
    ...props
}: React.HTMLAttributes<HTMLTableSectionElement>) => (
    <tfoot className={["wim-table__footer", className].filter(Boolean).join(" ")} {...props}>
        {children}
    </tfoot>
);

type TableRowProps = React.HTMLAttributes<HTMLTableRowElement> & {
    selected?: boolean;
};

export const TableRow = ({
    selected = false,
    className,
    children,
    ...props
}: TableRowProps) => (
    <tr
        className={["wim-table__row", selected ? "wim-table__row--selected" : "", className]
            .filter(Boolean)
            .join(" ")}
        {...props}
    >
        {children}
    </tr>
);

type TableHeadProps = React.ThHTMLAttributes<HTMLTableCellElement> & {
    sortable?: boolean;
    sortDirection?: "asc" | "desc" | "none";
    onSort?: (e: React.MouseEvent) => void;
    selection?: boolean;
};

export const TableHead = ({
    sortable = false,
    sortDirection = "none",
    onSort,
    className,
    children,
    ...props
}: TableHeadProps) => {
    const classes = [
        "wim-table__head",
        sortable ? "wim-table__head--sortable" : "",
        props.selection ? "wim-table__head--selection" : "",
        className,
    ]
        .filter(Boolean)
        .join(" ");

    return (
        <th
            className={classes}
            {...props}
            onClick={sortable ? onSort : props.onClick}
            tabIndex={sortable ? 0 : undefined}
            aria-sort={sortable ? (sortDirection === "asc" ? "ascending" : sortDirection === "desc" ? "descending" : "none") : undefined}
            onKeyDown={(e) => {
                if (sortable && onSort && (e.key === "Enter" || e.key === " ")) {
                    e.preventDefault();
                    onSort(e as unknown as React.MouseEvent);
                }
                props.onKeyDown?.(e);
            }}
        >
            <div className="wim-table__head-content">
                {children}
                {sortable && (
                    <span
                        className={[
                            "wim-table__sort-icon",
                            `wim-table__sort-icon--${sortDirection}`,
                        ].join(" ")}
                    >
                        <Icon name="ChevronDownIcon" size="small" />
                    </span>
                )}
            </div>
        </th>
    );
};

type TableCellProps = React.TdHTMLAttributes<HTMLTableCellElement> & {
    selection?: boolean;
};

export const TableCell = ({
    selection = false,
    className,
    children,
    ...props
}: TableCellProps) => (
    <td
        className={[
            "wim-table__cell",
            selection ? "wim-table__cell--selection" : "",
            className,
        ]
            .filter(Boolean)
            .join(" ")}
        {...props}
    >
        {children}
    </td>
);

Table.Header = TableHeader;
Table.Body = TableBody;
Table.Footer = TableFooter;
Table.Row = TableRow;
Table.Head = TableHead;
Table.Cell = TableCell;

Table.propTypes = {
    striped: PropTypes.bool,
    bordered: PropTypes.bool,
    hoverable: PropTypes.bool,
    fullWidth: PropTypes.bool,
    stickyHeader: PropTypes.bool,
    scrollbar: PropTypes.oneOf(["default", "subtle", "hidden"]),
    height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    maxHeight: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    className: PropTypes.string,
    children: PropTypes.node.isRequired,
};
