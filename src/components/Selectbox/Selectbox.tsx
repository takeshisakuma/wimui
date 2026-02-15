import React, { useState, useRef, useEffect, useMemo, useId } from "react";
import classNames from "classnames";
import { Icon } from "../Icon/Icon";
import "./selectbox.scss";

export type SelectboxOption = {
    label?: string;
    value?: string;
    disabled?: boolean;
    group?: string;
    type?: "option" | "separator";
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
    /** Whether to use a native select element */
    native?: boolean;
    /** Unique ID for the component */
    id?: string;
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
    className,
    disabled = false,
    defaultValue,
    searchable = false,
    searchPlaceholder = "Search...",
    filterOption,
    grouped = false,
    native = false,
    id: customId,
    ...props
}: SelectboxProps) => {
    const generatedId = useId();
    const id = customId || generatedId;
    const labelId = `wim-selectbox-label-${id}`;
    const listId = `wim-selectbox-list-${id}`;
    const triggerId = `wim-selectbox-trigger-${id}`;

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
            option.type !== "separator" && (option.label || "").toLowerCase().includes(search.toLowerCase());


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
        if (option.type === "separator") return;
        if (option.disabled) return;

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
                        let next = prev + 1;
                        if (next >= filteredOptions.length) next = 0;

                        // Skip disabled options and separators
                        while (
                            next < filteredOptions.length &&
                            (filteredOptions[next]?.disabled || filteredOptions[next]?.type === "separator")
                        ) {
                            next++;
                        }

                        if (next >= filteredOptions.length) {
                            // Try from beginning if we hit the end
                            next = 0;
                            while (
                                next < prev &&
                                (filteredOptions[next]?.disabled || filteredOptions[next]?.type === "separator")
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
                    setFocusedIndex(prev => {
                        let next = prev - 1;
                        if (next < 0) next = filteredOptions.length - 1;

                        // Skip disabled options and separators
                        while (
                            next >= 0 &&
                            (filteredOptions[next]?.disabled || filteredOptions[next]?.type === "separator")
                        ) {
                            next--;
                        }

                        if (next < 0) {
                            // Try from end if we hit the beginning
                            next = filteredOptions.length - 1;
                            while (
                                next > prev &&
                                (filteredOptions[next]?.disabled || filteredOptions[next]?.type === "separator")
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

    const renderOptions = () => {
        let flatIndex = 0;
        if (grouped && options.length > 0 && 'options' in options[0]) {
            const groups = options as SelectboxOptionGroup[];

            return groups.map((group, groupIndex) => {
                const groupOptionsFiltered = group.options.filter(opt =>
                    opt.type === "separator" || !searchValue || (filterOption || ((o, s) => (o.label || "").toLowerCase().includes(s.toLowerCase())))(opt, searchValue)
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
                                return <li key={`sep-${groupIndex}-${optIdx}`} className="wim-selectbox-separator" role="presentation" />;
                            }

                            const isFocused = index === focusedIndex;
                            const isSelected = currentValue === option.value;
                            const optionId = `wim-selectbox-option-${id}-${option.value}`;

                            return (
                                // eslint-disable-next-line jsx-a11y/click-events-have-key-events
                                <li
                                    key={option.value}
                                    id={optionId}
                                    ref={el => { listItemsRef.current[index] = el; }}
                                    className={classNames(
                                        "wim-selectbox-option",
                                        isSelected && "wim-selectbox-option--selected",
                                        option.disabled && "wim-selectbox-option--disabled",
                                        isFocused && "wim-selectbox-option--focused"
                                    )}
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
            const itemIndex = flatIndex++;
            if (option.type === "separator") {
                return <li key={`sep-${index}`} className="wim-selectbox-separator" role="presentation" />;
            }

            const isFocused = itemIndex === focusedIndex;
            const isSelected = currentValue === option.value;
            const optionId = `wim-selectbox-option-${id}-${option.value}`;

            return (
                // eslint-disable-next-line jsx-a11y/click-events-have-key-events
                <li
                    key={option.value}
                    id={optionId}
                    ref={el => { listItemsRef.current[itemIndex] = el; }}
                    className={classNames(
                        "wim-selectbox-option",
                        isSelected && "wim-selectbox-option--selected",
                        option.disabled && "wim-selectbox-option--disabled",
                        isFocused && "wim-selectbox-option--focused"
                    )}
                    onClick={(e) => {
                        e.stopPropagation();
                        handleSelect(option);
                    }}
                    onMouseEnter={() => setFocusedIndex(itemIndex)}
                    role="option"
                    aria-selected={isSelected}
                    aria-disabled={option.disabled}
                >
                    {option.label}
                </li>
            );
        });

    };

    if (native) {
        return (
            <div className={classNames("wim-selectbox", "wim-selectbox--native", className)}>
                {label && (
                    <label
                        id={labelId}
                        htmlFor={id}
                        className="wim-label"
                    >
                        {label}
                    </label>
                )}
                <div className="wim-selectbox-native-wrapper">
                    <select
                        id={id}
                        className="wim-selectbox-select"
                        value={currentValue}
                        disabled={disabled}
                        onChange={(e) => {
                            if (onChange) onChange(e.target.value);
                            if (!isControlled) setInternalValue(e.target.value);
                        }}
                        {...props}
                    >
                        {!currentValue && <option value="" disabled>{placeholder}</option>}
                        {grouped ? (
                            (options as SelectboxOptionGroup[]).map((group, gi) => (
                                <optgroup key={gi} label={group.label}>
                                    {group.options.map((opt, oi) =>
                                        opt.type === "separator" ? (
                                            <hr key={`hr-${gi}-${oi}`} />
                                        ) : (
                                            <option key={opt.value} value={opt.value} disabled={opt.disabled}>
                                                {opt.label}
                                            </option>
                                        )
                                    )}
                                </optgroup>
                            ))
                        ) : (
                            (options as SelectboxOption[]).map((opt, i) =>
                                opt.type === "separator" ? (
                                    <hr key={`hr-${i}`} />
                                ) : (
                                    <option key={opt.value} value={opt.value} disabled={opt.disabled}>
                                        {opt.label}
                                    </option>
                                )
                            )
                        )}
                    </select>
                    <div className="wim-selectbox-icon">
                        <Icon name="ChevronDownIcon" size="medium" />
                    </div>
                </div>
            </div>
        );
    }

    const focusedOption = focusedIndex >= 0 ? filteredOptions[focusedIndex] : null;
    const activeDescendant = focusedOption && focusedOption.type !== "separator"
        ? `wim-selectbox-option-${id}-${focusedOption.value}`
        : undefined;

    const {
        'aria-label': ariaLabel,
        'aria-labelledby': ariaLabelledBy,
        'aria-describedby': ariaDescribedBy,
        ...wrapperProps
    } = props as any;

    return (
        <div
            className={classNames("wim-selectbox", className)}
            ref={containerRef}
            {...wrapperProps}
        >
            {label && (
                <label
                    id={labelId}
                    htmlFor={triggerId}
                    className="wim-label"
                >
                    {label}
                </label>
            )}
            <div
                id={triggerId}
                className={classNames(
                    "wim-selectbox-trigger",
                    isOpen && "wim-selectbox-trigger--open",
                    disabled && "wim-selectbox-trigger--disabled"
                )}
                onClick={handleToggle}
                onKeyDown={handleKeyDown}
                tabIndex={disabled ? -1 : 0}
                role="combobox"
                aria-expanded={isOpen}
                aria-haspopup="listbox"
                aria-controls={isOpen ? listId : undefined}
                aria-disabled={disabled}
                aria-labelledby={label ? labelId : ariaLabelledBy}
                aria-label={label ? undefined : (ariaLabel || placeholder)}
                aria-describedby={ariaDescribedBy}
                aria-activedescendant={isOpen ? activeDescendant : undefined}
                ref={triggerRef}
            >
                <div className={classNames("wim-selectbox-value", !selectedOption && "wim-selectbox-value--placeholder")}>
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
                        aria-labelledby={label ? labelId : (ariaLabelledBy || undefined)}
                    >
                        {filteredOptions.length === 0 ? (
                            <li className="wim-selectbox-empty" role="option" aria-selected="false">No options found</li>
                        ) : (
                            renderOptions()
                        )}
                    </ul>
                </div>
            )}
        </div>
    );

};


