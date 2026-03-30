import React from "react";
import classNames from "classnames";
import { ComponentSize } from "../../types/tokens";
import "./kbd.scss";

export type KbdProps = React.ComponentPropsWithoutRef<"kbd"> & {
  /**
   * キーボードのラベル（または子要素）。
   */
  children: React.ReactNode;
  /**
   * サイズ。
   */
  size?: ComponentSize;
};

/**
 * ユーザーが入力するキーボードのショートカットやキーを表示するためのコンポーネント。
 */
export const Kbd = ({
  children,
  size = "md",
  className,
  ...props
}: KbdProps) => {
  return (
    <kbd
      className={classNames("wim-kbd", `wim-kbd--${size}`, className)}
      {...props}
    >
      {children}
    </kbd>
  );
};
