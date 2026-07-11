import React from "react";
import classNames from "classnames";
import { WimColor, ComponentSizeExtended } from "../../../types/tokens";
import { getColorValue } from "../../../utilities/style-utils";
import styles from "./loader.module.scss";

export type LoaderVariant = "bars" | "dots" | "pulse";

export type LoaderProps = React.ComponentPropsWithoutRef<"div"> & {
  /**
   * Animation style of the loader.
   * @default "bars"
   */
  variant?: LoaderVariant;
  /**
   * Size of the loader.
   * @default "md"
   */
  size?: ComponentSizeExtended;
  /**
   * Color of the loader. Accepts a design token color name or "currentColor".
   * @default "primary"
   */
  color?: "currentColor" | WimColor;
};

/**
 * Indicates that data is loading or being processed.
 */
export const Loader = ({
  variant = "bars",
  size = "md",
  color = "primary",
  className,
  style,
  ...props
}: LoaderProps) => {
  const mappedColors = ["primary", "secondary", "success", "warning", "danger", "neutral"];
  const useClassNameForColor = typeof color === "string" && mappedColors.includes(color);

  return (
    <div
      className={classNames("wim-loader", 
        styles.root,
        styles[variant],
        styles[size],
        useClassNameForColor && styles[color as string],
        className,
      )}
      style={{
        color: !useClassNameForColor ? getColorValue(color) : undefined,
        ...(style as React.CSSProperties),
      }}
      role="status"
      aria-live="polite"
      {...props}
    >
      <span className={styles.item}></span>
      <span className={styles.item}></span>
      <span className={styles.item}></span>
    </div>
  );
};
