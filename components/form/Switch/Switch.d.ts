import { default as React } from '../../../../node_modules/react';
import { ComponentSize } from '../../../types/tokens';
/**
 * Switch component for toggling a single setting on or off.
 */
export declare const Switch: React.ForwardRefExoticComponent<Omit<React.InputHTMLAttributes<HTMLInputElement>, "size"> & {
    label?: React.ReactNode;
    size?: ComponentSize;
    className?: string;
} & React.RefAttributes<HTMLInputElement>>;
