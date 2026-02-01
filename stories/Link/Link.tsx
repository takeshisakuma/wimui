import React from "react";
import PropTypes from "prop-types";
import "./link.scss";
import { useTranslation } from "react-i18next";
import { Icon } from "../Icon/Icon";

type LinkProps = React.ComponentPropsWithoutRef<"a"> & {
    label?: string;
    size?: "small" | "medium" | "large";
    priority?: "primary" | "secondary" | "tertiary";
    iconName?: "CircleIcon" | "SquareIcon" | "LoadingIcon" | "ExternalLinkIcon";
    iconPosition?: "left" | "right";
    external?: boolean;
};

export const Link = ({
    label,
    size = "medium",
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

    const sizeMap: Record<"small" | "medium" | "large", string> = {
        small: "sm",
        medium: "md",
        large: "lg",
    };
    const sizeClass = `wim-link--${sizeMap[size]}`;
    const priorityClass = `wim-link--${priority}`;

    const iconElement = iconName ? (
        <Icon name={iconName} size={size} />
    ) : null;

    const externalIconElement = external ? (
        <Icon name="ExternalLinkIcon" size={size} className="wim-link__external-icon" />
    ) : null;

    return (
        <a
            className={[
                "wim-link",
                sizeClass,
                priorityClass,
                external ? "wim-link--external" : "",
                className,
            ]
                .filter(Boolean)
                .join(" ")}
            target={external ? "_blank" : target}
            {...props}
        >
            <span className="wim-link__inner">
                {iconName && iconPosition === "left" && iconElement}
                <span className="wim-link__label">
                    {label ? t(label) : children}
                </span>
                {iconName && iconPosition === "right" && iconElement}
                {externalIconElement}
            </span>
        </a>
    );
};

Link.propTypes = {
    label: PropTypes.string,
    size: PropTypes.oneOf(["small", "medium", "large"]),
    priority: PropTypes.oneOf(["primary", "secondary", "tertiary"]),
    iconName: PropTypes.oneOf(["CircleIcon", "SquareIcon", "LoadingIcon", "ExternalLinkIcon"]),
    iconPosition: PropTypes.oneOf(["left", "right"]),
    external: PropTypes.bool,
};
