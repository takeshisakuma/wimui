import React, { useState, useRef, useEffect } from "react";
import PropTypes from "prop-types";
import { Input } from "../Input/Input";
import "./combobox.scss";

export type ComboboxOption = {
    label: string;
    value: string;
};

export type ComboboxProps = {
    options: ComboboxOption[];
    onSelect?: (option: ComboboxOption) => void;
    placeholder?: string;
    label?: string;
    showSearchIcon?: boolean;
    allowClear?: boolean;
    defaultValue?: string;
    className?: string;
    disabled?: boolean;
};

/**
 * 入力とサジェストリストを組み合わせたコンボボックスコンポーネント。
 */
export const Combobox = ({
    options = [],
    onSelect,
    placeholder = "Select...",
    showSearchIcon = true,
    allowClear = true,
    defaultValue = "",
    className = "",
    disabled = false,
    ...props
}: ComboboxProps) => {
    const [isOpen, setIsOpen] = useState(false);
    const [inputValue, setInputValue] = useState(defaultValue);
    const [filteredOptions, setFilteredOptions] = useState<ComboboxOption[]>(options);
    const [activeIndex, setActiveIndex] = useState(-1);
    const containerRef = useRef<HTMLDivElement>(null);

    // 外部クリックで閉じる
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    // 入力値に基づいてフィルタリング
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setInputValue(value);

        const filtered = options.filter(option =>
            option.label.toLowerCase().includes(value.toLowerCase())
        );
        setFilteredOptions(filtered);
        setIsOpen(true);
        setActiveIndex(-1);
    };

    const handleOptionClick = (option: ComboboxOption) => {
        setInputValue(option.label);
        setIsOpen(false);
        if (onSelect) {
            onSelect(option);
        }
    };

    const handleKeyDown = (e: React.KeyboardEvent) => {
        if (!isOpen && e.key === "ArrowDown") {
            setIsOpen(true);
            return;
        }

        switch (e.key) {
            case "ArrowDown":
                setActiveIndex(prev => (prev < filteredOptions.length - 1 ? prev + 1 : prev));
                break;
            case "ArrowUp":
                setActiveIndex(prev => (prev > 0 ? prev - 1 : prev));
                break;
            case "Enter":
                if (activeIndex >= 0 && activeIndex < filteredOptions.length) {
                    handleOptionClick(filteredOptions[activeIndex]);
                }
                break;
            case "Escape":
                setIsOpen(false);
                break;
        }
    };

    return (
        <div
            className={`wim-combobox ${className}`}
            ref={containerRef}
            onKeyDown={handleKeyDown}
        >
            <Input
                placeholder={placeholder}
                value={inputValue}
                onChange={handleInputChange}
                onFocus={() => setIsOpen(true)}
                leftIcon={showSearchIcon ? "SearchIcon" : undefined}
                rightIcon={allowClear && inputValue ? undefined : "ChevronDownIcon"}
                allowClear={allowClear}
                disabled={disabled}
                autoComplete="off"
                {...props}
            />
            {isOpen && filteredOptions.length > 0 && (
                <ul className="wim-combobox-list">
                    {filteredOptions.map((option, index) => (
                        <li
                            key={option.value}
                            className={`wim-combobox-option ${index === activeIndex ? "wim-combobox-option--active" : ""}`}
                            onClick={() => handleOptionClick(option)}
                        >
                            {option.label}
                        </li>
                    ))}
                </ul>
            )}
            {isOpen && filteredOptions.length === 0 && (
                <div className="wim-combobox-empty">No results found</div>
            )}
        </div>
    );
};

Combobox.propTypes = {
    /**
     * 選択肢の配列。
     */
    options: PropTypes.arrayOf(
        PropTypes.shape({
            label: PropTypes.string.isRequired,
            value: PropTypes.string.isRequired,
        })
    ).isRequired,
    /**
     * 項目が選択された時のコールバック。
     */
    onSelect: PropTypes.func,
    /**
     * プレースホルダー。
     */
    placeholder: PropTypes.string,
    /**
     * 左側に検索アイコンを表示するかどうか。
     */
    showSearchIcon: PropTypes.bool,
    /**
     * クリアボタンを表示するかどうか。
     */
    allowClear: PropTypes.bool,
    /**
     * 無効化。
     */
    disabled: PropTypes.bool,
};
