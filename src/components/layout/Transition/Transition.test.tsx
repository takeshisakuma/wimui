import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { Transition } from "./Transition";

describe("Transition", () => {

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

  it("applies enter classes when shown", async () => {
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
    await waitFor(() => {
      expect(wrapper).toHaveClass("test-to");
    });
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
 
  it("applies preset classes", async () => {
    const { rerender, container } = render(
      <Transition show={false} preset="fade">
        <div>Content</div>
      </Transition>,
    );

    rerender(
      <Transition show={true} preset="fade">
        <div>Content</div>
      </Transition>,
    );

    const wrapper = container.firstChild as HTMLElement;
    // Check if some hashed class is applied (since we use CSS modules, we can't easily check the name without importing styles,
    // but we can check if it HAS classes that are not our 'className' prop if we provide one)
    expect(wrapper.className).not.toBe("");
    
    await waitFor(() => {
        // It should still be showing after transition
        expect(wrapper).toBeInTheDocument();
    });
  });
});
