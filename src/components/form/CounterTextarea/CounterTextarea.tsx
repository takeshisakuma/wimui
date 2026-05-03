import React, { useState, useCallback, useEffect } from "react";
import classNames from "classnames";
import { Slot } from "@radix-ui/react-slot";
import { Textarea, TextareaProps } from "../Textarea/Textarea";
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
  /**
   * Whether to render as a child component.
   */
  asChild?: boolean;
};

/**
 * CounterTextarea component adds character counting to the standard Textarea.
 */
export const CounterTextarea = React.forwardRef<HTMLTextAreaElement, CounterTextareaProps>(
  (
    {
      showCount = true,
      counterPosition = "bottom",
      asChild = false,
      maxLength,
      onChange,
      value,
      defaultValue,
      className,
      fullWidth = true,
      children,
      ...props
    },
    ref,
  ) => {
    const Component = asChild ? Slot : Textarea;
    const [count, setCount] = useState(() => {
      const initialValue = value ?? defaultValue ?? "";
      return String(initialValue).length;
    });

    const handleChange = useCallback(
      (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setCount(e.target.value.length);
        onChange?.(e);
      },
      [onChange],
    );

    useEffect(() => {
      if (value !== undefined) {
        setCount(String(value).length);
      }
    }, [value]);

    return (
      <div
        className={classNames(
          styles.container,
          counterPosition === "overlay" && styles["container--overlay"],
          fullWidth && styles.fullWidth,
          className,
        )}
      >
        <Component
          {...props}
          ref={ref}
          value={value}
          defaultValue={defaultValue}
          onChange={handleChange}
          maxLength={maxLength}
          fullWidth={fullWidth}
          className={styles.textarea}
        >
          {children}
        </Component>
        {showCount && (
          <FieldCharacterCount
            count={count}
            maxLength={maxLength}
            className={styles.counter}
          />
        )}
      </div>
    );
  },
);

CounterTextarea.displayName = "CounterTextarea";

