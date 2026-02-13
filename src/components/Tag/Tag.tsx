import React from "react";
import classNames from "classnames";
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
    className,
    ...props
}: TagProps) => {
    const { t } = useTranslation();



    return (
        <span
            className={classNames(
                "wim-tag",
                `wim-tag--${color}`,
                `wim-tag--${variant}`,
                `wim-tag--${size === "small" ? "sm" : "md"}`,
                className
            )}
            {...props}
        >
            {icon && <span className="wim-tag__icon">{icon}</span>}
            <span className="wim-tag__content">
                {typeof children === "string" ? t(children) : children}
            </span>
        </span>
    );
};


