import React from "react";
import PropTypes from "prop-types";
import "./icon.scss";

// SVG
import CircleIcon from "../../src/icon/circle.svg?react";
import SquareIcon from "../../src/icon/square.svg?react";
import LoadingIcon from "../../src/icon/loading.svg?react";
import ExternalLinkIcon from "../../src/icon/external-link.svg?react";
import CloseIcon from "../../src/icon/close.svg?react";
import SearchIcon from "../../src/icon/search.svg?react";
import EyeIcon from "../../src/icon/eye.svg?react";
import EyeOffIcon from "../../src/icon/eye-off.svg?react";
import ChevronDownIcon from "../../src/icon/chevron-down.svg?react";
import PlayIcon from "../../src/icon/play.svg?react";
import PauseIcon from "../../src/icon/pause.svg?react";
import VolumeIcon from "../../src/icon/volume.svg?react";
import MuteIcon from "../../src/icon/mute.svg?react";
import ChevronRightIcon from "../../src/icon/chevron-right.svg?react";
import ChevronLeftIcon from "../../src/icon/chevron-left.svg?react";
import CopyIcon from "../../src/icon/copy.svg?react";
import CheckIcon from "../../src/icon/check.svg?react";
import UploadIcon from "../../src/icon/upload.svg?react";
import MaximizeIcon from "../../src/icon/maximize.svg?react";
import MinimizeIcon from "../../src/icon/minimize.svg?react";


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
  | "MinimizeIcon";
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

export const Icon = ({ name, size = "medium", color, className, ...props }: IconProps) => {
  if (!name) return null;
  const IconComponent = icons[name];
  if (!IconComponent) return null;

  const colorClass = color ? `wim-icon--${color}` : "";
  const sizeMap = { small: "sm", medium: "md", large: "lg" };
  const sizeClass = `wim-icon--${sizeMap[size] || "md"}`;

  return (
    <IconComponent
      className={[
        `wim-icon`,
        sizeClass,
        colorClass,
        name === "LoadingIcon" ? "wim-icon--loading" : "",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
      {...props}
    />
  );
};

Icon.propTypes = {
  name: PropTypes.oneOf([
    "CircleIcon",
    "SquareIcon",
    "LoadingIcon",
    "ExternalLinkIcon",
    "CloseIcon",
    "SearchIcon",
    "EyeIcon",
    "EyeOffIcon",
    "ChevronDownIcon",
    "PlayIcon",
    "PauseIcon",
    "VolumeIcon",
    "MuteIcon",
    "ChevronRightIcon",
    "ChevronLeftIcon",
    "CopyIcon",
    "CheckIcon",
    "UploadIcon",
    "MaximizeIcon",
    "MinimizeIcon",
  ]),
  size: PropTypes.oneOf(["small", "medium", "large"]),
  color: PropTypes.oneOf([
    "destructive",
    "positive",
    "caution",
    "informative",
    "primary",
    "secondary",
    "tertiary",
    "disabled",
  ]),
};
