import React from "react";
import PropTypes from "prop-types";
import "./table.scss";

type TableProps = React.TableHTMLAttributes<HTMLTableElement> & {
    striped?: boolean;
    bordered?: boolean;
    hoverable?: boolean;
    fullWidth?: boolean;
    className?: string;
    children: React.ReactNode;
};

export const Table = ({
    striped = false,
    bordered = false,
    hoverable = false,
    fullWidth = false,
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
        className,
    ]
        .filter(Boolean)
        .join(" ");

    return (
        <div className="wim-table-container">
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

export const TableRow = ({
    className,
    children,
    ...props
}: React.HTMLAttributes<HTMLTableRowElement>) => (
    <tr className={["wim-table__row", className].filter(Boolean).join(" ")} {...props}>
        {children}
    </tr>
);

export const TableHead = ({
    className,
    children,
    ...props
}: React.ThHTMLAttributes<HTMLTableCellElement>) => (
    <th className={["wim-table__head", className].filter(Boolean).join(" ")} {...props}>
        {children}
    </th>
);

export const TableCell = ({
    className,
    children,
    ...props
}: React.TdHTMLAttributes<HTMLTableCellElement>) => (
    <td className={["wim-table__cell", className].filter(Boolean).join(" ")} {...props}>
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
    className: PropTypes.string,
    children: PropTypes.node.isRequired,
};
