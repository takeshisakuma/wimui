import React from "react";
import classNames from "classnames";
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
    className,
}: IndicatorProps) => {




    return (
        <span
            className={classNames(
                "wim-indicator",
                inline && "wim-indicator--inline",
                className
            )}
        >
            {children}
            <span
                className={classNames(
                    "wim-indicator__dot",
                    `wim-indicator__dot--${color}`,
                    `wim-indicator__dot--${size === "small" ? "sm" : size === "large" ? "lg" : "md"}`,
                    !inline && `wim-indicator__dot--${position}`,
                    pulse && "wim-indicator__dot--pulse"
                )}
            />
        </span>
    );
};


