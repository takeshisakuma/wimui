import React from "react";
import classNames from "classnames";
import styles from "./visuallyHidden.module.scss";

export type VisuallyHiddenProps = React.ComponentPropsWithoutRef<"span"> & {
  /**
   * 表示されないが、スクリーンリーダーには読み上げられるコンテンツ。
   */
  children: React.ReactNode;
};

/**
 * 視覚的には非表示にしつつ、スクリーンリーダーなどのアシスティブテクノロジーにはコンテンツを維持するためのアクセシビリティ用コンポーネント。
 */
export const VisuallyHidden = ({
  children,
  className,
  ...props
}: VisuallyHiddenProps) => {
  return (
    <span className={classNames(styles.root, className)} {...props}>
      {children}
    </span>
  );
};
