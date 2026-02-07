import React from "react";
import PropTypes from "prop-types";
import "./kbd.scss";

export type KbdProps = React.ComponentPropsWithoutRef<"kbd"> & {
    /**
     * キーボードのラベル（または子要素）。
     */
    children: React.ReactNode;
    /**
     * サイズ。
     */
    size?: "sm" | "md";
};

/**
 * ユーザーが入力するキーボードのショートカットやキーを表示するためのコンポーネント。
 */
export const Kbd = ({
    children,
    size = "md",
    className = "",
    ...props
}: KbdProps) => {
    const sizeClass = `wim-kbd--${size}`;

    return (
        <kbd
            className={["wim-kbd", sizeClass, className].filter(Boolean).join(" ")}
            {...props}
        >
            {children}
        </kbd>
    );
};

Kbd.propTypes = {
    /**
     * キーボードのラベル（または子要素）。
     */
    children: PropTypes.node.isRequired,
    /**
     * サイズ。
     */
    size: PropTypes.oneOf(["sm", "md"]),
    /**
     * 追加のクラス名。
     */
    className: PropTypes.string,
};
