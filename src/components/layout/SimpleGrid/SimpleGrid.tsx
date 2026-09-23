import React from "react";
import classNames from "classnames";
import styles from "./simple-grid.module.scss";

import { generateResponsiveVars, ResponsiveProp } from "../../layout/Grid/grid-utils";
import { getSpacingValue } from "../../../utilities/style-utils";

type SimpleGridProps = React.ComponentPropsWithoutRef<"div"> & {
  /** Number of columns (or a responsive object per breakpoint) */
  cols?: ResponsiveProp<number>;
  /**
   * Spacing between cells: a spacing token name (`"md"`, `"2xl"`, …) or a raw
   * number of pixels. Prefer the token so the gap follows the theme.
   * @default "2xl"
   */
  spacing?: number | string;
  /** Vertical spacing between rows (defaults to `spacing`) */
  verticalSpacing?: number | string;
  /** Minimum width of each child; columns wrap automatically to fit */
  minChildWidth?: number | string;
};

export const SimpleGrid = React.forwardRef<HTMLDivElement, SimpleGridProps>(
  (
    {
      cols = 1,
      // 間隔の既定はトークンから取る。以前は `16` の直書きで、`--wim-spacing-*` を
      // 差し替えたテーマでもここだけ 16px のまま残っていた（必須ルール 4）。
      spacing = "2xl",
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
      <div className={styles.container}>
        <div
          ref={ref}
          className={classNames("wim-simple-grid", styles.root, className)}
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
