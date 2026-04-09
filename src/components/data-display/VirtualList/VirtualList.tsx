import React, { useState, useEffect, useRef, useMemo } from "react";
import classNames from "classnames";
import styles from "./virtual-list.module.scss";

export interface VirtualListProps<T> {
  /** 表示するアイテムの配列 */
  items: T[];
  /** 1行あたりの高さ (px) */
  itemHeight: number;
  /** リスト全体の高さ (px) */
  height: number | string;
  /** 各アイテムのレンダリング関数 */
  renderItem: (item: T, index: number) => React.ReactNode;
  /** 表示範囲外に追加でレンダリングするアイテム数 */
  overscan?: number;
  /** 追加のクラス名 */
  className?: string;
  /** アイテムをラップする要素の役割 (アクセシビリティ用) */
  itemRole?: string;
  /** リスト全体の役割 (アクセシビリティ用) */
  role?: string;
}

const VirtualListInner = <T,>(
  {
    items,
    itemHeight,
    height,
    renderItem,
    overscan = 3,
    className,
    itemRole = "listitem",
    role = "list",
  }: VirtualListProps<T>,
  ref: React.ForwardedRef<HTMLDivElement>
) => {
  const localRef = useRef<HTMLDivElement>(null);
  const containerRef = (ref as React.RefObject<HTMLDivElement>) || localRef;
  const [scrollTop, setScrollTop] = useState(0);

  // コンテナの高さをピクセル値として取得（文字列の場合は 0 になることがあるが、通常は数値が渡される想定）
  const containerHeight = typeof height === "number" ? height : 0;

  useEffect(() => {
    const handleScroll = (e: Event) => {
      setScrollTop((e.target as HTMLDivElement).scrollTop);
    };

    const container = containerRef.current;
    if (container) {
      container.addEventListener("scroll", handleScroll);
    }
    return () => {
      if (container) {
        container.removeEventListener("scroll", handleScroll);
      }
    };
  }, [containerRef]);

  // 現在のスクロール位置から表示すべきアイテムのインデックスを計算
  const visibleInfo = useMemo(() => {
    const startNode = Math.max(0, Math.floor(scrollTop / itemHeight) - overscan);
    const visibleNodeCount =
      containerHeight > 0 ? Math.ceil(containerHeight / itemHeight) + overscan * 2 : 20; // fallback count
    const endNode = Math.min(items.length, startNode + visibleNodeCount);

    return { startNode, endNode };
  }, [scrollTop, itemHeight, containerHeight, items.length, overscan]);

  const visibleItems = items.slice(visibleInfo.startNode, visibleInfo.endNode);
  const totalHeight = items.length * itemHeight;

  return (
    <div
      ref={containerRef}
      className={classNames(styles.root, className)}
      style={{ height }}
      role={role}
    >
      <div
        className={styles.viewport}
        style={{ height: totalHeight }}
      >
        {visibleItems.map((item, index) => {
          const actualIndex = visibleInfo.startNode + index;
          return (
            <div
              key={actualIndex}
              className={styles.item}
              style={{
                height: itemHeight,
                transform: `translateY(${actualIndex * itemHeight}px)`,
              }}
              role={itemRole}
            >
              {renderItem(item, actualIndex)}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export const VirtualList = React.forwardRef(VirtualListInner) as <T>(
  props: VirtualListProps<T> & { ref?: React.ForwardedRef<HTMLDivElement> }
) => React.ReactElement;


