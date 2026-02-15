export type ComboboxOption = {
    label: string;
    value: string;
};
export type ComboboxProps = {
    options: ComboboxOption[];
    onSelect?: (option: ComboboxOption) => void;
    placeholder?: string;
    label?: string;
    showSearchIcon?: boolean;
    allowClear?: boolean;
    defaultValue?: string;
    className?: string;
    disabled?: boolean;
    id?: string;
};
/**
 * 入力とサジェストリストを組み合わせたコンボボックスコンポーネント。
 */
export declare const Combobox: ({ options, onSelect, placeholder, showSearchIcon, allowClear, defaultValue, className, disabled, label, id: customId, ...props }: ComboboxProps) => import("react/jsx-runtime").JSX.Element;
