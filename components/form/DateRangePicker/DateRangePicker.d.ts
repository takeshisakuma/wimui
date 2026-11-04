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
    /** Accessible name for the group of the two date fields when no visible `label` is provided. */
    "aria-label"?: string;
    /** ID of the element that labels the group of the two date fields when no visible `label` is provided. */
    "aria-labelledby"?: string;
    /** ID of the element that describes the group. Announced together with the error message. */
    "aria-describedby"?: string;
};
/**
 * Component for selecting a date range (start and end dates).
 */
export declare const DateRangePicker: ({ startProps, endProps, className, label, error, required, layout, "aria-label": ariaLabel, "aria-labelledby": ariaLabelledBy, "aria-describedby": ariaDescribedBy, }: DateRangePickerProps) => React.JSX.Element;
export {};
