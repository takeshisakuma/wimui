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
  /** List of checkbox options */
  options: Option[];
  /** Selected values (controlled) */
  value?: string[];
  /** Initially selected values (uncontrolled) */
  defaultValue?: string[];
  /** Callback when the selected values change */
  onChange?: (value: string[]) => void;
  /** Layout direction of the checkboxes */
  direction?: "vertical" | "horizontal";
  /** Name attribute shared by the checkbox inputs */
  name?: string;
  /** Whether to render as a child element. */
  asChild?: boolean;
  /** Group label */
  label?: string;
  /** Error message */
  error?: string;
  /** Whether to show the required indicator */
  required?: boolean;
  /** Whether the whole group is disabled */
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
          className={classNames("wim-checkbox-group", 
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
                error={!!error}
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
