type Option = {
    label: string;
    value: string;
    disabled?: boolean;
};
type CheckboxGroupProps = {
    options: Option[];
    value?: string[];
    defaultValue?: string[];
    onChange?: (value: string[]) => void;
    direction?: "vertical" | "horizontal";
    name?: string;
    className?: string;
    label?: string;
    error?: string;
    required?: boolean;
    disabled?: boolean;
};
/**
 * CheckboxGroup component to manage multiple checkboxes.
 */
export declare const CheckboxGroup: ({ options, value, defaultValue, onChange, direction, name, className, label, error, required, disabled, }: CheckboxGroupProps) => import("react/jsx-runtime").JSX.Element;
export {};
