import React, { useState, useRef, useEffect, useId } from "react";
import classNames from "classnames";
import { Icon } from "../../media/Icon/Icon";
import { Chip } from "../../data-display/Chip/Chip";
import { BaseListItem } from "../../_internal/BaseListItem";
import { InputBase } from "../InputBase";
import styles from "./multiselect.module.scss";
import { FieldTemplate } from "../FieldTemplate";
import { FieldWidth } from "../../../types/tokens";
import { CheckIcon } from "@/icon";

export type MultiSelectOption = {
  label: string;
  value: string;
  disabled?: boolean;
};

export type MultiSelectProps = {
  /** List of options */
  options: MultiSelectOption[];
  /** Selected values (controlled) */
  value?: string[];
  /** Callback when the selection changes */
  onChange?: (value: string[]) => void;
  /** Placeholder shown when nothing is selected */
  placeholder?: string;
  /** Field label */
  label?: string;
  /** Error message */
  error?: string;
  /** Whether to show the required indicator */
  required?: boolean;
  /** Layout direction of label and field */
  layout?: "vertical" | "horizontal";
  /** Additional class names */
  className?: string;
  /** Whether the field is disabled */
  disabled?: boolean;
  /** Initially selected values (uncontrolled) */
  defaultValue?: string[];
  /** Whether to show a clear button to remove all selections */
  allowClear?: boolean;
  /** Unique ID for the component */
  id?: string;
  /** Accessible label for the trigger when no visible label is provided */
  "aria-label"?: string;
  /** ID of the element that labels the field */
  "aria-labelledby"?: string;
  /** ID of the element that describes the field */
  "aria-describedby"?: string;
  /** Fixed width of the field (width token, CSS value, or number in px) */
  width?: FieldWidth | string | number;
  /** Whether to take full width of parent */
  fullWidth?: boolean;
};

/**
 * Dropdown menu for selecting multiple options from a predefined list.
 */
export const MultiSelect = ({
  options = [],
  value,
  onChange,
  placeholder,
  label,
  error,
  required,
  layout,
  className,
  disabled = false,
  defaultValue = [],
  allowClear = false,
  id: customId,
  width,
  fullWidth = false,
  ...props
}: MultiSelectProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [internalValue, setInternalValue] = useState<string[]>(defaultValue);
  const [focusedIndex, setFocusedIndex] = useState(-1);
  const [isKeyboardNavigating, setIsKeyboardNavigating] = useState(false);
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
    if (e && (e.target as HTMLElement).closest("[data-chip-delete]"))
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

  const handleRemove = (e: React.SyntheticEvent, optionValue: string) => {
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

  const handleClearAll = (e?: React.MouseEvent) => {
    e?.stopPropagation();
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
    setIsKeyboardNavigating(true);
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
  } = props;

  return (
    <FieldTemplate
      label={label}
      error={error}
      required={required}
      layout={layout}
      labelId={labelId}
      htmlFor={triggerId}
      errorId={errorId}
      className={className}
    >
      <div
        className={classNames("wim-multi-select", styles.root, fullWidth && styles.fullWidth)}
        ref={containerRef}
        onMouseMove={() => setIsKeyboardNavigating(false)}
        data-keyboard-nav={isKeyboardNavigating}
        {...wrapperProps}
      >
        <InputBase
          disabled={disabled}
          allowClear={allowClear}
          hasValue={currentValues && currentValues.length > 0}
          onClear={handleClearAll}
          intent={error ? "danger" : "default"}
          width={width}
          fullWidth={fullWidth}
          rightIcons={[{ name: "ChevronDownIcon", rotated: isOpen }]}
          className={classNames(
            isOpen && styles.open,
          )}
        >
          <div
            id={triggerId}
            data-testid="multiselect-trigger"
            className={classNames(
              styles.trigger,
              disabled && styles.disabled,
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
            aria-required={required}
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
                styles.value,
                selectedOptions.length === 0 &&
                styles.placeholder,
              )}
            >
              {selectedOptions.length > 0
                ? selectedOptions.map((opt) => (
                  <Chip
                    key={opt.value}
                    data-testid="multiselect-chip"
                    size="sm"
                    /* T123: `color` は `Chip` の prop ではなく、DOM の属性として
                       落ちていただけ（primary は Chip の既定）。選んだ値は普通の値
                       なので neutral を明示する。 */
                    intent="neutral"
                    variant="solid"
                    disabled={disabled}
                    onDelete={
                      !disabled ? (e: React.SyntheticEvent) => handleRemove(e, opt.value) : undefined
                    }
                  >
                    {opt.label}
                  </Chip>
                ))
                : placeholder}
            </div>
          </div>
        </InputBase>

        {isOpen && !disabled && (
          <ul
            id={listId}
            ref={listRef}
            className={styles.list}
            role="listbox"
            aria-multiselectable="true"
            aria-labelledby={labelId || ariaLabelledBy || undefined}
          >
            {options.map((option, index) => {
              const isSelected = currentValues?.includes(option.value);
              const isFocused = index === focusedIndex;
              return (
                <BaseListItem
                  asChild
                  key={option.value}
                  id={`${id}-option-${index}`}
                  className={classNames(
                    styles.option,
                    isSelected && styles.selected,
                  )}
                  active={isFocused}
                  disabled={option.disabled}
                  onClick={() => !option.disabled && handleSelect(option.value)}
                  onMouseEnter={() => setFocusedIndex(index)}
                  rightSection={
                    isSelected ? <Icon component={CheckIcon} size="sm" /> : undefined
                  }
                  role="option"
                  aria-selected={isSelected}
                  tabIndex={-1}
                >
                  <li>{option.label}</li>
                </BaseListItem>
              );
            })}
          </ul>
        )}
      </div>
    </FieldTemplate>
  );
};

MultiSelect.displayName = "MultiSelect";
