import React from "react";
import classNames from "classnames";
import { useBreakpointDown } from "@/hooks/useBreakpoint";
import { useMergedRef } from "@/hooks/useMergedRef";
import { useWimTranslation } from "@/i18n/useWimTranslation";
import { commonNs } from "@/i18n/generated/common";
import { useEscapeLayer } from "../../_internal/escapeStack";
import { IconButton } from "../../form/IconButton/IconButton";
import { FocusTrap } from "../../overlay/FocusTrap/FocusTrap";
import styles from "./sidebar.module.scss";

export interface SidebarProps extends React.ComponentPropsWithoutRef<"aside"> {
  /** Fixed position */
  fixed?: boolean;
  /** Collapsed state */
  collapsed?: boolean;
  /** Width when expanded */
  width?: number | string;
  /** Border at the right */
  bordered?: boolean;
  /**
   * Below the `md` breakpoint, move the sidebar off-canvas so it stops taking
   * width from the content. Defaults to `true`.
   *
   * **It does not bring a way back on screen.** Off-canvas means
   * `left: -{width}` until `mobileOpen` is true, and nothing in this component
   * flips that — so on a phone the sidebar and everything in it become
   * unreachable unless you wire a trigger yourself. Measured at 390px: the rail
   * sits at `x = -260` with no control anywhere on the page (T60).
   *
   * Pair it with `mobileOpen` and a `HamburgerMenu`, the way the AppShell story
   * does:
   *
   * ```tsx
   * const [open, setOpen] = useState(false);
   *
   * <HamburgerMenu visibleBelow="md" open={open} onOpenChange={setOpen} />
   * <Sidebar mobileOpen={open} onOverlayClick={() => setOpen(false)}>…</Sidebar>
   * ```
   *
   * `visibleBelow="md"` keeps the control out of the way at widths where the
   * rail is already on screen. The trigger lives outside this component on
   * purpose: it usually belongs in the header, and a built-in one would sit in
   * the wrong place or duplicate the one you already have.
   *
   * Set `responsive={false}` to keep the sidebar in flow at every width.
   */
  responsive?: boolean;
  /** Mobile drawer open state. Required for the rail to be reachable below `md` — see `responsive`. */
  mobileOpen?: boolean;
  /** Callback when overlay is clicked */
  onOverlayClick?: () => void;
  /**
   * Called when the open mobile drawer asks to close, from Escape or its close
   * button. Passing it turns on the drawer's keyboard behavior below `md`: a
   * close button, focus moved into the drawer and kept there, and focus
   * returned to the trigger on close. Overlay clicks still call `onOverlayClick`.
   */
  onMobileClose?: () => void;
  /**
   * Whether the open mobile drawer shows its own close button. Set to `false`
   * when the trigger stays visible and already acts as the close control, as a
   * `HamburgerMenu` in an `AppShell` header does. Tab then cycles between that
   * trigger and the drawer's contents.
   * @default true
   */
  showMobileCloseButton?: boolean;
}

const DRAWER_STOPS = 'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])';

const Sidebar = React.forwardRef<HTMLElement, SidebarProps>(
  (
    {
      className,
      children,
      fixed,
      collapsed,
      width = 260, /* Exception: Structural Logic — サイドバーの幅は間隔ではなく画面の割り付け。間隔の刻み（最大 2.2rem）に寄せられない */
      bordered = true,
      responsive = true,
      mobileOpen,
      onOverlayClick,
      onMobileClose,
      showMobileCloseButton = true,
      ...props
    },
    ref,
  ) => {
    const asideRef = React.useRef<HTMLElement>(null);
    const mergedRef = useMergedRef(ref, asideRef);
    const { t } = useWimTranslation(commonNs);
    const isBelowMd = useBreakpointDown("md");
    // 閉じる口を渡されていないときは閉じ込めない（Tab でも Escape でも出られなくなる）
    const drawerActive = responsive && !!mobileOpen && isBelowMd && !!onMobileClose;
    useEscapeLayer(drawerActive, () => onMobileClose?.());
    const closesFromTrigger = drawerActive && !showMobileCloseButton;

    // 自前の × を出さないときは、引き金が閉じる口なので、FocusTrap で閉じ込めると Tab で届かなくなる。
    // 引き金とドロワーの中だけを巡る
    React.useEffect(() => {
      const aside = asideRef.current;
      if (!closesFromTrigger || !aside) return;

      const focused = document.activeElement;
      const trigger = focused instanceof HTMLElement && focused !== document.body ? focused : null;
      const inner = () =>
        Array.from(aside.querySelectorAll<HTMLElement>(DRAWER_STOPS)).filter(
          (el) =>
            el.tabIndex >= 0 &&
            !(el as HTMLButtonElement).disabled &&
            el.getClientRects().length > 0,
        );
      inner()[0]?.focus();

      const handleKeyDown = (event: KeyboardEvent) => {
        if (event.key !== "Tab") return;
        const stops = [...(trigger?.isConnected ? [trigger] : []), ...inner()];
        if (stops.length === 0) return;
        const active = document.activeElement;
        const index = stops.indexOf(active as HTMLElement);
        if (index < 0) {
          // 中で開いた面（body に描かれる）のフォーカスには触らない
          if (active !== document.body) return;
          event.preventDefault();
          stops[0].focus();
          return;
        }
        event.preventDefault();
        stops[(index + (event.shiftKey ? -1 : 1) + stops.length) % stops.length].focus();
      };
      document.addEventListener("keydown", handleKeyDown);
      return () => {
        document.removeEventListener("keydown", handleKeyDown);
        if (aside.contains(document.activeElement)) trigger?.focus();
      };
    }, [closesFromTrigger]);

    const style = {
      "--wim-sidebar-width": typeof width === "number" ? `${width}px` : width,
    } as React.CSSProperties;

    return (
      <>
        {responsive && mobileOpen && (
          <div
            className={styles.overlay}
            onClick={onOverlayClick}
            aria-hidden="true"
          />
        )}
        <aside
          ref={mergedRef}
          className={classNames("wim-sidebar", 
            styles.root,
            fixed && styles.fixed,
            collapsed && styles.collapsed,
            bordered && styles.bordered,
            responsive && styles.responsive,
            mobileOpen && styles["mobile-open"],
            className,
          )}
          data-collapsed={collapsed}
          {...props}
          // style は、props を広げたあとに置く。先に置くと、利用者が渡した style が、幅の変数を消す。
          style={{ ...style, ...props.style }}
        >

          <div className={styles.container}>
            {/* 閉じ込めの包みは常に描く（開閉で付け外すと、中身が作り直される） */}
            <FocusTrap active={drawerActive && showMobileCloseButton}>
              {drawerActive && showMobileCloseButton && (
                <div className={styles.drawerClose}>
                  <IconButton
                    iconName="CloseIcon"
                    variant="ghost"
                    size="sm"
                    aria-label={t("a11y.close_menu")}
                    onClick={onMobileClose}
                  />
                </div>
              )}
              {children}
            </FocusTrap>
          </div>
        </aside>
      </>
    );
  },
);

Sidebar.displayName = "Sidebar";

export type SidebarHeaderProps = React.ComponentPropsWithoutRef<"div">;
export const SidebarHeader = React.forwardRef<
  HTMLDivElement,
  SidebarHeaderProps
>(({ className, children, ...props }, ref) => (
  <div
    ref={ref}
    className={classNames(styles.header, className)}
    {...props}
  >
    {children}
  </div>
));
SidebarHeader.displayName = "Sidebar.Header";

export type SidebarContentProps = React.ComponentPropsWithoutRef<"div">;
export const SidebarContent = React.forwardRef<
  HTMLDivElement,
  SidebarContentProps
>(({ className, children, ...props }, ref) => (
  <div
    ref={ref}
    className={classNames(styles.content, className)}
    {...props}
  >
    {children}
  </div>
));
SidebarContent.displayName = "Sidebar.Content";

export type SidebarFooterProps = React.ComponentPropsWithoutRef<"div">;
export const SidebarFooter = React.forwardRef<
  HTMLDivElement,
  SidebarFooterProps
>(({ className, children, ...props }, ref) => (
  <div
    ref={ref}
    className={classNames(styles.footer, className)}
    {...props}
  >
    {children}
  </div>
));
SidebarFooter.displayName = "Sidebar.Footer";

export interface SidebarItemProps extends React.ComponentPropsWithoutRef<"div"> {
  active?: boolean;
  disabled?: boolean;
  icon?: React.ReactNode;
}
export const SidebarItem = React.forwardRef<HTMLDivElement, SidebarItemProps>(
  ({ className, children, active, disabled, icon, ...props }, ref) => (
    <div
      ref={ref}
      className={classNames(
        styles.item,
        active && styles.active,
        disabled && styles.disabled,
        className,
      )}
      {...props}
    >
      {icon && <span className={styles.itemIcon}>{icon}</span>}
      <span className={styles.itemText}>{children}</span>
    </div>
  ),
);
SidebarItem.displayName = "Sidebar.Item";

const SidebarComponent = Sidebar as typeof Sidebar & {
  Header: typeof SidebarHeader;
  Content: typeof SidebarContent;
  Footer: typeof SidebarFooter;
  Item: typeof SidebarItem;
};

SidebarComponent.Header = SidebarHeader;
SidebarComponent.Content = SidebarContent;
SidebarComponent.Footer = SidebarFooter;
SidebarComponent.Item = SidebarItem;

export { SidebarComponent as Sidebar };
export default SidebarComponent;
