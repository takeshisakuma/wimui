import React, { useState, useRef, useEffect, useId } from "react";
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
  /**
   * 週の開始曜日。0 = 日曜始まり、1 = 月曜始まり。デフォルトは 0。
   */
  weekStartsOn?: 0 | 1;
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
  weekStartsOn = 0,
  ...props
}: CalendarProps) => {
  const { t } = useTranslation();

  const {
    year,
    month,
    handlePrevMonth,
    handleNextMonth,
    setViewDate,
    isDateDisabled,
    daysGrid,
  } = useCalendar({
    defaultValue: defaultValue || value,
    minDate,
    maxDate,
    disabledDates,
    isDateDisabled: isDateDisabledProp,
    weekStartsOn,
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

  const titleId = useId();
  const gridRef = useRef<HTMLDivElement>(null);
  const isNavigating = useRef(false);

  // After keyboard navigation, move DOM focus to the newly focused day button
  useEffect(() => {
    if (!isNavigating.current) return;
    isNavigating.current = false;
    const btn = gridRef.current?.querySelector<HTMLButtonElement>(
      ".wim-calendar-day--focused:not(:disabled)",
    );
    btn?.focus();
  }, [focusedDate]);

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
        if (e.ctrlKey) {
          nextDate.setFullYear(focusedDate.getFullYear() - 1);
        } else {
          nextDate.setMonth(focusedDate.getMonth() - 1);
        }
        break;
      case "PageDown":
        e.preventDefault();
        if (e.ctrlKey) {
          nextDate.setFullYear(focusedDate.getFullYear() + 1);
        } else {
          nextDate.setMonth(focusedDate.getMonth() + 1);
        }
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

    isNavigating.current = true;
    setFocusedDate(nextDate);
    // Update calendar view if focused date moved to a different month
    if (nextDate.getMonth() !== month || nextDate.getFullYear() !== year) {
      setViewDate(new Date(nextDate.getFullYear(), nextDate.getMonth(), 1));
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
  ].slice(weekStartsOn).concat([
    t("sun"),
    t("mon"),
    t("tue"),
    t("wed"),
    t("thu"),
    t("fri"),
    t("sat"),
  ].slice(0, weekStartsOn));

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
          aria-label={t("a11y.prev_month")}
        >
          <Icon name="ChevronLeftIcon" size="sm" />
        </button>
        <div
          id={titleId}
          className="wim-calendar-title"
          aria-live="polite"
          aria-atomic="true"
        >
          {t("calendar.title", { year, month: month + 1 })}
        </div>
        <button
          type="button"
          className="wim-calendar-nav-btn"
          onClick={handleNextMonth}
          disabled={disabled}
          aria-label={t("a11y.next_month")}
        >
          <Icon name="ChevronRightIcon" size="sm" />
        </button>
      </div>
      <div
        ref={gridRef}
        className="wim-calendar-grid"
        role="grid"
        aria-labelledby={titleId}
        tabIndex={-1}
        onKeyDown={handleKeyDown}
      >
        {weekDays.map((day, index) => {
          const dayOfWeek = (index + weekStartsOn) % 7;
          return (
            <div
              key={day}
              className={classNames(
                "wim-calendar-weekday",
                dayOfWeek === 0 && "wim-calendar-weekday--sunday",
                dayOfWeek === 6 && "wim-calendar-weekday--saturday",
              )}
              role="columnheader"
              aria-label={day}
            >
              {day}
            </div>
          );
        })}
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
                date.getDay() === 0 && "wim-calendar-day--sunday",
                date.getDay() === 6 && "wim-calendar-day--saturday",
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
              aria-label={t("calendar.aria_date", {
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
