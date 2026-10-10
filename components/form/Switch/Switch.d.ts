import { default as React } from '../../../../node_modules/react';
import { ComponentSizeBasic } from '../../../types/tokens';
export type SwitchProps = Omit<React.InputHTMLAttributes<HTMLInputElement>, "size"> & {
    /**
     * If true, the component will be rendered as its child, merging its props onto that child.
     */
    asChild?: boolean;
    /** Size of the switch */
    size?: ComponentSizeBasic;
    /** Additional class names */
    className?: string;
    /** Label content rendered next to the switch */
    children?: React.ReactNode;
    /** Whether to display as an error state (aria-invalid is applied) */
    error?: boolean;
};
/**
 * Switch component for toggling a single setting on or off.
 */
export declare const Switch: React.ForwardRefExoticComponent<Omit<React.InputHTMLAttributes<HTMLInputElement>, "size"> & {
    /**
     * If true, the component will be rendered as its child, merging its props onto that child.
     */
    asChild?: boolean;
    /** Size of the switch */
    size?: ComponentSizeBasic;
    /** Additional class names */
    className?: string;
    /** Label content rendered next to the switch */
    children?: React.ReactNode;
    /** Whether to display as an error state (aria-invalid is applied) */
    error?: boolean;
} & React.RefAttributes<HTMLInputElement>>;
