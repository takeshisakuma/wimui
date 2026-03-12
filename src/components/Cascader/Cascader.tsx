import React, { useState, useRef, useEffect, useMemo, useId } from "react";
import { useTranslation } from "react-i18next";
import classNames from "classnames";
import { Transition } from "../Transition/Transition";
import { Icon } from "../Icon/Icon";
import { BaseListItem } from "../_internal/BaseListItem";
import { InputBase } from "../_internal/InputBase";
import "./cascader.scss";

import { FieldTemplate } from "../_internal/FieldTemplate";

export type CascaderOption = {
  label: string;
  value: string;
  children?: CascaderOption[];
  disabled?: boolean;
};

export type CascaderProps = {
  options: CascaderOption[];
  value?: string[];
  onChange?: (value: string[], selectedOptions: CascaderOption[]) => void;
  placeholder?: string;
  label?: string;
  error?: string;
  required?: boolean;
  layout?: "vertical" | "horizontal";
  className?: string;
  disabled?: boolean;
  defaultValue?: string[];
  id?: string;
  /** Expand trigger mode */
  expandTrigger?: "click" | "hover";
  /** Custom separator for the display value */
  separator?: string;
  /** Whether to show a clear button when a value is selected */
  allowClear?: boolean;
};

/**
 * 階層構造を持つデータから選択肢を辿って1つを選択するためのコンポーネント。
 */
export const Cascader = ({
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
  id: customId,
  expandTrigger = "click",
  separator = " / ",
  allowClear = false,
  ...props
}: CascaderProps) => {
  const { t } = useTranslation("common");

  const actualPlaceholder = placeholder ?? t("select_option");
  const generatedId = useId();
  const id = customId || `wim-cascader-${generatedId}`;
  const labelId = label ? `${id}-label` : undefined;
  const errorId = error ? `${id}-error` : undefined;
  const triggerId = `${id}-trigger`;

  const [isOpen, setIsOpen] = useState(false);
  const [internalValue, setInternalValue] = useState<string[]>(
    defaultValue || [],
  );
  const [activePath, setActivePath] = useState<string[]>([]);
  const [focusedLevel, setFocusedLevel] = useState<number>(-1); // -1 means trigger is focused
  const [focusedIndexes, setFocusedIndexes] = useState<number[]>([]);

  const containerRef = useRef<HTMLDivElement>(null);
  const isControlled = value !== undefined;
  const currentValue = isControlled ? value : internalValue;

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

  const handleToggle = () => {
    if (!disabled) {
      const nextOpen = !isOpen;
      setIsOpen(nextOpen);
      if (nextOpen) {
        // Initialize active path with current value if exists
        setActivePath(currentValue || []);
        setFocusedLevel(0);
        setFocusedIndexes([0]);
      } else {
        setFocusedLevel(-1);
      }
    }
  };

  const getSelectedLabel = () => {
    if (!currentValue || currentValue.length === 0) return null;

    const labels: string[] = [];
    let currentOptions = options;

    for (const val of currentValue) {
      const opt = currentOptions.find((o) => o.value === val);
      if (opt) {
        labels.push(t(opt.label));
        currentOptions = opt.children || [];
      } else {
        break;
      }
    }

    return labels.join(separator);
  };

  const handleOptionSelect = (option: CascaderOption, level: number) => {
    if (option.disabled) return;

    const newPath = [...activePath.slice(0, level), option.value];
    setActivePath(newPath);

    if (!option.children || option.children.length === 0) {
      // Leaf node selected
      if (!isControlled) {
        setInternalValue(newPath);
      }
      if (onChange) {
        const selectedOptions: CascaderOption[] = [];
        let opts = options;
        for (const val of newPath) {
          const opt = opts.find((o) => o.value === val);
          if (opt) {
            selectedOptions.push(opt);
            opts = opt.children || [];
          }
        }
        onChange(newPath, selectedOptions);
      }
      setIsOpen(false);
    }
  };

  const handleClear = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (disabled) return;

    if (!isControlled) {
      setInternalValue([]);
    }
    if (onChange) {
      onChange([], []);
    }
  };

  const handleOptionHover = (option: CascaderOption, level: number) => {
    if (expandTrigger === "hover" && !option.disabled) {
      setActivePath([...activePath.slice(0, level), option.value]);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (disabled) return;

    if (!isOpen) {
      if (e.key === "Enter" || e.key === " " || e.key === "ArrowDown") {
        e.preventDefault();
        handleToggle();
      }
      return;
    }

    const menus = [options];
    let currentOptions = options;
    for (let i = 0; i < activePath.length; i++) {
      const activeVal = activePath[i];
      const activeOpt = currentOptions.find((o) => o.value === activeVal);
      if (activeOpt && activeOpt.children && activeOpt.children.length > 0) {
        menus.push(activeOpt.children);
        currentOptions = activeOpt.children;
      } else {
        break;
      }
    }

    const currentMenuOptions = menus[focusedLevel] || [];
    const currentIndex = focusedIndexes[focusedLevel] || 0;

    switch (e.key) {
      case "ArrowDown":
        e.preventDefault();
        setFocusedIndexes((prev) => {
          const next = [...prev];
          next[focusedLevel] = Math.min(currentIndex + 1, currentMenuOptions.length - 1);
          return next;
        });
        break;
      case "ArrowUp":
        e.preventDefault();
        setFocusedIndexes((prev) => {
          const next = [...prev];
          next[focusedLevel] = Math.max(currentIndex - 1, 0);
          return next;
        });
        break;
      case "ArrowRight":
        e.preventDefault();
        const currentOpt = currentMenuOptions[currentIndex];
        if (currentOpt && currentOpt.children && currentOpt.children.length > 0) {
          setActivePath([...activePath.slice(0, focusedLevel), currentOpt.value]);
          setFocusedLevel(focusedLevel + 1);
          setFocusedIndexes((prev) => [...prev.slice(0, focusedLevel + 1), 0]);
        }
        break;
      case "ArrowLeft":
        e.preventDefault();
        if (focusedLevel > 0) {
          setFocusedLevel(focusedLevel - 1);
          setFocusedIndexes((prev) => prev.slice(0, focusedLevel));
        }
        break;
      case "Enter":
      case " ":
        e.preventDefault();
        const optToSelect = currentMenuOptions[currentIndex];
        if (optToSelect) {
          handleOptionSelect(optToSelect, focusedLevel);
        }
        break;
      case "Escape":
        e.preventDefault();
        setIsOpen(false);
        setFocusedLevel(-1);
        (containerRef.current?.querySelector(".wim-cascader__trigger") as HTMLElement)?.focus();
        break;
      case "Home":
        e.preventDefault();
        setFocusedIndexes((prev) => {
          const next = [...prev];
          next[focusedLevel] = 0;
          return next;
        });
        break;
      case "End":
        e.preventDefault();
        setFocusedIndexes((prev) => {
          const next = [...prev];
          next[focusedLevel] = currentMenuOptions.length - 1;
          return next;
        });
        break;
      case "Tab":
        if (isOpen) {
          setIsOpen(false);
          setFocusedLevel(-1);
        }
        break;
    }
  };

  const renderMenus = () => {
    const menus = [];
    let currentOptions = options;

    // Always render at least the first level
    menus.push(currentOptions);

    for (let i = 0; i < activePath.length; i++) {
      const activeVal = activePath[i];
      const activeOpt = currentOptions.find((o) => o.value === activeVal);
      if (activeOpt && activeOpt.children && activeOpt.children.length > 0) {
        menus.push(activeOpt.children);
        currentOptions = activeOpt.children;
      } else {
        break;
      }
    }

    return menus.map((menuOptions, level) => (
      <div key={level} className="wim-cascader__menu" role="menu">
        {menuOptions.map((option, index) => {
          const isActive = activePath[level] === option.value;
          const isFocused = focusedLevel === level && focusedIndexes[level] === index;
          const isSelected = currentValue[level] === option.value;
          const hasChildren = option.children && option.children.length > 0;

          return (
            <BaseListItem
              key={option.value}
              className={classNames(
                "wim-cascader__menu-item",
                isSelected && "wim-cascader__menu-item--selected",
              )}
              active={isFocused || isActive}
              disabled={option.disabled}
              onClick={(e: React.MouseEvent) => {
                e.stopPropagation();
                handleOptionSelect(option, level);
              }}
              onMouseEnter={() => {
                handleOptionHover(option, level);
                setFocusedLevel(level);
                setFocusedIndexes((prev) => {
                  const next = [...prev.slice(0, level), index];
                  return next;
                });
              }}
              rightSection={
                hasChildren ? (
                  <Icon name="ChevronRightIcon" size="small" />
                ) : undefined
              }
              role="option"
              id={`${id}-menu-${level}-option-${index}`}
              aria-selected={isSelected}
              tabIndex={-1}
            >
              {t(option.label)}
            </BaseListItem>
          );
        })}
      </div>
    ));
  };

  const displayValue = getSelectedLabel();

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
        className="wim-cascader"
        ref={containerRef}
        {...(props as any)}
      >
        <InputBase
          disabled={disabled}
          allowClear={allowClear}
          hasValue={!!displayValue}
          onClear={() => handleClear({ stopPropagation: () => { } } as any)}
          status={error ? "error" : "default"}
          rightIcons={[{ name: "ChevronDownIcon", rotated: isOpen }]}
          className={classNames(
            isOpen && "wim-cascader__trigger--open",
          )}
        >
          <div
            id={triggerId}
            className={classNames(
              "wim-cascader__trigger",
              disabled && "wim-cascader__trigger--disabled",
            )}
            onClick={handleToggle}
            onKeyDown={handleKeyDown}
            tabIndex={disabled ? -1 : 0}
            role="combobox"
            aria-expanded={isOpen}
            aria-haspopup="listbox"
            aria-disabled={disabled}
            aria-labelledby={labelId}
            aria-describedby={errorId}
            aria-invalid={!!error}
            aria-activedescendant={
              isOpen && focusedLevel >= 0 ? `${id}-menu-${focusedLevel}-option-${focusedIndexes[focusedLevel]}` : undefined
            }
          >
            <div
              className={classNames(
                "wim-cascader__value",
                !displayValue && "wim-cascader__value--placeholder",
              )}
            >
              {displayValue || actualPlaceholder}
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
          className="wim-cascader__dropdown"
        >
          {renderMenus()}
        </Transition>
      </div>
    </FieldTemplate>
  );
};
