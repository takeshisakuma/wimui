import React from "react";
import classNames from "classnames";
import { Slot, Slottable } from "@radix-ui/react-slot";
import styles from "./kbd.module.scss";

export interface KbdProps extends React.HTMLAttributes<HTMLElement> {
  /**
   * If true, the Kbd will be rendered as its child, merging its props onto that child.
   */
  asChild?: boolean;
  size?: "sm" | "md" | "lg";
  children?: React.ReactNode;
}

export const Kbd = React.forwardRef<HTMLElement, KbdProps>(
  ({ asChild = false, size = "md", children, className, ...props }, ref) => {
    const Component = asChild ? Slot : "kbd";

    return (
      <Component
        className={classNames(styles.root, styles[size], className)}
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        ref={ref as any}
        {...props}
      >
        <Slottable>{children}</Slottable>
      </Component>
    );
  },
);

Kbd.displayName = "Kbd";
