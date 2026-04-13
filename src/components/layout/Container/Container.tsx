import React from "react";
import classNames from "classnames";
import { Box, BoxProps } from "../../layout/Box/Box";
import styles from "./container.module.scss";

export type ContainerProps<C extends React.ElementType = "div"> =
  BoxProps<C> & {
    /**
     * If true, the container will be rendered as its child, merging its props onto that child.
     */
    asChild?: boolean;
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
export const Container = React.forwardRef(
  <C extends React.ElementType = "div">(
    {
      as,
      asChild,
      size = "lg",
      fluid = false,
      style,
      className,
      children,
      ...props
    }: ContainerProps<C>,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    ref: React.Ref<any>,
  ) => {
    const maxWidth = fluid
      ? "100%"
      : SIZES[size as keyof typeof SIZES] ||
        (typeof size === "number" ? `${size}px` : size);

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const BoxComponent = Box as any;
    return (
      <BoxComponent
        as={as}
        asChild={asChild}
        ref={ref}
        className={classNames(styles.root, className)}
        mx="auto"
        w="100%"
        style={{ maxWidth, ...style }}
        {...props}
      >
        {children}
      </BoxComponent>
    );
  },
);

Container.displayName = "Container";
