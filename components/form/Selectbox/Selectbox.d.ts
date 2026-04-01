import { default as React } from '../../../../node_modules/react';
export type SelectboxOption = {
    label?: React.ReactNode;
    value?: string;
    disabled?: boolean;
    group?: string;
    type?: "option" | "separator";
};
export type SelectboxOptionGroup = {
    label: React.ReactNode;
    options: SelectboxOption[];
};
export type SelectboxProps = {
    options: SelectboxOption[] | SelectboxOptionGroup[];
    value?: string;
    onChange?: (value: string) => void;
    placeholder?: React.ReactNode;
    label?: string;
    className?: string;
    disabled?: boolean;
    defaultValue?: string;
    /** Enable search/filtering functionality */
    searchable?: boolean;
    /** Placeholder text for search input */
    searchPlaceholder?: string;
    /** Custom filter function */
    filterOption?: (option: SelectboxOption, searchValue: string) => boolean;
    /** Whether options are grouped */
    grouped?: boolean;
    /** Whether to show a clear button when a value is selected */
    allowClear?: boolean;
    /** Whether to take full width of parent */
    fullWidth?: boolean;
    /** Unique ID for the component */
    id?: string;
    error?: string;
    required?: boolean;
    layout?: "vertical" | "horizontal";
    "aria-label"?: string;
    "aria-labelledby"?: string;
    "aria-describedby"?: string;
    noOptionsFoundLabel?: string;
};
/**
 * ユーザーが定義済みの選択肢から1つを選択するためのプルダウンメニュー。
 */
export declare const Selectbox: ({ options, value, onChange, placeholder, label, error, required, layout, className, disabled, defaultValue, searchable, searchPlaceholder, filterOption, grouped, allowClear, fullWidth, id: customId, noOptionsFoundLabel, ...props }: SelectboxProps) => import("react/jsx-runtime").JSX.Element;
