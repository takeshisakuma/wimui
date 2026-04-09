import React from "react";
import classNames from "classnames";
import { Slot, Slottable } from "@radix-ui/react-slot";
import { Label } from "../../typography/Label/Label";
import { FieldError } from "../../form/FieldError/FieldError";
import styles from "./field-template.module.scss";

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
   * エラー表示用のID
   */
  errorId?: string;
}

/**
 * フォーム系コンポーネントの共通レイアウト（ラベル、エラー表示、配置）を管理する内部コンポーネント。
 */
export const FieldTemplate = React.forwardRef<HTMLDivElement, FieldTemplateProps>(
  ({ asChild = false, label, error, children, required, layout = "vertical", labelId, errorId, className, ...props }, ref) => {
    const Component = asChild ? Slot : "div";

    return (
      <Component
        className={classNames(styles.root, styles[layout], className)}
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        ref={ref as any}
        {...props}
      >
        {label && (
          <div className={styles.labelWrapper}>
            <Label label={label} required={required} id={labelId} className={styles.label} />
          </div>
        )}
        <div className={styles.content}>
          <Slottable>{children}</Slottable>
          {error && <FieldError id={errorId} content={error} className={styles.error} />}
        </div>
      </Component>
    );
  },
);

FieldTemplate.displayName = "FieldTemplate";
