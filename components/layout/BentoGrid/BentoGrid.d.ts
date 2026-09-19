import { default as React } from '../../../../node_modules/react';
type BentoGridProps = React.ComponentPropsWithoutRef<"div"> & {
    /** Grid items (typically BentoGrid.Item elements) */
    children?: React.ReactNode;
    /** Fixed height of each grid row (`grid-auto-rows`). Any CSS length; defaults to `18rem`. Lower it when tiles hold compact content so they don't read as mostly-empty panels. */
    rowHeight?: string;
};
export declare const BentoGrid: {
    ({ className, children, rowHeight, style, ...props }: BentoGridProps): React.JSX.Element;
    displayName: string;
};
export type BentoGridItemProps = React.ComponentPropsWithoutRef<"div"> & {
    title?: React.ReactNode;
    description?: React.ReactNode;
    header?: React.ReactNode;
    icon?: React.ReactNode;
    /**
     * How many columns the tile occupies where the grid is 3 columns wide.
     * Below that width the grid is a single column and every tile spans it.
     * @default 1
     */
    span?: 1 | 2 | 3;
    /**
     * How many rows the tile occupies where the grid is 3 columns wide.
     * @default 1
     */
    rowSpan?: 1 | 2;
};
export declare const BentoGridItem: {
    ({ className, title, description, header, icon, span, rowSpan, ...props }: BentoGridItemProps): React.JSX.Element;
    displayName: string;
};
export {};
