import React from "react";
import classNames from "classnames";
import "./avatar-group.scss";
import { Avatar } from "../Avatar/Avatar";

type AvatarGroupProps = {
  children: React.ReactNode;
  max?: number;
  size?: "sm" | "md" | "lg";
  total?: number;
  className?: string;
};

/**
 * 複数のアバターを束ねて表示するためのコンポーネント。
 */
export const AvatarGroup = ({
  children,
  max,
  size,
  total,
  className,
}: AvatarGroupProps) => {
  const avatars = React.Children.toArray(children);
  const totalAvatars = total || avatars.length;
  const itemsToShow = max ? avatars.slice(0, max) : avatars;
  const excessCount = totalAvatars - itemsToShow.length;

  return (
    <div className={classNames("wim-avatar-group", className)}>
      {itemsToShow.map((child, index) => {
        if (React.isValidElement(child) && child.type === Avatar) {
          const avatarChild = child as React.ReactElement<{
            size?: "sm" | "md" | "lg";
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
            "wim-avatar-group__excess",
            `wim-avatar-group__excess--${size || "md"}`,
          )}
        >
          +{excessCount}
        </span>
      )}
    </div>
  );
};
