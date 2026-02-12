import React from "react";
import classNames from "classnames";
import "./simpleGrid.scss";

type SimpleGridProps = React.ComponentPropsWithoutRef<"div"> & {
    cols?: number;
    spacing?: number | string;
    verticalSpacing?: number | string;
    minChildWidth?: number | string;
};

export const SimpleGrid = React.forwardRef<HTMLDivElement, SimpleGridProps>(
    (
        {
            cols = 1,
            spacing = 16,
            verticalSpacing,
            minChildWidth,
            className,
            style,
            children,
            ...props
        },
        ref
    ) => {
        const gridStyle: React.CSSProperties = {
            display: "grid",
            gap: typeof spacing === "number" ? `${spacing}px` : spacing,
            rowGap: verticalSpacing
                ? (typeof verticalSpacing === "number" ? `${verticalSpacing}px` : verticalSpacing)
                : (typeof spacing === "number" ? `${spacing}px` : spacing),
            gridTemplateColumns: minChildWidth
                ? `repeat(auto-fill, minmax(${typeof minChildWidth === "number" ? `${minChildWidth}px` : minChildWidth}, 1fr))`
                : `repeat(${cols}, minmax(0, 1fr))`,
            ...style,
        };

        return (
            <div
                ref={ref}
                className={classNames("wim-simple-grid", className)}
                style={gridStyle}
                {...props}
            >
                {children}
            </div>
        );
    }
);

SimpleGrid.displayName = "SimpleGrid";


