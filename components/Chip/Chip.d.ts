import { default as React } from '../../../node_modules/react';
import { ComponentSize, IndicatorStatus } from '../../types/tokens';
export type ChipProps = {
    /** 表示するコンテンツ */
    children?: React.ReactNode;
    /** クリック時のイベント。提供されるとボタンとして動作します。 */
    onClick?: (e: React.MouseEvent) => void;
    /** 削除時のイベント。提供されると×ボタンが表示されます。 */
    onDelete?: (e: React.SyntheticEvent) => void;
    /** アバター（画像や頭文字など） */
    avatar?: React.ReactNode;
    /** アイコン */
    icon?: React.ReactNode;
    /** 選択状態 */
    selected?: boolean;
    /** 無効状態 */
    disabled?: boolean;
    /** ステータス */
    status?: IndicatorStatus;
    /** バリアント */
    variant?: "solid" | "outline" | "subtle";
    /** サイズ */
    size?: ComponentSize;
    /** 追加のクラス名 */
    className?: string;
    /** その他のprops */
    [key: string]: unknown;
};
/**
 * 選択、フィルタリング、または入力に使用されるインタラクティブなトークン。
 */
export declare const Chip: ({ children, onClick, onDelete, avatar, icon, selected, disabled, status, variant, size, className, ...props }: ChipProps) => import("react/jsx-runtime").JSX.Element;
