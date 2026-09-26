import { default as React } from '../../../../node_modules/react';
import { ComponentSizeBasic, ButtonIntent } from '../../../types/tokens';
export interface FloatButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    /**
     * If true, the button will be rendered as its child, merging its props onto that child.
     */
    asChild?: boolean;
    /** Icon name from the library */
    iconName?: "CircleIcon" | "SquareIcon" | "LoadingIcon" | "ExternalLinkIcon" | "ArrowUpIcon" | string;
    /** Variant of the button */
    /**
     * 見た目の強さ。既定（未指定）は intent の塗り。
     *
     * 以前は `"default" | "primary" | "glass"` だったが、3 つとも実態とずれていた（T114）:
     * `primary` は variant 未指定とまったく同じ規則に落ちる重複、
     * `default` は**既定の見た目ではなく枠線のある outline** で名前が逆、
     * SCSS には誰も付けない `.default_intent` が「temporary name」のまま残っていた。
     */
    variant?: "outline" | "glass";
    /** Intent of the button (semantic meaning) */
    intent?: ButtonIntent;
    /** Shape of the button */
    shape?: "circle" | "square";
    /** Size of the button */
    size?: ComponentSizeBasic;
    /** Label text for extended FAB */
    label?: React.ReactNode;
    /** Whether to shrink the extended FAB (hide label) */
    shrink?: boolean;
    /** Position of the button */
    position?: "bottom-right" | "bottom-left" | "bottom-center" | "top-right" | "top-left" | "inline";
    /** Description for tooltip */
    description?: React.ReactNode;
    /** Badge content (number or dot) */
    badge?: number | boolean;
    /** If true, the button will scroll to the top of the page when clicked */
    backTop?: boolean;
    /** Visibility threshold for backTop (in pixels) */
    visibilityHeight?: number;
    /** Additional class names */
    className?: string;
    /** Style attribute */
    style?: React.CSSProperties;
    /** Aria label for accessibility */
    "aria-label"?: string;
}
export declare const FloatButton: React.ForwardRefExoticComponent<FloatButtonProps & React.RefAttributes<HTMLButtonElement>>;
export default FloatButton;
