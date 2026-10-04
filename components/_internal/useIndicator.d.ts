import { default as React } from '../../../node_modules/react';
export type IndicatorOrientation = "horizontal" | "vertical";
export interface UseIndicatorOptions {
    /** The CSS selector for the active element (e.g. ".active") */
    activeSelector: string;
    /** Orientation of the indicator */
    orientation?: IndicatorOrientation;
    /** Optional variant indicator to trigger re-calculation */
    variant?: string;
    /** Extra dependence for re-calculating */
    dependence?: unknown;
}
/**
 * useIndicator is a private hook used to calculate the position and size
 * of a sliding indicator that tracks an active element (e.g., in Tabs or SegmentedControl).
 *
 * Composition Contract:
 * - Monitors the container element **and the active item itself** for layout changes.
 * - Uses ResizeObserver and MutationObserver for reactive positioning.
 * - Resolves the target element using the provided `activeSelector`.
 * - Manages an `isReady` state to prevent layout flickering on mount.
 *
 * 監視対象に active item を含めるのは必須で、コンテナだけでは足りない。
 * 横並びのタブ類はコンテナが `width: 100%` なので、**Web フォントが差し替わって
 * item の幅が変わってもコンテナのサイズは 1px も動かず、ResizeObserver が鳴らない**。
 * その結果スライダーはフォールバック字形で測った寸法のまま固定される。
 * 2026-08-01 の実測（dark・ローカル Storybook・`document.fonts.ready` 後）:
 * `Tabs - Default` 8.03px / `Tabs - Scrolling` 6.78px /
 * `TabNavigation - Default` 4.36px / `- Pills` 3.95px / `- Contained` 1.94px /
 * `- With Icons` 1.73px、いずれもスライダーが active item より短いまま。
 * `SegmentedControl` と `Tabs - Vertical` が無事だったのは、コンテナ自身の
 * サイズが変わる配置だったからで、正しさではなく偶然。
 *
 * VRT から見ると、この「ズレたまま安定」は緑に見える（毎回同じ絵が撮れる）。
 * `TabNavigation - Pills` だけがフォントの到着がマウントに間に合うかどうかの
 * 境界にあり、113px ⇄ 117px の二状態になって落ちていた（T43）。
 *
 * @param options Configuration for tracking the active element.
 */
export declare const useIndicator: ({ activeSelector, orientation, variant, dependence, }: UseIndicatorOptions) => {
    containerRef: React.RefObject<HTMLDivElement | null>;
    sliderStyle: React.CSSProperties;
    isReady: boolean;
    updateIndicator: () => void;
};
