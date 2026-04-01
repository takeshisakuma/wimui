import { default as React } from '../../../../node_modules/react';
/**
 * Checkbox component for boolean user input.
 */
export declare const Checkbox: React.ForwardRefExoticComponent<React.InputHTMLAttributes<HTMLInputElement> & {
    /** @deprecated Use `children` instead. */
    label?: React.ReactNode;
    children?: React.ReactNode;
    indeterminate?: boolean;
    className?: string;
} & React.RefAttributes<HTMLInputElement>>;
