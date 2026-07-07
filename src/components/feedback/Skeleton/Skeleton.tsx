import React from "react";
import classNames from "classnames";
import styles from "./skeleton.module.scss";

type SkeletonProps = React.ComponentPropsWithoutRef<"div"> & {
  /**
   * Shape of the skeleton.
   * - `text`: shaped like a line of text.
   * - `rect`: rectangle.
   * - `circle`: circle.
   * @default "text"
   */
  variant?: "text" | "rect" | "circle";
  /**
   * Type of animation.
   * - `pulse`: slow fade in and out.
   * - `wave`: wave moving from left to right.
   * - `none`: no animation.
   * @default "pulse"
   */
  animation?: "pulse" | "wave" | "none";
  /**
   * Width, including a CSS unit (px, %, rem, etc.).
   */
  width?: string | number;
  /**
   * Height, including a CSS unit (px, %, rem, etc.).
   */
  height?: string | number;
};

/**
 * Placeholder displayed while content is loading.
 */
export const Skeleton = ({
  variant = "text",
  animation = "pulse",
  width,
  height,
  style,
  className,
  ...props
}: SkeletonProps) => {
  const skeletonStyle: React.CSSProperties = {
    width,
    height,
    ...style,
  };

  return (
    <div
      className={classNames(
        styles.root,
        styles[variant],
        animation !== "none" && styles[animation],
        className,
      )}
      style={skeletonStyle}
      aria-hidden="true"
      aria-busy="true"
      {...props}
    />
  );
};
