import { default as React } from '../../../../node_modules/react';
import { IndicatorIntent } from '../../../types/tokens';
export type ScrollProgressProps = React.ComponentPropsWithoutRef<"div"> & {
    /**
     * Color of the progress bar.
     * @default "primary"
     */
    /**
     * 意味の軸。兄弟の `Progress` / `ProgressRing` と同じ語彙にそろえてある。
     *
     * 以前は `color` という名前で、値も独自（`secondary` を含む）だった。
     * 塗っているものは `Progress.intent` と構造まで同一だったので、prop 名だけが
     * ずれていた（T114）。
     */
    intent?: IndicatorIntent;
    /**
     * Element whose scroll position is tracked. Defaults to `window`.
     */
    target?: React.RefObject<HTMLElement | null>;
};
/**
 * Visualizes reading progress or scroll position as a bar.
 */
export declare const ScrollProgress: ({ intent, target, className, "aria-label": ariaLabel, ...props }: ScrollProgressProps) => React.JSX.Element;
