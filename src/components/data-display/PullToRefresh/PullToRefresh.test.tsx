import { describe, it, expect, vi } from "vitest";
import type React from "react";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { PullToRefresh } from "./PullToRefresh";

vi.mock("react-i18next", async () => ({
  // useWimTranslation（内蔵 i18next フォールバック）が参照する API
  I18nContext: (await import("react")).createContext(null),
  getI18n: () => undefined,
  useTranslation: () => ({ t: (key: string) => key }),
}));

const renderPtr = (props: Partial<React.ComponentProps<typeof PullToRefresh>> = {}) => {
  const onRefresh = vi.fn(() => Promise.resolve());
  const utils = render(
    <PullToRefresh onRefresh={onRefresh} {...props}>
      Test content
    </PullToRefresh>,
  );
  const container = utils.container.firstChild as HTMLElement;
  return { ...utils, onRefresh, container };
};

const touchStart = (el: HTMLElement, y: number) =>
  fireEvent.touchStart(el, { touches: [{ clientY: y }] });
const touchMove = (y: number) =>
  fireEvent.touchMove(window, { touches: [{ clientY: y }] });
const touchEnd = () => fireEvent.touchEnd(window);

describe("PullToRefresh", () => {
  it("renders correctly", () => {
    renderPtr();
    expect(screen.getByText("Test content")).toBeInTheDocument();
  });

  it("supports asChild", () => {
    render(
      <PullToRefresh asChild onRefresh={() => Promise.resolve()}>
        <span data-testid="child">Child</span>
      </PullToRefresh>,
    );
    expect(screen.getByTestId("child")).toBeInTheDocument();
  });

  it("triggers onRefresh when pulled beyond the threshold", async () => {
    const { onRefresh, container } = renderPtr({ threshold: 60 });
    touchStart(container, 0);
    touchMove(200); // 200 * 0.4 = 80 > 60
    expect(screen.getByText("Release to refresh")).toBeInTheDocument();
    touchEnd();
    expect(screen.getByText("Refreshing...")).toBeInTheDocument();
    expect(onRefresh).toHaveBeenCalledTimes(1);
    // onRefresh 解決 + 50ms 後に idle へ戻る
    await waitFor(() => {
      expect(screen.getByText("Pull to refresh")).toBeInTheDocument();
    });
  });

  it("does not trigger onRefresh below the threshold", () => {
    const { onRefresh, container } = renderPtr({ threshold: 60 });
    touchStart(container, 0);
    touchMove(100); // 100 * 0.4 = 40 < 60
    expect(screen.getByText("Pull to refresh")).toBeInTheDocument();
    touchEnd();
    expect(onRefresh).not.toHaveBeenCalled();
  });

  it("cancels the pull when moving upward", () => {
    const { onRefresh, container } = renderPtr();
    touchStart(container, 100);
    touchMove(80); // diff -20 → キャンセル
    touchEnd();
    expect(onRefresh).not.toHaveBeenCalled();
  });

  it("caps the pull distance at maxDistance", () => {
    const { container } = renderPtr({ maxDistance: 120 });
    touchStart(container, 0);
    touchMove(1000); // 1000 * 0.4 = 400 → 120 でキャップ
    const indicator = container.firstChild as HTMLElement;
    expect(indicator.style.height).toBe("120px");
  });

  it("ignores pulls when the container is scrolled", () => {
    const { onRefresh, container } = renderPtr();
    Object.defineProperty(container, "scrollTop", { value: 50, configurable: true });
    touchStart(container, 0);
    touchMove(300);
    touchEnd();
    expect(onRefresh).not.toHaveBeenCalled();
  });

  it("shows the loading state when controlled refreshing is true", () => {
    const { onRefresh, container } = renderPtr({ refreshing: true, threshold: 60 });
    expect(screen.getByText("Refreshing...")).toBeInTheDocument();
    const indicator = container.firstChild as HTMLElement;
    expect(indicator.style.height).toBe("60px");
    // refreshing 中はプル開始しない
    touchStart(container, 0);
    touchMove(300);
    touchEnd();
    expect(onRefresh).not.toHaveBeenCalled();
  });

  it("supports mouse events for pulling", async () => {
    const { onRefresh, container } = renderPtr({ threshold: 60 });
    fireEvent.mouseDown(container, { clientY: 0 });
    fireEvent.mouseMove(window, { clientY: 200 });
    expect(screen.getByText("Release to refresh")).toBeInTheDocument();
    fireEvent.mouseUp(window);
    await waitFor(() => {
      expect(onRefresh).toHaveBeenCalledTimes(1);
    });
  });
});
