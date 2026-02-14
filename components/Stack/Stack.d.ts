import { default as React } from '../../../node_modules/react';
import { BoxProps } from '../Box/Box';
import { ResponsiveProp } from '../Grid/grid-utils';
export type StackProps<C extends React.ElementType = "div"> = BoxProps<C> & {
    /** Gap between children. Can be a number (px) or a spacing token (e.g., 'sm', 'md', 'lg'). */
    gap?: number | string;
    /** Stack direction */
    direction?: ResponsiveProp<"row" | "column">;
    /** Align-items */
    align?: "start" | "center" | "end" | "stretch" | "baseline" | React.CSSProperties["alignItems"];
    /** Justify-content */
    justify?: "start" | "center" | "end" | "between" | "around" | "evenly" | "stretch" | React.CSSProperties["justifyContent"];
};
/**
 * Stack component is used to distribute space between elements in a vertical or horizontal layout.
 */
export declare const Stack: React.ForwardRefExoticComponent<Omit<StackProps<React.ElementType<any, keyof React.JSX.IntrinsicElements>>, "ref"> & React.RefAttributes<any>>;
