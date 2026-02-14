import React from "react";
import classNames from "classnames";
import "./grid.scss";

import { generateResponsiveVars, ResponsiveProp } from "./grid-utils";

type GridProps = React.ComponentPropsWithoutRef<"div"> & {
    cols?: ResponsiveProp<number | string>;
    rows?: number | string;
    gap?: number | string;
    columnGap?: number | string;
    rowGap?: number | string;
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

        const gridStyle: React.CSSProperties = {
            display: inline ? "inline-grid" : "grid",
            gridTemplateRows: typeof rows === "number" ? `repeat(${rows}, minmax(0, 1fr))` : rows,
            gap: typeof gap === "number" ? `${gap}px` : gap,
            columnGap: typeof columnGap === "number" ? `${columnGap}px` : columnGap,
            rowGap: typeof rowGap === "number" ? `${rowGap}px` : rowGap,
            alignItems: align,
            justifyContent: justify === "between" ? "space-between" : justify === "around" ? "space-around" : justify,
            gridAutoFlow: flow,
            ...colsStyle,
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


