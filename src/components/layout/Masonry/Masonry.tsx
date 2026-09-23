import React from "react";
import classNames from "classnames";
import { getSpacingValue } from "../../../utilities/style-utils";
import styles from "./masonry.module.scss";

export type MasonryProps = React.ComponentPropsWithoutRef<"div"> & {
  /**
   * Number of columns. Pick it from how many items there are — three columns
   * holding four cards leaves a ragged row that reads as a template, not a choice.
   * @default 3
   */
  columns?: number;
  /**
   * Gap between items: a spacing token name (`"md"`, `"2xl"`, …) or a raw number
   * of pixels. Prefer the token so the gap follows the theme.
   * @default "2xl"
   */
  spacing?: number | string;
};

/**
 * Masonry layout component.
 * It arranges items in columns, filling in gaps to minimize empty space.
 */
export const Masonry = React.forwardRef<HTMLDivElement, MasonryProps>(
  (
    // 間隔の既定はトークンから取る。以前は `16` の直書きで、`--wim-spacing-*` を
    // 差し替えたテーマでもここだけ 16px のまま残っていた（必須ルール 4）。
    // `2xl` = 1rem なので、既定の root font-size では見た目は変わらない。
    { columns = 3, spacing = "2xl", className, style, children, ...props },
    ref,
  ) => {
    const masonryStyle: React.CSSProperties = {
      columnCount: columns,
      columnGap: getSpacingValue(spacing),
      ...style,
    };

    const itemStyle: React.CSSProperties = {
      breakInside: "avoid",
      marginBottom: getSpacingValue(spacing),
    };

    return (
      <div
        ref={ref}
        className={classNames("wim-masonry", styles.root, className)}
        style={masonryStyle}
        {...props}
      >
        {React.Children.map(children, (child) => {
          if (React.isValidElement(child)) {
            const childProps = child.props as React.HTMLAttributes<HTMLElement>;
            const existingStyle = childProps.style || {};
            return React.cloneElement(child, {
              style: { ...itemStyle, ...existingStyle },
              className: classNames(
                styles.item,
                childProps.className,
              ),
              "data-testid": "masonry-item",
            } as React.Attributes & React.HTMLAttributes<HTMLElement>);
          }
          return child;
        })}
      </div>
    );
  },
);

Masonry.displayName = "Masonry";
