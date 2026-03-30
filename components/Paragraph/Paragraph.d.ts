import { default as React } from '../../../node_modules/react';
import { WimColor, WimLineHeight } from '../../types/tokens';
type ParagraphProps = React.ComponentPropsWithoutRef<"p"> & {
    size?: "xs" | "sm" | "md" | "lg" | "xl";
    color?: "black" | "deepgray" | "gray" | "lightgray" | "white" | "error" | "primary" | "success" | "warning" | "info" | WimColor;
    weight?: "normal" | "bold";
    lineHeight?: "normal-jpan" | "tight-jpan" | "loose-jpan" | "normal-latn" | "tight-latn" | "loose-latn" | WimLineHeight;
    fontStyle?: "normal" | "italic";
    decoration?: "line-through" | "underline" | "highlight" | "none";
    content: string;
};
export declare const Paragraph: ({ size, content, color, weight, lineHeight, fontStyle, decoration, className, style, ...props }: ParagraphProps) => import("react/jsx-runtime").JSX.Element;
export {};
