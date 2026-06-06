import React from "react";
import classNames from "classnames";
import { Box, BoxProps } from "../../layout/Box/Box";
import styles from "./container.module.scss";

export type ContainerProps = Omit<BoxProps, "as"> & {
  /** Container max-width */
  size?: "xs" | "sm" | "md" | "lg" | "xl" | number | string;
  /** Whether the container should be fluid (100% width) */
  fluid?: boolean;
};

const SIZES = {
  xs: "540px",
  sm: "720px",
  md: "960px",
  lg: "1140px",
  xl: "1320px",
};

/**
 * Container component is used to center content horizontally and limit its maximum width.
 */
export const Container = React.forwardRef<HTMLDivElement, ContainerProps>(
  ({ size = "lg", fluid = false, style, className, children, ...props }, ref) => {
    const maxWidth = fluid
      ? "100%"
      : SIZES[size as keyof typeof SIZES] ||
        (typeof size === "number" ? `${size}px` : size);

    return (
      <Box
        ref={ref}
        className={classNames(styles.root, className)}
        mx="auto"
        w="100%"
        style={{ maxWidth, ...style }}
        {...props}
      >
        {children}
      </Box>
    );
  },
);

Container.displayName = "Container";
