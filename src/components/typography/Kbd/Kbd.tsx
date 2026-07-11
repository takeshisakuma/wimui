import React from "react";
import classNames from "classnames";
import { Slot, Slottable } from "@radix-ui/react-slot";
import { ComponentSizeBasic } from "../../../types/tokens";
import styles from "./kbd.module.scss";

export interface KbdProps extends React.HTMLAttributes<HTMLElement> {
  /**
   * If true, the Kbd will be rendered as its child, merging its props onto that child.
   */
  asChild?: boolean;
  /**
   * Size of the key cap.
   * @default "md"
   */
  size?: ComponentSizeBasic;
  /**
   * Key label(s) to display.
   */
  children?: React.ReactNode;
}

export const Kbd = React.forwardRef<HTMLElement, KbdProps>(
  ({ asChild = false, size = "md", children, className, ...props }, ref) => {
    const Component = asChild ? Slot : "kbd";

    return (
      <Component
        className={classNames("wim-kbd", styles.root, styles[size], className)}
        ref={ref}
        {...props}
      >
        <Slottable>{children}</Slottable>
      </Component>
    );
  },
);

Kbd.displayName = "Kbd";
