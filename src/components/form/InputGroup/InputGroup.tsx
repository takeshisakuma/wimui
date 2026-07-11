import React from "react";
import classNames from "classnames";
import styles from "./input-group.module.scss";

type InputGroupProps = {
  /** Inputs, buttons, and add-ons to combine into one unit */
  children: React.ReactNode;
  /** Whether to take full width of parent */
  fullWidth?: boolean;
  /** Additional class names */
  className?: string;
};

/**
 * Component that combines multiple inputs, buttons, and text into a single unit.
 */
export const InputGroup = ({
  children,
  fullWidth = false,
  className,
}: InputGroupProps) => {
  return (
    <div
      className={classNames("wim-input-group", 
        styles.root,
        fullWidth && styles.fullWidth,
        className,
      )}
    >
      {children}
    </div>
  );
};

type InputGroupTextProps = {
  children: React.ReactNode;
  className?: string;
};

/**
 * InputGroup内でテキストやアイコンを表示するためのアドオンコンポーネント。
 */
export const InputGroupText = ({
  children,
  className,
}: InputGroupTextProps) => {
  return (
    <span className={classNames(styles.text, className)}>
      {children}
    </span>
  );
};
