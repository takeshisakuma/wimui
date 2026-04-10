import React from "react";
import classNames from "classnames";
import { FieldTemplate } from "../FieldTemplate";
import { FieldIntent, FieldVariant, FieldWidth } from "../../../types/tokens";
import styles from "./textarea.module.scss";

type TextareaProps = React.ComponentPropsWithoutRef<"textarea"> & {
  intent?: FieldIntent;
  variant?: FieldVariant;
  fullWidth?: boolean;
  fieldSizing?: "fixed" | "content";
  label?: string;
  error?: string;
  required?: boolean;
  layout?: "vertical" | "horizontal";
  width?: FieldWidth | string | number;
};

/**
 * 複数行のテキスト入力を受け付けるコンポーネント。
 */
export const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  (
    {
      intent = "default",
      variant = "outline",
      fullWidth = false,
      fieldSizing = "fixed",
      className,
      disabled,
      label,
      error,
      required,
      layout,
      id: customId,
      width,
      ...props
    },
    ref,
  ) => {
    const isDisabled = disabled;
    const currentIntent = error ? "error" : intent;

    const generatedId = React.useId();
    const id = customId || `wim-textarea-${generatedId}`;
    const errorId = error ? `${id}-error` : undefined;
    const labelId = label ? `${id}-label` : undefined;
    const isSemanticWidth =
      typeof width === "string" && ["xs", "sm", "md", "lg", "xl"].includes(width);
    const effectiveHasCustomWidth = width !== undefined && !isSemanticWidth && !fullWidth;
    const effectiveSemanticWidth = isSemanticWidth && !fullWidth ? width : undefined;

    const widthClassName = effectiveSemanticWidth 
      ? styles[`width${effectiveSemanticWidth.charAt(0).toUpperCase()}${effectiveSemanticWidth.slice(1)}`]
      : undefined;

    return (
      <FieldTemplate
        label={label}
        error={error}
        required={required}
        layout={layout}
        labelId={labelId}
        errorId={errorId}
        className={className}
      >
        <textarea
          id={id}
          ref={ref}
          className={classNames(
            styles.root,
            styles[currentIntent],
            isDisabled && styles.disabled,
            styles[variant],
            fullWidth && styles.fullWidth,
            effectiveHasCustomWidth && styles.hasCustomWidth,
            widthClassName,
            fieldSizing === "content" && styles.fieldSizingContent,
          )}
          style={{
            ...(effectiveHasCustomWidth ? {
              "--wim-input-width": typeof width === "number" ? `${width}px` : width,
            } as React.CSSProperties : {}),
            ...props.style,
          }}
          disabled={isDisabled}
          aria-invalid={currentIntent === "error"}
          aria-describedby={errorId}
          aria-labelledby={label ? labelId : undefined}
          {...props}
          placeholder={props.placeholder}
          aria-label={props["aria-label"]}
        />
      </FieldTemplate>
    );
  },
);

Textarea.displayName = "Textarea";
