import { default as React } from '../../../node_modules/react';
type IconProps = React.SVGProps<SVGSVGElement> & {
    name: "CircleIcon" | "SquareIcon" | "LoadingIcon" | "ExternalLinkIcon" | "CloseIcon" | "SearchIcon" | "EyeIcon" | "EyeOffIcon" | "ChevronDownIcon" | "PlayIcon" | "PauseIcon" | "VolumeIcon" | "MuteIcon" | "ChevronRightIcon" | "ChevronLeftIcon" | "CopyIcon" | "CheckIcon" | "UploadIcon" | "MaximizeIcon" | "MinimizeIcon" | "StarIcon" | "HomeIcon" | "ProjectIcon" | "ChartIcon" | "SettingsIcon";
    size?: "small" | "medium" | "large";
    color?: "destructive" | "positive" | "caution" | "informative" | "primary" | "secondary" | "tertiary" | "disabled";
};
export declare const Icon: ({ name, size, color, className, ...props }: IconProps) => import("react/jsx-runtime").JSX.Element | null;
export {};
