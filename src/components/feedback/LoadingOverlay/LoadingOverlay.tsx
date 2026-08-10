import React from "react";
import type { WimColor } from "../../../types/tokens";
import classNames from "classnames";
import { Spinner } from "../../feedback/Spinner/Spinner";
import { Loader } from "../../feedback/Loader/Loader";
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
  // 値を列挙したまま書く。`ComponentSizeExtended` は同じ union だが
  // `Extract<...>` なので `check:prop-api` が値を数えられず、集合が狭まって
  // いないかを検証できなくなる（エイリアス化を試して止められた）。
  loaderSize?: "sm" | "md" | "lg" | "xl";
  /**
   * Color of the loading indicator.
   * @default "primary"
   */
  /**
   * 渡した値はそのまま `Spinner` / `Loader` の `color` へ流れる。
   * 以前はここだけが独自の閉じた集合を持っており、同じ値が 3 段で違う型を
   * 通っていた（T118）。委譲先と同じ型にそろえる。
   */
  loaderColor?: "currentColor" | WimColor;
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
   *
   * When `false` (the default) the overlay is `position: absolute`, so it covers
   * the nearest positioned ancestor — not necessarily the element you wrapped.
   * Give that element a position explicitly, e.g. `<Box position="relative">`.
   *
   * `Card` sets `position: relative` for this reason (T88), so
   * `<Card><LoadingOverlay /></Card>` covers the card. A plain `<div>` does not,
   * and the overlay will spread to the viewport — measured at 1280x800 from the
   * origin while the card it was meant to cover was 1248x75.
   *
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

  // `Spinner` / `Loader` はどちらも `ComponentSizeExtended`（`xl` を含む）を受け、
  // SCSS にも `.xl` を実装している。ここで詰め替えると、受け付けたサイズを描け
  // ないだけなので素通しする（T87: 以前は `xl` を `lg` へ潰していた）。

  const renderLoader = () => {
    if (children) {
      return children;
    }

    if (loaderType === "spinner") {
      return <Spinner size={loaderSize} color={loaderColor} />;
    }

    return (
      <Loader
        variant={loaderType as "bars" | "dots" | "pulse"}
        size={loaderSize}
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
