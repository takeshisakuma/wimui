import { default as React } from '../../../../node_modules/react';
import { FieldWidth } from '../../../types/tokens';
export type MultiSelectOption = {
    label: string;
    value: string;
    disabled?: boolean;
};
export type MultiSelectProps = {
    /** List of options */
    options: MultiSelectOption[];
    /** Selected values (controlled) */
    value?: string[];
    /** Callback when the selection changes */
    onChange?: (value: string[]) => void;
    /** Placeholder shown when nothing is selected */
    placeholder?: string;
    /** Field label */
    label?: string;
    /** Error message */
    error?: string;
    /** Whether to show the required indicator */
    required?: boolean;
    /** Layout direction of label and field */
    layout?: "vertical" | "horizontal";
    /** Additional class names */
    className?: string;
    /** Whether the field is disabled */
    disabled?: boolean;
    /** Initially selected values (uncontrolled) */
    defaultValue?: string[];
    /** Whether to show a clear button to remove all selections */
    allowClear?: boolean;
    /** Unique ID for the component */
    id?: string;
    /** Accessible label for the trigger when no visible label is provided */
    "aria-label"?: string;
    /** ID of the element that labels the field */
    "aria-labelledby"?: string;
    /** ID of the element that describes the field */
    "aria-describedby"?: string;
    /** Fixed width of the field (width token, CSS value, or number in px) */
    width?: FieldWidth | string | number;
    /** Whether to take full width of parent */
    fullWidth?: boolean;
};
/**
 * Dropdown menu for selecting multiple options from a predefined list.
 */
export declare const MultiSelect: {
    ({ options, value, onChange, placeholder, label, error, required, layout, className, disabled, defaultValue, allowClear, id: customId, width, fullWidth, ...props }: MultiSelectProps): React.JSX.Element;
    displayName: string;
};
