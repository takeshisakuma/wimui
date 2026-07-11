import React from "react";
import classNames from "classnames";
import { Spinner } from "../../feedback/Spinner/Spinner";
import { Loader } from "../../feedback/Loader/Loader";
import { ComponentSizeExtended } from "../../../types/tokens";
import styles from "./loadingoverlay.module.scss";

export type LoadingOverlayProps = React.ComponentPropsWithoutRef<"div"> & {
  /**
   * Whether the overlay is shown.
   * @default false
   */
  visible?: boolean;
  /**
   * Type of the loading indicator.
   * @default "spinner"
   */
  loaderType?: "spinner" | "bars" | "dots" | "pulse";
  /**
   * Size of the loading indicator.
   * @default "lg"
   */
  loaderSize?: "sm" | "md" | "lg" | "xl";
  /**
   * Color of the loading indicator.
   * @default "primary"
   */
  loaderColor?:
    | "primary"
    | "secondary"
    | "success"
    | "warning"
    | "danger"
    | "neutral"
    | "currentColor";
  /**
   * Background style of the overlay.
   * @default "dark"
   */
  backdropVariant?: "light" | "dark";
  /**
   * Strength of the backdrop blur effect.
   * @default "sm"
   */
  blur?: "none" | "sm" | "md" | "lg";
  /**
   * Loading message displayed below the indicator.
   */
  message?: string;
  /**
   * Whether to use position: fixed (covers the whole screen).
   * @default false
   */
  fixed?: boolean;
  /**
   * z-index of the overlay.
   */
  zIndex?: number;
  /**
   * Custom loading content, replacing the default indicator.
   */
  children?: React.ReactNode;
};

/**
 * Overlays the whole screen or a specific element to display a loading state.
 */
export const LoadingOverlay = ({
  visible = false,
  loaderType = "spinner",
  loaderSize = "lg",
  loaderColor = "primary",
  backdropVariant = "dark",
  blur = "sm",
  message,
  fixed = false,
  zIndex,
  children,
  className,
  style,
  ...props
}: LoadingOverlayProps) => {
  if (!visible) {
    return null;
  }

  const sizeMap: Record<"sm" | "md" | "lg" | "xl", ComponentSizeExtended> = {
    sm: "sm",
    md: "md",
    lg: "lg",
    xl: "lg",
  };
  const mappedSize = loaderSize ? sizeMap[loaderSize] : undefined;

  const renderLoader = () => {
    if (children) {
      return children;
    }

    if (loaderType === "spinner") {
      return <Spinner size={mappedSize} color={loaderColor} />;
    }

    return (
      <Loader
        variant={loaderType as "bars" | "dots" | "pulse"}
        size={mappedSize}
        color={loaderColor}
      />
    );
  };

  return (
    <div
      className={classNames("wim-loading-overlay", 
        styles.root,
        fixed && styles.fixed,
        className,
      )}
      style={{
        ...style,
        ...(zIndex !== undefined && { zIndex }),
      }}
      role="status"
      data-testid="loading-overlay"
      aria-live="polite"
      aria-busy="true"
      {...props}
    >
      <div
        className={classNames(
          styles.backdrop,
          styles[backdropVariant],
          styles[`blur-${blur}`],
        )}
      />
      <div className={styles.content}>
        {renderLoader()}
        {message && (
          <div className={styles.message}>{message}</div>
        )}
      </div>
    </div>
  );
};

export default LoadingOverlay;
