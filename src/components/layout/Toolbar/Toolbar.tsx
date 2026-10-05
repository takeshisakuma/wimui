import React, { useCallback, useEffect, useLayoutEffect, useRef } from "react";
import { useMergedRef } from "@/hooks/useMergedRef";
import classNames from "classnames";
import { Slot } from "@radix-ui/react-slot";
import type { ComponentSizeBasic } from "@/types/tokens";
import localStyles from "./toolbar.module.scss";

export type ToolbarProps = React.ComponentPropsWithoutRef<"div"> & {
  /**
   * If true, the component will be rendered as its child, merging its props onto that child.
   */
  asChild?: boolean;
  /**
   * Visual density for padding and gap. Cascades to `--wim-toolbar-*` CSS variables.
   * @default "md"
   */
  size?: ComponentSizeBasic;
  /**
   * Layout axis of the toolbar.
   * @default "horizontal"
   */
  orientation?: "horizontal" | "vertical";
};

const CANDIDATES =
  "button:not([disabled]), [href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]";

// Toolbar が tabindex="-1" を書いた要素の印。利用者（や中の部品）が自分で -1 にした要素と見分ける。
const ROVING_ATTR = "data-wim-toolbar-roving";

const BUTTON_LIKE_INPUT = /^(button|checkbox|radio|submit|reset|image|file|color)$/;

/**
 * 矢印キーを自分で使う要素（文字の入力欄・select・スライダー）。矢印を取り上げるとキャレットが
 * 動かせなくなるので、Toolbar の移動には入れない。Tab の停止点も、その要素のものをそのまま残す。
 */
const ownsArrowKeys = (el: HTMLElement) =>
  el.tagName === "TEXTAREA" ||
  el.tagName === "SELECT" ||
  el.isContentEditable ||
  (el.tagName === "INPUT" && !BUTTON_LIKE_INPUT.test((el as HTMLInputElement).type));

/** 矢印で動ける要素。利用者が tabindex="-1" にしたものは除く（Toolbar が -1 にしたものは含める）。 */
const getItems = (root: HTMLElement) =>
  Array.from(root.querySelectorAll<HTMLElement>(CANDIDATES)).filter(
    (el) =>
      !ownsArrowKeys(el) &&
      !el.closest('[aria-hidden="true"]') &&
      (el.getAttribute("tabindex") !== "-1" || el.hasAttribute(ROVING_ATTR)),
  );

/**
 * Toolbar is a layout container for clustered actions (IconButton, ToggleGroup,
 * Button). It provides `role="toolbar"`, size density tokens, and a roving
 * tabindex: the toolbar is a single Tab stop, and the arrow keys (Home / End for
 * the ends) move between its controls. Tab returns to the control used last.
 * Text fields, selects and sliders keep their own Tab stop and their arrow keys.
 *
 * Composition Contract:
 * - Managed by: App consumption
 * - Scroll lock: No
 * - Does not own action semantics — compose IconButton / ToggleGroup / Button
 * - Separators: use Toolbar.Separator (decorative); groups use Toolbar.Group
 */
const ToolbarRoot = React.forwardRef<HTMLDivElement, ToolbarProps>(
  (
    {
      asChild = false,
      size = "md",
      orientation = "horizontal",
      className,
      children,
      onKeyDownCapture,
      onFocus,
      ...props
    },
    ref,
  ) => {
    const rootRef = useRef<HTMLDivElement | null>(null);
    const setRefs = useMergedRef(ref, rootRef);

    // Tab の停止点を 1 つにまとめる（T315）。以前は中のボタンが全部 Tab で止まり、矢印でも動いた。
    // 子は任意の要素なので、props ではなく DOM の tabindex を書き換える。現在地は最後にフォーカスの
    // あった要素（無ければ先頭）。
    const currentRef = useRef<HTMLElement | null>(null);
    const observerRef = useRef<MutationObserver | null>(null);

    const syncTabStops = useCallback(() => {
      const root = rootRef.current;
      if (!root) return;
      const items = getItems(root);
      // フォーカスのある要素が最優先（中の部品が tabindex を付け替えた直後でも、現在地を見失わない）
      const active = document.activeElement as HTMLElement | null;
      const current =
        active && items.includes(active)
          ? active
          : currentRef.current && items.includes(currentRef.current)
            ? currentRef.current
            : items[0];
      currentRef.current = current ?? null;
      for (const item of items) {
        if (item === current) {
          if (item.hasAttribute(ROVING_ATTR)) {
            item.removeAttribute(ROVING_ATTR);
            item.setAttribute("tabindex", "0");
          }
        } else if (item.getAttribute("tabindex") !== "-1") {
          item.setAttribute("tabindex", "-1");
          item.setAttribute(ROVING_ATTR, "");
        }
      }
      // 自分の書き換えを、監視の側で拾い直さない
      observerRef.current?.takeRecords();
    }, []);

    useLayoutEffect(syncTabStops);

    // 子の中だけで起きる変化（無効になる・増える・中の部品が tabindex を付け替える）は、
    // Toolbar の再描画を伴わない。
    useEffect(() => {
      const root = rootRef.current;
      if (!root) return;
      const observer = new MutationObserver(() => syncTabStops());
      observer.observe(root, {
        subtree: true,
        childList: true,
        attributes: true,
        attributeFilter: ["disabled", "tabindex", "aria-hidden"],
      });
      observerRef.current = observer;
      return () => {
        observer.disconnect();
        observerRef.current = null;
      };
    }, [syncTabStops]);

    const handleFocus = (event: React.FocusEvent<HTMLDivElement>) => {
      onFocus?.(event);
      const root = rootRef.current;
      const target = event.target as HTMLElement;
      if (!root || target === currentRef.current) return;
      if (getItems(root).includes(target)) {
        currentRef.current = target;
        syncTabStops();
      }
    };

    // 主軸の矢印と Home / End は Toolbar のもの。capture で受けて、中の部品（ToggleGroup など、自分でも
    // 矢印を処理して端で折り返すもの）へは渡さない ── 渡すと、Tab の停止点が 1 つになったいま、その部品
    // から矢印で出られず、後ろのボタンへ届かなくなる。交差する軸の矢印は中の部品へそのまま届く。
    const handleKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
      onKeyDownCapture?.(event);
      if (event.defaultPrevented) return;

      const root = rootRef.current;
      if (!root) return;

      const items = getItems(root);
      if (items.length === 0) return;

      const currentIndex = items.indexOf(document.activeElement as HTMLElement);
      if (currentIndex < 0) return;

      const horizontal = orientation === "horizontal";
      const nextKey = horizontal ? "ArrowRight" : "ArrowDown";
      const prevKey = horizontal ? "ArrowLeft" : "ArrowUp";

      let nextIndex = currentIndex;
      if (event.key === nextKey) {
        event.preventDefault();
        nextIndex = (currentIndex + 1) % items.length;
      } else if (event.key === prevKey) {
        event.preventDefault();
        nextIndex = (currentIndex - 1 + items.length) % items.length;
      } else if (event.key === "Home") {
        event.preventDefault();
        nextIndex = 0;
      } else if (event.key === "End") {
        event.preventDefault();
        nextIndex = items.length - 1;
      } else {
        return;
      }

      event.stopPropagation();
      items[nextIndex]?.focus();
    };

    const Root = asChild ? Slot : "div";

    return (
      <Root
        ref={setRefs}
        role="toolbar"
        aria-orientation={orientation}
        data-size={size}
        data-orientation={orientation}
        className={classNames(
          "wim-toolbar",
          localStyles.root,
          localStyles[`size-${size}`],
          localStyles[orientation],
          className,
        )}
        onKeyDownCapture={handleKeyDown}
        onFocus={handleFocus}
        {...props}
      >
        {children}
      </Root>
    );
  },
);

ToolbarRoot.displayName = "Toolbar";

export type ToolbarGroupProps = React.ComponentPropsWithoutRef<"div"> & {
  /**
   * If true, the group will be rendered as its child, merging its props onto that child.
   */
  asChild?: boolean;
};

/**
 * Logical cluster of related toolbar controls (`role="group"`).
 */
export const ToolbarGroup = React.forwardRef<HTMLDivElement, ToolbarGroupProps>(
  ({ asChild = false, className, children, ...props }, ref) => {
    const Root = asChild ? Slot : "div";
    return (
      <Root
        ref={ref}
        role="group"
        className={classNames(localStyles.group, className)}
        {...props}
      >
        {children}
      </Root>
    );
  },
);

ToolbarGroup.displayName = "Toolbar.Group";

export type ToolbarSeparatorProps = React.ComponentPropsWithoutRef<"div">;

/**
 * Visual separator between toolbar groups. Orientation follows the parent toolbar.
 */
export const ToolbarSeparator = React.forwardRef<HTMLDivElement, ToolbarSeparatorProps>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      role="separator"
      aria-hidden="true"
      className={classNames(localStyles.separator, className)}
      {...props}
    />
  ),
);

ToolbarSeparator.displayName = "Toolbar.Separator";

export interface ToolbarComponent
  extends React.ForwardRefExoticComponent<
    ToolbarProps & React.RefAttributes<HTMLDivElement>
  > {
  Group: typeof ToolbarGroup;
  Separator: typeof ToolbarSeparator;
}

export const Toolbar = ToolbarRoot as ToolbarComponent;
Toolbar.Group = ToolbarGroup;
Toolbar.Separator = ToolbarSeparator;

export default Toolbar;
