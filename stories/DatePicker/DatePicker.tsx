import React, { useState, useRef, useEffect } from "react";
import PropTypes from "prop-types";
import { Calendar } from "../Calendar/Calendar";
import { Icon } from "../Icon/Icon";
import "../Input/input.scss";
import "./datePicker.scss";

type DatePickerProps = React.ComponentPropsWithoutRef<"input"> & {
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
    className = "",
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
    const [internalValue, setInternalValue] = useState<Date | null>(defaultValue || null);
    const containerRef = useRef<HTMLDivElement>(null);
    const inputRef = useRef<HTMLInputElement>(null);

    const isControlled = value !== undefined;
    const currentValue = isControlled ? value : internalValue;

    // Close calendar when clicking outside
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
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

    const effectiveState = disabled ? "disabled" : state;
    const stateClass = `wim-input--${effectiveState}`;
    const variantClass = `wim-input--${variant}`;
    const widthClass = fullWidth ? "wim-input--full-width" : "";

    return (
        <div
            ref={containerRef}
            className={[
                "wim-datepicker-wrapper",
                widthClass,
                className,
            ]
                .filter(Boolean)
                .join(" ")}
        >
            <div
                className={[
                    "wim-input-container",
                    "wim-datepicker-container",
                    widthClass,
                ].filter(Boolean).join(" ")}
            >
                <input
                    ref={inputRef}
                    type="text"
                    readOnly
                    className={[
                        "wim-input",
                        "wim-datepicker-input",
                        stateClass,
                        variantClass,
                        widthClass,
                    ]
                        .filter(Boolean)
                        .join(" ")}
                    value={formatDate(currentValue || null)}
                    placeholder={placeholder}
                    disabled={disabled || state === "disabled"}
                    onClick={handleInputClick}
                    onKeyDown={handleKeyDown}
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
                    >
                        <Icon name="ChevronDownIcon" size="small" />
                    </button>
                </div>
            </div>
            {isOpen && !disabled && state !== "disabled" && (
                <div className="wim-datepicker-dropdown">
                    <Calendar
                        value={currentValue || undefined}
                        onChange={handleDateChange}
                    />
                </div>
            )}
        </div>
    );
};

DatePicker.propTypes = {
    /**
     * フィールドの状態。
     */
    state: PropTypes.oneOf(["default", "error", "disabled"]),
    /**
     * デザインバリエーション。
     */
    variant: PropTypes.oneOf(["outline", "ghost"]),
    /**
     * 横幅を100%にするかどうか。
     */
    fullWidth: PropTypes.bool,
    /**
     * 選択された日付の値。
     */
    value: PropTypes.instanceOf(Date),
    /**
     * デフォルトの日付値（非制御）。
     */
    defaultValue: PropTypes.instanceOf(Date),
    /**
     * 日付が変更された時のコールバック。
     */
    onChange: PropTypes.func,
    /**
     * 表示フォーマット。
     */
    format: PropTypes.string,
    /**
     * クリアボタンを表示するか。
     */
    clearable: PropTypes.bool,
    /**
     * プレースホルダーテキスト。
     */
    placeholder: PropTypes.string,
    /**
     * 追加のクラス名。
     */
    className: PropTypes.string,
};
