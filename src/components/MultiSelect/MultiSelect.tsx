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
  const containerRef = useRef<HTMLDivElement>(null);
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

  const handleToggle = (e: React.MouseEvent) => {
    if (disabled) return;
    // Don't toggle if clicking on a remove button in a badge
    if ((e.target as HTMLElement).closest(".wim-multiselect-badge-remove"))
      return;

    setIsOpen(!isOpen);
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
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                handleToggle(e as any);
              }
              if (e.key === "ArrowDown" && !isOpen) {
                e.preventDefault();
                setIsOpen(true);
              }
              if (e.key === "Escape" && isOpen) {
                e.preventDefault();
                setIsOpen(false);
              }
            }}
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
            className="wim-multiselect-list"
            role="listbox"
            aria-multiselectable="true"
            aria-labelledby={labelId || ariaLabelledBy || undefined}
          >
            {options.map((option) => {
              const isSelected = currentValues?.includes(option.value);
              return (
                <BaseListItem
                  as="li"
                  key={option.value}
                  className={classNames(
                    "wim-multiselect-option",
                    isSelected && "wim-multiselect-option--selected",
                  )}
                  disabled={option.disabled}
                  onClick={() => !option.disabled && handleSelect(option.value)}
                  rightSection={
                    isSelected ? <Icon name="CheckIcon" size="small" /> : undefined
                  }
                  role="option"
                  aria-selected={isSelected}
                  tabIndex={0}
                  onKeyDown={(e: React.KeyboardEvent) => {
                    if (
                      (e.key === "Enter" || e.key === " ") &&
                      !option.disabled
                    ) {
                      e.preventDefault();
                      handleSelect(option.value);
                    }
                  }}
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
