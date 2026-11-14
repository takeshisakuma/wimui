import { default as React } from '../../../../node_modules/react';
import { Input } from '../../form/Input/Input';
type InputMaskProps = React.ComponentProps<typeof Input> & {
    /** Mask pattern ('9': digit, 'a': letter, '*': alphanumeric; other characters are shown as-is) */
    mask: string;
    /** Placeholder character for unfilled mask positions */
    maskChar?: string;
};
/**
 * Masked input component that enforces a specific input format.
 * '9': digit (0-9)
 * 'a': letter (a-z, A-Z)
 * '*': alphanumeric
 * Other characters are shown as-is.
 */
export declare const InputMask: ({ mask, maskChar, value, defaultValue, onChange, ...props }: InputMaskProps) => React.JSX.Element;
export {};
