import { default as React } from '../../../../node_modules/react';
import { Icon } from '../../media/Icon/Icon';
import { InputBase } from '../InputBase';
import { FieldIntent, FieldVariant, FieldWidth } from '../../../types/tokens';
export interface InputProps extends Omit<React.ComponentPropsWithoutRef<"input">, "prefix"> {
    /** Semantic intent of the field (e.g. error state) */
    intent?: FieldIntent;
    /** Visual style variant of the field */
    variant?: FieldVariant;
    /** Whether to take full width of parent */
    fullWidth?: boolean;
    /** Icon name to display on the left side */
    leftIcon?: React.ComponentProps<typeof Icon>["name"];
    /** Icon name to display on the right side */
    rightIcon?: React.ComponentProps<typeof Icon>["name"];
    /** Color of the left icon */
    leftIconColor?: React.ComponentProps<typeof Icon>["color"];
    /** Color of the right icon */
    rightIconColor?: React.ComponentProps<typeof Icon>["color"];
    /** Callback when the left icon is clicked (renders the icon as a button) */
    onLeftIconClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
    /** Callback when the right icon is clicked (renders the icon as a button) */
    onRightIconClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
    /** Whether to show a clear button when value is present */
    allowClear?: boolean;
    /** Whether to show the visibility toggle when type is "password" */
    showPasswordToggle?: boolean;
    /** Additional class name for the right icon */
    rightIconClassName?: string;
    /** Whether to rotate the right icon 180 degrees (e.g. for an open state) */
    rightIconRotated?: boolean;
    /** Fixed width of the field (width token, CSS value, or number in px) */
    width?: FieldWidth | string | number;
    /** Field label */
    label?: React.ReactNode;
    /** Error message */
    error?: string;
    /** Whether to show the required indicator */
    required?: boolean;
    /** Layout direction of label and field */
    layout?: "vertical" | "horizontal";
    /** Additional class name for the inner input element */
    inputClassName?: string;
    /** Aria label for the show-password toggle */
    showPasswordAriaLabel?: string;
    /** Aria label for the hide-password toggle */
    hidePasswordAriaLabel?: string;
    /** Aria label for the right icon button */
    rightIconAriaLabel?: string;
    /**
     * Static text shown after the field, inside the same shell — a unit such as
     * `kg`, `%` or `円`. It is announced with the field via `aria-describedby`,
     * so the unit does not have to be repeated in the label.
     */
    suffix?: React.ReactNode;
    /** Custom styles for internal parts */
    styles?: React.ComponentProps<typeof InputBase>["styles"];
    /** Whether to render as a child element. */
    asChild?: boolean;
}
/**
 * Basic component for accepting user input.
 */
export declare const Input: React.ForwardRefExoticComponent<InputProps & React.RefAttributes<HTMLInputElement>>;
export default Input;
