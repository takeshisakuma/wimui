import { default as React } from '../../../../node_modules/react';
export type DividerProps = React.ComponentPropsWithoutRef<"div"> & {
    /** Orientation of the divider */
    orientation?: "horizontal" | "vertical";
    /** Thickness of the line (px) */
    thickness?: number;
};
/**
 * `Divider` is a component for visually separating content.
 */
export declare const Divider: ({ orientation, thickness, className, style, ...props }: DividerProps) => React.JSX.Element;
