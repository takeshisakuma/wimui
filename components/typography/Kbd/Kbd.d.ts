import { default as React } from '../../../../node_modules/react';
import { ComponentSizeBasic } from '../../../types/tokens';
export interface KbdProps extends React.HTMLAttributes<HTMLElement> {
    /**
     * If true, the Kbd will be rendered as its child, merging its props onto that child.
     */
    asChild?: boolean;
    /**
     * Size of the key cap.
     * @default "md"
     */
    size?: ComponentSizeBasic;
    /**
     * Key label(s) to display.
     */
    children?: React.ReactNode;
}
export declare const Kbd: React.ForwardRefExoticComponent<KbdProps & React.RefAttributes<HTMLElement>>;
