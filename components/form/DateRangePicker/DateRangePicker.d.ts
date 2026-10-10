import { default as React } from '../../../../node_modules/react';
import { DatePicker } from '../../form/DatePicker/DatePicker';
type DateRangePickerProps = {
    /** Props passed to the start-date DatePicker */
    startProps?: React.ComponentProps<typeof DatePicker>;
    /** Props passed to the end-date DatePicker */
    endProps?: React.ComponentProps<typeof DatePicker>;
    /** Additional class names */
    className?: string;
    /** Field label */
    label?: string;
    /** Error message */
    error?: string;
    /** Whether to show the required indicator */
    required?: boolean;
    /** Layout direction of label and field */
    layout?: "vertical" | "horizontal";
};
/**
 * Component for selecting a date range (start and end dates).
 */
export declare const DateRangePicker: ({ startProps, endProps, className, label, error, required, layout, }: DateRangePickerProps) => React.JSX.Element;
export {};
