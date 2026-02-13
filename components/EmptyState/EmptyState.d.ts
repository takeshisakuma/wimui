import { default as React } from '../../../node_modules/react';
type EmptyStateProps = React.ComponentPropsWithoutRef<"div"> & {
    /**
     * 表示するタイトル（翻訳キーも可）。
     */
    title: string;
    /**
     * 表示する説明文（翻訳キーも可）。
     */
    description?: string;
    /**
     * 表示するアイコン。
     */
    icon?: React.ReactNode;
    /**
     * アクションとして表示する要素（ボタンなど）。
     */
    action?: React.ReactNode;
    /**
     * デザインバリエーション。
     */
    variant?: "default" | "simple";
};
/**
 * データが空の場合や、検索結果がない場合などに表示するプレースホルダーコンポーネント。
 */
export declare const EmptyState: ({ title, description, icon, action, variant, className, ...props }: EmptyStateProps) => import("react/jsx-runtime").JSX.Element;
export {};
