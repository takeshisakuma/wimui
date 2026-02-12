import React, { useState } from "react";
import classNames from "classnames";
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
            className={classNames(
                "wim-radio-group",
                direction === "horizontal" && "wim-radio-group--horizontal",
                className
            )}
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


