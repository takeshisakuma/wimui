import { default as React } from '../../../../node_modules/react';
export interface VirtualListProps<T> {
    /** Array of items to display */
    items: T[];
    /** Height of each row (px) */
    itemHeight: number;
    /** Total height of the list (px) */
    height: number | string;
    /** Render function for each item */
    renderItem: (item: T, index: number) => React.ReactNode;
    /** Number of extra items to render outside the visible range */
    overscan?: number;
    /** Additional class names */
    className?: string;
    /** Role of the element wrapping each item (for accessibility) */
    itemRole?: string;
    /** Role of the whole list (for accessibility) */
    role?: string;
    /** Accessible label */
    "aria-label"?: string;
    /** ID of the element that labels the list */
    "aria-labelledby"?: string;
}
export declare const VirtualList: <T>(props: VirtualListProps<T> & {
    ref?: React.ForwardedRef<HTMLDivElement>;
}) => React.ReactElement;
