import React, { useState, useId } from "react";
import classNames from "classnames";
import { Radio } from "../../form/Radio/Radio";
import styles from "./radio-group.module.scss";
import { FieldTemplate } from "../FieldTemplate";

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
  error?: string;
  required?: boolean;
  disabled?: boolean;
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
  error,
  required,
  disabled,
}: RadioGroupProps) => {
  const isControlled = value !== undefined;
  const [internalValue, setInternalValue] = useState<string | undefined>(
    defaultValue,
  );
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

  return (
    <FieldTemplate
      label={label}
      error={error}
      required={required}
      labelId={labelId}
      className={className}
    >
      <div
        className={classNames(
          styles.root,
          direction === "horizontal" && styles.horizontal,
        )}
        role="radiogroup"
        aria-labelledby={label ? labelId : undefined}
      >
        {options.map((option) => (
          <Radio
            key={option.value}
            value={option.value}
            checked={currentValue === option.value}
            disabled={disabled || option.disabled}
            name={name}
            onChange={() => handleChange(option.value)}
          >
            {option.label}
          </Radio>
        ))}
      </div>
    </FieldTemplate>
  );
};
