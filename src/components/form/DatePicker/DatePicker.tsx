import React, { useState, useRef, useEffect, useId } from "react";
import { useTranslation } from "react-i18next";
import classNames from "classnames";
import { Calendar } from "../../data-display/Calendar/Calendar";
import { InputBase } from "../../_internal/InputBase";
import "../../form/Input/input.scss";
import "./datePicker.scss";

import { FieldTemplate } from "../../_internal/FieldTemplate";
import { FieldStatus } from "../../../types/tokens";

type DatePickerProps = Omit<
  React.ComponentPropsWithoutRef<"input">,
  "value" | "defaultValue" | "onChange"
> & {
  status?: FieldStatus;
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
  label?: string;
  error?: string;
  required?: boolean;
  layout?: "vertical" | "horizontal";
};

/**
 * ユーザーが日付を選択するためのコンポーネント。
 */
export const DatePicker = ({
  status = "default",
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
  ...props
}: DatePickerProps) => {
  const { t } = useTranslation("common");

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

  const actualPlaceholder = placeholder ?? t("datepicker.placeholder");
  const effectiveStatus = disabled ? "disabled" : (error ? "error" : status);

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

  const handleClear = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    if (!disabled) {
      if (!isControlled) {
        setInternalValue(null);
      }
      onChange?.(null);
    }
  };

  const handleInputClick = () => {
    if (!disabled) {
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
          "wim-datepicker-wrapper",
          fullWidth && "wim-input--full-width",
        )}
      >
        <InputBase
          status={error ? "error" : status}
          variant={variant}
          fullWidth={fullWidth}
          disabled={disabled}
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
              "wim-input",
              "wim-datepicker-input",
              fullWidth && "wim-input--full-width",
            )}
            value={formatDate(currentValue || null)}
            placeholder={actualPlaceholder}
            disabled={disabled}
            onClick={handleInputClick}
            onKeyDown={handleKeyDown}
            aria-haspopup="dialog"
            aria-expanded={isOpen}
            aria-controls={isOpen ? dropdownId : undefined}
            aria-invalid={effectiveStatus === "error"}
            aria-describedby={errorId}
            aria-labelledby={labelId}
            {...props}
          />
        </InputBase>
        {isOpen && !disabled && (
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
    </FieldTemplate>
  );
};
