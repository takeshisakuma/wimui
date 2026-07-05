import React from "react";
import classNames from "classnames";
import { mergeRefs } from "../../_internal/mergeRefs";
import { ComponentSizeBasic, IndicatorIntent } from "../../../types/tokens";
import styles from "./progress.module.scss";

type ProgressProps = React.ComponentPropsWithoutRef<"div"> & {
  value?: number;
  max?: number;
  intent?: IndicatorIntent;
  size?: ComponentSizeBasic;
  label?: string;
  showValue?: boolean;
  indeterminate?: boolean;
};

/**
 * プログレスバーを表示するためのコンポーネント。
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
      ...props
    },
    ref,
  ) => {
    const percentage = Math.min(Math.max((value / max) * 100, 0), 100);

    return (
      <div
        ref={mergeRefs(ref)}
        className={classNames(
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
        aria-label={label}
        {...props}
      >
        {(label || showValue) && (
          <div className={styles.header}>
            {label && <span className={styles.label}>{label}</span>}
            {showValue && !indeterminate && (
              <span className={styles.value}>{Math.round(percentage)}%</span>
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
