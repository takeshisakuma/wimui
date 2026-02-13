import { default as React } from '../../../node_modules/react';
export type FlexProps = React.ComponentPropsWithoutRef<"div"> & {
    /** Flex direction */
    direction?: "row" | "row-reverse" | "column" | "column-reverse";
    /** Align-items */
    align?: "start" | "center" | "end" | "stretch" | "baseline";
    /** Justify-content */
    justify?: "start" | "center" | "end" | "between" | "around" | "evenly" | "stretch";
    /** Flex-wrap */
    wrap?: "nowrap" | "wrap" | "wrap-reverse";
    /** Gap between children */
    gap?: number | string;
    /** Display inline-flex */
    inline?: boolean;
};
/**
 * Flex component for flexible layouts.
 */
export declare const Flex: React.ForwardRefExoticComponent<Omit<React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>, "ref"> & {
    /** Flex direction */
    direction?: "row" | "row-reverse" | "column" | "column-reverse";
    /** Align-items */
    align?: "start" | "center" | "end" | "stretch" | "baseline";
    /** Justify-content */
    justify?: "start" | "center" | "end" | "between" | "around" | "evenly" | "stretch";
    /** Flex-wrap */
    wrap?: "nowrap" | "wrap" | "wrap-reverse";
    /** Gap between children */
    gap?: number | string;
    /** Display inline-flex */
    inline?: boolean;
} & React.RefAttributes<HTMLDivElement>>;
