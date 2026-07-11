import React from "react";
import classNames from "classnames";
import { Slot } from "@radix-ui/react-slot";
import styles from "./grid.module.scss";

import { generateResponsiveVars, ResponsiveProp } from "./grid-utils";
import { getSpacingValue } from "../../../utilities/style-utils";

type GridProps = React.ComponentPropsWithoutRef<"div"> & {
  /**
   * If true, the grid will be rendered as its child, merging its props onto that child.
   * The container-query wrapper div is preserved to maintain responsive column behaviour.
   */
  asChild?: boolean;
  /** Number of columns (or a responsive object per breakpoint) */
  cols?: ResponsiveProp<number | string>;
  /** Number of rows or an explicit grid-template-rows value */
  rows?: number | string;
  /** Gap between cells (or a responsive object per breakpoint) */
  gap?: ResponsiveProp<number | string>;
  /** Gap between columns (or a responsive object per breakpoint) */
  columnGap?: ResponsiveProp<number | string>;
  /** Gap between rows (or a responsive object per breakpoint) */
  rowGap?: ResponsiveProp<number | string>;
  /** Alignment of items along the block (vertical) axis */
  align?: "start" | "center" | "end" | "stretch";
  /** Justification of items along the inline (horizontal) axis */
  justify?: "start" | "center" | "end" | "between" | "around" | "stretch";
  /** Grid auto-flow direction */
  flow?: "row" | "column" | "dense" | "row dense" | "column dense";
  /** Whether to render as an inline grid */
  inline?: boolean;
};

export const Grid = React.forwardRef(
  (
    {
      asChild = false,
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
    }: GridProps,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    ref: React.Ref<any>,
  ) => {
    const Component = asChild ? Slot : "div";
    const colsStyle = generateResponsiveVars(cols, "--wim-grid-cols", (v) =>
      typeof v === "number" ? `repeat(${v}, minmax(0, 1fr))` : String(v),
    );

    // Helper to normalize responsive prop to object
    const normalize = (val: ResponsiveProp<number | string> | undefined) => {
      if (val === undefined) return {};
      if (typeof val === "object" && val !== null)
        return val as Record<string, number | string>;
      return { base: val };
    };

    const gapObj = normalize(gap);
    const colGapObj = normalize(columnGap);
    const rowGapObj = normalize(rowGap);

    // Merge gap into specific gaps if not provided
    const finalColGapFn = () => {
      const merged: Record<string, number | string> = {
        ...gapObj,
        ...colGapObj,
      };
      // If merged is empty, return undefined so generateResponsiveVars returns empty
      if (Object.keys(merged).length === 0) return undefined;

      // We need to return an object that generateResponsiveVars understands.
      // It expects the shape { base?, sm?, ... } which merged has.
      // However, types might be tricky. Let's trust spread.
      return merged as ResponsiveProp<number | string>;
    };

    const finalRowGapFn = () => {
      const merged: Record<string, number | string> = {
        ...gapObj,
        ...rowGapObj,
      };
      if (Object.keys(merged).length === 0) return undefined;
      return merged as ResponsiveProp<number | string>;
    };

    const columnGapStyle = generateResponsiveVars(
      finalColGapFn(),
      "--wim-grid-col-gap",
      (v) => (typeof v === "number" ? `${v}px` : getSpacingValue(v) || String(v)),
    );

    const rowGapStyle = generateResponsiveVars(
      finalRowGapFn(),
      "--wim-grid-row-gap",
      (v) => (typeof v === "number" ? `${v}px` : getSpacingValue(v) || String(v)),
    );

    const gridStyle: React.CSSProperties = {
      display: inline ? "inline-grid" : "grid",
      gridTemplateRows:
        typeof rows === "number" ? `repeat(${rows}, minmax(0, 1fr))` : rows,
      alignItems: align,
      justifyContent:
        justify === "between"
          ? "space-between"
          : justify === "around"
            ? "space-around"
            : justify,
      gridAutoFlow: flow,
      ...colsStyle,
      ...columnGapStyle,
      ...rowGapStyle,
      ...style,
    };

    return (
      <div className={styles.container}>
        <Component
          ref={ref}
          className={classNames("wim-grid", styles.root, className)}
          style={gridStyle}
          {...props}
        >
          {children}
        </Component>
      </div>
    );
  },
);

Grid.displayName = "Grid";
