import React, { useState, useCallback } from "react";
import classNames from "classnames";
import { Textarea, TextareaProps } from "../Textarea/Textarea";
import { FieldTemplate } from "../FieldTemplate/FieldTemplate";
import { FieldCharacterCount } from "../../_internal/FieldCharacterCount/FieldCharacterCount";
import styles from "./counter-textarea.module.scss";

export type CounterTextareaProps = TextareaProps & {
  /**
   * Whether to show the character count.
   * @default true
   */
  showCount?: boolean;
  /**
   * Position of the counter.
   * "bottom" (default) shows it below the textarea.
   * "overlay" shows it inside the textarea (bottom-right).
   * @default "bottom"
   */
  counterPosition?: "bottom" | "overlay";
};

/**
 * CounterTextarea component adds character counting to the standard Textarea.
 */
export const CounterTextarea = React.forwardRef<HTMLTextAreaElement, CounterTextareaProps>(
  (
    {
      showCount = true,
      counterPosition = "bottom",
      maxLength,
      onChange,
      value,
      defaultValue,
      className,
      fullWidth = false,
      children,
      ...props
    },
    ref,
  ) => {
    const [internalValue, setInternalValue] = useState(defaultValue ?? "");
    const currentValue = value !== undefined ? value : internalValue;
    const count = String(currentValue).length;

    const handleChange = useCallback(
      (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        if (value === undefined) {
          setInternalValue(e.target.value);
        }
        onChange?.(e);
      },
      [value, onChange],
    );

    const generatedId = React.useId();
    const id = props.id || `wim-counter-textarea-${generatedId}`;
    const labelId = props.label ? `${id}-label` : undefined;
    const errorId = props.error ? `${id}-error` : undefined;

    return (
      <FieldTemplate
        label={props.label}
        error={props.error}
        required={props.required}
        layout={props.layout}
        labelId={labelId}
        htmlFor={id}
        errorId={errorId}
        className={className}
      >
        <div
          className={classNames(
            styles.container,
            counterPosition === "overlay" && styles["container--overlay"],
            fullWidth && styles.fullWidth,
          )}
        >
          <Textarea
            {...props}
            ref={ref}
            id={id}
            value={value}
            defaultValue={defaultValue}
            onChange={handleChange}
            maxLength={maxLength}
            fullWidth={fullWidth}
            label={undefined}
            error={undefined}
            className={styles.textarea}
            aria-labelledby={labelId}
            aria-describedby={errorId}
          >
            {children}
          </Textarea>
          {showCount && (
            <FieldCharacterCount
              count={count}
              maxLength={maxLength}
              className={styles.counter}
            />
          )}
        </div>
      </FieldTemplate>
    );
  },
);

CounterTextarea.displayName = "CounterTextarea";

