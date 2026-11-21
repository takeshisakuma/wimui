import { default as React } from '../../../../node_modules/react';
import { Icon } from '../../media/Icon/Icon';
import { ComponentSizeBasic } from '../../../types/tokens';
export type LinkProps = React.ComponentPropsWithoutRef<"a"> & {
    /**
     * If true, the link will be rendered as its child, merging its props onto that child.
     * Useful for using the link styles with Link components from React Router or Next.js.
     */
    asChild?: boolean;
    /**
     * Link text or element. Alternative to children.
     */
    label?: React.ReactNode;
    /**
     * Font size of the link.
     * @default "md"
     */
    size?: ComponentSizeBasic;
    /**
     * Visual emphasis of the link.
     * @default "primary"
     */
    priority?: "primary" | "secondary" | "tertiary";
    /**
     * Name of the icon displayed alongside the label.
     */
    iconName?: React.ComponentProps<typeof Icon>["name"];
    /**
     * Position of the icon relative to the label.
     * @default "left"
     */
    iconPosition?: "left" | "right";
    /**
     * If true, opens the link in a new tab and shows an external-link icon.
     * @default false
     */
    external?: boolean;
    /** Custom styles for internal parts */
    styles?: {
        root?: string;
        label?: string;
        inner?: string;
        externalIcon?: string;
    };
};
export declare const Link: React.ForwardRefExoticComponent<Omit<React.DetailedHTMLProps<React.AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement>, "ref"> & {
    /**
     * If true, the link will be rendered as its child, merging its props onto that child.
     * Useful for using the link styles with Link components from React Router or Next.js.
     */
    asChild?: boolean;
    /**
     * Link text or element. Alternative to children.
     */
    label?: React.ReactNode;
    /**
     * Font size of the link.
     * @default "md"
     */
    size?: ComponentSizeBasic;
    /**
     * Visual emphasis of the link.
     * @default "primary"
     */
    priority?: "primary" | "secondary" | "tertiary";
    /**
     * Name of the icon displayed alongside the label.
     */
    iconName?: React.ComponentProps<typeof Icon>["name"];
    /**
     * Position of the icon relative to the label.
     * @default "left"
     */
    iconPosition?: "left" | "right";
    /**
     * If true, opens the link in a new tab and shows an external-link icon.
     * @default false
     */
    external?: boolean;
    /** Custom styles for internal parts */
    styles?: {
        root?: string;
        label?: string;
        inner?: string;
        externalIcon?: string;
    };
} & React.RefAttributes<HTMLAnchorElement>>;
