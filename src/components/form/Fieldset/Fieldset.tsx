import React from "react";
import classNames from "classnames";
import styles from "./fieldset.module.scss";

type FieldsetProps = React.ComponentPropsWithoutRef<"fieldset"> & {
  /** Form elements to group */
  children: React.ReactNode;
  /** Whether all contained form elements are disabled */
  disabled?: boolean;
  /**
   * Visual variant of the fieldset.
   *
   * `plain` drops the frame and padding and keeps only the grouping — use it
   * inside a `Card` or any surface that already draws a border, where a framed
   * fieldset would put a box inside a box. The `<fieldset>` and its `<legend>`
   * still do their job for assistive technology.
   */
  variant?: "default" | "full-width" | "plain";
  /** Additional class names */
  className?: string;
};

/**
 * Component for grouping related form elements.
 */
export const Fieldset = ({
  children,
  disabled = false,
  variant = "default",
  className,
  ...props
}: FieldsetProps) => {
  return (
    <fieldset
      className={classNames("wim-fieldset", 
        styles.root,
        variant === "full-width" && styles.fullWidth,
        variant === "plain" && styles.plain,
        className,
      )}
      disabled={disabled}
      {...props}
    >
      {children}
    </fieldset>
  );
};
