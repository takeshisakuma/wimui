import React from "react";
import classNames from "classnames";
import { ComponentSize } from "../../../types/tokens";
import styles from "./icon.module.scss";
import type { IconName } from "../../../icon";
import {
  registeredIcons,
  warnUnregisteredIcon,
} from "../../../icon/registry";

type IconProps = Omit<React.SVGProps<SVGSVGElement>, "name"> & {
  /** Icon name. Requires `import "wimui/icons"` once at the app entry to register icons. */
  name?: IconName;
  /** Icon component passed directly. Works without registration and is tree-shakable. */
  component?: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  /** Size of the icon */
  size?: ComponentSize;
  /** Apply the loading rotation animation */
  spin?: boolean;
  /** Semantic color of the icon */
  color?:
    | "danger"
    | "success"
    | "warning"
    | "info"
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
  spin,
  className,
  ...props
}: IconProps) => {
  const IconComponent = component || (name ? registeredIcons[name] : null);
  if (!IconComponent) {
    if (name) warnUnregisteredIcon(name);
    return null;
  }

  return (
    <IconComponent
      className={classNames("wim-icon", 
        styles.root,
        size && styles[`size-${size}`],
        color && styles[color],
        (spin ||
          (name && (name === "LoadingIcon" || name === "SpinnerIcon"))) &&
          styles.loading,
        className,
      )}
      {...props}
    />
  );
};
