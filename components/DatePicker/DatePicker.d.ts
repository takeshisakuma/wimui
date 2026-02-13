import { default as React } from '../../../node_modules/react';
type DatePickerProps = Omit<React.ComponentPropsWithoutRef<"input">, "value" | "defaultValue" | "onChange"> & {
    state?: "default" | "error" | "disabled";
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
};
/**
 * ユーザーが日付を選択するためのコンポーネント。
 */
export declare const DatePicker: ({ state, variant, fullWidth, className, disabled, value, defaultValue, onChange, format, clearable, placeholder, minDate, maxDate, disabledDates, ...props }: DatePickerProps) => import("react/jsx-runtime").JSX.Element;
export {};
