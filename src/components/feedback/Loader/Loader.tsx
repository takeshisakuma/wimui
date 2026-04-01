import React from "react";
import classNames from "classnames";
import { WimColor, ComponentSize } from "../../../types/tokens";
import { getColorValue } from "../../../utilities/style-utils";
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
  size?: ComponentSize;
  /**
   * ローダーの色。
   */
  color?: "currentColor" | WimColor;
};

/**
 * データの読み込み中や処理中であることを示すためのコンポーネント。
 */
export const Loader = ({
  variant = "bars",
  size = "md",
  color = "primary",
  className,
  style,
  ...props
}: LoaderProps) => {
  const mappedColors = ["primary", "secondary", "success", "warning", "error", "neutral"];
  const useClassNameForColor = typeof color === "string" && mappedColors.includes(color);

  return (
    <div
      className={classNames(
        "wim-loader",
        `wim-loader--${variant}`,
        `wim-loader--${size}`,
        useClassNameForColor && `wim-loader--${color}`,
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
      <span className="wim-loader__item"></span>
      <span className="wim-loader__item"></span>
      <span className="wim-loader__item"></span>
    </div>
  );
};
