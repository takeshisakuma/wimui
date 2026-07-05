import React, { useState } from "react";
import classNames from "classnames";
import { Icon } from "../../media/Icon/Icon";
import { ComponentSizeBasic, IndicatorIntent } from "../../../types/tokens";
import styles from "./avatar.module.scss";
import { UserIcon } from "@/icon";

type AvatarProps = React.ComponentPropsWithoutRef<"div"> & {
  src?: string;
  alt?: string;
  initials?: string;
  icon?: React.ReactNode;
  size?: ComponentSizeBasic;
  shape?: "circle" | "rounded";
  intent?: IndicatorIntent;
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
      className={classNames(
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
