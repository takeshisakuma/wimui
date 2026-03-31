import React, { useState, useRef, useEffect, useId } from "react";
import { useTranslation } from "react-i18next";
import { Input } from "../../form/Input/Input";
import { BaseListItem } from "../../_internal/BaseListItem";
import "./combobox.scss";

import { FieldTemplate } from "../../_internal/FieldTemplate";

export type ComboboxOption = {
  label: string;
  value: string;
};

export type ComboboxProps = {
  options: ComboboxOption[];
  onSelect?: (option: ComboboxOption) => void;
  placeholder?: string;
  label?: string;
  error?: string;
  required?: boolean;
  layout?: "vertical" | "horizontal";
  showSearchIcon?: boolean;
  allowClear?: boolean;
  defaultValue?: string;
  className?: string;
  disabled?: boolean;
  id?: string;
};

/**
 * 入力とサジェストリストを組み合わせたコンボボックスコンポーネント。
 */
export const Combobox = ({
  options = [],
  onSelect,
  placeholder = "select.option",
  showSearchIcon = true,
  allowClear = true,
  defaultValue = "",
  className,
  disabled = false,
  label,
  error,
  required,
  layout,
  id: customId,
  ...props
}: ComboboxProps) => {
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const [inputValue, setInputValue] = useState(defaultValue);
  const [filteredOptions, setFilteredOptions] =
    useState<ComboboxOption[]>(options);
  const [activeIndex, setActiveIndex] = useState(-1);
  const [isKeyboardNavigating, setIsKeyboardNavigating] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const generatedId = useId();
  const id = customId || `wim-combobox-${generatedId}`;
  const listboxId = `${id}-list`;
  const labelId = label ? `${id}-label` : undefined;
  const errorId = error ? `${id}-error` : undefined;

  // 外部クリックで閉じる
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // 入力値に基づいてフィルタリング
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setInputValue(value);

    const filtered = options.filter((option) =>
      option.label.toLowerCase().includes(value.toLowerCase()),
    );
    setFilteredOptions(filtered);
    setIsOpen(true);
    setActiveIndex(-1);
  };

  const handleOptionClick = (option: ComboboxOption) => {
    setInputValue(option.label);
    setIsOpen(false);
    if (onSelect) {
      onSelect(option);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    setIsKeyboardNavigating(true);
    if (!isOpen && e.key === "ArrowDown") {
      setIsOpen(true);
      return;
    }

    switch (e.key) {
      case "ArrowDown":
        setActiveIndex((prev) =>
          prev < filteredOptions.length - 1 ? prev + 1 : 0
        );
        break;
      case "ArrowUp":
        setActiveIndex((prev) =>
          prev <= 0 ? filteredOptions.length - 1 : prev - 1
        );
        break;
      case "Enter":
        if (activeIndex >= 0 && activeIndex < filteredOptions.length) {
          handleOptionClick(filteredOptions[activeIndex]);
        }
        break;
      case "Escape":
        setIsOpen(false);
        break;
      case "Tab":
        setIsOpen(false);
        break;
    }
  };

  return (
    <FieldTemplate
      label={label}
      error={error}
      required={required}
      layout={layout}
      labelId={labelId}
      errorId={errorId}
      className={className}
    >
      <div
        className="wim-combobox"
        ref={containerRef}
        onMouseMove={() => setIsKeyboardNavigating(false)}
        data-keyboard-nav={isKeyboardNavigating}
      >
        <Input
          id={id}
          placeholder={t(placeholder)}
          value={inputValue}
          onChange={handleInputChange}
          onKeyDown={handleKeyDown}
          onFocus={() => setIsOpen(true)}
          leftIcon={showSearchIcon ? "SearchIcon" : undefined}
          rightIcon="ChevronDownIcon"
          rightIconRotated={isOpen}
          allowClear={allowClear}
          disabled={disabled}
          autoComplete="off"
          role="combobox"
          aria-autocomplete="list"
          aria-expanded={isOpen}
          aria-controls={isOpen ? listboxId : undefined}
          aria-labelledby={labelId}
          aria-describedby={errorId}
          aria-invalid={!!error}
          aria-activedescendant={
            isOpen && activeIndex >= 0
              ? `${listboxId}-option-${activeIndex}`
              : undefined
          }
          {...props}
        />
        {isOpen && filteredOptions.length > 0 && (
          <ul
            id={listboxId}
            className="wim-combobox-list"
            role="listbox"
            aria-labelledby={labelId}
          >
            {filteredOptions.map((option, index) => (
              <BaseListItem
                as="li"
                key={option.value}
                id={`${listboxId}-option-${index}`}
                className="wim-combobox-option"
                active={index === activeIndex}
                onClick={() => handleOptionClick(option)}
                onMouseEnter={() => setActiveIndex(index)}
                role="option"
                aria-selected={index === activeIndex}
              >
                {t(option.label)}
              </BaseListItem>
            ))}
          </ul>
        )}
        {isOpen && filteredOptions.length === 0 && (
          <div className="wim-combobox-empty" role="region" aria-live="polite">
            {t("no.results_found")}
          </div>
        )}
      </div>
    </FieldTemplate>
  );
};
