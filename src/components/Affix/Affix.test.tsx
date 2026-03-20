import { render, screen, fireEvent, act } from "@testing-library/react";
import { describe, it, expect, vi, beforeEach, afterEach } from "vitest";
import Affix from "./Affix";

describe("Affix", () => {
  beforeEach(() => {
    vi.useFakeTimers();
  });

  afterEach(() => {
    vi.useRealTimers();
  });

  it("renders children", () => {
    render(
      <Affix>
        <div>Content</div>
      </Affix>,
    );
    expect(screen.getByText("Content")).toBeInTheDocument();
  });

  it("becomes affixed when scrolled past offsetTop threshold", () => {
    // Mock getBoundingClientRect to simulate scrolled state
    vi.spyOn(HTMLElement.prototype, "getBoundingClientRect").mockReturnValue({
      top: -10,
      bottom: 40,
      left: 0,
      right: 200,
      width: 200,
      height: 50,
      x: 0,
      y: -10,
      toJSON: () => {},
    } as DOMRect);

    const { container } = render(
      <Affix offsetTop={0}>
        <div>Sticky Content</div>
      </Affix>,
    );

    act(() => {
      fireEvent.scroll(window);
      vi.runAllTimers();
    });

    const innerDiv = container.firstChild?.firstChild as HTMLElement;
    expect(innerDiv).toHaveClass("wim-affix--affixed");
  });

  it("becomes affixed when scrolled past offsetBottom threshold", () => {
    vi.spyOn(window, "innerHeight", "get").mockReturnValue(600);
    vi.spyOn(HTMLElement.prototype, "getBoundingClientRect").mockReturnValue({
      top: 500,
      bottom: 620,
      left: 0,
      right: 200,
      width: 200,
      height: 50,
      x: 0,
      y: 500,
      toJSON: () => {},
    } as DOMRect);

    const { container } = render(
      <Affix offsetBottom={0}>
        <div>Bottom Sticky</div>
      </Affix>,
    );

    act(() => {
      fireEvent.scroll(window);
      vi.runAllTimers();
    });

    const innerDiv = container.firstChild?.firstChild as HTMLElement;
    expect(innerDiv).toHaveClass("wim-affix--affixed");
  });

  it("calls onChange when affixed state changes", () => {
    const handleChange = vi.fn();
    vi.spyOn(HTMLElement.prototype, "getBoundingClientRect").mockReturnValue({
      top: -10,
      bottom: 40,
      left: 0,
      right: 200,
      width: 200,
      height: 50,
      x: 0,
      y: -10,
      toJSON: () => {},
    } as DOMRect);

    render(
      <Affix offsetTop={0} onChange={handleChange}>
        <div>Content</div>
      </Affix>,
    );

    act(() => {
      fireEvent.scroll(window);
      vi.runAllTimers();
    });

    expect(handleChange).toHaveBeenCalledWith(true);
  });

  it("accepts custom target function", () => {
    const targetEl = document.createElement("div");
    document.body.appendChild(targetEl);

    vi.spyOn(HTMLElement.prototype, "getBoundingClientRect").mockReturnValue({
      top: -5,
      bottom: 45,
      left: 0,
      right: 200,
      width: 200,
      height: 50,
      x: 0,
      y: -5,
      toJSON: () => {},
    } as DOMRect);

    render(
      <Affix offsetTop={0} target={() => targetEl}>
        <div>Custom Target</div>
      </Affix>,
    );

    act(() => {
      fireEvent.scroll(targetEl);
      vi.runAllTimers();
    });

    expect(screen.getByText("Custom Target")).toBeInTheDocument();
    document.body.removeChild(targetEl);
  });

  it("renders with className and style", () => {
    const { container } = render(
      <Affix className="my-affix" style={{ color: "red" }}>
        <div>Styled</div>
      </Affix>,
    );
    expect(container.firstChild).toHaveClass("my-affix");
    expect(container.firstChild).toHaveStyle({ color: "rgb(255, 0, 0)" });
  });

  it("handles resize events without crashing", () => {
    render(
      <Affix offsetTop={10}>
        <div>Resize Content</div>
      </Affix>,
    );

    act(() => {
      fireEvent(window, new Event("resize"));
      vi.runAllTimers();
    });

    expect(screen.getByText("Resize Content")).toBeInTheDocument();
  });

  it("does not affix when target returns null", () => {
    const { container } = render(
      <Affix offsetTop={0} target={() => null}>
        <div>No Target</div>
      </Affix>,
    );

    const innerDiv = container.firstChild?.firstChild as HTMLElement;
    expect(innerDiv).not.toHaveClass("wim-affix--affixed");
  });
});
