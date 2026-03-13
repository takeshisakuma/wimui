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
 * A hook to manage the position and size of a sliding indicator (slider) 
 * that follows an active element within a container.
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

  const updateSlider = useCallback(() => {
    const containerElement = containerRef.current;
    if (!containerElement) return;

    const activeItem = containerElement.querySelector(activeSelector) as HTMLElement;
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

    updateSlider();

    const resizeObserver = new ResizeObserver(() => updateSlider());
    resizeObserver.observe(containerElement);

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
      resizeObserver.disconnect();
      mutationObserver.disconnect();
    };
  }, [updateSlider, variant, dependence]);

  return {
    containerRef,
    sliderStyle,
    isReady,
    updateIndicator: updateSlider,
  };
};
