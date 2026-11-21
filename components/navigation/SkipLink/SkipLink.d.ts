import { default as React } from '../../../../node_modules/react';
export type SkipLinkProps = React.ComponentPropsWithoutRef<"a"> & {
    /**
     * The `id` of the element to jump to, as a fragment (`#main`). Pressing the link moves keyboard focus to that element.
     * @default "#main"
     */
    href?: string;
    /**
     * If true, the component will be rendered as its child, merging its props onto that child.
     */
    asChild?: boolean;
};
/**
 * ページの先頭に置く「本文へ飛ぶ」リンク（T418。WCAG 2.4.1 Bypass Blocks）。
 * フォーカスしたときだけ見え、押すと `href` の飛び先へフォーカスを移す。
 *
 * 素のリンクの `#id` への移動は、スクロールはしても、飛び先がフォーカスできない要素だと
 * フォーカスが動かず、次の Tab がヘッダーの続きから始まるブラウザがある。ここでは飛び先へ
 * 直接フォーカスを移し（フォーカスできない要素なら `tabIndex={-1}` を付ける）、URL の `#` は
 * 書き換えない（ルーターの持つ URL を壊さない）。
 *
 * `AppShell` は既定でこれを描き、自分の `<main>` へ飛ばす。`AppShell` を使わない画面では、
 * ページの最初の要素として置き、本文の要素に同じ `id` を付ける。
 *
 * Composition Contract:
 * - Managed by: App consumption
 * - Scroll lock: No
 */
export declare const SkipLink: React.ForwardRefExoticComponent<Omit<React.DetailedHTMLProps<React.AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement>, "ref"> & {
    /**
     * The `id` of the element to jump to, as a fragment (`#main`). Pressing the link moves keyboard focus to that element.
     * @default "#main"
     */
    href?: string;
    /**
     * If true, the component will be rendered as its child, merging its props onto that child.
     */
    asChild?: boolean;
} & React.RefAttributes<HTMLAnchorElement>>;
