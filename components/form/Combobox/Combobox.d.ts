import { default as React } from '../../../../node_modules/react';
export type ComboboxOption = {
    label: string;
    value: string;
};
export type ComboboxLabels = {
    noResults?: React.ReactNode;
};
export type ComboboxProps = {
    /** List of suggestion options */
    options: ComboboxOption[];
    /** Callback when an option is selected */
    onChange?: (option: ComboboxOption) => void;
    /** Placeholder for the input */
    placeholder?: string;
    /** Field label */
    label?: React.ReactNode;
    /** Error message */
    error?: string;
    /** Whether to show the required indicator */
    required?: boolean;
    /** Layout direction of label and field */
    layout?: "vertical" | "horizontal";
    /** Whether to show the search icon */
    showSearchIcon?: boolean;
    /** Whether to show a clear button when value is present */
    allowClear?: boolean;
    /** Initial input value (uncontrolled) */
    defaultValue?: string;
    /** Additional class names */
    className?: string;
    /** Whether the field is disabled */
    disabled?: boolean;
    /** Whether to take full width of parent */
    fullWidth?: boolean;
    /** Unique ID for the component */
    id?: string;
    /** Labels for internationalization */
    labels?: ComboboxLabels;
};
/**
 * Combobox component combining an input with a suggestion list.
 */
export declare const Combobox: {
    ({ options, onChange, placeholder, showSearchIcon, allowClear, defaultValue, className, disabled, label, error, required, layout, fullWidth, id: customId, labels, ...props }: ComboboxProps): React.JSX.Element;
    displayName: string;
};
