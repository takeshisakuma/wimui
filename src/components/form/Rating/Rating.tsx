import React, { useState, useId, useRef } from "react";
import classNames from "classnames";
import { Icon } from "../../media/Icon/Icon";
import { FieldTemplate } from "../FieldTemplate";
import { ComponentSizeBasic } from "../../../types/tokens";
import styles from "./rating.module.scss";
import { StarIcon } from "@/icon";

export type RatingLabels = {
  star?: (count: number) => string;
  readonly?: (value: number, max: number) => string;
};

type RatingProps = {
  /** Current value (controlled) */
  value?: number;
  /** Default value (uncontrolled) */
  defaultValue?: number;
  /** Total number of stars */
  count?: number;
  /** Whether to allow half stars */
  allowHalf?: boolean;
  /** Whether the rating is disabled */
  disabled?: boolean;
  /** Read-only flag (display only; unlike disabled it is not grayed out) */
  readOnly?: boolean;
  /** Size of the stars */
  size?: ComponentSizeBasic;
  /** Callback when the value changes */
  onChange?: (value: number) => void;
  /** Additional class names */
  className?: string;
  /** Accessible label */
  label?: React.ReactNode;
  /** Error message */
  error?: string;
  /** Whether to show the required indicator */
  required?: boolean;
  /** Layout direction of label and field */
  layout?: "vertical" | "horizontal";
  /** Labels for internationalization */
  labels?: RatingLabels;
};

/**
 * Rating component for users to give a score.
 */
export const Rating = ({
  value,
  defaultValue = 0,
  count = 5,
  allowHalf = false,
  disabled = false,
  readOnly = false,
  size = "md",
  onChange,
  className,
  label,
  error,
  required,
  layout = "vertical",
  labels = {},
  ...props
}: RatingProps) => {
  const {
    star = (c: number) => `${c} star${c !== 1 ? "s" : ""}`,
    readonly = (v: number, m: number) => `Rating: ${v} out of ${m}`,
  } = labels;

  const isControlled = value !== undefined;
  const [internalValue, setInternalValue] = useState(defaultValue);
  const [hoverValue, setHoverValue] = useState<number | null>(null);
  const generatedId = useId();
  const labelId = `wim-rating-label-${generatedId}`;
  const errorId = `wim-rating-error-${generatedId}`;
  const starRefs = useRef<(HTMLDivElement | null)[]>([]);

  const currentValue = isControlled ? value! : internalValue;
  const displayValue = hoverValue !== null ? hoverValue : currentValue;

  const handleMouseMove = (
    index: number,
    e: React.MouseEvent<HTMLDivElement>,
  ) => {
    if (disabled || readOnly) return;

    let val = index + 1;
    if (allowHalf) {
      const rect = e.currentTarget.getBoundingClientRect();
      const x = e.clientX - rect.left;
      if (x <= rect.width / 2) {
        val -= 0.5;
      }
    }
    setHoverValue(val);
  };

  const handleMouseLeave = () => {
    if (disabled || readOnly) return;
    setHoverValue(null);
  };

  const handleClick = (val: number) => {
    if (disabled || readOnly) return;

    if (!isControlled) {
      setInternalValue(val);
    }
    onChange?.(val);
  };

  // roving tabindex: チェック済みのstarがtabIndex=0、未選択時は先頭star
  const getActiveIndex = () => {
    if (currentValue === 0) return 0;
    for (let i = 0; i < count; i++) {
      const starValue = i + 1;
      const isChecked =
        currentValue === starValue ||
        (allowHalf && currentValue === starValue - 0.5);
      if (isChecked) return i;
    }
    return 0;
  };

  const activeIndex = getActiveIndex();

  const handleKeyDown = (index: number, e: React.KeyboardEvent) => {
    if (disabled || readOnly) return;

    const step = allowHalf ? 0.5 : 1;

    if (e.key === "ArrowRight" || e.key === "ArrowUp") {
      e.preventDefault();
      const nextValue = Math.min(count, currentValue + step);
      const nextIndex = Math.min(Math.ceil(nextValue) - 1, count - 1);
      handleClick(nextValue);
      starRefs.current[nextIndex]?.focus();
    } else if (e.key === "ArrowLeft" || e.key === "ArrowDown") {
      e.preventDefault();
      const nextValue = Math.max(0, currentValue - step);
      const nextIndex = nextValue === 0 ? 0 : Math.ceil(nextValue) - 1;
      handleClick(nextValue);
      starRefs.current[nextIndex]?.focus();
    } else if (e.key === "Home") {
      e.preventDefault();
      handleClick(0);
      starRefs.current[0]?.focus();
    } else if (e.key === "End") {
      e.preventDefault();
      handleClick(count);
      starRefs.current[count - 1]?.focus();
    }
  };

  const renderStar = (index: number) => {
    const starValue = index + 1;
    const isFull = displayValue >= starValue;
    const isHalf = !isFull && displayValue >= starValue - 0.5;
    const isChecked =
      currentValue === starValue ||
      (allowHalf && currentValue === starValue - 0.5);

    return (
      <div
        key={index}
        ref={(el) => {
          starRefs.current[index] = el;
        }}
        className={classNames(
          styles.star,
          isFull && styles.full,
          isHalf && styles.half,
        )}
        onMouseMove={(e) => handleMouseMove(index, e)}
        onClick={(e) => {
          const rect = e.currentTarget.getBoundingClientRect();
          const x = e.clientX - rect.left;
          let val = starValue;
          if (allowHalf && x <= rect.width / 2) {
            val -= 0.5;
          }
          handleClick(val);
        }}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            handleClick(starValue);
          } else {
            handleKeyDown(index, e);
          }
        }}
        role={readOnly ? "presentation" : "radio"}
        tabIndex={disabled || readOnly ? -1 : index === activeIndex ? 0 : -1}
        aria-checked={readOnly ? undefined : isChecked}
        aria-label={readOnly ? undefined : star(index + 1)}
      >
        <div className={styles.background}>
          <Icon component={StarIcon} size={size} className={styles.icon} />
        </div>
        <div className={styles.foreground}>
          <Icon component={StarIcon} size={size} className={styles.icon} />
        </div>
      </div>
    );
  };

  const stars = Array.from({ length: count }, (_, i) => renderStar(i));

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
      <div
        className={classNames("wim-rating", 
          styles.root,
          styles[size],
          disabled && styles.disabled,
        )}
        onMouseLeave={readOnly ? undefined : handleMouseLeave}
        role={readOnly ? "img" : "radiogroup"}
        aria-label={
          readOnly
            ? readonly(currentValue, count)
            : undefined
        }
        aria-labelledby={!readOnly && label ? labelId : undefined}
        aria-disabled={!readOnly && disabled ? true : undefined}
        aria-required={!readOnly ? required : undefined}
        aria-describedby={!readOnly && error ? errorId : undefined}
        aria-invalid={!readOnly && error ? true : undefined}
        {...props}
      >
        {stars}
      </div>
    </FieldTemplate>
  );
};
