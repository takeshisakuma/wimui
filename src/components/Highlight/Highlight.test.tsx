import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import React from "react";
import { Highlight } from "./Highlight";

describe("Highlight", () => {
    it("renders children correctly when no highlight is provided", () => {
        render(<Highlight highlight="">Hello World</Highlight>);
        expect(screen.getByText("Hello World")).toBeDefined();
    });

    it("highlights single query string correctly", () => {
        const { container } = render(<Highlight highlight="World">Hello World</Highlight>);
        const mark = container.querySelector("mark");
        expect(mark?.textContent).toBe("World");
        expect(container.textContent).toBe("Hello World");
    });

    it("highlights multiple query strings correctly", () => {
        const { container } = render(
            <Highlight highlight={["Hello", "World"]}>Hello beautiful World</Highlight>
        );
        const marks = container.querySelectorAll("mark");
        expect(marks.length).toBe(2);
        expect(marks[0].textContent).toBe("Hello");
        expect(marks[1].textContent).toBe("World");
    });

    it("is case-insensitive", () => {
        const { container } = render(<Highlight highlight="world">Hello WORLD</Highlight>);
        const mark = container.querySelector("mark");
        expect(mark?.textContent).toBe("WORLD");
    });

    it("escapes special regex characters", () => {
        const { container } = render(<Highlight highlight="[H]">Hello [H]</Highlight>);
        const mark = container.querySelector("mark");
        expect(mark?.textContent).toBe("[H]");
    });

    it("uses custom component", () => {
        const { container } = render(
            <Highlight highlight="test" component="div">
                test
            </Highlight>
        );
        expect(container.querySelector("div.wim-highlight-container")).toBeDefined();
    });
});
