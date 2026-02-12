import React from "react";
import classNames from "classnames";
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
    className,
    layout = "horizontal",
    size = "medium",
    border = false,
    ...props
}: DescriptionListProps) => {


    return (
        <dl
            className={classNames(
                "wim-description-list",
                `wim-description-list--${layout}`,
                `wim-description-list--${size}`,
                border && "wim-description-list--border",
                className
            )}
            {...props}
        >
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
    className,
    ...props
}: DescriptionListItemProps) => {
    return (
        <div className={classNames("wim-description-list__item", className)} {...props}>
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
    className,
    ...props
}: DescriptionListTermProps) => {
    const { t } = useTranslation();
    return (
        <dt className={classNames("wim-description-list__term", className)} {...props}>
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
    className,
    ...props
}: DescriptionListDetailsProps) => {
    const { t } = useTranslation();
    return (
        <dd className={classNames("wim-description-list__details", className)} {...props}>
            {typeof children === "string" ? t(children) : children}
        </dd>
    );
};


