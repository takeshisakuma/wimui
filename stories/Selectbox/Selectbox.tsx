import React, { useState, useRef, useEffect, useMemo } from "react";
import PropTypes from "prop-types";
import { Icon } from "../Icon/Icon";
import "./selectbox.scss";

export type SelectboxOption = {
    label: string;
    value: string;
    disabled?: boolean;
    group?: string;
};

export type SelectboxOptionGroup = {
    label: string;
    options: SelectboxOption[];
};

export type SelectboxProps = {
    options: SelectboxOption[] | SelectboxOptionGroup[];
    value?: string;
    onChange?: (value: string) => void;
    placeholder?: string;
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
};

/**
 * ユーザーが定義済みの選択肢から1つを選択するためのプルダウンメニュー。
 */
export const Selectbox = ({
    options = [],
    value,
    onChange,
    placeholder = "Select an option",
    label,
    className = "",
    disabled = false,
    defaultValue,
    searchable = false,
    searchPlaceholder = "Search...",
    filterOption,
    grouped = false,
    ...props
}: SelectboxProps) => {
    const [isOpen, setIsOpen] = useState(false);
    const [internalValue, setInternalValue] = useState(defaultValue || "");
    const [searchValue, setSearchValue] = useState("");
    const [focusedIndex, setFocusedIndex] = useState(-1);

    const containerRef = useRef<HTMLDivElement>(null);
    const triggerRef = useRef<HTMLDivElement>(null);
    const searchInputRef = useRef<HTMLInputElement>(null);
    const listItemsRef = useRef<(HTMLLIElement | null)[]>([]);

    const isControlled = value !== undefined;
    const currentValue = isControlled ? value : internalValue;

    // Normalize options to flat array
    const flatOptions = useMemo(() => {
        if (grouped && options.length > 0 && 'options' in options[0]) {
            return (options as SelectboxOptionGroup[]).flatMap(group => group.options);
        }
        return options as SelectboxOption[];
    }, [options, grouped]);

    // Filter options based on search
    const filteredOptions = useMemo(() => {
        if (!searchValue) return flatOptions;

        const defaultFilter = (option: SelectboxOption, search: string) =>
            option.label.toLowerCase().includes(search.toLowerCase());

        const filterFn = filterOption || defaultFilter;
        return flatOptions.filter(option => filterFn(option, searchValue));
    }, [flatOptions, searchValue, filterOption]);

    const selectedOption = flatOptions.find(opt => opt.value === currentValue);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
                setIsOpen(false);
                setSearchValue("");
                setFocusedIndex(-1);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    // Focus search input when dropdown opens
    useEffect(() => {
        if (isOpen && searchable && searchInputRef.current) {
            searchInputRef.current.focus();
        }
    }, [isOpen, searchable]);

    // Scroll focused option into view
    useEffect(() => {
        if (focusedIndex >= 0 && listItemsRef.current[focusedIndex]) {
            listItemsRef.current[focusedIndex]?.scrollIntoView({
                block: 'nearest',
                behavior: 'smooth'
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
        if (option.disabled) return;

        if (!isControlled) {
            setInternalValue(option.value);
        }

        if (onChange) {
            onChange(option.value);
        }
        setIsOpen(false);
        setSearchValue("");
        setFocusedIndex(-1);
        triggerRef.current?.focus();
    };

    const handleKeyDown = (e: React.KeyboardEvent) => {
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
                    setFocusedIndex(prev => {
                        const next = prev + 1;
                        if (next >= filteredOptions.length) return 0;
                        // Skip disabled options
                        if (filteredOptions[next]?.disabled) {
                            let nextValid = next + 1;
                            while (nextValid < filteredOptions.length && filteredOptions[nextValid]?.disabled) {
                                nextValid++;
                            }
                            return nextValid < filteredOptions.length ? nextValid : prev;
                        }
                        return next;
                    });
                }
                break;

            case "ArrowUp":
                e.preventDefault();
                if (isOpen) {
                    setFocusedIndex(prev => {
                        if (prev <= 0) return filteredOptions.length - 1;
                        const next = prev - 1;
                        // Skip disabled options
                        if (filteredOptions[next]?.disabled) {
                            let nextValid = next - 1;
                            while (nextValid >= 0 && filteredOptions[nextValid]?.disabled) {
                                nextValid--;
                            }
                            return nextValid >= 0 ? nextValid : prev;
                        }
                        return next;
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

    const renderOptions = () => {
        if (grouped && options.length > 0 && 'options' in options[0]) {
            const groups = options as SelectboxOptionGroup[];
            let flatIndex = 0;

            return groups.map((group, groupIndex) => {
                const groupOptionsFiltered = group.options.filter(opt =>
                    !searchValue || (filterOption || ((o, s) => o.label.toLowerCase().includes(s.toLowerCase())))(opt, searchValue)
                );

                if (groupOptionsFiltered.length === 0) return null;

                return (
                    <React.Fragment key={groupIndex}>
                        <li className="wim-selectbox-group-label" role="presentation">
                            {group.label}
                        </li>
                        {groupOptionsFiltered.map((option) => {
                            const index = flatIndex++;
                            const isFocused = index === focusedIndex;
                            const isSelected = currentValue === option.value;

                            return (
                                <li
                                    key={option.value}
                                    ref={el => { listItemsRef.current[index] = el; }}
                                    className={`wim-selectbox-option ${isSelected ? "wim-selectbox-option--selected" : ""} ${option.disabled ? "wim-selectbox-option--disabled" : ""} ${isFocused ? "wim-selectbox-option--focused" : ""}`}
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        handleSelect(option);
                                    }}
                                    onMouseEnter={() => setFocusedIndex(index)}
                                    role="option"
                                    aria-selected={isSelected}
                                    aria-disabled={option.disabled}
                                >
                                    {option.label}
                                </li>
                            );
                        })}
                    </React.Fragment>
                );
            });
        }

        return filteredOptions.map((option, index) => {
            const isFocused = index === focusedIndex;
            const isSelected = currentValue === option.value;

            return (
                <li
                    key={option.value}
                    ref={el => { listItemsRef.current[index] = el; }}
                    className={`wim-selectbox-option ${isSelected ? "wim-selectbox-option--selected" : ""} ${option.disabled ? "wim-selectbox-option--disabled" : ""} ${isFocused ? "wim-selectbox-option--focused" : ""}`}
                    onClick={(e) => {
                        e.stopPropagation();
                        handleSelect(option);
                    }}
                    onMouseEnter={() => setFocusedIndex(index)}
                    role="option"
                    aria-selected={isSelected}
                    aria-disabled={option.disabled}
                >
                    {option.label}
                </li>
            );
        });
    };

    return (
        <div
            className={`wim-selectbox ${className}`}
            ref={containerRef}
            {...props}
        >
            {label && <label className="wim-label">{label}</label>}
            <div
                className={`wim-selectbox-trigger ${isOpen ? "wim-selectbox-trigger--open" : ""} ${disabled ? "wim-selectbox-trigger--disabled" : ""}`}
                onClick={handleToggle}
                onKeyDown={handleKeyDown}
                tabIndex={disabled ? -1 : 0}
                role="combobox"
                aria-expanded={isOpen}
                aria-haspopup="listbox"
                aria-disabled={disabled}
                ref={triggerRef}
            >
                <div className={`wim-selectbox-value ${!selectedOption ? "wim-selectbox-value--placeholder" : ""}`}>
                    {selectedOption ? selectedOption.label : placeholder}
                </div>
                <div className="wim-selectbox-icon">
                    <Icon name="ChevronDownIcon" size="medium" />
                </div>
            </div>

            {isOpen && !disabled && (
                <div className="wim-selectbox-dropdown">
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
                            />
                        </div>
                    )}
                    <ul className="wim-selectbox-list" role="listbox">
                        {filteredOptions.length === 0 ? (
                            <li className="wim-selectbox-empty">No options found</li>
                        ) : (
                            renderOptions()
                        )}
                    </ul>
                </div>
            )}
        </div>
    );
};

Selectbox.propTypes = {
    /**
     * 選択肢の配列。
     */
    options: PropTypes.arrayOf(
        PropTypes.oneOfType([
            PropTypes.shape({
                label: PropTypes.string.isRequired,
                value: PropTypes.string.isRequired,
                disabled: PropTypes.bool,
                group: PropTypes.string,
            }),
            PropTypes.shape({
                label: PropTypes.string.isRequired,
                options: PropTypes.arrayOf(
                    PropTypes.shape({
                        label: PropTypes.string.isRequired,
                        value: PropTypes.string.isRequired,
                        disabled: PropTypes.bool,
                    })
                ).isRequired,
            }),
        ])
    ).isRequired,
    /**
     * 現在の値 (制御されたコンポーネントの場合)。
     */
    value: PropTypes.string,
    /**
     * 値が変更された時のコールバック。
     */
    onChange: PropTypes.func,
    /**
     * プレースホルダー。
     */
    placeholder: PropTypes.string,
    /**
     * ラベル。
     */
    label: PropTypes.string,
    /**
     * 追加のクラス名。
     */
    className: PropTypes.string,
    /**
     * 無効化。
     */
    disabled: PropTypes.bool,
    /**
     * 初期値 (非制御コンポーネントの場合)。
     */
    defaultValue: PropTypes.string,
    /**
     * 検索機能を有効化。
     */
    searchable: PropTypes.bool,
    /**
     * 検索入力のプレースホルダー。
     */
    searchPlaceholder: PropTypes.string,
    /**
     * カスタムフィルター関数。
     */
    filterOption: PropTypes.func,
    /**
     * オプションがグループ化されているか。
     */
    grouped: PropTypes.bool,
};
