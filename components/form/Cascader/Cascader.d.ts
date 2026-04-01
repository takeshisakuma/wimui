import { default as React } from '../../../../node_modules/react';
export type CascaderOption = {
    label: React.ReactNode;
    value: string;
    children?: CascaderOption[];
    disabled?: boolean;
};
export type CascaderProps = Omit<React.HTMLAttributes<HTMLDivElement>, "onChange"> & {
    options: CascaderOption[];
    value?: string[];
    onChange?: (value: string[], selectedOptions: CascaderOption[]) => void;
    placeholder?: React.ReactNode;
    label?: React.ReactNode;
    error?: string;
    required?: boolean;
    layout?: "vertical" | "horizontal";
    className?: string;
    disabled?: boolean;
    defaultValue?: string[];
    id?: string;
    /** Expand trigger mode */
    expandTrigger?: "click" | "hover";
    /** Custom separator for the display value */
    separator?: string;
    /** Whether to show a clear button when a value is selected */
    allowClear?: boolean;
    /** Accessible label for the trigger when no visible label is provided */
    "aria-label"?: string;
};
/**
 * 階層構造を持つデータから選択肢を辿って1つを選択するためのコンポーネント。
 */
export declare const Cascader: ({ options, value, onChange, placeholder, label, error, required, layout, className, disabled, defaultValue, id: customId, expandTrigger, separator, allowClear, "aria-label": ariaLabel, ...props }: CascaderProps) => import("react/jsx-runtime").JSX.Element;
