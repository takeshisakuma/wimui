import { default as React } from '../../../../node_modules/react';
export type SpoilerProps = React.ComponentPropsWithoutRef<"div"> & {
    /**
     * Number of text lines shown while collapsed.
     * @default 3
     */
    lines?: number;
    /**
     * Controlled expanded state. Use together with onExpandedChange.
     */
    expanded?: boolean;
    /**
     * Initial expanded state for uncontrolled usage.
     * @default false
     */
    defaultExpanded?: boolean;
    /**
     * Called with the next state when the toggle is activated.
     */
    onExpandedChange?: (expanded: boolean) => void;
    /**
     * Label of the toggle while collapsed.
     * @default t("spoiler.show_more")
     */
    showLabel?: React.ReactNode;
    /**
     * Label of the toggle while expanded.
     * @default t("spoiler.show_less")
     */
    hideLabel?: React.ReactNode;
};
/**
 * Spoiler collapses long text (reviews, comments, descriptions) to a fixed
 * number of lines via CSS line-clamp and reveals the rest with an accessible
 * "show more" toggle (aria-expanded / aria-controls). The toggle only appears
 * when the content actually overflows the collapsed height, and the clamped
 * text stays in the DOM so screen readers and in-page search still see it.
 *
 * Composition Contract:
 * - Managed by: App consumption
 * - Scroll lock: No
 * - Observers: Owns a ResizeObserver on its content (disconnected on
 *   unmount) to re-check overflow when the container or text changes.
 */
export declare const Spoiler: React.ForwardRefExoticComponent<Omit<React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>, "ref"> & {
    /**
     * Number of text lines shown while collapsed.
     * @default 3
     */
    lines?: number;
    /**
     * Controlled expanded state. Use together with onExpandedChange.
     */
    expanded?: boolean;
    /**
     * Initial expanded state for uncontrolled usage.
     * @default false
     */
    defaultExpanded?: boolean;
    /**
     * Called with the next state when the toggle is activated.
     */
    onExpandedChange?: (expanded: boolean) => void;
    /**
     * Label of the toggle while collapsed.
     * @default t("spoiler.show_more")
     */
    showLabel?: React.ReactNode;
    /**
     * Label of the toggle while expanded.
     * @default t("spoiler.show_less")
     */
    hideLabel?: React.ReactNode;
} & React.RefAttributes<HTMLDivElement>>;
