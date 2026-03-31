import React from "react";
import classNames from "classnames";

import { IndicatorBase } from "../../_internal/IndicatorBase";
import { ComponentSize, IndicatorStatus } from "../../../types/tokens";
import "./badge.scss";
export type BadgeProps = React.ComponentPropsWithoutRef<"span"> & {
  /** 表示するコンテンツ */
  children?: React.ReactNode;
  /** アイコン */
  icon?: React.ReactNode;
  /** ステータス */
  status?: IndicatorStatus;
  /** バリアント */
  variant?: "solid" | "outline" | "subtle";
  /** サイズ */
  size?: ComponentSize;
};

/**
 * 状態やカウントなどを表示するためのバッジコンポーネント。
 */
export const Badge = ({
  children,
  icon,
  className,
  ...props
}: BadgeProps) => {
  return (
    <IndicatorBase
      prefixClass="wim-badge"
      icon={icon}
      className={classNames(!children && "wim-badge--icon-only", className)}
      {...props}
    >
      {children}
    </IndicatorBase>
  );
};

