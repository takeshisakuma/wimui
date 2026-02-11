import React from "react";
import PropTypes from "prop-types";
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
                className={["wim-simple-grid", className].filter(Boolean).join(" ")}
                style={gridStyle}
                {...props}
            >
                {children}
            </div>
        );
    }
);

SimpleGrid.displayName = "SimpleGrid";

SimpleGrid.propTypes = {
    cols: PropTypes.number,
    spacing: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    verticalSpacing: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    minChildWidth: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
};
