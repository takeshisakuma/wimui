import { default as React } from '../../../../node_modules/react';
import { FieldIntent, FieldVariant, FieldWidth } from '../../../types/tokens';
export type DatePickerLabels = {
    placeholder?: string;
};
export interface DatePickerProps extends Omit<React.ComponentPropsWithoutRef<"input">, "value" | "defaultValue" | "onChange"> {
    /** Semantic intent of the field (e.g. error state) */
    intent?: FieldIntent;
    /** Visual style variant of the field */
    variant?: FieldVariant;
    /** Whether to take full width of parent */
    fullWidth?: boolean;
    /** Selected date value (`null` = cleared; omit/`undefined` = uncontrolled) */
    value?: Date | null;
    /** Default date value (uncontrolled) */
    defaultValue?: Date | null;
    /** Callback when date changes (`null` when cleared) */
    onChange?: (date: Date | null) => void;
    /** Date format for display (default: 'YYYY-MM-DD') */
    format?: string;
    /** Show clear button */
    clearable?: boolean;
    /** Placeholder text */
    placeholder?: string;
    /** Minimum selectable date */
    minDate?: Date;
    /** Maximum selectable date */
    maxDate?: Date;
    /** Disabled dates */
    disabledDates?: Date[];
    /** Field label */
    label?: string;
    /** Error message */
    error?: string;
    /** Whether to show the required indicator */
    required?: boolean;
    /** Layout direction of label and field */
    layout?: "vertical" | "horizontal";
    /** Labels for manual translation */
    labels?: DatePickerLabels;
    /** Fixed width of the field (width token, CSS value, or number in px) */
    width?: FieldWidth | string | number;
    /** Whether to render as a child element. */
    asChild?: boolean;
}
/**
 * Component for selecting a date.
 */
export declare const DatePicker: React.ForwardRefExoticComponent<DatePickerProps & React.RefAttributes<HTMLDivElement>>;
export default DatePicker;
