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
    expect(container.firstChild).toHaveClass(/success/);
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

    expect(screen.getByText("Live Message")).toBeInTheDocument();
  });
});
