export type CalendarProps = {
    /**
     * 現在選択されている日付。
     */
    value?: Date;
    /**
     * 日付が変更された時のコールバック。
     */
    onChange?: (date: Date) => void;
    /**
     * 初期値。
     */
    defaultValue?: Date;
    /**
     * 追加のクラス名。
     */
    className?: string;
    /**
     * 無効化。
     */
    disabled?: boolean;
    /**
     * 範囲選択モード。
     */
    rangeMode?: boolean;
    /**
     * 選択された範囲（範囲選択モード時）。
     */
    range?: {
        start: Date | null;
        end: Date | null;
    };
    /**
     * 範囲が変更された時のコールバック（範囲選択モード時）。
     */
    onRangeChange?: (range: {
        start: Date | null;
        end: Date | null;
    }) => void;
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
};
/**
 * ユーザーが日付を閲覧し、選択するためのカレンダーコンポーネント。
 */
export declare const Calendar: ({ value, onChange, defaultValue, className, disabled, rangeMode, range, onRangeChange, minDate, maxDate, disabledDates, isDateDisabled, ...props }: CalendarProps) => import("react/jsx-runtime").JSX.Element;
