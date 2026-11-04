import { default as React } from '../../../../node_modules/react';
import { TextareaProps } from '../Textarea/Textarea';
export type CounterTextareaProps = TextareaProps & {
    /**
     * Whether to show the character count.
     * @default true
     */
    showCount?: boolean;
    /**
     * Position of the counter.
     * "bottom" (default) shows it below the textarea.
     * "overlay" shows it inside the textarea (bottom-right).
     * @default "bottom"
     */
    counterPosition?: "bottom" | "overlay";
};
/**
 * CounterTextarea component adds character counting to the standard Textarea.
 */
export declare const CounterTextarea: React.ForwardRefExoticComponent<Omit<React.DetailedHTMLProps<React.TextareaHTMLAttributes<HTMLTextAreaElement>, HTMLTextAreaElement>, "ref"> & {
    asChild?: boolean;
    intent?: import('../../..').FieldIntent;
    variant?: import('../../..').FieldVariant;
    fullWidth?: boolean;
    fieldSizing?: "fixed" | "content";
    label?: string;
    error?: string;
    required?: boolean;
    layout?: "vertical" | "horizontal";
    width?: import('../../..').FieldWidth | string | number;
} & {
    /**
     * Whether to show the character count.
     * @default true
     */
    showCount?: boolean;
    /**
     * Position of the counter.
     * "bottom" (default) shows it below the textarea.
     * "overlay" shows it inside the textarea (bottom-right).
     * @default "bottom"
     */
    counterPosition?: "bottom" | "overlay";
} & React.RefAttributes<HTMLTextAreaElement>>;
