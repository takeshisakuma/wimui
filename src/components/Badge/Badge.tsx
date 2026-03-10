import classNames from "classnames";
import { IndicatorBase } from "../_internal/IndicatorBase";
import "./badge.scss";

export type BadgeProps = React.ComponentPropsWithoutRef<"span"> & {
  /** 表示するコンテンツ */
  children?: React.ReactNode;
  /** @deprecated use children instead */
  content?: string;
  /** アイコン */
  icon?: React.ReactNode;
  /** ステータス */
  status?:
    | "primary"
    | "secondary"
    | "success"
    | "warning"
    | "error"
    | "info"
    | "neutral";
  /** バリアント */
  variant?: "solid" | "outline" | "subtle";
  /** サイズ */
  size?: "small" | "medium";
};

/**
 * 状態やカウントなどを表示するためのバッジコンポーネント。
 */
export const Badge = ({
  children,
  content,
  icon,
  className,
  ...props
}: BadgeProps) => {
  const displayContent = children ?? content;

  return (
    <IndicatorBase
      prefixClass="wim-badge"
      icon={icon}
      className={classNames(!displayContent && "wim-badge--icon-only", className)}
      {...props}
    >
      {displayContent}
    </IndicatorBase>
  );
};

