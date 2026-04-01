import { default as React } from '../../../../node_modules/react';
import { ComponentSize } from '../../../types/tokens';
export type RatingLabels = {
    star?: (count: number) => string;
    readonly?: (value: number, max: number) => string;
};
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
     * 無効化フラグ
     */
    disabled?: boolean;
    /**
     * 読み取り専用フラグ（表示専用。disabledと異なりグレーアウトしない）
     */
    readOnly?: boolean;
    /**
     * サイズ
     */
    size?: ComponentSize;
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
    label?: React.ReactNode;
    /**
     * エラーメッセージ
     */
    error?: string;
    /**
     * 必須表示にするかどうか
     */
    required?: boolean;
    /**
     * レイアウト方向
     */
    layout?: "vertical" | "horizontal";
    /**
     * Labels for internationalization
     */
    labels?: RatingLabels;
};
/**
 * ユーザーが評価を入力するためのレーティングコンポーネント。
 */
export declare const Rating: ({ value, defaultValue, count, allowHalf, disabled, readOnly, size, onChange, className, label, error, required, layout, labels, ...props }: RatingProps) => import("react/jsx-runtime").JSX.Element;
export {};
