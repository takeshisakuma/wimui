import { render, screen, fireEvent, act } from "@testing-library/react";
import { describe, it, expect, vi, beforeEach, afterEach } from "vitest";
import { readFileSync } from "node:fs";
import { Tour } from "./Tour";
import styles from "./tour.module.scss";

describe("Tour", () => {
  const steps = [
    { target: "#step1", title: "Step 1", description: "First step" },
    { target: "#step2", title: "Step 2", description: "Second step" },
  ];

  beforeEach(() => {
    // Set up DOM elements for tour targets
    document.body.innerHTML = `
            <div id="step1" style="width: 100px; height: 50px; position: absolute; top: 100px; left: 100px;">Step 1 Target</div>
            <div id="step2" style="width: 100px; height: 50px; position: absolute; top: 500px; left: 100px;">Step 2 Target</div>
            <div id="step-off" style="width: 100px; height: 50px; position: absolute; top: 4000px; left: 100px;">Offscreen Target</div>
        `;

    // Mock getBoundingClientRect
    Element.prototype.getBoundingClientRect = vi
      .fn()
      .mockImplementation(function (this: HTMLElement) {
        if (this.id === "step1") {
          return {
            top: 100,
            left: 100,
            width: 100,
            height: 50,
            bottom: 150,
            right: 200,
          } as DOMRect;
        }
        if (this.id === "step2") {
          return {
            top: 500,
            left: 100,
            width: 100,
            height: 50,
            bottom: 550,
            right: 200,
          } as DOMRect;
        }
        if (this.id === "step-off") {
          return {
            top: 4000,
            left: 100,
            width: 100,
            height: 50,
            bottom: 4050,
            right: 200,
          } as DOMRect;
        }
        return {
          top: 0,
          left: 0,
          width: 0,
          height: 0,
          bottom: 0,
          right: 0,
        } as DOMRect;
      });

    // Mock scrollIntoView (jsdom は HTMLElement 側。Element.prototype を差しても届かない)
    window.HTMLElement.prototype.scrollIntoView = vi.fn();

    vi.useFakeTimers();
  });

  afterEach(() => {
    vi.useRealTimers();
  });

  it("renders nothing when open is false", () => {
    render(<Tour steps={steps} open={false} onClose={() => {}} />);
    expect(screen.queryByText("Step 1")).not.toBeInTheDocument();
  });

  it("renders first step when open is true", () => {
    render(<Tour steps={steps} open={true} onClose={() => {}} />);

    act(() => {
      vi.advanceTimersByTime(100);
    });

    expect(screen.getByText("Step 1")).toBeInTheDocument();
    expect(screen.getByText("First step")).toBeInTheDocument();
    expect(screen.getByText("1 / 2")).toBeInTheDocument();
  });

  it("moves to next step when Next is clicked", () => {
    render(<Tour steps={steps} open={true} onClose={() => {}} />);

    act(() => {
      vi.advanceTimersByTime(100);
    });

    fireEvent.click(screen.getByText("Next"));

    act(() => {
      vi.advanceTimersByTime(100);
    });

    expect(screen.getByText("Step 2")).toBeInTheDocument();
    expect(screen.getByText("2 / 2")).toBeInTheDocument();
  });

  it("calls onFinish when Finish is clicked", () => {
    const handleFinish = vi.fn();
    render(
      <Tour
        steps={steps}
        open={true}
        onClose={() => {}}
        onFinish={handleFinish}
      />,
    );

    act(() => {
      vi.advanceTimersByTime(100);
    });

    fireEvent.click(screen.getByText("Next"));

    act(() => {
      vi.advanceTimersByTime(100);
    });

    fireEvent.click(screen.getByText("Finish"));
    expect(handleFinish).toHaveBeenCalled();
  });

  it("calls onClose when mask is clicked", () => {
    const handleClose = vi.fn();
    render(<Tour steps={steps} open={true} onClose={handleClose} />);

    const mask = screen.getByRole("button", { name: "Dismiss tour" });
    fireEvent.click(mask);

    expect(handleClose).toHaveBeenCalled();
  });

  it("calls onClose when Enter key pressed on mask", () => {
    const handleClose = vi.fn();
    render(<Tour steps={steps} open={true} onClose={handleClose} />);

    fireEvent.keyDown(screen.getByRole("button", { name: "Dismiss tour" }), {
      key: "Enter",
    });

    expect(handleClose).toHaveBeenCalled();
  });

  it("calls onClose when Space key pressed on mask", () => {
    const handleClose = vi.fn();
    render(<Tour steps={steps} open={true} onClose={handleClose} />);

    fireEvent.keyDown(screen.getByRole("button", { name: "Dismiss tour" }), {
      key: " ",
    });

    expect(handleClose).toHaveBeenCalled();
  });

  it("calls onClose when last step is finished and no onFinish is provided", () => {
    const handleClose = vi.fn();
    render(<Tour steps={steps} open={true} onClose={handleClose} />);

    act(() => {
      vi.advanceTimersByTime(100);
    });

    // Go to last step
    fireEvent.click(screen.getByText("Next"));

    act(() => {
      vi.advanceTimersByTime(100);
    });

    fireEvent.click(screen.getByText("Finish"));
    expect(handleClose).toHaveBeenCalled();
  });

  it("shows Back button on non-first step and navigates back", () => {
    render(<Tour steps={steps} open={true} onClose={() => {}} />);

    act(() => {
      vi.advanceTimersByTime(100);
    });

    expect(screen.queryByText("Back")).not.toBeInTheDocument();
    fireEvent.click(screen.getByText("Next"));

    act(() => {
      vi.advanceTimersByTime(100);
    });

    expect(screen.getByText("Back")).toBeInTheDocument();
    fireEvent.click(screen.getByText("Back"));

    act(() => {
      vi.advanceTimersByTime(100);
    });

    expect(screen.getByText("Step 1")).toBeInTheDocument();
  });

  it("renders with top placement", () => {
    const stepsWithPlacement = [
      { target: "#step1", title: "Top Step", description: "Top placement", placement: "top" as const },
    ];
    render(<Tour steps={stepsWithPlacement} open={true} onClose={() => {}} />);

    act(() => {
      vi.advanceTimersByTime(100);
    });

    expect(screen.getByText("Top Step")).toBeInTheDocument();
    const bubble = document.querySelector(`.${styles.bubble}[data-placement="top"]`);
    expect(bubble).toBeInTheDocument();
  });

  it("renders with left placement", () => {
    const stepsWithPlacement = [
      { target: "#step1", title: "Left Step", description: "Left placement", placement: "left" as const },
    ];
    render(<Tour steps={stepsWithPlacement} open={true} onClose={() => {}} />);

    act(() => {
      vi.advanceTimersByTime(100);
    });

    expect(screen.getByText("Left Step")).toBeInTheDocument();
    const bubble = document.querySelector(`.${styles.bubble}[data-placement="left"]`);
    expect(bubble).toBeInTheDocument();
  });

  it("renders with right placement", () => {
    const stepsWithPlacement = [
      { target: "#step1", title: "Right Step", description: "Right placement", placement: "right" as const },
    ];
    render(<Tour steps={stepsWithPlacement} open={true} onClose={() => {}} />);

    act(() => {
      vi.advanceTimersByTime(100);
    });

    expect(screen.getByText("Right Step")).toBeInTheDocument();
    const bubble = document.querySelector(`.${styles.bubble}[data-placement="right"]`);
    expect(bubble).toBeInTheDocument();
  });

  it("renders nothing when steps array is empty", () => {
    render(<Tour steps={[]} open={true} onClose={() => {}} />);
    expect(screen.queryByRole("button")).not.toBeInTheDocument();
  });

  it("handles resize event to update position", () => {
    render(<Tour steps={steps} open={true} onClose={() => {}} />);

    act(() => {
      vi.advanceTimersByTime(100);
    });

    // Firing resize should not crash
    fireEvent(window, new Event("resize"));
    expect(screen.getByText("Step 1")).toBeInTheDocument();
  });

  it("names the dismiss mask and localizes chrome (T192)", () => {
    const src = readFileSync("src/components/feedback/Tour/Tour.tsx", "utf8");
    expect(src).toContain("a11y.close_tour");
    expect(src).toContain("action.back");
    expect(src).toContain("action.next");
    expect(src).toContain("action.finish");
    expect(src).not.toMatch(/>Back</);
    expect(src).not.toMatch(/"Finish"|"Next"/);
  });

  it("does not scroll again when only step copy changes (T193)", () => {
    const { rerender } = render(
      <Tour
        steps={[{ target: "#step1", title: "A", description: "a" }]}
        open
        onClose={() => {}}
      />,
    );
    const scrollIntoView = window.HTMLElement.prototype
      .scrollIntoView as ReturnType<typeof vi.fn>;
    const calls = scrollIntoView.mock.calls.length;
    expect(
      scrollIntoView.mock.calls.some((c) => c[0]?.behavior === "smooth"),
    ).toBe(false);

    rerender(
      <Tour
        steps={[{ target: "#step1", title: "B", description: "b" }]}
        open
        onClose={() => {}}
      />,
    );
    expect(scrollIntoView.mock.calls.length).toBe(calls);
  });

  it("does not scroll when the target is already on screen (T194)", () => {
    render(
      <Tour
        steps={[{ target: "#step1", title: "A", description: "a" }]}
        open
        onClose={() => {}}
      />,
    );
    expect(window.HTMLElement.prototype.scrollIntoView).not.toHaveBeenCalled();
    expect(screen.getByText("A")).toBeInTheDocument();
  });

  it("scrolls when moving to an off-screen step (T194)", () => {
    render(
      <Tour
        steps={[
          { target: "#step1", title: "Step 1", description: "First step" },
          { target: "#step-off", title: "Off", description: "below" },
        ]}
        open
        onClose={() => {}}
      />,
    );
    const scrollIntoView = window.HTMLElement.prototype
      .scrollIntoView as ReturnType<typeof vi.fn>;
    expect(scrollIntoView).not.toHaveBeenCalled();

    fireEvent.click(screen.getByText("Next"));
    expect(scrollIntoView).toHaveBeenCalled();
  });

  it("scrolls when the target is off screen (T194)", () => {
    render(
      <Tour
        steps={[{ target: "#step-off", title: "Off", description: "below" }]}
        open
        onClose={() => {}}
      />,
    );
    expect(window.HTMLElement.prototype.scrollIntoView).toHaveBeenCalled();
    expect(
      (window.HTMLElement.prototype.scrollIntoView as ReturnType<typeof vi.fn>).mock.calls.some(
        (c) => c[0]?.behavior === "smooth",
      ),
    ).toBe(false);
  });

  it("does not paint the bubble before the target is measured (T194)", () => {
    const tsx = readFileSync("src/components/feedback/Tour/Tour.tsx", "utf8");
    expect(tsx).toContain("if (!targetRect) return null");
    expect(tsx).not.toMatch(/setTimeout\(\s*measure\s*,\s*100\s*\)/);
    expect(tsx).toContain("waitForFonts");
    expect(tsx).toContain("isFullyVisible");
  });

  it("does not animate the spotlight hole (T193)", () => {
    const tsx = readFileSync("src/components/feedback/Tour/Tour.tsx", "utf8");
    const scss = readFileSync(
      "src/components/feedback/Tour/tour.module.scss",
      "utf8",
    );
    expect(tsx).not.toMatch(/behavior:\s*["']smooth["']/);
    expect(scss).not.toMatch(/\.highlight\s*\{[^}]*transition:/s);
    expect(scss).not.toMatch(/\.bubble\s*\{[^}]*transition:/s);
  });
});
