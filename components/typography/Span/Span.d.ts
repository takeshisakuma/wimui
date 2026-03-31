import { default as React } from '../../../../node_modules/react';
import { Icon } from '../../media/Icon/Icon';
import { WimColor } from '../../../types/tokens';
type SpanProps = React.ComponentPropsWithoutRef<"span"> & {
    size?: "xs" | "sm" | "md" | "lg" | "xl";
    color?: "black" | "deepgray" | "gray" | "lightgray" | "white" | "error" | "primary" | "success" | "warning" | "info" | WimColor;
    weight?: "normal" | "bold";
    fontStyle?: "normal" | "italic";
    decoration?: "line-through" | "underline" | "highlight" | "none";
    content: string;
    iconName?: React.ComponentProps<typeof Icon>["name"];
    iconPosition?: "left" | "right";
};
export declare const Span: ({ size, content, color, weight, fontStyle, iconName, iconPosition, decoration, className, style, ...props }: SpanProps) => import("react/jsx-runtime").JSX.Element;
export {};
