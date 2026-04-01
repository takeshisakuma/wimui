import { default as React } from '../../../../node_modules/react';
import { Icon } from '../../media/Icon/Icon';
import { WimColor, ComponentSize } from '../../../types/tokens';
export type ButtonProps = React.ComponentPropsWithoutRef<"button"> & {
    /** ボタンの背景色をデザイントークンで上書きする。通常は `variant` prop で対応できるため、このpropは最終手段として使用してください。 */
    backgroundColor?: WimColor;
    size?: ComponentSize;
    /** @deprecated Use `children` instead. */
    label?: React.ReactNode;
    variant?: "filled" | "outlined" | "ghost";
    /** ボタンのデザイン上の意味（視覚・意味的状態）。ARIAの role 属性とは無関係。 */
    intent?: "default" | "destructive" | "positive";
    /** Icon name or custom icon element */
    icon?: React.ComponentProps<typeof Icon>["name"] | React.ReactNode;
    iconPosition?: "left" | "right";
    loading?: boolean;
    justify?: "start" | "center" | "end" | "between";
    /** Whether to animate the width change when label changes */
    animateWidth?: boolean;
    /** Whether the button should take up the full width of its container */
    fullWidth?: boolean;
};
export declare const Button: React.ForwardRefExoticComponent<Omit<React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>, "ref"> & {
    /** ボタンの背景色をデザイントークンで上書きする。通常は `variant` prop で対応できるため、このpropは最終手段として使用してください。 */
    backgroundColor?: WimColor;
    size?: ComponentSize;
    /** @deprecated Use `children` instead. */
    label?: React.ReactNode;
    variant?: "filled" | "outlined" | "ghost";
    /** ボタンのデザイン上の意味（視覚・意味的状態）。ARIAの role 属性とは無関係。 */
    intent?: "default" | "destructive" | "positive";
    /** Icon name or custom icon element */
    icon?: React.ComponentProps<typeof Icon>["name"] | React.ReactNode;
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
