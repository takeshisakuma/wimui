import { useRef, useEffect } from "react";
import type { DataGridProps } from "./DataGrid";

export function useInfiniteScroll(
  infiniteScroll: DataGridProps<Record<string, unknown>>["infiniteScroll"],
) {
  const loaderRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!infiniteScroll || !infiniteScroll.hasMore) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          infiniteScroll.onLoadMore();
        }
      },
      { threshold: infiniteScroll.threshold || 0.1 },
    );

    if (loaderRef.current) {
      observer.observe(loaderRef.current);
    }

    return () => observer.disconnect();
  }, [infiniteScroll]);

  return { loaderRef };
}
