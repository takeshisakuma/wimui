import React from "react";
import classNames from "classnames";
import { WimColor, ComponentSize } from "../../types/tokens";
import "./indicator.scss";

type IndicatorProps = {
  children?: React.ReactNode;
  color?: "primary" | "success" | "error" | "warning" | "neutral" | WimColor;
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
  size = "medium",
  position = "top-right",
  pulse = false,
  inline = false,
  className,
  style,
}: IndicatorProps) => {
  const isCustomColor = color && (color.startsWith("var(") || color.includes("#") || color.includes("rgb"));

  return (
    <span
      className={classNames(
        "wim-indicator",
        inline && "wim-indicator--inline",
        className,
      )}
      style={style}
    >
      {children}
      <span
        className={classNames(
          "wim-indicator__dot",
          !isCustomColor && `wim-indicator__dot--${color}`,
          `wim-indicator__dot--${size === "small" ? "sm" : size === "large" ? "lg" : "md"}`,
          !inline && `wim-indicator__dot--${position}`,
          pulse && "wim-indicator__dot--pulse",
        )}
        style={{
          backgroundColor: isCustomColor ? (color as string) : undefined,
        }}
      />
    </span>
  );
};
