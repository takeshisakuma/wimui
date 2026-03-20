import { useRef, useEffect } from "react";
import type { DataGridProps } from "./DataGrid";

export function useInfiniteScroll(
  loadMore: DataGridProps<Record<string, unknown>>["loadMore"],
) {
  const loaderRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!loadMore || !loadMore.hasMore || loadMore.loading) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          loadMore.onLoadMore();
        }
      },
      { threshold: loadMore.threshold || 0.1 },
    );

    if (loaderRef.current) {
      observer.observe(loaderRef.current);
    }

    return () => observer.disconnect();
  }, [loadMore]);

  return { loaderRef };
}
