import React, { useState } from "react";
import PropTypes from "prop-types";
import { Switch } from "../Switch/Switch";
import "./switch-group.scss";

type Option = {
    label: string;
    value: string;
    disabled?: boolean;
};

type SwitchGroupProps = {
    options: Option[];
    value?: string[];
    defaultValue?: string[];
    onChange?: (value: string[]) => void;
    direction?: "vertical" | "horizontal";
    name?: string;
    className?: string;
};

/**
 * SwitchGroup component to manage multiple switches.
 */
export const SwitchGroup = ({
    options,
    value,
    defaultValue = [],
    onChange,
    direction = "vertical",
    name,
    className,
}: SwitchGroupProps) => {
    const isControlled = value !== undefined;
    const [internalValue, setInternalValue] = useState<string[]>(defaultValue);

    const currentValue = isControlled ? value : internalValue;

    const handleChange = (optionValue: string, checked: boolean) => {
        let newValue: string[];
        if (checked) {
            newValue = [...(currentValue || []), optionValue];
        } else {
            newValue = (currentValue || []).filter((v) => v !== optionValue);
        }

        if (!isControlled) {
            setInternalValue(newValue);
        }

        if (onChange) {
            onChange(newValue);
        }
    };

    return (
        <div
            className={[
                "wim-switch-group",
                direction === "horizontal" ? "wim-switch-group--horizontal" : "",
                className,
            ]
                .filter(Boolean)
                .join(" ")}
        >
            {options.map((option) => (
                <Switch
                    key={option.value}
                    label={option.label}
                    value={option.value}
                    checked={(currentValue || []).includes(option.value)}
                    disabled={option.disabled}
                    name={name}
                    onChange={(e) => handleChange(option.value, e.target.checked)}
                />
            ))}
        </div>
    );
};

SwitchGroup.propTypes = {
    /**
     * Array of options to display.
     */
    options: PropTypes.arrayOf(
        PropTypes.shape({
            label: PropTypes.string.isRequired,
            value: PropTypes.string.isRequired,
            disabled: PropTypes.bool,
        }).isRequired
    ).isRequired,
    /**
     * Currently selected values (controlled mode).
     */
    value: PropTypes.arrayOf(PropTypes.string.isRequired),
    /**
     * Default selected values (uncontrolled mode).
     */
    defaultValue: PropTypes.arrayOf(PropTypes.string.isRequired),
    /**
     * Callback fired when value changes.
     */
    onChange: PropTypes.func,
    /**
     * Layout direction of the switches.
     */
    direction: PropTypes.oneOf(["vertical", "horizontal"]),
    /**
     * Name attribute for the input elements.
     */
    name: PropTypes.string,
    /**
     * Additional class names.
     */
    className: PropTypes.string,
};
