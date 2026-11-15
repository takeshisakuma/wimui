import {
  render,
  screen,
  fireEvent,
  act,
} from "@testing-library/react";
import { describe, it, expect, vi, beforeEach, afterEach } from "vitest";
import { CopyButton } from "./CopyButton";

// Mock navigator.clipboard
const writeText = vi.fn();

Object.assign(navigator, {
  clipboard: {
    writeText,
  },
});

describe("CopyButton", () => {
  beforeEach(() => {
    vi.useFakeTimers();
    writeText.mockReset();
    writeText.mockResolvedValue(undefined);
  });

  afterEach(() => {
    vi.useRealTimers();
  });

  it("renders copy button", () => {
    render(<CopyButton value="test value" />);
    expect(
      screen.getByRole("button", { name: "Copy to clipboard" }),
    ).toBeInTheDocument();
  });

  it("copies text on click", async () => {
    render(<CopyButton value="test value" />);
    const button = screen.getByRole("button", { name: "Copy to clipboard" });

    await act(async () => {
      fireEvent.click(button);
    });

    expect(writeText).toHaveBeenCalledWith("test value");
  });

  it("shows copied state", async () => {
    render(<CopyButton value="test value" />);
    const button = screen.getByRole("button", { name: "Copy to clipboard" });

    await act(async () => {
      fireEvent.click(button);
    });

    // Check for copied state
    expect(screen.getByRole("button", { name: "Copied" })).toBeInTheDocument();

    // Advance timers to revert state
    act(() => {
      vi.advanceTimersByTime(2000);
    });

    // Check for reverted state
    expect(
      screen.getByRole("button", { name: "Copy to clipboard" }),
    ).toBeInTheDocument();
  });

  it("does not describe the button when the tooltip repeats its name", () => {
    render(<CopyButton value="test value" />);
    const button = screen.getByRole("button", { name: "Copy to clipboard" });
    fireEvent.focus(button);
    expect(button).not.toHaveAttribute("aria-describedby");
  });

  it("describes the button when its name differs from the tooltip", () => {
    render(<CopyButton value="test value" aria-label="Copy order id" />);
    const button = screen.getByRole("button", { name: "Copy order id" });
    fireEvent.focus(button);
    expect(button).toHaveAttribute("aria-describedby");
    const describedBy = button.getAttribute("aria-describedby");
    expect(document.getElementById(describedBy!)?.textContent).toContain("Copy to clipboard");
  });

  it("keeps a description the caller passed", () => {
    render(
      <>
        <span id="copy-hint">Copies the id</span>
        <CopyButton value="test value" aria-describedby="copy-hint" />
      </>,
    );
    expect(screen.getByRole("button", { name: "Copy to clipboard" })).toHaveAttribute(
      "aria-describedby",
      "copy-hint",
    );
  });

  it("supports asChild prop", () => {
    render(
      <CopyButton asChild value="test value">
        <button type="button" data-testid="copy-slot">
          Copy
        </button>
      </CopyButton>,
    );
    const element = screen.getByTestId("copy-slot");
    expect(element.tagName).toBe("BUTTON");
    expect(element).toHaveClass("wim-copy-button");
  });
});
