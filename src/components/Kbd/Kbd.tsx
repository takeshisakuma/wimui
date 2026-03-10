import React from "react";
import classNames from "classnames";
import "./kbd.scss";

export type KbdProps = React.ComponentPropsWithoutRef<"kbd"> & {
  /**
   * キーボードのラベル（または子要素）。
   */
  children: React.ReactNode;
  /**
   * サイズ。
   */
  size?: "small" | "medium";
};

/**
 * ユーザーが入力するキーボードのショートカットやキーを表示するためのコンポーネント。
 */
export const Kbd = ({
  children,
  size = "medium",
  className,
  ...props
}: KbdProps) => {
  return (
    <kbd
      className={classNames("wim-kbd", `wim-kbd--${size === "small" ? "sm" : "md"}`, className)}
      {...props}
    >
      {children}
    </kbd>
  );
};
