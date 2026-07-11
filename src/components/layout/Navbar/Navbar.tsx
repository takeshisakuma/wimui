import React, { createContext, useContext, useState } from "react";
import classNames from "classnames";
import { HamburgerMenu } from "../../navigation/HamburgerMenu/HamburgerMenu";
import { Drawer, DrawerContent } from "../../overlay/Drawer/Drawer";
import styles from "./navbar.module.scss";

type NavbarContextType = {
  isMenuOpen: boolean;
  setIsMenuOpen: (isOpen: boolean) => void;
};

const NavbarContext = createContext<NavbarContextType | undefined>(undefined);

export interface NavbarProps extends React.ComponentPropsWithoutRef<"nav"> {
  /** Whether the navbar is fixed to the viewport */
  fixed?: boolean;
  /** Whether the navbar sticks to the top while scrolling */
  sticky?: boolean;
  /** Whether the navbar background is transparent */
  transparent?: boolean;
  /** Whether to apply the frosted-glass effect */
  glass?: boolean;
  /** Whether to show a bottom border */
  bordered?: boolean;
  /** Initial open state of the mobile menu (uncontrolled) */
  defaultMenuOpen?: boolean;
  /** Open state of the mobile menu (controlled) */
  isMenuOpen?: boolean;
  /** Callback when the mobile menu open state changes */
  onMenuOpenChange?: (isOpen: boolean) => void;
}

const NavbarRoot = React.forwardRef<HTMLElement, NavbarProps>(
  (
    {
      className,
      children,
      fixed,
      sticky,
      transparent,
      glass,
      bordered,
      defaultMenuOpen = false,
      isMenuOpen: controlledIsMenuOpen,
      onMenuOpenChange,
      ...props
    },
    ref,
  ) => {
    const [internalIsMenuOpen, setInternalIsMenuOpen] =
      useState(defaultMenuOpen);

    const isMenuOpen = controlledIsMenuOpen ?? internalIsMenuOpen;
    const setIsMenuOpen = (isOpen: boolean) => {
      setInternalIsMenuOpen(isOpen);
      onMenuOpenChange?.(isOpen);
    };

    return (
      <NavbarContext.Provider value={{ isMenuOpen, setIsMenuOpen }}>
        <nav
          ref={ref}
          className={classNames("wim-navbar", 
            styles.root,
            fixed && styles.fixed,
            sticky && styles.sticky,
            transparent && styles.transparent,
            glass && styles.glass,
            bordered && styles.bordered,
            className,
          )}
          {...props}
        >
          <div className={styles.container}>{children}</div>
        </nav>
      </NavbarContext.Provider>
    );
  },
);

NavbarRoot.displayName = "Navbar";

export type NavbarBrandProps = React.ComponentPropsWithoutRef<"div">;

export const NavbarBrand = React.forwardRef<HTMLDivElement, NavbarBrandProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={classNames(styles.brand, className)}
        {...props}
      >
        {children}
      </div>
    );
  },
);

NavbarBrand.displayName = "Navbar.Brand";

export interface NavbarContentProps extends React.ComponentPropsWithoutRef<"div"> {
  justify?: "start" | "end" | "center";
  hiddenOnMobile?: boolean;
}

export const NavbarContent = React.forwardRef<
  HTMLDivElement,
  NavbarContentProps
>(({ className, children, justify = "end", hiddenOnMobile, ...props }, ref) => {
  return (
    <div
      ref={ref}
      className={classNames(
        styles.content,
        styles[justify],
        hiddenOnMobile && styles.hiddenMobile,
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
});

NavbarContent.displayName = "Navbar.Content";

export interface NavbarItemProps extends React.ComponentPropsWithoutRef<"div"> {
  active?: boolean;
}

export const NavbarItem = React.forwardRef<HTMLDivElement, NavbarItemProps>(
  ({ className, children, active, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={classNames(
          styles.item,
          active && styles.active,
          className,
        )}
        {...props}
      >
        {children}
      </div>
    );
  },
);

NavbarItem.displayName = "Navbar.Item";

export interface NavbarLinkProps extends React.ComponentPropsWithoutRef<"a"> {
  active?: boolean;
}

export const NavbarLink = React.forwardRef<HTMLAnchorElement, NavbarLinkProps>(
  ({ className, children, active, ...props }, ref) => {
    return (
      <a
        ref={ref}
        className={classNames(
          styles.link,
          active && styles.active,
          className,
        )}
        {...props}
      >
        {children}
      </a>
    );
  },
);

NavbarLink.displayName = "Navbar.Link";

export type NavbarToggleProps = Omit<
  React.ComponentPropsWithoutRef<typeof HamburgerMenu>,
  "open" | "onClick"
>;

export const NavbarToggle = React.forwardRef<
  HTMLButtonElement,
  NavbarToggleProps
>(({ className, ...props }, ref) => {
  const context = useContext(NavbarContext);
  if (!context) {
    throw new Error("NavbarToggle must be used within a Navbar");
  }
  const { isMenuOpen, setIsMenuOpen } = context;

  return (
    <div className={styles.toggle}>
      <HamburgerMenu
        ref={ref}
        open={isMenuOpen}
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        className={className}
        {...props}
      />
    </div>
  );
});

NavbarToggle.displayName = "Navbar.Toggle";

export interface NavbarMenuProps extends React.ComponentPropsWithoutRef<"div"> {
  position?: "right" | "left" | "top" | "bottom";
}

export const NavbarMenu = React.forwardRef<HTMLDivElement, NavbarMenuProps>(
  ({ className, children, position = "top", ..._props }, _ref) => {
    const context = useContext(NavbarContext);
    if (!context) {
      throw new Error("NavbarMenu must be used within a Navbar");
    }
    const { isMenuOpen, setIsMenuOpen } = context;

    return (
      <Drawer open={isMenuOpen} onOpenChange={setIsMenuOpen} side={position}>
        <DrawerContent className={classNames(styles.menu, className)}>
          {children}
        </DrawerContent>
      </Drawer>
    );
  },
);

NavbarMenu.displayName = "Navbar.Menu";

export interface NavbarMenuItemProps extends React.ComponentPropsWithoutRef<"div"> {
  active?: boolean;
}

export const NavbarMenuItem = React.forwardRef<
  HTMLDivElement,
  NavbarMenuItemProps
>(({ className, children, active, ...props }, ref) => {
  const context = useContext(NavbarContext);
  const { setIsMenuOpen } = context || {};

  const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
    setIsMenuOpen?.(false);
    props.onClick?.(e);
  };

  return (
    <div
      ref={ref}
      className={classNames(
        styles.menuItem,
        active && styles.active,
        className,
      )}
      onClick={handleClick}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => { if (e.key === "Enter" || e.key === " ") { e.currentTarget.click(); } }}
      {...props}
    >
      {children}
    </div>
  );
});

NavbarMenuItem.displayName = "Navbar.MenuItem";

export const Navbar = Object.assign(NavbarRoot, {
  Brand: NavbarBrand,
  Content: NavbarContent,
  Item: NavbarItem,
  Link: NavbarLink,
  Toggle: NavbarToggle,
  Menu: NavbarMenu,
  MenuItem: NavbarMenuItem,
});

export default Navbar;
