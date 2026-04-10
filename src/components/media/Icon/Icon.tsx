import React from "react";
import classNames from "classnames";
import { ComponentSize } from "../../../types/tokens";
import styles from "./icon.module.scss";
import { ALL_ICONS, IconName } from "../../../icon";

type IconProps = Omit<React.SVGProps<SVGSVGElement>, "name"> & {
  name?: IconName;
  component?: React.FC<React.SVGProps<SVGSVGElement>>;
  size?: ComponentSize;
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

export const Icon = ({
  name,
  component,
  size = "md",
  color,
  className,
  ...props
}: IconProps) => {
  const IconComponent = component || (name ? ALL_ICONS[name] : null);
  if (!IconComponent) return null;

  return (
    <IconComponent
      className={classNames(
        styles.root,
        styles[size],
        color && styles[color],
        name && (name === "LoadingIcon" || name === "SpinnerIcon") &&
          styles.loading,
        className,
      )}
      {...props}
    />
  );
};
