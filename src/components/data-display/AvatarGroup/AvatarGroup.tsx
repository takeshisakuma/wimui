import React from "react";
import classNames from "classnames";
import { useWimTranslation } from "@/i18n/useWimTranslation";
import { dataDisplayNs } from "@/i18n/generated/data-display";
import styles from "./avatar-group.module.scss";
import { Avatar } from "../../data-display/Avatar/Avatar";
import { OverflowList } from "../../layout/OverflowList/OverflowList";
import { VisuallyHidden } from "../../layout/VisuallyHidden/VisuallyHidden";
import { InlineDisclosure } from "../../_internal/InlineDisclosure";
import { ComponentSizeBasic } from "../../../types/tokens";

type AvatarGroupProps = {
  /** Avatar elements to group */
  children: React.ReactNode;
  /** Maximum number of avatars to show before collapsing into a count. Ignored with `overflow="collapse"`. */
  max?: number;
  /** Size applied to the avatars */
  size?: ComponentSizeBasic;
  /** Total number of avatars (used to compute the overflow count). Ignored with `overflow="collapse"`. */
  total?: number;
  /**
   * How the avatars that do not fit are handled. `"count"` cuts them by `max` / `total` and shows
   * "+N" as text; `"collapse"` shows as many as fit the width and turns "+N" into a button that
   * lists the hidden people by name.
   * @default "count"
   */
  overflow?: "count" | "collapse";
  /** Additional class names */
  className?: string;
};

type AvatarElement = React.ReactElement<React.ComponentProps<typeof Avatar>>;

const isAvatar = (child: React.ReactNode): child is AvatarElement => {
  if (!React.isValidElement(child)) return false;
  const childType = child.type as React.ComponentType | string;
  return (
    childType === Avatar ||
    (typeof childType !== "string" && childType?.displayName === "Avatar") ||
    (typeof childType !== "string" && childType?.name === "Avatar")
  );
};

/**
 * Component for displaying multiple avatars bundled together.
 */
export const AvatarGroup = ({
  children,
  max,
  size = "md",
  total,
  overflow = "count",
  className,
}: AvatarGroupProps) => {
  const { t } = useWimTranslation(dataDisplayNs);
  const avatars = React.Children.toArray(children);

  const renderAvatar = (child: React.ReactNode, index: number) => {
    if (isAvatar(child)) {
      return React.cloneElement(child, {
        size: size || child.props.size,
        className: classNames(child.props.className, styles.avatar),
        key: index,
      });
    }
    return child;
  };

  if (overflow === "collapse") {
    return (
      <OverflowList
        className={classNames("wim-avatar-group", styles.collapse, className)}
        gap="0"
        items={avatars}
        renderItem={renderAvatar}
        renderOverflow={(hidden) => (
          <InlineDisclosure
            triggerClassName={classNames(styles.excess, styles[size])}
            // 名前は、見えている「+N」から始めて、何が開くかを続ける
            trigger={
              <>
                +{hidden.length}{" "}
                <VisuallyHidden>{t("avatar_group.show_everyone")}</VisuallyHidden>
              </>
            }
          >
            {hidden.map((child, index) => {
              if (!isAvatar(child)) return <li key={index}>{child}</li>;
              const name = child.props.alt || child.props.initials || "";
              return (
                <li key={index} className={styles.person}>
                  {/* 名前は隣の文字で読む。アバターは飾りにする */}
                  {React.cloneElement(child, { size: "sm", alt: "", "aria-hidden": true } as Partial<
                    React.ComponentProps<typeof Avatar>
                  >)}
                  <span>{name}</span>
                </li>
              );
            })}
          </InlineDisclosure>
        )}
      />
    );
  }

  const totalAvatars = total || avatars.length;
  const itemsToShow = max ? avatars.slice(0, max) : avatars;
  const excessCount = totalAvatars - itemsToShow.length;

  return (
    <div className={classNames("wim-avatar-group", styles.root, className)}>
      {itemsToShow.map(renderAvatar)}
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
