export type SelectboxOption = {
    label?: string;
    value?: string;
    disabled?: boolean;
    group?: string;
    type?: "option" | "separator";
};
export type SelectboxOptionGroup = {
    label: string;
    options: SelectboxOption[];
};
export type SelectboxProps = {
    options: SelectboxOption[] | SelectboxOptionGroup[];
    value?: string;
    onChange?: (value: string) => void;
    placeholder?: string;
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
    /** Whether to use a native select element */
    native?: boolean;
    /** Unique ID for the component */
    id?: string;
};
/**
 * ユーザーが定義済みの選択肢から1つを選択するためのプルダウンメニュー。
 */
export declare const Selectbox: ({ options, value, onChange, placeholder, label, className, disabled, defaultValue, searchable, searchPlaceholder, filterOption, grouped, native, id: customId, ...props }: SelectboxProps) => import("react/jsx-runtime").JSX.Element;
