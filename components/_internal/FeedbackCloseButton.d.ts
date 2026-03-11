export interface FeedbackCloseButtonProps {
    /**
     * 閉じるボタンをクリックした時のコールバック。指定するとボタンが表示されます。
     */
    onClose?: (id?: string) => void;
    /**
     * ターゲットID（Toastなどで使用）
     */
    id?: string;
    /**
     * 追加のクラス名
     */
    className?: string;
    /**
     * aria-labelの翻訳キー
     */
    ariaLabel?: string;
    /**
     * アイコンのサイズ
     */
    size?: "small" | "medium" | "large";
}
/**
 * 通知系コンポーネントで共通して使用される閉じるボタン（内部用）
 */
export declare const FeedbackCloseButton: ({ onClose, id, className, ariaLabel, size, }: FeedbackCloseButtonProps) => import("react/jsx-runtime").JSX.Element | null;
