import React, { useState, useRef, useCallback, useEffect, useLayoutEffect } from "react";

const useIsomorphicLayoutEffect =
  typeof window !== "undefined" ? useLayoutEffect : useEffect;

export type IndicatorOrientation = "horizontal" | "vertical";

export interface UseIndicatorOptions {
  /** The CSS selector for the active element (e.g. ".active") */
  activeSelector: string;
  /** Orientation of the indicator */
  orientation?: IndicatorOrientation;
  /** Optional variant indicator to trigger re-calculation */
  variant?: string;
  /** Extra dependence for re-calculating */
  dependence?: unknown;
}

/**
 * useIndicator is a private hook used to calculate the position and size 
 * of a sliding indicator that tracks an active element (e.g., in Tabs or SegmentedControl).
 * 
 * Composition Contract:
 * - Monitors the container element **and the active item itself** for layout changes.
 * - Uses ResizeObserver and MutationObserver for reactive positioning.
 * - Resolves the target element using the provided `activeSelector`.
 * - Manages an `isReady` state to prevent layout flickering on mount.
 *
 * 監視対象に active item を含めるのは必須で、コンテナだけでは足りない。
 * 横並びのタブ類はコンテナが `width: 100%` なので、**Web フォントが差し替わって
 * item の幅が変わってもコンテナのサイズは 1px も動かず、ResizeObserver が鳴らない**。
 * その結果スライダーはフォールバック字形で測った寸法のまま固定される。
 * 2026-08-01 の実測（dark・ローカル Storybook・`document.fonts.ready` 後）:
 * `Tabs - Default` 8.03px / `Tabs - Scrolling` 6.78px /
 * `TabNavigation - Default` 4.36px / `- Pills` 3.95px / `- Contained` 1.94px /
 * `- With Icons` 1.73px、いずれもスライダーが active item より短いまま。
 * `SegmentedControl` と `Tabs - Vertical` が無事だったのは、コンテナ自身の
 * サイズが変わる配置だったからで、正しさではなく偶然。
 *
 * VRT から見ると、この「ズレたまま安定」は緑に見える（毎回同じ絵が撮れる）。
 * `TabNavigation - Pills` だけがフォントの到着がマウントに間に合うかどうかの
 * 境界にあり、113px ⇄ 117px の二状態になって落ちていた（T43）。
 *
 * @param options Configuration for tracking the active element.
 */
export const useIndicator = ({
  activeSelector,
  orientation = "horizontal",
  variant,
  dependence,
}: UseIndicatorOptions) => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [sliderStyle, setSliderStyle] = useState<React.CSSProperties>({
    opacity: 0,
  });
  const [isReady, setIsReady] = useState(false);
  const isReadyRef = useRef(false);
  const resizeObserverRef = useRef<ResizeObserver | null>(null);
  const observedItemRef = useRef<HTMLElement | null>(null);

  const updateSlider = useCallback(() => {
    const containerElement = containerRef.current;
    if (!containerElement) return;

    const activeItem = containerElement.querySelector(activeSelector) as HTMLElement;

    // 計測に使う要素そのものをサイズ監視の対象に載せ替える。active が移ったときだけ
    // 張り替えるので、ResizeObserver のコールバックから呼ばれても再帰しない。
    // スライダー自身は `activeSelector` に一致しないため監視対象に入らない
    // （入れると自分で書いた width が自分を再度発火させるループになる）。
    const resizeObserver = resizeObserverRef.current;
    if (resizeObserver && observedItemRef.current !== activeItem) {
      if (observedItemRef.current) resizeObserver.unobserve(observedItemRef.current);
      if (activeItem) resizeObserver.observe(activeItem);
      observedItemRef.current = activeItem ?? null;
    }

    if (activeItem) {
      const style: React.CSSProperties = { opacity: 1 };
      
      if (orientation === "horizontal") {
        style.width = `${activeItem.offsetWidth}px`;
        style.transform = `translateX(${activeItem.offsetLeft}px)`;
      } else {
        style.height = `${activeItem.offsetHeight}px`;
        style.transform = `translateY(${activeItem.offsetTop}px)`;
      }

      setSliderStyle(style);

      if (!isReadyRef.current) {
        requestAnimationFrame(() => {
          isReadyRef.current = true;
          setIsReady(true);
        });
      }
    } else {
      setSliderStyle({ opacity: 0 });
    }
  }, [activeSelector, orientation]);

  useIsomorphicLayoutEffect(() => {
    const containerElement = containerRef.current;
    if (!containerElement) return;

    const resizeObserver = new ResizeObserver(() => updateSlider());
    resizeObserverRef.current = resizeObserver;
    resizeObserver.observe(containerElement);

    // 監視対象の登録より先に呼ぶと active item を observe できないので、
    // ResizeObserver を作ってから最初の計測を行う。
    updateSlider();

    // `font-display: swap` のフォントは、到着した時点で item を再レイアウトさせる。
    // 上の ResizeObserver で拾えるが、item の幅が変わらず位置だけずれる配置
    // （先行する兄弟だけが伸びる等）のために、確定時点でもう一度測り直す。
    // jsdom には `document.fonts` が無いので存在確認してから使う。
    let disposed = false;
    document.fonts?.ready
      .then(() => {
        if (!disposed) updateSlider();
      })
      .catch(() => undefined);

    const mutationObserver = new MutationObserver((mutations) => {
      for (const mutation of mutations) {
        if (
          mutation.type === "childList" ||
          (mutation.type === "attributes" && mutation.attributeName === "class")
        ) {
          updateSlider();
        }
      }
    });

    mutationObserver.observe(containerElement, {
      attributes: true,
      subtree: true,
      childList: true,
      attributeFilter: ["class"],
    });

    return () => {
      disposed = true;
      resizeObserver.disconnect();
      mutationObserver.disconnect();
      resizeObserverRef.current = null;
      observedItemRef.current = null;
    };
  }, [updateSlider, variant, dependence]);

  return {
    containerRef,
    sliderStyle,
    isReady,
    updateIndicator: updateSlider,
  };
};
