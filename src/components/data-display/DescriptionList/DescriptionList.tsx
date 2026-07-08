import React from "react";
import classNames from "classnames";
import styles from "./description-list.module.scss";
import { ComponentSizeBasic } from "../../../types/tokens";

type DescriptionListProps = {
  /** DescriptionListItem elements */
  children: React.ReactNode;
  /** Additional class names */
  className?: string;
  /** Layout of terms and descriptions */
  layout?: "horizontal" | "vertical" | "compact";
  /** Size of the text */
  size?: ComponentSizeBasic;
  /** Whether to show borders (alias of bordered) */
  border?: boolean;
  /** Whether to show borders */
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
  /** A DescriptionListTerm and its DescriptionListDetails */
  children: React.ReactNode;
  /** Additional class names */
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
