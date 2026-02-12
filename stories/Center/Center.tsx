import React from "react";
import classNames from "classnames";
import { Box, BoxProps } from "../Box/Box";
import "./center.scss";

export type CenterProps<C extends React.ElementType = "div"> = BoxProps<C> & {
    /** Whether to use inline-flex */
    inline?: boolean;
};

/**
 * Center component is used to center its children vertically and horizontally.
 */
export const Center = React.forwardRef(
    <C extends React.ElementType = "div">(
        { inline = false, style, className, children, ...props }: CenterProps<C>,
        ref: React.Ref<any>
    ) => {
        return (
            <Box
                ref={ref}
                display={inline ? "inline-flex" : "flex"}
                className={classNames("wim-center", className)}
                style={{
                    alignItems: "center",
                    justifyContent: "center",
                    ...style,
                }}
                {...props}
            >
                {children}
            </Box>
        );
    }
);

Center.displayName = "Center";


