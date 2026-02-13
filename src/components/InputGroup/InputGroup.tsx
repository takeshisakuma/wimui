import React from "react";
import classNames from "classnames";
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
    className,
}: InputGroupProps) => {


    return (
        <div
            className={classNames(
                "wim-input-group",
                fullWidth && "wim-input-group--full-width",
                className
            )}
        >
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
    className,
}: InputGroupTextProps) => {
    return (
        <span className={classNames("wim-input-group-text", className)}>
            {children}
        </span>
    );
};


