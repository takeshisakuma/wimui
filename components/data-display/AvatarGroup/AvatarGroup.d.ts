import { default as React } from '../../../../node_modules/react';
import { ComponentSizeBasic } from '../../../types/tokens';
type AvatarGroupProps = {
    /** Avatar elements to group */
    children: React.ReactNode;
    /** Maximum number of avatars to show before collapsing into a count */
    max?: number;
    /** Size applied to the avatars */
    size?: ComponentSizeBasic;
    /** Total number of avatars (used to compute the overflow count) */
    total?: number;
    /** Additional class names */
    className?: string;
};
/**
 * Component for displaying multiple avatars bundled together.
 */
export declare const AvatarGroup: {
    ({ children, max, size, total, className, }: AvatarGroupProps): React.JSX.Element;
    displayName: string;
};
export {};
