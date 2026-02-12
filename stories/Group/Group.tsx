import React from "react";
import classNames from "classnames";
import { Flex } from "../Flex/Flex";
import "./group.scss";

export type GroupProps = React.ComponentPropsWithoutRef<"div"> & {
    /** Vertical alignment */
    align?: "start" | "center" | "end" | "stretch" | "baseline";
    /** Horizontal alignment */
    justify?: "start" | "center" | "end" | "between" | "around" | "evenly";
    /** Gap between elements */
    gap?: number | string;
    /** Whether to wrap children */
    wrap?: "nowrap" | "wrap" | "wrap-reverse";
    /** Whether items should grow to fill available space */
    grow?: boolean;
};

/**
 * Group component for horizontal layouts with spacing.
 */
export const Group = React.forwardRef<HTMLDivElement, GroupProps>(
    (
        {
            align = "center",
            justify = "start",
            gap = 16,
            wrap = "wrap",
            grow = false,
            children,
            className,
            ...props
        },
        ref
    ) => {
        // If grow is true, we apply flex-grow: 1 to each child
        const items = grow
            ? React.Children.map(children, (child) => {
                if (React.isValidElement(child)) {
                    const childStyle = {
                        flexGrow: 1,
                        ...(child.props as any).style,
                    };
                    return React.cloneElement(child as React.ReactElement<any>, {
                        style: childStyle,
                    });
                }
                return child;
            })
            : children;

        return (
            <Flex
                ref={ref}
                align={align}
                justify={justify}
                gap={gap}
                wrap={wrap}
                className={classNames("wim-group", className)}
                {...props}
            >
                {items}
            </Flex>
        );
    }
);

Group.displayName = "Group";


