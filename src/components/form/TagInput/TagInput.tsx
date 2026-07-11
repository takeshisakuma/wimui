import React, { useState, useRef, useId } from "react";
import classNames from "classnames";
import { Tag } from "../../data-display/Tag/Tag";
import { InputBase } from "../InputBase/InputBase";
import { FieldTemplate } from "../FieldTemplate/FieldTemplate";
import { FieldIntent, FieldVariant, FieldWidth } from "../../../types/tokens";
import styles from "./tag-input.module.scss";

export interface TagInputProps extends Omit<React.ComponentPropsWithoutRef<"div">, "onChange"> {
  /** List of tags (controlled) */
  value?: string[];
  /** Initial list of tags (uncontrolled) */
  defaultValue?: string[];
  /** Callback when the tags change */
  onChange?: (tags: string[]) => void;
  /** Placeholder for the input */
  placeholder?: string;
  /** Whether the input is disabled */
  disabled?: boolean;
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
  /** Whether tags can be deleted */
  allowDelete?: boolean;
  /** Maximum number of tags that can be entered */
  maxTags?: number;
}

/**
 * Input component for managing free-form tags.
 * Tags are committed with the Enter key or a comma.
 */
export const TagInput = React.forwardRef<HTMLDivElement, TagInputProps>(
  (
    {
      value,
      defaultValue = [],
      onChange,
      placeholder,
      disabled = false,
      intent = "default",
      variant = "outline",
      fullWidth = false,
      width,
      label,
      error,
      required,
      layout,
      allowDelete = true,
      maxTags,
      className,
      ...props
    },
    ref,
  ) => {
    const [internalTags, setInternalTags] = useState<string[]>(defaultValue);
    const [inputValue, setInputValue] = useState("");
    const inputRef = useRef<HTMLInputElement>(null);

    const isControlled = value !== undefined;
    const tags = isControlled ? value : internalTags;

    const resolvedPlaceholder = placeholder;

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      setInputValue(e.target.value);
    };

    const addTag = (tag: string) => {
      const trimmedTag = tag.trim();
      if (!trimmedTag) return;
      if (tags.includes(trimmedTag)) {
        setInputValue("");
        return;
      }
      if (maxTags && tags.length >= maxTags) return;

      const newTags = [...tags, trimmedTag];
      if (!isControlled) {
        setInternalTags(newTags);
      }
      onChange?.(newTags);
      setInputValue("");
    };

    const removeTag = (tagToRemove: string) => {
      if (disabled || !allowDelete) return;
      const newTags = tags.filter((t) => t !== tagToRemove);
      if (!isControlled) {
        setInternalTags(newTags);
      }
      onChange?.(newTags);
    };

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
      if (e.key === "Enter" || e.key === ",") {
        e.preventDefault();
        addTag(inputValue);
      } else if (e.key === "Backspace" && inputValue === "" && tags.length > 0) {
        removeTag(tags[tags.length - 1]);
      }
    };

    const handleContainerClick = () => {
      inputRef.current?.focus();
    };

    const generatedId = useId();
    const id = props.id || `wim-tag-input-${generatedId}`;
    const errorId = error ? `${id}-error` : undefined;
    const labelId = label ? `${id}-label` : undefined;

    const currentIntent = error ? "danger" : intent;

    return (
      <FieldTemplate
        ref={ref}
        label={label}
        error={error}
        required={required}
        layout={layout}
        labelId={labelId}
        htmlFor={id}
        errorId={errorId}
        className={classNames("wim-tag-input", className)}
      >
        <InputBase
          intent={currentIntent}
          variant={variant}
          fullWidth={fullWidth}
          width={width}
          disabled={disabled}
          className={styles.inputBase}
          styles={{ inner: styles.inputBaseInner }}
        >
          <div
            className={classNames(styles.container, {
              [styles.disabled]: disabled,
            })}
            onClick={handleContainerClick}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                handleContainerClick();
              }
            }}
            role="presentation"
          >
            <div className={styles.tagList}>
              {tags.map((tag) => (
                <Tag
                  key={tag}
                  variant="solid"
                  intent="primary"
                  size="sm"
                  disabled={disabled}
                  onDelete={allowDelete && !disabled ? () => removeTag(tag) : undefined}
                  className={styles.tag}
                >
                  {tag}
                </Tag>
              ))}
              <input
                id={id}
                ref={inputRef}
                type="text"
                value={inputValue}
                onChange={handleInputChange}
                onKeyDown={handleKeyDown}
                disabled={disabled}
                placeholder={tags.length === 0 ? resolvedPlaceholder : ""}
                className={styles.input}
                aria-invalid={currentIntent === "danger"}
                aria-describedby={errorId}
                aria-labelledby={label ? labelId : undefined}
                aria-required={required}
              />
            </div>
          </div>
        </InputBase>
      </FieldTemplate>
    );
  }
);

TagInput.displayName = "TagInput";
