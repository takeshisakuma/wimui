import { default as React } from '../../../../node_modules/react';
export type DividerProps = React.ComponentPropsWithoutRef<"div"> & {
    /** Orientation of the divider */
    orientation?: "horizontal" | "vertical";
    /**
     * Thickness of the line, in pixels. Left out, the line is as thick as every
     * other hairline in the theme, so a theme that thickens its borders thickens
     * this too.
     */
    thickness?: number;
};
/**
 * `Divider` is a component for visually separating content.
 */
export declare const Divider: ({ orientation, thickness, className, style, ...props }: DividerProps) => React.JSX.Element;
