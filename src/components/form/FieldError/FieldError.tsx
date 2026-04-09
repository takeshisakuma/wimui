import React from "react";
import classNames from "classnames";
import { Paragraph } from "../../typography/Paragraph/Paragraph";
import styles from "./field-error.module.scss";

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
      className={classNames(styles.root, className)}
      role="alert"
      aria-live="polite"
    >
      <Paragraph content={content} color="error" size="sm" />
    </div>
  );
};
