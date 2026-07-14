import React, { useId, forwardRef } from "react";
import { useWimTranslation } from "@/i18n/useWimTranslation";
import classNames from "classnames";
import { Slot, Slottable } from "@radix-ui/react-slot";
import { Transition } from "../../layout/Transition/Transition";
import { BaseListItem } from "../../_internal/BaseListItem";
import { mergeRefs } from "../../_internal/mergeRefs";
import { FieldTemplate } from "../FieldTemplate";
import { InputBase } from "../InputBase";
import localStyles from "./select.module.scss";
import { useSelect } from "./useSelect";
import { type FieldIntent, type FieldWidth } from "../../../types/tokens";

export type SelectOption = {
  label?: React.ReactNode;
  value?: string;
  disabled?: boolean;
  group?: string;
  type?: "option" | "separator";
};

export type SelectOptionGroup = {
  label: React.ReactNode;
  options: SelectOption[];
};

export interface SelectProps extends Omit<React.ComponentPropsWithoutRef<"div">, "onChange" | "defaultValue"> {
  /** List of options (flat or grouped) */
  options: SelectOption[] | SelectOptionGroup[];
  /** Selected value (controlled) */
  value?: string;
  /** Callback when the selected value changes */
  onChange?: (value: string) => void;
  /** Placeholder shown when nothing is selected */
  placeholder?: React.ReactNode;
  /** Field label */
  label?: string;
  /** Whether the field is disabled */
  disabled?: boolean;
  /** Initially selected value (uncontrolled) */
  defaultValue?: string;
  /** Enable search/filtering functionality */
  searchable?: boolean;
  /** Placeholder text for search input */
  searchPlaceholder?: string;
  /** Custom filter function */
  filterOption?: (option: SelectOption, searchValue: string) => boolean;
  /** Whether options are grouped */
  grouped?: boolean;
  /** Whether to show a clear button when a value is selected */
  allowClear?: boolean;
  /** Whether to take full width of parent */
  fullWidth?: boolean;
  /** Unique ID for the component */
  id?: string;
  /** Semantic intent of the field (e.g. error state) */
  intent?: FieldIntent;
  /** Error message */
  error?: string;
  /** Whether to show the required indicator */
  required?: boolean;
  /** Layout direction of label and field */
  layout?: "vertical" | "horizontal";
  /** Label shown when no options match the search */
  noOptionsFoundLabel?: string;
  /** Fixed width of the field (width token, CSS value, or number in px) */
  width?: FieldWidth | string | number;
  /** Whether to render as a child element. */
  asChild?: boolean;
  /** Custom styles for internal parts */
  styles?: {
    root?: string;
    trigger?: string;
    value?: string;
    dropdown?: string;
    list?: string;
    option?: string;
    search?: string;
    searchInput?: string;
    groupLabel?: string;
    separator?: string;
    empty?: string;
    inputBase?: React.ComponentProps<typeof InputBase>["styles"];
  };
}

/**
 * Pull-down menu for selecting a single option from a predefined list.
 */
export const Select = forwardRef<HTMLDivElement, SelectProps>(
  (
    {
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
      defaultValue,
      searchable = false,
      searchPlaceholder,
      filterOption,
      grouped = false,
      allowClear = false,
      fullWidth = false,
      intent = "default",
      id: customId,
      noOptionsFoundLabel,
      width,
      styles: stylesProp,
      asChild = false,
      children,
      ...props
    },
    ref,
  ) => {
    const { t } = useWimTranslation("form");
    const generatedId = useId();
    const id = customId || `wim-select-${generatedId}`;
    const labelId = label ? `${id}-label` : undefined;
    const errorId = error ? `${id}-error` : undefined;
    const listId = `${id}-list`;
    const triggerId = `${id}-trigger`;

    const currentIntent = error ? "danger" : intent;

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
    } = useSelect({
      options,
      value,
      onChange,
      defaultValue,
      searchable,
      grouped,
      disabled,
      filterOption,
    });

    // Combine refs for the container
    const combinedRef = mergeRefs(containerRef, ref);

    const renderOptions = () => {
      let flatIndex = 0;
      if (grouped && options.length > 0 && "options" in options[0]) {
        const groups = options as SelectOptionGroup[];

        return groups.map((group, groupIndex) => {
          const groupOptionsFiltered = group.options.filter(
            (opt) =>
              opt.type === "separator" ||
              !searchValue ||
              (filterOption ||
                ((o, s) =>
                  (typeof o.label === "string" ? o.label : "")
                    .toLowerCase()
                    .includes(s.toLowerCase())))(opt, searchValue),
          );

          if (groupOptionsFiltered.length === 0) return null;

          return (
            <React.Fragment key={groupIndex}>
              <li
                className={classNames(localStyles.groupLabel, stylesProp?.groupLabel)}
                role="presentation"
              >
                {group.label}
              </li>
              {groupOptionsFiltered.map((option, optIdx) => {
                const index = flatIndex++;
                if (option.type === "separator") {
                  return (
                    <li
                      key={`sep-${groupIndex}-${optIdx}`}
                      className={classNames(localStyles.separator, stylesProp?.separator)}
                      role="presentation"
                    />
                  );
                }

                const isFocused = index === focusedIndex;
                const isSelected = currentValue === option.value;
                const optionId = `wim-select-option-${id}-${option.value}`;

                return (
                  <BaseListItem
                    asChild
                    key={option.value}
                    id={optionId}
                    ref={(el) => {
                      listItemsRef.current[index] = el;
                    }}
                    active={isFocused}
                    disabled={option.disabled}
                    className={classNames(
                      localStyles.option,
                      isSelected && localStyles.selected,
                      stylesProp?.option,
                    )}
                    onClick={(e: React.MouseEvent) => {
                      e.stopPropagation();
                      handleSelect(option);
                    }}
                    onMouseEnter={() => setFocusedIndex(index)}
                    role="option"
                    aria-selected={isSelected}
                  >
                    <li>{option.label}</li>
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
              className={classNames(localStyles.separator, stylesProp?.separator)}
              role="presentation"
            />
          );
        }

        const isFocused = itemIndex === focusedIndex;
        const isSelected = currentValue === option.value;
        const optionId = `wim-select-option-${id}-${option.value}`;

        return (
          <BaseListItem
            asChild
            key={option.value}
            id={optionId}
            ref={(el) => {
              listItemsRef.current[itemIndex] = el;
            }}
            active={isFocused}
            disabled={option.disabled}
            className={classNames(
              localStyles.option,
              isSelected && localStyles.selected,
              stylesProp?.option,
            )}
            onClick={(e: React.MouseEvent) => {
              e.stopPropagation();
              handleSelect(option);
            }}
            onMouseEnter={() => setFocusedIndex(itemIndex)}
            role="option"
            aria-selected={isSelected}
          >
            <li>{option.label}</li>
          </BaseListItem>
        );
      });
    };

    const activeDescendant =
      focusedOption && focusedOption.type !== "separator"
        ? `wim-select-option-${id}-${focusedOption.value}`
        : undefined;

    const {
      "aria-label": ariaLabel,
      "aria-labelledby": ariaLabelledBy,
      "aria-describedby": ariaDescribedBy,
      ...wrapperProps
    } = props;

    const RootComponent = asChild ? Slot : "div";

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
        <RootComponent
          className={classNames("wim-select",
            localStyles.root,
            fullWidth && localStyles.fullWidth,
            stylesProp?.root,
          )}
          ref={combinedRef}
          onMouseMove={() => setIsKeyboardNavigating(false)}
          data-keyboard-nav={isKeyboardNavigating}
          {...wrapperProps}
        >
          <Slottable>
            <InputBase
              disabled={disabled}
              allowClear={allowClear}
              hasValue={!!currentValue}
              onClear={handleClear}
              intent={currentIntent}
              rightIcons={[{ name: "ChevronDownIcon", rotated: isOpen }]}
              width={width}
              fullWidth={fullWidth}
              styles={stylesProp?.inputBase}
            >
              <div
                id={triggerId}
                className={classNames(
                  localStyles.trigger,
                  isOpen && localStyles.open,
                  disabled && localStyles.disabled,
                  stylesProp?.trigger,
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
                aria-label={
                  label
                    ? undefined
                    : typeof ariaLabel === "string"
                    ? ariaLabel
                    : typeof placeholder === "string"
                    ? placeholder
                    : undefined
                }
                aria-describedby={errorId || ariaDescribedBy}
                aria-required={required ? "true" : undefined}
                aria-invalid={currentIntent === "danger" ? "true" : "false"}
                aria-activedescendant={isOpen ? activeDescendant : undefined}
                ref={triggerRef}
              >
                <div
                  className={classNames(
                    localStyles.value,
                    !selectedOption && localStyles.placeholder,
                    stylesProp?.value,
                  )}
                >
                  {selectedOption ? selectedOption.label : placeholder}
                </div>
              </div>
            </InputBase>

            <Transition
              show={isOpen && !disabled}
              preset="fade"
              className={classNames(localStyles.dropdown, stylesProp?.dropdown)}
            >
              {searchable && (
                <div className={classNames(localStyles.search, stylesProp?.search)}>
                  <input
                    ref={searchInputRef}
                    type="text"
                    className={classNames(localStyles.searchInput, stylesProp?.searchInput)}
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
                className={classNames(localStyles.list, stylesProp?.list)}
                role="listbox"
                aria-labelledby={label ? labelId : ariaLabelledBy || undefined}
              >
                {filteredOptions.length === 0 ? (
                  <li
                    className={classNames(localStyles.empty, stylesProp?.empty)}
                    role="option"
                    aria-selected="false"
                  >
                    {noOptionsFoundLabel ?? t("select.no_options")}
                  </li>
                ) : (
                  renderOptions()
                )}
              </ul>
            </Transition>
          </Slottable>
          {children}
        </RootComponent>
      </FieldTemplate>
    );
  },
);

Select.displayName = "Select";

export default Select;
