import { default as React } from '../../../../node_modules/react';
import { ComponentSizeBasic, IndicatorIntent } from '../../../types/tokens';
import { WithAccessibleName } from '../../_internal/accessibleName';
type ProgressRingOwnProps = Omit<React.ComponentPropsWithoutRef<"div">, "children"> & {
    /**
     * Current value of the progress ring.
     * @default 0
     */
    value?: number;
    /**
     * Maximum value of the progress ring.
     * @default 100
     */
    max?: number;
    /**
     * Intent (semantic color) of the ring.
     * @default "primary"
     */
    intent?: IndicatorIntent;
    /**
     * Size of the ring.
     * @default "md"
     */
    size?: ComponentSizeBasic;
    /**
     * Text label displayed below the ring. Also used as the accessible name.
     */
    label?: string;
    /**
     * Whether to display the current value as a percentage inside the ring.
     * @default false
     */
    showValue?: boolean;
    /**
     * If true, shows an indeterminate animation instead of a value.
     * @default false
     */
    indeterminate?: boolean;
};
export type ProgressRingProps = WithAccessibleName<ProgressRingOwnProps>;
/**
 * Displays progress as a ring.
 *
 * `Progress` covers the linear case; the props here are deliberately the same
 * vocabulary (`value` / `max` / `intent` / `size` / `label` / `showValue` /
 * `indeterminate`) so that knowing one teaches the other.
 *
 * Composition Contract:
 * - Managed by: App consumption
 * - Scroll lock: No
 *
 * 幾何は SCSS 側の CSS 変数が持ち、SVG には固定長を書かない。ストロークは
 * `pathLength="100"` で描くので `stroke-dasharray` がそのまま「％」になり、
 * サイズごとに半径を変えても TSX 側に計算が要らない。
 */
export declare const ProgressRing: React.ForwardRefExoticComponent<ProgressRingProps & React.RefAttributes<HTMLDivElement>>;
export {};
