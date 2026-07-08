import React from "react";
import classNames from "classnames";
import styles from "./scroll-area.module.scss";

type ScrollAreaProps = React.ComponentPropsWithoutRef<"div"> & {
  /** Content to display (alternative to children) */
  text?: React.ReactNode;
  /** Content to display */
  children?: React.ReactNode;
  /** Axis along which scrolling is allowed */
  scrollAxis?: "x" | "y" | "both";
  /** Maximum height before scrolling (a CSS value, so units other than px are supported) */
  maxHeight?: string;
};

export const ScrollArea = ({
  text,
  children,
  scrollAxis = "y",
  maxHeight = `10rem`,
  style,
  className,
  ...props
}: ScrollAreaProps) => {
  const combinedStyle: React.CSSProperties = {
    maxHeight,
    overflowX: scrollAxis === "x" || scrollAxis === "both" ? "auto" : "hidden",
    overflowY: scrollAxis === "y" || scrollAxis === "both" ? "auto" : "hidden",
    ...style,
  };

  return (
    <div
      className={classNames(styles.root, className)}
      style={combinedStyle}
      tabIndex={0}
      {...props}
    >
      {children || text}
    </div>
  );
};
