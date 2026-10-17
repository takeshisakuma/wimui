import { default as React } from '../../../../node_modules/react';
export interface RadioProps extends React.InputHTMLAttributes<HTMLInputElement> {
    /** Whether to render as a child element. */
    asChild?: boolean;
    /** Label content rendered next to the radio */
    children?: React.ReactNode;
    /** Whether to display as an error state (aria-invalid is not supported on the radio role, so it is applied on the RadioGroup side) */
    error?: boolean;
}
/**
 * Radio component for single selection from a list.
 */
export declare const Radio: React.ForwardRefExoticComponent<RadioProps & React.RefAttributes<HTMLInputElement>>;
