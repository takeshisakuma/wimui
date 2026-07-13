import React from "react";
import classNames from "classnames";
import { Slot } from "@radix-ui/react-slot";
import styles from "./button-group.module.scss";
import type { ButtonVariant } from "../../../types/tokens";

type ButtonGroupProps = {
  /** Buttons to group */
  children: React.ReactNode;
  /** Gap between buttons (ignored when joined) */
  gap?: string;
  /** Additional class names */
  className?: string;
  /** Whether to join the buttons into a single connected unit */
  joined?: boolean;
  /** Variant applied to all child buttons */
  variant?: ButtonVariant;
  /** Whether to render as a child element. */
  asChild?: boolean;
};

export const ButtonGroup = ({
  children,
  gap = "8px",
  className,
  joined = false,
  variant,
  asChild = false,
}: ButtonGroupProps) => {
  const style = joined ? {} : { gap };

  const childrenWithProps =
    !asChild && variant
      ? React.Children.map(children, (child) => {
          if (React.isValidElement(child)) {
            return React.cloneElement(child as React.ReactElement<{ variant?: ButtonVariant }>, {
              variant,
            });
          }
          return child;
        })
      : children;

  const Component = asChild ? Slot : "div";

  return (
    <Component
      className={classNames(
        "wim-button-group",
        styles.root,
        joined && styles.joined,
        className,
      )}
      style={style}
    >
      {childrenWithProps}
    </Component>
  );
};
