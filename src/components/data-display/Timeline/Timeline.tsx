import React from "react";
import classNames from "classnames";
import styles from "./timeline.module.scss";

export interface TimelineProps {
  children: React.ReactNode;
  align?: "left" | "right" | "alternate";
  className?: string;
}

export const Timeline = ({
  children,
  align = "left",
  className,
}: TimelineProps): React.ReactElement => {
  return (
    <div
      className={classNames(
        styles.root,
        styles[align],
        className,
      )}
    >
      {React.Children.map(children, (child) => {
        if (React.isValidElement(child)) {
          return React.cloneElement(child as React.ReactElement<{ align?: "left" | "right" | "alternate" }>, {
            align,
          });
        }
        return child;
      })}
    </div>
  );
};

export interface TimelineItemProps {
  children: React.ReactNode;
  className?: string;
  align?: "left" | "right" | "alternate";
}

export const TimelineItem = ({
  children,
  className,
  align,
}: TimelineItemProps): React.ReactElement => {
  return (
    <div
      className={classNames(
        styles.item,
        align && styles[align],
        className,
      )}
    >
      {children}
    </div>
  );
};

export interface TimelineSeparatorProps {
  children?: React.ReactNode;
  className?: string;
}

export const TimelineSeparator = ({
  children,
  className,
}: TimelineSeparatorProps): React.ReactElement => {
  return (
    <div className={classNames(styles.separator, className)}>
      {children}
    </div>
  );
};

export interface TimelineConnectorProps {
  className?: string;
}

export const TimelineConnector = ({
  className,
}: TimelineConnectorProps): React.ReactElement => {
  return <div className={classNames(styles.connector, className)} />;
};

export interface TimelinePointProps {
  children?: React.ReactNode;
  variant?: "primary" | "secondary" | "error" | "success";
  className?: string;
}

export const TimelinePoint = ({
  children,
  variant,
  className,
}: TimelinePointProps): React.ReactElement => {
  const isIcon = !!children;
  return (
    <div
      className={classNames(
        styles.point,
        variant && styles[variant],
        isIcon && styles.icon,
        className,
      )}
    >
      {children}
    </div>
  );
};

export interface TimelineContentProps {
  children: React.ReactNode;
  className?: string;
}

export const TimelineContent = ({
  children,
  className,
}: TimelineContentProps): React.ReactElement => {
  return (
    <div className={classNames(styles.content, className)}>
      {children}
    </div>
  );
};

export interface TimelineOppositeContentProps {
  children: React.ReactNode;
  className?: string;
}

export const TimelineOppositeContent = ({
  children,
  className,
}: TimelineOppositeContentProps): React.ReactElement => {
  return (
    <div className={classNames(styles.oppositeContent, className)}>
      {children}
    </div>
  );
};
