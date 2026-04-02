import React, { useId } from "react";
import classNames from "classnames";
import { Transition } from "../../misc/Transition/Transition";
import { BaseListItem } from "../../misc/BaseListItem";
import "./selectbox.scss";
import { useSelectbox } from "./useSelectbox";

export type SelectboxOption = {
  label?: React.ReactNode;
  value?: string;
  disabled?: boolean;
  group?: string;
  type?: "option" | "separator";
};

export type SelectboxOptionGroup = {
  label: React.ReactNode;
  options: SelectboxOption[];
};

export type SelectboxProps = {
  options: SelectboxOption[] | SelectboxOptionGroup[];
  value?: string;
  onChange?: (value: string) => void;
  placeholder?: React.ReactNode;
  label?: string;
  className?: string;
  disabled?: boolean;
  defaultValue?: string;
  /** Enable search/filtering functionality */
  searchable?: boolean;
  /** Placeholder text for search input */
  searchPlaceholder?: string;
  /** Custom filter function */
  filterOption?: (option: SelectboxOption, searchValue: string) => boolean;
  /** Whether options are grouped */
  grouped?: boolean;
  /** Whether to show a clear button when a value is selected */
  allowClear?: boolean;
  /** Whether to take full width of parent */
  fullWidth?: boolean;
  /** Unique ID for the component */
  id?: string;
  error?: string;
  required?: boolean;
  layout?: "vertical" | "horizontal";
  "aria-label"?: string;
  "aria-labelledby"?: string;
  "aria-describedby"?: string;
  noOptionsFoundLabel?: string;
};

import { FieldTemplate } from "../FieldTemplate";
import { InputBase } from "../InputBase";

/**
 * ユーザーが定義済みの選択肢から1つを選択するためのプルダウンメニュー。
 */
export const Selectbox = ({
  options = [],
  value,
  onChange,
  placeholder = "Select an option",
  label,
  error,
  required,
  layout,
  className,
  disabled = false,
  defaultValue,
  searchable = false,
  searchPlaceholder = "Search...",
  filterOption,
  grouped = false,
  allowClear = false,
  fullWidth = false,
  id: customId,
  noOptionsFoundLabel = "No options found",
  ...props
}: SelectboxProps) => {
  const generatedId = useId();
  const id = customId || `wim-selectbox-${generatedId}`;
  const labelId = label ? `${id}-label` : undefined;
  const errorId = error ? `${id}-error` : undefined;
  const listId = `${id}-list`;
  const triggerId = `${id}-trigger`;

  const {
    isOpen,
    searchValue,
    setSearchValue,
    focusedIndex,
    setFocusedIndex,
    isKeyboardNavigating,
    setIsKeyboardNavigating,
    containerRef,
    triggerRef,
    searchInputRef,
    listItemsRef,
    currentValue,
    filteredOptions,
    selectedOption,
    focusedOption,
    handleToggle,
    handleSelect,
    handleClear,
    handleKeyDown,
  } = useSelectbox({
    options,
    value,
    onChange,
    defaultValue,
    searchable,
    grouped,
    disabled,
    filterOption,
  });

  const renderOptions = () => {
    let flatIndex = 0;
    if (grouped && options.length > 0 && "options" in options[0]) {
      const groups = options as SelectboxOptionGroup[];

      return groups.map((group, groupIndex) => {
        const groupOptionsFiltered = group.options.filter(
          (opt) =>
            opt.type === "separator" ||
            !searchValue ||
            (
              filterOption ||
              ((o, s) =>
                (typeof o.label === "string" ? o.label : "").toLowerCase().includes(s.toLowerCase()))
            )(opt, searchValue),
        );

        if (groupOptionsFiltered.length === 0) return null;

        return (
          <React.Fragment key={groupIndex}>
            <li className="wim-selectbox-group-label" role="presentation">
              {group.label}
            </li>
            {groupOptionsFiltered.map((option, optIdx) => {
              const index = flatIndex++;
              if (option.type === "separator") {
                return (
                  <li
                    key={`sep-${groupIndex}-${optIdx}`}
                    className="wim-selectbox-separator"
                    role="presentation"
                  />
                );
              }

              const isFocused = index === focusedIndex;
              const isSelected = currentValue === option.value;
              const optionId = `wim-selectbox-option-${id}-${option.value}`;

              return (
                <BaseListItem
                  as="li"
                  key={option.value}
                  id={optionId}
                  ref={(el) => {
                    listItemsRef.current[index] = el;
                  }}
                  active={isFocused}
                  disabled={option.disabled}
                  className={classNames(
                    "wim-selectbox-option",
                    isSelected && "wim-selectbox-option--selected",
                  )}
                  onClick={(e: React.MouseEvent) => {
                    e.stopPropagation();
                    handleSelect(option);
                  }}
                  onMouseEnter={() => setFocusedIndex(index)}
                  role="option"
                  aria-selected={isSelected}
                >
                  {option.label}
                </BaseListItem>
              );
            })}
          </React.Fragment>
        );
      });
    }

    return filteredOptions.map((option, index) => {
      const itemIndex = flatIndex++;
      if (option.type === "separator") {
        return (
          <li
            key={`sep-${index}`}
            className="wim-selectbox-separator"
            role="presentation"
          />
        );
      }

      const isFocused = itemIndex === focusedIndex;
      const isSelected = currentValue === option.value;
      const optionId = `wim-selectbox-option-${id}-${option.value}`;

      return (
        <BaseListItem
          as="li"
          key={option.value}
          id={optionId}
          ref={(el) => {
            listItemsRef.current[itemIndex] = el;
          }}
          active={isFocused}
          disabled={option.disabled}
          className={classNames(
            "wim-selectbox-option",
            isSelected && "wim-selectbox-option--selected",
          )}
          onClick={(e: React.MouseEvent) => {
            e.stopPropagation();
            handleSelect(option);
          }}
          onMouseEnter={() => setFocusedIndex(itemIndex)}
          role="option"
          aria-selected={isSelected}
        >
          {option.label}
        </BaseListItem>
      );
    });
  };

  const activeDescendant =
    focusedOption && focusedOption.type !== "separator"
      ? `wim-selectbox-option-${id}-${focusedOption.value}`
      : undefined;

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
      errorId={errorId}
      className={className}
    >
      <div
        className={classNames("wim-selectbox", fullWidth && "wim-selectbox--full-width")}
        ref={containerRef}
        onMouseMove={() => setIsKeyboardNavigating(false)}
        data-keyboard-nav={isKeyboardNavigating}
        {...wrapperProps}
      >
        <InputBase
          disabled={disabled}
          allowClear={allowClear}
          hasValue={!!currentValue}
          onClear={handleClear}
          intent={error ? "error" : "default"}
          rightIcons={[{ name: "ChevronDownIcon", rotated: isOpen }]}
          fullWidth={fullWidth}
        >
          <div
            id={triggerId}
            className={classNames(
              "wim-selectbox-trigger",
              isOpen && "wim-selectbox-trigger--open",
              disabled && "wim-selectbox-trigger--disabled",
            )}
            onClick={handleToggle}
            onKeyDown={handleKeyDown}
            tabIndex={disabled ? -1 : 0}
            role="combobox"
            aria-expanded={isOpen}
            aria-haspopup="listbox"
            aria-controls={isOpen ? listId : undefined}
            aria-disabled={disabled}
            aria-labelledby={labelId || ariaLabelledBy}
            aria-label={label ? undefined : (typeof ariaLabel === "string" ? ariaLabel : (typeof placeholder === "string" ? placeholder : undefined))}
            aria-describedby={errorId || ariaDescribedBy}
            aria-invalid={!!error}
            aria-activedescendant={isOpen ? activeDescendant : undefined}
            ref={triggerRef}
          >
            <div
              className={classNames(
                "wim-selectbox-value",
                !selectedOption && "wim-selectbox-value--placeholder",
              )}
            >
              {selectedOption ? selectedOption.label : placeholder}
            </div>
          </div>
        </InputBase>

        <Transition
          show={isOpen && !disabled}
          enter="fade-enter"
          enterFrom="fade-enter-from"
          enterTo="fade-enter-to"
          leave="fade-leave"
          leaveFrom="fade-leave-from"
          leaveTo="fade-leave-to"
          className="wim-selectbox-dropdown"
        >
          {searchable && (
            <div className="wim-selectbox-search">
              <input
                ref={searchInputRef}
                type="text"
                className="wim-selectbox-search-input"
                placeholder={searchPlaceholder}
                value={searchValue}
                onChange={(e) => {
                  setSearchValue(e.target.value);
                  setFocusedIndex(-1);
                }}
                onClick={(e) => e.stopPropagation()}
                onKeyDown={handleKeyDown}
                aria-label={searchPlaceholder}
                aria-controls={listId}
                aria-activedescendant={activeDescendant}
              />
            </div>
          )}
          <ul
            id={listId}
            className="wim-selectbox-list"
            role="listbox"
            aria-labelledby={label ? labelId : ariaLabelledBy || undefined}
          >
            {filteredOptions.length === 0 ? (
              <li
                className="wim-selectbox-empty"
                role="option"
                aria-selected="false"
              >
                {noOptionsFoundLabel}
              </li>
            ) : (
              renderOptions()
            )}
          </ul>
        </Transition>
      </div>
    </FieldTemplate>
  );
};
