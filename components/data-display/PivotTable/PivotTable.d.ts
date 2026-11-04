import { default as React } from '../../../../node_modules/react';
export type PivotTableAxisNode = {
    /** Unique within its axis. Passed back to `getValue`. */
    key: string;
    /**
     * Heading shown for this row or column. The label of a group is drawn inside its
     * expand / collapse button, so it must not contain links or other controls.
     */
    label: React.ReactNode;
    /** Nested headings. A node with children is a group; its own value is the subtotal. */
    children?: PivotTableAxisNode[];
};
export type PivotTableLabels = {
    /** Heading of the grand total row / column and of each subtotal column. */
    total?: string;
};
export type PivotTableProps = Omit<React.ComponentPropsWithoutRef<"table">, "children"> & {
    /** The row axis as a tree. Groups are drawn as an outline: one indented row per node. */
    rows: PivotTableAxisNode[];
    /** The column axis as a tree. Groups become headings that span their columns. */
    columns: PivotTableAxisNode[];
    /**
     * Returns the content of one cell. The component does not aggregate: a group key asks
     * for that group's subtotal and `null` asks for the grand total of that axis. Return
     * `null` or `undefined` for an empty cell. Group keys are asked on both axes: a row
     * group for its own row, a column group for its subtotal column and for the single
     * column it leaves when it is collapsed.
     */
    getValue: (rowKey: string | null, columnKey: string | null) => React.ReactNode;
    /** Heading of the row axis, shown in the top-left corner. */
    rowAxisLabel?: React.ReactNode;
    /** Visible title of the table, also its accessible name. */
    caption?: React.ReactNode;
    /**
     * Keys of the expanded row groups (controlled). A group that is not listed shows only
     * its own row, which carries its subtotal.
     */
    expandedRowValues?: string[];
    /** Row groups expanded on first render (uncontrolled). Defaults to every group. */
    defaultExpandedRowValues?: string[];
    /** Called with the new list of expanded row groups when a row group is expanded or collapsed. */
    onExpandedRowChange?: (values: string[]) => void;
    /**
     * Keys of the expanded column groups (controlled). A group that is not listed shows a
     * single column, which carries its subtotal: `getValue` receives the group's key.
     */
    expandedColumnValues?: string[];
    /** Column groups expanded on first render (uncontrolled). Defaults to every group. */
    defaultExpandedColumnValues?: string[];
    /** Called with the new list of expanded column groups when a column group is expanded or collapsed. */
    onExpandedColumnChange?: (values: string[]) => void;
    /**
     * Maximum height of the table (a number is px). Past it the table scrolls vertically
     * inside its own box.
     */
    maxHeight?: string | number;
    /**
     * Keeps the column headings in view while the table scrolls vertically. Every heading
     * level stays, stacked in order. Only has an effect together with `maxHeight`.
     */
    stickyHeader?: boolean;
    /**
     * Keeps the row headings in view while the table scrolls sideways. The column is only
     * pinned while it takes at most half of the visible width; in a narrower container it
     * scrolls with the rest, so that the values stay readable.
     */
    stickyRowHeaders?: boolean;
    /**
     * Renders only the rows in view (plus a few around them) and keeps the scroll height
     * with empty spacer rows. Use it for tables with hundreds of rows, together with
     * `maxHeight`. Rows must all have the same height, so keep labels and values on one line.
     */
    virtualized?: boolean;
    /** Adds a subtotal column after the columns of each expanded column group. */
    columnSubtotals?: boolean;
    /** Adds a grand total row at the bottom. */
    totalRow?: boolean;
    /** Adds a grand total column at the right edge. */
    totalColumn?: boolean;
    /** Text of the total headings, for when the built-in translations do not fit. */
    labels?: PivotTableLabels;
};
/**
 * PivotTable — draws already aggregated data as a table with multi-level row and column
 * headings, subtotals and grand totals. It only draws: grouping and summing stay with the
 * caller, who answers `getValue(rowKey, columnKey)` for every cell.
 *
 * Groups on both axes can be collapsed with the button in their heading (Enter or Space):
 * a row group to its subtotal row, a column group to a single subtotal column. The button
 * is named by the group label, so the heading still reads as the plain label when a cell
 * announces it.
 *
 * Every cell lists the headings it belongs to in its `headers` attribute, so a screen
 * reader announces the full row path and column path of a value.
 *
 * The shell is its own (a sideways scroller and a plain `table`); rows and value cells are
 * `Table.Row` / `Table.Cell`, so spacing and density follow `Table`.
 *
 * Composition Contract:
 * - Managed by: App consumption
 * - Scroll lock: No (the table scrolls sideways inside its own box when it is wider than it)
 */
export declare const PivotTable: React.ForwardRefExoticComponent<Omit<Omit<React.DetailedHTMLProps<React.TableHTMLAttributes<HTMLTableElement>, HTMLTableElement>, "ref">, "children"> & {
    /** The row axis as a tree. Groups are drawn as an outline: one indented row per node. */
    rows: PivotTableAxisNode[];
    /** The column axis as a tree. Groups become headings that span their columns. */
    columns: PivotTableAxisNode[];
    /**
     * Returns the content of one cell. The component does not aggregate: a group key asks
     * for that group's subtotal and `null` asks for the grand total of that axis. Return
     * `null` or `undefined` for an empty cell. Group keys are asked on both axes: a row
     * group for its own row, a column group for its subtotal column and for the single
     * column it leaves when it is collapsed.
     */
    getValue: (rowKey: string | null, columnKey: string | null) => React.ReactNode;
    /** Heading of the row axis, shown in the top-left corner. */
    rowAxisLabel?: React.ReactNode;
    /** Visible title of the table, also its accessible name. */
    caption?: React.ReactNode;
    /**
     * Keys of the expanded row groups (controlled). A group that is not listed shows only
     * its own row, which carries its subtotal.
     */
    expandedRowValues?: string[];
    /** Row groups expanded on first render (uncontrolled). Defaults to every group. */
    defaultExpandedRowValues?: string[];
    /** Called with the new list of expanded row groups when a row group is expanded or collapsed. */
    onExpandedRowChange?: (values: string[]) => void;
    /**
     * Keys of the expanded column groups (controlled). A group that is not listed shows a
     * single column, which carries its subtotal: `getValue` receives the group's key.
     */
    expandedColumnValues?: string[];
    /** Column groups expanded on first render (uncontrolled). Defaults to every group. */
    defaultExpandedColumnValues?: string[];
    /** Called with the new list of expanded column groups when a column group is expanded or collapsed. */
    onExpandedColumnChange?: (values: string[]) => void;
    /**
     * Maximum height of the table (a number is px). Past it the table scrolls vertically
     * inside its own box.
     */
    maxHeight?: string | number;
    /**
     * Keeps the column headings in view while the table scrolls vertically. Every heading
     * level stays, stacked in order. Only has an effect together with `maxHeight`.
     */
    stickyHeader?: boolean;
    /**
     * Keeps the row headings in view while the table scrolls sideways. The column is only
     * pinned while it takes at most half of the visible width; in a narrower container it
     * scrolls with the rest, so that the values stay readable.
     */
    stickyRowHeaders?: boolean;
    /**
     * Renders only the rows in view (plus a few around them) and keeps the scroll height
     * with empty spacer rows. Use it for tables with hundreds of rows, together with
     * `maxHeight`. Rows must all have the same height, so keep labels and values on one line.
     */
    virtualized?: boolean;
    /** Adds a subtotal column after the columns of each expanded column group. */
    columnSubtotals?: boolean;
    /** Adds a grand total row at the bottom. */
    totalRow?: boolean;
    /** Adds a grand total column at the right edge. */
    totalColumn?: boolean;
    /** Text of the total headings, for when the built-in translations do not fit. */
    labels?: PivotTableLabels;
} & React.RefAttributes<HTMLTableElement>>;
