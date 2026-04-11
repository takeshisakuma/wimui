import React, { useState, useId, forwardRef } from "react";
import classNames from "classnames";
import { Slot, Slottable } from "@radix-ui/react-slot";
import { Checkbox } from "../../form/Checkbox/Checkbox";
import styles from "./checkbox-group.module.scss";
import { FieldTemplate } from "../FieldTemplate";

type Option = {
  label: string;
  value: string;
  disabled?: boolean;
};

export interface CheckboxGroupProps extends Omit<React.ComponentPropsWithoutRef<"div">, "onChange" | "defaultValue"> {
  options: Option[];
  value?: string[];
  defaultValue?: string[];
  onChange?: (value: string[]) => void;
  direction?: "vertical" | "horizontal";
  name?: string;
  asChild?: boolean;
  label?: string;
  error?: string;
  required?: boolean;
  disabled?: boolean;
}

/**
 * CheckboxGroup component to manage multiple checkboxes.
 */
export const CheckboxGroup = forwardRef<HTMLDivElement, CheckboxGroupProps>(
  (
    {
      options,
      value,
      defaultValue = [],
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
    const [internalValue, setInternalValue] = useState<string[]>(defaultValue);
    const generatedId = useId();
    const id = `wim-checkbox-group-${generatedId}`;
    const labelId = `${id}-label`;
    const errorId = error ? `${id}-error` : undefined;

    const currentValue = isControlled ? value : internalValue;

    const handleChange = (optionValue: string, checked: boolean) => {
      let newValue: string[];
      if (checked) {
        newValue = [...currentValue, optionValue];
      } else {
        newValue = currentValue.filter((v) => v !== optionValue);
      }

      if (!isControlled) {
        setInternalValue(newValue);
      }

      if (onChange) {
        onChange(newValue);
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
          role="group"
          aria-labelledby={label ? labelId : undefined}
          aria-describedby={errorId}
        >
          <Slottable>
            {options.map((option) => (
              <Checkbox
                key={option.value}
                value={option.value}
                checked={currentValue.includes(option.value)}
                disabled={disabled || option.disabled}
                name={name}
                onChange={(e) => handleChange(option.value, e.target.checked)}
              >
                {option.label}
              </Checkbox>
            ))}
          </Slottable>
          {children}
        </Component>
      </FieldTemplate>
    );
  },
);

CheckboxGroup.displayName = "CheckboxGroup";

export default CheckboxGroup;
