import React from "react";
import classNames from "classnames";
import styles from "./appshell.module.scss";

// ─────────────────────────────────────────────
// AppShell Root
// ─────────────────────────────────────────────

export interface AppShellProps extends Omit<
  React.ComponentPropsWithoutRef<"div">,
  "size"
> {
  /** Header component */
  header?: React.ReactNode;
  /** Sidebar component */
  sidebar?: React.ReactNode;
  /** Footer component */
  footer?: React.ReactNode;
  /** Navbar component (mobile bottom navigation) */
  navbar?: React.ReactNode;
  /** Add padding to main content */
  padding?: boolean;
  /** Center main content horizontally */
  centered?: boolean;
  /** Maximum width for centered content */
  maxWidth?: number | string;
}

/**
 * アプリケーション全体のレイアウトを構成するルートコンポーネント。
 *
 * ## 使い方
 * ### 1. Composition API（推奨）
 * サブコンポーネント（`AppShell.Header`, `AppShell.Sidebar` など）を
 * `children` として渡す方法。柔軟なカスタマイズが可能。
 *
 * ```tsx
 * <AppShell>
 *   <AppShell.Header>...</AppShell.Header>
 *   <AppShell.Sidebar>...</AppShell.Sidebar>
 *   <AppShell.Main>...</AppShell.Main>
 * </AppShell>
 * ```
 *
 * ### 2. Props API（シンプルなケース向け）
 * `header`, `sidebar`, `footer`, `navbar` を props として渡す方法。
 * ただし、サイドバーを使う場合は Composition API を推奨。
 *
 * ```tsx
 * <AppShell header={<Header />} sidebar={<Sidebar />}>
 *   <main>...</main>
 * </AppShell>
 * ```
 *
 * @note サイドバーの幅は渡した `Sidebar` 自身が持つ（`width` prop、既定 260）。
 *       以前ここには「`--with-sidebar` クラスが自動付与される」と書いてあったが、
 *       そのクラスは SCSS に存在せず、付いても何も起きなかった（T58）。
 *       Composition API では**暗黙のラップをしない** — children に
 *       `AppShell.Body` / `.Main` / `.Sidebar` / `.Header` / `.Footer` / `.Navbar`
 *       のいずれかがあれば、そのまま出す。以前はここでも `<div class=body><main>`
 *       で包んでいたため、**推奨として上に載せている書き方が `<main>` を 2 つ作り**、
 *       Header も Sidebar も Main も暗黙の `<main>` の中に入っていた（T57）。
 *       props API（children が素の内容）のときは従来どおり包む。
 */
/**
 * children が**構造サブコンポーネント**（`AppShell.Body` / `.Main` / `.Sidebar` /
 * `.Header` / `.Footer` / `.Navbar`）を含むか。
 *
 * 含む場合、暗黙の `<div class=body><main>` で包んではいけない。包むと
 * **JSDoc が「推奨」として最初に載せている書き方が壊れる** — 実測（対策前、
 * `Audit/LayoutFamily`）で `<main>` が 2 つになり、外側の暗黙の `<main>` の中へ
 * Header も Sidebar も Main も丸ごと入っていた（`wim-app-shell > div > main > div > main`）。
 * JSDoc 末尾には「Composition API では `AppShell.Body` で手動構成せよ」という
 * 推奨と矛盾する注記まで付いていた（T57）。
 */
const STRUCTURAL_PARTS = new Set<unknown>([]);

const hasStructuralChild = (children: React.ReactNode): boolean =>
  React.Children.toArray(children).some(
    (child) => React.isValidElement(child) && STRUCTURAL_PARTS.has(child.type),
  );

export const AppShellRoot = React.forwardRef<HTMLDivElement, AppShellProps>(
  (
    {
      className,
      children,
      header,
      sidebar,
      footer,
      navbar,
      padding = true,
      centered,
      maxWidth,
      ...props
    },
    ref,
  ) => {
    const composed = hasStructuralChild(children);

    const style = maxWidth
      ? ({
        "--wim-appshell-max-width":
          typeof maxWidth === "number" ? `${maxWidth}px` : maxWidth,
      } as React.CSSProperties)
      : undefined;

    return (
      <div
        ref={ref}
        className={classNames("wim-app-shell", 
          styles.root,
          // `withSidebar` は SCSS に存在せず、付いても何も起きなかった（T58）。
          // サイドバーの幅は渡した `Sidebar` 自身が持つ。
          !!navbar && styles.withNavbar,
          className,
        )}
        style={style}
        {...props}
      >
        {header && <div className={styles.header}>{header}</div>}

        {composed ? (
          // Composition API: 利用者が構造を組んでいるので、そのまま出す。
          children
        ) : (
          <div className={styles.body}>
            {sidebar && <div className={styles.sidebar}>{sidebar}</div>}

            <main
              className={classNames(
                styles.main,
                padding && styles.padded,
                centered && styles.centered,
              )}
              tabIndex={0}
            >
              {centered ? (
                <div className={styles.content}>{children}</div>
              ) : (
                children
              )}
            </main>
          </div>
        )}

        {navbar && <div className={styles.navbar}>{navbar}</div>}
        {footer && <div className={styles.footer}>{footer}</div>}
      </div>
    );
  },
);

AppShellRoot.displayName = "AppShell";

// ─────────────────────────────────────────────
// AppShell.Main
// ─────────────────────────────────────────────

export interface AppShellMainProps extends Omit<
  React.ComponentPropsWithoutRef<"main">,
  "size"
> {
  /** Add padding to content */
  padding?: boolean;
  /** Center content horizontally */
  centered?: boolean;
}

/**
 * Composition API でメインコンテンツ領域を定義するサブコンポーネント。
 * Props API の `AppShellRoot` 内蔵 `<main>` と同等の機能を提供します。
 */
export const AppShellMain = React.forwardRef<HTMLElement, AppShellMainProps>(
  ({ className, children, padding = true, centered, ...props }, ref) => {
    return (
      <main
        ref={ref}
        className={classNames(
          styles.main,
          padding && styles.padded,
          centered && styles.centered,
          className,
        )}
        tabIndex={0}
        {...props}
      >
        {centered ? (
          <div className={styles.content}>{children}</div>
        ) : (
          children
        )}
      </main>
    );
  },
);

AppShellMain.displayName = "AppShell.Main";

// ─────────────────────────────────────────────
// AppShell.Body
// ─────────────────────────────────────────────

export type AppShellBodyProps = React.ComponentPropsWithoutRef<"div">;

/**
 * サイドバーとメインコンテンツを横並びにするラッパー。
 * Composition API でサイドバーを使う場合に使用します。
 */
export const AppShellBody = React.forwardRef<HTMLDivElement, AppShellBodyProps>(
  ({ className, children, ...props }, ref) => (
    <div
      ref={ref}
      className={classNames(styles.body, className)}
      {...props}
    >
      {children}
    </div>
  ),
);
AppShellBody.displayName = "AppShell.Body";

// ─────────────────────────────────────────────
// AppShell.Header / Sidebar / Footer / Navbar
// ─────────────────────────────────────────────

export type AppShellHeaderProps = React.ComponentPropsWithoutRef<"div">;
export const AppShellHeader = React.forwardRef<
  HTMLDivElement,
  AppShellHeaderProps
>(({ className, children, ...props }, ref) => (
  <div
    ref={ref}
    className={classNames(styles.header, className)}
    {...props}
  >
    {children}
  </div>
));
AppShellHeader.displayName = "AppShell.Header";

export type AppShellSidebarProps = React.ComponentPropsWithoutRef<"div">;
export const AppShellSidebar = React.forwardRef<
  HTMLDivElement,
  AppShellSidebarProps
>(({ className, children, ...props }, ref) => (
  <div
    ref={ref}
    className={classNames(styles.sidebar, className)}
    {...props}
  >
    {children}
  </div>
));
AppShellSidebar.displayName = "AppShell.Sidebar";

export type AppShellFooterProps = React.ComponentPropsWithoutRef<"div">;
export const AppShellFooter = React.forwardRef<
  HTMLDivElement,
  AppShellFooterProps
>(({ className, children, ...props }, ref) => (
  <div
    ref={ref}
    className={classNames(styles.footer, className)}
    {...props}
  >
    {children}
  </div>
));
AppShellFooter.displayName = "AppShell.Footer";

export type AppShellNavbarProps = React.ComponentPropsWithoutRef<"div">;
export const AppShellNavbar = React.forwardRef<
  HTMLDivElement,
  AppShellNavbarProps
>(({ className, children, ...props }, ref) => (
  <div
    ref={ref}
    className={classNames(styles.navbar, className)}
    {...props}
  >
    {children}
  </div>
));
AppShellNavbar.displayName = "AppShell.Navbar";

// ─────────────────────────────────────────────
// Compound Component
// ─────────────────────────────────────────────

const AppShellComponent = AppShellRoot as typeof AppShellRoot & {
  Main: typeof AppShellMain;
  Body: typeof AppShellBody;
  Header: typeof AppShellHeader;
  Sidebar: typeof AppShellSidebar;
  Footer: typeof AppShellFooter;
  Navbar: typeof AppShellNavbar;
};

// 判定用の集合はここで埋める（サブコンポーネントの定義がルートより後ろにあるため）。
// 参照は render 時に引かれるので、モジュール初期化のこの時点で足りる。
for (const part of [
  AppShellBody,
  AppShellMain,
  AppShellHeader,
  AppShellSidebar,
  AppShellFooter,
  AppShellNavbar,
]) {
  STRUCTURAL_PARTS.add(part);
}

AppShellComponent.Main = AppShellMain;
AppShellComponent.Body = AppShellBody;
AppShellComponent.Header = AppShellHeader;
AppShellComponent.Sidebar = AppShellSidebar;
AppShellComponent.Footer = AppShellFooter;
AppShellComponent.Navbar = AppShellNavbar;

export { AppShellComponent as AppShell };
export default AppShellComponent;
