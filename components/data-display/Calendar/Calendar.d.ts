import { default as React } from '../../../../node_modules/react';
import { UseCalendarProps } from './useCalendar';
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
export declare const Calendar: ({ className, disabled, value, defaultValue, onChange, rangeMode, range: rangeProp, defaultRange, onRangeChange, minDate, maxDate, disabledDates, isDateDisabled, weekStartsOn, ...props }: CalendarProps) => React.JSX.Element;
