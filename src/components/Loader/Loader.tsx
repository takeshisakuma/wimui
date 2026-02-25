import React from "react";
import classNames from "classnames";
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
  size?: "sm" | "md" | "lg" | "xl";
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
    | "currentColor";
};

/**
 * データの読み込み中や処理中であることを示すためのコンポーネント。
 */
export const Loader = ({
  variant = "bars",
  size = "md",
  color = "primary",
  className,
  ...props
}: LoaderProps) => {
  return (
    <div
      className={classNames(
        "wim-loader",
        `wim-loader--${variant}`,
        `wim-loader--${size}`,
        `wim-loader--${color}`,
        className,
      )}
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
