import { default as React } from '../../../../node_modules/react';
import { FieldIntent, FieldVariant, FieldWidth } from '../../../types/tokens';
export interface TagInputProps extends Omit<React.ComponentPropsWithoutRef<"div">, "onChange"> {
    /** List of tags (controlled) */
    value?: string[];
    /** Initial list of tags (uncontrolled) */
    defaultValue?: string[];
    /** Callback when the tags change */
    onChange?: (tags: string[]) => void;
    /** Placeholder for the input */
    placeholder?: string;
    /** Whether the input is disabled */
    disabled?: boolean;
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
    /** Whether tags can be deleted */
    allowDelete?: boolean;
    /** Maximum number of tags that can be entered */
    maxTags?: number;
}
/**
 * Input component for managing free-form tags.
 * Tags are committed with the Enter key or a comma.
 */
export declare const TagInput: React.ForwardRefExoticComponent<TagInputProps & React.RefAttributes<HTMLDivElement>>;
