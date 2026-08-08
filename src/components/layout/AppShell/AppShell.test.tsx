import { render, screen } from "@testing-library/react";
import { describe, it, expect, vi, beforeEach, afterEach } from "vitest";
import {
  AppShell,
  AppShellHeader,
  AppShellSidebar,
  AppShellFooter,
  AppShellNavbar,
} from "./AppShell";
import { resetAppShellWarnings } from "./warn-discarded-sidebar";
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

  // JSDoc が「推奨」として最初に載せている書き方。**これが動くことが T57 の受け入れ条件**。
  // 実測（対策前）: `<main>` が 2 つになり、外側の暗黙の `<main>` の中に
  // Header / Sidebar / Main が丸ごと入っていた（wim-app-shell > div > main > div > main）。
  it("does not wrap composition children in an implicit main", () => {
    const { container } = render(
      <AppShell>
        <AppShell.Header>H</AppShell.Header>
        <AppShell.Body>
          <AppShell.Sidebar>S</AppShell.Sidebar>
          <AppShell.Main>M</AppShell.Main>
        </AppShell.Body>
      </AppShell>,
    );
    const mains = container.querySelectorAll("main");
    expect(mains).toHaveLength(1);
    expect(mains[0].closest("main")).toBe(mains[0]);
  });

  // **鳴ってはいけない経路**: props API は children を素の内容として受けるので、
  // 従来どおり暗黙の `<main>` で包む。
  it("still wraps plain children in a main", () => {
    const { container } = render(<AppShell>Content</AppShell>);
    expect(container.querySelectorAll("main")).toHaveLength(1);
    expect(container.querySelector("main")).toHaveTextContent("Content");
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

/**
 * T98: Composition API 利用中の `sidebar` prop は描画経路が無く黙って捨てられる。
 * 受け入れ条件 = 混ぜたときに開発時警告が出る。鳴ってはいけない経路 = 各 API 単体。
 */
describe("AppShell warns when sidebar prop is mixed with Composition API", () => {
  let warn: ReturnType<typeof vi.spyOn>;

  beforeEach(() => {
    resetAppShellWarnings();
    warn = vi.spyOn(console, "warn").mockImplementation(() => {});
  });

  afterEach(() => {
    warn.mockRestore();
  });

  it("warns when sidebar prop is passed alongside AppShell.Main", () => {
    const { container } = render(
      <AppShell sidebar={<div>Discarded</div>}>
        <AppShell.Main>Main</AppShell.Main>
      </AppShell>,
    );
    expect(warn).toHaveBeenCalledOnce();
    expect(warn.mock.calls[0][0]).toContain("ignored the `sidebar` prop");
    // 捨てられたことの実害も固定する（警告だけ出て描画されている、では足りない）。
    expect(screen.queryByText("Discarded")).not.toBeInTheDocument();
    expect(container.querySelectorAll(`.${styles.sidebar}`)).toHaveLength(0);
  });

  // 鳴ってはいけない経路①: props API 単体（children が素の内容）
  it("stays silent for the props API with sidebar", () => {
    render(
      <AppShell sidebar={<div>Sidebar</div>}>Main Content</AppShell>,
    );
    expect(warn).not.toHaveBeenCalled();
    expect(screen.getByText("Sidebar")).toBeInTheDocument();
  });

  // 鳴ってはいけない経路②: Composition API 単体（sidebar prop を渡さない）
  it("stays silent for Composition API without the sidebar prop", () => {
    render(
      <AppShell>
        <AppShell.Header>H</AppShell.Header>
        <AppShell.Body>
          <AppShell.Sidebar>S</AppShell.Sidebar>
          <AppShell.Main>M</AppShell.Main>
        </AppShell.Body>
      </AppShell>,
    );
    expect(warn).not.toHaveBeenCalled();
    expect(screen.getByText("S")).toBeInTheDocument();
  });

  it("warns once, not once per render", () => {
    render(
      <AppShell sidebar={<div>A</div>}>
        <AppShell.Main>1</AppShell.Main>
      </AppShell>,
    );
    render(
      <AppShell sidebar={<div>B</div>}>
        <AppShell.Main>2</AppShell.Main>
      </AppShell>,
    );
    expect(warn).toHaveBeenCalledOnce();
  });
});

