import { default as React } from '../../../../node_modules/react';
import { Icon } from '../../media/Icon/Icon';
import { WimColor } from '../../../types/tokens';
type SpanProps = React.ComponentPropsWithoutRef<"span"> & {
    size?: "xs" | "sm" | "md" | "lg" | "xl";
    color?: WimColor;
    weight?: "normal" | "bold" | "medium";
    fontStyle?: "normal" | "italic";
    decoration?: "line-through" | "underline" | "highlight" | "none";
    content?: React.ReactNode;
    iconName?: React.ComponentProps<typeof Icon>["name"];
    iconPosition?: "left" | "right";
};
export declare const Span: ({ size, content, color, weight, fontStyle, iconName, iconPosition, decoration, className, style, children, ...props }: SpanProps) => import("react/jsx-runtime").JSX.Element;
export {};
