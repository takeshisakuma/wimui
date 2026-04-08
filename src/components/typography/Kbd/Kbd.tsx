import React from "react";
import classNames from "classnames";
import { Slot, Slottable } from "@radix-ui/react-slot";
import { ComponentSize } from "../../../types/tokens";
import "./kbd.scss";

export interface KbdProps extends React.HTMLAttributes<HTMLElement> {
  asChild?: boolean;
  /**
   * キーボードのラベル（または子要素）。
   */
  children: React.ReactNode;
  /**
   * サイズ。
   */
  size?: ComponentSize;
}

/**
 * ユーザーが入力するキーボードのショートカットやキーを表示するためのコンポーネント。
 */
export const Kbd = React.forwardRef<HTMLElement, KbdProps>(({ asChild = false, children, size = "md", className, ...props }, ref) => {
  const Component = asChild ? Slot : "kbd";

  return (
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    <Component className={classNames("wim-kbd", `wim-kbd--${size}`, className)} ref={ref as any} {...props}>
      <Slottable>{children}</Slottable>
    </Component>
  );
});

Kbd.displayName = "Kbd";
