import { render, screen, fireEvent, act } from "@testing-library/react";
import { describe, it, expect, vi, beforeEach } from "vitest";
import { Transition } from "./Transition";

describe("Transition", () => {
  beforeEach(() => {
    vi.spyOn(window, "requestAnimationFrame").mockImplementation((cb) => {
      cb(0);
      return 0;
    });
  });

  it("renders children when show is true", () => {
    render(
      <Transition show={true}>
        <div data-testid="content">Content</div>
      </Transition>,
    );
    expect(screen.getByTestId("content")).toBeInTheDocument();
  });

  it("does not render children when show is false and unmount is true", () => {
    render(
      <Transition show={false} unmount={true}>
        <div data-testid="content">Content</div>
      </Transition>,
    );
    expect(screen.queryByTestId("content")).not.toBeInTheDocument();
  });

  it("applies enter classes when shown", () => {
    const { rerender, container } = render(
      <Transition
        show={false}
        enter="test-enter"
        enterFrom="test-from"
        enterTo="test-to"
      >
        <div>Content</div>
      </Transition>,
    );

    rerender(
      <Transition
        show={true}
        enter="test-enter"
        enterFrom="test-from"
        enterTo="test-to"
      >
        <div>Content</div>
      </Transition>,
    );

    const wrapper = container.firstChild as HTMLElement;
    expect(wrapper).toHaveClass("test-enter");
    expect(wrapper).toHaveClass("test-to");
  });

  it("unmounts after transition end if show set to false", () => {
    const { rerender, container } = render(
      <Transition show={true}>
        <div data-testid="content">Content</div>
      </Transition>,
    );

    rerender(
      <Transition show={false} unmount={true}>
        <div data-testid="content">Content</div>
      </Transition>,
    );

    const wrapper = container.firstChild as HTMLElement;
    fireEvent.transitionEnd(wrapper);

    expect(screen.queryByTestId("content")).not.toBeInTheDocument();
  });
});
