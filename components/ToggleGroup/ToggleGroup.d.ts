type Option = {
    label?: string;
    value: string;
    iconName?: any;
    disabled?: boolean;
};
type ToggleGroupProps = {
    options: Option[];
    value?: string | string[];
    defaultValue?: string | string[];
    onChange?: (value: any) => void;
    selectionMode?: "single" | "multiple";
    size?: "small" | "medium" | "large";
    fullWidth?: boolean;
    className?: string;
};
/**
 * ToggleGroup component allows users to select one or multiple options from a set of buttons.
 */
export declare const ToggleGroup: ({ options, value, defaultValue, onChange, selectionMode, size, fullWidth, className, }: ToggleGroupProps) => import("react/jsx-runtime").JSX.Element;
export {};
