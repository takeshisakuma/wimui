import React from "react";
import classNames from "classnames";

import { ComponentSizeBasic, IndicatorIntent } from "../../../types/tokens";
import { WithAccessibleName, resolveAriaLabel } from "../../_internal/accessibleName";
import styles from "./progress-ring.module.scss";

type ProgressRingOwnProps = Omit<
  React.ComponentPropsWithoutRef<"div">,
  "children"
> & {
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
   * Text label displayed below the ring. Also used as the accessible name unless
   * `aria-label` / `aria-labelledby` is given.
   *
   * A progress ring always carries `role="progressbar"`, and a progressbar with no
   * accessible name is a WCAG failure (axe `aria-progressbar-name`, serious). The
   * type therefore requires one of `label` / `aria-label` / `aria-labelledby`.
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
export const ProgressRing = React.forwardRef<HTMLDivElement, ProgressRingProps>(
  (
    {
      value = 0,
      max = 100,
      intent = "primary",
      size = "md",
      label,
      showValue = false,
      indeterminate = false,
      className,
      "aria-label": ariaLabel,
      ...props
    },
    ref,
  ) => {
    const percentage = Math.min(Math.max((value / max) * 100, 0), 100);

    return (
      <div
        ref={ref}
        className={classNames(
          "wim-progress-ring",
          styles.root,
          styles[size],
          styles[intent],
          indeterminate && styles.indeterminate,
          className,
        )}
        role="progressbar"
        aria-valuenow={indeterminate ? undefined : value}
        aria-valuemin={0}
        aria-valuemax={max}
        aria-label={resolveAriaLabel(label, ariaLabel)}
        {...props}
      >
        <div className={styles.ring}>
          <svg className={styles.svg} viewBox="0 0 100 100" aria-hidden="true">
            <circle className={styles.track} cx="50" cy="50" r="42" pathLength="100" />
            <circle
              className={styles.indicator}
              cx="50"
              cy="50"
              r="42"
              pathLength="100"
              style={
                indeterminate
                  ? undefined
                  : ({
                      "--wim-progress-ring-value": `${percentage}`,
                    } as React.CSSProperties)
              }
            />
          </svg>
          {showValue && !indeterminate && (
            <span className={styles.value}>{Math.round(percentage)}%</span>
          )}
        </div>
        {label && <span className={styles.label}>{label}</span>}
      </div>
    );
  },
);

ProgressRing.displayName = "ProgressRing";
