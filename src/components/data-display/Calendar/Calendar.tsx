import React, { useEffect, useMemo, useRef, useState } from "react";
import classNames from "classnames";
import { useWimTranslation } from "@/i18n/useWimTranslation";
import { commonNs } from "@/i18n/generated/common";
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

const addDays = (date: Date, days: number) =>
  new Date(date.getFullYear(), date.getMonth(), date.getDate() + days);

/** 月を送る。送り先に同じ日が無ければ（31 日 → 30 日の月）、月末に丸める。 */
const addMonths = (date: Date, months: number) => {
  const lastDay = new Date(date.getFullYear(), date.getMonth() + months + 1, 0).getDate();
  return new Date(date.getFullYear(), date.getMonth() + months, Math.min(date.getDate(), lastDay));
};

const dateKey = (date: Date) => `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;

/** 無効の日を飛ばして探す上限（1 年ぶん）。全部が無効なら、動かさない。 */
const SKIP_LIMIT = 366;

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
  const { t, i18n } = useWimTranslation(commonNs);
  const {
    viewDate,
    setViewDate,
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

  // 日は 1 つだけを Tab の停止点にする（roving tabindex）。以前は 42 個の日が全部停止点で、矢印は
  // 効かなかった ── 1 か月を抜けるのに Tab が 30 回前後かかった（T304）。
  // 最初は、表示している月を決めた日（選択中の日・範囲の開始日・無ければ今日）に置く。
  const gridRef = useRef<HTMLDivElement>(null);
  const [focusedDate, setFocusedDate] = useState<Date>(viewDate);
  // キーで動かした直後だけ、DOM のフォーカスを追従させる（月送りのボタンを押したときは奪わない）。
  const pendingFocus = useRef(false);

  const inView = (date: Date) => date.getFullYear() === year && date.getMonth() === month;

  // 停止点にする日。フォーカスの日が表示中の月に無い・無効のときは、その月の最初の有効な日へ逃がす
  // （停止点が 0 個になると、キーボードで日に入れなくなる）。
  const tabbableDate =
    inView(focusedDate) && !isInternalDisabled(focusedDate)
      ? focusedDate
      : (daysGrid.find((day) => day.currentMonth && !isInternalDisabled(day.date))?.date ?? null);

  useEffect(() => {
    if (!pendingFocus.current) return;
    pendingFocus.current = false;
    gridRef.current?.querySelector<HTMLElement>('[data-calendar-day][tabindex="0"]')?.focus();
  }, [focusedDate, year, month]);

  /** 日へフォーカスを移す。無効の日は `step` の向きに飛ばす。月をまたいだら、表示も送る。 */
  const moveFocusTo = (target: Date, step: number): boolean => {
    let date = target;
    for (let i = 0; i < SKIP_LIMIT && isInternalDisabled(date); i++) date = addDays(date, step);
    if (isInternalDisabled(date)) return false;
    pendingFocus.current = true;
    setFocusedDate(date);
    if (!inView(date)) setViewDate(new Date(date.getFullYear(), date.getMonth(), 1));
    return true;
  };

  /** 表示の月を送る。停止点の日も同じ日付のまま付いていく（DOM のフォーカスは動かさない）。 */
  const shiftMonth = (months: number) => {
    const target = addMonths(inView(focusedDate) ? focusedDate : new Date(year, month, 1), months);
    setFocusedDate(target);
    setViewDate(new Date(target.getFullYear(), target.getMonth(), 1));
  };

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

    // 矢印・Home / End は、日の上で押したときだけ扱う（月送りのボタンの上では何もしない）。
    const cell = (e.target as HTMLElement).closest<HTMLElement>("[data-calendar-day]");
    const base = cell
      ? daysGrid.find((day) => dateKey(day.date) === cell.getAttribute("data-date"))?.date
      : undefined;

    const pageBy = (months: number) => {
      e.preventDefault();
      // 日の上なら、同じ日付のままフォーカスごと送る。行き先が無効なら、月の内側へ寄せる。
      if (base && moveFocusTo(addMonths(base, months), months > 0 ? -1 : 1)) return;
      shiftMonth(months);
    };

    switch (e.key) {
      case "PageUp":
        pageBy(e.ctrlKey || e.shiftKey ? -12 : -1);
        break;
      case "PageDown":
        pageBy(e.ctrlKey || e.shiftKey ? 12 : 1);
        break;
      case "ArrowLeft":
      case "ArrowRight":
      case "ArrowUp":
      case "ArrowDown": {
        if (!base) return;
        e.preventDefault();
        const step = { ArrowLeft: -1, ArrowRight: 1, ArrowUp: -7, ArrowDown: 7 }[e.key];
        moveFocusTo(addDays(base, step), step);
        break;
      }
      case "Home":
      case "End": {
        if (!base) return;
        e.preventDefault();
        // 週の端。`weekStartsOn` の並びで数える。
        const offset = (base.getDay() - weekStartsOn + 7) % 7;
        if (e.key === "Home") moveFocusTo(addDays(base, -offset), 1);
        else moveFocusTo(addDays(base, 6 - offset), -1);
        break;
      }
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
          onClick={() => shiftMonth(-1)}
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
          onClick={() => shiftMonth(1)}
          disabled={disabled}
          aria-label={t("a11y.next_month")}
        >
          <Icon component={ChevronRightIcon} size="sm" />
        </button>
      </div>

      <div className={styles.grid} role="grid" ref={gridRef}>
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

                const dateLabel = dateKey(day.date);
                const isTabStop = !!tabbableDate && isSameDay(day.date, tabbableDate);

                return (
                  <button
                    key={index}
                    type="button"
                    role="gridcell"
                    aria-selected={selected}
                    aria-current={isTodayDate ? "date" : undefined}
                    data-calendar-day
                    data-date={dateLabel}
                    tabIndex={isTabStop ? 0 : -1}
                    onFocus={() => setFocusedDate(day.date)}
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
