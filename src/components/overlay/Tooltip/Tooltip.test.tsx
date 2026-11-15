import { render, screen, fireEvent, act } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import { Tooltip, TooltipTrigger, TooltipContent } from "./Tooltip";

describe("Tooltip", () => {
  it("shows content on hover after delay", async () => {
    vi.useFakeTimers();
    render(
      <Tooltip delay={100}>
        <TooltipTrigger>Hover me</TooltipTrigger>
        <TooltipContent>Tooltip info</TooltipContent>
      </Tooltip>,
    );

    const trigger = screen.getByText("Hover me");
    fireEvent.mouseEnter(trigger);

    // Initially not visible
    expect(screen.queryByText("Tooltip info")).not.toBeInTheDocument();

    // Advance timers
    act(() => {
      vi.advanceTimersByTime(150);
    });

    expect(screen.getByText("Tooltip info")).toBeInTheDocument();
    vi.useRealTimers();
  });

  it("hides content on mouse leave", async () => {
    vi.useFakeTimers();
    render(
      <Tooltip delay={0}>
        <TooltipTrigger>Hover me</TooltipTrigger>
        <TooltipContent>Tooltip info</TooltipContent>
      </Tooltip>,
    );

    const trigger = screen.getByText("Hover me");
    fireEvent.mouseEnter(trigger);

    act(() => {
      vi.advanceTimersByTime(10);
    });

    expect(screen.getByText("Tooltip info")).toBeInTheDocument();

    fireEvent.mouseLeave(trigger);
    act(() => {
      vi.advanceTimersByTime(150);
    });

    expect(screen.queryByText("Tooltip info")).not.toBeInTheDocument();
    vi.useRealTimers();
  });

  it("describes the trigger when the tooltip text differs from the name", () => {
    render(
      <Tooltip open>
        <TooltipTrigger>Hover me</TooltipTrigger>
        <TooltipContent>Tooltip info</TooltipContent>
      </Tooltip>,
    );
    const trigger = screen.getByRole("button", { name: "Hover me" });
    const describedBy = trigger.getAttribute("aria-describedby");
    expect(describedBy).toBeTruthy();
    expect(document.getElementById(describedBy!)?.textContent).toContain("Tooltip info");
  });

  it("does not describe the trigger when the tooltip text repeats the name", () => {
    render(
      <Tooltip open>
        <TooltipTrigger asChild>
          <button type="button" aria-label="Helpful">icon</button>
        </TooltipTrigger>
        <TooltipContent>Helpful</TooltipContent>
      </Tooltip>,
    );
    expect(screen.getByRole("button", { name: "Helpful" })).not.toHaveAttribute("aria-describedby");
  });

  it("keeps a description the caller passed, even when the tooltip repeats the name", () => {
    render(
      <>
        <span id="hint">Extra</span>
        <Tooltip open>
          <TooltipTrigger asChild>
            <button type="button" aria-label="Helpful" aria-describedby="hint">icon</button>
          </TooltipTrigger>
          <TooltipContent>Helpful</TooltipContent>
        </Tooltip>
      </>,
    );
    expect(screen.getByRole("button", { name: "Helpful" })).toHaveAttribute("aria-describedby", "hint");
  });
});
