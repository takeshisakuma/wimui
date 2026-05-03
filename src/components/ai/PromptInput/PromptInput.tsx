import React, { useCallback } from "react";
import classNames from "classnames";
import { useTranslation } from "react-i18next";
import { Icon } from "../../media/Icon/Icon";
import { SendIcon, PaperclipIcon } from "@/icon";
import { useAutoResize } from "../../../hooks/useAutoResize";
import { FieldCharacterCount } from "../../_internal/FieldCharacterCount/FieldCharacterCount";
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
  /** Additional CSS class */
  className?: string;
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
      className,
      ...props
    },
    ref
  ) => {
    const { t } = useTranslation("form");
    const isControlled = controlledValue !== undefined;
    const [internalValue, setInternalValue] = React.useState(defaultValue);
    const currentValue = isControlled ? controlledValue : internalValue;

    const textareaRef = useAutoResize(currentValue, maxRows);

    // Merge refs
    React.useImperativeHandle(ref, () => textareaRef.current as HTMLTextAreaElement);

    const placeholderText = placeholder ?? t("prompt_input.placeholder");

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
      <div
        className={classNames(
          styles.root,
          {
            [styles.disabled]: disabled,
            [styles.loading]: loading,
          },
          className
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
              <Icon component={PaperclipIcon} size="sm" />
            </button>
          )}

          <textarea
            ref={textareaRef}
            className={styles.textarea}
            value={currentValue}
            onChange={handleChange}
            onKeyDown={handleKeyDown}
            placeholder={placeholderText}
            rows={1}
            disabled={disabled || loading}
            maxLength={maxLength}
          />

          <button
            type="button"
            className={classNames(styles.actionButton, styles.sendButton)}
            onClick={handleSubmit}
            disabled={!canSubmit}
            aria-label={t("prompt_input.send_label")}
          >
            <Icon component={SendIcon} size="sm" />
          </button>
        </div>

        <FieldCharacterCount
          count={currentValue.length}
          maxLength={maxLength}
          className={styles.charCount}
        />
      </div>
    );
  }
);

PromptInput.displayName = "PromptInput";
