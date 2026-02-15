type RatingProps = {
    /**
     * 現在の値
     */
    value?: number;
    /**
     * デフォルトの値（非制御時）
     */
    defaultValue?: number;
    /**
     * 星の総数
     */
    count?: number;
    /**
     * ハーフスターを許可するかどうか
     */
    allowHalf?: boolean;
    /**
     * 無効化フラグ（読み取り専用）
     */
    disabled?: boolean;
    /**
     * サイズ
     */
    size?: "small" | "medium" | "large";
    /**
     * 値変更時のコールバック
     */
    onChange?: (value: number) => void;
    /**
     * 追加のクラス名
     */
    className?: string;
    /**
     * アクセシビリティ用のラベル
     */
    label?: string;
};
/**
 * ユーザーが評価を入力するためのレーティングコンポーネント。
 */
export declare const Rating: ({ value, defaultValue, count, allowHalf, disabled, size, onChange, className, label, ...props }: RatingProps) => import("react/jsx-runtime").JSX.Element;
export {};
