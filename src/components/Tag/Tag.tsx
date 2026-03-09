import { IndicatorBase } from "../_internal/IndicatorBase";
import "./tag.scss";

export type TagProps = React.ComponentPropsWithoutRef<"span"> & {
  /** 表示するコンテンツ */
  children?: React.ReactNode;
  /** 色 */
  color?:
    | "primary"
    | "secondary"
    | "success"
    | "warning"
    | "error"
    | "neutral"
    | "info";
  /** バリアント */
  variant?: "solid" | "outline" | "subtle";
  /** サイズ */
  size?: "small" | "medium";
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

