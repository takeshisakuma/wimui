import React, { useState, useRef, useEffect, forwardRef } from "react";
import classNames from "classnames";
import { Icon } from "../../media/Icon/Icon";
import { useIndicator } from "../../_internal/useIndicator";
import { useMergedRef } from "../../../hooks/useMergedRef";
import { FieldTemplate } from "../FieldTemplate/FieldTemplate";
import { ComponentSizeBasic } from "../../../types/tokens";
import styles from "./toggle-group.module.scss";

export type Option = {
  label?: string;
  value: string;
  iconName?: React.ComponentProps<typeof Icon>["name"]; // Name from Icon component
  disabled?: boolean;
};

type ToggleGroupProps = {
  /** List of toggle options */
  options: Option[];
  /** Selected value(s) (controlled) */
  value?: string | string[];
  /** Initially selected value(s) (uncontrolled) */
  defaultValue?: string | string[];
  /** Callback when the selection changes */
  onChange?: (value: string | string[]) => void;
  /** Whether one or multiple options can be selected */
  selectionMode?: "single" | "multiple";
  /** Size of the toggle buttons */
  size?: ComponentSizeBasic;
  /** Whether to take full width of parent */
  fullWidth?: boolean;
  /** Additional class names */
  className?: string;
  /** Whether the group is disabled */
  disabled?: boolean;
  /** Group label */
  label?: string;
  /** Error message */
  error?: string;
  /** Whether to show the required indicator */
  required?: boolean;
  /** Layout direction of label and field */
  layout?: "vertical" | "horizontal";
  /** Unique ID for the component */
  id?: string;
  /** Accessible label when no visible label is provided */
  "aria-label"?: string;
  /** ID of the element that labels the group */
  "aria-labelledby"?: string;
};

/**
 * ToggleGroup component allows users to select one or multiple options from a set of buttons.
 */
export const ToggleGroup = forwardRef<HTMLDivElement, ToggleGroupProps>(({
  options,
  value,
  defaultValue,
  onChange,
  selectionMode = "single",
  size = "md",
  fullWidth = false,
  className,
  "aria-label": ariaLabel,
  "aria-labelledby": ariaLabelledBy,
  disabled = false,
  label,
  error,
  required,
  layout = "vertical",
  id: customId,
}, ref) => {
  const generatedId = React.useId();
  const id = customId || `wim-toggle-group-${generatedId}`;
  const labelId = `${id}-label`;
  const errorId = `${id}-error`;
  const isControlled = value !== undefined;
  const [internalValue, setInternalValue] = useState<string | string[]>(
    defaultValue ?? (selectionMode === "multiple" ? [] : ""),
  );

  const currentValue = isControlled ? value : internalValue;

  const { containerRef, sliderStyle, isReady } = useIndicator({
    activeSelector: `.${styles.active}`,
    dependence: options.length,
  });

  const buttonRefs = useRef<(HTMLButtonElement | null)[]>([]);

  const firstNonDisabledIndex = options.findIndex((o) => !o.disabled);

  const getInitialFocusIndex = () => {
    if (selectionMode === "single") {
      const initVal = isControlled ? value : defaultValue;
      if (typeof initVal === "string") {
        const idx = options.findIndex((o) => !o.disabled && o.value === initVal);
        if (idx >= 0) return idx;
      }
    }
    return firstNonDisabledIndex >= 0 ? firstNonDisabledIndex : 0;
  };

  const [focusedIndex, setFocusedIndex] = useState(getInitialFocusIndex);

  // single モードで controlled value が変わったときに focusedIndex を同期する
  useEffect(() => {
    if (selectionMode === "single" && isControlled && typeof value === "string") {
      const idx = options.findIndex((o) => !o.disabled && o.value === value);
      if (idx >= 0) setFocusedIndex(idx);
    }
  }, [value, selectionMode, isControlled, options]);

  const handleToggle = (optionValue: string) => {
    let newValue: string | string[];

    if (selectionMode === "multiple") {
      const currentArray = Array.isArray(currentValue) ? currentValue : [];
      if (currentArray.includes(optionValue)) {
        newValue = currentArray.filter((v) => v !== optionValue);
      } else {
        newValue = [...currentArray, optionValue];
      }
    } else {
      newValue = currentValue === optionValue ? "" : optionValue;
    }

    if (!isControlled) {
      setInternalValue(newValue);
    }

    onChange?.(newValue);
  };

  const isSelected = (optionValue: string) => {
    if (selectionMode === "multiple") {
      return (Array.isArray(currentValue) ? currentValue : []).includes(
        optionValue,
      );
    }
    return currentValue === optionValue;
  };

  const findNextIndex = (current: number, direction: 1 | -1): number => {
    for (let i = 1; i <= options.length; i++) {
      const next = (current + direction * i + options.length) % options.length;
      if (!options[next].disabled) return next;
    }
    return current;
  };

  const handleKeyDown = (currentIndex: number, e: React.KeyboardEvent) => {
    let newIndex: number | null = null;

    if (e.key === "ArrowRight" || e.key === "ArrowDown") {
      e.preventDefault();
      newIndex = findNextIndex(currentIndex, 1);
    } else if (e.key === "ArrowLeft" || e.key === "ArrowUp") {
      e.preventDefault();
      newIndex = findNextIndex(currentIndex, -1);
    } else if (e.key === "Home") {
      e.preventDefault();
      newIndex = firstNonDisabledIndex >= 0 ? firstNonDisabledIndex : null;
    } else if (e.key === "End") {
      e.preventDefault();
      for (let i = options.length - 1; i >= 0; i--) {
        if (!options[i].disabled) {
          newIndex = i;
          break;
        }
      }
    }

    if (newIndex !== null && newIndex !== currentIndex) {
      setFocusedIndex(newIndex);
      buttonRefs.current[newIndex]?.focus();
      if (selectionMode === "single") {
        handleToggle(options[newIndex].value);
      }
    }
  };

  // single: radiogroup / multiple: toolbar
  const containerRole = selectionMode === "single" ? "radiogroup" : "toolbar";
  const firstItemId = `${id}-item-0`;

  return (
    <FieldTemplate
      label={label}
      error={error}
      required={required}
      layout={layout}
      labelId={labelId}
      htmlFor={firstItemId}
      errorId={errorId}
      className={className}
    >
      <div
        ref={useMergedRef(containerRef, ref)}
        id={id}
        className={classNames("wim-toggle-group", 
          styles.root,
          styles[size],
          styles[selectionMode],
          fullWidth && styles.fullWidth,
          isReady && styles.ready,
          error && styles.danger,
        )}
        role={containerRole}
        aria-label={ariaLabel}
        aria-labelledby={label ? labelId : ariaLabelledBy}
        aria-orientation="horizontal"
        aria-invalid={error ? true : undefined}
        aria-describedby={error ? errorId : undefined}
      >
      <div
        className={classNames(
          styles.slider,
          styles[selectionMode],
          isReady && styles.ready,
        )}
        style={sliderStyle}
        aria-hidden="true"
      />
      {options.map((option, index) => {
        const itemId = `${id}-item-${index}`;
        return (
          <button
            key={option.value}
            id={itemId}
            ref={(el) => {
              buttonRefs.current[index] = el;
            }}
          type="button"
          className={classNames(
            styles.item,
            styles[selectionMode],
            isSelected(option.value) && styles.active,
            !option.label &&
              option.iconName &&
              styles.iconOnly,
          )}
          onClick={() => {
            setFocusedIndex(index);
            handleToggle(option.value);
          }}
          onKeyDown={(e) => handleKeyDown(index, e)}
          disabled={disabled || option.disabled}
          // single: role="radio" + aria-checked / multiple: role="button" + aria-pressed
          role={selectionMode === "single" ? "radio" : "button"}
          aria-checked={selectionMode === "single" ? isSelected(option.value) : undefined}
          aria-pressed={selectionMode === "multiple" ? isSelected(option.value) : undefined}
          aria-label={option.label || option.value}
          tabIndex={!option.disabled && index === focusedIndex ? 0 : -1}
        >
          {option.iconName && <Icon name={option.iconName} size={size} className={styles.icon} />}
          {option.label && (
            <span className={styles.label}>{option.label}</span>
          )}
        </button>
      )})}
      </div>
    </FieldTemplate>
  );
});

ToggleGroup.displayName = "ToggleGroup";
