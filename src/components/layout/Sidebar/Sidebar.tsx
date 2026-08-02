import React from "react";
import classNames from "classnames";
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
   * <HamburgerMenu visibleBelow="md" open={open} onClick={() => setOpen((o) => !o)} />
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
}

const Sidebar = React.forwardRef<HTMLElement, SidebarProps>(
  (
    {
      className,
      children,
      fixed,
      collapsed,
      width = 260,
      bordered = true,
      responsive = true,
      mobileOpen,
      onOverlayClick,
      ...props
    },
    ref,
  ) => {
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
          ref={ref}
          style={style}
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
        >

          <div className={styles.container}>{children}</div>
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
