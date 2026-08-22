import { default as React } from '../../../../node_modules/react';
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
declare const Sidebar: React.ForwardRefExoticComponent<SidebarProps & React.RefAttributes<HTMLElement>>;
export type SidebarHeaderProps = React.ComponentPropsWithoutRef<"div">;
export declare const SidebarHeader: React.ForwardRefExoticComponent<Omit<React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>, "ref"> & React.RefAttributes<HTMLDivElement>>;
export type SidebarContentProps = React.ComponentPropsWithoutRef<"div">;
export declare const SidebarContent: React.ForwardRefExoticComponent<Omit<React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>, "ref"> & React.RefAttributes<HTMLDivElement>>;
export type SidebarFooterProps = React.ComponentPropsWithoutRef<"div">;
export declare const SidebarFooter: React.ForwardRefExoticComponent<Omit<React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>, "ref"> & React.RefAttributes<HTMLDivElement>>;
export interface SidebarItemProps extends React.ComponentPropsWithoutRef<"div"> {
    active?: boolean;
    disabled?: boolean;
    icon?: React.ReactNode;
}
export declare const SidebarItem: React.ForwardRefExoticComponent<SidebarItemProps & React.RefAttributes<HTMLDivElement>>;
declare const SidebarComponent: typeof Sidebar & {
    Header: typeof SidebarHeader;
    Content: typeof SidebarContent;
    Footer: typeof SidebarFooter;
    Item: typeof SidebarItem;
};
export { SidebarComponent as Sidebar };
export default SidebarComponent;
