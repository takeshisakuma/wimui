import { render, screen, fireEvent } from "@testing-library/react";
import { afterEach, describe, it, expect, vi } from "vitest";
import { OverlayBase } from "./OverlayBase";

afterEach(() => {
  document.body.style.overflow = "";
});

describe("OverlayBase", () => {
  it("renders children when open", () => {
    render(
      <OverlayBase open onOpenChange={() => {}}>
        <button>Content</button>
      </OverlayBase>,
    );
    expect(screen.getByText("Content")).toBeInTheDocument();
  });

  it("does not render children when closed", () => {
    render(
      <OverlayBase open={false} onOpenChange={() => {}}>
        <button>Content</button>
      </OverlayBase>,
    );
    expect(screen.queryByText("Content")).not.toBeInTheDocument();
  });

  it("applies default role=dialog to the content", () => {
    render(
      <OverlayBase open onOpenChange={() => {}}>
        <button>Content</button>
      </OverlayBase>,
    );
    expect(screen.getByRole("dialog")).toBeInTheDocument();
  });

  it("applies custom role to the content", () => {
    render(
      <OverlayBase open onOpenChange={() => {}} role="alertdialog">
        <button>Content</button>
      </OverlayBase>,
    );
    expect(screen.getByRole("alertdialog")).toBeInTheDocument();
  });

  it("sets aria-modal on the content", () => {
    render(
      <OverlayBase open onOpenChange={() => {}}>
        <button>Content</button>
      </OverlayBase>,
    );
    expect(screen.getByRole("dialog")).toHaveAttribute("aria-modal", "true");
  });

  it("calls onOpenChange(false) when Escape is pressed", () => {
    const onOpenChange = vi.fn();
    render(
      <OverlayBase open onOpenChange={onOpenChange}>
        <button>Content</button>
      </OverlayBase>,
    );
    fireEvent.keyDown(document, { key: "Escape" });
    expect(onOpenChange).toHaveBeenCalledWith(false);
  });

  it("does not call onOpenChange when closeOnEscape=false and Escape is pressed", () => {
    const onOpenChange = vi.fn();
    render(
      <OverlayBase open onOpenChange={onOpenChange} closeOnEscape={false}>
        <button>Content</button>
      </OverlayBase>,
    );
    fireEvent.keyDown(document, { key: "Escape" });
    expect(onOpenChange).not.toHaveBeenCalled();
  });

  it("calls onOpenChange(false) when the overlay backdrop is clicked", () => {
    const onOpenChange = vi.fn();
    render(
      <OverlayBase open onOpenChange={onOpenChange}>
        <button>Content</button>
      </OverlayBase>,
    );
    const overlay = document.querySelector(".wim-overlay") as HTMLElement;
    fireEvent.click(overlay);
    expect(onOpenChange).toHaveBeenCalledWith(false);
  });

  it("does not call onOpenChange when closeOnOverlayClick=false and backdrop is clicked", () => {
    const onOpenChange = vi.fn();
    render(
      <OverlayBase open onOpenChange={onOpenChange} closeOnOverlayClick={false}>
        <button>Content</button>
      </OverlayBase>,
    );
    const overlay = document.querySelector(".wim-overlay") as HTMLElement;
    fireEvent.click(overlay);
    expect(onOpenChange).not.toHaveBeenCalled();
  });

  it("does not call onOpenChange when the dialog content itself is clicked", () => {
    const onOpenChange = vi.fn();
    render(
      <OverlayBase open onOpenChange={onOpenChange}>
        <button>Content</button>
      </OverlayBase>,
    );
    fireEvent.click(screen.getByText("Content"));
    expect(onOpenChange).not.toHaveBeenCalled();
  });

  it("locks body scroll when open", () => {
    document.body.style.overflow = "auto";
    render(
      <OverlayBase open onOpenChange={() => {}}>
        <button>Content</button>
      </OverlayBase>,
    );
    expect(document.body.style.overflow).toBe("hidden");
  });

  it("restores body scroll when closed", () => {
    document.body.style.overflow = "auto";
    const { rerender } = render(
      <OverlayBase open onOpenChange={() => {}}>
        <button>Content</button>
      </OverlayBase>,
    );
    rerender(
      <OverlayBase open={false} onOpenChange={() => {}}>
        <button>Content</button>
      </OverlayBase>,
    );
    expect(document.body.style.overflow).toBe("auto");
  });
});
