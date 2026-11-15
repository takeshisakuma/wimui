import { render, screen, fireEvent } from "@testing-library/react";
import { useState } from "react";
import { afterEach, describe, it, expect, vi } from "vitest";
import { OverlayBase } from "./OverlayBase";

afterEach(() => {
  document.body.style.overflow = "";
  document.body.style.paddingRight = "";
  document.body.style.scrollbarGutter = "";
});

function TwoOverlays({
  outer,
  inner,
  onOuter,
  onInner,
}: {
  outer: boolean;
  inner: boolean;
  onOuter: (open: boolean) => void;
  onInner: (open: boolean) => void;
}) {
  return (
    <>
      <OverlayBase open={outer} onOpenChange={onOuter}>
        <button>Outer</button>
      </OverlayBase>
      <OverlayBase open={inner} onOpenChange={onInner}>
        <button>Inner</button>
      </OverlayBase>
    </>
  );
}

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
    const overlay = screen.getByTestId("overlay");
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
    const overlay = screen.getByTestId("overlay");
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

  it("reserves the scrollbar width so the page does not grow when locked", () => {
    const original = Object.getOwnPropertyDescriptor(document.documentElement, "clientWidth");
    Object.defineProperty(document.documentElement, "clientWidth", {
      configurable: true,
      get() {
        return document.body.style.overflow === "hidden" ? 1280 : 1270;
      },
    });
    document.body.style.overflow = "auto";
    document.body.style.paddingRight = "4px";
    try {
      const { unmount } = render(
        <OverlayBase open onOpenChange={() => {}}>
          <button>Content</button>
        </OverlayBase>,
      );
      expect(document.body.style.overflow).toBe("hidden");
      expect(document.body.style.paddingRight).toBe("14px");
      expect(document.body.style.scrollbarGutter).toBe("auto");
      unmount();
      expect(document.body.style.overflow).toBe("auto");
      expect(document.body.style.paddingRight).toBe("4px");
      expect(document.body.style.scrollbarGutter).toBe("");
    } finally {
      if (original) Object.defineProperty(document.documentElement, "clientWidth", original);
    }
  });

  it("keeps the scroll lock when the inner overlay closes first", () => {
    document.body.style.overflow = "auto";
    function Harness() {
      const [outer, setOuter] = useState(true);
      const [inner, setInner] = useState(true);
      return (
        <>
          <button type="button" onClick={() => setInner(false)}>Close inner</button>
          <button type="button" onClick={() => setOuter(false)}>Close outer</button>
          <TwoOverlays outer={outer} inner={inner} onOuter={setOuter} onInner={setInner} />
        </>
      );
    }
    render(<Harness />);
    expect(document.body.style.overflow).toBe("hidden");
    fireEvent.click(screen.getByRole("button", { name: "Close inner" }));
    expect(document.body.style.overflow).toBe("hidden");
    fireEvent.click(screen.getByRole("button", { name: "Close outer" }));
    expect(document.body.style.overflow).toBe("auto");
  });

  it("keeps the scroll lock when the outer overlay closes first", () => {
    document.body.style.overflow = "auto";
    function Harness() {
      const [outer, setOuter] = useState(true);
      const [inner, setInner] = useState(true);
      return (
        <>
          <button type="button" onClick={() => setOuter(false)}>Close outer</button>
          <button type="button" onClick={() => setInner(false)}>Close inner</button>
          <TwoOverlays outer={outer} inner={inner} onOuter={setOuter} onInner={setInner} />
        </>
      );
    }
    render(<Harness />);
    fireEvent.click(screen.getByRole("button", { name: "Close outer" }));
    expect(document.body.style.overflow).toBe("hidden");
    fireEvent.click(screen.getByRole("button", { name: "Close inner" }));
    expect(document.body.style.overflow).toBe("auto");
  });
});

