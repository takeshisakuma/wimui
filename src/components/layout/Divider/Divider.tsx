import React from "react";
import classNames from "classnames";
import styles from "./divider.module.scss";

export type DividerProps = React.ComponentPropsWithoutRef<"div"> & {
  /** Orientation of the divider */
  orientation?: "horizontal" | "vertical";
  /** Thickness of the line (px) */
  thickness?: number;
};

/**
 * `Divider` is a component for visually separating content.
 */
export const Divider = ({
  orientation = "horizontal",
  thickness = 1,
  className,
  style,
  ...props
}: DividerProps) => {
  const customStyle: React.CSSProperties = {
    ...style,
    "--wim-divider-thickness": `${thickness}px`,
  } as React.CSSProperties;

  return (
    <div
      role="separator"
      aria-orientation={orientation}
      className={classNames(
        styles.root,
        styles[orientation],
        className,
      )}
      style={customStyle}
      {...props}
    />
  );
};
