import React from "react";
import classNames from "classnames";
import styles from "./description-list.module.scss";
import { ComponentSize } from "../../../types/tokens";

type DescriptionListProps = {
  children: React.ReactNode;
  className?: string;
  layout?: "horizontal" | "vertical" | "compact";
  size?: ComponentSize;
  border?: boolean;
  bordered?: boolean;
};

export const DescriptionList = ({
  children,
  className,
  layout = "horizontal",
  size = "md",
  border = false,
  bordered = false,
  ...props
}: DescriptionListProps) => {
  const isBordered = border || bordered;
  return (
    <dl
      className={classNames(
        styles.root,
        styles[layout],
        styles[size],
        isBordered && styles.border,
        className,
      )}
      {...props}
    >
      {children}
    </dl>
  );
};

type DescriptionListItemProps = {
  children: React.ReactNode;
  className?: string;
};

export const DescriptionListItem = ({
  children,
  className,
  ...props
}: DescriptionListItemProps) => {
  return (
    <div
      className={classNames(styles.item, className)}
      {...props}
    >
      {children}
    </div>
  );
};

type DescriptionListTermProps = {
  children: React.ReactNode;
  className?: string;
};

export const DescriptionListTerm = ({
  children,
  className,
  ...props
}: DescriptionListTermProps) => {
  return (
    <dt
      className={classNames(styles.term, className)}
      {...props}
    >
      {children}
    </dt>
  );
};

type DescriptionListDetailsProps = {
  children: React.ReactNode;
  className?: string;
};

export const DescriptionListDetails = ({
  children,
  className,
  ...props
}: DescriptionListDetailsProps) => {
  return (
    <dd
      className={classNames(styles.details, className)}
      {...props}
    >
      {children}
    </dd>
  );
};
