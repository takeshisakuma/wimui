import React from "react";
import classNames from "classnames";
import { Box, BoxProps } from "../../layout/Box/Box";
import styles from "./center.module.scss";

export type CenterProps = Omit<BoxProps, "as"> & {
  /** Whether to use inline-flex */
  inline?: boolean;
};

/**
 * Center component is used to center its children vertically and horizontally.
 */
export const Center = React.forwardRef<HTMLDivElement, CenterProps>(
  ({ inline = false, style, className, children, ...props }, ref) => {
    return (
      <Box
        ref={ref}
        display={inline ? "inline-flex" : "flex"}
        className={classNames("wim-center", styles.root, className)}
        style={{ alignItems: "center", justifyContent: "center", ...style }}
        {...props}
      >
        {children}
      </Box>
    );
  },
);

Center.displayName = "Center";
