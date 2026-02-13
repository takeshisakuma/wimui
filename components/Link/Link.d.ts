import { default as React } from '../../../node_modules/react';
import { Icon } from '../Icon/Icon';
type LinkProps = React.ComponentPropsWithoutRef<"a"> & {
    label?: string;
    size?: "small" | "medium" | "large";
    priority?: "primary" | "secondary" | "tertiary";
    iconName?: React.ComponentProps<typeof Icon>["name"];
    iconPosition?: "left" | "right";
    external?: boolean;
};
export declare const Link: ({ label, size, priority, iconName, iconPosition, external, className, children, target, ...props }: LinkProps) => import("react/jsx-runtime").JSX.Element;
export {};
