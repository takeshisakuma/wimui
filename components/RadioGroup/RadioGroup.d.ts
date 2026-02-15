type Option = {
    label: string;
    value: string;
    disabled?: boolean;
};
type RadioGroupProps = {
    options: Option[];
    value?: string;
    defaultValue?: string;
    onChange?: (value: string) => void;
    direction?: "vertical" | "horizontal";
    name?: string;
    className?: string;
    label?: string;
};
/**
 * RadioGroup component to manage multiple radio buttons.
 */
export declare const RadioGroup: ({ options, value, defaultValue, onChange, direction, name, className, label, }: RadioGroupProps) => import("react/jsx-runtime").JSX.Element;
export {};
