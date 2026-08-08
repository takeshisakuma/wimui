import { default as React } from '../../../../node_modules/react';
export type MarqueeProps = React.ComponentPropsWithoutRef<"div"> & {
    /** Animation speed (in seconds). Defaults to `20`. */
    duration?: number;
    /** Whether to run the animation in reverse. */
    reverse?: boolean;
    /** Whether to pause the animation on hover. */
    pauseOnHover?: boolean;
    /** Whether to scroll vertically. */
    vertical?: boolean;
    /** Number of times the content is repeated. May need adjusting for a seamless loop. Defaults to `2`. */
    repeat?: number;
};
/**
 * Animation component that scrolls text or images horizontally or vertically.
 */
export declare const Marquee: ({ duration, reverse, pauseOnHover, vertical, repeat, className, children, style, ...props }: MarqueeProps) => React.JSX.Element;
