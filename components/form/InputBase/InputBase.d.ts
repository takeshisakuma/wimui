import { default as React } from '../../../../node_modules/react';
import { Icon } from '../../media/Icon/Icon';
import { WimIntent, FieldIntent, FieldWidth, FieldVariant } from '../../../types/tokens';
export type InputBaseIcon = {
    name: React.ComponentProps<typeof Icon>["name"];
    onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
    color?: React.ComponentProps<typeof Icon>["color"];
    ariaLabel?: string;
    className?: string;
    /** Whether the icon should be rotated 180deg */
    rotated?: boolean;
};
export type InputBaseProps = {
    /** Inner form control element(s) wrapped by the shell */
    children: React.ReactNode;
    /** Semantic intent of the field (e.g. error state) */
    intent?: FieldIntent | WimIntent;
    /** Visual style variant of the field */
    variant?: FieldVariant;
    /** Whether to take full width of parent */
    fullWidth?: boolean;
    /** Fixed width of the field (width token, CSS value, or number in px) */
    width?: FieldWidth | string | number;
    /** Additional class names */
    className?: string;
    /** Whether the field is disabled */
    disabled?: boolean;
    /** Icon name to display on the left side */
    leftIcon?: React.ComponentProps<typeof Icon>["name"];
    /** Color of the left icon */
    leftIconColor?: React.ComponentProps<typeof Icon>["color"];
    /** Callback when the left icon is clicked (renders the icon as a button) */
    onLeftIconClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
    /** Aria label for the left icon button */
    leftIconAriaLabel?: string;
    /** Icons to display on the right side */
    rightIcons?: InputBaseIcon[];
    /**
     * Static text shown after the control, inside the same shell — a unit such
     * as `kg`, `%` or `円`. It sits in the flex flow, so the control shrinks to
     * make room rather than running underneath it.
     */
    suffix?: React.ReactNode;
    /** `id` for the suffix, so the control can point `aria-describedby` at it */
    suffixId?: string;
    /** Whether to show a clear button when value is present */
    allowClear?: boolean;
    /** Whether the field currently has a value (controls clear button visibility) */
    hasValue?: boolean;
    /** Callback when the clear button is clicked */
    onClear?: () => void;
    /** Aria label for the clear button */
    clearAriaLabel?: string;
    /** Custom styles for internal parts */
    styles?: {
        root?: string;
        inner?: string;
        icon?: string;
        icons?: string;
        iconItem?: string;
        iconButton?: string;
    };
};
/**
 * フォーム入力コンポーネント（Input, SearchInput, Select等）の外殻となる共用語コンポーネント。
 * prefix/suffix（アイコン）や clearable（クリアボタン）の配置とレイアウトを統一します。
 */
export declare const InputBase: ({ children, intent, variant, fullWidth, width, className, disabled: isDisabled, leftIcon, leftIconColor, onLeftIconClick, leftIconAriaLabel, rightIcons, suffix, suffixId, allowClear, hasValue, onClear, clearAriaLabel, styles: stylesProp, }: InputBaseProps) => React.JSX.Element;
