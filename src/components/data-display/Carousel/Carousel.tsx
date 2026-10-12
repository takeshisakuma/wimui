import React, {
  useState,
  useEffect,
  useCallback,
  useRef,
  useMemo,
  forwardRef,
} from "react";
import { Slot, Slottable } from "@radix-ui/react-slot";
import classNames from "classnames";
import { Icon } from "../../media/Icon/Icon";
import { VisuallyHidden } from "../../layout/VisuallyHidden/VisuallyHidden";
import styles from "./carousel.module.scss";
import { useWimTranslation } from "@/i18n/useWimTranslation";
import { componentsNs } from "@/i18n/generated/components";
import { ChevronLeftIcon, ChevronRightIcon } from "@/icon";

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
  /** Announced to screen readers when the user changes the slide. Receives the slide number and the slide count. */
  slideStatus?: (current: number, total: number) => string;
};

export type CarouselProps = {
  /** Content of the carousel */
  children?: React.ReactNode;
  /** Whether to auto-play */
  autoPlay?: boolean;
  /** Auto-play interval (in milliseconds) */
  interval?: number;
  /** Whether to show the indicators */
  showIndicators?: boolean;
  /** Whether to show the previous/next buttons */
  showControls?: boolean;
  /**
   * Where the arrows and indicators sit. `overlay` (default) places them on top of the
   * slide, which suits full-bleed images. `outside` moves the arrows beside the viewport
   * and the indicators below it, so they never cover a slide made of text.
   */
  controlsPlacement?: "overlay" | "outside";
  /** Whether to loop infinitely (seamless transitions) */
  loop?: boolean;
  /** Number of slides to show at once. A number or an object per breakpoint. */
  slidesToShow?: number | Breakpoints;
  /** Aspect ratio (e.g. '16/9', '4/3', '1/1'). */
  aspectRatio?: string;
  /** How the image fits. Effective when aspectRatio is set. (default: 'cover') */
  objectFit?: "fill" | "contain" | "cover" | "none" | "scale-down";
  /** Labels for manual translation. */
  labels?: CarouselLabels;
  /** Additional class names */
  className?: string;
  /**
   * Whether to use the Radix Slot pattern
   */
  asChild?: boolean;
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
export const Carousel = forwardRef<HTMLDivElement, CarouselProps>(({
  children,
  autoPlay = false,
  interval = 5000,
  showIndicators = true,
  showControls = true,
  // 既定は overlay のまま。写真のカルーセルは全面で見せるのが普通で、そこを動かすと
  // 使っている画面すべての見え方が変わる。文字だけのスライドは高さが操作の径（42px）に
  // 満たないことがあり、そのとき矢印とドットが文字の上に乗る（T263）。
  controlsPlacement = "overlay",
  loop = true,
  slidesToShow = 1,
  aspectRatio,
  objectFit = "cover",
  labels,
  className,
  asChild,
  ...props
}, ref) => {
  const Component = asChild ? Slot : "div";
  // 既定の文言は翻訳キー（components:carousel.*。en / ja / pt）。`labels` で渡した分が優先。
  const { t } = useWimTranslation(componentsNs);
  const mergedLabels: Required<CarouselLabels> = {
    slideLabel: (number) => t("carousel.slide", { number }),
    prevSlide: t("carousel.prev_slide"),
    nextSlide: t("carousel.next_slide"),
    goToSlide: (number) => t("carousel.go_to_slide", { number }),
    slideStatus: (current, total) => t("carousel.slide_status", { current, total }),
    ...labels,
  };

  // asChild のときは、利用者の要素が根になるので、スライドはその子から取る（T337）。
  const slideSource =
    asChild && React.isValidElement<{ children?: React.ReactNode }>(children) ? children.props.children : children;
  const items = useMemo(() => React.Children.toArray(slideSource), [slideSource]);
  const originalItemCount = items.length;

  const [windowWidth, setWindowWidth] = useState(
    typeof window !== "undefined" ? window.innerWidth : 0,
  );
  const [currentIndex, setCurrentIndex] = useState(
    loop ? originalItemCount : 0,
  );
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const displaySlides = getSlidesToShow(slidesToShow, windowWidth);

  const timerRef = useRef<number | null>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);
  const prevButtonRef = useRef<HTMLButtonElement>(null);
  const nextButtonRef = useRef<HTMLButtonElement>(null);
  const focusAfterMove = useRef<"prev" | "next" | null>(null);

  // レスポンシブ対応
  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

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

  // 利用者がスライドを送ったことを、読み上げで告げる。押してもフォーカスは同じボタンに残り、
  // スライドは最初から全部描いてあって位置が動くだけなので、告げないと何も読まれない
  // （ナレーター + Chrome の実機で、インジケーターで送っても無音だった）。自動再生では告げない。
  const [announcement, setAnnouncement] = useState("");
  const logicalIndex = loop ? currentIndex % originalItemCount : currentIndex;
  const lastIndex = loop ? originalItemCount - 1 : Math.max(originalItemCount - displaySlides, 0);
  const announce = (index: number) => {
    if (isTransitioning || index === logicalIndex) return;
    setAnnouncement(mergedLabels.slideStatus(index + 1, originalItemCount));
  };
  const userGoTo = (index: number) => {
    announce(index);
    goToSlide(index);
  };
  // 端に着くと、押したボタンは無効になって消える。フォーカスを持ったまま消えると body へ落ちるので、
  // 反対側のボタンへ移す（ループしないときだけ起きる）。移すのは描画のあと ── 反対側のボタンは、
  // 端を離れるまで無効で、その場では focus() が効かない。
  const userPrev = () => {
    const target = loop ? (logicalIndex - 1 + originalItemCount) % originalItemCount : Math.max(logicalIndex - 1, 0);
    announce(target);
    if (!loop && target === 0 && document.activeElement === prevButtonRef.current) focusAfterMove.current = "next";
    prevSlide();
  };
  const userNext = () => {
    const target = loop ? (logicalIndex + 1) % originalItemCount : Math.min(logicalIndex + 1, lastIndex);
    announce(target);
    if (!loop && target === lastIndex && document.activeElement === nextButtonRef.current) focusAfterMove.current = "prev";
    nextSlide();
  };
  useEffect(() => {
    const side = focusAfterMove.current;
    if (!side) return;
    focusAfterMove.current = null;
    (side === "prev" ? prevButtonRef : nextButtonRef).current?.focus();
  }, [currentIndex]);

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowLeft") {
      userPrev();
    } else if (e.key === "ArrowRight") {
      userNext();
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

  // 根の中身（スライドの枠・前後のボタン・インジケーター）。
  const body = (
    <>
      <VisuallyHidden role="status" aria-atomic="true">
        {announcement}
      </VisuallyHidden>
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
              aria-roledescription={t("carousel.slide_roledescription")}
              aria-label={mergedLabels.slideLabel((index % originalItemCount) + 1)}
            >
              {child}
            </div>
          ))}
        </div>
      </div>

      {showControls && originalItemCount > displaySlides && (
        <>
          {/* 前へ・次へも Tab で届く（2026-10-12・ユーザー判断。それまでは tabIndex=-1 で、スライドの
              領域で ← → を押す形だけだった。スクリーンリーダーで使うと、ボタンに届かないのが分かりにくい）。 */}
          <button
            ref={prevButtonRef}
            className={classNames(styles.control, styles.prev)}
            onClick={userPrev}
            aria-label={mergedLabels.prevSlide}
            disabled={!loop && currentIndex === 0}
          >
            <Icon component={ChevronLeftIcon} size="md" />
          </button>
          <button
            ref={nextButtonRef}
            className={classNames(styles.control, styles.next)}
            onClick={userNext}
            aria-label={mergedLabels.nextSlide}
            disabled={
              !loop && currentIndex >= originalItemCount - displaySlides
            }
          >
            <Icon component={ChevronRightIcon} size="md" />
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
                onClick={() => userGoTo(index)}
                aria-label={mergedLabels.goToSlide(index + 1)}
                aria-current={isActive ? "true" : "false"}
              />
            );
          })}
        </div>
      )}
    </>
  );

  return (
    <Component
      ref={ref}
      className={classNames(
        "wim-carousel",
        styles.root,
        controlsPlacement === "outside" && styles.controlsOutside,
        className,
      )}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onFocus={() => setIsPaused(true)}
      onBlur={() => setIsPaused(false)}
      onKeyDown={handleKeyDown}
      tabIndex={0}
      role="region"
      aria-roledescription={t("carousel.roledescription")}
      {...props}
    >
      {/* asChild のときは、利用者の要素を根にして、その子をスライドとして扱う（T337）。以前は、Slot の子が
          部品の中身（複数の要素）で、「子が 1 つの要素ではない」と例外になっていた。 */}
      {asChild ? <Slottable child={children}>{() => body}</Slottable> : body}
    </Component>
  );
});

Carousel.displayName = "Carousel";
