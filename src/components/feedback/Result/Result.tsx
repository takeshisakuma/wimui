import React, { ReactNode } from "react";
import classNames from "classnames";
import { Icon } from "../../media/Icon/Icon";
import { InteractiveArea } from "../../layout/InteractiveArea/InteractiveArea";
import type { WimIntent } from "../../../types/tokens";
import styles from "./result.module.scss";
import { AlertCircleIcon, CircleIcon, CheckIcon, InfoCircleIcon } from "@/icon";

export type ResultIntent = Extract<
  WimIntent,
  "default" | "success" | "danger" | "info" | "warning"
>;

export type ResultHttpStatus = "404" | "403" | "500";

export type ResultProps = {
  /**
   * Semantic intent — determines the icon and color.
   * @default "default"
   */
  intent?: ResultIntent;
  /**
   * HTTP error status — adds a status-specific CSS class and shows a neutral icon.
   * Use for error pages (404, 403, 500).
   */
  status?: ResultHttpStatus;
  /**
   * The title
   */
  title?: ReactNode;
  /**
   * The description
   */
  description?: ReactNode;
  /**
   * Operating area
   */
  extra?: ReactNode;
  /**
   * Custom icon
   */
  icon?: ReactNode;
  /**
   * Sit the icon on a tinted circle in the intent's colour, instead of drawing it bare.
   *
   * Off by default so existing pages keep their look. Turn it on when the icon is
   * the page's main visual — a maintenance or error page, where a bare glyph reads
   * as an afterthought. The tint comes from `--wim-color-<intent>-subtle`, so it
   * follows the theme and never needs a hand-mixed colour.
   * @default false
   */
  iconSurface?: boolean;
  /**
   * Custom class name
   */
  className?: string;
  /**
   * The children
   */
  children?: ReactNode;
};

const DefaultIcon = ({
  intent,
  status,
  className,
}: {
  intent?: ResultIntent;
  status?: ResultHttpStatus;
  className?: string;
}) => {
  if (status) return <Icon component={AlertCircleIcon} color="tertiary" className={className} />;
  switch (intent) {
    case "success":
      return <Icon component={CheckIcon} color="success" className={className} />;
    case "danger":
      return <Icon component={AlertCircleIcon} color="danger" className={className} />;
    case "warning":
      return <Icon component={AlertCircleIcon} color="warning" className={className} />;
    case "info":
      return <Icon component={InfoCircleIcon} color="info" className={className} />;
    case "default":
    default:
      return <Icon component={CircleIcon} color="tertiary" className={className} />;
  }
};

export const Result = ({
  intent = "default",
  status,
  title,
  description,
  extra,
  icon,
  iconSurface = false,
  className,
  children,
}: ResultProps) => {
  return (
    <InteractiveArea
      icon={icon || <DefaultIcon intent={intent} status={status} className={styles.icon} />}
      title={title ?? undefined}
      description={description ?? undefined}
      actions={extra}
      variant="none"
      bgVariant="transparent"
      className={classNames("wim-result",
        styles.root,
        intent && styles[intent],
        status && styles[status],
        iconSurface && styles.iconSurface,
        className,
      )}
      styles={{
        inner: styles.inner,
        icon: styles.icon,
        content: styles.content,
      }}
    >
      {children}
    </InteractiveArea>
  );
};
