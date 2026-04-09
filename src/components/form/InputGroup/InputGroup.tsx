import React from "react";
import classNames from "classnames";
import styles from "./input-group.module.scss";

type InputGroupProps = {
  children: React.ReactNode;
  fullWidth?: boolean;
  className?: string;
};

/**
 * 複数の入力要素やボタン、テキストを組み合わせて一つのユニットとして表示するコンポーネント。
 */
export const InputGroup = ({
  children,
  fullWidth = false,
  className,
}: InputGroupProps) => {
  return (
    <div
      className={classNames(
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
