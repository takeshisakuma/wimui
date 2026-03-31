import { default as React } from '../../../../node_modules/react';
import { DatePicker } from '../../form/DatePicker/DatePicker';
type DateRangePickerProps = {
    startProps?: React.ComponentProps<typeof DatePicker>;
    endProps?: React.ComponentProps<typeof DatePicker>;
    className?: string;
    label?: string;
    error?: string;
    required?: boolean;
    layout?: "vertical" | "horizontal";
};
/**
 * ユーザーが日付の範囲（開始日・終了日）を選択するためのコンポーネント。
 */
export declare const DateRangePicker: ({ startProps, endProps, className, label, error, required, layout, }: DateRangePickerProps) => import("react/jsx-runtime").JSX.Element;
export {};
