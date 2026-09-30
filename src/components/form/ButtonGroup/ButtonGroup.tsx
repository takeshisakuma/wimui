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
  /** Where the buttons sit on the row. `start` keeps the group as wide as its buttons, so it lines up with other content; `center` / `end` / `stretch` take the full row (`stretch` grows every button to share it). */
  justify?: "start" | "center" | "end" | "stretch";
  /** Whether to render as a child element. */
  asChild?: boolean;
};

export const ButtonGroup = ({
  children,
  gap = "8px",
  className,
  joined = false,
  variant,
  justify = "start",
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
      data-justify={justify}
    >
      {childrenWithProps}
    </Component>
  );
};
