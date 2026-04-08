import React from "react";
import { IndicatorBase } from "../../_internal/IndicatorBase";
import { ComponentSize, WimIntent, IndicatorVariant } from "../../../types/tokens";
import "./tag.scss";

export type TagProps = React.ComponentPropsWithoutRef<"span"> & {
  /**
   * If true, the tag will be rendered as its child, merging its props onto that child.
   */
  asChild?: boolean;
  /** 表示するコンテンツ */
  children?: React.ReactNode;
  /** ステータス */
  intent?: WimIntent;
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
  ({ children, icon, ...props }, ref) => {
    return (
      <IndicatorBase ref={ref} prefixClass="wim-tag" icon={icon} {...props}>
        {children}
      </IndicatorBase>
    );
  },
);

Tag.displayName = "Tag";

