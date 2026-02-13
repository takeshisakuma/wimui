import { default as React } from '../../../node_modules/react';
export type MasonryProps = React.ComponentPropsWithoutRef<"div"> & {
    /** Number of columns */
    columns?: number;
    /** Spacing between items */
    spacing?: number | string;
};
/**
 * Masonry layout component.
 * It arranges items in columns, filling in gaps to minimize empty space.
 */
export declare const Masonry: React.ForwardRefExoticComponent<Omit<React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>, "ref"> & {
    /** Number of columns */
    columns?: number;
    /** Spacing between items */
    spacing?: number | string;
} & React.RefAttributes<HTMLDivElement>>;
