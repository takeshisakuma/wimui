import React, { useEffect, useRef, useCallback } from "react";
import classNames from "classnames";
import styles from "./infinite-scroll.module.scss";

export interface InfiniteScrollProps {
  /** 表示するコンテンツ。 */
  children: React.ReactNode;
  /** さらに読み込むデータがあるかどうか。 */
  hasMore?: boolean;
  /** ローディング中かどうか。 */
  loading?: boolean;
  /** 次のデータを読み込むためのコールバック。 */
  onLoadMore: () => void;
  /** ローディング中に表示する要素。 */
  loader?: React.ReactNode;
  /** スクロールのしきい値（px）。最下部からこの距離に近づくと onLoadMore が呼ばれます。 */
  threshold?: number;
  /** 追加のクラス名。 */
  className?: string;
  /** スクロールイベントを監視するターゲット（デフォルトは window）。 */
  container?: React.RefObject<HTMLElement | null>;
}

/**
 * ユーザーがページの最下部に到達したときに自動的にコンテンツを読み込む
 * インフィニットスクロールコンポーネント。
 */
export const InfiniteScroll = ({
  children,
  hasMore = false,
  loading = false,
  onLoadMore,
  loader,
  threshold = 250,
  className,
  container,
}: InfiniteScrollProps) => {
  const observerTarget = useRef<HTMLDivElement>(null);

  const handleObserver = useCallback(
    (entries: IntersectionObserverEntry[]) => {
      const [target] = entries;
      if (target.isIntersecting && hasMore) {
        onLoadMore();
      }
    },
    [hasMore, onLoadMore],
  );

  useEffect(() => {
    const option = {
      root: container?.current || null,
      rootMargin: `0px 0px ${threshold}px 0px`,
      threshold: 0,
    };

    const observer = new IntersectionObserver(handleObserver, option);

    const target = observerTarget.current;
    if (target) {
      observer.observe(target);
    }

    return () => {
      if (target) {
        observer.unobserve(target);
      }
    };
  }, [handleObserver, container, threshold]);

  return (
    <div className={classNames(styles.root, className)}>
      {children}
      {loading && <div role="status" className={styles.loading}>{loader}</div>}
      {hasMore && (
        <div ref={observerTarget} className={styles.loader} />
      )}
    </div>
  );
};
