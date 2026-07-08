import React from "react";
import classNames from "classnames";
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
};

export const ButtonGroup = ({
  children,
  gap = "8px",
  className,
  joined = false,
  variant,
}: ButtonGroupProps) => {
  const style = joined ? {} : { gap };

  const childrenWithProps = variant
    ? React.Children.map(children, (child) => {
        if (React.isValidElement(child)) {
          return React.cloneElement(child as React.ReactElement<{ variant?: ButtonVariant }>, {
            variant,
          });
        }
        return child;
      })
    : children;

  return (
    <div
      className={classNames(
        styles.root,
        joined && styles.joined,
        className,
      )}
      style={style}
    >
      {childrenWithProps}
    </div>
  );
};
