export type MultiSelectOption = {
    label: string;
    value: string;
    disabled?: boolean;
};
export type MultiSelectProps = {
    options: MultiSelectOption[];
    value?: string[];
    onChange?: (value: string[]) => void;
    placeholder?: string;
    label?: string;
    error?: string;
    required?: boolean;
    layout?: "vertical" | "horizontal";
    className?: string;
    disabled?: boolean;
    defaultValue?: string[];
    /** Whether to show a clear button to remove all selections */
    allowClear?: boolean;
    /** Unique ID for the component */
    id?: string;
    "aria-label"?: string;
    "aria-labelledby"?: string;
    "aria-describedby"?: string;
};
/**
 * ユーザーが定義済みの選択肢から複数を選択するためのドロップダウンメニュー。
 */
export declare const MultiSelect: ({ options, value, onChange, placeholder, label, error, required, layout, className, disabled, defaultValue, allowClear, id: customId, ...props }: MultiSelectProps) => import("react/jsx-runtime").JSX.Element;
