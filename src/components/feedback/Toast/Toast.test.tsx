import { render, screen, fireEvent, act } from "@testing-library/react";
import { describe, it, expect, vi, beforeEach } from "vitest";
import { Toast, ToastProvider, useToast } from "./Toast";

describe("Toast", () => {
  beforeEach(() => {
    vi.useFakeTimers();
  });

  it("renders title and description", () => {
    render(<Toast title="Message" description="Toast description" />);
    expect(screen.getByText("Message")).toBeInTheDocument();
    expect(screen.getByText("Toast description")).toBeInTheDocument();
  });

  // T333: 題は見出しにしない（以前は h5 で、置いたページの見出しの順と合わなかった）。
  it("題を見出しとして出さない。読み上げの領域の中身としては残る", () => {
    render(<Toast title="Message" description="Toast description" />);
    expect(screen.queryByRole("heading")).not.toBeInTheDocument();
    expect(screen.getByRole("status")).toHaveTextContent("Message");
  });

  it("calls onClose after duration", () => {
    const handleClose = vi.fn();
    render(<Toast title="Message" duration={1000} onClose={handleClose} />);

    act(() => {
      vi.advanceTimersByTime(1000 + 300 + 10);
    });

    expect(handleClose).toHaveBeenCalled();
  });

  it("calls onClose when close button is clicked", () => {
    const handleClose = vi.fn();
    render(<Toast title="Message" onClose={handleClose} />);

    const closeButton = screen.getByLabelText("Close");
    fireEvent.click(closeButton);

    act(() => {
      vi.advanceTimersByTime(300);
    });

    expect(handleClose).toHaveBeenCalled();
  });

  it("applies status class", () => {
    const { container } = render(<Toast title="Message" intent="success" />);
    expect(container.querySelector(".wim-toast")).toHaveClass(/success/);
  });

  it("announces through a status region that is there before the toast opens", () => {
    const { rerender } = render(<Toast title="Saved" description="Your changes are in." open={false} />);
    // 読み上げの領域は、閉じているあいだも在る（空）。見えているトーストごと差し込むと、読まれない
    const region = screen.getByRole("status");
    expect(region).toBeEmptyDOMElement();

    rerender(<Toast title="Saved" description="Your changes are in." open={true} />);
    expect(screen.getByRole("status")).toBe(region);
    expect(region).toHaveTextContent("Saved: Your changes are in.");
  });

  it("names the toast as a group only when a name is given", () => {
    const { container, rerender } = render(<Toast title="Saved" />);
    expect(container.querySelector(".wim-toast")).not.toHaveAttribute("role");
    rerender(<Toast title="Saved" aria-label="Save result" />);
    expect(screen.getByRole("group", { name: "Save result" })).toBe(container.querySelector(".wim-toast"));
  });
});

const ToastConsumer = () => {
  const { show } = useToast();
  return (
    <button onClick={() => show({ title: "Live Message" })}>Show Toast</button>
  );
};

describe("ToastProvider", () => {
  beforeEach(() => {
    vi.useFakeTimers();
  });

  it("shows toast when show is called", () => {
    render(
      <ToastProvider>
        <ToastConsumer />
      </ToastProvider>,
    );

    fireEvent.click(screen.getByText("Show Toast"));

    act(() => {
      vi.advanceTimersByTime(10);
    });

    expect(document.querySelector(".wim-toast")).toHaveTextContent("Live Message");
  });

  it("adds the toast to a live region that was there before the toast", () => {
    const { container } = render(
      <ToastProvider>
        <ToastConsumer />
      </ToastProvider>,
    );
    // 対照: トーストを出す前から、領域は在る（空）
    const region = screen.getByRole("status");
    expect(region).toBeEmptyDOMElement();

    fireEvent.click(screen.getByText("Show Toast"));
    act(() => {
      vi.advanceTimersByTime(10);
    });
    expect(screen.getByRole("status")).toBe(region);
    expect(region).toHaveTextContent("Live Message");
    // 領域はプロバイダーの 1 つだけ。トーストごとには持たない（二重に読まれる）
    expect(container.ownerDocument.querySelectorAll('[role="status"]')).toHaveLength(1);
  });
});
