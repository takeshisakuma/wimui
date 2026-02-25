import React from "react";
import classNames from "classnames";
import "./textarea.scss";

type TextareaProps = React.ComponentPropsWithoutRef<"textarea"> & {
  state?: "default" | "error" | "disabled";
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
      state = "default",
      variant = "outline",
      fullWidth = false,
      className,
      disabled,
      ...props
    },
    ref,
  ) => {
    return (
      <textarea
        ref={ref}
        className={classNames(
          "wim-textarea",
          `wim-textarea--${state}`,
          `wim-textarea--${variant}`,
          fullWidth && "wim-textarea--full-width",
          props.fieldSizing === "content" &&
            "wim-textarea--field-sizing-content",
          className,
        )}
        disabled={disabled || state === "disabled"}
        {...props}
      />
    );
  },
);

Textarea.displayName = "Textarea";
