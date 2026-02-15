import React, { useState, useId } from "react";
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
    label?: string;
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
    label,
}: CheckboxGroupProps) => {
    const isControlled = value !== undefined;
    const [internalValue, setInternalValue] = useState<string[]>(defaultValue);
    const generatedId = useId();
    const labelId = `wim-checkbox-group-label-${generatedId}`;

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

    const content = (
        <div
            className={classNames(
                "wim-checkbox-group",
                direction === "horizontal" && "wim-checkbox-group--horizontal",
                className
            )}
            role="group"
            aria-labelledby={label ? labelId : undefined}
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

    if (label) {
        return (
            <div className="wim-checkbox-group-container">
                <span id={labelId} className="wim-label" style={{ display: 'block', marginBottom: '8px' }}>
                    {label}
                </span>
                {content}
            </div>
        );
    }

    return content;
};



