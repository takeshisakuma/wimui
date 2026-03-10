import React from "react";
import classNames from "classnames";
import { Paragraph } from "../Paragraph/Paragraph";
import "./field-error.scss";

type FieldErrorProps = {
  content: string;
  className?: string;
  id?: string;
};

/**
 * 入力フィールドの下に表示するバリデーションエラーメッセージ用のコンポーネント。
 */
export const FieldError = ({
  content,
  className,
  id,
}: FieldErrorProps) => {
  return (
    <div
      id={id}
      className={classNames("wim-field-error", className)}
      role="alert"
      aria-live="polite"
    >
      <Paragraph content={content} color="error" size="small" />
    </div>
  );
};
