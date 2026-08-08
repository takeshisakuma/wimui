import { default as React } from '../../../../node_modules/react';
export type ScrollProgressProps = React.ComponentPropsWithoutRef<"div"> & {
    /**
     * Color of the progress bar.
     * @default "primary"
     */
    color?: "primary" | "secondary" | "success" | "warning" | "danger";
    /**
     * Element whose scroll position is tracked. Defaults to `window`.
     */
    target?: React.RefObject<HTMLElement | null>;
};
/**
 * Visualizes reading progress or scroll position as a bar.
 */
export declare const ScrollProgress: ({ color, target, className, "aria-label": ariaLabel, ...props }: ScrollProgressProps) => React.JSX.Element;
