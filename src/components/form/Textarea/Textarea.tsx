import React from "react";
import classNames from "classnames";
import { FieldTemplate } from "../FieldTemplate";
import { WimIntent, FieldVariant } from "../../../types/tokens";
import "./textarea.scss";

type TextareaProps = React.ComponentPropsWithoutRef<"textarea"> & {
  intent?: WimIntent;
  variant?: FieldVariant;
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
      ...props
    },
    ref,
  ) => {
    const isDisabled = disabled;
    const effectiveIntent = isDisabled ? "disabled" : (error ? "error" : intent);

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
            `wim-textarea--${effectiveIntent}`,
            `wim-textarea--${variant}`,
            fullWidth && "wim-textarea--full-width",
            fieldSizing === "content" &&
              "wim-textarea--field-sizing-content",
          )}
          disabled={isDisabled}
          aria-invalid={effectiveIntent === "error"}
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
