import { default as React } from '../../../../node_modules/react';
import { ButtonProps } from '../../form/Button/Button';
import { ComponentSizeBasic, ButtonVariant, ButtonIntent } from '../../../types/tokens';
export type LinkButtonProps = React.ComponentPropsWithoutRef<"a"> & Omit<ButtonProps, "onClick" | "type"> & {
    /** Position of the icon relative to the label */
    iconPosition?: "left" | "right";
    /** Size of the button */
    size?: ComponentSizeBasic;
    /** Visual style variant of the button */
    variant?: ButtonVariant;
    /** Design intent of the button (visual / semantic state). Unrelated to the ARIA role attribute. */
    intent?: ButtonIntent;
    /** Horizontal alignment of the button content */
    justify?: "start" | "center" | "end" | "between";
    /** Whether the button should take up the full width of its container */
    fullWidth?: boolean;
};
/**
 * Anchor (link) component that looks like a button.
 */
export declare const LinkButton: React.ForwardRefExoticComponent<Omit<React.DetailedHTMLProps<React.AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement>, "ref"> & Omit<ButtonProps, "type" | "onClick"> & {
    /** Position of the icon relative to the label */
    iconPosition?: "left" | "right";
    /** Size of the button */
    size?: ComponentSizeBasic;
    /** Visual style variant of the button */
    variant?: ButtonVariant;
    /** Design intent of the button (visual / semantic state). Unrelated to the ARIA role attribute. */
    intent?: ButtonIntent;
    /** Horizontal alignment of the button content */
    justify?: "start" | "center" | "end" | "between";
    /** Whether the button should take up the full width of its container */
    fullWidth?: boolean;
} & React.RefAttributes<HTMLAnchorElement>>;
