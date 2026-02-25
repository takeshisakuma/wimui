import React from "react";
import classNames from "classnames";
import "./masonry.scss";

export type MasonryProps = React.ComponentPropsWithoutRef<"div"> & {
  /** Number of columns */
  columns?: number;
  /** Spacing between items */
  spacing?: number | string;
};

/**
 * Masonry layout component.
 * It arranges items in columns, filling in gaps to minimize empty space.
 */
export const Masonry = React.forwardRef<HTMLDivElement, MasonryProps>(
  (
    { columns = 3, spacing = 16, className, style, children, ...props },
    ref,
  ) => {
    const masonryStyle: React.CSSProperties = {
      columnCount: columns,
      columnGap: typeof spacing === "number" ? `${spacing}px` : spacing,
      ...style,
    };

    const itemStyle: React.CSSProperties = {
      marginBottom: typeof spacing === "number" ? `${spacing}px` : spacing,
    };

    return (
      <div
        ref={ref}
        className={classNames("wim-masonry", className)}
        style={masonryStyle}
        {...props}
      >
        {React.Children.map(children, (child) => {
          if (React.isValidElement(child)) {
            const existingStyle = (child.props as any).style || {};
            return React.cloneElement(child as React.ReactElement<any>, {
              style: { ...itemStyle, ...existingStyle },
              className: classNames(
                "wim-masonry-item",
                (child.props as any).className,
              ),
            });
          }
          return child;
        })}
      </div>
    );
  },
);

Masonry.displayName = "Masonry";
