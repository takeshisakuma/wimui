import { default as React } from '../../../../node_modules/react';
export interface PromptInputProps extends Omit<React.ComponentPropsWithoutRef<"div">, "onChange" | "onSubmit"> {
    /** Current text value (controlled) */
    value?: string;
    /** Default value (uncontrolled) */
    defaultValue?: string;
    /** Callback when value changes */
    onChange?: (value: string) => void;
    /** Callback when user submits (Enter or button click) */
    onSubmit?: (value: string) => void;
    /** Placeholder text */
    placeholder?: string;
    /** Maximum number of characters */
    maxLength?: number;
    /** Whether the input is disabled */
    disabled?: boolean;
    /** Whether the input is in a loading state */
    loading?: boolean;
    /** Whether to show the attachment button */
    showAttach?: boolean;
    /** Callback when attachment button is clicked */
    onAttach?: () => void;
    /** Maximum number of rows to show before scrolling */
    maxRows?: number;
    /** Whether the input should take up the full width of its container */
    fullWidth?: boolean;
    /** Additional CSS class */
    className?: string;
    /** Label for the field */
    label?: React.ReactNode;
    /** Error message */
    error?: string;
    /** Whether the field is required */
    required?: boolean;
    /** Layout of the field */
    layout?: "vertical" | "horizontal";
}
/**
 * PromptInput is a specialized input for AI prompts,
 * supporting auto-resizing, file attachments, and submission logic.
 */
export declare const PromptInput: React.ForwardRefExoticComponent<PromptInputProps & React.RefAttributes<HTMLTextAreaElement>>;
