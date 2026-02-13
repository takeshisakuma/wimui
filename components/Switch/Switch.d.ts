import { default as React } from '../../../node_modules/react';
/**
 * Switch component for toggling a single setting on or off.
 */
export declare const Switch: React.ForwardRefExoticComponent<Omit<React.InputHTMLAttributes<HTMLInputElement>, "size"> & {
    label?: string;
    size?: "small" | "medium";
    className?: string;
} & React.RefAttributes<HTMLInputElement>>;
