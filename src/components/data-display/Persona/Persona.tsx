import React from "react";
import classNames from "classnames";
import { useWimTranslation } from "@/i18n/useWimTranslation";
import { commonNs } from "@/i18n/generated/common";
import { Avatar } from "../Avatar/Avatar";
import { Presence, type PresenceStatus } from "../Presence/Presence";
import { VisuallyHidden } from "../../layout/VisuallyHidden/VisuallyHidden";
import type { ComponentSizeBasic } from "../../../types/tokens";
import localStyles from "./persona.module.scss";

export type PersonaAvatar = {
  /** Image source URL. */
  src?: string;
  /** Initials shown when there is no image. */
  initials?: string;
  /** Icon shown when there is no image and no initials. */
  icon?: React.ReactNode;
};

export type PersonaProps = Omit<React.ComponentPropsWithoutRef<"div">, "children"> & {
  /** The person's name. Read once; the avatar is never given the name as its alternative text. */
  name: React.ReactNode;
  /** First line under the name, such as a role or a team. */
  description?: React.ReactNode;
  /** Second line under the name, smaller and quieter, such as a status or a time. */
  secondaryDescription?: React.ReactNode;
  /**
   * What the avatar shows. The avatar is decorative: the name next to it
   * already says who it is.
   */
  avatar?: PersonaAvatar;
  /** Presence shown on the avatar. Announced right after the name. */
  presence?: PresenceStatus;
  /**
   * Size of the avatar. The name and description sizes and the gaps follow it.
   * @default "md"
   */
  size?: ComponentSizeBasic;
  /**
   * Where the text sits relative to the avatar.
   * @default "after"
   */
  textPosition?: "after" | "below";
};

/**
 * Persona shows a person as one unit: avatar, name and up to two lines of
 * description, with the text sizes matched to the avatar size.
 *
 * Composition Contract:
 * - Managed by: App consumption
 * - Naming: The name is the only text that names the person. The avatar is
 *   hidden from assistive technology so the name is not read twice
 * - Scroll lock: No
 */
export const Persona = React.forwardRef<HTMLDivElement, PersonaProps>(
  (
    {
      name,
      description,
      secondaryDescription,
      avatar,
      presence,
      size = "md",
      textPosition = "after",
      className,
      ...props
    },
    ref
  ) => {
    const { t } = useWimTranslation(commonNs);
    // 名前は隣の文字が持つので、アバターは飾りにする。alt に名前を入れると、支援技術が同じ名前を 2 回読む。
    const avatarNode = (
      <Avatar
        src={avatar?.src}
        initials={avatar?.initials}
        icon={avatar?.icon}
        size={size}
        alt=""
        aria-hidden="true"
      />
    );

    return (
      <div
        ref={ref}
        className={classNames(
          "wim-persona",
          localStyles.root,
          localStyles[size],
          textPosition === "below" && localStyles.below,
          className
        )}
        {...props}
      >
        {presence ? (
          // Presence が自分で置く状態の文字は、名前より先に読まれてしまう。点は見た目だけにして、
          // 状態は名前のすぐあとに読ませる。
          <Presence status={presence} size={size} aria-hidden="true" className={localStyles.avatar}>
            {avatarNode}
          </Presence>
        ) : (
          <span className={localStyles.avatar}>{avatarNode}</span>
        )}
        <div className={localStyles.text}>
          <span className={localStyles.name} data-part="name">
            {name}
            {presence && <VisuallyHidden>{`, ${t(`presence.${presence}`)}`}</VisuallyHidden>}
          </span>
          {description != null && (
            <span className={localStyles.description} data-part="description">
              {description}
            </span>
          )}
          {secondaryDescription != null && (
            <span className={localStyles.secondaryDescription} data-part="secondary-description">
              {secondaryDescription}
            </span>
          )}
        </div>
      </div>
    );
  }
);

Persona.displayName = "Persona";
