import React, { useEffect, useMemo, useRef, useState, useSyncExternalStore } from "react";
import { getWimFormatLocale, getWimLocale, subscribeWimLocale } from "@/i18n/instance";
import classNames from "classnames";
import { useWimTranslation } from "@/i18n/useWimTranslation";
import { commonNs } from "@/i18n/generated/common";
import { dataDisplayNs } from "@/i18n/generated/data-display";
import { useCalendar, UseCalendarProps, isSameDay, isToday } from "./useCalendar";
import { getLocaleWeekStart, toIntlLocale } from "../../_internal/weekStart";
import { Icon } from "../../media/Icon/Icon";
import { VisuallyHidden } from "../../layout/VisuallyHidden/VisuallyHidden";
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
 * 表示の階層（T381）。見出しを押すと、日 → 月の一覧 → 年の一覧へ上がり、選ぶと 1 段ずつ下りる。
 * 以前は 1 か月ずつ送るか、Ctrl / Shift + PageUp で 1 年ずつ送るしかなく、生年月日のような遠い日付は
 * 何十回も押していた（Mantine・Ant Design・MUI はどれも見出しから年や月を選べる）。
 */
type CalendarLevel = "day" | "month" | "year";
/** 月と年の一覧の並び（3 列 × 4 行）。年の一覧は 12 年ずつ。 */
const LEVEL_COLUMNS = 3;
const YEARS_PER_PAGE = 12;

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
  weekStartsOn: weekStartsOnProp,
  ...props
}: CalendarProps) => {
  // 内蔵の翻訳は `t(` の呼び出しから使うキーを拾う（i18n:bundle）。名前空間は配列で渡す
  const { t } = useWimTranslation([commonNs, dataDisplayNs]);
  // 渡されなければ、ロケールの週の始まり（en-GB・de は月曜、en・ja・pt は日曜。T388）
  // 暦（Intl）は丸める前のロケール（"en-GB" など）で決める。翻訳のフックに足すと、暦を使わない
  // 全部品（{ Button } 単体も）が読む分が増えるので、ここだけで購読する
  const requestedLocale = useSyncExternalStore(subscribeWimLocale, getWimFormatLocale, getWimFormatLocale);
  const formatLocale = useMemo(() => toIntlLocale(requestedLocale, getWimLocale()), [requestedLocale]);
  const localeWeekStart = useMemo(() => getLocaleWeekStart(formatLocale), [formatLocale]);
  const weekStartsOn = weekStartsOnProp ?? localeWeekStart;
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

  const [level, setLevel] = useState<CalendarLevel>("day");
  // 月・年の一覧で Tab の停止点にする項目（月は 0〜11、年は西暦）
  const [focusedMonth, setFocusedMonth] = useState(month);
  const [focusedYear, setFocusedYear] = useState(year);
  const levelGridRef = useRef<HTMLDivElement>(null);
  const pendingLevelFocus = useRef(false);
  const yearPageStart = Math.floor(year / YEARS_PER_PAGE) * YEARS_PER_PAGE;

  const isMonthDisabled = (y: number, m: number) =>
    (!!maxDate && new Date(y, m, 1) > maxDate) ||
    (!!minDate && new Date(y, m + 1, 0) < new Date(minDate.getFullYear(), minDate.getMonth(), minDate.getDate()));
  const isYearDisabled = (y: number) =>
    (!!maxDate && y > maxDate.getFullYear()) || (!!minDate && y < minDate.getFullYear());

  useEffect(() => {
    if (!pendingLevelFocus.current) return;
    pendingLevelFocus.current = false;
    levelGridRef.current?.querySelector<HTMLElement>('[tabindex="0"]')?.focus();
  }, [level, focusedMonth, focusedYear]);

  /** 見出しから 1 段上がる（日 → 月 → 年）。フォーカスは、上がった先の今の月・年へ移す。 */
  const goUp = () => {
    pendingLevelFocus.current = true;
    if (level === "day") {
      setFocusedMonth(month);
      setLevel("month");
    } else if (level === "month") {
      setFocusedYear(year);
      setLevel("year");
    }
  };

  /** 月を選んで日の表示へ下りる。日のフォーカスは、同じ日付（無ければ月末）に付いていく。 */
  const chooseMonth = (m: number) => {
    const lastDay = new Date(year, m + 1, 0).getDate();
    pendingFocus.current = true;
    setFocusedDate(new Date(year, m, Math.min(focusedDate.getDate(), lastDay)));
    setViewDate(new Date(year, m, 1));
    setLevel("day");
  };

  /** 年を選んで月の一覧へ下りる。 */
  const chooseYear = (y: number) => {
    pendingLevelFocus.current = true;
    setViewDate(new Date(y, month, 1));
    setFocusedMonth(month);
    setLevel("month");
  };

  /** 月・年の一覧の矢印キー。無効の項目は飛ばし、年の一覧は端を越えると 12 年ずつ送る。 */
  const handleLevelKeyDown = (e: React.KeyboardEvent) => {
    const steps: Record<string, number> = {
      ArrowLeft: -1,
      ArrowRight: 1,
      ArrowUp: -LEVEL_COLUMNS,
      ArrowDown: LEVEL_COLUMNS,
    };
    const step = steps[e.key];
    const isHomeEnd = e.key === "Home" || e.key === "End";
    if (step === undefined && !isHomeEnd) return;
    // 一覧の中で押したときだけ（見出しと前後のボタンの上では何もしない）
    if (!levelGridRef.current?.contains(e.target as Node)) return;
    e.preventDefault();
    e.stopPropagation();
    const dir = isHomeEnd ? (e.key === "Home" ? 1 : -1) : Math.sign(step);
    if (level === "month") {
      let m = isHomeEnd ? (e.key === "Home" ? 0 : 11) : focusedMonth + step;
      while (m >= 0 && m <= 11 && isMonthDisabled(year, m)) m += dir;
      if (m < 0 || m > 11) return;
      pendingLevelFocus.current = true;
      setFocusedMonth(m);
      return;
    }
    const pageEnd = yearPageStart + YEARS_PER_PAGE - 1;
    let y = isHomeEnd ? (e.key === "Home" ? yearPageStart : pageEnd) : focusedYear + step;
    for (let i = 0; i < YEARS_PER_PAGE && isYearDisabled(y); i++) y += dir;
    if (isYearDisabled(y)) return;
    pendingLevelFocus.current = true;
    setFocusedYear(y);
    if (y < yearPageStart || y > pageEnd) setViewDate(new Date(y, month, 1));
  };

  /** 見出しの左右のボタン。日は 1 か月、月の一覧は 1 年、年の一覧は 12 年ずつ送る。 */
  const shiftView = (dir: -1 | 1) => {
    if (level === "day") {
      shiftMonth(dir);
      return;
    }
    const years = level === "month" ? dir : dir * YEARS_PER_PAGE;
    setViewDate(new Date(year + years, month, 1));
    if (level === "year") setFocusedYear(focusedYear + years);
  };

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
  }, [focusedDate, year, month, level]);

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

    // 月・年の一覧では、Escape で 1 段下りる（選ばずに戻る）。DatePicker の面を閉じる Escape は
    // document で受けているので、ここで止める（日の表示では止めず、これまでどおり面が閉じる）。
    if (level !== "day") {
      if (e.key === "Escape") {
        e.preventDefault();
        e.stopPropagation();
        if (level === "year") {
          pendingLevelFocus.current = true;
          setLevel("month");
        } else {
          pendingFocus.current = true;
          setLevel("day");
        }
        return;
      }
      handleLevelKeyDown(e);
      return;
    }

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
    const format = new Intl.DateTimeFormat(formatLocale, {
      weekday: "short",
      timeZone: "UTC",
    });
    return Array.from({ length: 7 }, (_, i) =>
      format.format(new Date(Date.UTC(1970, 0, 4 + i))),
    );
  }, [formatLocale]);
  const monthShortFormat = useMemo(
    () => new Intl.DateTimeFormat(formatLocale, { month: "short", timeZone: "UTC" }),
    [formatLocale],
  );
  const monthLongFormat = useMemo(
    () => new Intl.DateTimeFormat(formatLocale, { year: "numeric", month: "long", timeZone: "UTC" }),
    [formatLocale],
  );
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
      <div className={styles.header} data-part="header">
        <button
          type="button"
          className={styles.navBtn}
          data-part="prev-button"
          onClick={() => shiftView(-1)}
          disabled={disabled}
          aria-label={
            level === "day"
              ? t("a11y.prev_month")
              : level === "month"
                ? t("calendar.prev_year")
                : t("calendar.prev_years", { n: YEARS_PER_PAGE })
          }
        >
          <Icon component={ChevronLeftIcon} size="sm" />
        </button>
        <div className={styles.title} data-part="title" aria-live="polite">
          {level === "year" ? (
            `${yearPageStart} – ${yearPageStart + YEARS_PER_PAGE - 1}`
          ) : (
            // 見出しを押すと 1 段上がる。名前は見えている文字から始める（WCAG 2.5.3）
            <button type="button" className={styles.titleBtn} data-part="title-button" onClick={goUp} disabled={disabled}>
              {level === "day" ? `${year} / ${month + 1}` : year}
              <VisuallyHidden>
                {", "}
                {level === "day" ? t("calendar.choose_month") : t("calendar.choose_year")}
              </VisuallyHidden>
            </button>
          )}
        </div>
        <button
          type="button"
          className={styles.navBtn}
          data-part="next-button"
          onClick={() => shiftView(1)}
          disabled={disabled}
          aria-label={
            level === "day"
              ? t("a11y.next_month")
              : level === "month"
                ? t("calendar.next_year")
                : t("calendar.next_years", { n: YEARS_PER_PAGE })
          }
        >
          <Icon component={ChevronRightIcon} size="sm" />
        </button>
      </div>

      {level === "month" && (
        <div
          className={styles.levelGrid}
          data-part="month-grid"
          role="grid"
          aria-label={t("calendar.months", { year })}
          ref={levelGridRef}
        >
          {Array.from({ length: 12 / LEVEL_COLUMNS }, (_, row) => (
            <div key={row} role="row">
              {Array.from({ length: LEVEL_COLUMNS }, (_, col) => {
                const m = row * LEVEL_COLUMNS + col;
                const selected = !!value && value.getFullYear() === year && value.getMonth() === m;
                const now = new Date();
                return (
                  <button
                    key={m}
                    type="button"
                    role="gridcell"
                    aria-selected={selected}
                    aria-current={now.getFullYear() === year && now.getMonth() === m ? "date" : undefined}
                    aria-label={monthLongFormat.format(new Date(Date.UTC(year, m, 1)))}
                    tabIndex={m === focusedMonth ? 0 : -1}
                    disabled={disabled || isMonthDisabled(year, m)}
                    className={classNames(styles.levelCell, { [styles.selected]: selected })}
                    data-part="month"
                    onFocus={() => setFocusedMonth(m)}
                    onClick={() => chooseMonth(m)}
                  >
                    {monthShortFormat.format(new Date(Date.UTC(2000, m, 1)))}
                  </button>
                );
              })}
            </div>
          ))}
        </div>
      )}

      {level === "year" && (
        <div
          className={styles.levelGrid}
          data-part="year-grid"
          role="grid"
          aria-label={t("calendar.years", { start: yearPageStart, end: yearPageStart + YEARS_PER_PAGE - 1 })}
          ref={levelGridRef}
        >
          {Array.from({ length: YEARS_PER_PAGE / LEVEL_COLUMNS }, (_, row) => (
            <div key={row} role="row">
              {Array.from({ length: LEVEL_COLUMNS }, (_, col) => {
                const y = yearPageStart + row * LEVEL_COLUMNS + col;
                const selected = !!value && value.getFullYear() === y;
                return (
                  <button
                    key={y}
                    type="button"
                    role="gridcell"
                    aria-selected={selected}
                    aria-current={new Date().getFullYear() === y ? "date" : undefined}
                    tabIndex={y === focusedYear ? 0 : -1}
                    disabled={disabled || isYearDisabled(y)}
                    className={classNames(styles.levelCell, { [styles.selected]: selected })}
                    data-part="year"
                    onFocus={() => setFocusedYear(y)}
                    onClick={() => chooseYear(y)}
                  >
                    {y}
                  </button>
                );
              })}
            </div>
          ))}
        </div>
      )}

      {level === "day" && (
      <div className={styles.grid} data-part="day-grid" role="grid" ref={gridRef}>
        <div role="row">
          {displayWeekDayNames.map((day, index) => {
            const actualDayIndex = (index + (weekStartsOn || 0)) % 7;
            return (
              <div
                key={index}
                role="columnheader"
                data-part="weekday"
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
                    data-part="day"
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
      )}
    </div>
  );
};
