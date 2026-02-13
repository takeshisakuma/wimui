import { default as React } from '../../../node_modules/react';
type ChipProps = {
    /** 表示するラベル */
    label: string | React.ReactNode;
    /** クリック時のイベント。提供されるとボタンとして動作します。 */
    onClick?: (e: React.MouseEvent) => void;
    /** 削除時のイベント。提供されると×ボタンが表示されます。 */
    onDelete?: (e: React.MouseEvent) => void;
    /** アバター（画像や頭文字など） */
    avatar?: React.ReactNode;
    /** アイコン */
    icon?: React.ReactNode;
    /** 選択状態 */
    selected?: boolean;
    /** 無効状態 */
    disabled?: boolean;
    /** 色 */
    color?: "primary" | "secondary" | "neutral";
    /** バリアント */
    variant?: "solid" | "outline";
    /** サイズ */
    size?: "small" | "medium";
    /** 追加のクラス名 */
    className?: string;
    /** その他のprops */
    [key: string]: any;
};
/**
 * 選択、フィルタリング、または入力に使用されるインタラクティブなトークン。
 */
export declare const Chip: ({ label, onClick, onDelete, avatar, icon, selected, disabled, color, variant, size, className, ...props }: ChipProps) => import("react/jsx-runtime").JSX.Element;
export {};
