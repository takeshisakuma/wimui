import React from "react";
import PropTypes from "prop-types";
import "./indicator.scss";

type IndicatorProps = {
    children?: React.ReactNode;
    color?: "primary" | "success" | "error" | "warning" | "neutral";
    size?: "small" | "medium" | "large";
    position?: "top-right" | "top-left" | "bottom-right" | "bottom-left";
    pulse?: boolean;
    inline?: boolean;
    className?: string;
};

/**
 * 要素の状態（オンライン、未読、エラーなど）を示す小さなドットコンポーネント。
 */
export const Indicator = ({
    children,
    color = "primary",
    size = "medium",
    position = "top-right",
    pulse = false,
    inline = false,
    className = "",
}: IndicatorProps) => {
    const sizeMap = {
        small: "sm",
        medium: "md",
        large: "lg",
    };

    const dotClass = [
        "wim-indicator__dot",
        `wim-indicator__dot--${color}`,
        `wim-indicator__dot--${sizeMap[size]}`,
        !inline ? `wim-indicator__dot--${position}` : "",
        pulse ? "wim-indicator__dot--pulse" : "",
    ]
        .filter(Boolean)
        .join(" ");

    const containerClass = [
        "wim-indicator",
        inline ? "wim-indicator--inline" : "",
        className,
    ]
        .filter(Boolean)
        .join(" ");

    return (
        <span className={containerClass}>
            {children}
            <span className={dotClass} />
        </span>
    );
};

Indicator.propTypes = {
    /** 包む要素（inlineがfalseの場合） */
    children: PropTypes.node,
    /** インジケーターの色 */
    color: PropTypes.oneOf(["primary", "success", "error", "warning", "neutral"]),
    /** インジケーターのサイズ */
    size: PropTypes.oneOf(["small", "medium", "large"]),
    /** 配置場所（childrenがある場合のみ有効） */
    position: PropTypes.oneOf(["top-right", "top-left", "bottom-right", "bottom-left"]),
    /** パルスアニメーションを有効にするか */
    pulse: PropTypes.bool,
    /** 単体（ドットのみ）で表示するか */
    inline: PropTypes.bool,
    /** 追加のクラス名 */
    className: PropTypes.string,
};
