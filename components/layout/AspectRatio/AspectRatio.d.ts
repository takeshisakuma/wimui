import { default as React } from '../../../../node_modules/react';
export type AspectRatioProps = React.ComponentPropsWithoutRef<"div"> & {
    /** Aspect ratio (e.g. 16 / 9, 1, 4 / 3) */
    ratio?: number;
    /** Child content */
    children: React.ReactNode;
};
/**
 * `AspectRatio` is a container that displays content while maintaining a given aspect ratio.
 */
export declare const AspectRatio: React.ForwardRefExoticComponent<Omit<React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>, "ref"> & {
    /** Aspect ratio (e.g. 16 / 9, 1, 4 / 3) */
    ratio?: number;
    /** Child content */
    children: React.ReactNode;
} & React.RefAttributes<HTMLDivElement>>;
