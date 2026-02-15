type RangeSliderProps = {
    /**
     * 現在の値 [min, max]
     */
    value?: [number, number];
    /**
     * デフォルトの値 [min, max]（非制御時）
     */
    defaultValue?: [number, number];
    /**
     * 最小値
     */
    min?: number;
    /**
     * 最大値
     */
    max?: number;
    /**
     * ステップ値
     */
    step?: number;
    /**
     * 同じ値を許容するかどうか（交差はしない）
     */
    allowCross?: boolean;
    /**
     * 無効化フラグ
     */
    disabled?: boolean;
    /**
     * 値変更時のコールバック
     */
    onChange?: (value: [number, number]) => void;
    /**
     * ドラッグ終了時のコールバック
     */
    onAfterChange?: (value: [number, number]) => void;
    /**
     * 追加のクラス名
     */
    className?: string;
    /**
     * 名前の属性。フォーム送信時には name-min と name-max として送信されることを想定するか、
     * あるいはJSON文字列として送信するかなど検討が必要だが、ここでは隠しinputを2つつくる。
     */
    name?: string;
    /**
     * アクセシビリティ用のラベル
     */
    label?: string;
    /**
     * カスタムID
     */
    id?: string;
};
/**
 * 範囲（開始と終了）を選択するためのスライダーコンポーネント。
 */
export declare const RangeSlider: ({ value, defaultValue, min, max, step, allowCross, disabled, onChange, onAfterChange, className, name, label, id: customId, ...props }: RangeSliderProps) => import("react/jsx-runtime").JSX.Element;
export {};
