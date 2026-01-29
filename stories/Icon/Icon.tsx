import React from "react";
import PropTypes from "prop-types";
import "./icon.scss";

// SVG
import CircleIcon from "./CircleIcon";
import SquareIcon from "./SquareIcon";
import LoadingIcon from "./LoadingIcon";

// アイコン名をコンポーネントにマッピング
const icons = {
  CircleIcon: CircleIcon,
  SquareIcon: SquareIcon,
  LoadingIcon: LoadingIcon,
};

type IconProps = React.SVGProps<SVGSVGElement> & {
  name: "CircleIcon" | "SquareIcon" | "LoadingIcon";
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

export const Icon = ({ name, size = "medium", color, ...props }: IconProps) => {
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
      ]
        .filter(Boolean)
        .join(" ")}
      {...props}
    />
  );
};

Icon.propTypes = {
  name: PropTypes.oneOf(["CircleIcon", "SquareIcon", "LoadingIcon"]),
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
