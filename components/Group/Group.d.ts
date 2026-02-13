import { default as React } from '../../../node_modules/react';
export type GroupProps = React.ComponentPropsWithoutRef<"div"> & {
    /** Vertical alignment */
    align?: "start" | "center" | "end" | "stretch" | "baseline";
    /** Horizontal alignment */
    justify?: "start" | "center" | "end" | "between" | "around" | "evenly";
    /** Gap between elements */
    gap?: number | string;
    /** Whether to wrap children */
    wrap?: "nowrap" | "wrap" | "wrap-reverse";
    /** Whether items should grow to fill available space */
    grow?: boolean;
};
/**
 * Group component for horizontal layouts with spacing.
 */
export declare const Group: React.ForwardRefExoticComponent<Omit<React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>, "ref"> & {
    /** Vertical alignment */
    align?: "start" | "center" | "end" | "stretch" | "baseline";
    /** Horizontal alignment */
    justify?: "start" | "center" | "end" | "between" | "around" | "evenly";
    /** Gap between elements */
    gap?: number | string;
    /** Whether to wrap children */
    wrap?: "nowrap" | "wrap" | "wrap-reverse";
    /** Whether items should grow to fill available space */
    grow?: boolean;
} & React.RefAttributes<HTMLDivElement>>;
