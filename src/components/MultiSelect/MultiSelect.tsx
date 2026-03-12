import React, { useState, useRef, useEffect, useId } from "react";
import { useTranslation } from "react-i18next";
import classNames from "classnames";
import { Icon } from "../Icon/Icon";
import { Chip } from "../Chip/Chip";
import { BaseListItem } from "../_internal/BaseListItem";
import { InputBase } from "../_internal/InputBase";
import "./multiselect.scss";

import { FieldTemplate } from "../_internal/FieldTemplate";

export type MultiSelectOption = {
  label: string;
  value: string;
  disabled?: boolean;
};

export type MultiSelectProps = {
  options: MultiSelectOption[];
  value?: string[];
  onChange?: (value: string[]) => void;
  placeholder?: string;
  label?: string;
  error?: string;
  required?: boolean;
  layout?: "vertical" | "horizontal";
  className?: string;
  disabled?: boolean;
  defaultValue?: string[];
  /** Whether to show a clear button to remove all selections */
  allowClear?: boolean;
  /** Unique ID for the component */
  id?: string;
};

/**
 * ユーザーが定義済みの選択肢から複数を選択するためのドロップダウンメニュー。
 */
export const MultiSelect = ({
  options = [],
  value,
  onChange,
  placeholder = "Select options...",
  label,
  error,
  required,
  layout,
  className,
  disabled = false,
  defaultValue = [],
  allowClear = false,
  id: customId,
  ...props
}: MultiSelectProps) => {
  const { t } = useTranslation("common");
  const [isOpen, setIsOpen] = useState(false);
  const [internalValue, setInternalValue] = useState<string[]>(defaultValue);
  const [focusedIndex, setFocusedIndex] = useState(-1);
  const containerRef = useRef<HTMLDivElement>(null);
  const listRef = useRef<HTMLUListElement>(null);
  const triggerRef = useRef<HTMLDivElement>(null);
  const generatedId = useId();
  const id = customId || `wim-multiselect-${generatedId}`;
  const listId = `${id}-list`;
  const labelId = label ? `${id}-label` : undefined;
  const errorId = error ? `${id}-error` : undefined;
  const triggerId = `${id}-trigger`;

  const isControlled = value !== undefined;
  const currentValues = isControlled ? value : internalValue;

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

  const handleToggle = (e?: React.MouseEvent) => {
    if (disabled) return;
    if (e && (e.target as HTMLElement).closest(".wim-multiselect-badge-remove"))
      return;

    const nextOpen = !isOpen;
    setIsOpen(nextOpen);
    if (nextOpen) {
      setFocusedIndex(0);
    } else {
      setFocusedIndex(-1);
    }
  };

  const handleSelect = (optionValue: string) => {
    if (disabled) return;

    let newValues: string[];
    if (currentValues?.includes(optionValue)) {
      newValues = currentValues.filter((v) => v !== optionValue);
    } else {
      newValues = [...(currentValues || []), optionValue];
    }

    if (!isControlled) {
      setInternalValue(newValues);
    }

    if (onChange) {
      onChange(newValues);
    }
  };

  const handleRemove = (e: React.MouseEvent, optionValue: string) => {
    e.stopPropagation(); // Stop trigger from toggling
    if (disabled) return;

    const newValues = (currentValues || []).filter((v) => v !== optionValue);

    if (!isControlled) {
      setInternalValue(newValues);
    }

    if (onChange) {
      onChange(newValues);
    }
  };

  const handleClearAll = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (disabled) return;

    if (!isControlled) {
      setInternalValue([]);
    }

    if (onChange) {
      onChange([]);
    }
  };

  const selectedOptions = options.filter((opt) =>
    currentValues?.includes(opt.value),
  );

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (disabled) return;

    switch (e.key) {
      case "ArrowDown":
        e.preventDefault();
        if (!isOpen) {
          setIsOpen(true);
          setFocusedIndex(0);
        } else {
          setFocusedIndex((prev) => (prev < options.length - 1 ? prev + 1 : 0));
        }
        break;
      case "ArrowUp":
        e.preventDefault();
        if (isOpen) {
          setFocusedIndex((prev) => (prev > 0 ? prev - 1 : options.length - 1));
        }
        break;
      case "Enter":
      case " ":
        e.preventDefault();
        if (!isOpen) {
          setIsOpen(true);
          setFocusedIndex(0);
        } else if (focusedIndex >= 0) {
          handleSelect(options[focusedIndex].value);
        }
        break;
      case "Escape":
        if (isOpen) {
          e.preventDefault();
          setIsOpen(false);
          setFocusedIndex(-1);
          triggerRef.current?.focus();
        }
        break;
      case "Home":
        if (isOpen) {
          e.preventDefault();
          setFocusedIndex(0);
        }
        break;
      case "End":
        if (isOpen) {
          e.preventDefault();
          setFocusedIndex(options.length - 1);
        }
        break;
      case "Tab":
        if (isOpen) {
          setIsOpen(false);
          setFocusedIndex(-1);
        }
        break;
    }
  };

  useEffect(() => {
    if (isOpen && focusedIndex >= 0 && listRef.current) {
      const focusedItem = listRef.current.children[focusedIndex] as HTMLElement;
      focusedItem?.scrollIntoView({ block: "nearest" });
    }
  }, [focusedIndex, isOpen]);

  const {
    "aria-label": ariaLabel,
    "aria-labelledby": ariaLabelledBy,
    "aria-describedby": ariaDescribedBy,
    ...wrapperProps
  } = props as any;

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
        className="wim-multiselect"
        ref={containerRef}
        {...wrapperProps}
      >
        <InputBase
          disabled={disabled}
          allowClear={allowClear}
          hasValue={currentValues && currentValues.length > 0}
          onClear={() => handleClearAll({ stopPropagation: () => { } } as any)}
          status={error ? "error" : "default"}
          rightIcons={[{ name: "ChevronDownIcon", rotated: isOpen }]}
          className={classNames(
            isOpen && "wim-multiselect-trigger--open",
          )}
        >
          <div
            id={triggerId}
            className={classNames(
              "wim-multiselect-trigger",
              disabled && "wim-multiselect-trigger--disabled",
            )}
            onClick={handleToggle}
            tabIndex={disabled ? -1 : 0}
            role="combobox"
            aria-expanded={isOpen}
            aria-haspopup="listbox"
            aria-controls={isOpen ? listId : undefined}
            aria-disabled={disabled}
            aria-labelledby={labelId || ariaLabelledBy}
            aria-describedby={errorId || ariaDescribedBy}
            aria-invalid={!!error}
            aria-label={label ? undefined : ariaLabel || placeholder}
            onKeyDown={handleKeyDown}
            ref={triggerRef}
            aria-activedescendant={
              isOpen && focusedIndex >= 0
                ? `${id}-option-${focusedIndex}`
                : undefined
            }
          >
            <div
              className={classNames(
                "wim-multiselect-value",
                selectedOptions.length === 0 &&
                "wim-multiselect-value--placeholder",
              )}
            >
              {selectedOptions.length > 0
                ? selectedOptions.map((opt) => (
                  <Chip
                    key={opt.value}
                    label={opt.label}
                    size="small"
                    color="primary"
                    variant="solid"
                    disabled={disabled}
                    onDelete={
                      !disabled ? (e) => handleRemove(e, opt.value) : undefined
                    }
                    className="wim-multiselect-badge"
                  />
                ))
                : placeholder}
            </div>
          </div>
        </InputBase>

        {isOpen && !disabled && (
          <ul
            id={listId}
            ref={listRef}
            className="wim-multiselect-list"
            role="listbox"
            aria-multiselectable="true"
            aria-labelledby={labelId || ariaLabelledBy || undefined}
          >
            {options.map((option, index) => {
              const isSelected = currentValues?.includes(option.value);
              const isFocused = index === focusedIndex;
              return (
                <BaseListItem
                  as="li"
                  key={option.value}
                  id={`${id}-option-${index}`}
                  className={classNames(
                    "wim-multiselect-option",
                    isSelected && "wim-multiselect-option--selected",
                  )}
                  active={isFocused}
                  disabled={option.disabled}
                  onClick={() => !option.disabled && handleSelect(option.value)}
                  onMouseEnter={() => setFocusedIndex(index)}
                  rightSection={
                    isSelected ? <Icon name="CheckIcon" size="small" /> : undefined
                  }
                  role="option"
                  aria-selected={isSelected}
                  tabIndex={-1}
                >
                  {option.label}
                </BaseListItem>
              );
            })}
          </ul>
        )}
      </div>
    </FieldTemplate>
  );
};
