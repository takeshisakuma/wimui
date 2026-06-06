import React, { useState, useRef, forwardRef, useId } from "react";
import { Slot, Slottable } from "@radix-ui/react-slot";
import { Textarea } from "../../form/Textarea/Textarea";
import { BaseListItem } from "../../_internal/BaseListItem";
import { mergeRefs } from "../../_internal/mergeRefs";
import styles from "./mentions.module.scss";

type MentionOption = {
  id: string | number;
  display: string;
};

export interface MentionsProps extends Omit<React.ComponentPropsWithoutRef<typeof Textarea>, "onSelect"> {
  options: MentionOption[];
  trigger?: string;
  onSelect?: (option: MentionOption) => void;
  asChild?: boolean;
}

/**
 * テキスト入力中に特定の文字（@など）をトリガーにして候補を表示し、選択できるようにするコンポーネント。
 */
export const Mentions = forwardRef<HTMLDivElement, MentionsProps>(
  (
    {
      options,
      trigger = "@",
      value,
      defaultValue,
      onChange,
      onSelect,
      asChild = false,
      children,
      // TextareaProps custom fields — not valid on a wrapper div
      intent,
      variant,
      fullWidth,
      fieldSizing,
      label,
      error,
      required,
      layout,
      width,
      // Textarea HTML attributes — not valid on a wrapper div
      placeholder,
      rows,
      cols,
      // Clipboard handlers — extracted to avoid double-firing from wrapper and inner textarea
      onCopy,
      onCut,
      onPaste,
      // divProps: only div-compatible attributes remain
      ...divProps
    },
    ref,
  ) => {
    const generatedId = useId();
    const id = divProps.id || `wim-mentions-${generatedId}`;

    const [internalValue, setInternalValue] = useState(defaultValue || "");
    const isControlled = value !== undefined;
    const currentValue = (isControlled ? value : internalValue) as string;

    const [isOpen, setIsOpen] = useState(false);
    const [query, setQuery] = useState("");
    const [cursorPos, setCursorPos] = useState(0);
    const [mentionStart, setMentionStart] = useState(-1);
    const [selectedIndex, setSelectedIndex] = useState(0);

    const textareaRef = useRef<HTMLTextAreaElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);

    // Combine refs
    const combinedRef = mergeRefs(containerRef, ref);

    const filteredOptions = options.filter((opt) =>
      opt.display.toLowerCase().includes(query.toLowerCase()),
    );

    const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
      const newValue = e.target.value;
      const selectionStart = e.target.selectionStart;
      setCursorPos(selectionStart);

      if (!isControlled) {
        setInternalValue(newValue);
      }

      if (onChange) {
        onChange(e);
      }

      // メンション検知
      const textBeforeCursor = newValue.slice(0, selectionStart);
      const lastTriggerIndex = textBeforeCursor.lastIndexOf(trigger);

      if (lastTriggerIndex !== -1) {
        const textAfterTrigger = textBeforeCursor.slice(
          lastTriggerIndex + trigger.length,
        );
        // スペースが含まれる場合はメンション終了とみなす（一般的な挙動）
        if (!textAfterTrigger.includes(" ")) {
          setMentionStart(lastTriggerIndex);
          setQuery(textAfterTrigger);
          setIsOpen(true);
          setSelectedIndex(0);
          return;
        }
      }

      setIsOpen(false);
      setMentionStart(-1);
    };

    const insertMention = (option: MentionOption) => {
      const beforeMention = currentValue.slice(0, mentionStart);
      const afterMention = currentValue.slice(cursorPos);
      const insertedValue = `${beforeMention}${trigger}${option.display} ${afterMention}`;

      if (!isControlled) {
        setInternalValue(insertedValue);
      }

      if (onChange) {
        onChange({
          target: { value: insertedValue },
        } as React.ChangeEvent<HTMLTextAreaElement>);
      }

      if (onSelect) {
        onSelect(option);
      }

      setIsOpen(false);
      setMentionStart(-1);

      // フォーカスを戻し、カーソル位置を調整
      setTimeout(() => {
        if (textareaRef.current) {
          textareaRef.current.focus();
          const newPos =
            beforeMention.length + trigger.length + option.display.length + 1;
          textareaRef.current.setSelectionRange(newPos, newPos);
        }
      }, 0);
    };

    const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
      if (isOpen && filteredOptions.length > 0) {
        if (e.key === "ArrowDown") {
          e.preventDefault();
          setSelectedIndex((prev) =>
            prev >= filteredOptions.length - 1 ? 0 : prev + 1,
          );
        } else if (e.key === "ArrowUp") {
          e.preventDefault();
          setSelectedIndex((prev) =>
            prev <= 0 ? filteredOptions.length - 1 : prev - 1,
          );
        } else if (e.key === "Enter" || e.key === "Tab") {
          if (selectedIndex >= 0 && filteredOptions[selectedIndex]) {
            e.preventDefault();
            insertMention(filteredOptions[selectedIndex]);
          }
        } else if (e.key === "Escape") {
          setIsOpen(false);
        }
      }
    };

    const Component = asChild ? Slot : "div";

    // Textarea receives all its own props; wrapper div receives only divProps
    const textareaOnlyProps = {
      intent, variant, fullWidth, fieldSizing, label, error, required, layout, width,
      placeholder, rows, cols, onCopy, onCut, onPaste,
    };

    // MentionsProps event handlers are typed for HTMLTextAreaElement (via extending TextareaProps).
    // Asserting to HTMLElement (common base for div and Slot) satisfies both union members;
    // bivariance makes ClipboardEventHandler<HTMLTextAreaElement> compatible at runtime.
    const wrapperSpread = (asChild
      ? { ...textareaOnlyProps, ...divProps }
      : divProps
    ) as unknown as React.HTMLAttributes<HTMLElement>;

    return (
      <Component
        className={styles.container}
        ref={combinedRef}
        {...wrapperSpread}
      >
        <Slottable>
          <Textarea
            {...divProps}
            {...textareaOnlyProps}
            ref={textareaRef}
            value={currentValue}
            onChange={handleInputChange}
            onKeyDown={handleKeyDown}
            aria-autocomplete="list"
            aria-expanded={isOpen}
            aria-haspopup="listbox"
            aria-controls={isOpen ? `${id}-list` : undefined}
            onBlur={() => {
              // 少し遅らせないとリストのクリックイベントが拾えない
              setTimeout(() => setIsOpen(false), 200);
            }}
          />
          {isOpen && filteredOptions.length > 0 && (
            <div id={`${id}-list`} className={styles.list} role="listbox">
              {filteredOptions.map((opt, index) => (
                <BaseListItem
                  key={opt.id}
                  className={styles.item}
                  active={index === selectedIndex}
                  onClick={() => insertMention(opt)}
                  onMouseEnter={() => setSelectedIndex(index)}
                  role="option"
                  aria-selected={index === selectedIndex}
                  tabIndex={-1}
                >
                  {opt.display}
                </BaseListItem>
              ))}
            </div>
          )}
        </Slottable>
        {asChild ? children : null}
      </Component>
    );
  },
);

Mentions.displayName = "Mentions";

export default Mentions;
