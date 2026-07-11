import React from "react";
import classNames from "classnames";
import styles from "./fieldset.module.scss";

type FieldsetProps = React.ComponentPropsWithoutRef<"fieldset"> & {
  /** Form elements to group */
  children: React.ReactNode;
  /** Whether all contained form elements are disabled */
  disabled?: boolean;
  /** Visual variant of the fieldset */
  variant?: "default" | "full-width";
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
        className,
      )}
      disabled={disabled}
      {...props}
    >
      {children}
    </fieldset>
  );
};
