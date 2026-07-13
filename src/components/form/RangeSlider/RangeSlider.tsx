import React, { useState, useRef, useEffect, useCallback, useId } from "react";
import classNames from "classnames";
import { Slot, Slottable } from "@radix-ui/react-slot";
import { useSliderCommon } from "../../../utilities/slider-utils";
import { FieldTemplate } from "../FieldTemplate";
import styles from "./range-slider.module.scss";

type RangeSliderProps = Omit<React.HTMLAttributes<HTMLDivElement>, "onChange" | "defaultValue"> & {
  /** Current value [min, max] (controlled) */
  value?: [number, number];
  /** Default value [min, max] (uncontrolled) */
  defaultValue?: [number, number];
  /** Minimum value */
  min?: number;
  /** Maximum value */
  max?: number;
  /** Step value */
  step?: number;
  /** Whether both handles may hold the same value (they never cross) */
  allowCross?: boolean;
  /** Whether the slider is disabled */
  disabled?: boolean;
  /** Callback when the value changes */
  onChange?: (value: [number, number]) => void;
  /** Callback when dragging ends */
  onAfterChange?: (value: [number, number]) => void;
  /** Additional class names */
  className?: string;
  /** Name attribute */
  name?: string;
  /** Accessible label */
  label?: string;
  /** Error message */
  error?: string;
  /** Whether to show the required indicator */
  required?: boolean;
  /** Layout direction of label and field */
  layout?: "vertical" | "horizontal";
  /** Custom ID */
  id?: string;
  /** Accessible label when no visible label is provided */
  "aria-label"?: string;
  /** ID of the element that labels the slider */
  "aria-labelledby"?: string;
  /** Whether to render as a child element. */
  asChild?: boolean;
};

/**
 * Slider component for selecting a range (start and end).
 */
export const RangeSlider = ({
  value,
  defaultValue = [20, 80],
  min = 0,
  max = 100,
  step = 1,
  allowCross = false,
  disabled = false,
  onChange,
  onAfterChange,
  className,
  name,
  label,
  error,
  required,
  layout = "vertical",
  id: customId,
  "aria-label": ariaLabel,
  "aria-labelledby": ariaLabelledBy,
  asChild = false,
  children,
  ...props
}: RangeSliderProps) => {
  const isControlled = value !== undefined;
  const generatedId = useId();
  const id = customId || generatedId;
  const labelId = `wim-range-slider-label-${id}`;
  const errorId = `wim-range-slider-error-${id}`;

  const { clamp, calculateValue } = useSliderCommon(min, max, step);

  const safeDefaultValue: [number, number] = [
    clamp(defaultValue[0], min, max),
    clamp(defaultValue[1], min, max),
  ];
  if (safeDefaultValue[0] > safeDefaultValue[1]) {
    safeDefaultValue.sort((a, b) => a - b);
  }

  const [internalValue, setInternalValue] =
    useState<[number, number]>(safeDefaultValue);
  const currentValue = isControlled ? value! : internalValue;
  const trackRef = useRef<HTMLDivElement>(null);
  const thumbMinRef = useRef<HTMLDivElement>(null);
  const thumbMaxRef = useRef<HTMLDivElement>(null);
  const trackFillRef = useRef<HTMLDivElement>(null);
  const hiddenMinRef = useRef<HTMLInputElement>(null);
  const hiddenMaxRef = useRef<HTMLInputElement>(null);
  const [draggingHandle, setDraggingHandle] = useState<"min" | "max" | null>(null);
  const draggingHandleRef = useRef<"min" | "max" | null>(null);
  const dragValueRef = useRef<[number, number]>([...currentValue]);

  const getPercentage = useCallback(
    (val: number) => ((val - min) / (max - min)) * 100,
    [min, max],
  );

  const applyDomPosition = useCallback(
    (vals: [number, number]) => {
      const leftPct = getPercentage(vals[0]);
      const rightPct = getPercentage(vals[1]);
      if (thumbMinRef.current) {
        thumbMinRef.current.style.left = `${leftPct}%`;
        thumbMinRef.current.setAttribute("aria-valuenow", String(vals[0]));
        thumbMinRef.current.setAttribute("aria-valuemax", String(vals[1]));
      }
      if (thumbMaxRef.current) {
        thumbMaxRef.current.style.left = `${rightPct}%`;
        thumbMaxRef.current.setAttribute("aria-valuenow", String(vals[1]));
        thumbMaxRef.current.setAttribute("aria-valuemin", String(vals[0]));
      }
      if (trackFillRef.current) {
        trackFillRef.current.style.left = `${leftPct}%`;
        trackFillRef.current.style.width = `${rightPct - leftPct}%`;
      }
      if (hiddenMinRef.current) hiddenMinRef.current.value = String(vals[0]);
      if (hiddenMaxRef.current) hiddenMaxRef.current.value = String(vals[1]);
    },
    [getPercentage],
  );

  useEffect(() => {
    if (!draggingHandle) {
      applyDomPosition(currentValue);
    }
  }, [currentValue, draggingHandle, applyDomPosition]);

  const handleMouseDown = (
    e: React.MouseEvent | React.TouchEvent,
    handle: "min" | "max",
  ) => {
    if (disabled) return;
    dragValueRef.current = [...currentValue];
    draggingHandleRef.current = handle;
    setDraggingHandle(handle);
    e.stopPropagation();
    e.preventDefault();
  };

  const handleTrackMouseDown = (e: React.MouseEvent | React.TouchEvent) => {
    if (disabled) return;
    const clientX =
      "touches" in e ? e.touches[0].clientX : (e as React.MouseEvent).clientX;
    const clickValue = calculateValue(clientX, trackRef.current);

    const distMin = Math.abs(currentValue[0] - clickValue);
    const distMax = Math.abs(currentValue[1] - clickValue);

    let targetHandle: "min" | "max";
    if (distMin < distMax) targetHandle = "min";
    else if (distMax < distMin) targetHandle = "max";
    else {
      targetHandle = clickValue < currentValue[0] ? "min" : "max";
    }

    draggingHandleRef.current = targetHandle;
    setDraggingHandle(targetHandle);

    const nextValues: [number, number] = [...dragValueRef.current];
    if (targetHandle === "min") {
      nextValues[0] = Math.min(clickValue, allowCross ? max : nextValues[1]);
    } else {
      nextValues[1] = Math.max(clickValue, allowCross ? min : nextValues[0]);
    }
    dragValueRef.current = nextValues;
    applyDomPosition(nextValues);
    onChange?.(nextValues);
  };

  const handleGlobalMouseMoveRef = useCallback(
    (e: MouseEvent | TouchEvent) => {
      if (!draggingHandleRef.current || disabled) return;
      const clientX =
        "touches" in e ? e.touches[0].clientX : (e as MouseEvent).clientX;
      const newValue = calculateValue(clientX, trackRef.current);

      const nextValues: [number, number] = [...dragValueRef.current];
      if (draggingHandleRef.current === "min") {
        nextValues[0] = Math.min(newValue, allowCross ? max : nextValues[1]);
      } else {
        nextValues[1] = Math.max(newValue, allowCross ? min : nextValues[0]);
      }
      dragValueRef.current = nextValues;
      applyDomPosition(nextValues);
      onChange?.(nextValues);
    },
    [disabled, onChange, allowCross, calculateValue, min, max, applyDomPosition],
  );

  const handleGlobalMouseUp = useCallback(() => {
    if (draggingHandleRef.current) {
      draggingHandleRef.current = null;
      setDraggingHandle(null);
      const finalValue = dragValueRef.current;
      if (!isControlled) {
        setInternalValue([...finalValue]);
      }
      onAfterChange?.(finalValue);
    }
  }, [isControlled, onAfterChange]);

  useEffect(() => {
    document.addEventListener("mousemove", handleGlobalMouseMoveRef);
    document.addEventListener("mouseup", handleGlobalMouseUp);
    document.addEventListener("touchmove", handleGlobalMouseMoveRef, {
      passive: false,
    });
    document.addEventListener("touchend", handleGlobalMouseUp);

    return () => {
      document.removeEventListener("mousemove", handleGlobalMouseMoveRef);
      document.removeEventListener("mouseup", handleGlobalMouseUp);
      document.removeEventListener("touchmove", handleGlobalMouseMoveRef);
      document.removeEventListener("touchend", handleGlobalMouseUp);
    };
  }, [handleGlobalMouseMoveRef, handleGlobalMouseUp]);

  const handleKeyDown = (e: React.KeyboardEvent, handle: "min" | "max") => {
    if (disabled) return;

    let nextValues: [number, number] = [...currentValue];
    const targetValue = handle === "min" ? nextValues[0] : nextValues[1];
    let newValue: number;

    if (e.key === "ArrowLeft" || e.key === "ArrowDown") {
      newValue = Math.max(min, targetValue - step);
    } else if (e.key === "ArrowRight" || e.key === "ArrowUp") {
      newValue = Math.min(max, targetValue + step);
    } else if (e.key === "Home") {
      newValue = min;
    } else if (e.key === "End") {
      newValue = max;
    } else {
      return;
    }

    if (handle === "min") {
      const limit = allowCross ? max : nextValues[1];
      nextValues[0] = Math.min(newValue, limit);
    } else {
      const limit = allowCross ? min : nextValues[0];
      nextValues[1] = Math.max(newValue, limit);
    }

    if (!isControlled) {
      setInternalValue(nextValues);
    }
    onChange?.(nextValues);
    e.preventDefault();
  };

  const leftPerc = getPercentage(currentValue[0]);
  const rightPerc = getPercentage(currentValue[1]);
  const Component = asChild ? Slot : "div";

  return (
    <FieldTemplate
      label={label}
      error={error}
      required={required}
      layout={layout}
      labelId={labelId}
      errorId={errorId}
      className={className}
    >
      <Component
        role="presentation"
        data-testid="range-slider-root"
        className={classNames(
          "wim-range-slider",
          styles.root,
          disabled && styles.disabled,
          error && styles.danger,
        )}
        onMouseDown={handleTrackMouseDown}
        onTouchStart={handleTrackMouseDown}
        {...props}
      >
        <div className={styles.trackContainer} ref={trackRef}>
          <div
            ref={trackFillRef}
            className={styles.track}
            style={{
              left: `${leftPerc}%`,
              width: `${rightPerc - leftPerc}%`,
            }}
          />
          <div
            ref={thumbMinRef}
            className={classNames(styles.thumb, draggingHandle === "min" && styles.active)}
            style={{ left: `${leftPerc}%` }}
            role="slider"
            aria-valuemin={min}
            aria-valuemax={currentValue[1]}
            aria-valuenow={currentValue[0]}
            aria-disabled={disabled}
            aria-labelledby={label ? labelId : ariaLabelledBy}
            aria-label={label ? `Start ${label}` : ariaLabel || "Start"}
            aria-describedby={error ? errorId : undefined}
            aria-invalid={error ? true : undefined}
            tabIndex={disabled ? -1 : 0}
            onMouseDown={(e) => handleMouseDown(e, "min")}
            onTouchStart={(e) => handleMouseDown(e, "min")}
            onKeyDown={(e) => handleKeyDown(e, "min")}
          />
          <div
            ref={thumbMaxRef}
            className={classNames(styles.thumb, draggingHandle === "max" && styles.active)}
            style={{ left: `${rightPerc}%` }}
            role="slider"
            aria-valuemin={currentValue[0]}
            aria-valuemax={max}
            aria-valuenow={currentValue[1]}
            aria-disabled={disabled}
            aria-labelledby={label ? labelId : ariaLabelledBy}
            aria-label={label ? `End ${label}` : ariaLabel || "End"}
            aria-describedby={error ? errorId : undefined}
            aria-invalid={error ? true : undefined}
            tabIndex={disabled ? -1 : 0}
            onMouseDown={(e) => handleMouseDown(e, "max")}
            onTouchStart={(e) => handleMouseDown(e, "max")}
            onKeyDown={(e) => handleKeyDown(e, "max")}
          />
        </div>
        <input
          ref={hiddenMinRef}
          type="hidden"
          name={name ? `${name}-min` : ""}
          value={currentValue[0]}
        />
        <input
          ref={hiddenMaxRef}
          type="hidden"
          name={name ? `${name}-max` : ""}
          value={currentValue[1]}
        />
        <Slottable>{children}</Slottable>
      </Component>
    </FieldTemplate>
  );
};

RangeSlider.displayName = "RangeSlider";
