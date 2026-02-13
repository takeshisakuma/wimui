import { default as React } from '../../../node_modules/react';
import { Icon } from '../Icon/Icon';
export declare const Button: React.ForwardRefExoticComponent<Omit<React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>, "ref"> & {
    backgroundColor?: string | null;
    size?: "small" | "medium" | "large";
    label?: string;
    priority?: "primary" | "secondary" | "tertiary";
    role?: "default" | "destructive" | "positive";
    state?: "abled" | "disabled";
    iconName?: React.ComponentProps<typeof Icon>["name"];
    iconPosition?: "left" | "right";
    loading?: boolean;
    "aria-label"?: string | boolean;
} & {
    className?: string;
} & React.RefAttributes<HTMLButtonElement>>;
