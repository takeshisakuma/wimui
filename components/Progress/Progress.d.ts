import { default as React } from '../../../node_modules/react';
import { ComponentSize } from '../../types/tokens';
type ProgressProps = React.ComponentPropsWithoutRef<"div"> & {
    value?: number;
    max?: number;
    status?: "primary" | "secondary" | "success" | "warning" | "error" | "neutral";
    size?: ComponentSize;
    label?: string;
    showValue?: boolean;
    indeterminate?: boolean;
};
/**
 * プログレスバーを表示するためのコンポーネント。
 */
export declare const Progress: ({ value, max, status, size, label, showValue, indeterminate, className, ...props }: ProgressProps) => import("react/jsx-runtime").JSX.Element;
export {};
