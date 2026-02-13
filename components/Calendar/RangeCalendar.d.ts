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
};
/**
 * ユーザーが日付の範囲を選択するためのカレンダーコンポーネント。
 */
export declare const RangeCalendar: ({ value, onChange, defaultValue, className, disabled, ...props }: RangeCalendarProps) => import("react/jsx-runtime").JSX.Element;
