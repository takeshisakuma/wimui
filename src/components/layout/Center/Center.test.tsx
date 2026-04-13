import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { Center } from "./Center";

describe("Center", () => {
  it("renders children centered", () => {
    render(<Center>Centered Content</Center>);
    const center = screen.getByText("Centered Content");
    expect(center).toBeInTheDocument();

    expect(center).toHaveStyle({
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    });
  });

  it("renders inline when inline prop is true", () => {
    render(<Center inline>Inline Center</Center>);
    const center = screen.getByText("Inline Center");
    expect(center).toHaveStyle({ display: "inline-flex" });
  });

  it("renders as child element when asChild is true", () => {
    render(
      <Center asChild>
        <section>Slotted Center</section>
      </Center>,
    );
    const el = screen.getByText("Slotted Center");
    expect(el.tagName).toBe("SECTION");
    expect(el).toHaveStyle({
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    });
  });
});
