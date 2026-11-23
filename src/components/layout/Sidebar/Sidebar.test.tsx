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
