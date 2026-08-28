import React from "react";
import classNames from "classnames";
import { WimColor, ComponentSizeExtended } from "../../../types/tokens";
import { getColorValue } from "../../../utilities/style-utils";
import styles from "./spinner.module.scss";

type SpinnerProps = React.ComponentPropsWithoutRef<"div"> & {
  /**
   * Size of the spinner.
   * @default "md"
   */
  size?: ComponentSizeExtended;
  /**
   * Color of the spinner. Accepts a design token color name or "currentColor".
   * @default "primary"
   */
  color?: "currentColor" | WimColor;
  /**
   * Text label displayed next to the spinner.
   */
  label?: string;
  /**
   * Position of the label relative to the spinner.
   * @default "right"
   */
  labelPosition?: "right" | "bottom";
};

/**
 * Rotating indicator that shows something is loading.
 */
export const Spinner = ({
  size = "md",
  color = "primary",
  label,
  labelPosition = "right",
  className,
  style,
  ...props
}: SpinnerProps) => {
  const mappedColors = ["primary", "secondary", "success", "warning", "danger", "neutral"];
  const useClassNameForColor = typeof color === "string" && mappedColors.includes(color);

  return (
    <div
      className={classNames(
        styles.container,
        label && styles[`label-${labelPosition}`],
        className,
      )}
      // T228: `label` を描画するときだけ live region にする。ラベルが無い場合
      // の中身は回る図形だけで、読み上げる内容の変化が起きない ──「ARIA は
      // 付いているのに機能していない」状態になり、`LoadingOverlay` のように
      // 自前の live region を持つ親の中では領域が二重になっていた。
      role={label ? "status" : undefined}
      aria-live={label ? "polite" : undefined}
      style={{
        color: !useClassNameForColor ? getColorValue(color) : undefined,
        ...(style as React.CSSProperties),
      }}
      {...props}
    >
      <svg
        className={classNames("wim-spinner", 
          styles.root,
          styles[size],
          useClassNameForColor && styles[color as string],
        )}
        viewBox="0 0 50 50"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle
          className={styles.track}
          cx="25"
          cy="25"
          r="20"
          stroke="currentColor"
          strokeWidth="4"
        />
        <circle
          className={styles.head}
          cx="25"
          cy="25"
          r="20"
          stroke="currentColor"
          strokeWidth="4"
          strokeLinecap="round"
          strokeDasharray="126"
          strokeDashoffset="100"
        />
      </svg>
      {label && <span className={styles.label}>{label}</span>}
    </div>
  );
};
