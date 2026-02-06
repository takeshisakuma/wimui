import React from "react";
import PropTypes from "prop-types";
import "../Input/input.scss";
import "./timePicker.scss";

type TimePickerProps = React.ComponentPropsWithoutRef<"input"> & {
    state?: "default" | "error" | "disabled";
    variant?: "outline" | "ghost";
    fullWidth?: boolean;
};

/**
 * ユーザーが時間を選択するためのコンポーネント。
 */
export const TimePicker = ({
    state = "default",
    variant = "outline",
    fullWidth = false,
    className = "",
    disabled,
    ...props
}: TimePickerProps) => {
    // disabled prop takes precedence for visual styling
    const effectiveState = disabled ? "disabled" : state;
    const stateClass = `wim-input--${effectiveState}`;
    const variantClass = `wim-input--${variant}`;
    const widthClass = fullWidth ? "wim-input--full-width" : "";

    return (
        <div
            className={[
                "wim-input-container",
                "wim-timepicker-container",
                widthClass,
                className,
            ]
                .filter(Boolean)
                .join(" ")}
        >
            <input
                type="time"
                className={[
                    "wim-input",
                    "wim-timepicker",
                    stateClass,
                    variantClass,
                    widthClass,
                    className,
                ]
                    .filter(Boolean)
                    .join(" ")}
                disabled={disabled || state === "disabled"}
                {...props}
            />
        </div>
    );
};

TimePicker.propTypes = {
    /**
     * フィールドの状態。
     */
    state: PropTypes.oneOf(["default", "error", "disabled"]),
    /**
     * デザインバリエーション。
     */
    variant: PropTypes.oneOf(["outline", "ghost"]),
    /**
     * 横幅を100%にするかどうか。
     */
    fullWidth: PropTypes.bool,
    /**
     * 追加のクラス名。
     */
    className: PropTypes.string,
};
