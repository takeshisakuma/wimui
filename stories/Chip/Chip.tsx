import React from "react";
import PropTypes from "prop-types";
import { useTranslation } from "react-i18next";
import { Icon } from "../Icon/Icon";
import "./chip.scss";

type ChipProps = {
    /** 表示するラベル */
    label: string | React.ReactNode;
    /** クリック時のイベント。提供されるとボタンとして動作します。 */
    onClick?: (e: React.MouseEvent) => void;
    /** 削除時のイベント。提供されると×ボタンが表示されます。 */
    onDelete?: (e: React.MouseEvent) => void;
    /** アバター（画像や頭文字など） */
    avatar?: React.ReactNode;
    /** アイコン */
    icon?: React.ReactNode;
    /** 選択状態 */
    selected?: boolean;
    /** 無効状態 */
    disabled?: boolean;
    /** 色 */
    color?: "primary" | "secondary" | "neutral";
    /** バリアント */
    variant?: "solid" | "outline";
    /** サイズ */
    size?: "small" | "medium";
    /** 追加のクラス名 */
    className?: string;
    /** その他のprops */
    [key: string]: any;
};

/**
 * 選択、フィルタリング、または入力に使用されるインタラクティブなトークン。
 */
export const Chip = ({
    label,
    onClick,
    onDelete,
    avatar,
    icon,
    selected = false,
    disabled = false,
    color = "primary",
    variant = "solid",
    size = "medium",
    className = "",
    ...props
}: ChipProps) => {
    const { t } = useTranslation();

    const colorClass = `wim-chip--${color}`;
    const variantClass = `wim-chip--${variant}`;
    const sizeClass = `wim-chip--${size === "small" ? "sm" : "md"}`;
    const selectedClass = selected ? "wim-chip--selected" : "";
    const clickableClass = onClick && !disabled ? "wim-chip--clickable" : "";

    const content = (
        <>
            {avatar && <span className="wim-chip__avatar">{avatar}</span>}
            {!avatar && icon && <span className="wim-chip__icon">{icon}</span>}
            <span className="wim-chip__label">
                {typeof label === "string" ? t(label) : label}
            </span>
            {onDelete && !disabled && (
                <span
                    className="wim-chip__delete"
                    onClick={(e) => {
                        e.stopPropagation();
                        onDelete(e);
                    }}
                    role="button"
                    aria-label="Delete"
                >
                    <Icon name="CloseIcon" size="small" />
                </span>
            )}
        </>
    );

    const classes = [
        "wim-chip",
        colorClass,
        variantClass,
        sizeClass,
        selectedClass,
        clickableClass,
        className,
    ]
        .filter(Boolean)
        .join(" ");

    if (onClick) {
        return (
            <button
                type="button"
                className={classes}
                onClick={onClick}
                disabled={disabled}
                {...props}
            >
                {content}
            </button>
        );
    }

    return (
        <span className={classes} {...props}>
            {content}
        </span>
    );
};

Chip.propTypes = {
    label: PropTypes.oneOfType([PropTypes.string, PropTypes.node]).isRequired,
    onClick: PropTypes.func,
    onDelete: PropTypes.func,
    avatar: PropTypes.node,
    icon: PropTypes.node,
    selected: PropTypes.bool,
    disabled: PropTypes.bool,
    color: PropTypes.oneOf(["primary", "secondary", "neutral"]),
    variant: PropTypes.oneOf(["solid", "outline"]),
    size: PropTypes.oneOf(["small", "medium"]),
    className: PropTypes.string,
};
