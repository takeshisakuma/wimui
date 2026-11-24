import { render, screen, fireEvent, act, waitFor } from "@testing-library/react";
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

  it("positions the content next to an asChild trigger that has its own ref", async () => {
    const userRef = { current: null as HTMLButtonElement | null };
    render(
      <Tooltip placement="bottom">
        <TooltipTrigger asChild>
          <button ref={userRef} type="button">Hover me</button>
        </TooltipTrigger>
        <TooltipContent>Tooltip info</TooltipContent>
      </Tooltip>,
    );
    const trigger = screen.getByRole("button", { name: "Hover me" });
    // jsdom はレイアウトを持たないので、引き金の位置だけ与える
    trigger.getBoundingClientRect = () =>
      ({ x: 200, y: 100, left: 200, top: 100, right: 240, bottom: 124, width: 40, height: 24, toJSON: () => ({}) }) as DOMRect;
    fireEvent.focus(trigger);
    const tooltip = await screen.findByRole("tooltip");
    // React 19 では子の ref も props に入る。子の props を後から広げると、位置合わせの ref が上書きされ、
    // 位置が一度も計算されず、面は画面の左上に出ていた（Popover の T416 と同じ形・2026-11-24 の 7-4 で見つけた）。
    // jsdom の座標そのものは当てにならない（縦は 0 のまま）ので、「計算されて、左端から引き金のほうへ動いたか」だけを見る。
    await waitFor(() => expect(tooltip.style.transform).toMatch(/^translate\([1-9][\d.]*px/));
    expect(userRef.current).toBe(trigger);
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
