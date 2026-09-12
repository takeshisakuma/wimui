import { default as React } from '../../../../node_modules/react';
import { Button } from '../../form/Button/Button';
import { Icon } from '../../media/Icon/Icon';
export type IconButtonProps = Omit<React.ComponentProps<typeof Button>, "label" | "iconPosition"> & {
    /** Icon name to display */
    iconName: React.ComponentProps<typeof Icon>["name"];
    /** Accessible label for the icon-only button */
    "aria-label": string;
};
/**
 * Icon-only button component.
 * Supports `asChild` via Button (Slot pattern) for polymorphic rendering.
 */
export declare const IconButton: React.ForwardRefExoticComponent<Omit<IconButtonProps, "ref"> & React.RefAttributes<HTMLButtonElement>>;
