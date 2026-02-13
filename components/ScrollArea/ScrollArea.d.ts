import { default as React } from '../../../node_modules/react';
type ScrollAreaProps = React.ComponentPropsWithoutRef<"div"> & {
    text?: string;
    children?: React.ReactNode;
    scrollAxis?: "x" | "y" | "both";
    maxHeight?: string;
};
export declare const ScrollArea: ({ text, children, scrollAxis, maxHeight, style, className, ...props }: ScrollAreaProps) => import("react/jsx-runtime").JSX.Element;
export {};
