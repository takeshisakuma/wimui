import React from "react";
import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { Grid } from "./Grid";
import { generateResponsiveVars } from "./grid-utils";

describe("Grid", () => {
  it("renders children", () => {
    render(
      <Grid>
        <div>Item 1</div>
        <div>Item 2</div>
      </Grid>,
    );
    expect(screen.getByText("Item 1")).toBeInTheDocument();
  });

  it("applies style for cols as number", () => {
    render(<Grid cols={3} data-testid="grid" />);
    const grid = screen.getByTestId("grid");
    expect(grid).toHaveStyle({
      "--wim-grid-cols": "repeat(3, minmax(0, 1fr))",
    });
  });

  it("applies style for cols as string", () => {
    render(<Grid cols="1fr 2fr 1fr" data-testid="grid" />);
    expect(screen.getByTestId("grid")).toHaveStyle({
      "--wim-grid-cols": "1fr 2fr 1fr",
    });
  });

  it("applies style for cols as responsive object", () => {
    render(
      <Grid cols={{ base: 1, sm: 2, md: 3, lg: 4, xl: 6 }} data-testid="grid" />,
    );
    const grid = screen.getByTestId("grid");
    expect(grid).toHaveStyle({
      "--wim-grid-cols": "repeat(1, minmax(0, 1fr))",
      "--wim-grid-cols-sm": "repeat(2, minmax(0, 1fr))",
      "--wim-grid-cols-md": "repeat(3, minmax(0, 1fr))",
      "--wim-grid-cols-lg": "repeat(4, minmax(0, 1fr))",
      "--wim-grid-cols-xl": "repeat(6, minmax(0, 1fr))",
    });
  });

  it("applies style for rows as number", () => {
    render(<Grid rows={2} data-testid="grid" />);
    expect(screen.getByTestId("grid")).toHaveStyle({
      gridTemplateRows: "repeat(2, minmax(0, 1fr))",
    });
  });

  it("applies style for rows as string", () => {
    render(<Grid rows="auto 1fr" data-testid="grid" />);
    expect(screen.getByTestId("grid")).toHaveStyle({
      gridTemplateRows: "auto 1fr",
    });
  });

  it("display is grid by default", () => {
    render(<Grid data-testid="grid" />);
    expect(screen.getByTestId("grid")).toHaveStyle({ display: "grid" });
  });

  it("display is inline-grid when inline is true", () => {
    render(<Grid inline data-testid="grid" />);
    expect(screen.getByTestId("grid")).toHaveStyle({ display: "inline-grid" });
  });

  it("applies gap as number to both col and row gap", () => {
    render(<Grid gap={16} data-testid="grid" />);
    const grid = screen.getByTestId("grid");
    expect(grid).toHaveStyle({
      "--wim-grid-col-gap": "16px",
      "--wim-grid-row-gap": "16px",
    });
  });

  it("applies gap as spacing token string", () => {
    render(<Grid gap="md" data-testid="grid" />);
    const grid = screen.getByTestId("grid");
    expect(grid).toHaveStyle({
      "--wim-grid-col-gap": "var(--spacing-md)",
      "--wim-grid-row-gap": "var(--spacing-md)",
    });
  });

  it("applies gap as responsive object", () => {
    render(<Grid gap={{ base: 8, md: 16 }} data-testid="grid" />);
    const grid = screen.getByTestId("grid");
    expect(grid).toHaveStyle({
      "--wim-grid-col-gap": "8px",
      "--wim-grid-col-gap-md": "16px",
    });
  });

  it("columnGap overrides gap for column direction", () => {
    render(<Grid gap={8} columnGap={24} data-testid="grid" />);
    const grid = screen.getByTestId("grid");
    expect(grid).toHaveStyle({ "--wim-grid-col-gap": "24px" });
    expect(grid).toHaveStyle({ "--wim-grid-row-gap": "8px" });
  });

  it("rowGap overrides gap for row direction", () => {
    render(<Grid gap={8} rowGap={32} data-testid="grid" />);
    const grid = screen.getByTestId("grid");
    expect(grid).toHaveStyle({ "--wim-grid-row-gap": "32px" });
    expect(grid).toHaveStyle({ "--wim-grid-col-gap": "8px" });
  });

  it("does not apply gap vars when gap props are not specified", () => {
    render(<Grid data-testid="grid" />);
    const style = screen.getByTestId("grid").getAttribute("style") ?? "";
    expect(style).not.toContain("--wim-grid-col-gap");
    expect(style).not.toContain("--wim-grid-row-gap");
  });

  it("applies align prop", () => {
    render(<Grid align="center" data-testid="grid" />);
    expect(screen.getByTestId("grid")).toHaveStyle({ alignItems: "center" });
  });

  it("applies justify start", () => {
    render(<Grid justify="start" data-testid="grid" />);
    expect(screen.getByTestId("grid")).toHaveStyle({ justifyContent: "start" });
  });

  it("converts justify between to space-between", () => {
    render(<Grid justify="between" data-testid="grid" />);
    expect(screen.getByTestId("grid")).toHaveStyle({
      justifyContent: "space-between",
    });
  });

  it("converts justify around to space-around", () => {
    render(<Grid justify="around" data-testid="grid" />);
    expect(screen.getByTestId("grid")).toHaveStyle({
      justifyContent: "space-around",
    });
  });

  it("applies justify end", () => {
    render(<Grid justify="end" data-testid="grid" />);
    expect(screen.getByTestId("grid")).toHaveStyle({ justifyContent: "end" });
  });

  it("applies justify stretch", () => {
    render(<Grid justify="stretch" data-testid="grid" />);
    expect(screen.getByTestId("grid")).toHaveStyle({ justifyContent: "stretch" });
  });

  it("applies flow prop", () => {
    render(<Grid flow="column" data-testid="grid" />);
    expect(screen.getByTestId("grid")).toHaveStyle({ gridAutoFlow: "column" });
  });

  it("applies flow dense", () => {
    render(<Grid flow="row dense" data-testid="grid" />);
    expect(screen.getByTestId("grid")).toHaveStyle({ gridAutoFlow: "row dense" });
  });

  it("merges custom className", () => {
    render(<Grid className="my-class" data-testid="grid" />);
    const grid = screen.getByTestId("grid");
    expect(grid).toHaveClass("wim-grid");
    expect(grid).toHaveClass("my-class");
  });

  it("merges custom style", () => {
    render(<Grid style={{ color: "red" }} data-testid="grid" />);
    expect(screen.getByTestId("grid")).toHaveStyle({ color: "rgb(255, 0, 0)" });
  });

  it("forwards ref to the div element", () => {
    const ref = { current: null } as React.RefObject<HTMLDivElement | null>;
    render(<Grid ref={ref} data-testid="grid" />);
    expect(ref.current).toBe(screen.getByTestId("grid"));
  });

  it("passes extra HTML attributes to the div", () => {
    render(<Grid aria-label="grid layout" data-testid="grid" />);
    expect(screen.getByTestId("grid")).toHaveAttribute("aria-label", "grid layout");
  });
});

describe("generateResponsiveVars", () => {
  it("returns empty object when prop is undefined", () => {
    expect(generateResponsiveVars(undefined, "--var")).toEqual({});
  });

  it("returns primitive number with base var", () => {
    expect(generateResponsiveVars(4, "--var", (v) => String(v))).toEqual({
      "--var": "4",
    });
  });

  it("returns primitive string with base var", () => {
    expect(generateResponsiveVars("auto", "--var", (v) => String(v))).toEqual({
      "--var": "auto",
    });
  });

  it("uses String() as default transform", () => {
    expect(generateResponsiveVars(42, "--var")).toEqual({ "--var": "42" });
  });

  it("returns only defined breakpoints from object", () => {
    expect(
      generateResponsiveVars({ base: 1, md: 3 }, "--var", (v) => `${v}x`),
    ).toEqual({
      "--var": "1x",
      "--var-md": "3x",
    });
  });

  it("handles object with all breakpoints", () => {
    const result = generateResponsiveVars(
      { base: 1, sm: 2, md: 3, lg: 4, xl: 5 },
      "--var",
      (v) => String(v),
    );
    expect(result).toEqual({
      "--var": "1",
      "--var-sm": "2",
      "--var-md": "3",
      "--var-lg": "4",
      "--var-xl": "5",
    });
  });

  it("handles object with only sm", () => {
    expect(generateResponsiveVars({ sm: 2 }, "--var", (v) => String(v))).toEqual({
      "--var-sm": "2",
    });
  });

  it("handles object with only lg", () => {
    expect(generateResponsiveVars({ lg: 4 }, "--var", (v) => String(v))).toEqual({
      "--var-lg": "4",
    });
  });

  it("handles object with only xl", () => {
    expect(generateResponsiveVars({ xl: 5 }, "--var", (v) => String(v))).toEqual({
      "--var-xl": "5",
    });
  });
});
