import { default as React } from '../../../../node_modules/react';
import { Icon } from '../../media/Icon/Icon';
import { ComponentSize } from '../../../types/tokens';
type LinkProps = React.ComponentPropsWithoutRef<"a"> & {
    label?: React.ReactNode;
    size?: ComponentSize;
    priority?: "primary" | "secondary" | "tertiary";
    iconName?: React.ComponentProps<typeof Icon>["name"];
    iconPosition?: "left" | "right";
    external?: boolean;
};
export declare const Link: ({ label, size, priority, iconName, iconPosition, external, className, children, target, ...props }: LinkProps) => import("react/jsx-runtime").JSX.Element;
export {};
