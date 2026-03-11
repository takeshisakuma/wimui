export interface CalendarDay {
    date: Date;
    currentMonth: boolean;
}
export declare const isSameDay: (date1: Date | null, date2: Date | null) => boolean;
export declare const isToday: (date: Date) => boolean;
export interface UseCalendarProps {
    defaultValue?: Date;
    value?: Date;
    minDate?: Date;
    maxDate?: Date;
    disabledDates?: Date[];
    isDateDisabled?: (date: Date) => boolean;
}
export declare const useCalendar: ({ defaultValue, value, minDate, maxDate, disabledDates, isDateDisabled, }?: UseCalendarProps) => {
    viewDate: Date;
    setViewDate: import('../../../node_modules/react').Dispatch<import('../../../node_modules/react').SetStateAction<Date>>;
    year: number;
    month: number;
    handlePrevMonth: () => void;
    handleNextMonth: () => void;
    isDateDisabled: (date: Date) => boolean;
    daysGrid: CalendarDay[];
};
