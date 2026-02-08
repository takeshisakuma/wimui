import React from "react";
import PropTypes from "prop-types";
import "./descriptionlist.scss";
import { useTranslation } from "react-i18next";

type DescriptionListProps = {
    children: React.ReactNode;
    className?: string;
    layout?: "horizontal" | "vertical" | "compact";
    size?: "small" | "medium" | "large";
    border?: boolean;
};

export const DescriptionList = ({
    children,
    className = "",
    layout = "horizontal",
    size = "medium",
    border = false,
    ...props
}: DescriptionListProps) => {
    const classes = [
        "wim-description-list",
        `wim-description-list--${layout}`,
        `wim-description-list--${size}`,
        border ? "wim-description-list--border" : "",
        className,
    ]
        .filter(Boolean)
        .join(" ");

    return (
        <dl className={classes} {...props}>
            {children}
        </dl>
    );
};

type DescriptionListItemProps = {
    children: React.ReactNode;
    className?: string;
};

export const DescriptionListItem = ({
    children,
    className = "",
    ...props
}: DescriptionListItemProps) => {
    return (
        <div className={`wim-description-list__item ${className}`} {...props}>
            {children}
        </div>
    );
};

type DescriptionListTermProps = {
    children: React.ReactNode;
    className?: string;
};

export const DescriptionListTerm = ({
    children,
    className = "",
    ...props
}: DescriptionListTermProps) => {
    const { t } = useTranslation();
    return (
        <dt className={`wim-description-list__term ${className}`} {...props}>
            {typeof children === "string" ? t(children) : children}
        </dt>
    );
};

type DescriptionListDetailsProps = {
    children: React.ReactNode;
    className?: string;
};

export const DescriptionListDetails = ({
    children,
    className = "",
    ...props
}: DescriptionListDetailsProps) => {
    const { t } = useTranslation();
    return (
        <dd className={`wim-description-list__details ${className}`} {...props}>
            {typeof children === "string" ? t(children) : children}
        </dd>
    );
};

DescriptionList.propTypes = {
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
    layout: PropTypes.oneOf(["horizontal", "vertical", "compact"]),
    size: PropTypes.oneOf(["small", "medium", "large"]),
    border: PropTypes.bool,
};

DescriptionListItem.propTypes = {
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
};

DescriptionListTerm.propTypes = {
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
};

DescriptionListDetails.propTypes = {
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
};
