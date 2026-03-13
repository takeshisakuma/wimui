import { default as React } from '../../../node_modules/react';
type DatePickerProps = Omit<React.ComponentPropsWithoutRef<"input">, "value" | "defaultValue" | "onChange"> & {
    status?: "default" | "error" | "disabled";
    variant?: "outline" | "ghost";
    fullWidth?: boolean;
    /** Selected date value */
    value?: Date;
    /** Default date value (uncontrolled) */
    defaultValue?: Date;
    /** Callback when date changes */
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
    label?: string;
    error?: string;
    required?: boolean;
    layout?: "vertical" | "horizontal";
};
/**
 * ユーザーが日付を選択するためのコンポーネント。
 */
export declare const DatePicker: ({ status, variant, fullWidth, className, disabled, value, defaultValue, onChange, format, clearable, placeholder, minDate: _minDate, maxDate: _maxDate, disabledDates: _disabledDates, label, error, required, layout, id: customId, ...props }: DatePickerProps) => import("react/jsx-runtime").JSX.Element;
export {};
