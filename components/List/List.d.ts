import { default as React } from '../../../node_modules/react';
import { Icon } from '../Icon/Icon';
type ListProps = React.ComponentPropsWithoutRef<"ul"> & {
    as?: "ul" | "ol";
    size?: "small" | "medium" | "large";
    spacing?: "tight" | "normal" | "loose";
    children: React.ReactNode;
};
export declare const List: ({ as: Component, size, spacing, children, className, ...props }: ListProps) => import("react/jsx-runtime").JSX.Element;
type ListItemProps = React.ComponentPropsWithoutRef<"li"> & {
    children: React.ReactNode;
    iconName?: React.ComponentProps<typeof Icon>["name"];
    iconPosition?: "left" | "right";
};
export declare const ListItem: ({ children, className, iconName, iconPosition, ...props }: ListItemProps) => import("react/jsx-runtime").JSX.Element;
export {};
