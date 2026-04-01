import { default as React } from '../../../../node_modules/react';
import { WimColor, WimLineHeight } from '../../../types/tokens';
type ParagraphProps = Omit<React.ComponentPropsWithoutRef<"p">, "content"> & {
    size?: "xs" | "sm" | "md" | "lg" | "xl";
    color?: WimColor;
    weight?: "normal" | "bold" | "medium";
    lineHeight?: WimLineHeight;
    fontStyle?: "normal" | "italic";
    decoration?: "line-through" | "underline" | "highlight" | "none";
    content?: React.ReactNode;
};
export declare const Paragraph: ({ size, content, color, weight, lineHeight, fontStyle, decoration, className, style, children, ...props }: ParagraphProps) => import("react/jsx-runtime").JSX.Element;
export {};
