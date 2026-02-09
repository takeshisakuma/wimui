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
}

export const FloatButton = ({
    iconName = "CircleIcon",
    variant = "default",
    shape = "circle",
    description,
    badge,
    backTop = false,
    visibilityHeight = 400,
    className,
    style,
    onClick,
    ...props
}: FloatButtonProps) => {
    const { t } = useTranslation();
    const [visible, setVisible] = useState(!backTop);

    const handleScroll = useCallback(() => {
        if (backTop) {
            const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
            setVisible(scrollTop > visibilityHeight);
        }
    }, [backTop, visibilityHeight]);

    useEffect(() => {
        if (backTop) {
            window.addEventListener("scroll", handleScroll);
            handleScroll(); // Initial check
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

    const classes = [
        "wim-float-button",
        `wim-float-button--${variant}`,
        `wim-float-button--${shape}`,
        className,
    ].filter(Boolean).join(" ");

    return (
        <button
            type="button"
            className={classes}
            style={style}
            onClick={handleClick}
            title={description ? t(description) : undefined}
            {...props}
        >
            <div className="wim-float-button__inner">
                <Icon
                    name={(backTop ? "ChevronDownIcon" : iconName) as any}
                    size="medium"
                    className={backTop ? "wim-float-button__icon--backtop" : ""}
                />
                {badge && (
                    <span className={badge === true ? "wim-float-button__badge--dot" : "wim-float-button__badge"}>
                        {typeof badge === "number" ? badge : ""}
                    </span>
                )}
            </div>
            {description && <span className="wim-float-button__description">{t(description)}</span>}
        </button>
    );
};

FloatButton.propTypes = {
    iconName: PropTypes.string,
    variant: PropTypes.oneOf(["default", "primary"]),
    shape: PropTypes.oneOf(["circle", "square"]),
    description: PropTypes.string,
    badge: PropTypes.oneOfType([PropTypes.number, PropTypes.bool]),
    backTop: PropTypes.bool,
    visibilityHeight: PropTypes.number,
    className: PropTypes.string,
    style: PropTypes.object,
};

export default FloatButton;
