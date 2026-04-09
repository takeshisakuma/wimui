import React from "react";
import classNames from "classnames";
import styles from "./fieldset.module.scss";

type FieldsetProps = React.ComponentPropsWithoutRef<"fieldset"> & {
  children: React.ReactNode;
  disabled?: boolean;
  variant?: "default" | "full-width";
  className?: string;
};

/**
 * 関連するフォーム要素をグループ化するコンポーネント。
 */
export const Fieldset = ({
  children,
  disabled = false,
  variant = "default",
  className,
  ...props
}: FieldsetProps) => {
  return (
    <fieldset
      className={classNames(
        styles.root,
        variant === "full-width" && styles.fullWidth,
        className,
      )}
      disabled={disabled}
      {...props}
    >
      {children}
    </fieldset>
  );
};
