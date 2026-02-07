import React from "react";
import PropTypes from "prop-types";
import "./loader.scss";

export type LoaderVariant = "bars" | "dots" | "pulse";

export type LoaderProps = React.ComponentPropsWithoutRef<"div"> & {
    /**
     * ローダーのアニメーション形式。
     */
    variant?: LoaderVariant;
    /**
     * ローダーのサイズ。
     */
    size?: "sm" | "md" | "lg" | "xl";
    /**
     * ローダーの色。
     */
    color?: "primary" | "secondary" | "success" | "warning" | "error" | "neutral" | "currentColor";
};

/**
 * データの読み込み中や処理中であることを示すためのコンポーネント。
 */
export const Loader = ({
    variant = "bars",
    size = "md",
    color = "primary",
    className = "",
    ...props
}: LoaderProps) => {
    const variantClass = `wim-loader--${variant}`;
    const sizeClass = `wim-loader--${size}`;
    const colorClass = `wim-loader--${color}`;

    return (
        <div
            className={["wim-loader", variantClass, sizeClass, colorClass, className]
                .filter(Boolean)
                .join(" ")}
            role="status"
            aria-live="polite"
            {...props}
        >
            <span className="wim-loader__item"></span>
            <span className="wim-loader__item"></span>
            <span className="wim-loader__item"></span>
        </div>
    );
};

Loader.propTypes = {
    /**
     * ローダーのアニメーション形式。
     */
    variant: PropTypes.oneOf(["bars", "dots", "pulse"]),
    /**
     * ローダーのサイズ。
     */
    size: PropTypes.oneOf(["sm", "md", "lg", "xl"]),
    /**
     * ローダーの色。
     */
    color: PropTypes.oneOf(["primary", "secondary", "success", "warning", "error", "neutral", "currentColor"]),
    /**
     * 追加のクラス名。
     */
    className: PropTypes.string,
};
