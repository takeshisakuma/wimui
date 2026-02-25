import React from "react";
import classNames from "classnames";
import "./progress.scss";

type ProgressProps = React.ComponentPropsWithoutRef<"div"> & {
  value?: number;
  max?: number;
  color?: "primary" | "secondary" | "success" | "warning" | "error" | "neutral";
  size?: "sm" | "md" | "lg";
  label?: string;
  showValue?: boolean;
  indeterminate?: boolean;
};

/**
 * プログレスバーを表示するためのコンポーネント。
 */
export const Progress = ({
  value = 0,
  max = 100,
  color = "primary",
  size = "md",
  label,
  showValue = false,
  indeterminate = false,
  className,
  ...props
}: ProgressProps) => {
  const percentage = Math.min(Math.max((value / max) * 100, 0), 100);

  return (
    <div
      className={classNames(
        "wim-progress",
        `wim-progress--${size}`,
        `wim-progress--${color}`,
        indeterminate && "wim-progress--indeterminate",
        className,
      )}
      role="progressbar"
      aria-valuenow={indeterminate ? undefined : value}
      aria-valuemin={0}
      aria-valuemax={max}
      {...props}
    >
      {(label || showValue) && (
        <div className="wim-progress__info">
          {label && <span className="wim-progress__label">{label}</span>}
          {showValue && !indeterminate && (
            <span className="wim-progress__value">
              {Math.round(percentage)}%
            </span>
          )}
        </div>
      )}
      <div className="wim-progress__track">
        <div
          className="wim-progress__bar"
          style={{ width: indeterminate ? "100%" : `${percentage}%` }}
        />
      </div>
    </div>
  );
};
