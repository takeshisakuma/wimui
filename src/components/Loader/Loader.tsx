import React from "react";
import classNames from "classnames";
import { WimColor } from "../../types/tokens";
import "./loader.scss";

export type LoaderVariant = "bars" | "dots" | "pulse";

export type LoaderProps = React.ComponentPropsWithoutRef<"div"> & {
  /**
   * ローダーのアニメーション形式。
   */
  variant?: LoaderVariant;
  /**
   * ローダーのサイズ。
   */
  size?: "small" | "medium" | "large";
  /**
   * ローダーの色。
   */
  color?:
  | "primary"
  | "secondary"
  | "success"
  | "warning"
  | "error"
  | "neutral"
  | "currentColor"
  | WimColor;
};

/**
 * データの読み込み中や処理中であることを示すためのコンポーネント。
 */
export const Loader = ({
  variant = "bars",
  size = "medium",
  color = "primary",
  className,
  style,
  ...props
}: LoaderProps) => {
  const isCustomColor = color && (color.startsWith("var(") || color.includes("#") || color.includes("rgb"));

  return (
    <div
      className={classNames(
        "wim-loader",
        `wim-loader--${variant}`,
        `wim-loader--${size === "small" ? "sm" : size === "large" ? "lg" : "md"}`,
        !isCustomColor && `wim-loader--${color}`,
        className,
      )}
      style={{
        color: isCustomColor ? (color as string) : undefined,
        ...(style as React.CSSProperties),
      }}
      role="status"
      aria-live="polite"
      {...props}
    >
      <span className="wim-loader__item"></span>
      <span className="wim-loader__item"></span>
      <span className="wim-loader__item"></span>
    </div>
  );
};
