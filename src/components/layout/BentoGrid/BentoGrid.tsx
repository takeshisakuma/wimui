import React from "react";
import classNames from "classnames";
import styles from "./bento-grid.module.scss";

export type BentoGridColumns = 2 | 3 | 4;

/* 列数は Item 側も知る必要がある。span が列数を超えると、grid は**暗黙の列を作って
   レイアウトを壊す**（`Dashboard` で実測した形 ── 390px・4 列指定・span 3 で
   `grid-template-columns` が `0px 186px 152px` になり、幅 30px のカードに文字が
   1 文字ずつ縦に折れた）。ここで配って Item 側で丸める。 */
const BentoGridColumnsContext = React.createContext<BentoGridColumns>(3);

type BentoGridProps = React.ComponentPropsWithoutRef<"div"> & {
  /** Grid items (typically BentoGrid.Item elements) */
  children?: React.ReactNode;
  /**
   * How many columns the grid uses from container width `md` up; below that it is
   * always a single column. Pick it from what the tiles hold — three columns is a
   * layout decision, not a default to accept, and three equal tiles is the shape
   * readers have learnt to skip.
   * @default 3
   */
  columns?: BentoGridColumns;
  /** Fixed height of each grid row (`grid-auto-rows`). Any CSS length; defaults to `18rem`. Lower it when tiles hold compact content so they don't read as mostly-empty panels. */
  rowHeight?: string;
};

export const BentoGrid = ({
  className,
  children,
  columns = 3,
  rowHeight,
  style,
  ...props
}: BentoGridProps) => {
  return (
    <div className={styles.container}>
      <div
        className={classNames("wim-bento-grid", styles.root, className)}
        style={{
          ...style,
          ["--wim-bento-columns" as string]: columns,
          ...(rowHeight ? { ["--wim-bento-row-height" as string]: rowHeight } : null),
        }}
        {...props}
      >
        <BentoGridColumnsContext.Provider value={columns}>
          {children}
        </BentoGridColumnsContext.Provider>
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
   * How many columns the tile occupies where the grid is at its full width.
   * Below that width the grid is a single column and every tile spans it.
   * A span wider than the grid's `columns` is clamped to it.
   *
   * Give one tile more room than the rest: tiles that all span 1 are the equal
   * grid the composition rules call out, whatever their contents.
   * @default 1
   */
  span?: 1 | 2 | 3 | 4;
  /**
   * How many rows the tile occupies where the grid is at its full width.
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
  span: spanProp = 1,
  rowSpan = 1,
  ...props
}: BentoGridItemProps) => {
  const columns = React.useContext(BentoGridColumnsContext);
  // 列数を超える span は暗黙の列を作ってグリッドを壊すので、ここで丸める。
  // **変数名は `span` のまま**にしておく ── `check:prop-classes` は
  // `styles[`span-${span}`]` の綴りから prop 名を引くので、別名にすると
  // 「docgen に prop が無い」として**黙って飛ばされる**（T249 のときと同じ穴）。
  const span = Math.min(spanProp, columns) as 1 | 2 | 3 | 4;

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
