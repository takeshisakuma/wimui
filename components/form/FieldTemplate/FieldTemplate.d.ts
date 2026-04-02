import { default as React } from '../../../../node_modules/react';
export type FieldTemplateProps = {
    /**
     * フィールドのラベルテキスト
     */
    label?: React.ReactNode;
    /**
     * エラーメッセージ
     */
    error?: string;
    /**
     * フィールドのメインコンテンツ
     */
    children: React.ReactNode;
    /**
     * 必須表示にするかどうか
     */
    required?: boolean;
    /**
     * レイアウト方向
     * @default "vertical"
     */
    layout?: "vertical" | "horizontal";
    /**
     * アクセシビリティ用のラベルID
     */
    labelId?: string;
    /**
     * エラー表示用のID
     */
    errorId?: string;
    /**
     * カスタムクラス名
     */
    className?: string;
};
/**
 * フォーム系コンポーネントの共通レイアウト（ラベル、エラー表示、配置）を管理する内部コンポーネント。
 */
export declare const FieldTemplate: ({ label, error, children, required, layout, labelId, errorId, className, }: FieldTemplateProps) => import("react/jsx-runtime").JSX.Element;
