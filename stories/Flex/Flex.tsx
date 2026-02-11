import React from "react";
import PropTypes from "prop-types";
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
        const flexStyle: React.CSSProperties = {
            display: inline ? "inline-flex" : "flex",
            flexDirection: direction,
            alignItems: mapAlign(align),
            justifyContent: mapJustify(justify),
            flexWrap: wrap,
            gap: typeof gap === "number" ? `${gap}px` : gap,
            ...style,
        };

        return (
            <div
                ref={ref}
                className={["wim-flex", className].filter(Boolean).join(" ")}
                style={flexStyle}
                {...props}
            >
                {children}
            </div>
        );
    }
);

Flex.displayName = "Flex";

Flex.propTypes = {
    direction: PropTypes.oneOf(["row", "row-reverse", "column", "column-reverse"]),
    align: PropTypes.oneOf(["start", "center", "end", "stretch", "baseline"]),
    justify: PropTypes.oneOf(["start", "center", "end", "between", "around", "evenly", "stretch"]),
    wrap: PropTypes.oneOf(["nowrap", "wrap", "wrap-reverse"]),
    gap: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    inline: PropTypes.bool,
};
