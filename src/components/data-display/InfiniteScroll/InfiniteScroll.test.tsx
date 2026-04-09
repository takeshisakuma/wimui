import { render, screen } from "@testing-library/react";
import { InfiniteScroll } from "./InfiniteScroll";
import { describe, it, expect, vi, beforeEach } from "vitest";
import styles from "./infinite-scroll.module.scss";

describe("InfiniteScroll", () => {
  class MockIntersectionObserver {
    observe = vi.fn();
    unobserve = vi.fn();
    disconnect = vi.fn();
  }
  vi.stubGlobal("IntersectionObserver", MockIntersectionObserver);

  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("should render children", () => {
    render(
      <InfiniteScroll onLoadMore={() => {}} hasMore={false}>
        <div>Content</div>
      </InfiniteScroll>,
    );
    expect(screen.getByText("Content")).toBeInTheDocument();
  });

  it("should show loader when loading is true", () => {
    render(
      <InfiniteScroll onLoadMore={() => {}} hasMore={false} loading={true}>
        <div>Content</div>
      </InfiniteScroll>,
    );
    expect(screen.getByRole("status")).toBeInTheDocument();
  });

  it("should not show trigger when hasMore is false", () => {
    const { container } = render(
      <InfiniteScroll onLoadMore={() => {}} hasMore={false}>
        <div>Content</div>
      </InfiniteScroll>,
    );
    expect(
      container.querySelector(`.${styles.trigger}`),
    ).not.toBeInTheDocument();
  });
});
