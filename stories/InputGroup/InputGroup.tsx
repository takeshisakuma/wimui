import React from "react";
import PropTypes from "prop-types";
import "./input-group.scss";

type InputGroupProps = {
    children: React.ReactNode;
    fullWidth?: boolean;
    className?: string;
};

/**
 * 複数の入力要素やボタン、テキストを組み合わせて一つのユニットとして表示するコンポーネント。
 */
export const InputGroup = ({
    children,
    fullWidth = false,
    className = "",
}: InputGroupProps) => {
    const containerClass = [
        "wim-input-group",
        fullWidth ? "wim-input-group--full-width" : "",
        className,
    ]
        .filter(Boolean)
        .join(" ");

    return (
        <div className={containerClass}>
            {children}
        </div>
    );
};

type InputGroupTextProps = {
    children: React.ReactNode;
    className?: string;
};

/**
 * InputGroup内でテキストやアイコンを表示するためのアドオンコンポーネント。
 */
export const InputGroupText = ({
    children,
    className = "",
}: InputGroupTextProps) => {
    return (
        <span className={["wim-input-group-text", className].filter(Boolean).join(" ")}>
            {children}
        </span>
    );
};

InputGroup.propTypes = {
    /**
     * グループ化する要素（Input, Button, InputGroupTextなど）。
     */
    children: PropTypes.node.isRequired,
    /**
     * 横幅を100%にするかどうか。
     */
    fullWidth: PropTypes.bool,
    /**
     * 追加のクラス名。
     */
    className: PropTypes.string,
};

InputGroupText.propTypes = {
    /**
     * 表示するテキストやアイコン。
     */
    children: PropTypes.node.isRequired,
    /**
     * 追加のクラス名。
     */
    className: PropTypes.string,
};
