import React, { useEffect, useRef } from "react";
import classNames from "classnames";
import { Loader } from "../Loader/Loader";
import "./infinitescroll.scss";

export type InfiniteScrollProps = React.ComponentPropsWithoutRef<"div"> & {
  /**
   * 次のデータを読み込む際に呼び出されるコールバック関数。
   */
  onLoadMore: () => void;
  /**
   * 読み込み中かどうか。
   */
  loading?: boolean;
  /**
   * まだ読み込むデータがあるかどうか。
   */
  hasMore?: boolean;
  /**
   * 読み込み中に表示する要素。デフォルトは `Loader` コンポーネント。
   */
  loader?: React.ReactNode;
  /**
   * スクロールを検知する閾値。0から1までの値を指定。デフォルトは 0。
   */
  threshold?: number;
  /**
   * スクロールを検知する際のオフセット。root からの距離を指定。
   */
  rootMargin?: string;
};

/**
 * スクロールに応じて自動的に次のデータを読み込むためのコンポーネント。
 */
export const InfiniteScroll = ({
  onLoadMore,
  loading = false,
  hasMore = true,
  loader,
  threshold = 0,
  rootMargin = "0px",
  className,
  children,
  ...props
}: InfiniteScrollProps) => {
  const triggerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const trigger = triggerRef.current;
    if (!trigger || !hasMore || loading) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          onLoadMore();
        }
      },
      {
        threshold,
        rootMargin,
      },
    );

    observer.observe(trigger);

    return () => {
      if (trigger) {
        observer.unobserve(trigger);
      }
    };
  }, [onLoadMore, loading, hasMore, threshold, rootMargin]);

  return (
    <div className={classNames("wim-infinite-scroll", className)} {...props}>
      {children}
      {hasMore && (
        <div
          ref={triggerRef}
          className="wim-infinite-scroll__trigger"
          aria-hidden="true"
        />
      )}
      {loading && (
        <div className="wim-infinite-scroll__loader">
          {loader || <Loader />}
        </div>
      )}
    </div>
  );
};
