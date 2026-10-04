export interface CalendarDay {
    date: Date;
    currentMonth: boolean;
}
export declare const isSameDay: (date1: Date | null, date2: Date | null) => boolean;
export declare const isToday: (date: Date) => boolean;
export interface UseCalendarProps {
    /** Default selected date (uncontrolled) */
    defaultValue?: Date;
    /** Selected date (controlled) */
    value?: Date;
    /** Earliest selectable date */
    minDate?: Date;
    /** Latest selectable date */
    maxDate?: Date;
    /** Dates that cannot be selected */
    disabledDates?: Date[];
    /** Function returning whether a given date is disabled */
    isDateDisabled?: (date: Date) => boolean;
    /** First day of the week (0 = Sunday, 1 = Monday) */
    weekStartsOn?: 0 | 1;
}
export declare const useCalendar: ({ defaultValue, value, minDate, maxDate, disabledDates, isDateDisabled, weekStartsOn, }?: UseCalendarProps) => {
    viewDate: Date;
    setViewDate: import('../../../../node_modules/react').Dispatch<import('../../../../node_modules/react').SetStateAction<Date>>;
    year: number;
    month: number;
    handlePrevMonth: () => void;
    handleNextMonth: () => void;
    handlePrevYear: () => void;
    handleNextYear: () => void;
    isDateDisabled: (date: Date) => boolean;
    daysGrid: CalendarDay[];
};
