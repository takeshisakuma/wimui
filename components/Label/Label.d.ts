import { default as React } from '../../../node_modules/react';
type LabelProps = React.ComponentPropsWithoutRef<"label"> & {
    label: string;
    required?: boolean;
    showOptional?: boolean;
    className?: string;
};
/**
 * フォーム項目のラベルを表示するコンポーネント。
 */
export declare const Label: ({ label, required, showOptional, className, children, ...props }: LabelProps) => import("react/jsx-runtime").JSX.Element;
export {};
