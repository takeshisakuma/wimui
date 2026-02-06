import React from "react";
import PropTypes from "prop-types";
import "./fieldset.scss";

type FieldsetProps = React.ComponentPropsWithoutRef<"fieldset"> & {
    children: React.ReactNode;
    disabled?: boolean;
    variant?: "default" | "full-width";
    className?: string;
};

/**
 * 関連するフォーム要素をグループ化するコンポーネント。
 */
export const Fieldset = ({
    children,
    disabled = false,
    variant = "default",
    className = "",
    ...props
}: FieldsetProps) => {
    return (
        <fieldset
            className={[
                "wim-fieldset",
                `wim-fieldset--${variant}`,
                className,
            ]
                .filter(Boolean)
                .join(" ")}
            disabled={disabled}
            {...props}
        >
            {children}
        </fieldset>
    );
};

Fieldset.propTypes = {
    /**
     * Fieldset 内に表示する要素（Legend や Input 等）。
     */
    children: PropTypes.node.isRequired,
    /**
     * Fieldset 内の全要素を無効化するかどうか。
     */
    disabled: PropTypes.bool,
    /**
     * 表示バリエーション。
     */
    variant: PropTypes.oneOf(["default", "full-width"]),
    /**
     * 追加のクラス名。
     */
    className: PropTypes.string,
};
