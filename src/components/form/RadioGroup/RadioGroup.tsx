import React, { useState, useId, forwardRef } from "react";
import classNames from "classnames";
import { Slot, Slottable } from "@radix-ui/react-slot";
import { Radio } from "../../form/Radio/Radio";
import styles from "./radio-group.module.scss";
import { FieldTemplate } from "../FieldTemplate";
import { ChoiceLabel, choiceLabelClasses } from "../../_internal/ChoiceLabel";

type Option = {
  label: string;
  value: string;
  disabled?: boolean;
  /** A second line that explains the option (shown under the label, and linked with `aria-describedby`) */
  description?: string;
};

export interface RadioGroupProps extends Omit<React.ComponentPropsWithoutRef<"div">, "onChange" | "defaultValue"> {
  /** List of radio options */
  options: Option[];
  /** Selected value (controlled) */
  value?: string;
  /** Initially selected value (uncontrolled) */
  defaultValue?: string;
  /** Callback when the selected value changes */
  onChange?: (value: string) => void;
  /** Layout direction of the radio buttons */
  direction?: "vertical" | "horizontal";
  /**
   * `card` draws each option as a bordered card that is selectable as a whole
   * (the card is the option's `<label>`). Keys and group semantics stay those
   * of a radio group. Use with `description` when the options need explaining.
   * @default "default"
   */
  variant?: "default" | "card";
  /** Name attribute shared by the radio inputs */
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
      variant = "default",
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
          className={classNames("wim-radio-group", 
            styles.root,
            direction === "horizontal" && styles.horizontal,
            variant === "card" && styles.cards,
          )}
          role="radiogroup"
          // 利用者が渡した参照を捨てない（T328）。以前はここで固定の値を書いていて、ラベルやエラーを
          // prop で渡さないとき、外の見出しや説明文への参照が `undefined` で上書きされていた。
          aria-labelledby={label ? labelId : props["aria-labelledby"]}
          aria-describedby={[props["aria-describedby"], errorId].filter(Boolean).join(" ") || undefined}
          aria-required={required}
          aria-invalid={!!error}
        >
          {options.map((option) => {
            const descriptionId = option.description ? `${id}-${option.value}-description` : undefined;
            const labelTextId = option.description ? `${id}-${option.value}-label` : undefined;
            return (
              <Radio
                key={option.value}
                value={option.value}
                checked={currentValue === option.value}
                disabled={disabled || option.disabled}
                error={!!error}
                name={name}
                onChange={() => handleChange(option.value)}
                aria-describedby={descriptionId}
                aria-labelledby={labelTextId}
                className={classNames(
                  variant === "card" && choiceLabelClasses.card,
                  option.description && choiceLabelClasses.top,
                )}
              >
                <ChoiceLabel
                  label={option.label}
                  description={option.description}
                  descriptionId={descriptionId}
                  labelId={labelTextId}
                />
              </Radio>
            );
          })}
          {/* 利用者の要素（asChild の子）を Slottable に入れる。Slot はこれを根にして、上の中身をその中に描く。
              以前は逆（中身を Slottable に入れていた）で、asChild を付けると描画で例外になるか、部品の
              クラスが利用者の要素に付かなかった（T337）。 */}
          <Slottable>{children}</Slottable>
        </Component>
      </FieldTemplate>
    );
  },
);

RadioGroup.displayName = "RadioGroup";

export default RadioGroup;
