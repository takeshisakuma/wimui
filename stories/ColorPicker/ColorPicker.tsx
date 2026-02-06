import React from "react";
import PropTypes from "prop-types";
import "../Input/input.scss";
import "./colorPicker.scss";

type ColorPickerProps = React.ComponentPropsWithoutRef<"input"> & {
    state?: "default" | "error" | "disabled";
    variant?: "outline" | "ghost";
    fullWidth?: boolean;
};

/**
 * ユーザーが色を選択するためのコンポーネント。
 */
export const ColorPicker = ({
    state = "default",
    variant = "outline",
    fullWidth = false,
    className = "",
    disabled,
    ...props
}: ColorPickerProps) => {
    // disabled prop takes precedence for visual styling
    const effectiveState = disabled ? "disabled" : state;
    const stateClass = `wim-input--${effectiveState}`;
    const variantClass = `wim-input--${variant}`;
    const widthClass = fullWidth ? "wim-input--full-width" : "";

    return (
        <div
            className={[
                "wim-input-container",
                "wim-colorpicker-container",
                widthClass,
                className,
            ]
                .filter(Boolean)
                .join(" ")}
        >
            <input
                type="color"
                className={[
                    "wim-input",
                    "wim-colorpicker",
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

ColorPicker.propTypes = {
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
