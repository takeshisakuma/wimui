import React from "react";
import PropTypes from "prop-types";
import "./fab.scss";
import { useTranslation } from "react-i18next";
import { Icon } from "../Icon/Icon";

type FabProps = React.ComponentPropsWithoutRef<"button"> & {
    size?: "small" | "medium" | "large";
    label?: string;
    iconName: "CircleIcon" | "SquareIcon" | "LoadingIcon" | "ExternalLinkIcon";
    position?: "bottom-right" | "bottom-left" | "top-right" | "top-left" | "bottom-center" | "static";
    "aria-label"?: string;
};

export const Fab = ({
    size = "medium",
    label,
    iconName,
    position = "static",
    "aria-label": ariaLabel,
    className,
    ...props
}: FabProps) => {
    const { t } = useTranslation();

    const sizeMap: Record<"small" | "medium" | "large", string> = {
        small: "sm",
        medium: "md",
        large: "lg",
    };
    const sizeClass = `wim-fab--${sizeMap[size]}`;
    const positionClass = `wim-fab--${position}`;
    const extendedClass = label ? "wim-fab--extended" : "";

    return (
        <button
            type="button"
            className={[
                `wim-fab`,
                sizeClass,
                positionClass,
                extendedClass,
                className,
            ]
                .filter(Boolean)
                .join(" ")}
            aria-label={
                ariaLabel ||
                (label ? t(label) : iconName)
            }
            {...props}
        >
            <span className="wim-fab__inner">
                <Icon name={iconName} size={size} />
                {label && <span className="wim-fab__label">{t(label)}</span>}
            </span>
        </button>
    );
};

Fab.propTypes = {
    size: PropTypes.oneOf(["small", "medium", "large"]),
    label: PropTypes.string,
    iconName: PropTypes.oneOf(["CircleIcon", "SquareIcon", "LoadingIcon", "ExternalLinkIcon"]).isRequired,
    position: PropTypes.oneOf(["bottom-right", "bottom-left", "top-right", "top-left", "bottom-center", "static"]),
    "aria-label": PropTypes.string,
};
