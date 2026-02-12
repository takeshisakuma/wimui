import React from "react";
import classNames from "classnames";
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
    className,
    disabled,
    ...props
}: TimePickerProps) => {
    // disabled prop takes precedence for visual styling


    return (
        <div
            className={classNames(
                "wim-input-container",
                "wim-timepicker-container",
                fullWidth && "wim-input--full-width",
                className,
            )}
        >
            <input
                type="time"
                className={classNames(
                    "wim-input",
                    "wim-timepicker",
                    `wim-input--${disabled ? "disabled" : state}`,
                    `wim-input--${variant}`,
                    fullWidth && "wim-input--full-width"
                )}
                disabled={disabled || state === "disabled"}
                {...props}
            />
        </div>
    );
};


