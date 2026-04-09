import React from "react";
import classNames from "classnames";
import styles from "./avatar-group.module.scss";
import { Avatar } from "../../data-display/Avatar/Avatar";
import { ComponentSize } from "../../../types/tokens";

type AvatarGroupProps = {
  children: React.ReactNode;
  max?: number;
  size?: ComponentSize;
  total?: number;
  className?: string;
};

/**
 * 複数のアバターを束ねて表示するためのコンポーネント。
 */
export const AvatarGroup = ({
  children,
  max,
  size = "md",
  total,
  className,
}: AvatarGroupProps) => {
  const avatars = React.Children.toArray(children);
  const totalAvatars = total || avatars.length;
  const itemsToShow = max ? avatars.slice(0, max) : avatars;
  const excessCount = totalAvatars - itemsToShow.length;

  return (
    <div className={classNames(styles.root, className)}>
      {itemsToShow.map((child, index) => {
        if (React.isValidElement(child) && child.type === Avatar) {
          const avatarChild = child as React.ReactElement<{
            size?: ComponentSize;
          }>;
          return React.cloneElement(avatarChild, {
            size: size || avatarChild.props.size,
            key: index,
          });
        }
        return child;
      })}
      {excessCount > 0 && (
        <span
          className={classNames(
            styles.excess,
            styles[size],
          )}
        >
          +{excessCount}
        </span>
      )}
    </div>
  );
};
