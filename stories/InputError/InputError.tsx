import React from "react";
import PropTypes from "prop-types";
import { Paragraph } from "../Paragraph/Paragraph";
import "./input-error.scss";

type InputErrorProps = {
    content: string;
    className?: string;
};

/**
 * 入力フィールドの下に表示するバリデーションエラーメッセージ用のコンポーネント。
 */
export const InputError = ({ content, className = "", ...props }: InputErrorProps) => {
    return (
        <div
            className={[`wim-input-error`, className].filter(Boolean).join(" ")}
            role="alert"
            aria-live="polite"
            {...props}
        >
            <Paragraph
                content={content}
                color="error"
                size="small"
            />
        </div>
    );
};

InputError.propTypes = {
    /**
     * 表示するエラーメッセージの翻訳キーまたはテキスト。
     */
    content: PropTypes.string.isRequired,
    /**
     * 追加のクラス名。
     */
    className: PropTypes.string,
};
