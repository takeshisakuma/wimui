import { default as React } from '../../../node_modules/react';
import { DatePicker } from '../DatePicker/DatePicker';
type DateRangePickerProps = {
    startProps?: React.ComponentProps<typeof DatePicker>;
    endProps?: React.ComponentProps<typeof DatePicker>;
    className?: string;
};
/**
 * 期間（開始日・終了日）を選択するためのコンポーネント。
 */
export declare const DateRangePicker: ({ startProps, endProps, className, }: DateRangePickerProps) => import("react/jsx-runtime").JSX.Element;
export {};
