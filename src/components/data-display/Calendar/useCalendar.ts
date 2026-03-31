import { useState, useMemo } from "react";

export interface CalendarDay {
  date: Date;
  currentMonth: boolean;
}

export const isSameDay = (date1: Date | null, date2: Date | null): boolean => {
  if (!date1 || !date2) return false;
  return (
    date1.getFullYear() === date2.getFullYear() &&
    date1.getMonth() === date2.getMonth() &&
    date1.getDate() === date2.getDate()
  );
};

export const isToday = (date: Date): boolean => {
  return isSameDay(date, new Date());
};

export interface UseCalendarProps {
  defaultValue?: Date;
  value?: Date;
  minDate?: Date;
  maxDate?: Date;
  disabledDates?: Date[];
  isDateDisabled?: (date: Date) => boolean;
  weekStartsOn?: 0 | 1;
}

export const useCalendar = ({
  defaultValue,
  value,
  minDate,
  maxDate,
  disabledDates,
  isDateDisabled,
  weekStartsOn = 0,
}: UseCalendarProps = {}) => {
  const [viewDate, setViewDate] = useState(defaultValue || value || new Date());

  const year = viewDate.getFullYear();
  const month = viewDate.getMonth();

  const handlePrevMonth = () => {
    setViewDate(new Date(year, month - 1, 1));
  };

  const handleNextMonth = () => {
    setViewDate(new Date(year, month + 1, 1));
  };

  const isDateDisabledInternal = (date: Date): boolean => {
    if (isDateDisabled && isDateDisabled(date)) return true;
    if (disabledDates && disabledDates.some((d) => isSameDay(d, date))) return true;

    if (minDate) {
      const min = new Date(minDate.getFullYear(), minDate.getMonth(), minDate.getDate());
      if (date < min) return true;
    }

    if (maxDate) {
      const max = new Date(maxDate.getFullYear(), maxDate.getMonth(), maxDate.getDate());
      if (date > max) return true;
    }

    return false;
  };

  const daysGrid = useMemo(() => {
    const days: CalendarDay[] = [];
    const firstDayOfMonth = new Date(year, month, 1);
    const lastDayOfPrevMonth = new Date(year, month, 0);
    const adjustedStartDay = (firstDayOfMonth.getDay() - weekStartsOn + 7) % 7;
    const daysInMonth = new Date(year, month + 1, 0).getDate();

    // Previous month filler
    for (let i = adjustedStartDay - 1; i >= 0; i--) {
      days.push({
        date: new Date(year, month - 1, lastDayOfPrevMonth.getDate() - i),
        currentMonth: false,
      });
    }

    // Current month
    for (let i = 1; i <= daysInMonth; i++) {
      days.push({
        date: new Date(year, month, i),
        currentMonth: true,
      });
    }

    // Next month filler
    const remainingDays = 42 - days.length;
    for (let i = 1; i <= remainingDays; i++) {
      days.push({
        date: new Date(year, month + 1, i),
        currentMonth: false,
      });
    }

    return days;
  }, [year, month, weekStartsOn]);

  return {
    viewDate,
    setViewDate,
    year,
    month,
    handlePrevMonth,
    handleNextMonth,
    isDateDisabled: isDateDisabledInternal,
    daysGrid,
  };
};
