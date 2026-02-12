import React from "react";
import classNames from "classnames";
import { useTranslation } from "react-i18next";
import "./emptystate.scss";

type EmptyStateProps = React.ComponentPropsWithoutRef<"div"> & {
    /**
     * 表示するタイトル（翻訳キーも可）。
     */
    title: string;
    /**
     * 表示する説明文（翻訳キーも可）。
     */
    description?: string;
    /**
     * 表示するアイコン。
     */
    icon?: React.ReactNode;
    /**
     * アクションとして表示する要素（ボタンなど）。
     */
    action?: React.ReactNode;
    /**
     * デザインバリエーション。
     */
    variant?: "default" | "simple";
};

/**
 * データが空の場合や、検索結果がない場合などに表示するプレースホルダーコンポーネント。
 */
export const EmptyState = ({
    title,
    description,
    icon,
    action,
    variant = "default",
    className,
    ...props
}: EmptyStateProps) => {
    const { t } = useTranslation();



    return (
        <div
            className={classNames(
                "wim-empty-state",
                variant !== "default" && `wim-empty-state--${variant}`,
                className
            )}
            {...props}
        >
            {icon && <div className="wim-empty-state__icon">{icon}</div>}
            <h3 className="wim-empty-state__title">{t(title)}</h3>
            {description && (
                <p className="wim-empty-state__description">{t(description)}</p>
            )}
            {action && <div className="wim-empty-state__action">{action}</div>}
        </div>
    );
};


