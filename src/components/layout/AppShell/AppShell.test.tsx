import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { AppShell, AppShellHeader, AppShellSidebar, AppShellFooter, AppShellNavbar } from "./AppShell";
import styles from "./appshell.module.scss";

describe("AppShell", () => {
  it("renders children correctly", () => {
    render(<AppShell>Test Content</AppShell>);
    expect(screen.getByText("Test Content")).toBeInTheDocument();
  });

  it("renders with header", () => {
    render(
      <AppShell header={<div>Header Content</div>}>Main Content</AppShell>,
    );
    expect(screen.getByText("Header Content")).toBeInTheDocument();
    expect(screen.getByText("Main Content")).toBeInTheDocument();
  });

  it("renders with sidebar", () => {
    render(
      <AppShell sidebar={<div>Sidebar Content</div>}>Main Content</AppShell>,
    );
    expect(screen.getByText("Sidebar Content")).toBeInTheDocument();
    expect(screen.getByText("Main Content")).toBeInTheDocument();
  });

  it("renders with footer", () => {
    render(
      <AppShell footer={<div>Footer Content</div>}>Main Content</AppShell>,
    );
    expect(screen.getByText("Footer Content")).toBeInTheDocument();
    expect(screen.getByText("Main Content")).toBeInTheDocument();
  });

  it("renders with navbar", () => {
    render(
      <AppShell navbar={<div>Navbar Content</div>}>Main Content</AppShell>,
    );
    expect(screen.getByText("Navbar Content")).toBeInTheDocument();
    expect(screen.getByText("Main Content")).toBeInTheDocument();
  });

  it("applies padding by default", () => {
    const { container } = render(<AppShell>Content</AppShell>);
    const main = container.querySelector("main");
    expect(main).toHaveClass(styles.main);
    expect(main).toHaveClass(styles.padded);
  });

  it("removes padding when padding is false", () => {
    const { container } = render(<AppShell padding={false}>Content</AppShell>);
    const main = container.querySelector("main");
    expect(main).not.toHaveClass(styles.padded);
  });

  it("applies centered class when centered is true", () => {
    const { container } = render(<AppShell centered>Content</AppShell>);
    const main = container.querySelector("main");
    expect(main).toHaveClass(styles.centered);
  });

  it("applies custom className", () => {
    const { container } = render(
      <AppShell className="custom-class">Content</AppShell>,
    );
    const appshell = container.firstChild as HTMLElement;
    expect(appshell).toHaveClass("custom-class");
  });

  it("renders the sidebar it is given", () => {
    // 以前は `withSidebar` クラスの有無を見ていたが、そのクラスは SCSS に存在せず、
    // **スタイルの当たらないクラスが付いていること**を固定していただけだった（T58）。
    // 実際に起きるのは「サイドバーが描かれる」ことなので、そちらを見る。
    const { container, getByText } = render(
      <AppShell sidebar={<div>Sidebar</div>}>Content</AppShell>,
    );
    expect(getByText("Sidebar")).toBeInTheDocument();
    expect(container.querySelector(`.${styles.sidebar}`)).toBeInTheDocument();
  });

  it("renders AppShellHeader as standalone component", () => {
    const { container } = render(<AppShellHeader className="my-header">Header</AppShellHeader>);
    expect(screen.getByText("Header")).toBeInTheDocument();
    expect(container.firstChild).toHaveClass("my-header");
    expect(container.firstChild).toHaveClass(styles.header);
  });

  it("renders AppShellSidebar as standalone component", () => {
    const { container } = render(<AppShellSidebar className="my-sidebar">Sidebar</AppShellSidebar>);
    expect(screen.getByText("Sidebar")).toBeInTheDocument();
    expect(container.firstChild).toHaveClass("my-sidebar");
    expect(container.firstChild).toHaveClass(styles.sidebar);
  });

  it("renders AppShellFooter as standalone component", () => {
    const { container } = render(<AppShellFooter className="my-footer">Footer</AppShellFooter>);
    expect(screen.getByText("Footer")).toBeInTheDocument();
    expect(container.firstChild).toHaveClass("my-footer");
    expect(container.firstChild).toHaveClass(styles.footer);
  });

  it("renders AppShellNavbar as standalone component", () => {
    const { container } = render(<AppShellNavbar className="my-navbar">Navbar</AppShellNavbar>);
    expect(screen.getByText("Navbar")).toBeInTheDocument();
    expect(container.firstChild).toHaveClass("my-navbar");
    expect(container.firstChild).toHaveClass(styles.navbar);
  });

  it("renders all sections together", () => {
    render(
      <AppShell
        header={<div>Header</div>}
        sidebar={<div>Sidebar</div>}
        footer={<div>Footer</div>}
        navbar={<div>Navbar</div>}
      >
        Main Content
      </AppShell>,
    );
    expect(screen.getByText("Header")).toBeInTheDocument();
    expect(screen.getByText("Sidebar")).toBeInTheDocument();
    expect(screen.getByText("Main Content")).toBeInTheDocument();
    expect(screen.getByText("Footer")).toBeInTheDocument();
    expect(screen.getByText("Navbar")).toBeInTheDocument();
  });
});

