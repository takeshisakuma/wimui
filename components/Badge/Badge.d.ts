export type BadgeProps = React.ComponentPropsWithoutRef<"span"> & {
    /** 表示するコンテンツ */
    children?: React.ReactNode;
    /** @deprecated use children instead */
    content?: string;
    /** アイコン */
    icon?: React.ReactNode;
    /** ステータス */
    status?: "primary" | "secondary" | "success" | "warning" | "error" | "info" | "neutral";
    /** バリアント */
    variant?: "solid" | "outline" | "subtle";
    /** サイズ */
    size?: "small" | "medium";
};
/**
 * 状態やカウントなどを表示するためのバッジコンポーネント。
 */
export declare const Badge: ({ children, content, icon, className, ...props }: BadgeProps) => import("react/jsx-runtime").JSX.Element;
