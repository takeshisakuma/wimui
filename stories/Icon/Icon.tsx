import React from "react";
import PropTypes from "prop-types";
import "./icon.scss";

// SVG
import CircleIcon from "./CircleIcon";
import SquareIcon from "./SquareIcon";

// アイコン名をコンポーネントにマッピング
const icons = {
  CircleIcon: CircleIcon,
  SquareIcon: SquareIcon,
};

type IconProps = React.SVGProps<SVGSVGElement> & {
  name: "CircleIcon" | "SquareIcon";
  size?: "small" | "medium" | "large";
  color?:
    | "semantic-danger"
    | "semantic-success"
    | "semantic-warning"
    | "semantic-primary"
    | "semantic-secondary";
};

export const Icon = ({ name, size = "medium", color, ...props }: IconProps) => {
  if (!name) return null;
  const IconComponent = icons[name];
  if (!IconComponent) return null;

  const colorClass = color ? `wim-icon--${color.replace("semantic-", "")}` : "";
  const sizeMap = { small: "xs", medium: "md", large: "lg" };
  const sizeClass = `wim-icon--${sizeMap[size] || "md"}`;

  return (
    <IconComponent
      className={[`wim-icon`, sizeClass, colorClass].filter(Boolean).join(" ")}
      {...props}
    />
  );
};

Icon.propTypes = {
  name: PropTypes.oneOf(["CircleIcon", "SquareIcon"]),
  size: PropTypes.oneOf(["small", "medium", "large"]),
  color: PropTypes.oneOf([
    "semantic-danger",
    "semantic-success",
    "semantic-warning",
    "semantic-primary",
    "semantic-secondary",
  ]),
};
