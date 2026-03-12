import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import classNames from "classnames";
import { Icon } from "../Icon/Icon";
import { useCalendar, isSameDay, isToday } from "./useCalendar";
import "./calendar.scss";

export type CalendarProps = {
  /**
   * 現在選択されている日付。
   */
  value?: Date;
  /**
   * 日付が変更された時のコールバック。
   */
  onChange?: (date: Date) => void;
  /**
   * 初期値。
   */
  defaultValue?: Date;
  /**
   * 追加のクラス名。
   */
  className?: string;
  /**
   * 無効化。
   */
  disabled?: boolean;
  /**
   * 範囲選択モード。
   */
  rangeMode?: boolean;
  /**
   * 選択された範囲（範囲選択モード時）。
   */
  range?: { start: Date | null; end: Date | null };
  /**
   * 初期選択範囲（範囲選択モード時）。
   */
  defaultRange?: { start: Date | null; end: Date | null };
  /**
   * 範囲が変更された時のコールバック（範囲選択モード時）。
   */
  onRangeChange?: (range: { start: Date | null; end: Date | null }) => void;
  /**
   * 選択可能な最小日付。
   */
  minDate?: Date;
  /**
   * 選択可能な最大日付。
   */
  maxDate?: Date;
  /**
   * 無効化する日付の配列。
   */
  disabledDates?: Date[];
  /**
   * 特定の日付を無効化する関数。
   */
  isDateDisabled?: (date: Date) => boolean;
};

/**
 * ユーザーが日付を閲覧し、選択するためのカレンダーコンポーネント。
 */
export const Calendar = ({
  value,
  onChange,
  defaultValue,
  className,
  disabled = false,
  rangeMode = false,
  range,
  defaultRange,
  onRangeChange,
  minDate,
  maxDate,
  disabledDates,
  isDateDisabled: isDateDisabledProp,
  ...props
}: CalendarProps) => {
  const { t } = useTranslation();

  const {
    year,
    month,
    handlePrevMonth,
    handleNextMonth,
    isDateDisabled,
    daysGrid,
  } = useCalendar({
    defaultValue: defaultValue || value,
    minDate,
    maxDate,
    disabledDates,
    isDateDisabled: isDateDisabledProp,
  });

  const [selectedDate, setSelectedDate] = useState(defaultValue || value);
  const [internalRangeStart, setInternalRangeStart] = useState<Date | null>(
    range?.start || defaultRange?.start || null,
  );
  const [internalRangeEnd, setInternalRangeEnd] = useState<Date | null>(
    range?.end || defaultRange?.end || null,
  );
  const [focusedDate, setFocusedDate] = useState<Date>(
    defaultValue || value || new Date()
  );

  const isControlled = value !== undefined;
  const currentSelected = isControlled ? value : selectedDate;

  // Range values (controlled or uncontrolled)
  const rangeStart = range?.start !== undefined ? range.start : internalRangeStart;
  const rangeEnd = range?.end !== undefined ? range.end : internalRangeEnd;

  const handleDateClick = (date: Date) => {
    if (disabled || isDateDisabled(date)) return;
    setFocusedDate(date);

    if (rangeMode) {
      if (!rangeStart || (rangeStart && rangeEnd)) {
        // Start new range
        setInternalRangeStart(date);
        setInternalRangeEnd(null);
        onRangeChange?.({ start: date, end: null });
      } else {
        // Complete range
        if (date < rangeStart) {
          setInternalRangeStart(date);
          setInternalRangeEnd(rangeStart);
          onRangeChange?.({ start: date, end: rangeStart });
        } else {
          setInternalRangeEnd(date);
          onRangeChange?.({ start: rangeStart, end: date });
        }
      }
    } else {
      if (!isControlled) {
        setSelectedDate(date);
      }
      onChange?.(date);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (disabled) return;

    let nextDate = new Date(focusedDate);

    switch (e.key) {
      case "ArrowLeft":
        e.preventDefault();
        nextDate.setDate(focusedDate.getDate() - 1);
        break;
      case "ArrowRight":
        e.preventDefault();
        nextDate.setDate(focusedDate.getDate() + 1);
        break;
      case "ArrowUp":
        e.preventDefault();
        nextDate.setDate(focusedDate.getDate() - 7);
        break;
      case "ArrowDown":
        e.preventDefault();
        nextDate.setDate(focusedDate.getDate() + 7);
        break;
      case "PageUp":
        e.preventDefault();
        nextDate.setMonth(focusedDate.getMonth() - 1);
        break;
      case "PageDown":
        e.preventDefault();
        nextDate.setMonth(focusedDate.getMonth() + 1);
        break;
      case "Home":
        e.preventDefault();
        nextDate.setDate(focusedDate.getDate() - focusedDate.getDay());
        break;
      case "End":
        e.preventDefault();
        nextDate.setDate(focusedDate.getDate() + (6 - focusedDate.getDay()));
        break;
      case "Enter":
      case " ":
        e.preventDefault();
        handleDateClick(focusedDate);
        return;
      default:
        return;
    }

    setFocusedDate(nextDate);
    // Adjust month view if needed
    if (nextDate.getMonth() !== month || nextDate.getFullYear() !== year) {
      if (nextDate < new Date(year, month, 1)) {
        handlePrevMonth();
      } else {
        handleNextMonth();
      }
    }
  };

  const isSelected = (date: Date) => {
    if (rangeMode) {
      return isSameDay(date, rangeStart) || isSameDay(date, rangeEnd);
    }
    return currentSelected && isSameDay(date, currentSelected);
  };

  const isInRange = (date: Date): boolean => {
    if (!rangeMode || !rangeStart || !rangeEnd) return false;
    const start = rangeStart < rangeEnd ? rangeStart : rangeEnd;
    const end = rangeStart < rangeEnd ? rangeEnd : rangeStart;
    return date > start && date < end;
  };

  const weekDays = [
    t("sun"),
    t("mon"),
    t("tue"),
    t("wed"),
    t("thu"),
    t("fri"),
    t("sat"),
  ];

  return (
    <div
      className={classNames(
        "wim-calendar",
        disabled && "wim-calendar--disabled",
        className,
      )}
      {...props}
    >
      <div className="wim-calendar-header">
        <button
          type="button"
          className="wim-calendar-nav-btn"
          onClick={handlePrevMonth}
          disabled={disabled}
          aria-label={t("a11y_prev_month")}
        >
          <Icon name="ChevronLeftIcon" size="small" />
        </button>
        <div className="wim-calendar-title">
          {t("calendar_title", { year, month: month + 1 })}
        </div>
        <button
          type="button"
          className="wim-calendar-nav-btn"
          onClick={handleNextMonth}
          disabled={disabled}
          aria-label={t("a11y_next_month")}
        >
          <Icon name="ChevronRightIcon" size="small" />
        </button>
      </div>
      <div className="wim-calendar-grid" role="grid" tabIndex={0} onKeyDown={handleKeyDown}>
        {weekDays.map((day) => (
          <div key={day} className="wim-calendar-weekday" role="columnheader" aria-label={day}>
            {day}
          </div>
        ))}
        {daysGrid.map(({ date, currentMonth }, index) => {
          const selected = isSelected(date);
          const focused = isSameDay(date, focusedDate);
          const today = isToday(date);
          const inRange = isInRange(date);
          const dateDisabled = isDateDisabled(date);
          const isStart = rangeMode && rangeStart && isSameDay(date, rangeStart);
          const isEnd = rangeMode && rangeEnd && isSameDay(date, rangeEnd);

          return (
            <button
              key={index}
              type="button"
              className={classNames(
                "wim-calendar-day",
                !currentMonth && "wim-calendar-day--other-month",
                selected && "wim-calendar-day--selected",
                focused && "wim-calendar-day--focused",
                today && "wim-calendar-day--today",
                inRange && "wim-calendar-day--in-range",
                dateDisabled && "wim-calendar-day--disabled",
                isStart && "wim-calendar-day--range-start",
                isEnd && "wim-calendar-day--range-end",
              )}
              onClick={() => handleDateClick(date)}
              onFocus={() => setFocusedDate(date)}
              disabled={disabled || dateDisabled}
              tabIndex={focused ? 0 : -1}
              role="gridcell"
              aria-selected={selected}
              aria-label={t("calendar_aria_date", {
                year: date.getFullYear(),
                month: date.getMonth() + 1,
                day: date.getDate(),
              })}
            >
              <span className="wim-calendar-day-text">{date.getDate()}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
};

