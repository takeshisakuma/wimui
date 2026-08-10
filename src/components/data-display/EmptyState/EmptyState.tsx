import React from "react";
import { StatusContent } from "../../_internal/StatusContent";
import classNames from "classnames";

type EmptyStateProps = React.ComponentPropsWithoutRef<"div"> & {
  /** Title to display. */
  title: React.ReactNode;
  /** Description text to display. */
  description?: React.ReactNode;
  /** Icon to display. */
  icon?: React.ReactNode;
  /** Element shown as an action (e.g. a button). */
  extra?: React.ReactNode;
};

/**
 * Placeholder component shown when there is no data or no search results.
 */
export const EmptyState = ({
  title,
  description,
  icon,
  extra,
  className,
  ...props
}: EmptyStateProps) => {
  return (
    <StatusContent
      title={title}
      description={description}
      icon={icon}
      actions={extra}
      className={classNames("wim-empty-state", 
        className,
      )}
      {...props}
    />
  );
};
