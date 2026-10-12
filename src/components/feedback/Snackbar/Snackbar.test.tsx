import { render, screen, act, fireEvent } from "@testing-library/react";
import { readFileSync } from "node:fs";
import { describe, it, expect, vi } from "vitest";
import { Snackbar, SnackbarProvider, useSnackbar } from "./Snackbar";
import styles from "./snackbar.module.scss";

// 見えているスナックバー。文は、画面に見えない読み上げの領域にも入るので、文字では 1 つに決まらない。
const visibleSnackbar = () => document.querySelector(".wim-snackbar");

describe("Snackbar", () => {
  it("renders only the empty status region when open is false", () => {
    render(<Snackbar message="Test" open={false} />);
    // 読み上げの領域は、閉じているあいだも在る（空）。見えているスナックバーは無い
    expect(screen.getByRole("status")).toBeEmptyDOMElement();
    expect(screen.queryByText("Test")).not.toBeInTheDocument();
    expect(document.querySelector(".wim-snackbar")).toBeNull();
  });

  it("writes the message into the status region that was already there", () => {
    const { rerender } = render(<Snackbar message="Saved" open={false} />);
    const region = screen.getByRole("status");
    rerender(<Snackbar message="Saved" open={true} />);
    // 同じ要素のまま、文字だけが入る。見えているスナックバーごと差し込むと、読まれない
    expect(screen.getByRole("status")).toBe(region);
    expect(region).toHaveTextContent("Saved");
    expect(document.querySelector(".wim-snackbar")).not.toHaveAttribute("role");
  });

  it("renders message when open is true", async () => {
    render(<Snackbar message="Hello World" open={true} />);
    expect(visibleSnackbar()).toHaveTextContent("Hello World");
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

  it("renders with success intent", () => {
    render(<Snackbar message="Success" open={true} intent="success" />);
    const el = document.querySelector(`.${styles.success}`);
    expect(el).toBeInTheDocument();
    expect(screen.getByRole("status")).toHaveTextContent("Success");
  });

  it("renders with error intent and role=alert", () => {
    render(<Snackbar message="Error" open={true} intent="danger" />);
    const el = document.querySelector(`.${styles.danger}`);
    expect(el).toBeInTheDocument();
    expect(screen.getByRole("alert")).toHaveTextContent("Error");
    expect(screen.getByRole("alert")).not.toBe(el);
  });

  it("renders with warning intent and role=alert", () => {
    render(<Snackbar message="Warning" open={true} intent="warning" />);
    const el = document.querySelector(`.${styles.warning}`);
    expect(el).toBeInTheDocument();
    expect(screen.getByRole("alert")).toHaveTextContent("Warning");
  });

  it("renders with info intent", () => {
    render(<Snackbar message="Info" open={true} intent="info" />);
    expect(document.querySelector(`.${styles.info}`)).toBeInTheDocument();
  });

  it("renders with top-right position", () => {
    render(<Snackbar message="Test" open={true} position="top-right" />);
    expect(document.querySelector(`.${styles.wrapper}.${styles["top-right"]}`)).toBeInTheDocument();
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

    const snackbar = visibleSnackbar() as HTMLElement;

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
        <button onClick={() => showMessage({ message: "Object", intent: "success" })}>Show Object</button>
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

    expect(visibleSnackbar()).toHaveTextContent("Hello");
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

    expect(visibleSnackbar()).toHaveTextContent("Object");
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
    expect(visibleSnackbar()).toHaveTextContent("Hello");

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

  it("optically centers the icon on the first message line (T185)", () => {
    const scss = readFileSync(
      "src/components/feedback/Snackbar/snackbar.module.scss",
      "utf8",
    );
    const icon = scss.match(/^\s+\.icon\s*\{([^}]+)\}/m);
    expect(icon?.[1]).toMatch(/font-size:\s*var\(--wim-font-size-sm\)/);
    expect(icon?.[1]).toMatch(
      /padding-top:\s*calc\(\(var\(--wim-line-height-normal\) - 1\) \* 1em \/ 2\)/,
    );
    expect(icon?.[1]).toMatch(/align-self:\s*flex-start/);
  });
});
