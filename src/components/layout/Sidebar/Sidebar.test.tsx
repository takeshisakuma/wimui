import { fireEvent, render, screen } from "@testing-library/react";
import { afterEach, describe, it, expect, vi } from "vitest";
import { Sidebar } from "./Sidebar";

const stubViewport = (belowMd: boolean) => {
  window.matchMedia = vi.fn((query: string) => ({
    matches: belowMd && query.includes("max-width"),
    media: query,
    addEventListener: vi.fn(),
    removeEventListener: vi.fn(),
  })) as unknown as typeof window.matchMedia;
};

describe("Sidebar", () => {
  it("renders children", () => {
    render(
      <Sidebar>
        <Sidebar.Header>Header</Sidebar.Header>
        <Sidebar.Content>Content</Sidebar.Content>
        <Sidebar.Footer>Footer</Sidebar.Footer>
      </Sidebar>,
    );

    expect(screen.getByText("Header")).toBeInTheDocument();
    expect(screen.getByText("Content")).toBeInTheDocument();
    expect(screen.getByText("Footer")).toBeInTheDocument();
  });

  it("applies collapsed attribute", () => {
    const { container } = render(<Sidebar collapsed />);
    expect(container.querySelector("aside")).toHaveAttribute("data-collapsed", "true");
  });


  it("renders sidebar items with icons", () => {
    render(
      <Sidebar>
        <Sidebar.Item icon={<span data-testid="icon">Icon</span>}>
          Item Label
        </Sidebar.Item>
      </Sidebar>,
    );

    expect(screen.getByTestId("icon")).toBeInTheDocument();
    expect(screen.getByText("Item Label")).toBeInTheDocument();
  });

  describe("Sidebar.Item keyboard", () => {
    it("is a named Tab stop that activates with Enter and Space", () => {
      const onClick = vi.fn();
      render(<Sidebar.Item onClick={onClick}>Settings</Sidebar.Item>);
      const item = screen.getByRole("button", { name: "Settings" });
      expect(item).toHaveAttribute("tabindex", "0");

      fireEvent.keyDown(item, { key: "Enter" });
      expect(onClick).toHaveBeenCalledTimes(1);
      // Space はページをスクロールさせない
      expect(fireEvent.keyDown(item, { key: " " })).toBe(false);
      expect(onClick).toHaveBeenCalledTimes(2);
      fireEvent.keyDown(item, { key: "a" });
      expect(onClick).toHaveBeenCalledTimes(2);
    });

    it("does not activate when disabled and leaves the Tab order", () => {
      const onClick = vi.fn();
      render(<Sidebar.Item disabled onClick={onClick}>Billing</Sidebar.Item>);
      const item = screen.getByRole("button", { name: "Billing" });
      expect(item).toHaveAttribute("aria-disabled", "true");
      expect(item).toHaveAttribute("tabindex", "-1");

      fireEvent.click(item);
      fireEvent.keyDown(item, { key: "Enter" });
      expect(onClick).not.toHaveBeenCalled();
    });

    it("marks the active item as the current page", () => {
      render(<Sidebar.Item active>Home</Sidebar.Item>);
      expect(screen.getByRole("button", { name: "Home" })).toHaveAttribute("aria-current", "page");
    });

    it("leaves keys pressed on an element inside the item alone", () => {
      const onClick = vi.fn();
      render(<Sidebar.Item onClick={onClick}><input aria-label="inner" /></Sidebar.Item>);
      fireEvent.keyDown(screen.getByRole("textbox"), { key: "Enter" });
      expect(onClick).not.toHaveBeenCalled();
    });
  });

  describe("mobile drawer (T433)", () => {
    const original = window.matchMedia;
    afterEach(() => {
      window.matchMedia = original;
    });

    it("focuses the named close button, and closes from it and from Escape", () => {
      stubViewport(true);
      const onMobileClose = vi.fn();
      render(<Sidebar mobileOpen onMobileClose={onMobileClose} />);

      const close = screen.getByRole("button");
      expect(close).toHaveAccessibleName();
      expect(close).toHaveFocus();

      fireEvent.click(close);
      expect(onMobileClose).toHaveBeenCalledTimes(1);
      fireEvent.keyDown(document, { key: "Escape" });
      expect(onMobileClose).toHaveBeenCalledTimes(2);
    });

    it("hides its close button and keeps Escape with showMobileCloseButton={false}", () => {
      stubViewport(true);
      const onMobileClose = vi.fn();
      render(<Sidebar mobileOpen onMobileClose={onMobileClose} showMobileCloseButton={false} />);
      expect(screen.queryByRole("button")).toBeNull();
      fireEvent.keyDown(document, { key: "Escape" });
      expect(onMobileClose).toHaveBeenCalledTimes(1);
    });

    it("is a named modal dialog and makes the rest of the page inert until it closes", () => {
      stubViewport(true);
      const Page = ({ open }: { open: boolean }) => (
        <>
          <main data-testid="page"><button>Behind</button></main>
          <div role="status" data-testid="live" />
          <Sidebar mobileOpen={open} onMobileClose={() => undefined} />
        </>
      );
      const { rerender } = render(<Page open />);
      const dialog = screen.getByRole("dialog");
      expect(dialog).toHaveAccessibleName();
      expect(dialog).toHaveAttribute("aria-modal", "true");
      expect(screen.getByTestId("page")).toHaveAttribute("inert");
      expect(screen.getByTestId("live")).not.toHaveAttribute("inert");

      rerender(<Page open={false} />);
      expect(screen.queryByRole("dialog")).toBeNull();
      expect(screen.getByTestId("page")).not.toHaveAttribute("inert");
    });

    it("keeps the trigger and the overlay usable when the trigger is the close control", () => {
      stubViewport(true);
      const onOverlayClick = vi.fn();
      const Page = ({ open }: { open: boolean }) => (
        <>
          <header data-testid="header">
            <button>Open</button>
            <button>Bell</button>
          </header>
          <Sidebar
            mobileOpen={open}
            onMobileClose={() => undefined}
            onOverlayClick={onOverlayClick}
            showMobileCloseButton={false}
          />
        </>
      );
      const { rerender, container } = render(<Page open={false} />);
      const trigger = screen.getByRole("button", { name: "Open" });
      trigger.focus();
      rerender(<Page open />);

      expect(trigger.closest("[inert]")).toBeNull();
      expect(screen.getByText("Bell")).toHaveAttribute("inert");
      expect(screen.getByRole("dialog")).not.toHaveAttribute("aria-modal");
      const overlay = container.querySelector('[aria-hidden="true"]') as HTMLElement;
      expect(overlay).not.toHaveAttribute("inert");
      fireEvent.click(overlay);
      expect(onOverlayClick).toHaveBeenCalledTimes(1);
    });

    it("does not clear an inert attribute it did not set", () => {
      stubViewport(true);
      const Page = ({ open }: { open: boolean }) => (
        <>
          <div data-testid="already" {...{ inert: true }} />
          <Sidebar mobileOpen={open} onMobileClose={() => undefined} />
        </>
      );
      const { rerender } = render(<Page open />);
      rerender(<Page open={false} />);
      expect(screen.getByTestId("already")).toHaveAttribute("inert");
    });

    it("does not trap focus without onMobileClose", () => {
      stubViewport(true);
      render(<Sidebar mobileOpen><button>Item</button></Sidebar>);
      expect(screen.getByRole("button", { name: "Item" })).not.toHaveFocus();
      expect(screen.getAllByRole("button")).toHaveLength(1);
    });

    it("stays inactive at or above md and with responsive={false}", () => {
      stubViewport(false);
      const onMobileClose = vi.fn();
      const { rerender } = render(<Sidebar mobileOpen onMobileClose={onMobileClose} />);
      expect(screen.queryByRole("button")).toBeNull();

      stubViewport(true);
      rerender(<Sidebar key="fixed" responsive={false} mobileOpen onMobileClose={onMobileClose} />);
      expect(screen.queryByRole("button")).toBeNull();
      fireEvent.keyDown(document, { key: "Escape" });
      expect(onMobileClose).not.toHaveBeenCalled();
    });
  });
});
