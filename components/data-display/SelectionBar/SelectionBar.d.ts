import { default as React } from '../../../../node_modules/react';
export type SelectionBarProps = Omit<React.ComponentPropsWithoutRef<"div">, "children"> & {
    /**
     * Number of selected items. The bar shows while it is above 0. Keep the component mounted
     * while the count is 0 as well: it holds the status region that announces the count, and a
     * region that appears together with its text is not read by screen readers.
     */
    count: number;
    /**
     * Called by the built-in "Clear selection" button. Leave it out to render no clear button.
     */
    onClear?: () => void;
    /**
     * Actions for the selected items (`Button size="sm"`, `IconButton`, `Popconfirm` ...). They
     * are placed in a `Toolbar`, so the arrow keys move between them.
     */
    children?: React.ReactNode;
    /**
     * Text that states the count. Defaults to the built-in "{count} selected" (en / ja / pt).
     */
    countLabel?: (count: number) => React.ReactNode;
    /**
     * Label of the clear button. Defaults to the built-in "Clear selection".
     */
    clearLabel?: string;
    /**
     * Where focus goes when the bar closes after focus was in it — after the clear button, or
     * after a confirmation opened from the bar (`Popconfirm`) whose trigger is gone. Without it,
     * focus moves to the first focusable element after the bar (with `DataGrid`, the grid).
     */
    returnFocusRef?: React.RefObject<HTMLElement | null>;
};
/**
 * SelectionBar shows the number of selected rows, the actions for them and a way to clear the
 * selection. Place it above the Table / DataGrid / List it acts on, and keep it mounted.
 *
 * - The count is announced from a status region that is always present, both when it changes
 *   and when the selection is cleared.
 * - When the bar closes after focus was in it, focus moves to `returnFocusRef` or to the first
 *   focusable element after the bar, instead of falling to the top of the page.
 *
 * Composition Contract:
 * - Managed by: App consumption (the selection state stays with the caller)
 * - Scroll lock: No
 * - Does not own action semantics — compose Button / IconButton / Popconfirm as children
 */
export declare const SelectionBar: React.ForwardRefExoticComponent<Omit<Omit<React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>, "ref">, "children"> & {
    /**
     * Number of selected items. The bar shows while it is above 0. Keep the component mounted
     * while the count is 0 as well: it holds the status region that announces the count, and a
     * region that appears together with its text is not read by screen readers.
     */
    count: number;
    /**
     * Called by the built-in "Clear selection" button. Leave it out to render no clear button.
     */
    onClear?: () => void;
    /**
     * Actions for the selected items (`Button size="sm"`, `IconButton`, `Popconfirm` ...). They
     * are placed in a `Toolbar`, so the arrow keys move between them.
     */
    children?: React.ReactNode;
    /**
     * Text that states the count. Defaults to the built-in "{count} selected" (en / ja / pt).
     */
    countLabel?: (count: number) => React.ReactNode;
    /**
     * Label of the clear button. Defaults to the built-in "Clear selection".
     */
    clearLabel?: string;
    /**
     * Where focus goes when the bar closes after focus was in it — after the clear button, or
     * after a confirmation opened from the bar (`Popconfirm`) whose trigger is gone. Without it,
     * focus moves to the first focusable element after the bar (with `DataGrid`, the grid).
     */
    returnFocusRef?: React.RefObject<HTMLElement | null>;
} & React.RefAttributes<HTMLDivElement>>;
