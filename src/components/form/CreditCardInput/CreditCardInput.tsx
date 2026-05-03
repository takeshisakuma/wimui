import React, { useState, useCallback, useMemo, useEffect } from "react";
import { Slot } from "@radix-ui/react-slot";
import { Input, InputProps } from "../Input/Input";
import localStyles from "./credit-card-input.module.scss";

export type CreditCardBrand = "visa" | "mastercard" | "amex" | "discover" | "jcb" | "diners" | "generic";

export type CreditCardInputProps = Omit<InputProps, "type" | "rightIcon"> & {
  /**
   * Callback when the card brand is detected.
   */
  onBrandChange?: (brand: CreditCardBrand) => void;
  /**
   * Whether to render as a child component.
   */
  asChild?: boolean;
};


const getCardBrand = (number: string): CreditCardBrand => {
  const n = number.replace(/\D/g, "");
  if (n.startsWith("4")) return "visa";
  if (/^5[1-5]/.test(n)) return "mastercard";
  if (/^3[47]/.test(n)) return "amex";
  if (/^6(?:011|5)/.test(n)) return "discover";
  if (/^(?:2131|1800|35)/.test(n)) return "jcb";
  if (/^3(?:0[0-5]|[68])/.test(n)) return "diners";
  return "generic";
};

const formatCardNumber = (number: string, brand: CreditCardBrand): string => {
  const n = number.replace(/\D/g, "");
  if (brand === "amex") {
    // 4-6-5 format
    const parts = [
      n.slice(0, 4),
      n.slice(4, 10),
      n.slice(10, 15)
    ].filter(Boolean);
    return parts.join(" ");
  }
  if (brand === "diners") {
    // 4-6-4 format
    const parts = [
      n.slice(0, 4),
      n.slice(4, 10),
      n.slice(10, 14)
    ].filter(Boolean);
    return parts.join(" ");
  }
  // Default 4-4-4-4 format
  const parts = n.match(/.{1,4}/g);
  return parts ? parts.join(" ") : n;
};

const getMaxLength = (brand: CreditCardBrand): number => {
  if (brand === "amex") return 15 + 2; // 15 digits + 2 spaces
  if (brand === "diners") return 14 + 2; // 14 digits + 2 spaces
  return 16 + 3; // 16 digits + 3 spaces
};


/**
 * Input component specialized for credit card numbers.
 * Automatically detects card brand and formats input.
 */
export const CreditCardInput = React.forwardRef<HTMLInputElement, CreditCardInputProps>(
  ({ onChange, onBrandChange, value, defaultValue, asChild = false, children, ...props }, ref) => {
    const Component = asChild ? Slot : Input;
    const [internalValue, setInternalValue] = useState(() => {
      const initial = String(defaultValue || "");
      const b = getCardBrand(initial);
      return formatCardNumber(initial, b);
    });
    const isControlled = value !== undefined;
    const currentValue = isControlled ? formatCardNumber(String(value), getCardBrand(String(value))) : internalValue;

    const brand = useMemo(() => getCardBrand(currentValue), [currentValue]);

    useEffect(() => {
      onBrandChange?.(brand);
    }, [brand, onBrandChange]);

    const handleInputChange = useCallback(
      (e: React.ChangeEvent<HTMLInputElement>) => {
        const rawValue = e.target.value.replace(/\D/g, "");
        const detectedBrand = getCardBrand(rawValue);
        const formattedValue = formatCardNumber(rawValue, detectedBrand);

        if (!isControlled) {
          setInternalValue(formattedValue);
        }

        if (onChange) {
          const event = {
            ...e,
            target: { ...e.target, value: formattedValue },
          } as React.ChangeEvent<HTMLInputElement>;
          onChange(event);
        }
      },
      [isControlled, onChange],
    );

    return (
      <Component
        {...props}
        ref={ref}
        type="text"
        inputMode="numeric"
        autoComplete="cc-number"
        value={currentValue}
        onChange={handleInputChange}
        maxLength={getMaxLength(brand)}
        rightIcon="CreditCardIcon"
        className={localStyles.root}
      >
        {children}
      </Component>
    );
  },
);

CreditCardInput.displayName = "CreditCardInput";

