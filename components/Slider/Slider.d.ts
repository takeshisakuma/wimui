type SliderProps = {
    /**
     * 現在の値
     */
    value?: number;
    /**
     * デフォルトの値（非制御時）
     */
    defaultValue?: number;
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
     * 無効化フラグ
     */
    disabled?: boolean;
    /**
     * 値変更時のコールバック
     */
    onChange?: (value: number) => void;
    /**
     * ドラッグ終了時のコールバック
     */
    onAfterChange?: (value: number) => void;
    /**
     * 追加のクラス名
     */
    className?: string;
    /**
     * 名前の属性
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
 * ユーザーが値の範囲から1つの値を選択するためのスライダーコンポーネント。
 */
export declare const Slider: ({ value, defaultValue, min, max, step, disabled, onChange, onAfterChange, className, name, label, id: customId, ...props }: SliderProps) => import("react/jsx-runtime").JSX.Element;
export {};
