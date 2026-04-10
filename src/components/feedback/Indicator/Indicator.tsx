import React from "react";
import classNames from "classnames";
import { WimColor, ComponentSize } from "../../../types/tokens";
import { getColorValue } from "../../../utilities/style-utils";
import styles from "./indicator.module.scss";

type IndicatorProps = {
  children?: React.ReactNode;
  color?: WimColor;
  size?: ComponentSize;
  position?: "top-right" | "top-left" | "bottom-right" | "bottom-left";
  pulse?: boolean;
  inline?: boolean;
  className?: string;
  style?: React.CSSProperties;
};

/**
 * 要素の状態（オンライン、未読、エラーなど）を示す小さなドットコンポーネント。
 */
export const Indicator = ({
  children,
  color = "primary",
  size = "md",
  position = "top-right",
  pulse = false,
  inline = false,
  className,
  style,
}: IndicatorProps) => {
  const mappedColors = ["primary", "success", "error", "warning", "neutral"];
  const useClassNameForColor = typeof color === "string" && mappedColors.includes(color);

  return (
    <span
      className={classNames(
        styles.root,
        inline && styles.inlineRoot,
        className,
      )}
      style={style}
    >
      {children}
      <span
        className={classNames(
          styles.dot,
          useClassNameForColor && styles[color as string],
          styles[size],
          !inline && styles[position],
          pulse && styles.pulse,
        )}
        style={{
          backgroundColor: !useClassNameForColor ? getColorValue(color) : undefined,
        }}
      />
    </span>
  );
};
