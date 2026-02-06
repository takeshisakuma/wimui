import React from "react";
import PropTypes from "prop-types";
import { useTranslation } from "react-i18next";
import "./tag.scss";

type TagProps = React.ComponentPropsWithoutRef<"span"> & {
    /** 表示するテキスト */
    children?: React.ReactNode;
    /** 色 */
    color?: "primary" | "secondary" | "success" | "warning" | "error" | "neutral";
    /** バリアント */
    variant?: "solid" | "outline" | "subtle";
    /** サイズ */
    size?: "small" | "medium";
    /** アイコン */
    icon?: React.ReactNode;
};

/**
 * カテゴリ分けや属性のラベルとして使用される非インタラクティブなコンポーネント。
 */
export const Tag = ({
    children,
    color = "primary",
    variant = "solid",
    size = "medium",
    icon,
    className = "",
    ...props
}: TagProps) => {
    const { t } = useTranslation();

    const colorClass = `wim-tag--${color}`;
    const variantClass = `wim-tag--${variant}`;
    const sizeClass = `wim-tag--${size === "small" ? "sm" : "md"}`;

    return (
        <span
            className={[`wim-tag`, colorClass, variantClass, sizeClass, className]
                .filter(Boolean)
                .join(" ")}
            {...props}
        >
            {icon && <span className="wim-tag__icon">{icon}</span>}
            <span className="wim-tag__content">
                {typeof children === "string" ? t(children) : children}
            </span>
        </span>
    );
};

Tag.propTypes = {
    children: PropTypes.node,
    color: PropTypes.oneOf(["primary", "secondary", "success", "warning", "error", "neutral"]),
    variant: PropTypes.oneOf(["solid", "outline", "subtle"]),
    size: PropTypes.oneOf(["small", "medium"]),
    icon: PropTypes.node,
    className: PropTypes.string,
};
