import { default as React } from '../../../node_modules/react';
import { ComponentSize, WimIntent } from '../../types/tokens';
/**
 * Props for the FeedbackIcon component.
 */
export interface FeedbackIconProps {
    /**
     * Semantic intent of the feedback.
     * @default "info"
     */
    intent?: WimIntent;
    /**
     * Custom icon node. If false, no icon will be rendered.
     */
    icon?: React.ReactNode;
    /**
     * Size of the icon.
     * @default "sm"
     */
    size?: ComponentSize;
    /**
     * Additional CSS class name.
     */
    className?: string;
    /**
     * intent の色でアイコンを塗る。省略時は継承（容器の文字色）。
     *
     * 以前は `color?: "danger" | "success" | "warning" | "info"` で、intent と
     * 同じ語彙を取っていた。そのため `intent="success" color="danger"` という
     * 矛盾が型で書けた（実際に書いている箇所は無く、唯一の利用者 `Notification` は
     * `typeToColorMap[intent]` ＝ 恒等写像を渡していた）。真偽値にして矛盾を
     * 書けなくする（T119）。
     *
     * prop を消すことはできない。 容器の扱いが 3 通りに割れている ──
     * `Alert` / `Banner` は容器が `color: text-{intent}` を当てるので継承で足り、
     * `Snackbar` は濃い intent 色が背景なので継承（on-color）でなければならず、
     * `Notification` は左の縦線しか intent 色にしないため明示が要る。
     */
    tinted?: boolean;
}
/**
 * FeedbackIcon is an internal component that resolves and displays the appropriate
 * icon based on component intent or a custom icon prop.
 *
 * Composition Contract:
 * - Prioritizes the `icon` prop if it is a valid React element.
 * - Returns null if `icon` is explicitly `false`.
 * - Maps `intent` to default system icons (e.g., success -> CheckIcon).
 */
export declare const FeedbackIcon: ({ intent, icon, size, className, tinted, }: FeedbackIconProps) => React.JSX.Element | null;
