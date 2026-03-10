import React from "react";
import classNames from "classnames";
import { useTranslation } from "react-i18next";
import "./textarea.scss";

type TextareaProps = React.ComponentPropsWithoutRef<"textarea"> & {
  status?: "default" | "error" | "disabled";
  variant?: "outline" | "ghost";
  fullWidth?: boolean;
  fieldSizing?: "fixed" | "content";
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
      ...props
    },
    ref,
  ) => {
    const { t } = useTranslation();
    const isDisabled = disabled || status === "disabled";

    return (
      <textarea
        ref={ref}
        className={classNames(
          "wim-textarea",
          `wim-textarea--${isDisabled ? "disabled" : status}`,
          `wim-textarea--${variant}`,
          fullWidth && "wim-textarea--full-width",
          props.fieldSizing === "content" &&
            "wim-textarea--field-sizing-content",
          className,
        )}
        disabled={isDisabled}
        {...props}
        placeholder={props.placeholder ? t(props.placeholder) : undefined}
        aria-label={props["aria-label"] ? t(props["aria-label"]) : undefined}
      />
    );
  },
);

Textarea.displayName = "Textarea";
