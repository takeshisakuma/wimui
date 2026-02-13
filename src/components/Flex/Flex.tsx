import React from "react";
import classNames from "classnames";
import "./flex.scss";

export type FlexProps = React.ComponentPropsWithoutRef<"div"> & {
    /** Flex direction */
    direction?: "row" | "row-reverse" | "column" | "column-reverse";
    /** Align-items */
    align?: "start" | "center" | "end" | "stretch" | "baseline";
    /** Justify-content */
    justify?: "start" | "center" | "end" | "between" | "around" | "evenly" | "stretch";
    /** Flex-wrap */
    wrap?: "nowrap" | "wrap" | "wrap-reverse";
    /** Gap between children */
    gap?: number | string;
    /** Display inline-flex */
    inline?: boolean;
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
 * Flex component for flexible layouts.
 */
export const Flex = React.forwardRef<HTMLDivElement, FlexProps>(
    (
        {
            direction = "row",
            align,
            justify,
            wrap,
            gap,
            inline = false,
            className,
            style,
            children,
            ...props
        },
        ref
    ) => {
        const getGapValue = (val?: number | string) => {
            if (typeof val === "number") return `${val}px`;
            const tokens = ["3xs", "2xs", "xs", "sm", "md", "lg", "xl", "2xl", "3xl", "4xl", "5xl"];
            if (typeof val === "string" && tokens.includes(val)) {
                return `var(--spacing-${val})`;
            }
            return val;
        };

        const flexStyle: React.CSSProperties = {
            display: inline ? "inline-flex" : "flex",
            flexDirection: direction,
            alignItems: mapAlign(align),
            justifyContent: mapJustify(justify),
            flexWrap: wrap,
            gap: getGapValue(gap),
            ...style,
        };

        return (
            <div
                ref={ref}
                className={classNames("wim-flex", className)}
                style={flexStyle}
                {...props}
            >
                {children}
            </div>
        );
    }
);

Flex.displayName = "Flex";


