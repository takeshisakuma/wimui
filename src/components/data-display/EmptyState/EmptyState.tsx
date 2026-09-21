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
  /**
   * Horizontal alignment. Start-aligned reads as part of the card or table it sits
   * in; use `"center"` only when the empty state is the only thing in its region.
   * @default "start"
   */
  align?: "start" | "center";
};

/**
 * Placeholder component shown when there is no data or no search results.
 */
export const EmptyState = ({
  title,
  description,
  icon,
  extra,
  align = "start",
  className,
  ...props
}: EmptyStateProps) => {
  return (
    <StatusContent
      title={title}
      description={description}
      icon={icon}
      actions={extra}
      align={align}
      className={classNames("wim-empty-state", 
        className,
      )}
      {...props}
    />
  );
};
