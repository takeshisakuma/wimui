import { render, screen, act } from "@testing-library/react";
import { InfiniteScroll } from "./InfiniteScroll";
import { describe, it, expect, vi, beforeEach } from "vitest";
import styles from "./infinite-scroll.module.scss";

type IOCallback = (entries: IntersectionObserverEntry[]) => void;
type IOOptions = { root?: Element | null; rootMargin?: string; threshold?: number };

let capturedCallback: IOCallback | null = null;
let capturedOptions: IOOptions | null = null;

class MockIntersectionObserver {
  observe = vi.fn();
  unobserve = vi.fn();
  disconnect = vi.fn();

  constructor(callback: IOCallback, options?: IOOptions) {
    capturedCallback = callback;
    capturedOptions = options ?? null;
  }
}

vi.stubGlobal("IntersectionObserver", MockIntersectionObserver);

const trigger = (isIntersecting: boolean) => {
  act(() => {
    capturedCallback?.([{ isIntersecting } as IntersectionObserverEntry]);
  });
};

describe("InfiniteScroll", () => {
  beforeEach(() => {
    vi.clearAllMocks();
    capturedCallback = null;
    capturedOptions = null;
  });

  it("renders children", () => {
    render(
      <InfiniteScroll onLoadMore={() => {}} hasMore={false}>
        <div>Content</div>
      </InfiniteScroll>,
    );
    expect(screen.getByText("Content")).toBeInTheDocument();
  });

  it("shows loader element with role=status when loading is true", () => {
    render(
      <InfiniteScroll onLoadMore={() => {}} hasMore={false} loading={true}>
        <div>Content</div>
      </InfiniteScroll>,
    );
    expect(screen.getByRole("status")).toBeInTheDocument();
  });

  it("does not show loader when loading is false", () => {
    render(
      <InfiniteScroll onLoadMore={() => {}} hasMore={false} loading={false}>
        <div>Content</div>
      </InfiniteScroll>,
    );
    expect(screen.queryByRole("status")).not.toBeInTheDocument();
  });

  it("renders custom loader content inside status element", () => {
    render(
      <InfiniteScroll
        onLoadMore={() => {}}
        hasMore={false}
        loading={true}
        loader={<span>Loading…</span>}
      >
        <div>Content</div>
      </InfiniteScroll>,
    );
    expect(screen.getByText("Loading…")).toBeInTheDocument();
  });

  it("renders sentinel div when hasMore is true", () => {
    const { container } = render(
      <InfiniteScroll onLoadMore={() => {}} hasMore={true}>
        <div>Content</div>
      </InfiniteScroll>,
    );
    expect(container.querySelector(`.${styles.loader}`)).toBeInTheDocument();
  });

  it("does not render sentinel div when hasMore is false", () => {
    const { container } = render(
      <InfiniteScroll onLoadMore={() => {}} hasMore={false}>
        <div>Content</div>
      </InfiniteScroll>,
    );
    expect(container.querySelector(`.${styles.loader}`)).not.toBeInTheDocument();
  });

  it("calls onLoadMore when sentinel intersects and hasMore is true", () => {
    const onLoadMore = vi.fn();
    render(
      <InfiniteScroll onLoadMore={onLoadMore} hasMore={true}>
        <div>Content</div>
      </InfiniteScroll>,
    );
    trigger(true);
    expect(onLoadMore).toHaveBeenCalledTimes(1);
  });

  it("does not call onLoadMore when sentinel intersects but hasMore is false", () => {
    const onLoadMore = vi.fn();
    render(
      <InfiniteScroll onLoadMore={onLoadMore} hasMore={false}>
        <div>Content</div>
      </InfiniteScroll>,
    );
    trigger(true);
    expect(onLoadMore).not.toHaveBeenCalled();
  });

  it("does not call onLoadMore when sentinel is not intersecting", () => {
    const onLoadMore = vi.fn();
    render(
      <InfiniteScroll onLoadMore={onLoadMore} hasMore={true}>
        <div>Content</div>
      </InfiniteScroll>,
    );
    trigger(false);
    expect(onLoadMore).not.toHaveBeenCalled();
  });

  it("passes threshold as rootMargin bottom to IntersectionObserver", () => {
    render(
      <InfiniteScroll onLoadMore={() => {}} hasMore={true} threshold={100}>
        <div>Content</div>
      </InfiniteScroll>,
    );
    expect(capturedOptions?.rootMargin).toBe("0px 0px 100px 0px");
  });

  it("uses default threshold of 250px in rootMargin", () => {
    render(
      <InfiniteScroll onLoadMore={() => {}} hasMore={true}>
        <div>Content</div>
      </InfiniteScroll>,
    );
    expect(capturedOptions?.rootMargin).toBe("0px 0px 250px 0px");
  });

  it("passes container ref as root to IntersectionObserver", () => {
    const containerEl = document.createElement("div");
    document.body.appendChild(containerEl);
    const containerRef = { current: containerEl };

    render(
      <InfiniteScroll onLoadMore={() => {}} hasMore={true} container={containerRef}>
        <div>Content</div>
      </InfiniteScroll>,
    );
    expect(capturedOptions?.root).toBe(containerEl);
    document.body.removeChild(containerEl);
  });

  it("applies className to root element", () => {
    const { container } = render(
      <InfiniteScroll onLoadMore={() => {}} hasMore={false} className="custom-class">
        <div>Content</div>
      </InfiniteScroll>,
    );
    expect(container.firstChild).toHaveClass("custom-class");
  });
});
