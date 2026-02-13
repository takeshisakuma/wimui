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
};
export declare const SegmentedControl: ({ options, value, onChange, size, fullWidth, className, }: SegmentedControlProps) => import("react/jsx-runtime").JSX.Element;
export {};
