import React from "react";
import classNames from "classnames";
import "./link.scss";
import { useTranslation } from "react-i18next";
import { Icon } from "../Icon/Icon";
import { ComponentSize } from "../../types/tokens";

type LinkProps = React.ComponentPropsWithoutRef<"a"> & {
  label?: string;
  size?: ComponentSize;
  priority?: "primary" | "secondary" | "tertiary";
  iconName?: React.ComponentProps<typeof Icon>["name"];
  iconPosition?: "left" | "right";
  external?: boolean;
};

export const Link = ({
  label,
  size = "md",
  priority = "primary",
  iconName,
  iconPosition = "left",
  external = false,
  className,
  children,
  target,
  ...props
}: LinkProps) => {
  const { t } = useTranslation();

  return (
    <a
      className={classNames(
        "wim-link",
        `wim-link--${size}`,
        `wim-link--${priority}`,
        external && "wim-link--external",
        className,
      )}
      target={external ? "_blank" : target}
      {...props}
    >
      <span className="wim-link__inner">
        {iconName && iconPosition === "left" && (
          <Icon name={iconName} size={size} />
        )}
        <span className="wim-link__label">{label ? t(label) : children}</span>
        {iconName && iconPosition === "right" && (
          <Icon name={iconName} size={size} />
        )}
        {external && (
          <Icon
            name="ExternalLinkIcon"
            size={size}
            className="wim-link__external-icon"
          />
        )}
      </span>
    </a>
  );
};
