import { default as React } from '../../../../node_modules/react';
export type InlineEditProps = Omit<React.ComponentPropsWithoutRef<"div">, "onChange" | "defaultValue"> & {
    /** Current text (controlled) */
    value?: string;
    /** Initial text (uncontrolled) */
    defaultValue?: string;
    /** Callback when the text changes while editing */
    onChange?: (value: string) => void;
    /** Callback when the edit is confirmed */
    onSave?: (value: string) => void;
    /** Callback when the edit is cancelled */
    onCancel?: () => void;
    /** Callback when editing starts */
    onEdit?: () => void;
    /** Placeholder shown when the text is empty */
    placeholder?: string;
    /** Whether editing is disabled */
    disabled?: boolean;
    /** Whether to take full width of parent */
    fullWidth?: boolean;
    /** Accessible label for the text and edit button */
    label?: React.ReactNode;
};
/**
 * Component for editing text inline.
 *
 * Composition Contract:
 * - Managed by: App consumption
 * - Scroll lock: No
 */
export declare const InlineEdit: React.ForwardRefExoticComponent<Omit<Omit<React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>, "ref">, "defaultValue" | "onChange"> & {
    /** Current text (controlled) */
    value?: string;
    /** Initial text (uncontrolled) */
    defaultValue?: string;
    /** Callback when the text changes while editing */
    onChange?: (value: string) => void;
    /** Callback when the edit is confirmed */
    onSave?: (value: string) => void;
    /** Callback when the edit is cancelled */
    onCancel?: () => void;
    /** Callback when editing starts */
    onEdit?: () => void;
    /** Placeholder shown when the text is empty */
    placeholder?: string;
    /** Whether editing is disabled */
    disabled?: boolean;
    /** Whether to take full width of parent */
    fullWidth?: boolean;
    /** Accessible label for the text and edit button */
    label?: React.ReactNode;
} & React.RefAttributes<HTMLDivElement>>;
