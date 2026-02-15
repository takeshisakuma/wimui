import React, { useState, useId } from "react";
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
    label?: string;
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
    label,
}: RadioGroupProps) => {
    const isControlled = value !== undefined;
    const [internalValue, setInternalValue] = useState<string | undefined>(defaultValue);
    const generatedId = useId();
    const labelId = `wim-radio-group-label-${generatedId}`;

    const currentValue = isControlled ? value : internalValue;

    const handleChange = (optionValue: string) => {
        if (!isControlled) {
            setInternalValue(optionValue);
        }

        if (onChange) {
            onChange(optionValue);
        }
    };

    const content = (
        <div
            className={classNames(
                "wim-radio-group",
                direction === "horizontal" && "wim-radio-group--horizontal",
                className
            )}
            role="radiogroup"
            aria-labelledby={label ? labelId : undefined}
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

    if (label) {
        return (
            <div className="wim-radio-group-container">
                <span id={labelId} className="wim-label" style={{ display: 'block', marginBottom: '8px' }}>
                    {label}
                </span>
                {content}
            </div>
        );
    }

    return content;
};



