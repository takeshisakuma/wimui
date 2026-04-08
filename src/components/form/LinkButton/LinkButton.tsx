import React from "react";
import { Button, ButtonProps } from "../../form/Button/Button";

export type LinkButtonProps = React.ComponentPropsWithoutRef<"a"> &
  Omit<ButtonProps, "onClick" | "type">;

/**
 * ボタンの見た目をしたアンカー（リンク）コンポーネント。
 * internally uses Button with asChild pattern.
 */
export const LinkButton = React.forwardRef<HTMLAnchorElement, LinkButtonProps>(
  ({ children, ...props }, ref) => {
    return (
      <Button asChild {...(props as unknown as ButtonProps)}>
        <a ref={ref} {...props}>
          {children}
        </a>
      </Button>
    );
  },
);

LinkButton.displayName = "LinkButton";
