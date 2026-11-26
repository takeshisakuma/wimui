import { default as React } from '../../../../node_modules/react';
import { PresenceStatus } from '../Presence/Presence';
import { ComponentSizeBasic } from '../../../types/tokens';
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
export declare const Persona: React.ForwardRefExoticComponent<Omit<Omit<React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>, "ref">, "children"> & {
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
} & React.RefAttributes<HTMLDivElement>>;
