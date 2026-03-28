import { render, screen, act, fireEvent } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import { Snackbar, SnackbarProvider, useSnackbar } from "./Snackbar";

describe("Snackbar", () => {
  it("does not render when open is false", () => {
    const { container } = render(<Snackbar message="Test" open={false} />);
    expect(container.firstChild).toBeNull();
  });

  it("renders message when open is true", async () => {
    render(<Snackbar message="Hello World" open={true} />);
    expect(screen.getByText("Hello World")).toBeInTheDocument();
  });

  it("calls onClose after timeout", async () => {
    vi.useFakeTimers();
    const onClose = vi.fn();
    render(
      <Snackbar
        message="Test"
        open={true}
        autoHideDuration={1000}
        onClose={onClose}
      />,
    );

    act(() => {
      vi.advanceTimersByTime(1500);
    });

    expect(onClose).toHaveBeenCalled();
    vi.useRealTimers();
  });

  it("renders with success status", () => {
    render(<Snackbar message="Success" open={true} status="success" />);
    const el = document.querySelector(".wim-snackbar--success");
    expect(el).toBeInTheDocument();
    expect(el).toHaveAttribute("role", "status");
  });

  it("renders with error status and role=alert", () => {
    render(<Snackbar message="Error" open={true} status="error" />);
    const el = document.querySelector(".wim-snackbar--error");
    expect(el).toBeInTheDocument();
    expect(el).toHaveAttribute("role", "alert");
    expect(el).toHaveAttribute("aria-live", "assertive");
  });

  it("renders with warning status and role=alert", () => {
    render(<Snackbar message="Warning" open={true} status="warning" />);
    const el = document.querySelector(".wim-snackbar--warning");
    expect(el).toHaveAttribute("role", "alert");
    expect(el).toHaveAttribute("aria-live", "assertive");
  });

  it("renders with info status", () => {
    render(<Snackbar message="Info" open={true} status="info" />);
    expect(document.querySelector(".wim-snackbar--info")).toBeInTheDocument();
  });

  it("renders with top-right position", () => {
    render(<Snackbar message="Test" open={true} position="top-right" />);
    expect(document.querySelector(".wim-snackbar-wrapper--top-right")).toBeInTheDocument();
  });

  it("renders action button when actionLabel is provided", () => {
    const onAction = vi.fn();
    render(
      <Snackbar
        message="Test"
        open={true}
        actionLabel="Undo"
        onAction={onAction}
      />,
    );
    const btn = screen.getByText("Undo");
    expect(btn).toBeInTheDocument();
    fireEvent.click(btn);
    expect(onAction).toHaveBeenCalled();
  });

  it("does not auto-hide when autoHideDuration is 0", () => {
    vi.useFakeTimers();
    const onClose = vi.fn();
    render(
      <Snackbar
        message="Persistent"
        open={true}
        autoHideDuration={0}
        onClose={onClose}
      />,
    );

    act(() => {
      vi.advanceTimersByTime(10000);
    });

    expect(onClose).not.toHaveBeenCalled();
    vi.useRealTimers();
  });

  it("pauses timer on mouse enter and resumes on mouse leave", () => {
    vi.useFakeTimers();
    const onClose = vi.fn();
    render(
      <Snackbar
        message="Test"
        open={true}
        autoHideDuration={2000}
        onClose={onClose}
      />,
    );

    const snackbar = document.querySelector(".wim-snackbar") as HTMLElement;

    act(() => { vi.advanceTimersByTime(500); });
    fireEvent.mouseEnter(snackbar);
    act(() => { vi.advanceTimersByTime(2000); });
    expect(onClose).not.toHaveBeenCalled();

    fireEvent.mouseLeave(snackbar);
    act(() => { vi.advanceTimersByTime(2000); });
    expect(onClose).toHaveBeenCalled();

    vi.useRealTimers();
  });

  it("applies custom className", () => {
    render(<Snackbar message="Test" open={true} className="my-snackbar" />);
    expect(document.querySelector(".my-snackbar")).toBeInTheDocument();
  });
});

describe("SnackbarProvider and useSnackbar", () => {
  const TestComponent = () => {
    const { showMessage, hideMessage } = useSnackbar();
    return (
      <div>
        <button onClick={() => showMessage("Hello")}>Show String</button>
        <button onClick={() => showMessage({ message: "Object", status: "success" })}>Show Object</button>
        <button onClick={hideMessage}>Hide</button>
      </div>
    );
  };

  it("shows a snackbar via showMessage with string", () => {
    vi.useFakeTimers();
    render(
      <SnackbarProvider>
        <TestComponent />
      </SnackbarProvider>,
    );

    fireEvent.click(screen.getByText("Show String"));
    act(() => { vi.runAllTimers(); });

    expect(screen.getByText("Hello")).toBeInTheDocument();
    vi.useRealTimers();
  });

  it("shows a snackbar via showMessage with object", () => {
    vi.useFakeTimers();
    render(
      <SnackbarProvider>
        <TestComponent />
      </SnackbarProvider>,
    );

    fireEvent.click(screen.getByText("Show Object"));
    act(() => { vi.runAllTimers(); });

    expect(screen.getByText("Object")).toBeInTheDocument();
    vi.useRealTimers();
  });

  it("hides snackbar via hideMessage", () => {
    vi.useFakeTimers();
    render(
      <SnackbarProvider>
        <TestComponent />
      </SnackbarProvider>,
    );

    fireEvent.click(screen.getByText("Show String"));
    act(() => { vi.runAllTimers(); });
    expect(screen.getByText("Hello")).toBeInTheDocument();

    fireEvent.click(screen.getByText("Hide"));
    vi.useRealTimers();
  });

  it("throws when useSnackbar is used outside SnackbarProvider", () => {
    const BadComponent = () => {
      useSnackbar();
      return null;
    };

    expect(() => render(<BadComponent />)).toThrow(
      "useSnackbar must be used within a SnackbarProvider",
    );
  });
});
