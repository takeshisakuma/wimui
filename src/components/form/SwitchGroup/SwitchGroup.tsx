import React, { useState, useId, forwardRef } from "react";
import classNames from "classnames";
import { Slot, Slottable } from "@radix-ui/react-slot";
import { Switch } from "../../form/Switch/Switch";
import styles from "./switch-group.module.scss";
import { FieldTemplate } from "../FieldTemplate";

type Option = {
  label: string;
  value: string;
  disabled?: boolean;
};

export interface SwitchGroupProps extends Omit<React.ComponentPropsWithoutRef<"div">, "onChange" | "defaultValue"> {
  options: Option[];
  value?: string[];
  defaultValue?: string[];
  onChange?: (value: string[]) => void;
  direction?: "vertical" | "horizontal";
  name?: string;
  asChild?: boolean;
  /**
   * グループのラベル
   */
  label?: string;
  error?: string;
  required?: boolean;
  disabled?: boolean;
}

/**
 * SwitchGroup component to manage multiple switches.
 */
export const SwitchGroup = forwardRef<HTMLDivElement, SwitchGroupProps>(
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
    const id = `wim-switch-group-${generatedId}`;
    const labelId = `${id}-label`;
    const errorId = error ? `${id}-error` : undefined;

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
              <Switch
                key={option.value}
                value={option.value}
                checked={(currentValue || []).includes(option.value)}
                disabled={disabled || option.disabled}
                error={!!error}
                name={name}
                onChange={(e) => handleChange(option.value, e.target.checked)}
              >
                {option.label}
              </Switch>
            ))}
          </Slottable>
          {children}
        </Component>
      </FieldTemplate>
    );
  },
);

SwitchGroup.displayName = "SwitchGroup";

export default SwitchGroup;
