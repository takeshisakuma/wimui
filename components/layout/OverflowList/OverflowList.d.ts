import { default as React } from '../../../../node_modules/react';
import { WimSpacing } from '../../../types/tokens';
import { CollapseFrom } from './getVisibleCount';
export type OverflowListProps<T> = Omit<React.ComponentPropsWithoutRef<"div">, "children"> & {
    /**
     * Items to lay out in a single row, in reading order.
     */
    items: T[];
    /**
     * Renders one item. Return a single element: each top-level element is measured as one item.
     */
    renderItem: (item: T, index: number) => React.ReactNode;
    /**
     * Renders the overflow indicator from the items that did not fit (for example a "+N" button
     * that opens a Popover listing them). Return a single element. Not rendered while every item
     * fits, unless `alwaysRenderOverflow` is set. The hidden items are not in the DOM, so the
     * indicator is how users — including keyboard and screen reader users — reach them.
     */
    renderOverflow: (hiddenItems: T[]) => React.ReactNode;
    /**
     * The side items are collapsed from. `"end"` keeps the first items (tags, toolbars);
     * `"start"` keeps the last ones (a path keeps the current folder); `"middle"` keeps the first
     * item and collapses from the second one, with the indicator right after the first item
     * (a breadcrumb keeps its root and the current page).
     * @default "end"
     */
    collapseFrom?: CollapseFrom;
    /**
     * Renders the row as a list. `renderItem` and `renderOverflow` must then return `<li>`
     * elements. Without it, the row is a `div`, which a list may not contain.
     */
    listElement?: "ul" | "ol";
    /**
     * Items that stay visible however narrow the row gets. They may then overflow the row.
     * @default 0
     */
    minVisibleItems?: number;
    /**
     * Renders the overflow indicator even when every item fits (it receives an empty array).
     * @default false
     */
    alwaysRenderOverflow?: boolean;
    /**
     * Called with the hidden items whenever the set of hidden items changes.
     */
    onOverflow?: (hiddenItems: T[]) => void;
    /**
     * Gap between items: a spacing token name (`"sm"`, `"md"`, …).
     * @default "sm"
     */
    gap?: WimSpacing;
    /**
     * If true, the list will be rendered as its child, merging its props onto that child.
     */
    asChild?: boolean;
    /**
     * The element that becomes the root (in place of `div`) when `asChild` is set. The items are
     * rendered inside it. Ignored without `asChild`.
     */
    children?: React.ReactNode;
};
/**
 * Lays out items in a single row and collapses the ones that do not fit into an overflow
 * indicator ("+N"), recomputed whenever the row or an item changes width. It measures and
 * collapses; what the indicator shows (a count, a Popover, a Menu) is up to `renderOverflow`.
 *
 * The list fills its container. Its own minimum width is 0 and its preferred width is every item
 * in one row, whatever is folded at the moment, so it also folds inside a table cell or an
 * inline-block and grows back when there is room.
 *
 * Composition Contract:
 * - Managed by: App consumption
 * - Scroll lock: No
 * - Does not own the hidden items' disclosure — compose Popover / Menu in `renderOverflow`
 * - Renders each item twice: once visible, once in an invisible, inert measuring layer
 */
export declare const OverflowList: (<T>(props: OverflowListProps<T> & {
    ref?: React.ForwardedRef<HTMLDivElement>;
}) => React.ReactElement) & {
    displayName?: string;
};
