import { default as React } from '../../../../node_modules/react';
export type ComboboxOption = {
    label: string;
    value: string;
};
export type ComboboxLabels = {
    noResults?: React.ReactNode;
};
export type ComboboxProps = {
    options: ComboboxOption[];
    onSelect?: (option: ComboboxOption) => void;
    placeholder?: string;
    label?: React.ReactNode;
    error?: string;
    required?: boolean;
    layout?: "vertical" | "horizontal";
    showSearchIcon?: boolean;
    allowClear?: boolean;
    defaultValue?: string;
    className?: string;
    disabled?: boolean;
    id?: string;
    labels?: ComboboxLabels;
};
/**
 * 入力とサジェストリストを組み合わせたコンボボックスコンポーネント。
 */
export declare const Combobox: ({ options, onSelect, placeholder, showSearchIcon, allowClear, defaultValue, className, disabled, label, error, required, layout, id: customId, labels, ...props }: ComboboxProps) => import("react/jsx-runtime").JSX.Element;
