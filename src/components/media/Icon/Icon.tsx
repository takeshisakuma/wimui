import React from "react";
import classNames from "classnames";
import { ComponentSize, WimColor } from "../../../types/tokens";
import { getColorValue } from "../../../utilities/style-utils";
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
  /**
   * Colour of the icon. Takes the semantic names — `"danger"`, `"success"`,
   * `"warning"`, `"info"`, `"primary"`, `"secondary"`, `"tertiary"`,
   * `"disabled"` — and, like `Text`, any design token colour name such as
   * `"text-tertiary"`, or any CSS colour value.
   */
  color?: WimColor;
};

/** These resolve through a class; anything else goes through `getColorValue`. */
const SEMANTIC_ICON_COLORS = [
  "danger",
  "success",
  "warning",
  "info",
  "primary",
  "secondary",
  "tertiary",
  "disabled",
];

export const Icon = ({
  name,
  component,
  size = "md",
  color,
  spin,
  className,
  style,
  ...props
}: IconProps) => {
  const IconComponent = component || (name ? registeredIcons[name] : null);
  if (!IconComponent) {
    if (name) warnUnregisteredIcon(name);
    return null;
  }

  const useClassNameForColor =
    typeof color === "string" && SEMANTIC_ICON_COLORS.includes(color);

  return (
    <IconComponent
      style={
        !useClassNameForColor && color
          ? { color: getColorValue(color), ...(style as React.CSSProperties) }
          : style
      }
      className={classNames("wim-icon",
        styles.root,
        size && styles[`size-${size}`],
        useClassNameForColor && styles[color as keyof typeof styles],
        (spin ||
          (name && (name === "LoadingIcon" || name === "SpinnerIcon"))) &&
          styles.loading,
        className,
      )}
      {...props}
    />
  );
};
