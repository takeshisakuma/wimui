import React from "react";
import { IndicatorBase } from "../../_internal/IndicatorBase";
import { ComponentSize, WimIntent } from "../../../types/tokens";
import "./tag.scss";

export type TagProps = React.ComponentPropsWithoutRef<"span"> & {
  /** 表示するコンテンツ */
  children?: React.ReactNode;
  /** ステータス */
  intent?: WimIntent;
  /** バリアント */
  variant?: "solid" | "outline" | "subtle";
  /** サイズ */
  size?: ComponentSize;
  /** アイコン */
  icon?: React.ReactNode;
};

/**
 * カテゴリ分けや属性のラベルとして使用される非インタラクティブなコンポーネント。
 */
export const Tag = ({ children, icon, ...props }: TagProps) => {
  return (
    <IndicatorBase prefixClass="wim-tag" icon={icon} {...props}>
      {children}
    </IndicatorBase>
  );
};

