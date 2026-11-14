import { act, render, screen } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import { Spinner } from "./Spinner";
import { AnnouncedByParent } from "../../_internal/useAnnounce";

describe("Spinner", () => {
  it("renders svg indicator", () => {
    const { container } = render(<Spinner />);
    expect(container.querySelector("svg")).toBeInTheDocument();
  });

  it("renders label when provided", () => {
    render(<Spinner label="Loading..." />);
    expect(screen.getByText("Loading...")).toBeInTheDocument();
  });

  it("applies size and color classes to svg", () => {
    const { container } = render(<Spinner size="lg" color="success" />);
    const svg = container.querySelector("svg");
    expect(svg).toHaveClass(/lg/);
    expect(svg).toHaveClass(/success/);
  });

  it("applies small size class", () => {
    const { container } = render(<Spinner size="sm" />);
    expect(container.querySelector("svg")).toHaveClass(/sm/);
  });

  it("applies custom hex color as inline style", () => {
    const { container } = render(<Spinner color="#ff0000" />);
    const wrapper = container.firstChild as HTMLElement;
    expect(wrapper.style.color).toBeTruthy();
  });

  // T228: ラベルがあるときだけ live region にする（読み上げる内容があるのは
  // その場合だけ）。
  // T353: 中身ごと差し込まれた role="status" は読まれなかった。空の領域と一緒に現れ、
  // 待ってから文を入れる
  it("announces the label from an empty region after a short wait", () => {
    vi.useFakeTimers();
    render(<Spinner label="Loading..." />);
    const status = screen.getByRole("status");
    expect(status).toBeEmptyDOMElement();
    act(() => vi.advanceTimersByTime(500));
    expect(status).toHaveTextContent("Loading...");
    vi.useRealTimers();
  });

  it("has no region without a label", () => {
    render(<Spinner />);
    expect(screen.queryByRole("status")).toBeNull();
  });

  it("stays quiet inside a parent that announces its content", () => {
    render(
      <AnnouncedByParent.Provider value={true}>
        <Spinner label="Loading..." />
      </AnnouncedByParent.Provider>,
    );
    expect(screen.queryByRole("status")).toBeNull();
    expect(screen.getByText("Loading...")).toBeInTheDocument();
  });

  it("applies labelPosition bottom", () => {
    render(<Spinner label="Loading" labelPosition="bottom" />);
    expect(screen.getByText("Loading")).toBeInTheDocument();
  });

  // T351: 回る図形は飾り。名前の無い「画像」として読み上げの木に残っていた
  it("hides the decorative svg from assistive technology", () => {
    const { container } = render(<Spinner label="Loading" />);
    expect(container.querySelector("svg")).toHaveAttribute("aria-hidden", "true");
  });
});
