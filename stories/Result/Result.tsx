import React, { ReactNode } from "react";
import { useTranslation } from "react-i18next";
import { Icon } from "../Icon/Icon";
import "./result.scss";

export type ResultStatus = "success" | "error" | "info" | "warning" | "404" | "403" | "500";

export type ResultProps = {
    /**
     * result status, decide icons and colors
     */
    status?: ResultStatus;
    /**
     * The title
     */
    title?: ReactNode;
    /**
     * The subTitle
     */
    subTitle?: ReactNode;
    /**
     * Operating area
     */
    extra?: ReactNode;
    /**
     * Custom icon
     */
    icon?: ReactNode;
    /**
     * Custom class name
     */
    className?: string;
    /**
     * The children
     */
    children?: ReactNode;
};

const DefaultIcon = ({ status }: { status: ResultStatus }) => {
    switch (status) {
        case "success":
            return <Icon name="CheckIcon" color="positive" size="large" />;
        case "error":
            return <Icon name="CircleIcon" color="destructive" size="large" />;
        case "warning":
            return <Icon name="CircleIcon" color="caution" size="large" />;
        case "info":
            return <Icon name="CircleIcon" color="informative" size="large" />;
        case "404":
        case "403":
        case "500":
            return <Icon name="CircleIcon" color="secondary" size="large" />;
        default:
            return null;
    }
};

export const Result = ({
    status = "info",
    title,
    subTitle,
    extra,
    icon,
    className = "",
    children,
}: ResultProps) => {
    const { t } = useTranslation();

    return (
        <div className={[`wim-result`, `wim-result--${status}`, className].filter(Boolean).join(" ")}>
            <div className="wim-result-icon">
                {icon || <DefaultIcon status={status} />}
            </div>
            {title && (
                <div className="wim-result-title">
                    {typeof title === "string" ? t(title) : title}
                </div>
            )}
            {subTitle && (
                <div className="wim-result-subtitle">
                    {typeof subTitle === "string" ? t(subTitle) : subTitle}
                </div>
            )}
            {extra && <div className="wim-result-extra">{extra}</div>}
            {children && <div className="wim-result-content">{children}</div>}
        </div>
    );
};
