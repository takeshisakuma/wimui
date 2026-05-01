import React, { useRef, useCallback, useEffect } from "react";
import classNames from "classnames";
import { useTranslation } from "react-i18next";
import { Icon } from "../../media/Icon/Icon";
import { SendIcon, PaperclipIcon } from "@/icon";
import styles from "./prompt-input.module.scss";

export interface PromptInputProps extends Omit<React.ComponentPropsWithoutRef<"div">, "onChange" | "onSubmit"> {
  /** Current text value (controlled) */
  value?: string;
  /** Default text value (uncontrolled) */
  defaultValue?: string;
  /** Called when the text value changes */
  onChange?: (value: string) => void;
  /** Called when the user submits the prompt (Enter key or send button) */
  onSubmit?: (value: string) => void;
  /** Called when the attachment button is clicked */
  onAttach?: () => void;
  /** Placeholder text for the textarea */
  placeholder?: string;
  /** Maximum character length */
  maxLength?: number;
  /** Whether the input is disabled */
  disabled?: boolean;
  /** Whether a response is being generated (blocks submission) */
  loading?: boolean;
  /** Whether to show the attachment button */
  showAttach?: boolean;
  /** Maximum rows before scrolling begins */
  maxRows?: number;
}

/**
 * PromptInput is an auto-resizing prompt input with send and optional attachment actions.
 * Press Enter to submit; Shift+Enter inserts a newline.
 *
 * Composition Contract:
 * - Managed by: App consumption
 * - Scroll lock: No
 */
export const PromptInput = React.forwardRef<HTMLDivElement, PromptInputProps>(
  (
    {
      value: controlledValue,
      defaultValue = "",
      onChange,
      onSubmit,
      onAttach,
      placeholder,
      maxLength,
      disabled = false,
      loading = false,
      showAttach = false,
      maxRows = 8,
      className,
      ...props
    },
    ref
  ) => {
    const { t } = useTranslation("form");
    const textareaRef = useRef<HTMLTextAreaElement>(null);
    const isControlled = controlledValue !== undefined;

    const [internalValue, setInternalValue] = React.useState(defaultValue);
    const currentValue = isControlled ? controlledValue : internalValue;

    const placeholderText = placeholder ?? t("prompt_input.placeholder");

    const resize = useCallback(() => {
      const el = textareaRef.current;
      if (!el) return;
      el.style.height = "auto";
      const lineHeight = parseFloat(getComputedStyle(el).lineHeight) || 24;
      const maxHeight = lineHeight * maxRows;
      el.style.height = `${Math.min(el.scrollHeight, maxHeight)}px`;
      el.style.overflowY = el.scrollHeight > maxHeight ? "auto" : "hidden";
    }, [maxRows]);

    useEffect(() => {
      resize();
    }, [currentValue, resize]);

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
        ref={ref}
        className={classNames(
          styles.root,
          disabled && styles.disabled,
          loading && styles.loading,
          className
        )}
        {...props}
      >
        <div className={styles.inputArea}>
          {showAttach && (
            <button
              type="button"
              className={styles.actionButton}
              onClick={onAttach}
              disabled={disabled || loading}
              aria-label={t("prompt_input.attach_label")}
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
            maxLength={maxLength}
            disabled={disabled || loading}
            rows={1}
            aria-label={t("prompt_input.aria_label")}
            aria-multiline="true"
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
        {maxLength !== undefined && (
          <div className={styles.footer} aria-live="polite" aria-atomic="true">
            <span
              className={classNames(
                styles.charCount,
                currentValue.length >= maxLength && styles.charCountMax
              )}
            >
              {currentValue.length} / {maxLength}
            </span>
          </div>
        )}
      </div>
    );
  }
);

PromptInput.displayName = "PromptInput";
