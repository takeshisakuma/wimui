import React from "react";
import classNames from "classnames";
import styles from "./masonry.module.scss";

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
      breakInside: "avoid",
      marginBottom: typeof spacing === "number" ? `${spacing}px` : spacing,
    };

    return (
      <div
        ref={ref}
        className={classNames(styles.root, className)}
        style={masonryStyle}
        {...props}
      >
        {React.Children.map(children, (child) => {
          if (React.isValidElement(child)) {
            const typedChild = child as React.ReactElement<React.HTMLAttributes<HTMLElement>>;
            const existingStyle = typedChild.props.style || {};
            return React.cloneElement(typedChild, {
              style: { ...itemStyle, ...existingStyle },
              className: classNames(
                styles.item,
                typedChild.props.className,
              ),
              "data-testid": "wim-masonry-item",
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            } as any);
          }
          return child;
        })}
      </div>
    );
  },
);

Masonry.displayName = "Masonry";
