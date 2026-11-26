import { default as React } from '../../../../node_modules/react';
export interface CheckboxProps extends React.InputHTMLAttributes<HTMLInputElement> {
    /** Whether to render as a child element. */
    asChild?: boolean;
    /** Label content rendered next to the checkbox */
    children?: React.ReactNode;
    /** Whether to show the indeterminate (mixed) state */
    indeterminate?: boolean;
    /** Whether to display as an error state (aria-invalid is applied) */
    error?: boolean;
}
/**
 * Checkbox component for boolean user input.
 */
export declare const Checkbox: React.ForwardRefExoticComponent<CheckboxProps & React.RefAttributes<HTMLInputElement>>;
