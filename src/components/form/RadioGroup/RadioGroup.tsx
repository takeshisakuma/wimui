import React, { useState, useId, forwardRef } from "react";
import classNames from "classnames";
import { Slot, Slottable } from "@radix-ui/react-slot";
import { Radio } from "../../form/Radio/Radio";
import styles from "./radio-group.module.scss";
import { FieldTemplate } from "../FieldTemplate";

type Option = {
  label: string;
  value: string;
  disabled?: boolean;
};

export interface RadioGroupProps extends Omit<React.ComponentPropsWithoutRef<"div">, "onChange" | "defaultValue"> {
  options: Option[];
  value?: string;
  defaultValue?: string;
  onChange?: (value: string) => void;
  direction?: "vertical" | "horizontal";
  name?: string;
  asChild?: boolean;
  label?: string;
  error?: string;
  required?: boolean;
  disabled?: boolean;
}

/**
 * RadioGroup component to manage multiple radio buttons.
 */
export const RadioGroup = forwardRef<HTMLDivElement, RadioGroupProps>(
  (
    {
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
      asChild = false,
      children,
      ...props
    },
    ref,
  ) => {
    const isControlled = value !== undefined;
    const [internalValue, setInternalValue] = useState<string | undefined>(
      defaultValue,
    );
    const generatedId = useId();
    const id = `wim-radio-group-${generatedId}`;
    const labelId = `${id}-label`;
    const errorId = error ? `${id}-error` : undefined;

    const currentValue = isControlled ? value : internalValue;

    const handleChange = (optionValue: string) => {
      if (!isControlled) {
        setInternalValue(optionValue);
      }

      if (onChange) {
        onChange(optionValue);
      }
    };

    const Component = asChild ? Slot : "div";

    return (
      <FieldTemplate
        label={label}
        error={error}
        required={required}
        labelId={labelId}
        errorId={errorId}
        className={className}
      >
        <Component
          {...props}
          ref={ref}
          className={classNames(
            styles.root,
            direction === "horizontal" && styles.horizontal,
          )}
          role="radiogroup"
          aria-labelledby={label ? labelId : undefined}
          aria-describedby={errorId}
          aria-required={required}
          aria-invalid={!!error}
        >
          <Slottable>
            {options.map((option) => (
              <Radio
                key={option.value}
                value={option.value}
                checked={currentValue === option.value}
                disabled={disabled || option.disabled}
                error={!!error}
                name={name}
                onChange={() => handleChange(option.value)}
              >
                {option.label}
              </Radio>
            ))}
          </Slottable>
          {children}
        </Component>
      </FieldTemplate>
    );
  },
);

RadioGroup.displayName = "RadioGroup";

export default RadioGroup;
