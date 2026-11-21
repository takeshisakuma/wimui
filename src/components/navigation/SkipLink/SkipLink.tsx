import React from "react";
import classNames from "classnames";
import { Slot } from "@radix-ui/react-slot";
import { navigationNs } from "@/i18n/generated/navigation";
import { useWimTranslation } from "@/i18n/useWimTranslation";
import localStyles from "./skip-link.module.scss";

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
export const SkipLink = React.forwardRef<HTMLAnchorElement, SkipLinkProps>(
  ({ asChild = false, className, children, href = "#main", onClick, ...props }, ref) => {
    const { t } = useWimTranslation(navigationNs);
    const Root = asChild ? Slot : "a";

    const handleClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
      onClick?.(event);
      if (event.defaultPrevented || !href.startsWith("#")) return;
      const target = document.getElementById(decodeURIComponent(href.slice(1)));
      if (!target) return;
      event.preventDefault();
      if (target.tabIndex < 0 && !target.hasAttribute("tabindex")) {
        target.setAttribute("tabindex", "-1");
      }
      target.focus();
    };

    return (
      <Root
        ref={ref}
        href={href}
        className={classNames("wim-skip-link", localStyles.root, className)}
        onClick={handleClick}
        {...props}
      >
        {children ?? t("a11y.skip_to_main_content")}
      </Root>
    );
  },
);

SkipLink.displayName = "SkipLink";
