import {
  render,
  screen,
  fireEvent,
  act,
  waitFor,
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
});
