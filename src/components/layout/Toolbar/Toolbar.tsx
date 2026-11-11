import React, { useCallback, useEffect, useLayoutEffect, useRef } from "react";
import { useMergedRef } from "@/hooks/useMergedRef";
import classNames from "classnames";
import { Slot } from "@radix-ui/react-slot";
import type { ComponentSizeBasic, WimSpacing } from "@/types/tokens";
import { useWimTranslation } from "@/i18n/useWimTranslation";
import { layoutNs } from "@/i18n/generated/layout";
import { MoreHorizontalIcon } from "@/icon";
import { getRovingIndex } from "../../_internal/rovingIndex";
import { InlineDisclosure } from "../../_internal/InlineDisclosure";
import { OverflowList } from "../OverflowList/OverflowList";
import { Icon } from "../../media/Icon/Icon";
import localStyles from "./toolbar.module.scss";

export type ToolbarProps = React.ComponentPropsWithoutRef<"div"> & {
  /**
   * If true, the component will be rendered as its child, merging its props onto that child.
   */
  asChild?: boolean;
  /**
   * Visual density for padding and gap.
   * @default "md"
   */
  size?: ComponentSizeBasic;
  /**
   * Layout axis of the toolbar.
   * @default "horizontal"
   */
  orientation?: "horizontal" | "vertical";
  /**
   * How the controls that do not fit on one line are handled. `"wrap"` wraps them onto the next
   * line; `"collapse"` keeps one line and moves the trailing children that do not fit behind a
   * "…" button, which opens them in a panel next to it. Each direct child (a whole
   * `Toolbar.Group`) is collapsed as one unit. Horizontal toolbars only, and not with `asChild`.
   *
   * A control remounts when it moves into the panel, so keep its state controlled.
   * @default "wrap"
   */
  overflow?: "wrap" | "collapse";
  /**
   * Accessible name of the "…" button with `overflow="collapse"`, from the number of hidden
   * children. Defaults to the built-in "Show hidden tools (n)" (en / ja / pt).
   */
  moreLabel?: (count: number) => string;
};

const CANDIDATES =
  "button:not([disabled]), [href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]";

// size ごとの項目の間隔（toolbar.module.scss の .size-* と同じ）。畳む形では行を OverflowList が持つので、
// 間隔もそちらへ渡す
const GAP_BY_SIZE: Record<ComponentSizeBasic, WimSpacing> = { sm: "2xs", md: "xs", lg: "sm" };

const isSeparator = (child: React.ReactNode) =>
  React.isValidElement(child) && child.type === ToolbarSeparator;

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
      overflow = "wrap",
      moreLabel,
      className,
      children,
      onKeyDownCapture,
      onFocus,
      ...props
    },
    ref,
  ) => {
    const { t } = useWimTranslation(layoutNs);
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

      // 主軸の矢印だけ（T366。計算は rovingIndex）。無効の要素は getItems が除いている
      const nextIndex = getRovingIndex({
        key: event.key,
        current: currentIndex,
        count: items.length,
        orientation,
      });
      if (nextIndex === null) return;

      event.preventDefault();
      event.stopPropagation();
      items[nextIndex]?.focus();
    };

    const Root = asChild ? Slot : "div";
    // asChild では子が根そのものなので、子を項目に分けられない
    const collapse = overflow === "collapse" && orientation === "horizontal" && !asChild;

    // 畳んだ子は「…」の面へ移す。面は Toolbar の中に描くので、矢印の移動は「…」から面の中へ続く。
    // 区切りは面では意味を持たないので落とす
    const content = collapse ? (
      <OverflowList
        gap={GAP_BY_SIZE[size]}
        items={React.Children.toArray(children)}
        renderItem={(child) => child}
        renderOverflow={(hidden) => (
          <InlineDisclosure
            trigger={<Icon component={MoreHorizontalIcon} size="sm" />}
            label={(moreLabel ?? ((count: number) => t("a11y.toolbar_more", { count })))(
              hidden.length,
            )}
            triggerClassName={localStyles.more}
          >
            {hidden
              .filter((child) => !isSeparator(child))
              .map((child, index) => (
                <li key={index}>{child}</li>
              ))}
          </InlineDisclosure>
        )}
      />
    ) : (
      children
    );

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
          collapse && localStyles.collapse,
          className,
        )}
        onKeyDownCapture={handleKeyDown}
        onFocus={handleFocus}
        {...props}
      >
        {content}
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
