import React, {
  useState,
  useEffect,
  useCallback,
  useRef,
  useMemo,
} from "react";
import classNames from "classnames";
import { Icon } from "../../media/Icon/Icon";
import styles from "./carousel.module.scss";

export type Breakpoints = {
  base?: number;
  sm?: number;
  md?: number;
  lg?: number;
  xl?: number;
};

export type CarouselLabels = {
  slideLabel?: (number: number) => string;
  prevSlide?: string;
  nextSlide?: string;
  goToSlide?: (number: number) => string;
};

export type CarouselProps = {
  /**
   * カルーセル内のコンテンツ
   */
  children?: React.ReactNode;
  /**
   * 自動再生するかどうか
   */
  autoPlay?: boolean;
  /**
   * 自動再生の間隔（ミリ秒）
   */
  interval?: number;
  /**
   * インジケーターを表示するかどうか
   */
  showIndicators?: boolean;
  /**
   * 前後ボタンを表示するかどうか
   */
  showControls?: boolean;
  /**
   * 無限ループするかどうか（シームレスな切り替え）
   */
  loop?: boolean;
  /**
   * 一度に表示するスライド数。数値またはブレークポイントごとのオブジェクトを指定可能。
   */
  slidesToShow?: number | Breakpoints;
  /**
   * アスペクト比（例: '16/9', '4/3', '1/1'）を指定します。
   */
  aspectRatio?: string;
  /**
   * 画像のフィット方法を指定します。aspectRatioが指定されている場合に有効です。（デフォルト: 'cover'）
   */
  objectFit?: "fill" | "contain" | "cover" | "none" | "scale-down";
  /**
   * 手動翻訳用のラベル。
   */
  labels?: CarouselLabels;
  /**
   * 追加のクラス名
   */
  className?: string;
};

const DEFAULT_LABELS: Required<CarouselLabels> = {
  slideLabel: (number) => `Slide ${number}`,
  prevSlide: "Previous slide",
  nextSlide: "Next slide",
  goToSlide: (number) => `Go to slide ${number}`,
};

const getSlidesToShow = (
  setting: number | Breakpoints | undefined,
  width: number,
): number => {
  if (typeof setting === "number") return setting;
  if (!setting) return 1;

  if (width >= 1280 && setting.xl) return setting.xl;
  if (width >= 1024 && setting.lg) return setting.lg;
  if (width >= 768 && setting.md) return setting.md;
  if (width >= 640 && setting.sm) return setting.sm;
  return setting.base || 1;
};

/**
 * `Carousel` は複数のコンテンツをスライドさせて表示するコンポーネントです。
 */
export const Carousel = ({
  children,
  autoPlay = false,
  interval = 5000,
  showIndicators = true,
  showControls = true,
  loop = true,
  slidesToShow = 1,
  aspectRatio,
  objectFit = "cover",
  labels,
  className,
}: CarouselProps) => {
  const mergedLabels = { ...DEFAULT_LABELS, ...labels };

  const items = useMemo(() => React.Children.toArray(children), [children]);
  const originalItemCount = items.length;

  const [windowWidth, setWindowWidth] = useState(
    typeof window !== "undefined" ? window.innerWidth : 0,
  );
  const [currentIndex, setCurrentIndex] = useState(
    loop ? originalItemCount : 0,
  );
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [displaySlides, setDisplaySlides] = useState(1);
  const [isPaused, setIsPaused] = useState(false);

  const timerRef = useRef<number | null>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);

  // レスポンシブ対応
  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    setDisplaySlides(getSlidesToShow(slidesToShow, windowWidth));
  }, [slidesToShow, windowWidth]);

  // 無限ループ用のデータ作成
  const extendedItems = useMemo(() => {
    if (!loop || originalItemCount === 0) return items;
    return [...items, ...items, ...items];
  }, [items, loop, originalItemCount]);

  const nextSlide = useCallback(() => {
    if (isTransitioning) return;

    if (!loop) {
      setCurrentIndex((prev) =>
        Math.min(prev + 1, originalItemCount - displaySlides),
      );
      return;
    }

    setIsTransitioning(true);
    setCurrentIndex((prev) => prev + 1);
  }, [isTransitioning, loop, originalItemCount, displaySlides]);

  const prevSlide = useCallback(() => {
    if (isTransitioning) return;

    if (!loop) {
      setCurrentIndex((prev) => Math.max(prev - 1, 0));
      return;
    }

    setIsTransitioning(true);
    setCurrentIndex((prev) => prev - 1);
  }, [isTransitioning, loop]);

  const goToSlide = (index: number) => {
    if (isTransitioning) return;
    if (loop) {
      setIsTransitioning(true);
      setCurrentIndex(index + originalItemCount);
    } else {
      setCurrentIndex(index);
    }
  };

  // 無限ループのジャンプ処理
  const handleTransitionEnd = () => {
    if (!loop) return;

    setIsTransitioning(false);

    if (currentIndex >= originalItemCount * 2) {
      setCurrentIndex(currentIndex - originalItemCount);
    } else if (currentIndex < originalItemCount) {
      setCurrentIndex(currentIndex + originalItemCount);
    }
  };

  // 自動再生
  useEffect(() => {
    if (autoPlay && !isPaused && originalItemCount > displaySlides) {
      timerRef.current = window.setInterval(nextSlide, interval);
    }
    return () => {
      if (timerRef.current) window.clearInterval(timerRef.current);
    };
  }, [
    autoPlay,
    interval,
    nextSlide,
    originalItemCount,
    displaySlides,
    isPaused,
  ]);

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowLeft") {
      prevSlide();
    } else if (e.key === "ArrowRight") {
      nextSlide();
    }
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.targetTouches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.targetTouches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current) return;
    const distance = touchStartX.current - touchEndX.current;
    const minSwipeDistance = 50;

    if (distance > minSwipeDistance) {
      nextSlide();
    } else if (distance < -minSwipeDistance) {
      prevSlide();
    }

    touchStartX.current = null;
    touchEndX.current = null;
  };

  if (originalItemCount === 0) return null;

  const slideWidth = 100 / displaySlides;
  const offsetX = -currentIndex * slideWidth;

  return (
    /* eslint-disable-next-line jsx-a11y/no-noninteractive-element-interactions */
    <div
      className={classNames(styles.root, className)}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onFocus={() => setIsPaused(true)}
      onBlur={() => setIsPaused(false)}
      onKeyDown={handleKeyDown}
      tabIndex={0}
      role="region"
      aria-roledescription="carousel"
    >
      <div className={styles.viewport}>
        <div
          ref={trackRef}
          className={classNames(
            styles.track,
            isTransitioning && styles.transition,
          )}
          style={{
            transform: `translateX(${offsetX}%)`,
          }}
          onTransitionEnd={handleTransitionEnd}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          {extendedItems.map((child, index) => (
            <div
              key={index}
              className={classNames(
                styles.item,
                aspectRatio && styles.hasAspectRatio,
              )}
              style={
                {
                  flex: `0 0 ${slideWidth}%`,
                  width: `${slideWidth}%`,
                  ...(aspectRatio
                    ? { aspectRatio, "--wim-carousel-object-fit": objectFit }
                    : {}),
                } as React.CSSProperties
              }
              role="group"
              aria-roledescription="slide"
              aria-label={mergedLabels.slideLabel((index % originalItemCount) + 1)}
            >
              {child}
            </div>
          ))}
        </div>
      </div>

      {showControls && originalItemCount > displaySlides && (
        <>
          <button
            className={classNames(styles.control, styles.prev)}
            onClick={prevSlide}
            aria-label={mergedLabels.prevSlide}
            disabled={!loop && currentIndex === 0}
            tabIndex={-1}
          >
            <Icon name="ChevronLeftIcon" size="md" />
          </button>
          <button
            className={classNames(styles.control, styles.next)}
            onClick={nextSlide}
            aria-label={mergedLabels.nextSlide}
            disabled={
              !loop && currentIndex >= originalItemCount - displaySlides
            }
            tabIndex={-1}
          >
            <Icon name="ChevronRightIcon" size="md" />
          </button>
        </>
      )}

      {showIndicators && originalItemCount > 1 && (
        <div className={styles.indicators}>
          {items.map((_, index) => {
            const isActive = loop
              ? currentIndex % originalItemCount === index
              : currentIndex === index;

            return (
              <button
                key={index}
                className={classNames(
                  styles.indicator,
                  isActive && styles.active,
                )}
                onClick={() => goToSlide(index)}
                aria-label={mergedLabels.goToSlide(index + 1)}
                aria-current={isActive ? "true" : "false"}
              />
            );
          })}
        </div>
      )}
    </div>
  );
};
