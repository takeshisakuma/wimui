import { default as React } from '../../../../node_modules/react';
import { ComponentSizeBasic, IndicatorIntent } from '../../../types/tokens';
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
export declare const Avatar: {
    ({ src, alt, initials, icon, size, shape, intent, className, ...props }: AvatarProps): React.JSX.Element;
    displayName: string;
};
export {};
