import React, { useState, useRef, useEffect, useMemo } from "react";
import type { SelectboxOption, SelectboxOptionGroup, SelectboxProps } from "./Selectbox";

type UseSelectboxParams = Pick<
  SelectboxProps,
  | "options"
  | "value"
  | "onChange"
  | "defaultValue"
  | "searchable"
  | "grouped"
  | "disabled"
  | "filterOption"
>;

export function useSelectbox({
  options,
  value,
  onChange,
  defaultValue,
  searchable,
  grouped,
  disabled,
  filterOption,
}: UseSelectboxParams) {
  const [isOpen, setIsOpen] = useState(false);
  const [internalValue, setInternalValue] = useState(defaultValue || "");
  const [searchValue, setSearchValue] = useState("");
  const [focusedIndex, setFocusedIndex] = useState(-1);
  const [isKeyboardNavigating, setIsKeyboardNavigating] = useState(false);

  const containerRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLDivElement>(null);
  const searchInputRef = useRef<HTMLInputElement>(null);
  const listItemsRef = useRef<(HTMLElement | null)[]>([]);

  const isControlled = value !== undefined;
  const currentValue = isControlled ? value : internalValue;

  const flatOptions = useMemo(() => {
    if (grouped && options.length > 0 && "options" in options[0]) {
      return (options as SelectboxOptionGroup[]).flatMap((group) => group.options);
    }
    return options as SelectboxOption[];
  }, [options, grouped]);

  const filteredOptions = useMemo(() => {
    if (!searchValue) return flatOptions;
    const defaultFilter = (option: SelectboxOption, search: string) =>
      option.type !== "separator" &&
      (option.label || "").toLowerCase().includes(search.toLowerCase());
    const filterFn = filterOption || defaultFilter;
    return flatOptions.filter((option) => filterFn(option, searchValue));
  }, [flatOptions, searchValue, filterOption]);

  const selectedOption = flatOptions.find((opt) => opt.value === currentValue);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
        setSearchValue("");
        setFocusedIndex(-1);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    if (isOpen && searchable && searchInputRef.current) {
      searchInputRef.current.focus();
    }
  }, [isOpen, searchable]);

  useEffect(() => {
    if (focusedIndex >= 0 && listItemsRef.current[focusedIndex]) {
      listItemsRef.current[focusedIndex]?.scrollIntoView({
        block: "nearest",
        behavior: "smooth",
      });
    }
  }, [focusedIndex]);

  const handleToggle = () => {
    if (!disabled) {
      setIsOpen(!isOpen);
      if (!isOpen) {
        setSearchValue("");
        setFocusedIndex(-1);
      }
    }
  };

  const handleSelect = (option: SelectboxOption) => {
    if (option.type === "separator" || option.disabled) return;
    if (!isControlled && option.value !== undefined) {
      setInternalValue(option.value);
    }
    if (onChange && option.value !== undefined) {
      onChange(option.value);
    }
    setIsOpen(false);
    setSearchValue("");
    setFocusedIndex(-1);
    triggerRef.current?.focus();
  };

  const handleClear = () => {
    if (disabled) return;
    if (!isControlled) setInternalValue("");
    onChange?.("");
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    setIsKeyboardNavigating(true);
    if (disabled) return;

    switch (e.key) {
      case "Enter":
      case " ":
        if (!isOpen) {
          setIsOpen(true);
        } else if (focusedIndex >= 0 && filteredOptions[focusedIndex]) {
          handleSelect(filteredOptions[focusedIndex]);
        }
        e.preventDefault();
        break;

      case "Escape":
        setIsOpen(false);
        setSearchValue("");
        setFocusedIndex(-1);
        triggerRef.current?.focus();
        e.preventDefault();
        break;

      case "ArrowDown":
        e.preventDefault();
        if (!isOpen) {
          setIsOpen(true);
        } else {
          setFocusedIndex((prev) => {
            let next = prev + 1;
            if (next >= filteredOptions.length) next = 0;
            while (
              next < filteredOptions.length &&
              (filteredOptions[next]?.disabled ||
                filteredOptions[next]?.type === "separator")
            ) {
              next++;
            }
            if (next >= filteredOptions.length) {
              next = 0;
              while (
                next < prev &&
                (filteredOptions[next]?.disabled ||
                  filteredOptions[next]?.type === "separator")
              ) {
                next++;
              }
            }
            return next < filteredOptions.length ? next : prev;
          });
        }
        break;

      case "ArrowUp":
        e.preventDefault();
        if (isOpen) {
          setFocusedIndex((prev) => {
            let next = prev - 1;
            if (next < 0) next = filteredOptions.length - 1;
            while (
              next >= 0 &&
              (filteredOptions[next]?.disabled ||
                filteredOptions[next]?.type === "separator")
            ) {
              next--;
            }
            if (next < 0) {
              next = filteredOptions.length - 1;
              while (
                next > prev &&
                (filteredOptions[next]?.disabled ||
                  filteredOptions[next]?.type === "separator")
              ) {
                next--;
              }
            }
            return next >= 0 ? next : prev;
          });
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
          setFocusedIndex(filteredOptions.length - 1);
        }
        break;
    }
  };

  const focusedOption = focusedIndex >= 0 ? filteredOptions[focusedIndex] : null;

  return {
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
    flatOptions,
    filteredOptions,
    selectedOption,
    focusedOption,
    handleToggle,
    handleSelect,
    handleClear,
    handleKeyDown,
  };
}
