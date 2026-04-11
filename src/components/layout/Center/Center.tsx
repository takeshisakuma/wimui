import React from "react";
import classNames from "classnames";
import { Box, BoxProps } from "../../layout/Box/Box";
import styles from "./center.module.scss";

export type CenterProps<C extends React.ElementType = "div"> = BoxProps<C> & {
  /** Whether to use inline-flex */
  inline?: boolean;
};

/**
 * Center component is used to center its children vertically and horizontally.
 */
export const Center = React.forwardRef(
  <C extends React.ElementType = "div">(
    { as, inline = false, style, className, children, ...props }: CenterProps<C>,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    ref: React.Ref<any>,
  ) => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const BoxComponent = Box as any;
    return (
      <BoxComponent
        as={as}
        ref={ref}
        display={inline ? "inline-flex" : "flex"}
        className={classNames(styles.root, className)}

        style={{
          alignItems: "center",
          justifyContent: "center",
          ...style,
        }}
        {...props}
      >
        {children}
      </BoxComponent>
    );
  },
);

Center.displayName = "Center";
