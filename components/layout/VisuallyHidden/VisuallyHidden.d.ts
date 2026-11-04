import { default as React } from '../../../../node_modules/react';
export type VisuallyHiddenProps = React.ComponentPropsWithoutRef<"span"> & {
    /** Content that is visually hidden but still read out by screen readers. */
    children: React.ReactNode;
};
/**
 * Accessibility component that hides content visually while keeping it available
 * to assistive technologies such as screen readers.
 */
export declare const VisuallyHidden: ({ children, className, ...props }: VisuallyHiddenProps) => React.JSX.Element;
