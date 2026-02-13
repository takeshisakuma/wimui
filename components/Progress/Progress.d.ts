import { default as React } from '../../../node_modules/react';
type ProgressProps = React.ComponentPropsWithoutRef<"div"> & {
    value?: number;
    max?: number;
    color?: "primary" | "secondary" | "success" | "warning" | "error" | "neutral";
    size?: "sm" | "md" | "lg";
    label?: string;
    showValue?: boolean;
    indeterminate?: boolean;
};
/**
 * プログレスバーを表示するためのコンポーネント。
 */
export declare const Progress: ({ value, max, color, size, label, showValue, indeterminate, className, ...props }: ProgressProps) => import("react/jsx-runtime").JSX.Element;
export {};
