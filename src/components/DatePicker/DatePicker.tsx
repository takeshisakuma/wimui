import React, { useState, useRef, useEffect, useId } from "react";
import classNames from "classnames";
import { Calendar } from "../Calendar/Calendar";
import { Icon } from "../Icon/Icon";
import "../Input/input.scss";
import "./datePicker.scss";

type DatePickerProps = Omit<
  React.ComponentPropsWithoutRef<"input">,
  "value" | "defaultValue" | "onChange"
> & {
  state?: "default" | "error" | "disabled";
  variant?: "outline" | "ghost";
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
};

/**
 * ユーザーが日付を選択するためのコンポーネント。
 */
export const DatePicker = ({
  state = "default",
  variant = "outline",
  fullWidth = false,
  className,
  disabled,
  value,
  defaultValue,
  onChange,
  format = "YYYY-MM-DD",
  clearable = true,
  placeholder = "Select date",
  minDate,
  maxDate,
  disabledDates,
  ...props
}: DatePickerProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [internalValue, setInternalValue] = useState<Date | null>(
    defaultValue || null,
  );
  const containerRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const dropdownId = useId();

  const isControlled = value !== undefined;
  const currentValue = isControlled ? value : internalValue;

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

  const handleClear = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!isControlled) {
      setInternalValue(null);
    }
    onChange?.(null);
  };

  const handleInputClick = () => {
    if (!disabled && state !== "disabled") {
      setIsOpen(!isOpen);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Escape") {
      setIsOpen(false);
    } else if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      setIsOpen(!isOpen);
    }
  };

  return (
    <div
      ref={containerRef}
      className={classNames(
        "wim-datepicker-wrapper",
        fullWidth && "wim-input--full-width",
        className,
      )}
    >
      <div
        className={classNames(
          "wim-input-container",
          "wim-datepicker-container",
          fullWidth && "wim-input--full-width",
        )}
      >
        <input
          ref={inputRef}
          type="text"
          readOnly
          className={classNames(
            "wim-input",
            "wim-datepicker-input",
            `wim-input--${disabled ? "disabled" : state}`,
            `wim-input--${variant}`,
            fullWidth && "wim-input--full-width",
          )}
          value={formatDate(currentValue || null)}
          placeholder={placeholder}
          disabled={disabled || state === "disabled"}
          onClick={handleInputClick}
          onKeyDown={handleKeyDown}
          aria-haspopup="dialog"
          aria-expanded={isOpen}
          aria-controls={isOpen ? dropdownId : undefined}
          {...props}
        />
        <div className="wim-datepicker-icons">
          {clearable && currentValue && !disabled && state !== "disabled" && (
            <button
              type="button"
              className="wim-datepicker-clear"
              onClick={handleClear}
              aria-label="Clear date"
            >
              <Icon name="CloseIcon" size="small" />
            </button>
          )}
          <button
            type="button"
            className="wim-datepicker-calendar-icon"
            onClick={handleInputClick}
            disabled={disabled || state === "disabled"}
            aria-label="Open calendar"
            aria-expanded={isOpen}
            aria-controls={isOpen ? dropdownId : undefined}
          >
            <Icon name="ChevronDownIcon" size="small" />
          </button>
        </div>
      </div>
      {isOpen && !disabled && state !== "disabled" && (
        <div
          id={dropdownId}
          className="wim-datepicker-dropdown"
          role="dialog"
          aria-modal="false"
        >
          <Calendar
            value={currentValue || undefined}
            onChange={handleDateChange}
          />
        </div>
      )}
    </div>
  );
};
