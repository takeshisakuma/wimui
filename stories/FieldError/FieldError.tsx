import React from "react";
import PropTypes from "prop-types";
import { Paragraph } from "../Paragraph/Paragraph";
import "./field-error.scss";

type FieldErrorProps = {
    content: string;
    className?: string;
};

/**
 * 入力フィールドの下に表示するバリデーションエラーメッセージ用のコンポーネント。
 */
export const FieldError = ({ content, className = "", ...props }: FieldErrorProps) => {
    return (
        <div
            className={[`wim-field-error`, className].filter(Boolean).join(" ")}
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

FieldError.propTypes = {
    /**
     * 表示するエラーメッセージの翻訳キーまたはテキスト。
     */
    content: PropTypes.string.isRequired,
    /**
     * 追加のクラス名。
     */
    className: PropTypes.string,
};
