import { default as React } from '../../../../node_modules/react';
import { ComponentSize } from '../../../types/tokens';
type QuoteProps = React.ComponentPropsWithoutRef<"blockquote"> & {
    size?: ComponentSize;
    color?: "black" | "deepgray" | "gray" | "lightgray" | "white" | "primary" | "success" | "warning" | "error" | "info";
    content: string;
    cite?: string;
    border?: boolean;
};
export declare const Quote: ({ size, content, cite, color, border, className, ...props }: QuoteProps) => import("react/jsx-runtime").JSX.Element;
export {};
