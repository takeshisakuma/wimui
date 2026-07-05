import React from "react";
import classNames from "classnames";
import { WimColor, ComponentSizeExtended } from "../../../types/tokens";
import { getColorValue } from "../../../utilities/style-utils";
import styles from "./spinner.module.scss";

type SpinnerProps = React.ComponentPropsWithoutRef<"div"> & {
  size?: ComponentSizeExtended;
  color?: "currentColor" | WimColor;
  label?: string;
  labelPosition?: "right" | "bottom";
};

/**
 * 読み込み中であることを示すための回転するインジケーター。
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
  const mappedColors = ["primary", "secondary", "success", "warning", "error", "neutral"];
  const useClassNameForColor = typeof color === "string" && mappedColors.includes(color);

  return (
    <div
      className={classNames(
        styles.container,
        label && styles[`label-${labelPosition}`],
        className,
      )}
      role="status"
      aria-live="polite"
      style={{
        color: !useClassNameForColor ? getColorValue(color) : undefined,
        ...(style as React.CSSProperties),
      }}
      {...props}
    >
      <svg
        className={classNames(
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
