import { default as React } from '../../../../node_modules/react';
import { FieldIntent, FieldVariant, FieldWidth } from '../../../types/tokens';
export interface SmartSearchInputProps extends Omit<React.ComponentPropsWithoutRef<"textarea">, "onChange" | "onSubmit"> {
    /** Semantic intent of the field (e.g. error state) */
    intent?: FieldIntent;
    /** Visual style variant of the field */
    variant?: FieldVariant;
    /** Whether to take full width of parent */
    fullWidth?: boolean;
    /** Fixed width of the field (width token, CSS value, or number in px) */
    width?: FieldWidth | string | number;
    /** Field label */
    label?: React.ReactNode;
    /** Error message */
    error?: string;
    /** Whether to show the required indicator */
    required?: boolean;
    /** Layout direction of label and field */
    layout?: "vertical" | "horizontal";
    /** Maximum number of rows the input grows to before scrolling */
    maxRows?: number;
    /** Whether to show a clear button when value is present */
    allowClear?: boolean;
    /** Callback when the clear button is clicked */
    onClear?: () => void;
    /** Callback when the value is submitted with the Enter key */
    onSubmit?: (value: string) => void;
    /** Callback when the value changes */
    onChange?: (value: string) => void;
    /** Initial value (uncontrolled) */
    defaultValue?: string;
    /** Maximum number of characters */
    maxLength?: number;
}
/**
 * A search input that automatically expands into a multiline prompt area
 * when content grows, bridging the gap between standard search and AI prompts.
 */
export declare const SmartSearchInput: React.ForwardRefExoticComponent<SmartSearchInputProps & React.RefAttributes<HTMLTextAreaElement>>;
