import React from "react";
import classNames from "classnames";
import styles from "./bento-grid.module.scss";

type BentoGridProps = React.ComponentPropsWithoutRef<"div"> & {
  /** Grid items (typically BentoGrid.Item elements) */
  children?: React.ReactNode;
  /** Fixed height of each grid row (`grid-auto-rows`). Any CSS length; defaults to `18rem`. Lower it when tiles hold compact content so they don't read as mostly-empty panels. */
  rowHeight?: string;
};

export const BentoGrid = ({
  className,
  children,
  rowHeight,
  style,
  ...props
}: BentoGridProps) => {
  return (
    <div className={styles.container}>
      <div
        className={classNames("wim-bento-grid", styles.root, className)}
        style={rowHeight ? { ...style, ["--wim-bento-row-height" as string]: rowHeight } : style}
        {...props}
      >
        {children}
      </div>
    </div>
  );
};

BentoGrid.displayName = "BentoGrid";

export type BentoGridItemProps = React.ComponentPropsWithoutRef<"div"> & {
  title?: React.ReactNode;
  description?: React.ReactNode;
  header?: React.ReactNode;
  icon?: React.ReactNode;
  /**
   * How many columns the tile occupies where the grid is 3 columns wide.
   * Below that width the grid is a single column and every tile spans it.
   * @default 1
   */
  span?: 1 | 2 | 3;
  /**
   * How many rows the tile occupies where the grid is 3 columns wide.
   * @default 1
   */
  rowSpan?: 1 | 2;
};

export const BentoGridItem = ({
  className,
  title,
  description,
  header,
  icon,
  span = 1,
  rowSpan = 1,
  ...props
}: BentoGridItemProps) => {
  return (
    <div
      // `styles[`span-${span}`]` の形にしているのは、`check:prop-classes` が
      // この綴りだけを見て「型が受け取るのにクラスが無い値」を検出するため。
      // T249 以前はここが生の文字列クラス（`wim-bento-grid-item--col-span-2`）で、
      // **定義する CSS が 1 行も無いまま 8 箇所から渡されていた**。`classNames` は
      // 解決しない文字列をそのまま出すので DOM にはクラスが載り、型も lint も
      // VRT も鳴らなかった（T121 と同じ族）。
      className={classNames(styles.item, styles[`span-${span}`], styles[`row-${rowSpan}`], className)}
      {...props}
    >
      {header && <div className={styles.itemHeader}>{header}</div>}
      <div className={styles.itemContent}>
        {icon && <div className={styles.itemIcon}>{icon}</div>}
        <div className={styles.itemText}>
          {title && <div className={styles.itemTitle}>{title}</div>}
          {description && (
            <div className={styles.itemDescription}>
              {description}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

BentoGridItem.displayName = "BentoGridItem";
