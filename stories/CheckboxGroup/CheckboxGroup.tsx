import React, { useState } from "react";
import classNames from "classnames";
import { Checkbox } from "../Checkbox/Checkbox";
import "./checkbox-group.scss";

type Option = {
    label: string;
    value: string;
    disabled?: boolean;
};

type CheckboxGroupProps = {
    options: Option[];
    value?: string[];
    defaultValue?: string[];
    onChange?: (value: string[]) => void;
    direction?: "vertical" | "horizontal";
    name?: string;
    className?: string;
};

/**
 * CheckboxGroup component to manage multiple checkboxes.
 */
export const CheckboxGroup = ({
    options,
    value,
    defaultValue = [],
    onChange,
    direction = "vertical",
    name,
    className,
}: CheckboxGroupProps) => {
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
            className={classNames(
                "wim-checkbox-group",
                direction === "horizontal" && "wim-checkbox-group--horizontal",
                className
            )}
        >
            {options.map((option) => (
                <Checkbox
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


