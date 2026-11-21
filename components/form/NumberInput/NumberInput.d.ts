import { default as React } from '../../../../node_modules/react';
import { Input } from '../../form/Input/Input';
export interface NumberInputProps extends React.ComponentPropsWithoutRef<typeof Input> {
    /**
     * 'number': uses the native type="number" (e.g. quantity steppers)
     * 'text': uses type="text" + inputmode (e.g. card numbers or IDs where leading zeros must be kept)
     */
    mode?: "number" | "text";
    /** Whether to hide the spin buttons */
    hideSpinButton?: boolean;
    /** Whether to allow decimals (effective only when mode="number"). When false, both "." and "," are blocked — a browser in a locale that writes decimals with a comma takes "," as the decimal separator. */
    allowDecimal?: boolean;
    /** Whether to allow negative numbers (effective only when mode="number") */
    allowNegative?: boolean;
    /** Whether to render as a child element. */
    asChild?: boolean;
}
/**
 * Component specialized for numeric input.
 */
export declare const NumberInput: React.ForwardRefExoticComponent<NumberInputProps & React.RefAttributes<HTMLInputElement>>;
export default NumberInput;
