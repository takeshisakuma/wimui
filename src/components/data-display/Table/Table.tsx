import React from "react";
import classNames from "classnames";
import { Slot, Slottable } from "@radix-ui/react-slot";
import styles from "./table.module.scss";
import { Icon } from "../../media/Icon/Icon";

export { useTableSort, getNextSortDirection } from "./useTableSort";
export type { SortDirection, SortConfig, UseTableSortOptions, UseTableSortReturn } from "./useTableSort";

export interface TableProps extends React.TableHTMLAttributes<HTMLTableElement> {
  asChild?: boolean;
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
}

const Table = React.forwardRef<HTMLTableElement, TableProps>(
  (
    {
      asChild = false,
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
    },
    ref,
  ) => {
    const containerStyle: React.CSSProperties = {
      height,
      maxHeight,
      overflow: height || maxHeight ? "auto" : undefined,
    };

    const Component = asChild ? Slot : "table";

    return (
      <div
        className={classNames(
          styles.container,
          stickyHeader && styles.sticky,
          scrollbar === "subtle" && styles.subtleScrollbar,
          scrollbar === "hidden" && styles.noScrollbar,
        )}
        style={containerStyle}
        tabIndex={height || maxHeight ? 0 : undefined}
        data-testid="table-container"
      >
        <Component
          className={classNames(
            styles.root,
            striped && styles.striped,
            bordered && styles.bordered,
            hoverable && styles.hoverable,
            fullWidth && styles.fullWidth,
            stickyHeader && styles.stickyHeader,
            mobileCard && styles.mobileCard,
            className,
          )}
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          ref={ref as any}
          data-testid="table-root"
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          {...(props as any)}
        >
          <Slottable>{children}</Slottable>
        </Component>
      </div>
    );
  },
);

export interface TableHeaderProps extends React.HTMLAttributes<HTMLTableSectionElement> {
  asChild?: boolean;
}
export const TableHeader = React.forwardRef<HTMLTableSectionElement, TableHeaderProps>(
  ({ asChild = false, className, children, ...props }, ref) => {
    const Component = asChild ? Slot : "thead";
    return (
      <Component
        className={classNames(styles.header, className)}
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        ref={ref as any}
        data-testid="table-header"
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        {...(props as any)}
      >
        <Slottable>{children}</Slottable>
      </Component>
    );
  },
);

export interface TableBodyProps extends React.HTMLAttributes<HTMLTableSectionElement> {
  asChild?: boolean;
}
export const TableBody = React.forwardRef<HTMLTableSectionElement, TableBodyProps>(
  ({ asChild = false, className, children, ...props }, ref) => {
    const Component = asChild ? Slot : "tbody";
    return (
      <Component
        className={classNames(styles.body, className)}
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        ref={ref as any}
        data-testid="table-body"
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        {...(props as any)}
      >
        <Slottable>{children}</Slottable>
      </Component>
    );
  },
);

export interface TableFooterProps extends React.HTMLAttributes<HTMLTableSectionElement> {
  asChild?: boolean;
}
export const TableFooter = React.forwardRef<HTMLTableSectionElement, TableFooterProps>(
  ({ asChild = false, className, children, ...props }, ref) => {
    const Component = asChild ? Slot : "tfoot";
    return (
      <Component
        className={classNames(styles.footer, className)}
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        ref={ref as any}
        data-testid="table-footer"
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        {...(props as any)}
      >
        <Slottable>{children}</Slottable>
      </Component>
    );
  },
);

export interface TableRowProps extends React.HTMLAttributes<HTMLTableRowElement> {
  asChild?: boolean;
  selected?: boolean;
}

export const TableRow = React.forwardRef<HTMLTableRowElement, TableRowProps>(
  ({ asChild = false, selected = false, className, children, ...props }, ref) => {
    const Component = asChild ? Slot : "tr";
    return (
      <Component
        className={classNames(styles.row, selected && styles.selected, className)}
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        ref={ref as any}
        data-testid="table-row"
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        {...(props as any)}
      >
        <Slottable>{children}</Slottable>
      </Component>
    );
  },
);

export interface TableHeadProps extends React.ThHTMLAttributes<HTMLTableCellElement> {
  asChild?: boolean;
  sortable?: boolean;
  sortDirection?: "asc" | "desc" | "none";
  onSort?: (e: React.SyntheticEvent) => void;
  selection?: boolean;
  stickyLeft?: boolean;
  stickyRight?: boolean;
  leftOffset?: string | number;
  rightOffset?: string | number;
  stickyZIndex?: number;
}

export const TableHead = React.forwardRef<HTMLTableCellElement, TableHeadProps>(
  (
    {
      asChild = false,
      sortable = false,
      sortDirection = "none",
      onSort,
      stickyLeft = false,
      stickyRight = false,
      leftOffset,
      rightOffset,
      stickyZIndex,
      className,
      style,
      children,
      ...props
    },
    ref,
  ) => {
    const Component = asChild ? Slot : "th";
    return (
      <Component
        className={classNames(
          styles.head,
          sortable && styles.sortable,
          props.selection && styles.selection,
          stickyLeft && styles.stickyLeft,
          stickyRight && styles.stickyRight,
          className,
        )}
        style={{
          ...style,
          left: stickyLeft ? (leftOffset !== undefined ? leftOffset : 0) : undefined,
          right: stickyRight ? (rightOffset !== undefined ? rightOffset : 0) : undefined,
          zIndex: stickyZIndex !== undefined ? stickyZIndex : undefined,
        }}
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        ref={ref as any}
        data-testid="table-head"
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        {...(props as any)}
        onClick={sortable ? onSort : props.onClick}
        tabIndex={props.tabIndex !== undefined ? props.tabIndex : sortable ? 0 : undefined}
        aria-sort={
          sortable ? (sortDirection === "asc" ? "ascending" : sortDirection === "desc" ? "descending" : "none") : undefined
        }
        onKeyDown={(e: React.KeyboardEvent<HTMLElement>) => {
          if (sortable && onSort && (e.key === "Enter" || e.key === " ")) {
            e.preventDefault();
            onSort(e);
          }
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          props.onKeyDown?.(e as any);
        }}
      >
        <div className={styles.headContent}>
          <Slottable>{children}</Slottable>
          {sortable && (
            <span className={classNames(styles.sortIcon, styles[sortDirection])}>
              <Icon name="ChevronDownIcon" size="sm" />
            </span>
          )}
        </div>
      </Component>
    );
  },
);

export interface TableCellProps extends React.TdHTMLAttributes<HTMLTableCellElement> {
  asChild?: boolean;
  selection?: boolean;
  label?: string;
  stickyLeft?: boolean;
  stickyRight?: boolean;
  leftOffset?: string | number;
  rightOffset?: string | number;
  stickyZIndex?: number;
}

export const TableCell = React.forwardRef<HTMLTableCellElement, TableCellProps>(
  (
    {
      asChild = false,
      selection = false,
      label,
      stickyLeft = false,
      stickyRight = false,
      leftOffset,
      rightOffset,
      stickyZIndex,
      className,
      style,
      children,
      ...props
    },
    ref,
  ) => {
    const Component = asChild ? Slot : "td";
    return (
      <Component
        className={classNames(
          styles.cell,
          selection && styles.selection,
          stickyLeft && styles.stickyLeft,
          stickyRight && styles.stickyRight,
          className,
        )}
        style={{
          ...style,
          left: stickyLeft ? (leftOffset !== undefined ? leftOffset : 0) : undefined,
          right: stickyRight ? (rightOffset !== undefined ? rightOffset : 0) : undefined,
          zIndex: stickyZIndex !== undefined ? stickyZIndex : undefined,
        }}
        data-label={label}
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        ref={ref as any}
        data-testid="table-cell"
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        {...(props as any)}
      >
        <Slottable>{children}</Slottable>
      </Component>
    );
  },
);

Table.displayName = "Table";
TableHeader.displayName = "Table.Header";
TableBody.displayName = "Table.Body";
TableFooter.displayName = "Table.Footer";
TableRow.displayName = "Table.Row";
TableHead.displayName = "Table.Head";
TableCell.displayName = "Table.Cell";

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
