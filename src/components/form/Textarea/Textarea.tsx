import React from "react";
import classNames from "classnames";
import { FieldTemplate } from "../FieldTemplate";
import { FieldIntent, FieldVariant, FieldWidth } from "../../../types/tokens";
import styles from "./textarea.module.scss";

export type TextareaProps = React.ComponentPropsWithoutRef<"textarea"> & {
  /** Semantic intent of the field (e.g. error state) */
  intent?: FieldIntent;
  /** Visual style variant of the field */
  variant?: FieldVariant;
  /** Whether to take full width of parent */
  fullWidth?: boolean;
  /** Sizing behavior: "fixed" keeps the height, "content" grows with the text */
  fieldSizing?: "fixed" | "content";
  /** Field label */
  label?: string;
  /** Error message */
  error?: string;
  /** Whether to show the required indicator */
  required?: boolean;
  /** Layout direction of label and field */
  layout?: "vertical" | "horizontal";
  /** Fixed width of the field (width token, CSS value, or number in px) */
  width?: FieldWidth | string | number;
};

/**
 * Component for accepting multi-line text input.
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
    const currentIntent = error ? "danger" : intent;

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
          className={classNames("wim-textarea", 
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
          aria-invalid={currentIntent === "danger"}
          aria-describedby={errorId}
          aria-labelledby={label ? labelId : undefined}
          aria-required={required}
          {...props}
          placeholder={props.placeholder}
          aria-label={props["aria-label"]}
        />
      </FieldTemplate>
    );
  },
);

Textarea.displayName = "Textarea";
