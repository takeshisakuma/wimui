import { describe, it, expect, vi } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import React from "react";
import { Splitter } from "./Splitter";

describe("Splitter", () => {
  it("renders panels correctly", () => {
    render(
      <Splitter>
        <Splitter.Panel>Panel 1</Splitter.Panel>
        <Splitter.Handle />
        <Splitter.Panel>Panel 2</Splitter.Panel>
      </Splitter>,
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
      </Splitter>,
    );
    expect(container.firstChild).toHaveClass("wim-splitter--horizontal");
  });

  it("applies vertical orientation when specified", () => {
    const { container } = render(
      <Splitter orientation="vertical">
        <Splitter.Panel>Panel 1</Splitter.Panel>
        <Splitter.Handle />
        <Splitter.Panel>Panel 2</Splitter.Panel>
      </Splitter>,
    );
    expect(container.firstChild).toHaveClass("wim-splitter--vertical");
  });

  it("distributes sizes equally by default", () => {
    const { container } = render(
      <Splitter>
        <Splitter.Panel>Panel 1</Splitter.Panel>
        <Splitter.Handle />
        <Splitter.Panel>Panel 2</Splitter.Panel>
      </Splitter>,
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
      </Splitter>,
    );
    const panels = container.querySelectorAll(".wim-splitter-panel");
    expect(panels[0]).toHaveStyle({ flex: "0 0 30%" });
    expect(panels[1]).toHaveStyle({ flex: "0 0 70%" });
  });

  it("handles resizing", () => {
    const { container } = render(
      <Splitter orientation="horizontal">
        <Splitter.Panel defaultSize={50}>Panel 1</Splitter.Panel>
        <Splitter.Handle />
        <Splitter.Panel defaultSize={50}>Panel 2</Splitter.Panel>
      </Splitter>,
    );
    
    const splitter = container.firstChild as HTMLDivElement;
    // Mock getBoundingClientRect
    splitter.getBoundingClientRect = vi.fn().mockReturnValue({
        width: 1000,
        height: 100,
        left: 0,
        top: 0,
        bottom: 100,
        right: 1000,
        x: 0, 
        y: 0,
        toJSON: () => {},
    });

    const handle = screen.getByRole("separator");
    
    // Start resize
    fireEvent.mouseDown(handle, { clientX: 500 });
    
    // Move to 600px (60%)
    fireEvent.mouseMove(window, { clientX: 600 });
    
    const panels = container.querySelectorAll(".wim-splitter-panel");
    expect(panels[0]).toHaveStyle({ flex: "0 0 60%" });
    expect(panels[1]).toHaveStyle({ flex: "0 0 40%" });
    
    // End resize
    fireEvent.mouseUp(window);
    
    // Further movements shouldn't affect sizes
    fireEvent.mouseMove(window, { clientX: 700 });
    expect(panels[0]).toHaveStyle({ flex: "0 0 60%" });
  });

  it("respects minSize and maxSize", () => {
    const { container } = render(
      <Splitter>
        <Splitter.Panel minSize={40} maxSize={60}>Panel 1</Splitter.Panel>
        <Splitter.Handle />
        <Splitter.Panel>Panel 2</Splitter.Panel>
      </Splitter>,
    );
    
    const splitter = container.firstChild as HTMLDivElement;
    splitter.getBoundingClientRect = vi.fn().mockReturnValue({ width: 1000, left: 0 });

    const handle = screen.getByRole("separator");
    fireEvent.mouseDown(handle, { clientX: 500 });

    // Try to move to 30% (300px)
    fireEvent.mouseMove(window, { clientX: 300 });
    const panels = container.querySelectorAll(".wim-splitter-panel");
    expect(panels[0]).toHaveStyle({ flex: "0 0 40%" }); // Clamped to minSize

    // Try to move to 80% (800px)
    fireEvent.mouseMove(window, { clientX: 800 });
    expect(panels[0]).toHaveStyle({ flex: "0 0 60%" }); // Clamped to maxSize
  });
});
