import React from "react";
import classNames from "classnames";
import styles from "./avatar-group.module.scss";
import { Avatar } from "../../data-display/Avatar/Avatar";
import { ComponentSizeBasic } from "../../../types/tokens";

type AvatarGroupProps = {
  /** Avatar elements to group */
  children: React.ReactNode;
  /** Maximum number of avatars to show before collapsing into a count */
  max?: number;
  /** Size applied to the avatars */
  size?: ComponentSizeBasic;
  /** Total number of avatars (used to compute the overflow count) */
  total?: number;
  /** Additional class names */
  className?: string;
};

/**
 * Component for displaying multiple avatars bundled together.
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
    <div className={classNames("wim-avatar-group", styles.root, className)}>
      {itemsToShow.map((child, index) => {
        if (React.isValidElement(child)) {
          const childType = child.type as React.ComponentType | string;
          const isAvatar =
            childType === Avatar ||
            (typeof childType !== "string" && childType?.displayName === "Avatar") ||
            (typeof childType !== "string" && childType?.name === "Avatar");

          if (isAvatar) {
            const avatarProps = child.props as React.ComponentProps<typeof Avatar>;
            return React.cloneElement(child as React.ReactElement<React.ComponentProps<typeof Avatar>>, {
              size: size || avatarProps.size,
              className: classNames(avatarProps.className, styles.avatar),
              key: index,
            });
          }
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
  
AvatarGroup.displayName = "AvatarGroup";
