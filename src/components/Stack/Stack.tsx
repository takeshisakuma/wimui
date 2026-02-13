import React from "react";
import classNames from "classnames";
import { Box, BoxProps } from "../Box/Box";
import "./stack.scss";

export type StackProps<C extends React.ElementType = "div"> = BoxProps<C> & {
    /** Gap between children. Can be a number (px) or a spacing token (e.g., 'sm', 'md', 'lg'). */
    gap?: number | string;
    /** Stack direction */
    direction?: "row" | "column";
    /** Align-items */
    align?: "start" | "center" | "end" | "stretch" | "baseline" | React.CSSProperties["alignItems"];
    /** Justify-content */
    justify?:
    | "start"
    | "center"
    | "end"
    | "between"
    | "around"
    | "evenly"
    | "stretch"
    | React.CSSProperties["justifyContent"];
};

const mapAlign = (val?: string) => {
    if (val === "start") return "flex-start";
    if (val === "end") return "flex-end";
    return val;
};

const mapJustify = (val?: string) => {
    if (val === "start") return "flex-start";
    if (val === "end") return "flex-end";
    if (val === "between") return "space-between";
    if (val === "around") return "space-around";
    if (val === "evenly") return "space-evenly";
    return val;
};

/**
 * Stack component is used to distribute space between elements in a vertical or horizontal layout.
 */
export const Stack = React.forwardRef(
    <C extends React.ElementType = "div">(
        {
            direction = "column",
            gap = "md",
            align,
            justify,
            style,
            className,
            children,
            ...props
        }: StackProps<C>,
        ref: React.Ref<any>
    ) => {
        const getGapValue = (val?: number | string) => {
            if (typeof val === "number") return `${val}px`;
            const tokens = ["3xs", "2xs", "xs", "sm", "md", "lg", "xl", "2xl", "3xl", "4xl", "5xl"];
            if (typeof val === "string" && tokens.includes(val)) {
                return `var(--spacing-${val})`;
            }
            return val;
        };

        return (
            <Box
                ref={ref}
                display="flex"
                className={classNames("wim-stack", className)}
                style={{
                    flexDirection: direction,
                    gap: getGapValue(gap),
                    alignItems: mapAlign(align as string),
                    justifyContent: mapJustify(justify as string),
                    ...style,
                }}
                {...props}
            >
                {children}
            </Box>
        );
    }
);

Stack.displayName = "Stack";


