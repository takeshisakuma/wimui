import React, { useState, useRef, useEffect } from "react";
import PropTypes from "prop-types";
import { Icon } from "../Icon/Icon";
import "./selectbox.scss";

export type SelectboxOption = {
    label: string;
    value: string;
    disabled?: boolean;
};

export type SelectboxProps = {
    options: SelectboxOption[];
    value?: string;
    onChange?: (value: string) => void;
    placeholder?: string;
    label?: string;
    className?: string;
    disabled?: boolean;
    defaultValue?: string;
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
    ...props
}: SelectboxProps) => {
    const [isOpen, setIsOpen] = useState(false);
    const [internalValue, setInternalValue] = useState(defaultValue || "");
    const containerRef = useRef<HTMLDivElement>(null);
    const triggerRef = useRef<HTMLDivElement>(null);

    const isControlled = value !== undefined;
    const currentValue = isControlled ? value : internalValue;

    const selectedOption = options.find(opt => opt.value === currentValue);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    const handleToggle = () => {
        if (!disabled) {
            setIsOpen(!isOpen);
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
        triggerRef.current?.focus();
    };

    const handleKeyDown = (e: React.KeyboardEvent) => {
        if (disabled) return;

        if (e.key === "Enter" || e.key === " ") {
            if (!isOpen) {
                setIsOpen(true);
            } else {
                setIsOpen(false);
            }
            e.preventDefault();
        } else if (e.key === "Escape") {
            setIsOpen(false);
            e.preventDefault();
        } else if (e.key === "ArrowDown" || e.key === "ArrowUp") {
            if (!isOpen) {
                setIsOpen(true);
                e.preventDefault();
                return;
            }
            // Simple list navigation logic could be added here if needed, 
            // for now we rely on standard tab/focus behavior or just mouse interactions for simplicity in this iteration
            // but strictly speaking a fully accessible selectbox needs activedescendant or focus management.
        }
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
                <ul className="wim-selectbox-list" role="listbox">
                    {options.map((option) => (
                        <li
                            key={option.value}
                            className={`wim-selectbox-option ${currentValue === option.value ? "wim-selectbox-option--selected" : ""} ${option.disabled ? "wim-selectbox-option--disabled" : ""}`}
                            onClick={(e) => {
                                e.stopPropagation();
                                handleSelect(option);
                            }}
                            role="option"
                            aria-selected={currentValue === option.value}
                            aria-disabled={option.disabled}
                        >
                            {option.label}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

Selectbox.propTypes = {
    /**
     * 選択肢の配列。
     */
    options: PropTypes.arrayOf(
        PropTypes.shape({
            label: PropTypes.string.isRequired,
            value: PropTypes.string.isRequired,
            disabled: PropTypes.bool,
        })
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
};
