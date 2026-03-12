import { default as React } from '../../../node_modules/react';
import { Icon } from '../Icon/Icon';
export type ButtonProps = Omit<React.ComponentPropsWithoutRef<"button">, "role"> & {
    backgroundColor?: string | null;
    size?: "small" | "medium" | "large";
    label?: string;
    priority?: "primary" | "secondary" | "tertiary";
    /** @deprecated Use the standard HTML `disabled` prop instead. */
    role?: "default" | "destructive" | "positive";
    /** @deprecated Use the standard HTML `disabled` prop instead. */
    state?: "abled" | "disabled";
    /** Icon name or custom icon element */
    icon?: React.ComponentProps<typeof Icon>["name"] | React.ReactNode;
    /** @deprecated Use icon instead */
    iconName?: React.ComponentProps<typeof Icon>["name"];
    iconPosition?: "left" | "right";
    loading?: boolean;
    justify?: "start" | "center" | "end" | "between";
    /** Whether to animate the width change when label changes */
    animateWidth?: boolean;
    /** Whether the button should take up the full width of its container */
    fullWidth?: boolean;
};
export declare const Button: React.ForwardRefExoticComponent<Omit<Omit<React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>, "ref">, "role"> & {
    backgroundColor?: string | null;
    size?: "small" | "medium" | "large";
    label?: string;
    priority?: "primary" | "secondary" | "tertiary";
    /** @deprecated Use the standard HTML `disabled` prop instead. */
    role?: "default" | "destructive" | "positive";
    /** @deprecated Use the standard HTML `disabled` prop instead. */
    state?: "abled" | "disabled";
    /** Icon name or custom icon element */
    icon?: React.ComponentProps<typeof Icon>["name"] | React.ReactNode;
    /** @deprecated Use icon instead */
    iconName?: React.ComponentProps<typeof Icon>["name"];
    iconPosition?: "left" | "right";
    loading?: boolean;
    justify?: "start" | "center" | "end" | "between";
    /** Whether to animate the width change when label changes */
    animateWidth?: boolean;
    /** Whether the button should take up the full width of its container */
    fullWidth?: boolean;
} & {
    className?: string;
} & React.RefAttributes<HTMLButtonElement>>;
