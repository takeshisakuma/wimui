import React from "react";
import classNames from "classnames";
import { Slot, Slottable } from "@radix-ui/react-slot";
import { Label } from "../../typography/Label/Label";
import { FieldError } from "../../form/FieldError/FieldError";
import localStyles from "./field-template.module.scss";

export interface FieldTemplateProps extends React.HTMLAttributes<HTMLDivElement> {
  asChild?: boolean;
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
   * ラベルの対象となる要素のID
   */
  htmlFor?: string;
  /**
   * エラー表示用のID
   */
  errorId?: string;
  /**
   * Custom styles for internal parts
   */
  styles?: {
    root?: string;
    labelWrapper?: string;
    label?: string;
    content?: string;
    error?: string;
  };
}

/**
 * フォーム系コンポーネントの共通レイアウト（ラベル、エラー表示、配置）を管理する内部コンポーネント。
 */
export const FieldTemplate = React.forwardRef<HTMLDivElement, FieldTemplateProps>(
  ({ asChild = false, label, error, children, required, layout = "vertical", labelId, htmlFor, errorId, className, styles: stylesProp, ...props }, ref) => {
    const Component = asChild ? Slot : "div";

    return (
      <Component
        className={classNames(localStyles.root, localStyles[layout], className, stylesProp?.root)}
        ref={ref}
        {...props}
      >
        {label && (
          <div className={classNames(localStyles.labelWrapper, stylesProp?.labelWrapper)}>
            <Label label={label} required={required} id={labelId} htmlFor={htmlFor} className={classNames(localStyles.label, stylesProp?.label)} />
          </div>
        )}

        <div className={classNames(localStyles.content, stylesProp?.content)}>
          <Slottable>{children}</Slottable>
          {error && <FieldError id={errorId} content={error} className={classNames(localStyles.error, stylesProp?.error)} />}
        </div>
      </Component>
    );
  },
);

FieldTemplate.displayName = "FieldTemplate";
