import { default as React } from '../../../node_modules/react';
type IndicatorProps = {
    children?: React.ReactNode;
    color?: "primary" | "success" | "error" | "warning" | "neutral";
    size?: "small" | "medium" | "large";
    position?: "top-right" | "top-left" | "bottom-right" | "bottom-left";
    pulse?: boolean;
    inline?: boolean;
    className?: string;
};
/**
 * 要素の状態（オンライン、未読、エラーなど）を示す小さなドットコンポーネント。
 */
export declare const Indicator: ({ children, color, size, position, pulse, inline, className, }: IndicatorProps) => import("react/jsx-runtime").JSX.Element;
export {};
