import { default as React } from '../../../../node_modules/react';
/** `"none"` は「その相はアニメーションしない」の意味で、`enterPreset` / `leavePreset` に渡す。 */
export type TransitionPreset = "none" | "fade" | "scale" | "slide-right" | "slide-left" | "slide-top" | "slide-bottom";
export interface TransitionProps extends React.HTMLAttributes<HTMLDivElement> {
    /** Whether the content is shown (drives the enter/leave transitions) */
    show: boolean;
    /** Content to transition */
    children: React.ReactNode;
    /** Preset transition (fade, scale, slide-*) — 入りと出の両方に効く */
    preset?: TransitionPreset;
    /**
     * 入りだけ別扱いにしたいときのプリセット。`"none"` で入りのアニメーションを止める。
     * 省略時は `preset` に従う。
     *
     * `Drawer` の `slideIn` / `slideOut` のように**片方だけ切りたい** API があるのに、
     * `preset` は両相を一括で決めるため表現できなかった（T58）。
     */
    enterPreset?: TransitionPreset;
    /** 出だけ別扱いにしたいときのプリセット。`"none"` で出のアニメーションを止める。 */
    leavePreset?: TransitionPreset;
    /** Class applied during the enter transition */
    enter?: string;
    /** Class applied at the start of the enter transition */
    enterFrom?: string;
    /** Class applied at the end of the enter transition */
    enterTo?: string;
    /** Class applied during the leave transition */
    leave?: string;
    /** Class applied at the start of the leave transition */
    leaveFrom?: string;
    /** Class applied at the end of the leave transition */
    leaveTo?: string;
    /** Whether to unmount the content when hidden */
    unmount?: boolean;
    /** Whether to run the enter transition on initial mount */
    appear?: boolean;
    /** Additional class names */
    className?: string;
}
export declare const Transition: React.ForwardRefExoticComponent<TransitionProps & React.RefAttributes<HTMLDivElement>>;
