import React from "react";
import classNames from "classnames";
import { mergeRefs } from "../../_internal/mergeRefs";
import { ComponentSizeBasic, IndicatorIntent } from "../../../types/tokens";
import { WithAccessibleName, resolveAriaLabel } from "../../_internal/accessibleName";
import styles from "./progress.module.scss";

type ProgressOwnProps = React.ComponentPropsWithoutRef<"div"> & {
  /**
   * Current value of the progress bar.
   * @default 0
   */
  value?: number;
  /**
   * Maximum value of the progress bar.
   * @default 100
   */
  max?: number;
  /**
   * Intent (semantic color) of the bar.
   * @default "primary"
   */
  intent?: IndicatorIntent;
  /**
   * Size of the bar.
   * @default "md"
   */
  size?: ComponentSizeBasic;
  /**
   * Text label displayed above the bar. Also used as the accessible name unless
   * `aria-label` / `aria-labelledby` is given.
   *
   * A progress bar always carries `role="progressbar"`, and a progressbar with no
   * accessible name is a WCAG failure (axe `aria-progressbar-name`, serious). The
   * type therefore requires one of `label` / `aria-label` / `aria-labelledby`.
   */
  label?: string;
  /**
   * Whether to display the current value as a percentage.
   * @default false
   */
  showValue?: boolean;
  /**
   * If true, shows an indeterminate animation instead of a value.
   * @default false
   */
  indeterminate?: boolean;
};

export type ProgressProps = WithAccessibleName<ProgressOwnProps>;

/**
 * Displays a progress bar.
 */
export const Progress = React.forwardRef<HTMLDivElement, ProgressProps>(
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
        ref={mergeRefs(ref)}
        className={classNames("wim-progress", 
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
        {(label || showValue) && (
          <div className={styles.header}>
            {/* 書体・色・左右の配置は `.header`（space-between の flex）が持つ（T58） */}
            {label && <span>{label}</span>}
            {showValue && !indeterminate && (
              <span>{Math.round(percentage)}%</span>
            )}
          </div>
        )}
        <div className={styles.track}>
          <div
            className={styles.bar}
            style={
              !indeterminate
                ? ({ "--wim-progress-width": `${percentage}%` } as React.CSSProperties)
                : undefined
            }
          />
        </div>
      </div>
    );
  },
);

Progress.displayName = "Progress";
