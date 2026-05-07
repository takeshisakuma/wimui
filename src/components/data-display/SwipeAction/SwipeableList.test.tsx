import { describe, it, expect } from "vitest";
import { render, screen, act } from "@testing-library/react";
import React from "react";
import { SwipeableList, useSwipeableList } from "./SwipeableList";

// Consumer that exposes context values for assertions
const Consumer = () => {
  const ctx = useSwipeableList();
  return (
    <div>
      <span data-testid="opened-id">{ctx?.openedId ?? "null"}</span>
      <button onClick={() => ctx?.reportOpen("a")}>open-a</button>
      <button onClick={() => ctx?.reportOpen("b")}>open-b</button>
      <button onClick={() => ctx?.reportClose("a")}>close-a</button>
      <button onClick={() => ctx?.reportClose("b")}>close-b</button>
    </div>
  );
};

describe("SwipeableList", () => {
  // ── Rendering ─────────────────────────────────────────────────────────────

  it("renders children", () => {
    render(<SwipeableList><span>child</span></SwipeableList>);
    expect(screen.getByText("child")).toBeInTheDocument();
  });

  it("applies className to the wrapper div", () => {
    const { container } = render(
      <SwipeableList className="custom"><span /></SwipeableList>,
    );
    expect(container.firstChild).toHaveClass("custom");
  });

  // ── Context availability ───────────────────────────────────────────────────

  it("provides context to consumers", () => {
    render(<SwipeableList><Consumer /></SwipeableList>);
    expect(screen.getByTestId("opened-id")).toHaveTextContent("null");
  });

  it("useSwipeableList returns null outside the provider", () => {
    const Probe = () => {
      const ctx = useSwipeableList();
      return <div data-testid="probe" data-is-null={String(ctx === null)} />;
    };
    render(<Probe />);
    expect(screen.getByTestId("probe")).toHaveAttribute("data-is-null", "true");
  });

  // ── exclusive=true (default) ───────────────────────────────────────────────

  it("reportOpen sets openedId when exclusive", () => {
    render(<SwipeableList><Consumer /></SwipeableList>);
    act(() => screen.getByText("open-a").click());
    expect(screen.getByTestId("opened-id")).toHaveTextContent("a");
  });

  it("reportOpen replaces previous openedId (only one open at a time)", () => {
    render(<SwipeableList><Consumer /></SwipeableList>);
    act(() => screen.getByText("open-a").click());
    act(() => screen.getByText("open-b").click());
    expect(screen.getByTestId("opened-id")).toHaveTextContent("b");
  });

  it("reportClose clears openedId when the matching id is closed", () => {
    render(<SwipeableList><Consumer /></SwipeableList>);
    act(() => screen.getByText("open-a").click());
    act(() => screen.getByText("close-a").click());
    expect(screen.getByTestId("opened-id")).toHaveTextContent("null");
  });

  it("reportClose does not clear openedId when a different id is closed", () => {
    render(<SwipeableList><Consumer /></SwipeableList>);
    act(() => screen.getByText("open-a").click());
    act(() => screen.getByText("close-b").click()); // closing 'b' while 'a' is open
    expect(screen.getByTestId("opened-id")).toHaveTextContent("a");
  });

  // ── exclusive=false ────────────────────────────────────────────────────────

  it("reportOpen does not change openedId when not exclusive", () => {
    render(<SwipeableList exclusive={false}><Consumer /></SwipeableList>);
    act(() => screen.getByText("open-a").click());
    expect(screen.getByTestId("opened-id")).toHaveTextContent("null");
  });

  it("reportClose does not change openedId when not exclusive", () => {
    render(<SwipeableList exclusive={false}><Consumer /></SwipeableList>);
    act(() => screen.getByText("open-a").click());
    act(() => screen.getByText("close-a").click());
    expect(screen.getByTestId("opened-id")).toHaveTextContent("null");
  });
});
