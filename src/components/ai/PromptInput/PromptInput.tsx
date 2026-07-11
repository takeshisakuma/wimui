import React, { useCallback } from "react";
import classNames from "classnames";
import { useWimTranslation } from "@/i18n/useWimTranslation";
import { Icon } from "../../media/Icon/Icon";
import { SendIcon, PaperclipIcon } from "@/icon";
import { useAutoResize } from "../../../hooks/useAutoResize";
import { FieldCharacterCount } from "../../_internal/FieldCharacterCount/FieldCharacterCount";
import { FieldTemplate } from "../../form/FieldTemplate";
import styles from "./prompt-input.module.scss";

export interface PromptInputProps extends Omit<React.ComponentPropsWithoutRef<"div">, "onChange" | "onSubmit"> {
  /** Current text value (controlled) */
  value?: string;
  /** Default value (uncontrolled) */
  defaultValue?: string;
  /** Callback when value changes */
  onChange?: (value: string) => void;
  /** Callback when user submits (Enter or button click) */
  onSubmit?: (value: string) => void;
  /** Placeholder text */
  placeholder?: string;
  /** Maximum number of characters */
  maxLength?: number;
  /** Whether the input is disabled */
  disabled?: boolean;
  /** Whether the input is in a loading state */
  loading?: boolean;
  /** Whether to show the attachment button */
  showAttach?: boolean;
  /** Callback when attachment button is clicked */
  onAttach?: () => void;
  /** Maximum number of rows to show before scrolling */
  maxRows?: number;
  /** Whether the input should take up the full width of its container */
  fullWidth?: boolean;
  /** Additional CSS class */
  className?: string;
  /** Label for the field */
  label?: React.ReactNode;
  /** Error message */
  error?: string;
  /** Whether the field is required */
  required?: boolean;
  /** Layout of the field */
  layout?: "vertical" | "horizontal";
}

/**
 * PromptInput is a specialized input for AI prompts, 
 * supporting auto-resizing, file attachments, and submission logic.
 */
export const PromptInput = React.forwardRef<HTMLTextAreaElement, PromptInputProps>(
  (
    {
      value: controlledValue,
      defaultValue = "",
      onChange,
      onSubmit,
      placeholder,
      maxLength,
      disabled = false,
      loading = false,
      showAttach = false,
      onAttach,
      maxRows = 8,
      fullWidth = false,
      className,
      style,
      label,
      error,
      required,
      layout,
      id: customId,
      ...props
    },
    ref
  ) => {
    const { t } = useWimTranslation("form");
    const isControlled = controlledValue !== undefined;
    const [internalValue, setInternalValue] = React.useState(defaultValue);
    const currentValue = isControlled ? controlledValue : internalValue;

    const textareaRef = useAutoResize(currentValue, maxRows);

    // Merge refs
    React.useImperativeHandle(ref, () => textareaRef.current as HTMLTextAreaElement);

    const placeholderText = placeholder;

    const generatedId = React.useId();
    const id = customId || `prompt-input-${generatedId}`;
    const errorId = error ? `${id}-error` : undefined;
    const labelId = label ? `${id}-label` : undefined;

    const handleChange = useCallback(
      (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        const next = e.target.value;
        if (!isControlled) setInternalValue(next);
        onChange?.(next);
      },
      [isControlled, onChange]
    );

    const handleSubmit = useCallback(() => {
      if (!currentValue.trim() || disabled || loading) return;
      onSubmit?.(currentValue.trim());
      if (!isControlled) setInternalValue("");
    }, [currentValue, disabled, loading, isControlled, onSubmit]);

    const handleKeyDown = useCallback(
      (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
        if (e.key === "Enter" && !e.shiftKey) {
          e.preventDefault();
          handleSubmit();
        }
      },
      [handleSubmit]
    );

    const canSubmit = currentValue.trim().length > 0 && !disabled && !loading;

    return (
      <FieldTemplate
        label={label}
        error={error}
        required={required}
        layout={layout}
        labelId={labelId}
        htmlFor={id}
        errorId={errorId}
        className={className}
        style={fullWidth ? { width: "100%", minWidth: 0, ...style } : style}
      >
        <div
          className={classNames("wim-prompt-input", 
            styles.root,
            {
              [styles.disabled]: disabled,
              [styles.loading]: loading,
              [styles.fullWidth]: fullWidth,
              [styles.error]: !!error,
            },
          )}
          {...props}
        >
          <div className={classNames(styles.inputArea, { [styles.noAttach]: !showAttach })}>
            {showAttach && (
              <button
                type="button"
                className={styles.actionButton}
                onClick={onAttach}
                aria-label={t("prompt_input.attach_label")}
                disabled={disabled || loading}
              >
                <Icon component={PaperclipIcon} size="md" />
              </button>
            )}

            <textarea
              id={id}
              ref={textareaRef}
              className={styles.textarea}
              value={currentValue}
              onChange={handleChange}
              onKeyDown={handleKeyDown}
              placeholder={placeholderText}
              rows={1}
              disabled={disabled || loading}
              maxLength={maxLength}
              aria-invalid={!!error}
              aria-describedby={errorId}
              aria-labelledby={label ? labelId : undefined}
              aria-required={required}
            />

            <button
              type="button"
              className={classNames(styles.actionButton, styles.sendButton)}
              onClick={handleSubmit}
              disabled={!canSubmit}
              aria-label={t("prompt_input.send_label")}
            >
              <Icon component={SendIcon} size="md" />
            </button>
          </div>

          <FieldCharacterCount
            count={currentValue.length}
            maxLength={maxLength}
            className={styles.charCount}
          />
        </div>
      </FieldTemplate>
    );
  }
);

PromptInput.displayName = "PromptInput";
