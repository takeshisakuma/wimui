import React from "react";
import { Button, ButtonProps } from "../../form/Button/Button";

import classNames from "classnames";

export type LinkButtonProps = React.ComponentPropsWithoutRef<"a"> &
  Omit<ButtonProps, "onClick" | "type">;

/**
 * ボタンの見た目をしたアンカー（リンク）コンポーネント。
 * internally uses Button with asChild pattern.
 */
export const LinkButton = React.forwardRef<HTMLAnchorElement, LinkButtonProps>(
  ({ children, icon, className, ...props }, ref) => {
    return (
      <Button
        asChild
        icon={icon}
        className={classNames({ "wim-button--icon-only": !children && !!icon }, className)}
        {...(props as ButtonProps)}
      >
        <a ref={ref} href={props.href}>
          {children}
        </a>
      </Button>
    );
  },
);

LinkButton.displayName = "LinkButton";
