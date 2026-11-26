import { default as React } from '../../../../node_modules/react';
import { ComponentSizeBasic } from '../../../types/tokens';
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
/**
 * Component for displaying multiple avatars bundled together.
 */
export declare const AvatarGroup: {
    ({ children, max, size, total, overflow, className, }: AvatarGroupProps): React.JSX.Element;
    displayName: string;
};
export {};
