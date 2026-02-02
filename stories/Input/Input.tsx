import React from "react";
import PropTypes from "prop-types";
import "./input.scss";

type InputProps = React.ComponentPropsWithoutRef<"input"> & {
    state?: "default" | "error" | "disabled";
    variant?: "outline" | "ghost";
    fullWidth?: boolean;
};

/**
 * ユーザーからの入力を受け付けるための基本コンポーネント。
 */
export const Input = ({
    state = "default",
    variant = "outline",
    fullWidth = false,
    className = "",
    disabled,
    ...props
}: InputProps) => {
    const stateClass = `wim-input--${state}`;
    const variantClass = `wim-input--${variant}`;
    const widthClass = fullWidth ? "wim-input--full-width" : "";

    return (
        <input
            className={[
                "wim-input",
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
    );
};

Input.propTypes = {
    /**
     * 入力フィールドの状態。
     */
    state: PropTypes.oneOf(["default", "error", "disabled"]),
    /**
     * 入力フィールドのデザインバリエーション。
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
