import React, { useState, useRef, useEffect, useId } from "react";
import classNames from "classnames";
import { Input } from "../Input/Input";
import "./combobox.scss";

export type ComboboxOption = {
  label: string;
  value: string;
};

export type ComboboxProps = {
  options: ComboboxOption[];
  onSelect?: (option: ComboboxOption) => void;
  placeholder?: string;
  label?: string;
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
  placeholder = "Select...",
  showSearchIcon = true,
  allowClear = true,
  defaultValue = "",
  className,
  disabled = false,
  label,
  id: customId,
  ...props
}: ComboboxProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [inputValue, setInputValue] = useState(defaultValue);
  const [filteredOptions, setFilteredOptions] =
    useState<ComboboxOption[]>(options);
  const [activeIndex, setActiveIndex] = useState(-1);
  const containerRef = useRef<HTMLDivElement>(null);
  const generatedId = useId();
  const id = customId || generatedId;
  const listboxId = `wim-combobox-list-${id}`;
  const labelId = `wim-combobox-label-${id}`;
  const inputId = `wim-combobox-input-${id}`;

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
    if (!isOpen && e.key === "ArrowDown") {
      setIsOpen(true);
      return;
    }

    switch (e.key) {
      case "ArrowDown":
        setActiveIndex((prev) =>
          prev < filteredOptions.length - 1 ? prev + 1 : prev,
        );
        break;
      case "ArrowUp":
        setActiveIndex((prev) => (prev > 0 ? prev - 1 : prev));
        break;
      case "Enter":
        if (activeIndex >= 0 && activeIndex < filteredOptions.length) {
          handleOptionClick(filteredOptions[activeIndex]);
        }
        break;
      case "Escape":
        setIsOpen(false);
        break;
    }
  };

  return (
    <div className={classNames("wim-combobox", className)} ref={containerRef}>
      {label && (
        <label id={labelId} htmlFor={inputId} className="wim-label">
          {label}
        </label>
      )}
      <Input
        id={inputId}
        placeholder={placeholder}
        value={inputValue}
        onChange={handleInputChange}
        onKeyDown={handleKeyDown}
        onFocus={() => setIsOpen(true)}
        leftIcon={showSearchIcon ? "SearchIcon" : undefined}
        rightIcon={allowClear && inputValue ? undefined : "ChevronDownIcon"}
        allowClear={allowClear}
        disabled={disabled}
        autoComplete="off"
        role="combobox"
        aria-autocomplete="list"
        aria-expanded={isOpen}
        aria-controls={isOpen ? listboxId : undefined}
        aria-labelledby={label ? labelId : undefined}
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
          aria-labelledby={label ? labelId : undefined}
        >
          {filteredOptions.map((option, index) => (
            // eslint-disable-next-line jsx-a11y/click-events-have-key-events
            <li
              key={option.value}
              id={`${listboxId}-option-${index}`}
              className={classNames(
                "wim-combobox-option",
                index === activeIndex && "wim-combobox-option--active",
              )}
              onClick={() => handleOptionClick(option)}
              role="option"
              aria-selected={index === activeIndex}
            >
              {option.label}
            </li>
          ))}
        </ul>
      )}
      {isOpen && filteredOptions.length === 0 && (
        <div className="wim-combobox-empty" role="region" aria-live="polite">
          No results found
        </div>
      )}
    </div>
  );
};
