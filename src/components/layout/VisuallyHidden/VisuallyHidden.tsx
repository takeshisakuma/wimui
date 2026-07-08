import React from "react";
import classNames from "classnames";
import styles from "./visuallyHidden.module.scss";

export type VisuallyHiddenProps = React.ComponentPropsWithoutRef<"span"> & {
  /** Content that is visually hidden but still read out by screen readers. */
  children: React.ReactNode;
};

/**
 * Accessibility component that hides content visually while keeping it available
 * to assistive technologies such as screen readers.
 */
export const VisuallyHidden = ({
  children,
  className,
  ...props
}: VisuallyHiddenProps) => {
  return (
    <span className={classNames(styles.root, className)} {...props}>
      {children}
    </span>
  );
};
