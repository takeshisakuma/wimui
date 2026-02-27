import React from "react";
import classNames from "classnames";
import "./table.scss";
import { Icon } from "../Icon/Icon";

export { useTableSort } from "./useTableSort";
export type {
  SortDirection,
  SortConfig,
  UseTableSortOptions,
  UseTableSortReturn,
} from "./useTableSort";

/* eslint-disable react/prop-types */
type TableProps = React.TableHTMLAttributes<HTMLTableElement> & {
  striped?: boolean;
  bordered?: boolean;
  hoverable?: boolean;
  fullWidth?: boolean;
  stickyHeader?: boolean;
  scrollbar?: "default" | "subtle" | "hidden";
  /**
   * Mobile view: Switch to card layout
   */
  mobileCard?: boolean;
  height?: string | number;
  maxHeight?: string | number;
  className?: string;
  children: React.ReactNode;
};

const Table = ({
  striped = false,
  bordered = false,
  hoverable = false,
  fullWidth = false,
  stickyHeader = false,
  scrollbar = "default",
  mobileCard = false,
  height,
  maxHeight,
  className,
  children,
  ...props
}: TableProps) => {
  const containerStyle: React.CSSProperties = {
    height,
    maxHeight,
    overflow: height || maxHeight ? "auto" : undefined,
  };

  return (
    <div
      className={classNames(
        "wim-table-container",
        stickyHeader && "wim-table-container--sticky",
        scrollbar === "subtle" && "subtle-scrollbar",
        scrollbar === "hidden" && "no-scrollbar",
      )}
      style={containerStyle}
    >
      <table
        className={classNames(
          "wim-table",
          striped && "wim-table--striped",
          bordered && "wim-table--bordered",
          hoverable && "wim-table--hoverable",
          fullWidth && "wim-table--full-width",
          stickyHeader && "wim-table--sticky-header",
          mobileCard && "wim-table--mobile-card",
          className,
        )}
        {...props}
      >
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
  <thead className={classNames("wim-table__header", className)} {...props}>
    {children}
  </thead>
);

export const TableBody = ({
  className,
  children,
  ...props
}: React.HTMLAttributes<HTMLTableSectionElement>) => (
  <tbody className={classNames("wim-table__body", className)} {...props}>
    {children}
  </tbody>
);

export const TableFooter = ({
  className,
  children,
  ...props
}: React.HTMLAttributes<HTMLTableSectionElement>) => (
  <tfoot className={classNames("wim-table__footer", className)} {...props}>
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
    className={classNames(
      "wim-table__row",
      selected && "wim-table__row--selected",
      className,
    )}
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
  stickyLeft?: boolean;
  leftOffset?: string | number;
  stickyZIndex?: number;
};

export const TableHead = ({
  sortable = false,
  sortDirection = "none",
  onSort,
  stickyLeft = false,
  leftOffset,
  stickyZIndex,
  className,
  style,
  children,
  ...props
}: TableHeadProps) => {
  return (
    <th
      className={classNames(
        "wim-table__head",
        sortable && "wim-table__head--sortable",
        props.selection && "wim-table__head--selection",
        stickyLeft && "wim-table__head--sticky-left",
        className,
      )}
      style={{
        ...style,
        left: stickyLeft ? (leftOffset !== undefined ? leftOffset : 0) : undefined,
        zIndex: stickyZIndex !== undefined ? stickyZIndex : undefined,
      }}
      {...props}
      onClick={sortable ? onSort : props.onClick}
      tabIndex={sortable ? 0 : undefined}
      aria-sort={
        sortable
          ? sortDirection === "asc"
            ? "ascending"
            : sortDirection === "desc"
              ? "descending"
              : "none"
          : undefined
      }
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
            className={classNames(
              "wim-table__sort-icon",
              `wim-table__sort-icon--${sortDirection}`,
            )}
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
  label?: string;
  stickyLeft?: boolean;
  leftOffset?: string | number;
  stickyZIndex?: number;
};

export const TableCell = ({
  selection = false,
  label,
  stickyLeft = false,
  leftOffset,
  stickyZIndex,
  className,
  style,
  children,
  ...props
}: TableCellProps) => (
  <td
    className={classNames(
      "wim-table__cell",
      selection && "wim-table__cell--selection",
      stickyLeft && "wim-table__cell--sticky-left",
      className,
    )}
    style={{
      ...style,
      left: stickyLeft ? (leftOffset !== undefined ? leftOffset : 0) : undefined,
      zIndex: stickyZIndex !== undefined ? stickyZIndex : undefined,
    }}
    data-label={label}
    {...props}
  >
    {children}
  </td>
);

const TableComponent = Table as typeof Table & {
  Header: typeof TableHeader;
  Body: typeof TableBody;
  Footer: typeof TableFooter;
  Row: typeof TableRow;
  Head: typeof TableHead;
  Cell: typeof TableCell;
};

TableComponent.Header = TableHeader;
TableComponent.Body = TableBody;
TableComponent.Footer = TableFooter;
TableComponent.Row = TableRow;
TableComponent.Head = TableHead;
TableComponent.Cell = TableCell;

export { TableComponent as Table };
export default TableComponent;
