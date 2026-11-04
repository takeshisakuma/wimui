import { default as React } from '../../../../node_modules/react';
import { InputProps } from '../Input/Input';
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
/**
 * Input component specialized for credit card numbers.
 * Automatically detects card brand and formats input.
 */
export declare const CreditCardInput: React.ForwardRefExoticComponent<Omit<InputProps, "type" | "rightIcon"> & {
    /**
     * Callback when the card brand is detected.
     */
    onBrandChange?: (brand: CreditCardBrand) => void;
    /**
     * Whether to render as a child component.
     */
    asChild?: boolean;
} & React.RefAttributes<HTMLInputElement>>;
