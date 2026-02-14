import React from "react";
import classNames from "classnames";
import "./grid.scss";

import { generateResponsiveVars, ResponsiveProp } from "./grid-utils";

type GridProps = React.ComponentPropsWithoutRef<"div"> & {
    cols?: ResponsiveProp<number | string>;
    rows?: number | string;
    gap?: ResponsiveProp<number | string>;
    columnGap?: ResponsiveProp<number | string>;
    rowGap?: ResponsiveProp<number | string>;
    align?: "start" | "center" | "end" | "stretch";
    justify?: "start" | "center" | "end" | "between" | "around" | "stretch";
    flow?: "row" | "column" | "dense" | "row dense" | "column dense";
    inline?: boolean;
};

export const Grid = React.forwardRef<HTMLDivElement, GridProps>(
    (
        {
            cols,
            rows,
            gap,
            columnGap,
            rowGap,
            align,
            justify,
            flow,
            inline = false,
            className,
            style,
            children,
            ...props
        },
        ref
    ) => {
        const colsStyle = generateResponsiveVars(
            cols,
            "--wim-grid-cols",
            (v) => (typeof v === "number" ? `repeat(${v}, minmax(0, 1fr))` : String(v))
        );

        // Helper to normalize responsive prop to object
        const normalize = (val: ResponsiveProp<number | string> | undefined) => {
            if (val === undefined) return {};
            if (typeof val === "object" && val !== null) return val as Record<string, number | string>;
            return { base: val };
        };

        const gapObj = normalize(gap);
        const colGapObj = normalize(columnGap);
        const rowGapObj = normalize(rowGap);

        // Merge gap into specific gaps if not provided
        const finalColGapFn = () => {
            const merged: Record<string, number | string> = { ...gapObj, ...colGapObj };
            // If merged is empty, return undefined so generateResponsiveVars returns empty
            if (Object.keys(merged).length === 0) return undefined;

            // We need to return an object that generateResponsiveVars understands.
            // It expects the shape { base?, sm?, ... } which merged has.
            // However, types might be tricky. Let's trust spread.
            return merged as ResponsiveProp<number | string>;
        };

        const finalRowGapFn = () => {
            const merged: Record<string, number | string> = { ...gapObj, ...rowGapObj };
            if (Object.keys(merged).length === 0) return undefined;
            return merged as ResponsiveProp<number | string>;
        };

        const columnGapStyle = generateResponsiveVars(
            finalColGapFn(),
            "--wim-grid-col-gap",
            (v) => (typeof v === "number" ? `${v}px` : String(v))
        );

        const rowGapStyle = generateResponsiveVars(
            finalRowGapFn(),
            "--wim-grid-row-gap",
            (v) => (typeof v === "number" ? `${v}px` : String(v))
        );

        const gridStyle: React.CSSProperties = {
            display: inline ? "inline-grid" : "grid",
            gridTemplateRows: typeof rows === "number" ? `repeat(${rows}, minmax(0, 1fr))` : rows,
            alignItems: align,
            justifyContent: justify === "between" ? "space-between" : justify === "around" ? "space-around" : justify,
            gridAutoFlow: flow,
            ...colsStyle,
            ...columnGapStyle,
            ...rowGapStyle,
            ...style,
        };

        return (
            <div
                ref={ref}
                className={classNames("wim-grid", className)}
                style={gridStyle}
                {...props}
            >
                {children}
            </div>
        );
    }
);

Grid.displayName = "Grid";


