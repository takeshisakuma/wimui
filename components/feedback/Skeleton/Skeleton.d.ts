import { default as React } from '../../../../node_modules/react';
type SkeletonProps = React.ComponentPropsWithoutRef<"div"> & {
    /**
     * Shape of the skeleton.
     * - `text`: shaped like a line of text.
     * - `rect`: rectangle.
     * - `circle`: circle.
     * @default "text"
     */
    variant?: "text" | "rect" | "circle";
    /**
     * Type of animation.
     * - `pulse`: slow fade in and out.
     * - `wave`: wave moving from left to right.
     * - `none`: no animation.
     * @default "pulse"
     */
    animation?: "pulse" | "wave" | "none";
    /**
     * Width, including a CSS unit (px, %, rem, etc.).
     */
    width?: string | number;
    /**
     * Height, including a CSS unit (px, %, rem, etc.).
     */
    height?: string | number;
};
/**
 * Placeholder displayed while content is loading.
 */
export declare const Skeleton: ({ variant, animation, width, height, style, className, ...props }: SkeletonProps) => React.JSX.Element;
export {};
