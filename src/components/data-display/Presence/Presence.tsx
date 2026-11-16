import React from "react";
import classNames from "classnames";
import { useWimTranslation } from "@/i18n/useWimTranslation";
import { commonNs } from "@/i18n/generated/common";
import { Indicator } from "../../feedback/Indicator/Indicator";
import { VisuallyHidden } from "../../layout/VisuallyHidden/VisuallyHidden";
import { ComponentSizeBasic } from "../../../types/tokens";
import localStyles from "./presence.module.scss";

export type PresenceStatus = "online" | "away" | "busy" | "offline";

/**
 * 状態 → 色の対応をここ 1 か所に持つ。**呼び出し側に「online は success」を
 * 知らせないためのコンポーネント**なので、この表が公開されている値になる。
 */
const STATUS_COLOR: Record<PresenceStatus, "success" | "warning" | "danger" | "neutral"> = {
  online: "success",
  away: "warning",
  busy: "danger",
  offline: "neutral",
};

export type PresenceProps = Omit<React.ComponentPropsWithoutRef<"span">, "children"> & {
  /**
   * Availability of the person or resource.
   */
  status: PresenceStatus;
  /**
   * Text for the status. Defaults to the localized name of `status`.
   */
  label?: string;
  /**
   * Whether the label is shown next to the dot. The label is always exposed to
   * assistive technology; this only controls whether it is also visible.
   * @default false
   */
  showLabel?: boolean;
  /**
   * Size of the dot.
   * @default "md"
   */
  size?: ComponentSizeBasic;
  /**
   * Corner the dot is placed at. Only applies when `children` is given.
   * @default "bottom-right"
   */
  position?: "top-right" | "top-left" | "bottom-right" | "bottom-left";
  /**
   * Element the dot is attached to, typically an `Avatar`. Without it the dot
   * renders inline, next to whatever follows it.
   */
  children?: React.ReactNode;
};

/**
 * Shows whether a person is online, away, busy, or offline.
 *
 * The dot is the same one `Indicator` draws; what this component adds is the
 * vocabulary (which state maps to which color and shape) and a name for that
 * state. Each state has its own shape — a filled dot (online), a half-filled
 * dot (away), a dot with a bar (busy), and a ring (offline) — so the states
 * stay distinguishable without color, and the name is always exposed to
 * assistive technology even when `showLabel` is false.
 *
 * Composition Contract:
 * - Managed by: App consumption
 * - Scroll lock: No
 */
export const Presence = React.forwardRef<HTMLSpanElement, PresenceProps>(
  (
    {
      status,
      label,
      showLabel = false,
      size = "md",
      position = "bottom-right",
      children,
      className,
      ...props
    },
    ref,
  ) => {
    const { t } = useWimTranslation(commonNs);
    const text = label ?? t(`presence.${status}`);
    // 形は色を除いても状態が分かるように変える（T397）。点は Indicator が描くので、根に印を付けて選ぶ
    const shapeClassName = classNames(localStyles.shape, localStyles[status], children ? localStyles.attached : undefined);

    return (
      <span
        ref={ref}
        className={classNames("wim-presence", localStyles.root, className)}
        {...props}
      >
        {children ? (
          <Indicator
            color={STATUS_COLOR[status]}
            size={size}
            position={position}
            className={shapeClassName}
          >
            {children}
          </Indicator>
        ) : (
          <Indicator color={STATUS_COLOR[status]} size={size} inline className={shapeClassName} />
        )}
        {showLabel ? (
          <span className={localStyles.label}>{text}</span>
        ) : (
          <VisuallyHidden>{text}</VisuallyHidden>
        )}
      </span>
    );
  },
);

Presence.displayName = "Presence";
