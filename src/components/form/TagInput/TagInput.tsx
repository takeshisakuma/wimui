import React, { useState, useRef, useId } from "react";
import classNames from "classnames";
import { useWimTranslation } from "@/i18n/useWimTranslation";
import { formNs } from "@/i18n/generated/form";
import { Tag } from "../../data-display/Tag/Tag";
import { InputBase } from "../InputBase/InputBase";
import { FieldTemplate } from "../FieldTemplate/FieldTemplate";
import { HiddenFormValue } from "../../_internal/HiddenFormValue";
import { FieldIntent, FieldVariant, FieldWidth } from "../../../types/tokens";
import styles from "./tag-input.module.scss";

/** タグの区切り: コンマ・改行・タブ（表計算ソフトのセルを貼り付けたとき） */
const TAG_SEPARATOR = /[,\r\n\t]/;

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
  /**
   * Name submitted with a native `<form>`. Each tag is sent as its own hidden input (read them with `FormData.getAll`), and a form reset restores `defaultValue` when uncontrolled.
   */
  name?: string;
  /** Layout direction of label and field */
  layout?: "vertical" | "horizontal";
  /** Whether tags can be deleted */
  allowDelete?: boolean;
  /** Maximum number of tags that can be entered */
  maxTags?: number;
}

/**
 * Input component for managing free-form tags.
 * Tags are committed with the Enter key or a comma. Pasted text is split on commas, line breaks and tabs.
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
      name,
      layout,
      allowDelete = true,
      maxTags,
      className,
      id: customId,
      "aria-label": ariaLabel,
      "aria-labelledby": ariaLabelledBy,
      "aria-describedby": ariaDescribedBy,
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

    // 区切りで分けてタグにする（T409）。打ったときはコンマのキーで分かれるが、貼り付けた文字は 1 つの
    // 値として入り、コンマを含むタグができていた。空と重複は捨て、`maxTags` に入りきらない分は入力欄に残す
    const addTags = (text: string) => {
      const newTags = [...tags];
      const rest: string[] = [];
      for (const piece of text.split(TAG_SEPARATOR)) {
        const tag = piece.trim();
        if (!tag || newTags.includes(tag)) continue;
        if (maxTags && newTags.length >= maxTags) rest.push(tag);
        else newTags.push(tag);
      }
      setInputValue(rest.join(", "));
      if (newTags.length === tags.length) return;
      if (!isControlled) {
        setInternalTags(newTags);
      }
      onChange?.(newTags);
    };

    const handlePaste = (e: React.ClipboardEvent<HTMLInputElement>) => {
      const text = e.clipboardData.getData("text");
      if (!TAG_SEPARATOR.test(text)) return;
      e.preventDefault();
      const input = e.currentTarget;
      const start = input.selectionStart ?? inputValue.length;
      const end = input.selectionEnd ?? inputValue.length;
      addTags(inputValue.slice(0, start) + text + inputValue.slice(end));
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
        addTags(inputValue);
      } else if (e.key === "Backspace" && inputValue === "" && tags.length > 0) {
        removeTag(tags[tags.length - 1]);
      }
    };

    const handleContainerClick = () => {
      inputRef.current?.focus();
    };

    const { t } = useWimTranslation(formNs);
    const generatedId = useId();
    const id = customId || `wim-tag-input-${generatedId}`;
    const errorId = error ? `${id}-error` : undefined;
    const labelId = label ? `${id}-label` : undefined;

    const currentIntent = error ? "danger" : intent;

    return (
      <FieldTemplate
        // 型は `div` の属性を受けるのに、以前はどこにも渡していなかった（T328）。
        // 名前と説明は入力欄へ、残りは根へ。
        {...props}
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
            role="presentation"
          >
            <div className={styles.tagList}>
              {tags.map((tag) => (
                <Tag
                  key={tag}
                  variant="solid"
                  /* T123: 以前は `intent="primary"` 固定で、利用者が
                     DESIGN.md の必須ルール 6（アクセントは 1 画面 1〜2 箇所）と
                     10（普通の値は neutral）を守れなかった。ここに入るのは
                     利用者が打った**普通の値**なので neutral が既定。 */
                  intent="neutral"
                  size="sm"
                  disabled={disabled}
                  // 押したボタンは消えるので、入力欄へ移さないとフォーカスが文書へ落ちる
                  onDelete={
                    allowDelete && !disabled
                      ? () => {
                          removeTag(tag);
                          inputRef.current?.focus();
                        }
                      : undefined
                  }
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
                onPaste={handlePaste}
                disabled={disabled}
                placeholder={tags.length === 0 ? resolvedPlaceholder : ""}
                className={styles.input}
                aria-invalid={currentIntent === "danger"}
                aria-describedby={[ariaDescribedBy, errorId].filter(Boolean).join(" ") || undefined}
                aria-labelledby={label ? labelId : ariaLabelledBy}
                // タグ入力中は placeholder が空になるため、label 未指定でも
                // 内蔵ラベルでアクセシブルネームを保証する（axe: label）
                aria-label={label || ariaLabelledBy ? undefined : (ariaLabel ?? t("tag_input.input_label"))}
                aria-required={required}
              />
            </div>
          </div>
        </InputBase>
        <HiddenFormValue name={name} value={tags} disabled={disabled} onReset={() => { if (!isControlled) setInternalTags(defaultValue); setInputValue(""); }} />
      </FieldTemplate>
    );
  }
);

TagInput.displayName = "TagInput";
