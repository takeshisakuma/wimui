import React from "react";
import classNames from "classnames";
import { Label } from "../../typography/Label/Label";
import { FieldError } from "../../form/FieldError/FieldError";
import "./field-template.scss";

export type FieldTemplateProps = {
  /**
   * フィールドのラベルテキスト
   */
  label?: React.ReactNode;
  /**
   * エラーメッセージ
   */
  error?: string;
  /**
   * フィールドのメインコンテンツ
   */
  children: React.ReactNode;
  /**
   * 必須表示にするかどうか
   */
  required?: boolean;
  /**
   * レイアウト方向
   * @default "vertical"
   */
  layout?: "vertical" | "horizontal";
  /**
   * アクセシビリティ用のラベルID
   */
  labelId?: string;
  /**
   * エラー表示用のID
   */
  errorId?: string;
  /**
   * カスタムクラス名
   */
  className?: string;
};

/**
 * フォーム系コンポーネントの共通レイアウト（ラベル、エラー表示、配置）を管理する内部コンポーネント。
 */
export const FieldTemplate = ({
  label,
  error,
  children,
  required,
  layout = "vertical",
  labelId,
  errorId,
  className,
}: FieldTemplateProps) => {
  return (
    <div
      className={classNames(
        "wim-field-template",
        `wim-field-template--${layout}`,
        className,
      )}
    >
      {label && (
        <div className="wim-field-template-label-wrapper">
          <Label
            label={label}
            required={required}
            id={labelId}
            className="wim-field-template-label"
          />
        </div>
      )}
      <div className="wim-field-template-content">
        {children}
        {error && (
          <FieldError
            id={errorId}
            content={error}
            className="wim-field-template-error"
          />
        )}
      </div>
    </div>
  );
};
