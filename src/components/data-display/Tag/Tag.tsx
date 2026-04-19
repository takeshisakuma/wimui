import React from "react";
import { IndicatorBase } from "../../_internal/IndicatorBase";
import { ComponentSize, IndicatorIntent, IndicatorVariant } from "../../../types/tokens";
import styles from "./tag.module.scss";

export type TagProps = React.ComponentPropsWithoutRef<"span"> & {
  /**
   * If true, the tag will be rendered as its child, merging its props onto that child.
   */
  asChild?: boolean;
  /** 表示するコンテンツ */
  children?: React.ReactNode;
  /** 表示するコンテンツ (childrenの代替) */
  content?: React.ReactNode;
  /** インテント（意味的状態） */
  intent?: IndicatorIntent;
  /** バリアント */
  variant?: IndicatorVariant;
  /** サイズ */
  size?: ComponentSize;
  /** アイコン */
  icon?: React.ReactNode;
};

/**
 * カテゴリ分けや属性のラベルとして使用される非インタラクティブなコンポーネント。
 */
export const Tag = React.forwardRef<HTMLSpanElement, TagProps>(
  ({ children, content, icon, ...props }, ref) => {
    return (
      <IndicatorBase ref={ref} styles={styles} icon={icon} content={content} {...props}>
        {children}
      </IndicatorBase>
    );
  },
);

Tag.displayName = "Tag";
