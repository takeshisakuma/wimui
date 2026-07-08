import React, { useEffect, useRef, useCallback } from "react";
import classNames from "classnames";
import styles from "./infinite-scroll.module.scss";

export interface InfiniteScrollProps {
  /** Content to display. */
  children: React.ReactNode;
  /** Whether there is more data to load. */
  hasMore?: boolean;
  /** Whether data is currently loading. */
  loading?: boolean;
  /** Callback to load the next batch of data. */
  onLoadMore: () => void;
  /** Element shown while loading. */
  loader?: React.ReactNode;
  /** Scroll threshold (px). onLoadMore is called when the scroll position gets this close to the bottom. */
  threshold?: number;
  /** Additional class names. */
  className?: string;
  /** Target whose scroll events are observed (defaults to window). */
  container?: React.RefObject<HTMLElement | null>;
}

/**
 * Infinite-scroll component that automatically loads content when the user
 * reaches the bottom of the page.
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
