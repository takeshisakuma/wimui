import React, { useState, useRef, useEffect, useMemo, useId } from "react";
import classNames from "classnames";
import { Transition } from "../Transition/Transition";
import { Icon } from "../Icon/Icon";
import "./cascader.scss";

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
    className?: string;
    disabled?: boolean;
    defaultValue?: string[];
    id?: string;
    /** Expand trigger mode */
    expandTrigger?: "click" | "hover";
    /** Custom separator for the display value */
    separator?: string;
};

/**
 * 階層構造を持つデータから選択肢を辿って1つを選択するためのコンポーネント。
 */
export const Cascader = ({
    options = [],
    value,
    onChange,
    placeholder = "Select",
    label,
    className,
    disabled = false,
    defaultValue,
    id: customId,
    expandTrigger = "click",
    separator = " / ",
    ...props
}: CascaderProps) => {
    const generatedId = useId();
    const id = customId || generatedId;
    const labelId = `wim-cascader-label-${id}`;
    const triggerId = `wim-cascader-trigger-${id}`;

    const [isOpen, setIsOpen] = useState(false);
    const [internalValue, setInternalValue] = useState<string[]>(defaultValue || []);
    const [activePath, setActivePath] = useState<string[]>([]);

    const containerRef = useRef<HTMLDivElement>(null);
    const isControlled = value !== undefined;
    const currentValue = isControlled ? value : internalValue;

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
            if (!isOpen) {
                // Initialize active path with current value if exists
                setActivePath(currentValue || []);
            }
        }
    };

    const getSelectedLabel = () => {
        if (!currentValue || currentValue.length === 0) return null;

        const labels: string[] = [];
        let currentOptions = options;

        for (const val of currentValue) {
            const opt = currentOptions.find(o => o.value === val);
            if (opt) {
                labels.push(opt.label);
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
                    const opt = opts.find(o => o.value === val);
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

    const handleOptionHover = (option: CascaderOption, level: number) => {
        if (expandTrigger === "hover" && !option.disabled) {
            setActivePath([...activePath.slice(0, level), option.value]);
        }
    };

    const renderMenus = () => {
        const menus = [];
        let currentOptions = options;

        // Always render at least the first level
        menus.push(currentOptions);

        for (let i = 0; i < activePath.length; i++) {
            const activeVal = activePath[i];
            const activeOpt = currentOptions.find(o => o.value === activeVal);
            if (activeOpt && activeOpt.children && activeOpt.children.length > 0) {
                menus.push(activeOpt.children);
                currentOptions = activeOpt.children;
            } else {
                break;
            }
        }

        return menus.map((menuOptions, level) => (
            <div key={level} className="wim-cascader__menu">
                {menuOptions.map(option => {
                    const isActive = activePath[level] === option.value;
                    const isSelected = currentValue[level] === option.value;
                    const hasChildren = option.children && option.children.length > 0;

                    return (
                        <div
                            key={option.value}
                            className={classNames(
                                "wim-cascader__menu-item",
                                isActive && "wim-cascader__menu-item--active",
                                isSelected && "wim-cascader__menu-item--selected",
                                option.disabled && "wim-cascader__menu-item--disabled"
                            )}
                            onClick={(e) => {
                                e.stopPropagation();
                                handleOptionSelect(option, level);
                            }}
                            onMouseEnter={() => handleOptionHover(option, level)}
                            role="menuitem"
                        >
                            <span className="wim-cascader__menu-item-label">{option.label}</span>
                            {hasChildren && (
                                <span className="wim-cascader__menu-item-expand">
                                    <Icon name="ChevronRightIcon" size="small" />
                                </span>
                            )}
                        </div>
                    );
                })}
            </div>
        ));
    };

    const displayValue = getSelectedLabel();

    return (
        <div
            className={classNames("wim-cascader", className)}
            ref={containerRef}
            {...(props as any)}
        >
            {label && (
                <label id={labelId} htmlFor={triggerId} className="wim-cascader__label">
                    {label}
                </label>
            )}
            <div
                id={triggerId}
                className={classNames(
                    "wim-cascader__trigger",
                    isOpen && "wim-cascader__trigger--open",
                    disabled && "wim-cascader__trigger--disabled"
                )}
                onClick={handleToggle}
                tabIndex={disabled ? -1 : 0}
                role="combobox"
                aria-expanded={isOpen}
                aria-haspopup="listbox"
                aria-disabled={disabled}
                aria-labelledby={label ? labelId : undefined}
            >
                <div className={classNames("wim-cascader__value", !displayValue && "wim-cascader__value--placeholder")}>
                    {displayValue || placeholder}
                </div>
                <div className="wim-cascader__icon">
                    <Icon name="ChevronDownIcon" size="medium" />
                </div>
            </div>

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
    );
};
