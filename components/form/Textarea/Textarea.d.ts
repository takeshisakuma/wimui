import { default as React } from '../../../../node_modules/react';
import { FieldIntent, FieldVariant, FieldWidth } from '../../../types/tokens';
export type TextareaProps = React.ComponentPropsWithoutRef<"textarea"> & {
    /**
     * If true, the textarea element will be rendered as its child, merging its props onto that child.
     */
    asChild?: boolean;
    /** Semantic intent of the field (e.g. error state) */
    intent?: FieldIntent;
    /** Visual style variant of the field */
    variant?: FieldVariant;
    /** Whether to take full width of parent */
    fullWidth?: boolean;
    /** Sizing behavior: "fixed" keeps the height, "content" grows with the text */
    fieldSizing?: "fixed" | "content";
    /** Field label */
    label?: string;
    /** Error message */
    error?: string;
    /** Whether to show the required indicator */
    required?: boolean;
    /** Layout direction of label and field */
    layout?: "vertical" | "horizontal";
    /** Fixed width of the field (width token, CSS value, or number in px) */
    width?: FieldWidth | string | number;
};
/**
 * Component for accepting multi-line text input.
 */
export declare const Textarea: React.ForwardRefExoticComponent<Omit<React.DetailedHTMLProps<React.TextareaHTMLAttributes<HTMLTextAreaElement>, HTMLTextAreaElement>, "ref"> & {
    /**
     * If true, the textarea element will be rendered as its child, merging its props onto that child.
     */
    asChild?: boolean;
    /** Semantic intent of the field (e.g. error state) */
    intent?: FieldIntent;
    /** Visual style variant of the field */
    variant?: FieldVariant;
    /** Whether to take full width of parent */
    fullWidth?: boolean;
    /** Sizing behavior: "fixed" keeps the height, "content" grows with the text */
    fieldSizing?: "fixed" | "content";
    /** Field label */
    label?: string;
    /** Error message */
    error?: string;
    /** Whether to show the required indicator */
    required?: boolean;
    /** Layout direction of label and field */
    layout?: "vertical" | "horizontal";
    /** Fixed width of the field (width token, CSS value, or number in px) */
    width?: FieldWidth | string | number;
} & React.RefAttributes<HTMLTextAreaElement>>;
