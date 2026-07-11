import React from "react";
import { StatusContent } from "../../_internal/StatusContent";
import classNames from "classnames";
import styles from "./empty-state.module.scss";

type EmptyStateProps = React.ComponentPropsWithoutRef<"div"> & {
  /** Title to display. */
  title: React.ReactNode;
  /** Description text to display. */
  description?: React.ReactNode;
  /** Icon to display. */
  icon?: React.ReactNode;
  /** Element shown as an action (e.g. a button). */
  extra?: React.ReactNode;
  /** Design variant. */
  variant?: "default" | "simple";
};

/**
 * Placeholder component shown when there is no data or no search results.
 */
export const EmptyState = ({
  title,
  description,
  icon,
  extra,
  variant = "default",
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
        styles.root,
        styles[variant],
        className,
      )}
      {...props}
    />
  );
};
