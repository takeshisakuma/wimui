import React from "react";
import { Button, ButtonProps } from "../../form/Button/Button";
import buttonStyles from "../../form/Button/button.module.scss";
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
        className={classNames({ [buttonStyles.iconOnly]: !children && !!icon }, className)}
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
