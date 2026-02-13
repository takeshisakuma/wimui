import { default as React } from '../../../node_modules/react';
type ParagraphProps = React.ComponentPropsWithoutRef<"p"> & {
    size?: "ex-small" | "small" | "medium" | "large" | "ex-large";
    color?: "black" | "deepgray" | "gray" | "lightgray" | "white" | "error";
    weight?: "normal" | "bold";
    lineHeight?: "normal-jpan" | "tight-jpan" | "loose-jpan" | "normal-latn" | "tight-latn" | "loose-latn";
    style?: "normal" | "italic";
    decoration?: "line-through" | "underline" | "highlight" | "none";
    content: string;
};
export declare const Paragraph: ({ size, content, color, weight, lineHeight, style, decoration, className, ...props }: ParagraphProps) => import("react/jsx-runtime").JSX.Element;
export {};
