import { default as React } from '../../../../node_modules/react';
import { ResponsiveProp } from './grid-utils';
export declare const Grid: React.ForwardRefExoticComponent<Omit<React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>, "ref"> & {
    /**
     * If true, the grid will be rendered as its child, merging its props onto that child.
     * The container-query wrapper div is preserved to maintain responsive column behaviour.
     */
    asChild?: boolean;
    /** Number of columns (or a responsive object per breakpoint) */
    cols?: ResponsiveProp<number | string>;
    /** Number of rows or an explicit grid-template-rows value */
    rows?: number | string;
    /** Gap between cells (or a responsive object per breakpoint) */
    gap?: ResponsiveProp<number | string>;
    /** Gap between columns (or a responsive object per breakpoint) */
    columnGap?: ResponsiveProp<number | string>;
    /** Gap between rows (or a responsive object per breakpoint) */
    rowGap?: ResponsiveProp<number | string>;
    /** Alignment of items along the block (vertical) axis */
    align?: "start" | "center" | "end" | "stretch";
    /** Justification of items along the inline (horizontal) axis */
    justify?: "start" | "center" | "end" | "between" | "around" | "stretch";
    /** Grid auto-flow direction */
    flow?: "row" | "column" | "dense" | "row dense" | "column dense";
    /** Whether to render as an inline grid */
    inline?: boolean;
} & React.RefAttributes<any>>;
