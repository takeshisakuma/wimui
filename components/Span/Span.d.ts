import { default as React } from '../../../node_modules/react';
import { Icon } from '../Icon/Icon';
type SpanProps = React.ComponentPropsWithoutRef<"span"> & {
    size?: "ex-small" | "small" | "medium" | "large" | "ex-large";
    color?: "black" | "deepgray" | "gray" | "lightgray" | "white" | "error" | "primary" | "success" | "warning" | "info";
    weight?: "normal" | "bold";
    style?: "normal" | "italic";
    decoration?: "line-through" | "underline" | "highlight" | "none";
    content: string;
    iconName?: React.ComponentProps<typeof Icon>["name"];
    iconPosition?: "left" | "right";
};
export declare const Span: ({ size, content, color, weight, style, iconName, iconPosition, decoration, className, ...props }: SpanProps) => import("react/jsx-runtime").JSX.Element;
export {};
