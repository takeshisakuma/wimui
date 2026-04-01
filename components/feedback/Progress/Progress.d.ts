import { default as React } from '../../../../node_modules/react';
import { ComponentSize, WimIntent } from '../../../types/tokens';
type ProgressProps = React.ComponentPropsWithoutRef<"div"> & {
    value?: number;
    max?: number;
    intent?: WimIntent;
    size?: ComponentSize;
    label?: string;
    showValue?: boolean;
    indeterminate?: boolean;
};
/**
 * プログレスバーを表示するためのコンポーネント。
 */
export declare const Progress: ({ value, max, intent, size, label, showValue, indeterminate, className, ...props }: ProgressProps) => import("react/jsx-runtime").JSX.Element;
export {};
