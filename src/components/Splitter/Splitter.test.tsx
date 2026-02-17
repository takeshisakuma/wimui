import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import React from "react";
import { Splitter } from "./Splitter";

describe("Splitter", () => {
    it("renders panels correctly", () => {
        render(
            <Splitter>
                <Splitter.Panel>Panel 1</Splitter.Panel>
                <Splitter.Handle />
                <Splitter.Panel>Panel 2</Splitter.Panel>
            </Splitter>
        );
        expect(screen.getByText("Panel 1")).toBeDefined();
        expect(screen.getByText("Panel 2")).toBeDefined();
    });

    it("applies horizontal orientation by default", () => {
        const { container } = render(
            <Splitter>
                <Splitter.Panel>Panel 1</Splitter.Panel>
                <Splitter.Handle />
                <Splitter.Panel>Panel 2</Splitter.Panel>
            </Splitter>
        );
        expect(container.firstChild).toHaveClass("wim-splitter--horizontal");
    });

    it("applies vertical orientation when specified", () => {
        const { container } = render(
            <Splitter orientation="vertical">
                <Splitter.Panel>Panel 1</Splitter.Panel>
                <Splitter.Handle />
                <Splitter.Panel>Panel 2</Splitter.Panel>
            </Splitter>
        );
        expect(container.firstChild).toHaveClass("wim-splitter--vertical");
    });

    it("distributes sizes equally by default", () => {
        const { container } = render(
            <Splitter>
                <Splitter.Panel>Panel 1</Splitter.Panel>
                <Splitter.Handle />
                <Splitter.Panel>Panel 2</Splitter.Panel>
            </Splitter>
        );
        const panels = container.querySelectorAll(".wim-splitter-panel");
        expect(panels[0]).toHaveStyle({ flex: "0 0 50%" });
        expect(panels[1]).toHaveStyle({ flex: "0 0 50%" });
    });

    it("respects defaultSize prop", () => {
        const { container } = render(
            <Splitter>
                <Splitter.Panel defaultSize={30}>Panel 1</Splitter.Panel>
                <Splitter.Handle />
                <Splitter.Panel defaultSize={70}>Panel 2</Splitter.Panel>
            </Splitter>
        );
        const panels = container.querySelectorAll(".wim-splitter-panel");
        expect(panels[0]).toHaveStyle({ flex: "0 0 30%" });
        expect(panels[1]).toHaveStyle({ flex: "0 0 70%" });
    });
});
