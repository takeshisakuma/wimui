import { default as React } from '../../../node_modules/react';
import { Icon } from '../Icon/Icon';
export type ButtonProps = React.ComponentPropsWithoutRef<"button"> & {
    backgroundColor?: string | null;
    size?: "small" | "medium" | "large";
    label?: string;
    priority?: "primary" | "secondary" | "tertiary";
    /** @deprecated Use the standard HTML `disabled` prop instead. */
    role?: "default" | "destructive" | "positive";
    /** @deprecated Use the standard HTML `disabled` prop instead. */
    state?: "abled" | "disabled";
    iconName?: React.ComponentProps<typeof Icon>["name"];
    iconPosition?: "left" | "right";
    loading?: boolean;
    justify?: "start" | "center" | "end" | "between";
};
export declare const Button: React.ForwardRefExoticComponent<Omit<React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>, "ref"> & {
    backgroundColor?: string | null;
    size?: "small" | "medium" | "large";
    label?: string;
    priority?: "primary" | "secondary" | "tertiary";
    /** @deprecated Use the standard HTML `disabled` prop instead. */
    role?: "default" | "destructive" | "positive";
    /** @deprecated Use the standard HTML `disabled` prop instead. */
    state?: "abled" | "disabled";
    iconName?: React.ComponentProps<typeof Icon>["name"];
    iconPosition?: "left" | "right";
    loading?: boolean;
    justify?: "start" | "center" | "end" | "between";
} & {
    className?: string;
} & React.RefAttributes<HTMLButtonElement>>;
