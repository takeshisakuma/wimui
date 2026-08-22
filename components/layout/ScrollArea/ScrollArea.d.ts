import { default as React } from '../../../../node_modules/react';
type ScrollAreaProps = React.ComponentPropsWithoutRef<"div"> & {
    /** Content to display (alternative to children) */
    text?: React.ReactNode;
    /** Content to display */
    children?: React.ReactNode;
    /** Axis along which scrolling is allowed */
    scrollAxis?: "x" | "y" | "both";
    /** Maximum height before scrolling (a CSS value, so units other than px are supported) */
    maxHeight?: string;
};
export declare const ScrollArea: ({ text, children, scrollAxis, maxHeight, style, className, ...props }: ScrollAreaProps) => React.JSX.Element;
export {};
