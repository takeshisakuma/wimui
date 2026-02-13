import React from "react";
import classNames from "classnames";
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
    className,
    ...props
}: SpinnerProps) => {

    return (
        <div
            className={classNames(
                "wim-spinner-container",
                label && `wim-spinner--with-label-${labelPosition}`,
                className
            )}
            role="status"
            aria-live="polite"
            {...props}
        >
            <svg
                className={classNames("wim-spinner", `wim-spinner--${size}`, `wim-spinner--${color}`)}
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


