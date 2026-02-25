import React, { useState, useRef } from "react";
import classNames from "classnames";
import { Textarea } from "../Textarea/Textarea";
import "./mentions.scss";

type MentionOption = {
  id: string | number;
  display: string;
};

type MentionsProps = React.ComponentProps<typeof Textarea> & {
  options: MentionOption[];
  trigger?: string;
  onSelect?: (option: MentionOption) => void;
};

/**
 * テキスト入力中に特定の文字（@など）をトリガーにして候補を表示し、選択できるようにするコンポーネント。
 */
export const Mentions = ({
  options,
  trigger = "@",
  value,
  defaultValue,
  onChange,
  onSelect,
  ...props
}: MentionsProps) => {
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
      const dummyEvent = {
        target: { value: insertedValue },
        currentTarget: { value: insertedValue },
      } as unknown as React.ChangeEvent<HTMLTextAreaElement>;
      onChange(dummyEvent);
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
        setSelectedIndex((prev) => (prev + 1) % filteredOptions.length);
      } else if (e.key === "ArrowUp") {
        e.preventDefault();
        setSelectedIndex(
          (prev) =>
            (prev - 1 + filteredOptions.length) % filteredOptions.length,
        );
      } else if (e.key === "Enter" || e.key === "Tab") {
        e.preventDefault();
        insertMention(filteredOptions[selectedIndex]);
      } else if (e.key === "Escape") {
        setIsOpen(false);
      }
    }
  };

  return (
    <div className="wim-mentions-container" ref={containerRef}>
      <Textarea
        {...props}
        ref={textareaRef}
        value={currentValue}
        onChange={handleInputChange}
        onKeyDown={handleKeyDown}
        onBlur={() => {
          // 少し遅らせないとリストのクリックイベントが拾えない
          setTimeout(() => setIsOpen(false), 200);
        }}
      />
      {isOpen && filteredOptions.length > 0 && (
        <div className="wim-mentions-list" role="listbox">
          {filteredOptions.map((opt, index) => (
            // eslint-disable-next-line jsx-a11y/click-events-have-key-events
            <div
              key={opt.id}
              className={classNames(
                "wim-mentions-item",
                index === selectedIndex && "wim-mentions-item--selected",
              )}
              onClick={() => insertMention(opt)}
              role="option"
              aria-selected={index === selectedIndex}
              tabIndex={-1}
            >
              {opt.display}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
