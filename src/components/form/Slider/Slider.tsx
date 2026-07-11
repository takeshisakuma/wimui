import React, { useState, useRef, useEffect, useCallback, useId, forwardRef } from "react";
import classNames from "classnames";
import { Slot, Slottable } from "@radix-ui/react-slot";
import { useSliderCommon } from "../../../utilities/slider-utils";
import { FieldTemplate } from "../FieldTemplate";
import styles from "./slider.module.scss";

export interface SliderProps extends Omit<React.ComponentPropsWithoutRef<"div">, "onChange" | "defaultValue"> {
  /** Current value (controlled) */
  value?: number;
  /** Default value (uncontrolled) */
  defaultValue?: number;
  /** Minimum value */
  min?: number;
  /** Maximum value */
  max?: number;
  /** Step value */
  step?: number;
  /** Whether the slider is disabled */
  disabled?: boolean;
  /** Callback when the value changes */
  onChange?: (value: number) => void;
  /** Callback when dragging ends */
  onAfterChange?: (value: number) => void;
  /** Name attribute */
  name?: string;
  /** Accessible label */
  label?: React.ReactNode;
  /** Error message */
  error?: string;
  /** Whether to show the required indicator */
  required?: boolean;
  /** Layout direction of label and field */
  layout?: "vertical" | "horizontal";
  /** Custom ID */
  id?: string;
  /** Whether to render as a child element. */
  asChild?: boolean;
  /** Custom styles for internal parts */
  styles?: React.ComponentPropsWithoutRef<typeof FieldTemplate>["styles"];
}

/**
 * Slider component for selecting a single value from a range.
 */
export const Slider = forwardRef<HTMLDivElement, SliderProps>(
  (
    {
      value,
      defaultValue = 0,
      min = 0,
      max = 100,
      step = 1,
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
      styles: stylesProp,
      children,
      ...props
    },
    ref,
  ) => {
    const isControlled = value !== undefined;
    const [internalValue, setInternalValue] = useState(defaultValue);
    const currentValue = isControlled ? value! : internalValue;
    const trackContainerRef = useRef<HTMLDivElement>(null);
    const thumbRef = useRef<HTMLDivElement>(null);
    const trackFillRef = useRef<HTMLDivElement>(null);
    const hiddenInputRef = useRef<HTMLInputElement>(null);
    const isDragging = useRef(false);
    const dragValueRef = useRef(currentValue);
    const generatedId = useId();
    const id = customId || generatedId;
    const labelId = `wim-slider-label-${id}`;
    const errorId = `wim-slider-error-${id}`;

    const { calculateValue } = useSliderCommon(min, max, step);

    const toPct = useCallback(
      (val: number) => ((val - min) / (max - min)) * 100,
      [min, max],
    );

    const applyDomPosition = useCallback(
      (val: number) => {
        const pct = toPct(val);
        if (trackFillRef.current) trackFillRef.current.style.width = `${pct}%`;
        if (thumbRef.current) {
          thumbRef.current.style.left = `${pct}%`;
          thumbRef.current.setAttribute("aria-valuenow", String(val));
        }
        if (hiddenInputRef.current) hiddenInputRef.current.value = String(val);
      },
      [toPct],
    );

    useEffect(() => {
      if (!isDragging.current) {
        applyDomPosition(currentValue);
      }
    }, [currentValue, applyDomPosition]);

    const handleMouseDown = (e: React.MouseEvent | React.TouchEvent) => {
      if (disabled) return;
      isDragging.current = true;

      const clientX = "touches" in e ? e.touches[0].clientX : (e as React.MouseEvent).clientX;
      const newValue = calculateValue(clientX, trackContainerRef.current);
      dragValueRef.current = newValue;
      applyDomPosition(newValue);
      onChange?.(newValue);

      e.preventDefault();
    };

    const handleGlobalMouseMove = useCallback(
      (e: MouseEvent | TouchEvent) => {
        if (!isDragging.current || disabled) return;

        const clientX =
          "touches" in e ? e.touches[0].clientX : (e as MouseEvent).clientX;
        const newValue = calculateValue(clientX, trackContainerRef.current);
        dragValueRef.current = newValue;
        applyDomPosition(newValue);
        onChange?.(newValue);
      },
      [disabled, calculateValue, onChange, applyDomPosition],
    );

    const handleGlobalMouseUp = useCallback(() => {
      if (isDragging.current) {
        isDragging.current = false;
        const finalValue = dragValueRef.current;
        if (!isControlled) {
          setInternalValue(finalValue);
        }
        onAfterChange?.(finalValue);
      }
    }, [isControlled, onAfterChange]);

    useEffect(() => {
      document.addEventListener("mousemove", handleGlobalMouseMove);
      document.addEventListener("mouseup", handleGlobalMouseUp);
      document.addEventListener("touchmove", handleGlobalMouseMove, {
        passive: false,
      });
      document.addEventListener("touchend", handleGlobalMouseUp);

      return () => {
        document.removeEventListener("mousemove", handleGlobalMouseMove);
        document.removeEventListener("mouseup", handleGlobalMouseUp);
        document.removeEventListener("touchmove", handleGlobalMouseMove);
        document.removeEventListener("touchend", handleGlobalMouseUp);
      };
    }, [handleGlobalMouseMove, handleGlobalMouseUp]);

    const handleKeyDown = (e: React.KeyboardEvent) => {
      if (disabled) return;

      let newValue: number;
      if (e.key === "ArrowLeft" || e.key === "ArrowDown") {
        newValue = Math.max(min, currentValue - step);
      } else if (e.key === "ArrowRight" || e.key === "ArrowUp") {
        newValue = Math.min(max, currentValue + step);
      } else if (e.key === "Home") {
        newValue = min;
      } else if (e.key === "End") {
        newValue = max;
      } else {
        return;
      }

      if (!isControlled) {
        setInternalValue(newValue);
      }
      onChange?.(newValue);
      e.preventDefault();
    };

    const percentage = toPct(currentValue);
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
        styles={stylesProp}
      >
        <Component
          role="presentation"
          className={classNames("wim-slider", styles.root, disabled && styles.disabled, error && styles.danger)}
          onMouseDown={handleMouseDown}
          onTouchStart={handleMouseDown}
          ref={ref}
          {...props}
        >
          <Slottable>
            <div className={styles.trackContainer} ref={trackContainerRef}>
              <div
                ref={trackFillRef}
                className={styles.track}
                style={{ width: `${percentage}%` }}
              />
              <div
                ref={thumbRef}
                className={styles.thumb}
                style={{ left: `${percentage}%` }}
                role="slider"
                aria-valuemin={min}
                aria-valuemax={max}
                aria-valuenow={currentValue}
                aria-disabled={disabled}
                aria-labelledby={label ? labelId : ariaLabelledBy}
                aria-label={label ? undefined : ariaLabel}
                aria-describedby={error ? errorId : undefined}
                aria-invalid={error ? true : undefined}
                tabIndex={disabled ? -1 : 0}
                onKeyDown={handleKeyDown}
              />
            </div>
            <input
              ref={hiddenInputRef}
              type="hidden"
              name={name}
              value={currentValue}
            />
          </Slottable>
          {asChild ? children : null}
        </Component>
      </FieldTemplate>
    );
  },
);

Slider.displayName = "Slider";

export default Slider;
