import React, { useState, useRef, useEffect, useId } from "react";
import classNames from "classnames";
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
    id?: string;
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
    className,
    disabled = false,
    defaultValue = [],
    id: customId,
    ...props
}: MultiSelectProps) => {
    const [isOpen, setIsOpen] = useState(false);
    const [internalValue, setInternalValue] = useState<string[]>(defaultValue);
    const containerRef = useRef<HTMLDivElement>(null);
    const generatedId = useId();
    const id = customId || generatedId;
    const listId = `wim-multiselect-list-${id}`;
    const labelId = `wim-multiselect-label-${id}`;
    const triggerId = `wim-multiselect-trigger-${id}`;

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

    const {
        'aria-label': ariaLabel,
        'aria-labelledby': ariaLabelledBy,
        'aria-describedby': ariaDescribedBy,
        ...wrapperProps
    } = props as any;

    return (
        <div
            className={classNames("wim-multiselect", className)}
            ref={containerRef}
            {...wrapperProps}
        >
            {label && (
                <label id={labelId} htmlFor={triggerId} className="wim-label">
                    {label}
                </label>
            )}
            <div
                id={triggerId}
                className={classNames(
                    "wim-multiselect-trigger",
                    isOpen && "wim-multiselect-trigger--open",
                    disabled && "wim-multiselect-trigger--disabled"
                )}
                onClick={handleToggle}
                tabIndex={disabled ? -1 : 0}
                role="combobox"
                aria-expanded={isOpen}
                aria-haspopup="listbox"
                aria-controls={isOpen ? listId : undefined}
                aria-disabled={disabled}
                aria-labelledby={label ? labelId : ariaLabelledBy}
                aria-label={label ? undefined : (ariaLabel || placeholder)}
                aria-describedby={ariaDescribedBy}
                onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                        e.preventDefault();
                        handleToggle(e as any);
                    }
                    if (e.key === "ArrowDown" && !isOpen) {
                        e.preventDefault();
                        setIsOpen(true);
                    }
                    if (e.key === "Escape" && isOpen) {
                        e.preventDefault();
                        setIsOpen(false);
                    }
                }}
            >
                <div className={classNames(
                    "wim-multiselect-value",
                    selectedOptions.length === 0 && "wim-multiselect-value--placeholder"
                )}>
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
                <ul
                    id={listId}
                    className="wim-multiselect-list"
                    role="listbox"
                    aria-multiselectable="true"
                    aria-labelledby={label ? labelId : (ariaLabelledBy || undefined)}
                >
                    {options.map((option) => {
                        const isSelected = currentValues?.includes(option.value);
                        return (
                            <li
                                key={option.value}
                                className={classNames(
                                    "wim-multiselect-option",
                                    isSelected && "wim-multiselect-option--selected",
                                    option.disabled && "wim-multiselect-option--disabled"
                                )}
                                onClick={() => !option.disabled && handleSelect(option.value)}
                                role="option"
                                aria-selected={isSelected}
                                aria-disabled={option.disabled}
                                tabIndex={0}
                                onKeyDown={(e) => {
                                    if ((e.key === "Enter" || e.key === " ") && !option.disabled) {
                                        e.preventDefault();
                                        handleSelect(option.value);
                                    }
                                }}
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



