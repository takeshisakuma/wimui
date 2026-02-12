import React from "react";
import classNames from "classnames";
import { useTranslation } from "react-i18next";
import "./badge.scss";

type BadgeProps = React.ComponentPropsWithoutRef<"span"> & {
    content?: string;
    icon?: React.ReactNode;
    color?: "primary" | "secondary" | "error" | "neutral";
    variant?: "solid" | "outline";
    size?: "small" | "medium";
};

/**
 * 状態やカウントなどを表示するためのバッジコンポーネント。
 */
export const Badge = ({
    content,
    icon,
    color = "primary",
    variant = "solid",
    size = "medium",
    className,
    ...props
}: BadgeProps) => {
    const { t } = useTranslation();



    return (
        <span
            className={classNames(
                "wim-badge",
                `wim-badge--${color}`,
                `wim-badge--${variant}`,
                `wim-badge--${size === "small" ? "sm" : "md"}`,
                !content && "wim-badge--icon-only",
                className
            )}
            {...props}
        >
            {icon && <span className="wim-badge__icon">{icon}</span>}
            {content && <span>{t(content)}</span>}
        </span>
    );
};


