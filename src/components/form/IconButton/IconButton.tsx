import React from "react";
import classNames from "classnames";
import { Button } from "../../form/Button/Button";
import { Icon } from "../../media/Icon/Icon";

type IconButtonProps = Omit<
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
 */
export const IconButton = ({ iconName, className, ...props }: IconButtonProps) => {
  return (
    <Button
      {...props}
      className={classNames("wim-icon-button", className)}
      icon={iconName}
    />
  );
};
