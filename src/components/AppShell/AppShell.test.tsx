import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { AppShell } from "./AppShell";

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
    const main = container.querySelector(".wim-appshell__main");
    expect(main).toHaveClass("wim-appshell__main--padded");
  });

  it("removes padding when padding is false", () => {
    const { container } = render(<AppShell padding={false}>Content</AppShell>);
    const main = container.querySelector(".wim-appshell__main");
    expect(main).not.toHaveClass("wim-appshell__main--padded");
  });

  it("applies centered class when centered is true", () => {
    const { container } = render(<AppShell centered>Content</AppShell>);
    const main = container.querySelector(".wim-appshell__main");
    expect(main).toHaveClass("wim-appshell__main--centered");
  });

  it("applies custom className", () => {
    const { container } = render(
      <AppShell className="custom-class">Content</AppShell>,
    );
    const appshell = container.querySelector(".wim-appshell");
    expect(appshell).toHaveClass("custom-class");
  });

  it("applies with-sidebar class when sidebar is provided", () => {
    const { container } = render(
      <AppShell sidebar={<div>Sidebar</div>}>Content</AppShell>,
    );
    const appshell = container.querySelector(".wim-appshell");
    expect(appshell).toHaveClass("wim-appshell--with-sidebar");
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
