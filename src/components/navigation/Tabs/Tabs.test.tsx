import { render, screen, fireEvent, act, waitFor } from "@testing-library/react";
import { describe, it, expect, vi, beforeAll, afterAll } from "vitest";
import { Tabs } from "./Tabs";
import styles from "./tabs.module.scss";

describe("Tabs", () => {
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

  it("switches content when triggers are clicked", async () => {
    await act(async () => {
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
    });
    await waitFor(() => expect(screen.getByRole("tablist")).toHaveClass(styles.ready));

    expect(screen.getByText("Content 1")).toBeInTheDocument();
    expect(screen.queryByText("Content 2")).not.toBeInTheDocument();

    act(() => {
      fireEvent.click(screen.getByText("Tab 2"));
    });

    expect(screen.queryByText("Content 1")).not.toBeInTheDocument();
    expect(screen.getByText("Content 2")).toBeInTheDocument();
  });

  it("calls onChange when a trigger is clicked", async () => {
    const onChange = vi.fn();
    await act(async () => {
      render(
        <Tabs onChange={onChange}>
          <Tabs.List>
            <Tabs.Trigger value="test">Test</Tabs.Trigger>
          </Tabs.List>
        </Tabs>,
      );
    });
    // Note: tablist won't have 'ready' class because no tab is active yet

    await act(async () => {
      fireEvent.click(screen.getByText("Test"));
      await new Promise(r => setTimeout(r, 0));
    });
    expect(onChange).toHaveBeenCalledWith("test");
  });

  it("throws error when Tabs.List is used outside Tabs", () => {
    const originalError = console.error;
    console.error = vi.fn(); // suppress React error boundary logging
    expect(() => render(<Tabs.List />)).toThrow("Tabs components must be used within a Tabs");
    console.error = originalError;
  });

  it("handles keyboard navigation (horizontal)", async () => {
    const onChange = vi.fn();
    await act(async () => {
      render(
        <Tabs defaultValue="t1" onChange={onChange}>
          <Tabs.List>
            <Tabs.Trigger value="t1">1</Tabs.Trigger>
            <Tabs.Trigger value="t2">2</Tabs.Trigger>
            <Tabs.Trigger value="t3">3</Tabs.Trigger>
          </Tabs.List>
        </Tabs>
      );
    });
    await waitFor(() => expect(screen.getByRole("tablist")).toHaveClass(styles.ready));
    const list = screen.getByRole("tablist");

    act(() => {
      fireEvent.keyDown(list, { key: "ArrowRight" });
    });
    expect(onChange).toHaveBeenCalledWith("t2");

    act(() => {
      fireEvent.keyDown(list, { key: "ArrowLeft" });
    });
    // It was at t2, so left goes to t1
    expect(onChange).toHaveBeenLastCalledWith("t1");

    act(() => {
      fireEvent.keyDown(list, { key: "End" });
    });
    expect(onChange).toHaveBeenLastCalledWith("t3");

    act(() => {
      fireEvent.keyDown(list, { key: "Home" });
    });
    expect(onChange).toHaveBeenLastCalledWith("t1");

    act(() => {
      fireEvent.keyDown(list, { key: "ArrowLeft" });
    });
    // From t1, left goes to t3
    expect(onChange).toHaveBeenLastCalledWith("t3");
  });

  it("handles keyboard navigation (vertical)", async () => {
    const onChange = vi.fn();
    await act(async () => {
      render(
        <Tabs defaultValue="t2" orientation="vertical" onChange={onChange}>
          <Tabs.List>
            <Tabs.Trigger value="t1">1</Tabs.Trigger>
            <Tabs.Trigger value="t2">2</Tabs.Trigger>
            <Tabs.Trigger value="t3">3</Tabs.Trigger>
          </Tabs.List>
        </Tabs>
      );
    });
    await waitFor(() => expect(screen.getByRole("tablist")).toHaveClass(styles.ready));
    const list = screen.getByRole("tablist");

    act(() => {
      fireEvent.keyDown(list, { key: "ArrowDown" });
    });
    expect(onChange).toHaveBeenLastCalledWith("t3");

    act(() => {
      fireEvent.keyDown(list, { key: "ArrowUp" });
    });
    expect(onChange).toHaveBeenLastCalledWith("t2");
  });

  it("handles dragging in horizontal mode", async () => {
    await act(async () => {
      render(
        <Tabs defaultValue="t1">
          <Tabs.List>
            <Tabs.Trigger value="t1">1</Tabs.Trigger>
          </Tabs.List>
        </Tabs>
      );
    });
    await waitFor(() => expect(screen.getByRole("tablist")).toHaveClass(styles.ready));
    const list = screen.getByRole("tablist");

    // Start drag
    await act(async () => {
      fireEvent.mouseDown(list, { pageX: 100 });
      await new Promise(r => setTimeout(r, 0));
    });
    expect(list).toHaveClass(styles.dragging);

    // Move drag
    await act(async () => {
      fireEvent.mouseMove(list, { pageX: 50 });
      await new Promise(r => setTimeout(r, 0));
    });

    // End drag via mouseLeave
    await act(async () => {
      fireEvent.mouseLeave(list);
      await new Promise(r => setTimeout(r, 0));
    });
    expect(list).not.toHaveClass(styles.dragging);

    // End drag via mouseUp
    await act(async () => {
      fireEvent.mouseDown(list, { pageX: 100 });
      await new Promise(r => setTimeout(r, 0));
    });
    await act(async () => {
      fireEvent.mouseUp(list);
      await new Promise(r => setTimeout(r, 0));
    });
    expect(list).not.toHaveClass(styles.dragging);
  });

  it("ignores dragging and specific keys in vertical mode", async () => {
    await act(async () => {
      render(
        <Tabs defaultValue="t1" orientation="vertical">
          <Tabs.List>
            <Tabs.Trigger value="t1">1</Tabs.Trigger>
          </Tabs.List>
        </Tabs>
      );
    });
    await waitFor(() => expect(screen.getByRole("tablist")).toHaveClass(styles.ready));
    const list = screen.getByRole("tablist");

    // Drag ignored
    act(() => {
      fireEvent.mouseDown(list, { pageX: 100 });
    });
    expect(list).not.toHaveClass(styles.dragging);
    
    act(() => {
      fireEvent.mouseMove(list, { pageX: 50 }); // shouldn't do anything
    });
    
    // Key ignored
    act(() => {
      fireEvent.keyDown(list, { key: "ArrowRight" }); // In vertical, this doesn't navigate
    });
  });

  it("supports asChild on Trigger", async () => {
    await act(async () => {
      render(
        <Tabs defaultValue="tab1">
          <Tabs.List>
            <Tabs.Trigger asChild value="tab1">
              <a href="#tab1" data-testid="tab-link">
                Tab 1
              </a>
            </Tabs.Trigger>
            <Tabs.Trigger value="tab2">Tab 2</Tabs.Trigger>
          </Tabs.List>
          <Tabs.Content value="tab1">Content 1</Tabs.Content>
        </Tabs>,
      );
    });

    const link = screen.getByTestId("tab-link");
    expect(link.tagName).toBe("A");
    expect(link).toHaveAttribute("role", "tab");
    expect(link).toHaveAttribute("aria-selected", "true");
  });
});
