import { default as React } from '../../../node_modules/react';
import { BoxProps } from '../Box/Box';
export type ContainerProps<C extends React.ElementType = "div"> = BoxProps<C> & {
    /** Container max-width */
    size?: "xs" | "sm" | "md" | "lg" | "xl" | number | string;
    /** Whether the container should be fluid (100% width) */
    fluid?: boolean;
};
/**
 * Container component is used to center content horizontally and limit its maximum width.
 */
export declare const Container: React.ForwardRefExoticComponent<Omit<ContainerProps<React.ElementType<any, keyof React.JSX.IntrinsicElements>>, "ref"> & React.RefAttributes<any>>;
