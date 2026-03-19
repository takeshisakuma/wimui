import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { FocusTrap } from "./FocusTrap";

describe("FocusTrap", () => {
  it("renders children", () => {
    render(
      <FocusTrap>
        <button>Click</button>
      </FocusTrap>,
    );
    expect(screen.getByText("Click")).toBeInTheDocument();
  });

  it("auto focuses first element", () => {
    render(
      <FocusTrap>
        <button>First</button>
        <button>Second</button>
      </FocusTrap>,
    );
    expect(screen.getByText("First")).toHaveFocus();
  });

  it("does not auto focus when autoFocus=false", () => {
    const btn = document.createElement("button");
    btn.textContent = "Outside";
    document.body.appendChild(btn);
    btn.focus();

    render(
      /* eslint-disable-next-line jsx-a11y/no-autofocus */
      <FocusTrap autoFocus={false}>
        <button>Inside</button>
      </FocusTrap>,
    );

    expect(screen.getByText("Inside")).not.toHaveFocus();
    document.body.removeChild(btn);
  });

  it("does not trap focus when active=false", () => {
    render(
      <FocusTrap active={false}>
        <button>Button</button>
      </FocusTrap>,
    );
    expect(screen.getByText("Button")).not.toHaveFocus();
  });

  it("wraps Tab from last to first element", () => {
    render(
      <FocusTrap>
        <button>First</button>
        <button>Second</button>
        <button>Last</button>
      </FocusTrap>,
    );
    const last = screen.getByText("Last");
    last.focus();
    fireEvent.keyDown(document, { key: "Tab", shiftKey: false });
    expect(screen.getByText("First")).toHaveFocus();
  });

  it("wraps Shift+Tab from first to last element", () => {
    render(
      <FocusTrap>
        <button>First</button>
        <button>Second</button>
        <button>Last</button>
      </FocusTrap>,
    );
    screen.getByText("First").focus();
    fireEvent.keyDown(document, { key: "Tab", shiftKey: true });
    expect(screen.getByText("Last")).toHaveFocus();
  });

  it("prevents default Tab when no focusable elements", () => {
    render(
      <FocusTrap>
        <div>No buttons here</div>
      </FocusTrap>,
    );
    // Should not throw
    expect(() => fireEvent.keyDown(document, { key: "Tab" })).not.toThrow();
  });

  it("ignores non-Tab keydown", () => {
    render(
      <FocusTrap>
        <button>First</button>
      </FocusTrap>,
    );
    expect(() => fireEvent.keyDown(document, { key: "Enter" })).not.toThrow();
  });

  it("applies custom className", () => {
    const { container } = render(
      <FocusTrap className="my-trap">
        <button>X</button>
      </FocusTrap>,
    );
    expect(container.querySelector(".wim-focus-trap")).toHaveClass("my-trap");
  });

  it("restores focus to previously focused element on unmount", () => {
    const outsideBtn = document.createElement("button");
    outsideBtn.textContent = "Outside";
    document.body.appendChild(outsideBtn);
    outsideBtn.focus();

    const { unmount } = render(
      <FocusTrap>
        <button>Inside</button>
      </FocusTrap>,
    );

    expect(screen.getByText("Inside")).toHaveFocus();
    unmount();
    expect(document.activeElement).toBe(outsideBtn);

    document.body.removeChild(outsideBtn);
  });
});
