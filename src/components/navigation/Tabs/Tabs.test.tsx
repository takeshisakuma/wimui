import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect, vi, beforeAll, afterAll } from "vitest";
import { Tabs } from "./Tabs";

describe("Tabs", () => {
  it("switches content when triggers are clicked", () => {
    render(
      <Tabs defaultValue="tab1">
        <Tabs.List>
          <Tabs.Trigger value="tab1">Tab 1</Tabs.Trigger>
          <Tabs.Trigger value="tab2">Tab 2</Tabs.Trigger>
        </Tabs.List>
        <Tabs.Content value="tab1">Content 1</Tabs.Content>
        <Tabs.Content value="tab2">Content 2</Tabs.Content>
      </Tabs>,
    );

    expect(screen.getByText("Content 1")).toBeInTheDocument();
    expect(screen.queryByText("Content 2")).not.toBeInTheDocument();

    fireEvent.click(screen.getByText("Tab 2"));

    expect(screen.queryByText("Content 1")).not.toBeInTheDocument();
    expect(screen.getByText("Content 2")).toBeInTheDocument();
  });

  it("calls onChange when a trigger is clicked", () => {
    const onChange = vi.fn();
    render(
      <Tabs onChange={onChange}>
        <Tabs.List>
          <Tabs.Trigger value="test">Test</Tabs.Trigger>
        </Tabs.List>
      </Tabs>,
    );
    fireEvent.click(screen.getByText("Test"));
    expect(onChange).toHaveBeenCalledWith("test");
  });

  it("throws error when Tabs.List is used outside Tabs", () => {
    const originalError = console.error;
    console.error = vi.fn(); // suppress React error boundary logging
    expect(() => render(<Tabs.List />)).toThrow("Tabs components must be used within a Tabs");
    console.error = originalError;
  });

  const originalRAF = window.requestAnimationFrame;

  beforeAll(() => {
    window.requestAnimationFrame = (cb) => {
      cb(0);
      return 0;
    };
  });

  afterAll(() => {
    window.requestAnimationFrame = originalRAF;
  });

  it("handles keyboard navigation (horizontal)", () => {
    const onChange = vi.fn();
    render(
      <Tabs defaultValue="t1" onChange={onChange}>
        <Tabs.List>
          <Tabs.Trigger value="t1">1</Tabs.Trigger>
          <Tabs.Trigger value="t2">2</Tabs.Trigger>
          <Tabs.Trigger value="t3">3</Tabs.Trigger>
        </Tabs.List>
      </Tabs>
    );
    const list = screen.getByRole("tablist");

    fireEvent.keyDown(list, { key: "ArrowRight" });
    expect(onChange).toHaveBeenCalledWith("t2");

    fireEvent.keyDown(list, { key: "ArrowLeft" });
    // It was at t2, so left goes to t1
    expect(onChange).toHaveBeenLastCalledWith("t1");

    fireEvent.keyDown(list, { key: "End" });
    expect(onChange).toHaveBeenLastCalledWith("t3");

    fireEvent.keyDown(list, { key: "Home" });
    expect(onChange).toHaveBeenLastCalledWith("t1");

    fireEvent.keyDown(list, { key: "ArrowLeft" });
    // From t1, left goes to t3
    expect(onChange).toHaveBeenLastCalledWith("t3");
  });

  it("handles keyboard navigation (vertical)", () => {
    const onChange = vi.fn();
    render(
      <Tabs defaultValue="t2" orientation="vertical" onChange={onChange}>
        <Tabs.List>
          <Tabs.Trigger value="t1">1</Tabs.Trigger>
          <Tabs.Trigger value="t2">2</Tabs.Trigger>
          <Tabs.Trigger value="t3">3</Tabs.Trigger>
        </Tabs.List>
      </Tabs>
    );
    const list = screen.getByRole("tablist");

    fireEvent.keyDown(list, { key: "ArrowDown" });
    expect(onChange).toHaveBeenLastCalledWith("t3");

    fireEvent.keyDown(list, { key: "ArrowUp" });
    expect(onChange).toHaveBeenLastCalledWith("t2");
  });

  it("handles dragging in horizontal mode", () => {
    render(
      <Tabs defaultValue="t1">
        <Tabs.List>
          <Tabs.Trigger value="t1">1</Tabs.Trigger>
        </Tabs.List>
      </Tabs>
    );
    const list = screen.getByRole("tablist");

    // Start drag
    fireEvent.mouseDown(list, { pageX: 100 });
    expect(list).toHaveClass("wim-tabs__list--dragging");

    // Move drag
    fireEvent.mouseMove(list, { pageX: 50 });

    // End drag via mouseLeave
    fireEvent.mouseLeave(list);
    expect(list).not.toHaveClass("wim-tabs__list--dragging");

    // End drag via mouseUp
    fireEvent.mouseDown(list, { pageX: 100 });
    fireEvent.mouseUp(list);
    expect(list).not.toHaveClass("wim-tabs__list--dragging");
  });

  it("ignores dragging and specific keys in vertical mode", () => {
    render(
      <Tabs defaultValue="t1" orientation="vertical">
        <Tabs.List>
          <Tabs.Trigger value="t1">1</Tabs.Trigger>
        </Tabs.List>
      </Tabs>
    );
    const list = screen.getByRole("tablist");

    // Drag ignored
    fireEvent.mouseDown(list, { pageX: 100 });
    expect(list).not.toHaveClass("wim-tabs__list--dragging");
    
    fireEvent.mouseMove(list, { pageX: 50 }); // shouldn't do anything
    
    // Key ignored
    fireEvent.keyDown(list, { key: "ArrowRight" }); // In vertical, this doesn't navigate
  });
});
