import React, { useEffect, useRef, useCallback } from "react";
import classNames from "classnames";
import { useWimTranslation } from "@/i18n/useWimTranslation";
import { dataDisplayNs } from "@/i18n/generated/data-display";
import { AnnouncedByParent, useAnnounceAppearance } from "../../_internal/useAnnounce";
import { Spinner } from "../../feedback/Spinner/Spinner";
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
  /** Element shown while loading. Defaults to a spinner with a localized "Loading more…" text. Its text is announced to screen readers when loading starts. */
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
  threshold = 250, /* Exception: Structural Logic — IntersectionObserver の rootMargin。描画される長さではなく「あと何 px で読み足すか」の距離 */
  className,
  container,
}: InfiniteScrollProps) => {
  const observerTarget = useRef<HTMLDivElement>(null);
  const { t } = useWimTranslation(dataDisplayNs);
  // 読み込み中の表示は差し込む表示。文字は根に先に置いた領域で告げる（T353）。
  // 既定が無かったころは、空の role="status" だけが差し込まれ、何も見えず何も読まれなかった
  const { ref: loaderRef, region } = useAnnounceAppearance(loading);

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
    <div className={classNames("wim-infinite-scroll", styles.root, className)}>
      {region}
      {children}
      {/* 監視用のセンチネルと同じ見た目にする。専用クラスは実体が無く、
          読み込み表示だけ左寄せ・余白無しになっていた（T58）。 */}
      {loading && (
        <div ref={loaderRef} className={styles.loader}>
          <AnnouncedByParent.Provider value={true}>
            {loader ?? <Spinner size="sm" label={t("infinite_scroll.loading")} />}
          </AnnouncedByParent.Provider>
        </div>
      )}
      {hasMore && (
        <div ref={observerTarget} className={styles.loader} />
      )}
    </div>
  );
};
