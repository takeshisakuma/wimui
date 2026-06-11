import React, { forwardRef, useCallback, useId } from "react";
import { useWimTranslation } from "@/i18n/useWimTranslation";
import classNames from "classnames";
import { InputBase } from "../InputBase";
import { FieldTemplate } from "../FieldTemplate";
import { useAutoResize } from "../../../hooks/useAutoResize";
import { FieldIntent, FieldVariant, FieldWidth } from "../../../types/tokens";
import { FieldCharacterCount } from "../../_internal/FieldCharacterCount/FieldCharacterCount";
import styles from "./smart-search-input.module.scss";

export interface SmartSearchInputProps extends Omit<React.ComponentPropsWithoutRef<"textarea">, "onChange" | "onSubmit"> {
  intent?: FieldIntent;
  variant?: FieldVariant;
  fullWidth?: boolean;
  width?: FieldWidth | string | number;
  label?: React.ReactNode;
  error?: string;
  required?: boolean;
  layout?: "vertical" | "horizontal";
  maxRows?: number;
  allowClear?: boolean;
  onClear?: () => void;
  onSubmit?: (value: string) => void;
  onChange?: (value: string) => void;
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
      ...props
    },
    ref
  ) => {
    const { t } = useWimTranslation("common");
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

    const currentIntent = error ? "error" : intent;

    return (
      <FieldTemplate
        label={label}
        error={error}
        required={required}
        layout={layout}
        htmlFor={id}
        labelId={labelId}
        errorId={errorId}
        className={classNames(className, fullWidth && styles.fullWidth)}
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
              className={classNames(styles.textarea, styles[variant], disabled && styles.disabled)}
              value={currentValue}
              onChange={handleChange}
              onKeyDown={handleKeyDown}
              placeholder={placeholder ?? t("search.placeholder")}
              rows={1}
              disabled={disabled}
              maxLength={maxLength}
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
