import React from "react";
import classNames from "classnames";
import { useIndicator, IndicatorOrientation } from "./useIndicator";

export type IndicatorSliderProps = {
  activeSelector: string;
  orientation?: IndicatorOrientation;
  className?: string;
  style?: React.CSSProperties;
  variant?: string;
  dependence?: unknown;
};

/**
 * A shared internal component to manage a sliding indicator that follows an active element.
 * Used by Tabs, SegmentedControl, and TabNavigation.
 */
export const IndicatorSlider = ({
  activeSelector,
  orientation = "horizontal",
  className,
  style,
  variant,
  dependence,
}: IndicatorSliderProps) => {
  const { containerRef, sliderStyle, isReady } = useIndicator({
    activeSelector,
    orientation,
    variant,
    dependence,
  });

  return (
    <div
      ref={containerRef}
      className={classNames("wim-indicator-slider-container")}
      style={{ position: "relative" }}
    >
      <div
        className={classNames("wim-indicator-slider", className)}
        style={{
          ...sliderStyle,
          ...style,
          opacity: isReady ? sliderStyle.opacity : 0,
          transition: isReady ? "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)" : "none",
        }}
        aria-hidden="true"
      />
    </div>
  );
};
