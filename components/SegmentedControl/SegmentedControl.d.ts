type Option = {
    label?: string;
    value: string;
    iconName?: "CircleIcon" | "SquareIcon" | "LoadingIcon" | "ExternalLinkIcon";
};
type SegmentedControlProps = {
    options: Option[];
    value: string;
    onChange: (value: string) => void;
    size?: "small" | "medium" | "large";
    fullWidth?: boolean;
    className?: string;
    /**
     * アクセシビリティ用のラベル
     */
    label?: string;
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
     * 無効状態にするかどうか
     */
    disabled?: boolean;
};
export declare const SegmentedControl: ({ options, value, onChange, size, fullWidth, className, label, error, required, layout, disabled, }: SegmentedControlProps) => import("react/jsx-runtime").JSX.Element;
export {};
