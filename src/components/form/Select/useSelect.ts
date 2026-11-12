import React, { useState, useRef, useEffect, useMemo } from "react";
import type { SelectOption, SelectOptionGroup, SelectProps } from "./Select";
import { getRovingIndex, isRovingKey } from "../../_internal/rovingIndex";
import { findTypeaheadIndex, isTypeaheadKey, useTypeahead } from "../../_internal/typeahead";

type UseSelectParams = Pick<
  SelectProps,
  | "options"
  | "value"
  | "onChange"
  | "defaultValue"
  | "searchable"
  | "grouped"
  | "disabled"
  | "filterOption"
>;

export function useSelect({
  options,
  value,
  onChange,
  defaultValue,
  searchable,
  grouped,
  disabled,
  filterOption,
}: UseSelectParams) {
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
      return (options as SelectOptionGroup[]).flatMap((group) => group.options);
    }
    return options as SelectOption[];
  }, [options, grouped]);

  const filteredOptions = useMemo(() => {
    if (!searchValue) return flatOptions;
    const defaultFilter = (option: SelectOption, search: string) => {
      if (option.type === "separator") return false;
      const label = typeof option.label === "string" ? option.label : "";
      const value = typeof option.value === "string" ? option.value : "";
      const searchTerm = search.toLowerCase();
      return (
        label.toLowerCase().includes(searchTerm) ||
        value.toLowerCase().includes(searchTerm)
      );
    };
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

  const handleSelect = (option: SelectOption) => {
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

  // 矢印キー・Home / End の行き先は共通の計算で決める（T370）。無効の項目と区切りには止まらない
  // （以前は矢印キーだけが飛ばし、Home / End は端の無効の項目にも止まっていた）
  const isUnavailable = (index: number) =>
    !!filteredOptions[index]?.disabled || filteredOptions[index]?.type === "separator";
  const typeahead = useTypeahead();

  const handleKeyDown = (e: React.KeyboardEvent) => {
    setIsKeyboardNavigating(true);
    if (disabled) return;

    // 文字を打つと、先頭が一致する項目へ移る（閉じていれば開いて移る）。検索できる設定では、
    // 打った文字は検索欄に入るので扱わない
    if (!searchable && isTypeaheadKey(e, typeahead.typing())) {
      e.preventDefault();
      const index = findTypeaheadIndex({
        query: typeahead.push(e.key),
        current: isOpen ? focusedIndex : -1,
        count: filteredOptions.length,
        // ラベルが文字でない（要素を渡された）ときは、値で照合する
        getText: (i) => {
          const option = filteredOptions[i];
          return typeof option?.label === "string" ? option.label : String(option?.value ?? "");
        },
        isDisabled: isUnavailable,
      });
      if (index >= 0) {
        setIsOpen(true);
        setFocusedIndex(index);
      }
      return;
    }

    if (isOpen && isRovingKey(e.key, "vertical")) {
      e.preventDefault();
      const next = getRovingIndex({
        key: e.key,
        current: focusedIndex,
        count: filteredOptions.length,
        orientation: "vertical",
        isDisabled: isUnavailable,
      });
      if (next !== null) setFocusedIndex(next);
      return;
    }

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

      // Tab はリストを閉じて、そのまま次へ進む（既定の動作は止めない）。以前は分岐が無く、フォーカスが
      // 外へ出てもリストが開いたまま残った（MultiSelect / Combobox / Cascader は閉じる）。
      case "Tab":
        if (isOpen) {
          setIsOpen(false);
          setSearchValue("");
          setFocusedIndex(-1);
        }
        break;

      case "ArrowDown":
        e.preventDefault();
        setIsOpen(true);
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
