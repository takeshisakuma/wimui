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
};
export declare const SegmentedControl: ({ options, value, onChange, size, fullWidth, className, label, }: SegmentedControlProps) => import("react/jsx-runtime").JSX.Element;
export {};
