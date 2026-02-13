import { default as React } from '../../../node_modules/react';
type QuoteProps = React.ComponentPropsWithoutRef<"blockquote"> & {
    size?: "small" | "medium" | "large";
    color?: "black" | "deepgray" | "gray" | "lightgray" | "white";
    content: string;
    cite?: string;
    border?: boolean;
};
export declare const Quote: ({ size, content, cite, color, border, className, ...props }: QuoteProps) => import("react/jsx-runtime").JSX.Element;
export {};
