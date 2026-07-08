import React, { useRef, useState, useCallback } from "react";
import classNames from "classnames";
import { Icon } from "../Icon/Icon";
import { ChevronLeftIcon, ChevronRightIcon } from "@/icon";
import type { MediaRadius } from "../../../types/tokens";
import styles from "./image-compare.module.scss";

/** Labels for internationalization. */
export type ImageCompareLabels = {
  /** Accessible label for the drag handle */
  handleAriaLabel?: string;
};

export interface ImageCompareProps
  extends Omit<React.ComponentPropsWithoutRef<"div">, "onChange"> {
  /** Source URL of the "before" image (revealed on the leading side) */
  before: string;
  /** Source URL of the "after" image (revealed on the trailing side) */
  after: string;
  /** Alternative text for the before image */
  beforeAlt?: string;
  /** Alternative text for the after image */
  afterAlt?: string;
  /** Badge label overlaid on the before side */
  beforeLabel?: React.ReactNode;
  /** Badge label overlaid on the after side */
  afterLabel?: React.ReactNode;
  /** Initial divider position as a percentage 0–100 (uncontrolled) */
  defaultPosition?: number;
  /** Divider position as a percentage 0–100 (controlled) */
  position?: number;
  /** Callback when the divider position changes */
  onPositionChange?: (position: number) => void;
  /** Direction the divider slides along */
  orientation?: "horizontal" | "vertical";
  /** Width of the component */
  width?: string | number;
  /** Height of the component */
  height?: string | number;
  /** Corner radius size */
  radius?: MediaRadius;
  /** Labels for internationalization */
  labels?: ImageCompareLabels;
  /** Additional class names */
  className?: string;
}

const clamp = (n: number) => Math.max(0, Math.min(100, n));

/**
 * ImageCompare overlays two images and reveals them with a draggable divider —
 * a before/after slider for comparing edits, restorations, or AI-generated
 * results against their source.
 *
 * Composition Contract:
 * - Managed by: App consumption
 * - Scroll lock: No
 */
export const ImageCompare = React.forwardRef<HTMLDivElement, ImageCompareProps>(
  (
    {
      before,
      after,
      beforeAlt = "",
      afterAlt = "",
      beforeLabel,
      afterLabel,
      defaultPosition = 50,
      position,
      onPositionChange,
      orientation = "horizontal",
      width,
      height,
      radius = "md",
      labels,
      className,
      ...props
    },
    ref,
  ) => {
    const { handleAriaLabel = "Drag to compare" } = labels ?? {};
    const isControlled = position !== undefined;
    const [internalPosition, setInternalPosition] = useState(clamp(defaultPosition));
    const pos = clamp(isControlled ? position : internalPosition);
    const isVertical = orientation === "vertical";

    const containerRef = useRef<HTMLDivElement>(null);
    const draggingRef = useRef(false);

    const mergedRef = useCallback(
      (node: HTMLDivElement | null) => {
        containerRef.current = node;
        if (typeof ref === "function") ref(node);
        else if (ref) (ref as React.MutableRefObject<HTMLDivElement | null>).current = node;
      },
      [ref],
    );

    const setPosition = useCallback(
      (next: number) => {
        const clamped = clamp(next);
        if (!isControlled) setInternalPosition(clamped);
        onPositionChange?.(clamped);
      },
      [isControlled, onPositionChange],
    );

    const updateFromPointer = useCallback(
      (clientX: number, clientY: number) => {
        const rect = containerRef.current?.getBoundingClientRect();
        if (!rect) return;
        const next = isVertical
          ? ((clientY - rect.top) / rect.height) * 100
          : ((clientX - rect.left) / rect.width) * 100;
        setPosition(next);
      },
      [isVertical, setPosition],
    );

    const handlePointerDown = (e: React.PointerEvent) => {
      draggingRef.current = true;
      (e.currentTarget as HTMLElement).setPointerCapture(e.pointerId);
      updateFromPointer(e.clientX, e.clientY);
    };

    const handlePointerMove = (e: React.PointerEvent) => {
      if (!draggingRef.current) return;
      updateFromPointer(e.clientX, e.clientY);
    };

    const handlePointerUp = (e: React.PointerEvent) => {
      draggingRef.current = false;
      (e.currentTarget as HTMLElement).releasePointerCapture?.(e.pointerId);
    };

    const handleKeyDown = (e: React.KeyboardEvent) => {
      const step = e.shiftKey ? 10 : 2;
      const decKey = isVertical ? "ArrowUp" : "ArrowLeft";
      const incKey = isVertical ? "ArrowDown" : "ArrowRight";
      if (e.key === decKey) {
        e.preventDefault();
        setPosition(pos - step);
      } else if (e.key === incKey) {
        e.preventDefault();
        setPosition(pos + step);
      } else if (e.key === "Home") {
        e.preventDefault();
        setPosition(0);
      } else if (e.key === "End") {
        e.preventDefault();
        setPosition(100);
      }
    };

    const clipStyle: React.CSSProperties = isVertical
      ? { clipPath: `inset(0 0 ${100 - pos}% 0)` }
      : { clipPath: `inset(0 ${100 - pos}% 0 0)` };

    const dividerStyle: React.CSSProperties = isVertical
      ? { top: `${pos}%` }
      : { left: `${pos}%` };

    return (
      <div
        ref={mergedRef}
        className={classNames(
          styles.root,
          isVertical && styles.vertical,
          styles[`radius-${radius}`],
          className,
        )}
        style={{ width, height }}
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
        {...props}
      >
        <img className={styles.image} src={after} alt={afterAlt} draggable={false} />
        {afterLabel && <span className={classNames(styles.label, styles.afterLabel)}>{afterLabel}</span>}

        <div className={styles.beforeLayer} style={clipStyle}>
          <img className={styles.image} src={before} alt={beforeAlt} draggable={false} />
          {beforeLabel && <span className={classNames(styles.label, styles.beforeLabel)}>{beforeLabel}</span>}
        </div>

        <div className={styles.divider} style={dividerStyle}>
          <span className={styles.line} aria-hidden="true" />
          <button
            type="button"
            className={styles.handle}
            role="slider"
            aria-label={handleAriaLabel}
            aria-orientation={orientation}
            aria-valuenow={Math.round(pos)}
            aria-valuemin={0}
            aria-valuemax={100}
            onKeyDown={handleKeyDown}
            onPointerDown={handlePointerDown}
          >
            <Icon component={ChevronLeftIcon} size="sm" className={styles.arrow} />
            <Icon component={ChevronRightIcon} size="sm" className={styles.arrow} />
          </button>
        </div>
      </div>
    );
  },
);

ImageCompare.displayName = "ImageCompare";
