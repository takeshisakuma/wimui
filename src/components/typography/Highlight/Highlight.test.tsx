import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import React from "react";
import { Highlight } from "./Highlight";
import styles from "./highlight.module.scss";

describe("Highlight", () => {
  it("renders children correctly when no highlight is provided", () => {
    render(<Highlight highlight="">Hello World</Highlight>);
    expect(screen.getByText("Hello World")).toBeDefined();
  });

  it("highlights single query string correctly", () => {
    const { container } = render(
      <Highlight highlight="World">Hello World</Highlight>,
    );
    const mark = container.querySelector("mark");
    expect(mark?.textContent).toBe("World");
    expect(container.textContent).toBe("Hello World");
  });

  it("highlights multiple query strings correctly", () => {
    const { container } = render(
      <Highlight highlight={["Hello", "World"]}>
        Hello beautiful World
      </Highlight>,
    );
    const marks = container.querySelectorAll("mark");
    expect(marks.length).toBe(2);
    expect(marks[0].textContent).toBe("Hello");
    expect(marks[1].textContent).toBe("World");
  });

  it("is case-insensitive", () => {
    const { container } = render(
      <Highlight highlight="world">Hello WORLD</Highlight>,
    );
    const mark = container.querySelector("mark");
    expect(mark?.textContent).toBe("WORLD");
  });

  it("escapes special regex characters", () => {
    const { container } = render(
      <Highlight highlight="[H]">Hello [H]</Highlight>,
    );
    const mark = container.querySelector("mark");
    expect(mark?.textContent).toBe("[H]");
  });

  it("uses custom component", () => {
    const { container } = render(
      <Highlight highlight="test" as="div">
        test
      </Highlight>,
    );
    // Check for the rendered div
    const div = container.querySelector("div");
    expect(div).toBeDefined();
    expect(div?.className).toContain(styles.root);
  });

  it("supports asChild prop", () => {
    render(
      <Highlight highlight="test" asChild>
        <div data-testid="custom">test</div>
      </Highlight>,
    );
    const element = screen.getByTestId("custom");
    expect(element.tagName).toBe("DIV");
    expect(element).toHaveClass(styles.root);
  });

  it("highlights text inside asChild element", () => {
    const { container } = render(
      <Highlight highlight="link" asChild>
        <a href="/">This has a link in it</a>
      </Highlight>,
    );
    const mark = container.querySelector("mark");
    expect(mark?.textContent).toBe("link");
    expect(container.querySelector("a")?.textContent).toBe("This has a link in it");
  });

  it("forwards ref to the element", () => {
    const ref = React.createRef<HTMLElement>();
    render(<Highlight highlight="test" ref={ref}>test</Highlight>);
    expect(ref.current).toBeInstanceOf(HTMLElement);
  });

  it("applies highlightClassName to mark", () => {
    const { container } = render(
      <Highlight highlight="test" highlightClassName="custom-highlight">test text</Highlight>
    );
    const mark = container.querySelector("mark");
    expect(mark).toHaveClass("custom-highlight");
  });

  it("applies highlightStyles to mark", () => {
    const { container } = render(
      <Highlight highlight="test" highlightStyles={{ color: "red" }}>test text</Highlight>
    );
    const mark = container.querySelector("mark") as HTMLElement;
    expect(mark.style.color).toBe("red");
  });
});
