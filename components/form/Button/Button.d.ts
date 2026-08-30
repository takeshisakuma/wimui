import { default as React } from '../../../../node_modules/react';
import { Icon } from '../../media/Icon/Icon';
import { WimColor, ComponentSizeBasic, ButtonVariant, ButtonIntent } from '../../../types/tokens';
export type ButtonProps = React.ComponentPropsWithoutRef<"button"> & {
    /**
     * If true, the button will be rendered as its child, merging its props onto that child.
     * Useful for using the button styles with Link components (e.g. from React Router or Next.js).
     */
    asChild?: boolean;
    /** Overrides the button background color with a design token. Usually the `variant` prop is enough; use this prop only as a last resort. */
    backgroundColor?: WimColor;
    /** Size of the button */
    size?: ComponentSizeBasic;
    /** Visual style variant of the button */
    variant?: ButtonVariant;
    /** Design intent of the button (visual / semantic state). Unrelated to the ARIA role attribute. */
    intent?: ButtonIntent;
    /** Icon name or custom icon element */
    icon?: React.ComponentProps<typeof Icon>["name"] | React.ReactNode;
    /** Position of the icon relative to the label */
    iconPosition?: "left" | "right";
    /** Whether to show a loading indicator and disable interaction */
    loading?: boolean;
    /** Horizontal alignment of the button content */
    justify?: "start" | "center" | "end" | "between";
    /** Whether to animate the width change when label changes */
    animateWidth?: boolean;
    /** Whether the button should take up the full width of its container */
    fullWidth?: boolean;
    /** Custom styles for internal parts */
    styles?: {
        root?: string;
        loader?: string;
        icon?: string;
    };
};
export declare const Button: React.ForwardRefExoticComponent<Omit<React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>, "ref"> & {
    /**
     * If true, the button will be rendered as its child, merging its props onto that child.
     * Useful for using the button styles with Link components (e.g. from React Router or Next.js).
     */
    asChild?: boolean;
    /** Overrides the button background color with a design token. Usually the `variant` prop is enough; use this prop only as a last resort. */
    backgroundColor?: WimColor;
    /** Size of the button */
    size?: ComponentSizeBasic;
    /** Visual style variant of the button */
    variant?: ButtonVariant;
    /** Design intent of the button (visual / semantic state). Unrelated to the ARIA role attribute. */
    intent?: ButtonIntent;
    /** Icon name or custom icon element */
    icon?: React.ComponentProps<typeof Icon>["name"] | React.ReactNode;
    /** Position of the icon relative to the label */
    iconPosition?: "left" | "right";
    /** Whether to show a loading indicator and disable interaction */
    loading?: boolean;
    /** Horizontal alignment of the button content */
    justify?: "start" | "center" | "end" | "between";
    /** Whether to animate the width change when label changes */
    animateWidth?: boolean;
    /** Whether the button should take up the full width of its container */
    fullWidth?: boolean;
    /** Custom styles for internal parts */
    styles?: {
        root?: string;
        loader?: string;
        icon?: string;
    };
} & {
    /** Additional class names */
    className?: string;
} & React.RefAttributes<HTMLButtonElement>>;
