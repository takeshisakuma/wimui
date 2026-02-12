import React from "react";
import classNames from "classnames";
import { Paragraph } from "../Paragraph/Paragraph";
import "./field-error.scss";

type FieldErrorProps = {
    content: string;
    className?: string;
};

/**
 * 入力フィールドの下に表示するバリデーションエラーメッセージ用のコンポーネント。
 */
export const FieldError = ({ content, className, ...props }: FieldErrorProps) => {
    return (
        <div
            className={classNames("wim-field-error", className)}
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


