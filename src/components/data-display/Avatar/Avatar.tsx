import React, { useState } from "react";
import classNames from "classnames";
import { Icon } from "../../media/Icon/Icon";
import { ComponentSizeBasic, IndicatorIntent } from "../../../types/tokens";
import styles from "./avatar.module.scss";
import { UserIcon } from "@/icon";

type AvatarProps = React.ComponentPropsWithoutRef<"div"> & {
  /** Image source URL */
  src?: string;
  /** Alternative text for the image */
  alt?: string;
  /** Initials shown as a fallback when no image is available */
  initials?: string;
  /** Icon shown as a fallback when no image or initials are available */
  icon?: React.ReactNode;
  /** Size of the avatar */
  size?: ComponentSizeBasic;
  /** Shape of the avatar */
  shape?: "circle" | "rounded";
  /** Intent (semantic color) applied to the avatar */
  intent?: IndicatorIntent;
};

/**
 * Avatar component for displaying a user's picture or initials.
 */
export const Avatar = ({
  src,
  alt = "",
  initials,
  icon,
  size = "md",
  shape = "circle",
  intent,
  className,
  ...props
}: AvatarProps) => {
  const [hasError, setHasError] = useState(false);

  const renderFallback = () => {
    if (initials) {
      return (
        <span className={styles.initials}>{initials.substring(0, 2)}</span>
      );
    }
    if (icon) {
      return <span className={styles.icon}>{icon}</span>;
    }
    // Default Icon (User)
    return (
      <span className={styles.icon}>
        <Icon component={UserIcon} />
      </span>
    );
  };

  const isFallback = !src || hasError;
  const fallbackAriaLabel = alt || initials?.substring(0, 2) || undefined;
  const hasFallbackLabel = Boolean(fallbackAriaLabel);

  return (
    <div
      role={isFallback && hasFallbackLabel ? "img" : undefined}
      aria-label={isFallback && hasFallbackLabel ? fallbackAriaLabel : undefined}
      {...props}
      className={classNames("wim-avatar", 
        styles.root,
        styles[size],
        styles[shape],
        intent && styles[intent],
        className,
      )}
    >
      {src && !hasError ? (
        <img src={src} alt={alt} onError={() => setHasError(true)} />
      ) : (
        renderFallback()
      )}
    </div>
  );
};
Avatar.displayName = "Avatar";
