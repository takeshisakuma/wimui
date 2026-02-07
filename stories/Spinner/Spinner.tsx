import React from "react";
import PropTypes from "prop-types";
import "./spinner.scss";

type SpinnerProps = React.ComponentPropsWithoutRef<"div"> & {
    size?: "sm" | "md" | "lg" | "xl";
    color?: "primary" | "secondary" | "success" | "warning" | "error" | "neutral" | "currentColor";
    label?: string;
    labelPosition?: "right" | "bottom";
};

/**
 * 読み込み中であることを示すための回転するインジケーター。
 */
export const Spinner = ({
    size = "md",
    color = "primary",
    label,
    labelPosition = "right",
    className = "",
    ...props
}: SpinnerProps) => {
    const sizeClass = `wim-spinner--${size}`;
    const colorClass = `wim-spinner--${color}`;
    const positionClass = label ? `wim-spinner--with-label-${labelPosition}` : "";

    return (
        <div
            className={[`wim-spinner-container`, positionClass, className]
                .filter(Boolean)
                .join(" ")}
            role="status"
            aria-live="polite"
            {...props}
        >
            <svg
                className={[`wim-spinner`, sizeClass, colorClass].filter(Boolean).join(" ")}
                viewBox="0 0 50 50"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <circle
                    className="wim-spinner__track"
                    cx="25"
                    cy="25"
                    r="20"
                    stroke="currentColor"
                    strokeWidth="4"
                />
                <circle
                    className="wim-spinner__head"
                    cx="25"
                    cy="25"
                    r="20"
                    stroke="currentColor"
                    strokeWidth="4"
                    strokeLinecap="round"
                    strokeDasharray="126"
                    strokeDashoffset="100"
                />
            </svg>
            {label && <span className="wim-spinner__label">{label}</span>}
        </div>
    );
};

Spinner.propTypes = {
    /**
     * スピナーのサイズ。
     */
    size: PropTypes.oneOf(["sm", "md", "lg", "xl"]),
    /**
     * スピナーの色。
     */
    color: PropTypes.oneOf(["primary", "secondary", "success", "warning", "error", "neutral", "currentColor"]),
    /**
     * 表示するラベル。
     */
    label: PropTypes.string,
    /**
     * ラベルの表示位置。
     */
    labelPosition: PropTypes.oneOf(["right", "bottom"]),
    /**
     * 追加のクラス名。
     */
    className: PropTypes.string,
};
