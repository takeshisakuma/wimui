import React, { forwardRef } from "react";
import { Slot } from "@radix-ui/react-slot";
import classNames from "classnames";
import styles from "./timeline.module.scss";

export interface TimelineProps {
  children: React.ReactNode;
  align?: "left" | "right" | "alternate";
  className?: string;
  asChild?: boolean;
}

export const Timeline = forwardRef<HTMLDivElement, TimelineProps>(({
  children,
  align = "left",
  className,
  asChild,
  ...props
}, ref) => {
  const Component = asChild ? Slot : "div";
  return (
    <Component
      ref={ref}
      className={classNames(
        styles.root,
        styles[align],
        className,
      )}
      {...props}
    >
      {React.Children.map(children, (child) => {
        if (React.isValidElement(child)) {
          return React.cloneElement(child as React.ReactElement<{ align?: "left" | "right" | "alternate" }>, {
            align,
          });
        }
        return child;
      })}
    </Component>
  );
});

Timeline.displayName = "Timeline";

export interface TimelineItemProps {
  children: React.ReactNode;
  className?: string;
  align?: "left" | "right" | "alternate";
  asChild?: boolean;
}

export const TimelineItem = forwardRef<HTMLDivElement, TimelineItemProps>(({
  children,
  className,
  align,
  asChild,
  ...props
}, ref) => {
  const Component = asChild ? Slot : "div";
  return (
    <Component
      ref={ref}
      className={classNames(
        styles.item,
        align && styles[align],
        className,
      )}
      {...props}
    >
      {children}
    </Component>
  );
});

TimelineItem.displayName = "TimelineItem";

export interface TimelineSeparatorProps {
  children?: React.ReactNode;
  className?: string;
  asChild?: boolean;
}

export const TimelineSeparator = forwardRef<HTMLDivElement, TimelineSeparatorProps>(({
  children,
  className,
  asChild,
  ...props
}, ref) => {
  const Component = asChild ? Slot : "div";
  return (
    <Component ref={ref} className={classNames(styles.separator, className)} {...props}>
      {children}
    </Component>
  );
});

TimelineSeparator.displayName = "TimelineSeparator";

export interface TimelineConnectorProps {
  className?: string;
  asChild?: boolean;
}

export const TimelineConnector = forwardRef<HTMLDivElement, TimelineConnectorProps>(({
  className,
  asChild,
  ...props
}, ref) => {
  const Component = asChild ? Slot : "div";
  return <Component ref={ref} className={classNames(styles.connector, className)} {...props} />;
});

TimelineConnector.displayName = "TimelineConnector";

export interface TimelinePointProps {
  children?: React.ReactNode;
  variant?: "primary" | "secondary" | "error" | "success";
  className?: string;
  asChild?: boolean;
}

export const TimelinePoint = forwardRef<HTMLDivElement, TimelinePointProps>(({
  children,
  variant,
  className,
  asChild,
  ...props
}, ref) => {
  const Component = asChild ? Slot : "div";
  const isIcon = !!children;
  return (
    <Component
      ref={ref}
      className={classNames(
        styles.point,
        variant && styles[variant],
        isIcon && styles.icon,
        className,
      )}
      {...props}
    >
      {children}
    </Component>
  );
});

TimelinePoint.displayName = "TimelinePoint";

export interface TimelineContentProps {
  children: React.ReactNode;
  className?: string;
  asChild?: boolean;
}

export const TimelineContent = forwardRef<HTMLDivElement, TimelineContentProps>(({
  children,
  className,
  asChild,
  ...props
}, ref) => {
  const Component = asChild ? Slot : "div";
  return (
    <Component ref={ref} className={classNames(styles.content, className)} {...props}>
      {children}
    </Component>
  );
});

TimelineContent.displayName = "TimelineContent";

export interface TimelineOppositeContentProps {
  children: React.ReactNode;
  className?: string;
  asChild?: boolean;
}

export const TimelineOppositeContent = forwardRef<HTMLDivElement, TimelineOppositeContentProps>(({
  children,
  className,
  asChild,
  ...props
}, ref) => {
  const Component = asChild ? Slot : "div";
  return (
    <Component ref={ref} className={classNames(styles.oppositeContent, className)} {...props}>
      {children}
    </Component>
  );
});

TimelineOppositeContent.displayName = "TimelineOppositeContent";
