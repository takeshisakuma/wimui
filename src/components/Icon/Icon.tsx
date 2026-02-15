import React from "react";
import classNames from "classnames";
import "./icon.scss";

// SVG
import CircleIcon from "../../icon/circle.svg?react";
import SquareIcon from "../../icon/square.svg?react";
import LoadingIcon from "../../icon/loading.svg?react";
import ExternalLinkIcon from "../../icon/external-link.svg?react";
import CloseIcon from "../../icon/close.svg?react";
import SearchIcon from "../../icon/search.svg?react";
import EyeIcon from "../../icon/eye.svg?react";
import EyeOffIcon from "../../icon/eye-off.svg?react";
import ChevronDownIcon from "../../icon/chevron-down.svg?react";
import PlayIcon from "../../icon/play.svg?react";
import PauseIcon from "../../icon/pause.svg?react";
import VolumeIcon from "../../icon/volume.svg?react";
import MuteIcon from "../../icon/mute.svg?react";
import ChevronRightIcon from "../../icon/chevron-right.svg?react";
import ChevronLeftIcon from "../../icon/chevron-left.svg?react";
import CopyIcon from "../../icon/copy.svg?react";
import CheckIcon from "../../icon/check.svg?react";
import UploadIcon from "../../icon/upload.svg?react";
import MaximizeIcon from "../../icon/maximize.svg?react";
import MinimizeIcon from "../../icon/minimize.svg?react";
import StarIcon from "../../icon/star.svg?react";
import HomeIcon from "../../icon/home.svg?react";
import ProjectIcon from "../../icon/project.svg?react";
import ChartIcon from "../../icon/chart.svg?react";
import SettingsIcon from "../../icon/settings.svg?react";
import BellIcon from "../../icon/bell.svg?react";
import PdfIcon from "../../icon/pdf.svg?react";
import DocumentIcon from "../../icon/document.svg?react";
import ImageIcon from "../../icon/image.svg?react";
import VideoIcon from "../../icon/video.svg?react";
import EmailIcon from "../../icon/email.svg?react";
import PhoneIcon from "../../icon/phone.svg?react";
import PlusIcon from "../../icon/plus.svg?react";
import MinusIcon from "../../icon/minus.svg?react";
import EditIcon from "../../icon/edit.svg?react";
import TrashIcon from "../../icon/trash.svg?react";
import DownloadIcon from "../../icon/download.svg?react";
import RefreshIcon from "../../icon/refresh.svg?react";
import ShareIcon from "../../icon/share.svg?react";
import UserIcon from "../../icon/user.svg?react";
import LogInIcon from "../../icon/log-in.svg?react";
import LogOutIcon from "../../icon/log-out.svg?react";
import InfoCircleIcon from "../../icon/info-circle.svg?react";
import AlertCircleIcon from "../../icon/alert-circle.svg?react";
import HelpCircleIcon from "../../icon/help-circle.svg?react";
import CalendarIcon from "../../icon/calendar.svg?react";
import ClockIcon from "../../icon/clock.svg?react";
import SunIcon from "../../icon/sun.svg?react";
import MoonIcon from "../../icon/moon.svg?react";
import MoreHorizontalIcon from "../../icon/more-horizontal.svg?react";
import MoreVerticalIcon from "../../icon/more-vertical.svg?react";
import FilterIcon from "../../icon/filter.svg?react";



// アイコン名をコンポーネントにマッピング
const icons = {
  CircleIcon: CircleIcon,
  SquareIcon: SquareIcon,
  LoadingIcon: LoadingIcon,
  ExternalLinkIcon: ExternalLinkIcon,
  CloseIcon: CloseIcon,
  SearchIcon: SearchIcon,
  EyeIcon: EyeIcon,
  EyeOffIcon: EyeOffIcon,
  ChevronDownIcon: ChevronDownIcon,
  PlayIcon: PlayIcon,
  PauseIcon: PauseIcon,
  VolumeIcon: VolumeIcon,
  MuteIcon: MuteIcon,
  ChevronRightIcon: ChevronRightIcon,
  ChevronLeftIcon: ChevronLeftIcon,
  CopyIcon: CopyIcon,
  CheckIcon: CheckIcon,
  UploadIcon: UploadIcon,
  MaximizeIcon: MaximizeIcon,
  MinimizeIcon: MinimizeIcon,
  StarIcon: StarIcon,
  HomeIcon: HomeIcon,
  ProjectIcon: ProjectIcon,
  ChartIcon: ChartIcon,
  SettingsIcon: SettingsIcon,
  BellIcon: BellIcon,
  PdfIcon: PdfIcon,
  DocumentIcon: DocumentIcon,
  ImageIcon: ImageIcon,
  VideoIcon: VideoIcon,
  EmailIcon: EmailIcon,
  PhoneIcon: PhoneIcon,
  PlusIcon: PlusIcon,
  MinusIcon: MinusIcon,
  EditIcon: EditIcon,
  TrashIcon: TrashIcon,
  DownloadIcon: DownloadIcon,
  RefreshIcon: RefreshIcon,
  ShareIcon: ShareIcon,
  UserIcon: UserIcon,
  LogInIcon: LogInIcon,
  LogOutIcon: LogOutIcon,
  InfoCircleIcon: InfoCircleIcon,
  AlertCircleIcon: AlertCircleIcon,
  HelpCircleIcon: HelpCircleIcon,
  CalendarIcon: CalendarIcon,
  ClockIcon: ClockIcon,
  SunIcon: SunIcon,
  MoonIcon: MoonIcon,
  MoreHorizontalIcon: MoreHorizontalIcon,
  MoreVerticalIcon: MoreVerticalIcon,
  FilterIcon: FilterIcon,
};

type IconProps = React.SVGProps<SVGSVGElement> & {
  name:
  | "CircleIcon"
  | "SquareIcon"
  | "LoadingIcon"
  | "ExternalLinkIcon"
  | "CloseIcon"
  | "SearchIcon"
  | "EyeIcon"
  | "EyeOffIcon"
  | "ChevronDownIcon"
  | "PlayIcon"
  | "PauseIcon"
  | "VolumeIcon"
  | "MuteIcon"
  | "ChevronRightIcon"
  | "ChevronLeftIcon"
  | "CopyIcon"
  | "CheckIcon"
  | "UploadIcon"
  | "MaximizeIcon"
  | "MinimizeIcon"
  | "StarIcon"
  | "HomeIcon"
  | "ProjectIcon"
  | "ChartIcon"
  | "SettingsIcon"
  | "BellIcon"
  | "PdfIcon"
  | "DocumentIcon"
  | "ImageIcon"
  | "VideoIcon"
  | "EmailIcon"
  | "PhoneIcon"
  | "PlusIcon"
  | "MinusIcon"
  | "EditIcon"
  | "TrashIcon"
  | "DownloadIcon"
  | "RefreshIcon"
  | "ShareIcon"
  | "UserIcon"
  | "LogInIcon"
  | "LogOutIcon"
  | "InfoCircleIcon"
  | "AlertCircleIcon"
  | "HelpCircleIcon"
  | "CalendarIcon"
  | "ClockIcon"
  | "SunIcon"
  | "MoonIcon"
  | "MoreHorizontalIcon"
  | "MoreVerticalIcon"
  | "FilterIcon";

  size?: "small" | "medium" | "large";
  color?:
  | "destructive"
  | "positive"
  | "caution"
  | "informative"
  | "primary"
  | "secondary"
  | "tertiary"
  | "disabled";
};

// eslint-disable-next-line react/prop-types
export const Icon = ({ name, size = "medium", color, className, ...props }: IconProps) => {
  if (!name) return null;
  const IconComponent = icons[name];
  if (!IconComponent) return null;

  return (
    <IconComponent
      className={classNames(
        "wim-icon",
        `wim-icon--${size === "small" ? "sm" : size === "large" ? "lg" : "md"}`,
        color && `wim-icon--${color}`,
        name === "LoadingIcon" && "wim-icon--loading",
        className
      )}
      {...props}
    />
  );
};


