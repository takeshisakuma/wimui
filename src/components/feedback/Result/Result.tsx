import React, { ReactNode } from "react";
import classNames from "classnames";
import { Icon } from "../../media/Icon/Icon";
import { InteractiveArea } from "../../layout/InteractiveArea/InteractiveArea";
import type { WimIntent } from "../../../types/tokens";
import "./result.scss";

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
}: {
  intent?: ResultIntent;
  status?: ResultHttpStatus;
}) => {
  if (status) return <Icon name="CircleIcon" color="secondary" />;
  switch (intent) {
    case "success":
      return <Icon name="CheckIcon" color="positive" />;
    case "error":
      return <Icon name="CircleIcon" color="destructive" />;
    case "warning":
      return <Icon name="CircleIcon" color="caution" />;
    case "info":
      return <Icon name="CircleIcon" color="informative" />;
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
      icon={icon || <DefaultIcon intent={intent} status={status} />}
      title={title ?? undefined}
      description={description ?? undefined}
      actions={extra}
      variant="none"
      bgVariant="transparent"
      className={classNames(
        "wim-result",
        intent && `wim-result--${intent}`,
        status && `wim-result--${status}`,
        className,
      )}
    >
      {children}
    </InteractiveArea>
  );
};
