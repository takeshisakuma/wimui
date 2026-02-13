import { default as React } from '../../../node_modules/react';
import { BoxProps } from '../Box/Box';
export type CenterProps<C extends React.ElementType = "div"> = BoxProps<C> & {
    /** Whether to use inline-flex */
    inline?: boolean;
};
/**
 * Center component is used to center its children vertically and horizontally.
 */
export declare const Center: React.ForwardRefExoticComponent<Omit<CenterProps<React.ElementType<any, keyof React.JSX.IntrinsicElements>>, "ref"> & React.RefAttributes<any>>;
