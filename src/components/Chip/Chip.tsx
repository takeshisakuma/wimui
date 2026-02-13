import React from "react";
import classNames from "classnames";
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
    className,
    ...props
}: ChipProps) => {
    const { t } = useTranslation();



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
                    tabIndex={0}
                    onKeyDown={(e) => {
                        if (e.key === "Enter" || e.key === " ") {
                            e.preventDefault();
                            e.stopPropagation();
                            onDelete(e as any);
                        }
                    }}
                >
                    <Icon name="CloseIcon" size="small" />
                </span>
            )}
        </>
    );



    if (onClick) {
        return (
            <button
                type="button"
                className={classNames(
                    "wim-chip",
                    `wim-chip--${color}`,
                    `wim-chip--${variant}`,
                    `wim-chip--${size === "small" ? "sm" : "md"}`,
                    selected && "wim-chip--selected",
                    !disabled && "wim-chip--clickable",
                    className
                )}
                onClick={onClick}
                disabled={disabled}
                {...props}
            >
                {content}
            </button>
        );
    }

    return (
        <span
            className={classNames(
                "wim-chip",
                `wim-chip--${color}`,
                `wim-chip--${variant}`,
                `wim-chip--${size === "small" ? "sm" : "md"}`,
                selected && "wim-chip--selected",
                onClick && !disabled && "wim-chip--clickable",
                className
            )}
            {...props}
        >
            {content}
        </span>
    );
};


