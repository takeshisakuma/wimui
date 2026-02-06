import React, { useState, useRef, useEffect } from "react";
import PropTypes from "prop-types";
import { Icon } from "../Icon/Icon";
import { Chip } from "../Chip/Chip";
import "./multiselect.scss";

export type MultiSelectOption = {
    label: string;
    value: string;
    disabled?: boolean;
};

export type MultiSelectProps = {
    options: MultiSelectOption[];
    value?: string[];
    onChange?: (value: string[]) => void;
    placeholder?: string;
    label?: string;
    className?: string;
    disabled?: boolean;
    defaultValue?: string[];
};

/**
 * ユーザーが定義済みの選択肢から複数を選択するためのドロップダウンメニュー。
 */
export const MultiSelect = ({
    options = [],
    value,
    onChange,
    placeholder = "Select options...",
    label,
    className = "",
    disabled = false,
    defaultValue = [],
    ...props
}: MultiSelectProps) => {
    const [isOpen, setIsOpen] = useState(false);
    const [internalValue, setInternalValue] = useState<string[]>(defaultValue);
    const containerRef = useRef<HTMLDivElement>(null);

    const isControlled = value !== undefined;
    const currentValues = isControlled ? value : internalValue;

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    const handleToggle = (e: React.MouseEvent) => {
        if (disabled) return;
        // Don't toggle if clicking on a remove button in a badge
        if ((e.target as HTMLElement).closest(".wim-multiselect-badge-remove")) return;

        setIsOpen(!isOpen);
    };

    const handleSelect = (optionValue: string) => {
        if (disabled) return;

        let newValues: string[];
        if (currentValues?.includes(optionValue)) {
            newValues = currentValues.filter(v => v !== optionValue);
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

    const handleRemove = (e: React.MouseEvent, optionValue: string) => {
        e.stopPropagation(); // Stop trigger from toggling
        if (disabled) return;

        const newValues = (currentValues || []).filter(v => v !== optionValue);

        if (!isControlled) {
            setInternalValue(newValues);
        }

        if (onChange) {
            onChange(newValues);
        }
    };

    const selectedOptions = options.filter(opt => currentValues?.includes(opt.value));

    return (
        <div
            className={`wim-multiselect ${className}`}
            ref={containerRef}
            {...props}
        >
            {label && <label className="wim-label">{label}</label>}
            <div
                className={`wim-multiselect-trigger ${isOpen ? "wim-multiselect-trigger--open" : ""} ${disabled ? "wim-multiselect-trigger--disabled" : ""}`}
                onClick={handleToggle}
                tabIndex={disabled ? -1 : 0}
                role="combobox"
                aria-expanded={isOpen}
                aria-haspopup="listbox"
                aria-disabled={disabled}
            >
                <div className={`wim-multiselect-value ${selectedOptions.length === 0 ? "wim-multiselect-value--placeholder" : ""}`}>
                    {selectedOptions.length > 0 ? (
                        selectedOptions.map(opt => (
                            <Chip
                                key={opt.value}
                                label={opt.label}
                                size="small"
                                color="neutral"
                                variant="solid"
                                onDelete={!disabled ? (e) => handleRemove(e, opt.value) : undefined}
                                className="wim-multiselect-badge"
                            />
                        ))
                    ) : (
                        placeholder
                    )}
                </div>
                <div className="wim-multiselect-icon">
                    <Icon name="ChevronDownIcon" size="small" />
                </div>
            </div>

            {isOpen && !disabled && (
                <ul className="wim-multiselect-list" role="listbox" aria-multiselectable="true">
                    {options.map((option) => {
                        const isSelected = currentValues?.includes(option.value);
                        return (
                            <li
                                key={option.value}
                                className={`wim-multiselect-option ${isSelected ? "wim-multiselect-option--selected" : ""} ${option.disabled ? "wim-multiselect-option--disabled" : ""}`}
                                onClick={() => !option.disabled && handleSelect(option.value)}
                                role="option"
                                aria-selected={isSelected}
                                aria-disabled={option.disabled}
                            >
                                <span>{option.label}</span>
                                {isSelected && <Icon name="CheckIcon" size="small" />}
                            </li>
                        );
                    })}
                </ul>
            )}
        </div>
    );
};

MultiSelect.propTypes = {
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
     * 現在の選択された値の配列 (制御されたコンポーネントの場合)。
     */
    value: PropTypes.arrayOf(PropTypes.string),
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
    defaultValue: PropTypes.arrayOf(PropTypes.string),
};
