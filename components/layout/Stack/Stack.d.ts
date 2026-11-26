import { default as React } from '../../../../node_modules/react';
import { BoxProps } from '../../layout/Box/Box';
import { ResponsiveProp } from '../../layout/Grid/grid-utils';
export type StackProps = Omit<BoxProps, "as"> & {
    /** Whether to render as a child element. */
    asChild?: boolean;
    /** Gap between children. Can be a number (px) or a spacing token (e.g., 'sm', 'md', 'lg'). */
    gap?: number | string;
    /** Stack direction */
    direction?: ResponsiveProp<"row" | "column">;
    /** Align-items */
    align?: "start" | "center" | "end" | "stretch" | "baseline" | React.CSSProperties["alignItems"];
    /** Justify-content */
    justify?: "start" | "center" | "end" | "between" | "around" | "evenly" | "stretch" | React.CSSProperties["justifyContent"];
    /** Whether children should wrap */
    wrap?: boolean | React.CSSProperties["flexWrap"];
};
/**
 * Stack component is used to distribute space between elements in a vertical or horizontal layout.
 */
export declare const Stack: React.ForwardRefExoticComponent<Omit<BoxProps, "as"> & {
    /** Whether to render as a child element. */
    asChild?: boolean;
    /** Gap between children. Can be a number (px) or a spacing token (e.g., 'sm', 'md', 'lg'). */
    gap?: number | string;
    /** Stack direction */
    direction?: ResponsiveProp<"row" | "column">;
    /** Align-items */
    align?: "start" | "center" | "end" | "stretch" | "baseline" | React.CSSProperties["alignItems"];
    /** Justify-content */
    justify?: "start" | "center" | "end" | "between" | "around" | "evenly" | "stretch" | React.CSSProperties["justifyContent"];
    /** Whether children should wrap */
    wrap?: boolean | React.CSSProperties["flexWrap"];
} & React.RefAttributes<HTMLDivElement>>;
