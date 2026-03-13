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

  // 読み込み状態（最終的に表示して良いか）
  const [isLoaded, setIsLoaded] = React.useState(false);
  // メディア自体がデータロードを完了したか
  const [hasMediaLoaded, setHasMediaLoaded] = React.useState(false);
  // 交差状態（画面内に入ったか）
  const [isIntersecting, setIsIntersecting] = React.useState(false);
  
  const containerRef = React.useRef<HTMLDivElement>(null);

  // Intersection Observerの設定
  React.useEffect(() => {
    // 監視対象がない場合やEager読み込みの場合は即時Intersect
    if (loading === "eager") {
      setIsIntersecting(true);
      return;
    }

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
      // refがセットされていない場合は安全のため即時表示
      setIsIntersecting(true);
    }

    return () => observer.disconnect();
  }, [loading, src, rootMargin]);

  // 読み込み完了と遅延の管理
  React.useEffect(() => {
    if (hasMediaLoaded && isIntersecting) {
      if (demoDelay) {
        const timer = setTimeout(() => setIsLoaded(true), demoDelay);
        return () => clearTimeout(timer);
      } else {
        setIsLoaded(true);
      }
    } else {
      setIsLoaded(false);
    }
  }, [hasMediaLoaded, isIntersecting, demoDelay, src]);

  // srcが変わったら状態をリセット
  React.useEffect(() => {
    setHasMediaLoaded(false);
    setIsLoaded(false);
    // Intersectionは一度trueになったら維持して良い（スクロール済みのため）
  }, [src]);

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
