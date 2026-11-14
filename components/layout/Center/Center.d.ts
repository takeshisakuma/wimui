import { default as React } from '../../../../node_modules/react';
import { BoxProps } from '../../layout/Box/Box';
export type CenterProps = Omit<BoxProps, "as"> & {
    /** Whether to use inline-flex */
    inline?: boolean;
};
/**
 * Center component is used to center its children vertically and horizontally.
 */
export declare const Center: React.ForwardRefExoticComponent<Omit<BoxProps, "as"> & {
    /** Whether to use inline-flex */
    inline?: boolean;
} & React.RefAttributes<HTMLDivElement>>;
