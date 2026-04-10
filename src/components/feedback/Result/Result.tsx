import React, { ReactNode } from "react";
import classNames from "classnames";
import { Icon } from "../../media/Icon/Icon";
import { InteractiveArea } from "../../layout/InteractiveArea/InteractiveArea";
import type { WimIntent } from "../../../types/tokens";
import styles from "./result.module.scss";

export type ResultIntent = Extract<WimIntent, "success" | "error" | "info" | "warning">;

export type ResultHttpStatus = "404" | "403" | "500";

export type ResultProps = {
  /**
   * Semantic intent — determines the icon and color.
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
  if (status) return <Icon name="CircleIcon" color="secondary" className={className} />;
  switch (intent) {
    case "success":
      return <Icon name="CheckIcon" color="positive" className={className} />;
    case "error":
      return <Icon name="CircleIcon" color="destructive" className={className} />;
    case "warning":
      return <Icon name="CircleIcon" color="caution" className={className} />;
    case "info":
      return <Icon name="CircleIcon" color="informative" className={className} />;
    default:
      return null;
  }
};

export const Result = ({
  intent = "info",
  status,
  title,
  description,
  extra,
  icon,
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
      className={classNames(
        styles.root,
        intent && styles[intent],
        status && styles[status],
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
