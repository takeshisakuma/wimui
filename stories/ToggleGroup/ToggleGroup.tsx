import React, { useState } from "react";
import PropTypes from "prop-types";
import { Icon } from "../Icon/Icon";
import "./toggle-group.scss";

type Option = {
    label?: string;
    value: string;
    iconName?: any; // Name from Icon component
    disabled?: boolean;
};

type ToggleGroupProps = {
    options: Option[];
    value?: string | string[];
    defaultValue?: string | string[];
    onChange?: (value: any) => void;
    selectionMode?: "single" | "multiple";
    size?: "small" | "medium" | "large";
    fullWidth?: boolean;
    className?: string;
};

/**
 * ToggleGroup component allows users to select one or multiple options from a set of buttons.
 */
export const ToggleGroup = ({
    options,
    value,
    defaultValue,
    onChange,
    selectionMode = "single",
    size = "medium",
    fullWidth = false,
    className = "",
}: ToggleGroupProps) => {
    const isControlled = value !== undefined;
    const [internalValue, setInternalValue] = useState<string | string[]>(
        defaultValue ?? (selectionMode === "multiple" ? [] : "")
    );

    const currentValue = isControlled ? value : internalValue;

    const handleToggle = (optionValue: string) => {
        let newValue: string | string[];

        if (selectionMode === "multiple") {
            const currentArray = Array.isArray(currentValue) ? currentValue : [];
            if (currentArray.includes(optionValue)) {
                newValue = currentArray.filter((v) => v !== optionValue);
            } else {
                newValue = [...currentArray, optionValue];
            }
        } else {
            // In single mode, clicking the already selected item might deselect it (optional behavior)
            // But usually for ToggleGroup, it acts like radio buttons or can be deselected.
            // Let's allow deselecting if it's the same value.
            newValue = currentValue === optionValue ? "" : optionValue;
        }

        if (!isControlled) {
            setInternalValue(newValue);
        }

        if (onChange) {
            onChange(newValue);
        }
    };

    const isSelected = (optionValue: string) => {
        if (selectionMode === "multiple") {
            return (Array.isArray(currentValue) ? currentValue : []).includes(optionValue);
        }
        return currentValue === optionValue;
    };

    const sizeMap: Record<"small" | "medium" | "large", string> = {
        small: "sm",
        medium: "md",
        large: "lg",
    };

    const containerClass = [
        "wim-toggle-group",
        `wim-toggle-group--${sizeMap[size]}`,
        fullWidth ? "wim-toggle-group--full-width" : "",
        className,
    ]
        .filter(Boolean)
        .join(" ");

    return (
        <div className={containerClass} role="group">
            {options.map((option) => (
                <button
                    key={option.value}
                    type="button"
                    className={[
                        "wim-toggle-group__item",
                        isSelected(option.value) ? "wim-toggle-group__item--active" : "",
                        !option.label && option.iconName ? "wim-toggle-group__item--icon-only" : "",
                    ]
                        .filter(Boolean)
                        .join(" ")}
                    onClick={() => handleToggle(option.value)}
                    disabled={option.disabled}
                    aria-pressed={isSelected(option.value)}
                    aria-label={option.label || option.value}
                >
                    {option.iconName && (
                        <Icon
                            name={option.iconName}
                            size={size}
                        />
                    )}
                    {option.label && (
                        <span className="wim-toggle-group__label">{option.label}</span>
                    )}
                </button>
            ))}
        </div>
    );
};

ToggleGroup.propTypes = {
    /**
     * Array of options to display.
     */
    options: PropTypes.arrayOf(
        PropTypes.shape({
            label: PropTypes.string,
            value: PropTypes.string.isRequired,
            iconName: PropTypes.string,
            disabled: PropTypes.bool,
        })
    ).isRequired,
    /**
     * Currently selected value(s) (controlled mode).
     */
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.arrayOf(PropTypes.string)]),
    /**
     * Default selected value(s) (uncontrolled mode).
     */
    defaultValue: PropTypes.oneOfType([PropTypes.string, PropTypes.arrayOf(PropTypes.string)]),
    /**
     * Callback fired when selection changes.
     */
    onChange: PropTypes.func,
    /**
     * Whether single or multiple options can be selected.
     */
    selectionMode: PropTypes.oneOf(["single", "multiple"]),
    /**
     * Size of the toggle items.
     */
    size: PropTypes.oneOf(["small", "medium", "large"]),
    /**
     * Whether the group should take up the full width of its container.
     */
    fullWidth: PropTypes.bool,
    /**
     * Additional class names.
     */
    className: PropTypes.string,
};
