import React, { useState, useEffect, useCallback } from "react";
import PropTypes from "prop-types";
import "./float-button.scss";
import { Icon } from "../Icon/Icon";
import { useTranslation } from "react-i18next";

export interface FloatButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    /** Icon name from the library */
    iconName?: "CircleIcon" | "SquareIcon" | "LoadingIcon" | "ExternalLinkIcon" | "ArrowUpIcon" | string;
    /** Variant of the button */
    variant?: "default" | "primary";
    /** Shape of the button */
    shape?: "circle" | "square";
    /** Size of the button */
    size?: "small" | "medium" | "large";
    /** Label text for extended FAB */
    label?: string;
    /** Whether to shrink the extended FAB (hide label) */
    shrink?: boolean;
    /** Position of the button */
    position?: "bottom-right" | "bottom-left" | "bottom-center" | "top-right" | "top-left" | "static";
    /** Description for tooltip */
    description?: string;
    /** Badge content (number or dot) */
    badge?: number | boolean;
    /** If true, the button will scroll to the top of the page when clicked */
    backTop?: boolean;
    /** Visibility threshold for backTop (in pixels) */
    visibilityHeight?: number;
    /** Additional class names */
    className?: string;
    /** Style attribute */
    style?: React.CSSProperties;
    /** Aria label for accessibility */
    "aria-label"?: string;
}

export const FloatButton = ({
    iconName = "CircleIcon",
    variant = "default",
    shape = "circle",
    size = "medium",
    label,
    shrink = false,
    position = "bottom-right",
    description,
    badge,
    backTop = false,
    visibilityHeight = 400,
    className,
    style,
    onClick,
    "aria-label": ariaLabel,
    ...props
}: FloatButtonProps) => {
    const { t } = useTranslation();
    const [visible, setVisible] = useState(() => {
        if (!backTop) return true;
        if (typeof window !== "undefined") {
            const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
            return scrollTop > visibilityHeight;
        }
        return false;
    });

    const handleScroll = useCallback(() => {
        if (backTop) {
            const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
            setVisible(scrollTop > visibilityHeight);
        }
    }, [backTop, visibilityHeight]);

    useEffect(() => {
        if (backTop) {
            window.addEventListener("scroll", handleScroll);
            return () => window.removeEventListener("scroll", handleScroll);
        }
    }, [backTop, handleScroll]);

    const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
        if (backTop) {
            window.scrollTo({
                top: 0,
                behavior: "smooth",
            });
        }
        onClick?.(e);
    };

    if (!visible && backTop) return null;

    const sizeMap: Record<"small" | "medium" | "large", string> = {
        small: "sm",
        medium: "md",
        large: "lg",
    };

    const classes = [
        "wim-float-button",
        `wim-float-button--${variant}`,
        `wim-float-button--${shape}`,
        `wim-float-button--${sizeMap[size]}`,
        `wim-float-button--${position}`,
        label ? "wim-float-button--extended" : "",
        shrink ? "wim-float-button--shrink" : "",
        className,
    ].filter(Boolean).join(" ");

    return (
        <button
            type="button"
            className={classes}
            style={style}
            onClick={handleClick}
            title={description ? t(description) : undefined}
            aria-label={ariaLabel || (label ? t(label) : iconName)}
            {...props}
        >
            <span className="wim-float-button__inner">
                <Icon
                    name={(backTop ? "ChevronDownIcon" : iconName) as any}
                    size={size}
                    className={backTop ? "wim-float-button__icon--backtop" : ""}
                />
                {label && (
                    <span className="wim-float-button__label-wrapper">
                        <span className="wim-float-button__label">{t(label)}</span>
                    </span>
                )}
                {badge && (
                    <span className={badge === true ? "wim-float-button__badge--dot" : "wim-float-button__badge"}>
                        {typeof badge === "number" ? badge : ""}
                    </span>
                )}
            </span>
            {description && <span className="wim-float-button__description">{t(description)}</span>}
        </button>
    );
};

FloatButton.propTypes = {
    iconName: PropTypes.string,
    variant: PropTypes.oneOf(["default", "primary"]),
    shape: PropTypes.oneOf(["circle", "square"]),
    size: PropTypes.oneOf(["small", "medium", "large"]),
    label: PropTypes.string,
    shrink: PropTypes.bool,
    position: PropTypes.oneOf(["bottom-right", "bottom-left", "bottom-center", "top-right", "top-left", "static"]),
    description: PropTypes.string,
    badge: PropTypes.oneOfType([PropTypes.number, PropTypes.bool]),
    backTop: PropTypes.bool,
    visibilityHeight: PropTypes.number,
    className: PropTypes.string,
    style: PropTypes.object,
    "aria-label": PropTypes.string,
};

export default FloatButton;
