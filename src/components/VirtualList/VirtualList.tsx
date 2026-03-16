import React, { useState } from "react";
import classNames from "classnames";
import "./virtual-list.scss";

export type VirtualListProps<T = unknown> = Omit<
  React.ComponentPropsWithoutRef<"div">,
  "children"
> & {
  /**
   * レンダリング対象のアイテム配列。
   */
  items: T[];
  /**
   * 各アイテムの高さ（px）。
   */
  itemHeight: number;
  /**
   * リストコンテナの表示高さ（px）。
   */
  height: number;
  /**
   * 各アイテムをレンダリングする関数。
   */
  renderItem: (item: T, index: number) => React.ReactNode;
  /**
   * 表示領域の外側に追加レンダリングするアイテム数。デフォルトは 3。
   */
  overscan?: number;
};

/**
 * 大量のデータを効率よく表示するための仮想化リストコンポーネント。
 * 表示領域内のアイテムのみをレンダリングすることで、パフォーマンスを最適化します。
 */
export function VirtualList<T = unknown>({
  items,
  itemHeight,
  height,
  renderItem,
  overscan = 3,
  className,
  style,
  ...props
}: VirtualListProps<T>) {
  const [scrollTop, setScrollTop] = useState(0);

  const totalHeight = items.length * itemHeight;
  const startIndex = Math.max(0, Math.floor(scrollTop / itemHeight) - overscan);
  const endIndex = Math.min(
    items.length - 1,
    Math.ceil((scrollTop + height) / itemHeight) + overscan,
  );

  const visibleItems = items.slice(startIndex, endIndex + 1);
  const offsetY = startIndex * itemHeight;

  const handleScroll = (e: React.UIEvent<HTMLDivElement>) => {
    setScrollTop((e.target as HTMLDivElement).scrollTop);
  };

  return (
    <div
      className={classNames("wim-virtual-list", className)}
      style={{ ...style, height, overflowY: "auto" }}
      onScroll={handleScroll}
      role="list"
      {...props}
    >
      <div
        className="wim-virtual-list__inner"
        style={{ height: totalHeight, position: "relative" }}
      >
        <div
          className="wim-virtual-list__viewport"
          style={{ transform: `translateY(${offsetY}px)` }}
        >
          {visibleItems.map((item, i) => (
            <div
              key={startIndex + i}
              className="wim-virtual-list__item"
              style={{ height: itemHeight }}
              role="listitem"
              aria-setsize={items.length}
              aria-posinset={startIndex + i + 1}
            >
              {renderItem(item, startIndex + i)}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
