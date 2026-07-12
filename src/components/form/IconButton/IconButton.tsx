import React from "react";
import classNames from "classnames";
import { Button } from "../../form/Button/Button";
import { Icon } from "../../media/Icon/Icon";

export type IconButtonProps = Omit<
  React.ComponentProps<typeof Button>,
  "label" | "iconPosition"
> & {
  /** Icon name to display */
  iconName: React.ComponentProps<typeof Icon>["name"];
  /** Accessible label for the icon-only button */
  "aria-label": string;
};

/**
 * Icon-only button component.
 * Supports `asChild` via Button (Slot pattern) for polymorphic rendering.
 */
export const IconButton = React.forwardRef<HTMLButtonElement, IconButtonProps>(
  ({ iconName, className, asChild = false, ...props }, ref) => {
    return (
      <Button
        ref={ref}
        asChild={asChild}
        {...props}
        className={classNames("wim-icon-button", className)}
        icon={iconName}
      />
    );
  },
);

IconButton.displayName = "IconButton";
