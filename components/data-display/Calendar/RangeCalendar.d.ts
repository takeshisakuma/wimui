export type RangeCalendarValue = [Date | null, Date | null];
export type RangeCalendarProps = {
    /**
     * 現在選択されている範囲 [開始日, 終了日]。
     */
    value?: RangeCalendarValue;
    /**
     * 範囲が変更された時のコールバック。
     */
    onChange?: (value: RangeCalendarValue) => void;
    /**
     * 初期値。
     */
    defaultValue?: RangeCalendarValue;
    /**
     * 追加のクラス名。
     */
    className?: string;
    /**
     * 無効化。
     */
    disabled?: boolean;
    /**
     * 選択可能な最小日付。
     */
    minDate?: Date;
    /**
     * 選択可能な最大日付。
     */
    maxDate?: Date;
    /**
     * 無効化する日付の配列。
     */
    disabledDates?: Date[];
    /**
     * 特定の日付を無効化する関数。
     */
    isDateDisabled?: (date: Date) => boolean;
    /**
     * 週の開始曜日。0 = 日曜始まり、1 = 月曜始まり。デフォルトは 0。
     */
    weekStartsOn?: 0 | 1;
};
/**
 * ユーザーが日付の範囲を選択するためのカレンダーコンポーネント。
 */
export declare const RangeCalendar: ({ value, onChange, defaultValue, className, disabled, minDate, maxDate, disabledDates, isDateDisabled, weekStartsOn, ...props }: RangeCalendarProps) => import("react/jsx-runtime").JSX.Element;
