import React from "react";
import PropTypes from "prop-types";
import "./icon.scss";

// SVG
import CircleIcon from "./CircleIcon";
import SquareIcon from "./SquareIcon";
import LoadingIcon from "./LoadingIcon";
import ExternalLinkIcon from "./ExternalLinkIcon";
import CloseIcon from "./CloseIcon";
import SearchIcon from "./SearchIcon";
import EyeIcon from "./EyeIcon";
import EyeOffIcon from "./EyeOffIcon";
import ChevronDownIcon from "./ChevronDownIcon";
import PlayIcon from "./PlayIcon";
import PauseIcon from "./PauseIcon";
import VolumeIcon from "./VolumeIcon";
import MuteIcon from "./MuteIcon";
import ChevronRightIcon from "./ChevronRightIcon";
import CopyIcon from "./CopyIcon";
import CheckIcon from "./CheckIcon";


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
  CopyIcon: CopyIcon,
  CheckIcon: CheckIcon,
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
  | "CopyIcon"
  | "CheckIcon";
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
    "CopyIcon",
    "CheckIcon",
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
