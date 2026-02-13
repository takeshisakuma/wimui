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
    className?: string;
    disabled?: boolean;
    defaultValue?: string[];
};
/**
 * ユーザーが定義済みの選択肢から複数を選択するためのドロップダウンメニュー。
 */
export declare const MultiSelect: ({ options, value, onChange, placeholder, label, className, disabled, defaultValue, ...props }: MultiSelectProps) => import("react/jsx-runtime").JSX.Element;
