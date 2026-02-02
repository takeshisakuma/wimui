import React from "react";
import PropTypes from "prop-types";
import "./list.scss";
import { useTranslation } from "react-i18next";

type ListProps = {
    as?: "ul" | "ol";
    size?: "small" | "medium" | "large";
    spacing?: "tight" | "normal" | "loose";
    children: React.ReactNode;
    className?: string;
};

export const List = ({
    as: Component = "ul",
    size = "medium",
    spacing = "normal",
    children,
    className = "",
    ...props
}: ListProps) => {
    const sizeMap = {
        small: "sm",
        medium: "md",
        large: "lg",
    };
    const sizeClass = `wim-list--${sizeMap[size]}`;
    const spacingClass = `wim-list--spacing-${spacing}`;

    const containerClass = [
        "wim-list",
        sizeClass,
        spacingClass,
        className,
    ]
        .filter(Boolean)
        .join(" ");

    return (
        <Component className={containerClass} {...props}>
            {children}
        </Component>
    );
};

type ListItemProps = {
    children: React.ReactNode;
    className?: string;
};

export const ListItem = ({
    children,
    className = "",
    ...props
}: ListItemProps) => {
    const { t } = useTranslation();

    const itemClass = ["wim-list__item", className].filter(Boolean).join(" ");

    return (
        <li className={itemClass} {...props}>
            {typeof children === "string" ? t(children) : children}
        </li>
    );
};

List.propTypes = {
    as: PropTypes.oneOf(["ul", "ol"]),
    size: PropTypes.oneOf(["small", "medium", "large"]),
    spacing: PropTypes.oneOf(["tight", "normal", "loose"]),
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
};

ListItem.propTypes = {
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
};
