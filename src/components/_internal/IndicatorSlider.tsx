import React from "react";
import classNames from "classnames";
import { useIndicator, IndicatorOrientation } from "./useIndicator";
import styles from "./indicator-slider.module.scss";

/**
 * Visual variants of the slider, matching the classes defined in
 * indicator-slider.module.scss.
 */
export type IndicatorSliderVariant = "underline" | "contained";

/**
 * Props for the IndicatorSlider component.
 */
export type IndicatorSliderProps = {
  /** 
   * CSS selector used to identify the currently active element within the parent container.
   * The slider will position itself relative to this element.
   */
  activeSelector: string;
  /** 
   * Whether the slider moves horizontally or vertically.
   * @default "horizontal"
   */
  orientation?: IndicatorOrientation;
  /** 
   * Additional CSS class name for the slider element.
   */
  className?: string;
  /** 
   * Custom Inline styles for the slider element.
   */
  style?: React.CSSProperties;
  /**
   * Visual variant of the slider. Maps to CSS Module classes.
   */
  variant?: IndicatorSliderVariant;
  /** 
   * Dependency value that triggers a repositioning when changed (e.g., active tab ID).
   */
  dependence?: unknown;
};

/**
 * IndicatorSlider is an internal component that renders an animated indicator 
 * that follows an "active" element (e.g., an active tab or segmented control item).
 * 
 * Composition Contract:
 * - Uses `useIndicator` hook to calculate the position and size of the active element.
 * - Requires an `activeSelector` to be present within its scope or parent.
 * - Handles transition states (e.g., hiding before it's ready) to prevent layout shifts.
 * 
 * This component is used by `Tabs`, `SegmentedControl`, and `TabNavigation`.
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
      className={classNames(styles.container)}
    >
      <div
        className={classNames(
            styles.root, 
            variant && styles[variant], 
            className
        )}
        style={{
          ...sliderStyle,
          ...style,
          opacity: isReady ? sliderStyle.opacity : 0,
          transition: isReady ? "all var(--wim-duration-base) var(--wim-easing-standard)" : "none",
        }}
        data-testid="indicator-slider"
        aria-hidden="true"
      />
    </div>
  );
};

