import React from "react";
import PropTypes from "prop-types";
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
    className = "",
    ...props
}: BadgeProps) => {
    const { t } = useTranslation();

    const colorClass = `wim-badge--${color}`;
    const variantClass = `wim-badge--${variant}`;
    const sizeClass = `wim-badge--${size === "small" ? "sm" : "md"}`;
    const iconOnlyClass = !content ? "wim-badge--icon-only" : "";

    return (
        <span
            className={[`wim-badge`, colorClass, variantClass, sizeClass, iconOnlyClass, className]
                .filter(Boolean)
                .join(" ")}
            {...props}
        >
            {icon && <span className="wim-badge__icon">{icon}</span>}
            {content && <span>{t(content)}</span>}
        </span>
    );
};

Badge.propTypes = {
    /**
     * 表示するテキスト（翻訳キーも可）。アイコンのみの場合は省略可。
     */
    content: PropTypes.string,
    /**
     * 表示するアイコン。
     */
    icon: PropTypes.node,
    /**
     * バッジの色。
     */
    color: PropTypes.oneOf(["primary", "secondary", "error", "neutral"]),
    /**
     * バッジのスタイル。
     */
    variant: PropTypes.oneOf(["solid", "outline"]),
    /**
     * バッジのサイズ。
     */
    size: PropTypes.oneOf(["small", "medium"]),
    /**
     * 追加のクラス名。
     */
    className: PropTypes.string,
};
