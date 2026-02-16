import { default as React } from '../../../node_modules/react';
type IconProps = React.SVGProps<SVGSVGElement> & {
    name: "CircleIcon" | "SquareIcon" | "LoadingIcon" | "ExternalLinkIcon" | "CloseIcon" | "SearchIcon" | "EyeIcon" | "EyeOffIcon" | "ChevronDownIcon" | "PlayIcon" | "PauseIcon" | "VolumeIcon" | "MuteIcon" | "ChevronRightIcon" | "ChevronLeftIcon" | "CopyIcon" | "CheckIcon" | "UploadIcon" | "MaximizeIcon" | "MinimizeIcon" | "StarIcon" | "HomeIcon" | "ProjectIcon" | "ChartIcon" | "SettingsIcon" | "BellIcon" | "PdfIcon" | "DocumentIcon" | "ImageIcon" | "VideoIcon" | "EmailIcon" | "PhoneIcon" | "PlusIcon" | "MinusIcon" | "EditIcon" | "TrashIcon" | "DownloadIcon" | "RefreshIcon" | "ShareIcon" | "UserIcon" | "LogInIcon" | "LogOutIcon" | "InfoCircleIcon" | "AlertCircleIcon" | "HelpCircleIcon" | "CalendarIcon" | "ClockIcon" | "SunIcon" | "MoonIcon" | "MoreHorizontalIcon" | "MoreVerticalIcon" | "FilterIcon" | "SpinnerIcon" | "ThumbUpIcon" | "ThumbDownIcon" | "MonitorIcon" | "SmartphoneIcon" | "CloseSmallIcon" | "CheckCircleIcon" | "HourglassIcon";
    size?: "small" | "medium" | "large";
    color?: "destructive" | "positive" | "caution" | "informative" | "primary" | "secondary" | "tertiary" | "disabled";
};
export declare const Icon: ({ name, size, color, className, ...props }: IconProps) => import("react/jsx-runtime").JSX.Element | null;
export {};
