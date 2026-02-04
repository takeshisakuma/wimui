import React from "react";
import PropTypes from "prop-types";
import "./textarea.scss";

type TextareaProps = React.ComponentPropsWithoutRef<"textarea"> & {
    state?: "default" | "error" | "disabled";
    variant?: "outline" | "ghost";
    fullWidth?: boolean;
    fieldSizing?: "fixed" | "content";
};

/**
 * 複数行のテキスト入力を受け付けるコンポーネント。
 */
export const Textarea = ({
    state = "default",
    variant = "outline",
    fullWidth = false,
    className = "",
    disabled,
    ...props
}: TextareaProps) => {
    const stateClass = `wim-textarea--${state}`;
    const variantClass = `wim-textarea--${variant}`;
    const widthClass = fullWidth ? "wim-textarea--full-width" : "";

    return (
        <textarea
            className={[
                "wim-textarea",
                stateClass,
                variantClass,
                widthClass,
                props.fieldSizing === "content" ? "wim-textarea--field-sizing-content" : "",
                className,
            ]
                .filter(Boolean)
                .join(" ")}
            disabled={disabled || state === "disabled"}
            {...props}
        />
    );
};

Textarea.propTypes = {
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
    /**
     * テキストエリアのサイズ調整方法。
     */
    fieldSizing: PropTypes.oneOf(["fixed", "content"]),
};
