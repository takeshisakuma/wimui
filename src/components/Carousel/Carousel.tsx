import React, { useState, useEffect, useCallback, useRef, useMemo } from "react";
import classNames from "classnames";
import { Icon } from "../Icon/Icon";
import "./carousel.scss";

export type Breakpoints = {
    base?: number;
    sm?: number;
    md?: number;
    lg?: number;
    xl?: number;
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
     * 追加のクラス名
     */
    className?: string;
};

const getSlidesToShow = (setting: number | Breakpoints | undefined, width: number): number => {
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
    className,
}: CarouselProps) => {
    const items = useMemo(() => React.Children.toArray(children), [children]);
    const originalItemCount = items.length;

    const [windowWidth, setWindowWidth] = useState(typeof window !== "undefined" ? window.innerWidth : 0);
    const [currentIndex, setCurrentIndex] = useState(loop ? originalItemCount : 0);
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
    // [Cloned End] + [Original Items] + [Cloned Start]
    const extendedItems = useMemo(() => {
        if (!loop || originalItemCount === 0) return items;
        return [...items, ...items, ...items];
    }, [items, loop, originalItemCount]);

    const nextSlide = useCallback(() => {
        if (isTransitioning) return;

        if (!loop) {
            setCurrentIndex((prev) => Math.min(prev + 1, originalItemCount - displaySlides));
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
            // 最後まで到達したら最初に戻る（アニメーションなし）
            setCurrentIndex(currentIndex - originalItemCount);
        } else if (currentIndex < originalItemCount) {
            // 最初より前に戻ったら最後に飛ぶ（アニメーションなし）
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
    }, [autoPlay, interval, nextSlide, originalItemCount, displaySlides, isPaused]);

    // キーボード操作
    const handleKeyDown = (e: React.KeyboardEvent) => {
        if (e.key === "ArrowLeft") {
            prevSlide();
        } else if (e.key === "ArrowRight") {
            nextSlide();
        }
    };

    // スワイプ操作
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
        <div
            className={classNames("wim-carousel", className)}
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
            onFocus={() => setIsPaused(true)}
            onBlur={() => setIsPaused(false)}
            onKeyDown={handleKeyDown}
            tabIndex={0} // フォーカス可能にしてキーボードイベントを受け取る
            role="region"
            aria-roledescription="carousel"
        >
            <div className="wim-carousel__viewport">
                <div
                    ref={trackRef}
                    className={classNames(
                        "wim-carousel__track",
                        isTransitioning && "wim-carousel__track--transition"
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
                            className="wim-carousel__item"
                            style={{ flex: `0 0 ${slideWidth}%`, width: `${slideWidth}%` }}
                            role="group"
                            aria-roledescription="slide"
                        >
                            {child}
                        </div>
                    ))}
                </div>
            </div>

            {showControls && originalItemCount > displaySlides && (
                <>
                    <button
                        className="wim-carousel__control wim-carousel__control--prev"
                        onClick={prevSlide}
                        aria-label="Previous slide"
                        disabled={!loop && currentIndex === 0}
                        tabIndex={-1} // 親要素でフォーカス管理するためボタン自体のタブ移動はスキップしても良いが、好みによる
                    >
                        <Icon name="ChevronLeftIcon" size="medium" />
                    </button>
                    <button
                        className="wim-carousel__control wim-carousel__control--next"
                        onClick={nextSlide}
                        aria-label="Next slide"
                        disabled={!loop && currentIndex >= originalItemCount - displaySlides}
                        tabIndex={-1}
                    >
                        <Icon name="ChevronRightIcon" size="medium" />
                    </button>
                </>
            )}

            {showIndicators && originalItemCount > 1 && (
                <div className="wim-carousel__indicators">
                    {items.map((_, index) => {
                        const isActive = loop
                            ? (currentIndex % originalItemCount) === index
                            : currentIndex === index;

                        return (
                            <button
                                key={index}
                                className={classNames(
                                    "wim-carousel__indicator",
                                    isActive && "wim-carousel__indicator--active"
                                )}
                                onClick={() => goToSlide(index)}
                                aria-label={`Go to slide ${index + 1}`}
                                aria-current={isActive ? "true" : "false"}
                            />
                        );
                    })}
                </div>
            )}
        </div>
    );
};


