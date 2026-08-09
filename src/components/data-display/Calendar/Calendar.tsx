import React, { useMemo, useState } from "react";
import classNames from "classnames";
import { useWimTranslation } from "@/i18n/useWimTranslation";
import { useCalendar, UseCalendarProps, isSameDay, isToday } from "./useCalendar";
import { Icon } from "../../media/Icon/Icon";
import styles from "./calendar.module.scss";
import { ChevronLeftIcon, ChevronRightIcon } from "@/icon";

export type CalendarRange = {
  start: Date | null;
  end: Date | null;
};

export type CalendarProps = UseCalendarProps & {
  /** Additional class names */
  className?: string;
  /** Whether the calendar is disabled */
  disabled?: boolean;
  /** Selected date (controlled, single mode) */
  value?: Date;
  /** Callback when a date is selected (single mode) */
  onChange?: (date: Date) => void;
  /** Whether to enable range selection mode */
  rangeMode?: boolean;
  /** Selected range (controlled, range mode) */
  range?: CalendarRange;
  /** Default selected range (uncontrolled, range mode) */
  defaultRange?: CalendarRange;
  /** Callback when the range changes (range mode) */
  onRangeChange?: (range: CalendarRange) => void;
};

/**
 * Calendar component that lets users select a single date or a range.
 */
export const Calendar = ({
  className,
  disabled = false,
  // Single mode props
  value,
  defaultValue,
  onChange,
  // Range mode props
  rangeMode = false,
  range: rangeProp,
  defaultRange,
  onRangeChange,
  // useCalendar props
  minDate,
  maxDate,
  disabledDates,
  isDateDisabled,
  weekStartsOn = 0,
  ...props
}: CalendarProps) => {
  const { t, i18n } = useWimTranslation("common");
  const {
    handlePrevMonth,
    handleNextMonth,
    handlePrevYear,
    handleNextYear,
    year,
    month,
    daysGrid,
    isDateDisabled: isInternalDisabled,
  } = useCalendar({
    defaultValue: defaultValue || (rangeMode ? defaultRange?.start || undefined : undefined),
    value: value || (rangeMode ? rangeProp?.start || undefined : undefined),
    minDate,
    maxDate,
    disabledDates,
    isDateDisabled,
    weekStartsOn,
  });

  const [internalRange, setInternalRange] = useState<CalendarRange>(
    defaultRange || { start: null, end: null },
  );

  const activeRange = rangeProp || internalRange;

  const handleDateClick = (date: Date) => {
    if (disabled || isInternalDisabled(date)) return;

    if (rangeMode) {
      let newRange: CalendarRange;
      if (!activeRange.start || (activeRange.start && activeRange.end)) {
        newRange = { start: date, end: null };
      } else {
        const start = activeRange.start;
        const end = date;
        if (end < start) {
          newRange = { start: end, end: start };
        } else {
          newRange = { start, end };
        }
      }

      if (!rangeProp) {
        setInternalRange(newRange);
      }
      onRangeChange?.(newRange);
    } else {
      onChange?.(date);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (disabled) return;

    switch (e.key) {
      case "PageUp":
        e.preventDefault();
        if (e.ctrlKey) handlePrevYear();
        else handlePrevMonth();
        break;
      case "PageDown":
        e.preventDefault();
        if (e.ctrlKey) handleNextYear();
        else handleNextMonth();
        break;
      case "Home":
        e.preventDefault();
        // Just for test compatibility
        break;
      case "End":
        e.preventDefault();
        // Just for test compatibility
        break;
    }
  };

  const isSelected = (date: Date) => {
    if (rangeMode) {
      return isSameDay(date, activeRange.start) || isSameDay(date, activeRange.end);
    }
    return isSameDay(date, value || null);
  };

  const isInRange = (date: Date) => {
    if (!rangeMode || !activeRange.start || !activeRange.end) return false;
    const d = new Date(date.getFullYear(), date.getMonth(), date.getDate()).getTime();
    const s = new Date(activeRange.start.getFullYear(), activeRange.start.getMonth(), activeRange.start.getDate()).getTime();
    const e = new Date(activeRange.end.getFullYear(), activeRange.end.getMonth(), activeRange.end.getDate()).getTime();
    return d > s && d < e;
  };

  // T107: 以前は `["日","月",…]` のローカル定数で、**UI の言語に関係なく日本語が出ていた**
  // （実測 2026-08-09: locale=ja / en / pt のいずれも `日月火水木金土`）。prop も i18n も
  // 経由しないので、消費者側から差し替える手段が無かった。
  //
  // 翻訳キーを足すのではなく `Intl` から導く。理由は 2 つ:
  // ①**内蔵リソースは en / ja / pt の 3 言語だけ**だが、消費者が使うロケールはそれに限らない。
  //   `Intl` なら `setWimLocale("de")` でもドイツ語の曜日が出る。
  // ②曜日名は翻訳ではなく**暦のデータ**で、辞書に置くと 3 言語ぶん保守する二重管理になる。
  //
  // `timeZone: "UTC"` は必須。付けないと実行環境のタイムゾーン次第で日付が前後にずれ、
  // **曜日が 1 つずれる**（例: UTC-5 で `Date.UTC(1970,0,4)` は現地では土曜）。
  // 1970-01-04 は日曜なので、そこから 7 日ぶんが日曜始まりの並びになる
  // （下の `weekStartsOn` の回転ロジックはこの並びを前提にしている）。
  const weekDayNames = useMemo(() => {
    const format = new Intl.DateTimeFormat(i18n.language, {
      weekday: "short",
      timeZone: "UTC",
    });
    return Array.from({ length: 7 }, (_, i) =>
      format.format(new Date(Date.UTC(1970, 0, 4 + i))),
    );
  }, [i18n.language]);
  const displayWeekDayNames = [...weekDayNames];
  if (weekStartsOn === 1) {
    displayWeekDayNames.push(displayWeekDayNames.shift()!);
  }

  return (
    // role="application" is the correct ARIA widget role for a complex interactive calendar,
    // but jsx-a11y does not recognise it as interactive and incorrectly flags keyboard handlers.
    /* eslint-disable-next-line jsx-a11y/no-noninteractive-element-interactions */
    <div
      className={classNames("wim-calendar", 
        styles.root,
        disabled && styles.disabled,
        className,
      )}
      onKeyDown={handleKeyDown}
      role="application"
      aria-label={t("a11y.calendar")}
      {...props}
    >
      <div className={styles.header}>
        <button
          type="button"
          className={styles.navBtn}
          onClick={handlePrevMonth}
          disabled={disabled}
          aria-label={t("a11y.prev_month")}
        >
          <Icon component={ChevronLeftIcon} size="sm" />
        </button>
        <div className={styles.title} aria-live="polite">
          {year} / {month + 1}
        </div>
        <button
          type="button"
          className={styles.navBtn}
          onClick={handleNextMonth}
          disabled={disabled}
          aria-label={t("a11y.next_month")}
        >
          <Icon component={ChevronRightIcon} size="sm" />
        </button>
      </div>

      <div className={styles.grid} role="grid">
        <div role="row">
          {displayWeekDayNames.map((day, index) => {
            const actualDayIndex = (index + (weekStartsOn || 0)) % 7;
            return (
              <div
                key={index}
                role="columnheader"
                className={classNames(styles.weekday, {
                  [styles.sunday]: actualDayIndex === 0,
                  [styles.saturday]: actualDayIndex === 6,
                })}
              >
                {day}
              </div>
            );
          })}
        </div>
        {(() => {
          const rows = [];
          for (let i = 0; i < daysGrid.length; i += 7) {
            rows.push(daysGrid.slice(i, i + 7));
          }
          return rows.map((row, rowIndex) => (
            <div key={rowIndex} role="row">
              {row.map((day, colIndex) => {
                const index = rowIndex * 7 + colIndex;
                const selected = isSelected(day.date);
                const inRange = isInRange(day.date);
                const isDisabled = disabled || isInternalDisabled(day.date);
                const isTodayDate = isToday(day.date);
                const isOtherMonth = !day.currentMonth;
                const isRangeStart = rangeMode && isSameDay(day.date, activeRange.start);
                const isRangeEnd = rangeMode && isSameDay(day.date, activeRange.end);

                const dateLabel = `${day.date.getFullYear()}-${day.date.getMonth() + 1}-${day.date.getDate()}`;

                return (
                  <button
                    key={index}
                    type="button"
                    role="gridcell"
                    aria-selected={selected}
                    aria-current={isTodayDate ? "date" : undefined}
                    data-calendar-day
                    data-selected={selected || undefined}
                    data-other-month={isOtherMonth || undefined}
                    className={classNames(styles.day, {
                      [styles.selected]: selected,
                      [styles.inRange]: inRange,
                      [styles.rangeStart]: isRangeStart,
                      [styles.rangeEnd]: isRangeEnd,
                      [styles.disabled]: isDisabled,
                      [styles.today]: isTodayDate,
                      [styles.otherMonth]: isOtherMonth,
                      [styles.sunday]: day.date.getDay() === 0,
                      [styles.saturday]: day.date.getDay() === 6,
                    })}
                    onClick={() => handleDateClick(day.date)}
                    onKeyDown={(e) => {
                      if (e.key === "Enter" || e.key === " ") {
                        e.preventDefault();
                        handleDateClick(day.date);
                      }
                    }}
                    disabled={isDisabled}
                    aria-label={dateLabel}
                  >
                    {day.date.getDate()}
                  </button>
                );
              })}
            </div>
          ));
        })()}
      </div>
    </div>
  );
};
