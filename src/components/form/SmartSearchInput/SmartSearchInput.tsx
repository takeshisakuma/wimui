import React, { forwardRef, useCallback, useId } from "react";
import classNames from "classnames";
import { useWimTranslation } from "@/i18n/useWimTranslation";
import { InputBase } from "../InputBase";
import { FieldTemplate } from "../FieldTemplate";
import { useAutoResize } from "../../../hooks/useAutoResize";
import { FieldIntent, FieldVariant, FieldWidth } from "../../../types/tokens";
import { FieldCharacterCount } from "../../_internal/FieldCharacterCount/FieldCharacterCount";
import styles from "./smart-search-input.module.scss";

export interface SmartSearchInputProps extends Omit<React.ComponentPropsWithoutRef<"textarea">, "onChange" | "onSubmit"> {
  /** Semantic intent of the field (e.g. error state) */
  intent?: FieldIntent;
  /** Visual style variant of the field */
  variant?: FieldVariant;
  /** Whether to take full width of parent */
  fullWidth?: boolean;
  /** Fixed width of the field (width token, CSS value, or number in px) */
  width?: FieldWidth | string | number;
  /** Field label */
  label?: React.ReactNode;
  /** Error message */
  error?: string;
  /** Whether to show the required indicator */
  required?: boolean;
  /** Layout direction of label and field */
  layout?: "vertical" | "horizontal";
  /** Maximum number of rows the input grows to before scrolling */
  maxRows?: number;
  /** Whether to show a clear button when value is present */
  allowClear?: boolean;
  /** Callback when the clear button is clicked */
  onClear?: () => void;
  /** Callback when the value is submitted with the Enter key */
  onSubmit?: (value: string) => void;
  /** Callback when the value changes */
  onChange?: (value: string) => void;
  /** Initial value (uncontrolled) */
  defaultValue?: string;
  /** Maximum number of characters */
  maxLength?: number;
}

/**
 * A search input that automatically expands into a multiline prompt area
 * when content grows, bridging the gap between standard search and AI prompts.
 */
export const SmartSearchInput = forwardRef<HTMLTextAreaElement, SmartSearchInputProps>(
  (
    {
      intent = "default",
      variant = "outline",
      fullWidth = false,
      width,
      label,
      error,
      required,
      layout,
      maxRows = 8,
      allowClear = true,
      onClear,
      onSubmit,
      onChange,
      value: controlledValue,
      defaultValue = "",
      placeholder,
      disabled,
      className,
      id: customId,
      maxLength,
      "aria-label": ariaLabel,
      ...props
    },
    ref
  ) => {
    const { t } = useWimTranslation("form");
    const isControlled = controlledValue !== undefined;
    const [internalValue, setInternalValue] = React.useState(defaultValue as string);
    const currentValue = isControlled ? (controlledValue as string) : internalValue;

    const textareaRef = useAutoResize(currentValue, maxRows);
    React.useImperativeHandle(ref, () => textareaRef.current as HTMLTextAreaElement);

    const generatedId = useId();
    const id = customId || `smart-search-${generatedId}`;
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
      if (!currentValue.trim() || disabled) return;
      onSubmit?.(currentValue.trim());
    }, [currentValue, disabled, onSubmit]);

    const handleKeyDown = useCallback(
      (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
        if (e.key === "Enter" && !e.shiftKey) {
          e.preventDefault();
          handleSubmit();
        }
      },
      [handleSubmit]
    );

    const handleClear = () => {
      if (!isControlled) setInternalValue("");
      onChange?.("");
      onClear?.();
      textareaRef.current?.focus();
    };

    const currentIntent = error ? "danger" : intent;

    return (
      <FieldTemplate
        label={label}
        error={error}
        required={required}
        layout={layout}
        htmlFor={id}
        labelId={labelId}
        errorId={errorId}
        className={classNames("wim-smart-search-input", className, fullWidth && styles.fullWidth)}
      >
        <div className={styles.container}>
          <InputBase
            intent={currentIntent}
            variant={variant}
            fullWidth={fullWidth}
            width={width}
            disabled={disabled}
            leftIcon="SearchIcon"
            allowClear={allowClear}
            hasValue={!!currentValue}
            onClear={handleClear}
          >
            <textarea
              id={id}
              ref={textareaRef}
              // 無効時は `.textarea:disabled` が持つ（T58）。
              className={classNames(styles.textarea, styles[variant])}
              value={currentValue}
              onChange={handleChange}
              onKeyDown={handleKeyDown}
              placeholder={placeholder}
              rows={1}
              disabled={disabled}
              maxLength={maxLength}
              // label も placeholder も無い利用で名無しにならないよう内蔵ラベル（axe: label）
              aria-label={ariaLabel ?? (label ? undefined : t("smart_search.input_label"))}
              {...props}
            />
          </InputBase>
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

SmartSearchInput.displayName = "SmartSearchInput";
