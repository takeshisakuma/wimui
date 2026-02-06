import React, { useState } from "react";
import PropTypes from "prop-types";
import { Radio } from "../Radio/Radio";
import "./radio-group.scss";

type Option = {
    label: string;
    value: string;
    disabled?: boolean;
};

type RadioGroupProps = {
    options: Option[];
    value?: string;
    defaultValue?: string;
    onChange?: (value: string) => void;
    direction?: "vertical" | "horizontal";
    name?: string;
    className?: string;
};

/**
 * RadioGroup component to manage multiple radio buttons.
 */
export const RadioGroup = ({
    options,
    value,
    defaultValue,
    onChange,
    direction = "vertical",
    name,
    className,
}: RadioGroupProps) => {
    const isControlled = value !== undefined;
    const [internalValue, setInternalValue] = useState<string | undefined>(defaultValue);

    const currentValue = isControlled ? value : internalValue;

    const handleChange = (optionValue: string) => {
        if (!isControlled) {
            setInternalValue(optionValue);
        }

        if (onChange) {
            onChange(optionValue);
        }
    };

    return (
        <div
            className={[
                "wim-radio-group",
                direction === "horizontal" ? "wim-radio-group--horizontal" : "",
                className,
            ]
                .filter(Boolean)
                .join(" ")}
            role="radiogroup"
        >
            {options.map((option) => (
                <Radio
                    key={option.value}
                    label={option.label}
                    value={option.value}
                    checked={currentValue === option.value}
                    disabled={option.disabled}
                    name={name}
                    onChange={() => handleChange(option.value)}
                />
            ))}
        </div>
    );
};

RadioGroup.propTypes = {
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
     * Currently selected value (controlled mode).
     */
    value: PropTypes.string,
    /**
     * Default selected value (uncontrolled mode).
     */
    defaultValue: PropTypes.string,
    /**
     * Callback fired when value changes.
     */
    onChange: PropTypes.func,
    /**
     * Layout direction of the radio buttons.
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
