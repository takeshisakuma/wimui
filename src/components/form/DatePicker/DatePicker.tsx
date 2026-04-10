import React, { useState, useRef, useEffect, useId } from "react";
import classNames from "classnames";
import { Calendar } from "../../data-display/Calendar/Calendar";
import { InputBase } from "../InputBase";
import { Transition } from "../../layout/Transition/Transition";
import { FocusTrap } from "../../overlay/FocusTrap/FocusTrap";
import { FieldTemplate } from "../FieldTemplate";
import { FieldIntent, FieldVariant, FieldWidth } from "../../../types/tokens";
import styles from "./date-picker.module.scss";
import inputStyles from "../../form/Input/input.module.scss";

export type DatePickerLabels = {
  placeholder?: string;
};

type DatePickerProps = Omit<
  React.ComponentPropsWithoutRef<"input">,
  "value" | "defaultValue" | "onChange"
> & {
  intent?: FieldIntent;
  variant?: FieldVariant;
  fullWidth?: boolean;
  /** Selected date value */
  value?: Date;
  /** Default date value (uncontrolled) */
  defaultValue?: Date;
  /** Callback when date changes */
  onChange?: (date: Date | null) => void;
  /** Date format for display (default: 'YYYY-MM-DD') */
  format?: string;
  /** Show clear button */
  clearable?: boolean;
  /** Placeholder text */
  placeholder?: string;
  /** Minimum selectable date */
  minDate?: Date;
  /** Maximum selectable date */
  maxDate?: Date;
  /** Disabled dates */
  disabledDates?: Date[];
  label?: string;
  error?: string;
  required?: boolean;
  layout?: "vertical" | "horizontal";
  /** 手動翻訳用のラベル */
  labels?: DatePickerLabels;
  width?: FieldWidth | string | number;
};

const DEFAULT_LABELS: Required<DatePickerLabels> = {
  placeholder: "Select date",
};

/**
 * ユーザーが日付を選択するためのコンポーネント。
 */
export const DatePicker = ({
  intent = "default",
  variant = "outline",
  fullWidth = false,
  className,
  disabled,
  value,
  defaultValue,
  onChange,
  format = "YYYY-MM-DD",
  clearable = true,
  placeholder,
  minDate: _minDate,
  maxDate: _maxDate,
  disabledDates: _disabledDates,
  label,
  error,
  required,
  layout,
  id: customId,
  labels,
  width,
  ...props
}: DatePickerProps) => {
  const mergedLabels = { ...DEFAULT_LABELS, ...labels };

  const [isOpen, setIsOpen] = useState(false);
  const [internalValue, setInternalValue] = useState<Date | null>(
    defaultValue || null,
  );
  const containerRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const generatedId = useId();
  const id = customId || `wim-datepicker-${generatedId}`;
  const dropdownId = `${id}-dropdown`;
  const labelId = label ? `${id}-label` : undefined;
  const errorId = error ? `${id}-error` : undefined;

  const isControlled = value !== undefined;
  const currentValue = isControlled ? value : internalValue;

  const actualPlaceholder = placeholder ?? mergedLabels.placeholder;
  const isDisabled = disabled;
  const currentIntent = error ? "error" : intent;

  // Close calendar when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Handle Escape key globally when open
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        setIsOpen(false);
        inputRef.current?.focus();
      }
    };

    if (isOpen) {
      document.addEventListener("keydown", handleKeyDown);
    }
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [isOpen]);

  const formatDate = (date: Date | null): string => {
    if (!date) return "";

    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");

    return format
      .replace("YYYY", String(year))
      .replace("MM", month)
      .replace("DD", day);
  };

  const handleDateChange = (date: Date) => {
    if (!isControlled) {
      setInternalValue(date);
    }
    onChange?.(date);
    setIsOpen(false);
    inputRef.current?.focus();
  };

  const handleClear = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    if (!isDisabled) {
      if (!isControlled) {
        setInternalValue(null);
      }
      onChange?.(null);
    }
  };

  const handleInputClick = () => {
    if (!isDisabled) {
      setIsOpen(!isOpen);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (isDisabled) return;

    if (e.key === "Escape") {
      setIsOpen(false);
      inputRef.current?.focus();
    } else if (
      e.key === "Enter" ||
      e.key === " " ||
      (e.key === "ArrowDown" && (e.altKey || !isOpen))
    ) {
      e.preventDefault();
      setIsOpen(!isOpen);
    }
  };

  // Focus management when opening
  useEffect(() => {
    if (isOpen) {
      const timer = setTimeout(() => {
        const focusedDay = containerRef.current?.querySelector<HTMLButtonElement>(
          '[data-calendar-day][data-selected]:not(:disabled), [data-calendar-day]:focus',
        );
        if (focusedDay) {
          focusedDay.focus();
        } else {
          containerRef.current?.querySelector<HTMLButtonElement>(
            '[data-calendar-day]:not([data-other-month]):not(:disabled)',
          )?.focus();
        }
      }, 50);
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

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
        ref={containerRef}
        className={classNames(
          styles.root,
          fullWidth && styles.fullWidth,
        )}
      >
        <InputBase
          intent={currentIntent}
          variant={variant}
          width={width}
          fullWidth={fullWidth}
          disabled={isDisabled}
          allowClear={clearable}
          hasValue={!!currentValue}
          onClear={handleClear}
          rightIcons={[{ name: "ChevronDownIcon", rotated: isOpen, onClick: handleInputClick }]}
        >
          <input
            id={id}
            ref={inputRef}
            type="text"
            readOnly
            role="combobox"
            className={classNames(
              inputStyles.input,
              styles.input,
              fullWidth && inputStyles.fullWidth,
            )}
            value={formatDate(currentValue || null)}
            placeholder={actualPlaceholder}
            disabled={isDisabled}
            onClick={handleInputClick}
            onKeyDown={handleKeyDown}
            aria-haspopup="dialog"
            aria-expanded={isOpen}
            aria-controls={isOpen ? dropdownId : undefined}
            aria-invalid={currentIntent === "error"}
            aria-describedby={errorId}
            aria-labelledby={labelId}
            aria-required={required}
            {...props}
          />
        </InputBase>
        <Transition
          show={isOpen && !disabled}
          preset="fade"
          id={dropdownId}
          className={styles.dropdown}
        >
          <FocusTrap active={isOpen} initialFocus={false}>
            <div role="dialog" aria-modal="true" aria-labelledby={labelId}>
              <Calendar
                value={currentValue || undefined}
                onChange={handleDateChange}
              />
            </div>
          </FocusTrap>
        </Transition>
      </div>
    </FieldTemplate>
  );
};
