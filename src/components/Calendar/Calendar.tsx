import React, { useState } from "react";
import classNames from "classnames";
import { Icon } from "../Icon/Icon";
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
  onRangeChange,
  minDate,
  maxDate,
  disabledDates,
  isDateDisabled,
  ...props
}: CalendarProps) => {
  const [viewDate, setViewDate] = useState(defaultValue || value || new Date());
  const [selectedDate, setSelectedDate] = useState(defaultValue || value);
  const [rangeStart, setRangeStart] = useState<Date | null>(
    range?.start || null,
  );
  const [rangeEnd, setRangeEnd] = useState<Date | null>(range?.end || null);

  const isControlled = value !== undefined;
  const currentSelected = isControlled ? value : selectedDate;

  const year = viewDate.getFullYear();
  const month = viewDate.getMonth();

  // 当月の最初の日
  const firstDayOfMonth = new Date(year, month, 1);
  // 当月の最後の日
  const lastDayOfMonth = new Date(year, month + 1, 0);
  // 前月の最後の日
  const lastDayOfPrevMonth = new Date(year, month, 0);

  const daysInMonth = lastDayOfMonth.getDate();
  const startDayOfWeek = firstDayOfMonth.getDay();

  const handlePrevMonth = () => {
    if (disabled) return;
    setViewDate(new Date(year, month - 1, 1));
  };

  const handleNextMonth = () => {
    if (disabled) return;
    setViewDate(new Date(year, month + 1, 1));
  };

  const isSameDay = (date1: Date, date2: Date): boolean => {
    return (
      date1.getFullYear() === date2.getFullYear() &&
      date1.getMonth() === date2.getMonth() &&
      date1.getDate() === date2.getDate()
    );
  };

  const isDateDisabledInternal = (date: Date): boolean => {
    // Check custom disabled function
    if (isDateDisabled && isDateDisabled(date)) {
      return true;
    }

    // Check disabled dates array
    if (disabledDates && disabledDates.some((d) => isSameDay(d, date))) {
      return true;
    }

    // Check min/max dates
    if (
      minDate &&
      date <
        new Date(minDate.getFullYear(), minDate.getMonth(), minDate.getDate())
    ) {
      return true;
    }

    if (
      maxDate &&
      date >
        new Date(maxDate.getFullYear(), maxDate.getMonth(), maxDate.getDate())
    ) {
      return true;
    }

    return false;
  };

  const handleDateClick = (date: Date) => {
    if (disabled || isDateDisabledInternal(date)) return;

    if (rangeMode) {
      // Range selection logic
      if (!rangeStart || (rangeStart && rangeEnd)) {
        // Start new range
        setRangeStart(date);
        setRangeEnd(null);
        onRangeChange?.({ start: date, end: null });
      } else {
        // Complete range
        if (date < rangeStart) {
          setRangeStart(date);
          setRangeEnd(rangeStart);
          onRangeChange?.({ start: date, end: rangeStart });
        } else {
          setRangeEnd(date);
          onRangeChange?.({ start: rangeStart, end: date });
        }
      }
    } else {
      // Single date selection
      if (!isControlled) {
        setSelectedDate(date);
      }
      if (onChange) {
        onChange(date);
      }
    }
  };

  const isSelected = (date: Date) => {
    if (rangeMode) {
      if (rangeStart && isSameDay(date, rangeStart)) return true;
      if (rangeEnd && isSameDay(date, rangeEnd)) return true;
      return false;
    }
    return currentSelected && isSameDay(date, currentSelected);
  };

  const isInRange = (date: Date): boolean => {
    if (!rangeMode || !rangeStart || !rangeEnd) return false;
    // Ensure rangeStart is always before rangeEnd for comparison
    const start = rangeStart < rangeEnd ? rangeStart : rangeEnd;
    const end = rangeStart < rangeEnd ? rangeEnd : rangeStart;
    return date > start && date < end;
  };

  const isToday = (date: Date) => {
    const today = new Date();
    return isSameDay(date, today);
  };

  // カレンダーのグリッドを生成
  const calendarDays = [];

  // 前月の日付
  for (let i = startDayOfWeek - 1; i >= 0; i--) {
    const d = new Date(year, month - 1, lastDayOfPrevMonth.getDate() - i);
    calendarDays.push({ date: d, currentMonth: false });
  }

  // 当月の日付
  for (let i = 1; i <= daysInMonth; i++) {
    const d = new Date(year, month, i);
    calendarDays.push({ date: d, currentMonth: true });
  }

  // 次月の日付 (6週間分埋める)
  const remainingDays = 42 - calendarDays.length;
  for (let i = 1; i <= remainingDays; i++) {
    const d = new Date(year, month + 1, i);
    calendarDays.push({ date: d, currentMonth: false });
  }

  const weekDays = ["日", "月", "火", "水", "木", "金", "土"];

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
          aria-label="前月"
        >
          <Icon name="ChevronLeftIcon" size="small" />
        </button>
        <div className="wim-calendar-title">
          {year}年 {month + 1}月
        </div>
        <button
          type="button"
          className="wim-calendar-nav-btn"
          onClick={handleNextMonth}
          disabled={disabled}
          aria-label="翌月"
        >
          <Icon name="ChevronRightIcon" size="small" />
        </button>
      </div>
      <div className="wim-calendar-grid">
        {weekDays.map((day) => (
          <div key={day} className="wim-calendar-weekday">
            {day}
          </div>
        ))}
        {calendarDays.map(({ date, currentMonth }, index) => {
          const selected = isSelected(date);
          const today = isToday(date);
          const inRange = isInRange(date);
          const dateDisabled = isDateDisabledInternal(date);

          return (
            <button
              key={index}
              type="button"
              className={classNames(
                "wim-calendar-day",
                !currentMonth && "wim-calendar-day--other-month",
                selected && "wim-calendar-day--selected",
                today && "wim-calendar-day--today",
                inRange && "wim-calendar-day--in-range",
                dateDisabled && "wim-calendar-day--disabled",
              )}
              onClick={() => handleDateClick(date)}
              disabled={disabled || dateDisabled}
              aria-label={`${date.getFullYear()}年${date.getMonth() + 1}月${date.getDate()}日`}
            >
              {date.getDate()}
            </button>
          );
        })}
      </div>
    </div>
  );
};
