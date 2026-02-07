import React from "react";
import PropTypes from "prop-types";
import "./progress.scss";

type ProgressProps = React.ComponentPropsWithoutRef<"div"> & {
    value?: number;
    max?: number;
    color?: "primary" | "secondary" | "success" | "warning" | "error" | "neutral";
    size?: "sm" | "md" | "lg";
    label?: string;
    showValue?: boolean;
    indeterminate?: boolean;
};

/**
 * プログレスバーを表示するためのコンポーネント。
 */
export const Progress = ({
    value = 0,
    max = 100,
    color = "primary",
    size = "md",
    label,
    showValue = false,
    indeterminate = false,
    className = "",
    ...props
}: ProgressProps) => {
    const percentage = Math.min(Math.max((value / max) * 100, 0), 100);

    const colorClass = `wim-progress--${color}`;
    const sizeClass = `wim-progress--${size}`;
    const indeterminateClass = indeterminate ? "wim-progress--indeterminate" : "";

    return (
        <div
            className={[`wim-progress`, sizeClass, colorClass, indeterminateClass, className]
                .filter(Boolean)
                .join(" ")}
            role="progressbar"
            aria-valuenow={indeterminate ? undefined : value}
            aria-valuemin={0}
            aria-valuemax={max}
            {...props}
        >
            {(label || showValue) && (
                <div className="wim-progress__info">
                    {label && <span className="wim-progress__label">{label}</span>}
                    {showValue && !indeterminate && (
                        <span className="wim-progress__value">{Math.round(percentage)}%</span>
                    )}
                </div>
            )}
            <div className="wim-progress__track">
                <div
                    className="wim-progress__bar"
                    style={{ width: indeterminate ? "100%" : `${percentage}%` }}
                />
            </div>
        </div>
    );
};

Progress.propTypes = {
    /**
     * 現在の進捗値。
     */
    value: PropTypes.number,
    /**
     * 最大値。
     */
    max: PropTypes.number,
    /**
     * プログレスバーの色。
     */
    color: PropTypes.oneOf(["primary", "secondary", "success", "warning", "error", "neutral"]),
    /**
     * プログレスバーのサイズ。
     */
    size: PropTypes.oneOf(["sm", "md", "lg"]),
    /**
     * 表示するラベル。
     */
    label: PropTypes.string,
    /**
     * 進捗率（%）を表示するかどうか。
     */
    showValue: PropTypes.bool,
    /**
     * 不確定状態（アニメーション）にするかどうか。
     */
    indeterminate: PropTypes.bool,
    /**
     * 追加のクラス名。
     */
    className: PropTypes.string,
};
