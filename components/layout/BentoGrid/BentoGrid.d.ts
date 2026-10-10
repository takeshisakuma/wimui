import { default as React } from '../../../../node_modules/react';
export type BentoGridColumns = 2 | 3 | 4;
type BentoGridProps = React.ComponentPropsWithoutRef<"div"> & {
    /** Grid items (typically BentoGrid.Item elements) */
    children?: React.ReactNode;
    /**
     * How many columns the grid uses from container width `md` up; below that it is
     * always a single column. Pick it from what the tiles hold — three columns is a
     * layout decision, not a default to accept, and three equal tiles is the shape
     * readers have learnt to skip.
     * @default 3
     */
    columns?: BentoGridColumns;
    /** Fixed height of each grid row (`grid-auto-rows`). Any CSS length; defaults to `18rem`. Lower it when tiles hold compact content so they don't read as mostly-empty panels. */
    rowHeight?: string;
};
export declare const BentoGrid: {
    ({ className, children, columns, rowHeight, style, ...props }: BentoGridProps): React.JSX.Element;
    displayName: string;
};
export type BentoGridItemProps = React.ComponentPropsWithoutRef<"div"> & {
    title?: React.ReactNode;
    description?: React.ReactNode;
    header?: React.ReactNode;
    icon?: React.ReactNode;
    /**
     * How many columns the tile occupies where the grid is at its full width.
     * Below that width the grid is a single column and every tile spans it.
     * A span wider than the grid's `columns` is clamped to it.
     *
     * Give one tile more room than the rest: tiles that all span 1 are the equal
     * grid the composition rules call out, whatever their contents.
     * @default 1
     */
    span?: 1 | 2 | 3 | 4;
    /**
     * How many rows the tile occupies where the grid is at its full width.
     * @default 1
     */
    rowSpan?: 1 | 2;
};
export declare const BentoGridItem: {
    ({ className, title, description, header, icon, span: spanProp, rowSpan, ...props }: BentoGridItemProps): React.JSX.Element;
    displayName: string;
};
export {};
