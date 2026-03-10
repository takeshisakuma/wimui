import React from "react";
import classNames from "classnames";
import { useTranslation } from "react-i18next";
import { FieldTemplate } from "../_internal/FieldTemplate";
import "./textarea.scss";

type TextareaProps = React.ComponentPropsWithoutRef<"textarea"> & {
  status?: "default" | "error" | "disabled";
  variant?: "outline" | "ghost";
  fullWidth?: boolean;
  fieldSizing?: "fixed" | "content";
  label?: string;
  error?: string;
  required?: boolean;
  layout?: "vertical" | "horizontal";
};

/**
 * 複数行のテキスト入力を受け付けるコンポーネント。
 */
export const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  (
    {
      status = "default",
      variant = "outline",
      fullWidth = false,
      className,
      disabled,
      label,
      error,
      required,
      layout,
      id: customId,
      ...props
    },
    ref,
  ) => {
    const { t } = useTranslation();
    const isDisabled = disabled || status === "disabled";
    const effectiveStatus = isDisabled ? "disabled" : (error ? "error" : status);

    const generatedId = React.useId();
    const id = customId || `wim-textarea-${generatedId}`;
    const errorId = error ? `${id}-error` : undefined;
    const labelId = label ? `${id}-label` : undefined;

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
            "wim-textarea",
            `wim-textarea--${effectiveStatus}`,
            `wim-textarea--${variant}`,
            fullWidth && "wim-textarea--full-width",
            props.fieldSizing === "content" &&
              "wim-textarea--field-sizing-content",
          )}
          disabled={isDisabled}
          aria-invalid={effectiveStatus === "error"}
          aria-describedby={errorId}
          aria-labelledby={label ? labelId : undefined}
          {...props}
          placeholder={props.placeholder ? t(props.placeholder) : undefined}
          aria-label={props["aria-label"] ? t(props["aria-label"]) : undefined}
        />
      </FieldTemplate>
    );
  },
);

Textarea.displayName = "Textarea";
