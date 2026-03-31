import React, { ReactNode } from "react";
import classNames from "classnames";
import { useTranslation } from "react-i18next";
import { Icon } from "../../media/Icon/Icon";
import { InteractiveArea } from "../../layout/InteractiveArea/InteractiveArea";
import "./result.scss";

export type ResultStatus =
  | "success"
  | "error"
  | "info"
  | "warning"
  | "404"
  | "403"
  | "500";

export type ResultProps = {
  /**
   * result status, decide icons and colors
   */
  status?: ResultStatus;
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

const DefaultIcon = ({ status }: { status: ResultStatus }) => {
  switch (status) {
    case "success":
      return <Icon name="CheckIcon" color="positive" />;
    case "error":
      return <Icon name="CircleIcon" color="destructive" />;
    case "warning":
      return <Icon name="CircleIcon" color="caution" />;
    case "info":
      return <Icon name="CircleIcon" color="informative" />;
    case "404":
    case "403":
    case "500":
      return <Icon name="CircleIcon" color="secondary" />;
    default:
      return null;
  }
};

export const Result = ({
  status = "info",
  title,
  description,
  extra,
  icon,
  className,
  children,
}: ResultProps) => {
  const { t } = useTranslation();

  const renderText = (text: ReactNode) => {
    return typeof text === "string" ? t(text) : text;
  };

  return (
    <InteractiveArea
      icon={icon || <DefaultIcon status={status} />}
      title={renderText(title) ?? undefined}
      description={renderText(description) ?? undefined}
      actions={extra}
      variant="none"
      bgVariant="transparent"
      className={classNames("wim-result", `wim-result--${status}`, className)}
    >
      {children}
    </InteractiveArea>
  );
};
