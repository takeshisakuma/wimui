import { render, screen, fireEvent, act } from "@testing-library/react";
import { describe, it, expect, vi, beforeEach, afterEach } from "vitest";
import { HoverCard, HoverCardTrigger, HoverCardContent } from "./HoverCard";

describe("HoverCard", () => {
  beforeEach(() => {
    vi.useFakeTimers();
  });

  afterEach(() => {
    vi.useRealTimers();
  });

  it("shows content on hover after delay", () => {
    render(
      <HoverCard openDelay={100} closeDelay={100}>
        <HoverCardTrigger>Trigger</HoverCardTrigger>
        <HoverCardContent>Content</HoverCardContent>
      </HoverCard>,
    );

    expect(screen.queryByText("Content")).not.toBeInTheDocument();

    fireEvent.mouseEnter(screen.getByText("Trigger"));

    expect(screen.queryByText("Content")).not.toBeInTheDocument();

    act(() => {
      vi.advanceTimersByTime(150);
    });

    expect(screen.getByText("Content")).toBeInTheDocument();
  });

  it("hides content on leave after delay", () => {
    render(
      <HoverCard openDelay={0} closeDelay={100}>
        <HoverCardTrigger>Trigger</HoverCardTrigger>
        <HoverCardContent>Content</HoverCardContent>
      </HoverCard>,
    );

    fireEvent.mouseEnter(screen.getByText("Trigger"));
    act(() => {
      vi.advanceTimersByTime(10);
    });
    expect(screen.getByText("Content")).toBeInTheDocument();

    fireEvent.mouseLeave(screen.getByText("Trigger"));
    expect(screen.getByText("Content")).toBeInTheDocument();

    act(() => {
      vi.advanceTimersByTime(150);
    });

    expect(screen.queryByText("Content")).not.toBeInTheDocument();
  });

  it("does not open again if already open", () => {
    render(
      <HoverCard openDelay={0} closeDelay={0}>
        <HoverCardTrigger>Trigger</HoverCardTrigger>
        <HoverCardContent>Content</HoverCardContent>
      </HoverCard>,
    );

    fireEvent.mouseEnter(screen.getByText("Trigger"));
    act(() => { vi.runAllTimers(); });
    expect(screen.getByText("Content")).toBeInTheDocument();

    // Second mouseEnter while open does not break anything
    fireEvent.mouseEnter(screen.getByText("Trigger"));
    act(() => { vi.runAllTimers(); });
    expect(screen.getByText("Content")).toBeInTheDocument();
  });

  it("cancels close timer when mouse re-enters", () => {
    render(
      <HoverCard openDelay={0} closeDelay={300}>
        <HoverCardTrigger>Trigger</HoverCardTrigger>
        <HoverCardContent>Content</HoverCardContent>
      </HoverCard>,
    );

    fireEvent.mouseEnter(screen.getByText("Trigger"));
    act(() => { vi.runAllTimers(); });
    expect(screen.getByText("Content")).toBeInTheDocument();

    // Leave starts close timer
    fireEvent.mouseLeave(screen.getByText("Trigger"));
    // Quickly re-enter before close fires
    fireEvent.mouseEnter(screen.getByText("Trigger"));
    act(() => { vi.advanceTimersByTime(400); });
    // Should still be open
    expect(screen.getByText("Content")).toBeInTheDocument();
  });

  it("cancels open timer when mouse leaves before delay", () => {
    render(
      <HoverCard openDelay={300} closeDelay={0}>
        <HoverCardTrigger>Trigger</HoverCardTrigger>
        <HoverCardContent>Content</HoverCardContent>
      </HoverCard>,
    );

    fireEvent.mouseEnter(screen.getByText("Trigger"));
    // Leave before open delay fires
    fireEvent.mouseLeave(screen.getByText("Trigger"));
    act(() => { vi.advanceTimersByTime(400); });
    expect(screen.queryByText("Content")).not.toBeInTheDocument();
  });

  it("respects controlled open=true", () => {
    render(
      <HoverCard open={true}>
        <HoverCardTrigger>Trigger</HoverCardTrigger>
        <HoverCardContent>Controlled Content</HoverCardContent>
      </HoverCard>,
    );
    expect(screen.getByText("Controlled Content")).toBeInTheDocument();
  });

  it("calls onOpenChange when opening in uncontrolled mode", () => {
    const onOpenChange = vi.fn();
    render(
      <HoverCard openDelay={0} onOpenChange={onOpenChange}>
        <HoverCardTrigger>Trigger</HoverCardTrigger>
        <HoverCardContent>Content</HoverCardContent>
      </HoverCard>,
    );

    fireEvent.mouseEnter(screen.getByText("Trigger"));
    act(() => { vi.runAllTimers(); });
    expect(onOpenChange).toHaveBeenCalledWith(true);
  });

  it("calls onOpenChange when closing in uncontrolled mode", () => {
    const onOpenChange = vi.fn();
    render(
      <HoverCard openDelay={0} closeDelay={0} onOpenChange={onOpenChange}>
        <HoverCardTrigger>Trigger</HoverCardTrigger>
        <HoverCardContent>Content</HoverCardContent>
      </HoverCard>,
    );

    fireEvent.mouseEnter(screen.getByText("Trigger"));
    act(() => { vi.runAllTimers(); });
    fireEvent.mouseLeave(screen.getByText("Trigger"));
    act(() => { vi.runAllTimers(); });
    expect(onOpenChange).toHaveBeenCalledWith(false);
  });

  it("HoverCardTrigger as asChild merges events and className", () => {
    const onMouseEnter = vi.fn();
    render(
      <HoverCard openDelay={0}>
        <HoverCardTrigger asChild className="trigger-class">
          <button className="child-class" onMouseEnter={onMouseEnter}>Trigger</button>
        </HoverCardTrigger>
        <HoverCardContent>Content</HoverCardContent>
      </HoverCard>,
    );

    const btn = screen.getByText("Trigger");
    expect(btn).toHaveClass("trigger-class");
    expect(btn).toHaveClass("child-class");
    fireEvent.mouseEnter(btn);
    expect(onMouseEnter).toHaveBeenCalled();
  });

  it("HoverCardTrigger asChild handles focus and blur", () => {
    const onFocus = vi.fn();
    const onBlur = vi.fn();
    render(
      <HoverCard openDelay={0} closeDelay={0}>
        <HoverCardTrigger asChild>
          <button onFocus={onFocus} onBlur={onBlur}>Trigger</button>
        </HoverCardTrigger>
        <HoverCardContent>Content</HoverCardContent>
      </HoverCard>,
    );

    const btn = screen.getByText("Trigger");
    fireEvent.focus(btn);
    expect(onFocus).toHaveBeenCalled();
    act(() => { vi.runAllTimers(); });
    expect(screen.getByText("Content")).toBeInTheDocument();

    fireEvent.blur(btn);
    expect(onBlur).toHaveBeenCalled();
    act(() => { vi.runAllTimers(); });
    expect(screen.queryByText("Content")).not.toBeInTheDocument();
  });

  it("HoverCardContent renders with align and side classes", () => {
    render(
      <HoverCard open={true}>
        <HoverCardTrigger>Trigger</HoverCardTrigger>
        <HoverCardContent align="left" side="top">Content</HoverCardContent>
      </HoverCard>,
    );
    const content = document.querySelector(".wim-hover-card-content");
    expect(content).toHaveClass("wim-hover-card-content--align-left");
    expect(content).toHaveClass("wim-hover-card-content--top");
  });

  it("HoverCardContent mouse enter/leave keeps card open/closes", () => {
    render(
      <HoverCard openDelay={0} closeDelay={0}>
        <HoverCardTrigger>Trigger</HoverCardTrigger>
        <HoverCardContent>Content</HoverCardContent>
      </HoverCard>,
    );

    fireEvent.mouseEnter(screen.getByText("Trigger"));
    act(() => { vi.runAllTimers(); });
    expect(screen.getByText("Content")).toBeInTheDocument();

    // Mouse enters content area — should stay open
    const content = screen.getByText("Content").closest(".wim-hover-card-content") as HTMLElement;
    fireEvent.mouseEnter(content);
    act(() => { vi.runAllTimers(); });
    expect(screen.getByText("Content")).toBeInTheDocument();

    // Mouse leaves content
    fireEvent.mouseLeave(content);
    act(() => { vi.runAllTimers(); });
    expect(screen.queryByText("Content")).not.toBeInTheDocument();
  });

  it("applies custom className to HoverCard", () => {
    const { container } = render(
      <HoverCard className="my-card">
        <HoverCardTrigger>T</HoverCardTrigger>
      </HoverCard>,
    );
    expect(container.querySelector(".wim-hover-card")).toHaveClass("my-card");
  });
});
