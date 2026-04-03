import React, { useState } from "react";
import classNames from "classnames";
import { Icon } from "../../media/Icon/Icon";
import { ComponentSize, WimIntent } from "../../../types/tokens";
import "./avatar.scss";

type AvatarProps = React.ComponentPropsWithoutRef<"div"> & {
  src?: string;
  alt?: string;
  initials?: string;
  icon?: React.ReactNode;
  size?: ComponentSize;
  shape?: "circle" | "rounded";
  intent?: WimIntent;
};

/**
 * ユーザーのアイコンやイニシャルを表示するためのアバターコンポーネント。
 */
export const Avatar = ({
  src,
  alt = "",
  initials,
  icon,
  size = "md",
  shape = "circle", intent,
  className,
  ...props
}: AvatarProps) => {
  const [hasError, setHasError] = useState(false);

  const renderFallback = () => {
    if (initials) {
      return (
        <span className="wim-avatar__initials">{initials.substring(0, 2)}</span>
      );
    }
    if (icon) {
      return <span className="wim-avatar__icon">{icon}</span>;
    }
    // Default Icon (User)
    return (
      <span className="wim-avatar__icon">
        <Icon name="UserIcon" />
      </span>
    );
  };

  return (
    <div
      className={classNames(
        "wim-avatar",
        `wim-avatar--${size}`,
        `wim-avatar--${shape}`,
        intent && `wim-avatar--${intent}`,
        className,
      )}
      {...props}
    >
      {src && !hasError ? (
        <img src={src} alt={alt} onError={() => setHasError(true)} />
      ) : (
        renderFallback()
      )}
    </div>
  );
};
