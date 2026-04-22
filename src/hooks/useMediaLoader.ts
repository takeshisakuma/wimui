import React from "react";

export interface UseMediaLoaderOptions {
  /** 読み込み設定。"lazy" の場合に Intersection Observer が有効化されます */
  loading?: "eager" | "lazy";
  /** キャッシュ回避などのための `src` */
  src?: string;
  /** デモ用：読み込み完了を意図的に遅らせるミリ秒 */
  demoDelay?: number;
  /** 交差判定のオフセット（画面に入る何px前で読み込みを開始するか） */
  rootMargin?: string;
}

/**
 * 共通のメディアローダーフック
 * Lazy Loading, Skeleton, Fade-in のロジックを一元管理します。
 */
export const useMediaLoader = (options: UseMediaLoaderOptions = {}) => {
  const { loading = "lazy", src, demoDelay, rootMargin = "250px" } = options;

  // メディア自体がデータロードを完了したか
  const [hasMediaLoaded, setHasMediaLoaded] = React.useState(false);
  // 交差状態（画面内に入ったか）
  const [isIntersecting, setIsIntersecting] = React.useState(loading === "eager");
  // 読み込み状態（遅延がある場合に使用）
  const [isLoadedDelayed, setIsLoadedDelayed] = React.useState(false);

  const [prevSrc, setPrevSrc] = React.useState(src);
  if (src !== prevSrc) {
    setPrevSrc(src);
    setHasMediaLoaded(false);
    setIsLoadedDelayed(false);
  }

  const containerRef = React.useRef<HTMLDivElement>(null);

  // Intersection Observerの設定
  React.useEffect(() => {
    if (loading === "eager") return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsIntersecting(true);
          observer.disconnect();
        }
      },
      { rootMargin }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    } else {
      setIsIntersecting(true);
    }

    return () => observer.disconnect();
  }, [loading, rootMargin]);

  // 遅延の管理
  React.useEffect(() => {
    if (hasMediaLoaded && isIntersecting && demoDelay) {
      const timer = setTimeout(() => setIsLoadedDelayed(true), demoDelay);
      return () => clearTimeout(timer);
    }
  }, [hasMediaLoaded, isIntersecting, demoDelay]);

  if (!(hasMediaLoaded && isIntersecting) && isLoadedDelayed) {
    setIsLoadedDelayed(false);
  }

  const isLoaded = demoDelay ? isLoadedDelayed : (hasMediaLoaded && isIntersecting);

  return {
    /** 監視対象のコンテナにセットするref */
    containerRef,
    /** コンテンツを表示して良い状態か（フェードインのトリガーなどに使用） */
    isLoaded,
    /** ネットワークリクエストを開始して良い状態か */
    isIntersecting,
    /** メディア自体のロード完了を通知する関数 */
    notifyLoaded: () => setHasMediaLoaded(true),
    /** 現在スケルトン（読み込み中）を表示すべきか */
    shouldShowSkeleton: !isLoaded && isIntersecting,
  };
};
