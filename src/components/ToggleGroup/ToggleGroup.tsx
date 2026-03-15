import React, { useState, useRef, useEffect } from "react";
import classNames from "classnames";
import { Icon } from "../Icon/Icon";
import { useIndicator } from "../_internal/useIndicator";
import "./toggle-group.scss";

export type Option = {
  label?: string;
  value: string;
  iconName?: React.ComponentProps<typeof Icon>["name"]; // Name from Icon component
  disabled?: boolean;
};

type ToggleGroupProps = {
  options: Option[];
  value?: string | string[];
  defaultValue?: string | string[];
  onChange?: (value: string | string[]) => void;
  selectionMode?: "single" | "multiple";
  size?: "small" | "medium" | "large";
  fullWidth?: boolean;
  className?: string;
  /**
   * アクセシビリティ用のラベル（role="radiogroup" / "toolbar" の accessible name）
   */
  "aria-label"?: string;
  /**
   * アクセシビリティ用のラベルID（aria-label の代替）
   */
  "aria-labelledby"?: string;
};

/**
 * ToggleGroup component allows users to select one or multiple options from a set of buttons.
 */
export const ToggleGroup = ({
  options,
  value,
  defaultValue,
  onChange,
  selectionMode = "single",
  size = "medium",
  fullWidth = false,
  className,
  "aria-label": ariaLabel,
  "aria-labelledby": ariaLabelledBy,
}: ToggleGroupProps) => {
  const isControlled = value !== undefined;
  const [internalValue, setInternalValue] = useState<string | string[]>(
    defaultValue ?? (selectionMode === "multiple" ? [] : ""),
  );

  const currentValue = isControlled ? value : internalValue;

  const { containerRef, sliderStyle, isReady } = useIndicator({
    activeSelector: ".wim-toggle-group__item--active",
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
      // eslint-disable-next-line react-hooks/set-state-in-effect
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

  return (
    <div
      ref={containerRef}
      className={classNames(
        "wim-toggle-group",
        `wim-toggle-group--${size === "small" ? "sm" : size === "large" ? "lg" : "md"}`,
        `wim-toggle-group--${selectionMode}`,
        fullWidth && "wim-toggle-group--full-width",
        isReady && "wim-toggle-group--ready",
        className,
      )}
      role={containerRole}
      aria-label={ariaLabel}
      aria-labelledby={ariaLabelledBy}
      aria-orientation="horizontal"
    >
      <div className="wim-toggle-group__slider" style={sliderStyle} aria-hidden="true" />
      {options.map((option, index) => (
        <button
          key={option.value}
          ref={(el) => {
            buttonRefs.current[index] = el;
          }}
          type="button"
          className={classNames(
            "wim-toggle-group__item",
            isSelected(option.value) && "wim-toggle-group__item--active",
            !option.label &&
              option.iconName &&
              "wim-toggle-group__item--icon-only",
          )}
          onClick={() => {
            setFocusedIndex(index);
            handleToggle(option.value);
          }}
          onKeyDown={(e) => handleKeyDown(index, e)}
          disabled={option.disabled}
          // single: role="radio" + aria-checked / multiple: role="button" + aria-pressed
          role={selectionMode === "single" ? "radio" : "button"}
          aria-checked={selectionMode === "single" ? isSelected(option.value) : undefined}
          aria-pressed={selectionMode === "multiple" ? isSelected(option.value) : undefined}
          aria-label={option.label || option.value}
          tabIndex={!option.disabled && index === focusedIndex ? 0 : -1}
        >
          {option.iconName && <Icon name={option.iconName} size={size} />}
          {option.label && (
            <span className="wim-toggle-group__label">{option.label}</span>
          )}
        </button>
      ))}
    </div>
  );
};
