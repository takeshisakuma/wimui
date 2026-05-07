import React from "react";
import classNames from "classnames";
import { Box, BoxProps } from "../../layout/Box/Box";
import styles from "./center.module.scss";

export type CenterProps<C extends React.ElementType = "div"> = BoxProps<C> & {
  /**
   * If true, the center will be rendered as its child, merging its props onto that child.
   */
  asChild?: boolean;
  /** Whether to use inline-flex */
  inline?: boolean;
};

/**
 * Center component is used to center its children vertically and horizontally.
 */
export const Center = React.forwardRef(
  <C extends React.ElementType = "div">(
    { as, asChild, inline = false, style, className, children, ...props }: CenterProps<C>,
    // React.forwardRef doesn't support truly generic ref types; Ref<any> is the standard workaround.
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    ref: React.Ref<any>,
  ) => {
    // TypeScript cannot verify CenterProps<C>'s spread against BoxProps<C> when C is unresolved.
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const BoxComp = Box as any;
    return (
      <BoxComp
        as={as}
        asChild={asChild}
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
      </BoxComp>
    );
  },
);

Center.displayName = "Center";
