import { default as React } from '../../../node_modules/react';
import { Icon } from '../Icon/Icon';
import { WimColor } from '../../types/tokens';
export type ButtonProps = Omit<React.ComponentPropsWithoutRef<"button">, "role"> & {
    /** ボタンの背景色をデザイントークンで上書きする。通常は `priority` prop で対応できるため、このpropは最終手段として使用してください。 */
    backgroundColor?: WimColor;
    size?: "small" | "medium" | "large";
    label?: string;
    priority?: "primary" | "secondary" | "tertiary";
    role?: "default" | "destructive" | "positive";
    /** Icon name or custom icon element */
    icon?: React.ComponentProps<typeof Icon>["name"] | React.ReactNode;
    /** @deprecated Use icon instead */
    iconName?: React.ComponentProps<typeof Icon>["name"];
    iconPosition?: "left" | "right";
    loading?: boolean;
    justify?: "start" | "center" | "end" | "between";
    /** Whether to animate the width change when label changes */
    animateWidth?: boolean;
    /** Whether the button should take up the full width of its container */
    fullWidth?: boolean;
};
export declare const Button: React.ForwardRefExoticComponent<Omit<Omit<React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>, "ref">, "role"> & {
    /** ボタンの背景色をデザイントークンで上書きする。通常は `priority` prop で対応できるため、このpropは最終手段として使用してください。 */
    backgroundColor?: WimColor;
    size?: "small" | "medium" | "large";
    label?: string;
    priority?: "primary" | "secondary" | "tertiary";
    role?: "default" | "destructive" | "positive";
    /** Icon name or custom icon element */
    icon?: React.ComponentProps<typeof Icon>["name"] | React.ReactNode;
    /** @deprecated Use icon instead */
    iconName?: React.ComponentProps<typeof Icon>["name"];
    iconPosition?: "left" | "right";
    loading?: boolean;
    justify?: "start" | "center" | "end" | "between";
    /** Whether to animate the width change when label changes */
    animateWidth?: boolean;
    /** Whether the button should take up the full width of its container */
    fullWidth?: boolean;
} & {
    className?: string;
} & React.RefAttributes<HTMLButtonElement>>;
