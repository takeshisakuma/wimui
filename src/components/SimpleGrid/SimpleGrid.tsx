import React from "react";
import classNames from "classnames";
import "./simpleGrid.scss";

import { generateResponsiveVars, ResponsiveProp } from "../Grid/grid-utils";
import { getSpacingValue } from "../../utilities/style-utils";

type SimpleGridProps = React.ComponentPropsWithoutRef<"div"> & {
  cols?: ResponsiveProp<number>;
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
    ref,
  ) => {
    const colsVars = generateResponsiveVars(
      cols,
      "--wim-simple-grid-cols",
      (v) => `repeat(${v}, minmax(0, 1fr))`,
    );

    const gridStyle: React.CSSProperties = {
      display: "grid",
      gap: getSpacingValue(spacing),
      rowGap: getSpacingValue(verticalSpacing ?? spacing),
      gridTemplateColumns: minChildWidth
        ? `repeat(auto-fill, minmax(${typeof minChildWidth === "number" ? `${minChildWidth}px` : minChildWidth}, 1fr))`
        : undefined,
      ...colsVars,
      ...style,
    };

    return (
      <div className="wim-simple-grid-container">
        <div
          ref={ref}
          className={classNames("wim-simple-grid", className)}
          style={gridStyle}
          {...props}
        >
          {children}
        </div>
      </div>
    );
  },
);

SimpleGrid.displayName = "SimpleGrid";
