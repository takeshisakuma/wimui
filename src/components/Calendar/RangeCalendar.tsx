import React, { useState } from "react";
import classNames from "classnames";
import { Icon } from "../Icon/Icon";
import "./calendar.scss";

export type RangeCalendarValue = [Date | null, Date | null];

export type RangeCalendarProps = {
  /**
   * 現在選択されている範囲 [開始日, 終了日]。
   */
  value?: RangeCalendarValue;
  /**
   * 範囲が変更された時のコールバック。
   */
  onChange?: (value: RangeCalendarValue) => void;
  /**
   * 初期値。
   */
  defaultValue?: RangeCalendarValue;
  /**
   * 追加のクラス名。
   */
  className?: string;
  /**
   * 無効化。
   */
  disabled?: boolean;
};

/**
 * ユーザーが日付の範囲を選択するためのカレンダーコンポーネント。
 */
export const RangeCalendar = ({
  value,
  onChange,
  defaultValue,
  className,
  disabled = false,
  ...props
}: RangeCalendarProps) => {
  const [viewDate, setViewDate] = useState(new Date());
  const [internalValue, setInternalValue] = useState<RangeCalendarValue>(
    defaultValue || [null, null],
  );

  const isControlled = value !== undefined;
  const currentRange = isControlled ? value : internalValue;
  const [startDate, endDate] = currentRange;

  const year = viewDate.getFullYear();
  const month = viewDate.getMonth();

  const firstDayOfMonth = new Date(year, month, 1);
  const lastDayOfMonth = new Date(year, month + 1, 0);
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

  const handleDateClick = (date: Date) => {
    if (disabled) return;

    let nextRange: RangeCalendarValue;

    if (!startDate || (startDate && endDate)) {
      // 新しく開始日を選択
      nextRange = [date, null];
    } else {
      // 終了日を選択
      if (date < startDate) {
        // 開始日より前なら、新しく開始日にする
        nextRange = [date, null];
      } else {
        nextRange = [startDate, date];
      }
    }

    if (!isControlled) {
      setInternalValue(nextRange);
    }
    if (onChange) {
      onChange(nextRange);
    }
  };

  const isDateInRange = (date: Date) => {
    if (!startDate || !endDate) return false;
    const d = new Date(date.getFullYear(), date.getMonth(), date.getDate());
    const s = new Date(
      startDate.getFullYear(),
      startDate.getMonth(),
      startDate.getDate(),
    );
    const e = new Date(
      endDate.getFullYear(),
      endDate.getMonth(),
      endDate.getDate(),
    );
    return d > s && d < e;
  };

  const isSelected = (date: Date) => {
    const check = (target: Date | null) =>
      target &&
      date.getFullYear() === target.getFullYear() &&
      date.getMonth() === target.getMonth() &&
      date.getDate() === target.getDate();

    return check(startDate) || check(endDate);
  };

  const isToday = (date: Date) => {
    const today = new Date();
    return (
      date.getFullYear() === today.getFullYear() &&
      date.getMonth() === today.getMonth() &&
      date.getDate() === today.getDate()
    );
  };

  const calendarDays = [];
  for (let i = startDayOfWeek - 1; i >= 0; i--) {
    const d = new Date(year, month - 1, lastDayOfPrevMonth.getDate() - i);
    calendarDays.push({ date: d, currentMonth: false });
  }
  for (let i = 1; i <= daysInMonth; i++) {
    const d = new Date(year, month, i);
    calendarDays.push({ date: d, currentMonth: true });
  }
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
        "wim-range-calendar",
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
          const inRange = isDateInRange(date);
          const today = isToday(date);
          const isStart = startDate && date.getTime() === startDate.getTime();
          const isEnd = endDate && date.getTime() === endDate.getTime();

          return (
            <button
              key={index}
              type="button"
              className={classNames(
                "wim-calendar-day",
                !currentMonth && "wim-calendar-day--outside",
                selected && "wim-calendar-day--selected",
                inRange && "wim-calendar-day--in-range",
                isStart && "wim-calendar-day--range-start",
                isEnd && "wim-calendar-day--range-end",
                today && "wim-calendar-day--today",
              )}
              onClick={() => handleDateClick(date)}
              disabled={disabled}
            >
              {date.getDate()}
            </button>
          );
        })}
      </div>
    </div>
  );
};
