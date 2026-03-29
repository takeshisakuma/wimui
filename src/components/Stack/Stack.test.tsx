import React from "react";
import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { Stack } from "./Stack";

describe("Stack", () => {
  it("renders children in vertical layout by default", () => {
    const { container } = render(
      <Stack>
        <div>1</div>
        <div>2</div>
      </Stack>,
    );
    const stack = container.firstChild as HTMLElement;
    expect(stack).toHaveStyle({ "--wim-stack-dir": "column" });
    expect(screen.getByText("1")).toBeInTheDocument();
    expect(screen.getByText("2")).toBeInTheDocument();
  });

  it("renders horizontal layout when specified", () => {
    const { container } = render(
      <Stack direction="row">
        <div>1</div>
      </Stack>,
    );
    const stack = container.firstChild as HTMLElement;
    expect(stack).toHaveStyle({ "--wim-stack-dir": "row" });
  });

  it("applies gap from spacing token", () => {
    const { container } = render(<Stack gap="lg" />);
    const stack = container.firstChild as HTMLElement;
    expect(stack.style.gap).toBe("var(--wim-spacing-lg)");
  });

  // gap のバリエーション
  it("applies gap as number (px)", () => {
    const { container } = render(<Stack gap={24} />);
    expect((container.firstChild as HTMLElement).style.gap).toBe("24px");
  });

  it("applies gap as non-token string (e.g. 1rem)", () => {
    const { container } = render(<Stack gap="1rem" />);
    expect((container.firstChild as HTMLElement).style.gap).toBe("1rem");
  });

  it("applies default gap md when gap is not specified", () => {
    const { container } = render(<Stack />);
    expect((container.firstChild as HTMLElement).style.gap).toBe("var(--wim-spacing-md)");
  });

  // align のバリエーション
  it("maps align start to flex-start", () => {
    const { container } = render(<Stack align="start" />);
    expect((container.firstChild as HTMLElement).style.alignItems).toBe("flex-start");
  });

  it("maps align end to flex-end", () => {
    const { container } = render(<Stack align="end" />);
    expect((container.firstChild as HTMLElement).style.alignItems).toBe("flex-end");
  });

  it("passes through align center", () => {
    const { container } = render(<Stack align="center" />);
    expect((container.firstChild as HTMLElement).style.alignItems).toBe("center");
  });

  it("passes through align stretch", () => {
    const { container } = render(<Stack align="stretch" />);
    expect((container.firstChild as HTMLElement).style.alignItems).toBe("stretch");
  });

  it("passes through align baseline", () => {
    const { container } = render(<Stack align="baseline" />);
    expect((container.firstChild as HTMLElement).style.alignItems).toBe("baseline");
  });

  // justify のバリエーション
  it("maps justify start to flex-start", () => {
    const { container } = render(<Stack justify="start" />);
    expect((container.firstChild as HTMLElement).style.justifyContent).toBe("flex-start");
  });

  it("maps justify end to flex-end", () => {
    const { container } = render(<Stack justify="end" />);
    expect((container.firstChild as HTMLElement).style.justifyContent).toBe("flex-end");
  });

  it("maps justify between to space-between", () => {
    const { container } = render(<Stack justify="between" />);
    expect((container.firstChild as HTMLElement).style.justifyContent).toBe("space-between");
  });

  it("maps justify around to space-around", () => {
    const { container } = render(<Stack justify="around" />);
    expect((container.firstChild as HTMLElement).style.justifyContent).toBe("space-around");
  });

  it("maps justify evenly to space-evenly", () => {
    const { container } = render(<Stack justify="evenly" />);
    expect((container.firstChild as HTMLElement).style.justifyContent).toBe("space-evenly");
  });

  it("passes through justify center", () => {
    const { container } = render(<Stack justify="center" />);
    expect((container.firstChild as HTMLElement).style.justifyContent).toBe("center");
  });

  // direction responsive object
  it("applies responsive direction with base breakpoint", () => {
    const { container } = render(<Stack direction={{ base: "column" }} />);
    expect((container.firstChild as HTMLElement)).toHaveStyle({
      "--wim-stack-dir": "column",
    });
  });

  it("applies responsive direction with sm breakpoint", () => {
    const { container } = render(
      <Stack direction={{ base: "column", sm: "row" }} />,
    );
    const el = container.firstChild as HTMLElement;
    expect(el).toHaveStyle({ "--wim-stack-dir": "column" });
    expect(el).toHaveStyle({ "--wim-stack-dir-sm": "row" });
  });

  it("applies responsive direction with md breakpoint", () => {
    const { container } = render(
      <Stack direction={{ base: "column", md: "row" }} />,
    );
    expect((container.firstChild as HTMLElement)).toHaveStyle({
      "--wim-stack-dir-md": "row",
    });
  });

  it("applies responsive direction with lg breakpoint", () => {
    const { container } = render(
      <Stack direction={{ base: "column", lg: "row" }} />,
    );
    expect((container.firstChild as HTMLElement)).toHaveStyle({
      "--wim-stack-dir-lg": "row",
    });
  });

  it("applies responsive direction with xl breakpoint", () => {
    const { container } = render(
      <Stack direction={{ base: "column", xl: "row" }} />,
    );
    expect((container.firstChild as HTMLElement)).toHaveStyle({
      "--wim-stack-dir-xl": "row",
    });
  });

  it("applies all responsive direction breakpoints", () => {
    const { container } = render(
      <Stack direction={{ base: "column", sm: "row", md: "column", lg: "row", xl: "column" }} />,
    );
    const el = container.firstChild as HTMLElement;
    expect(el).toHaveStyle({ "--wim-stack-dir": "column" });
    expect(el).toHaveStyle({ "--wim-stack-dir-sm": "row" });
    expect(el).toHaveStyle({ "--wim-stack-dir-md": "column" });
    expect(el).toHaveStyle({ "--wim-stack-dir-lg": "row" });
    expect(el).toHaveStyle({ "--wim-stack-dir-xl": "column" });
  });

  it("uses column as fallback when responsive object has no base", () => {
    const { container } = render(<Stack direction={{ sm: "row" }} />);
    expect((container.firstChild as HTMLElement)).toHaveStyle({
      "--wim-stack-dir": "column",
    });
  });

  // className / style / ref
  it("merges custom className", () => {
    const { container } = render(<Stack className="my-stack" />);
    const el = container.firstChild as HTMLElement;
    expect(el).toHaveClass("wim-stack");
    expect(el).toHaveClass("my-stack");
  });

  it("merges custom style", () => {
    const { container } = render(<Stack style={{ color: "red" }} />);
    expect((container.firstChild as HTMLElement).style.color).toBe("red");
  });

  it("forwards ref to the element", () => {
    const ref = { current: null } as React.RefObject<HTMLElement | null>;
    const { container } = render(<Stack ref={ref} />);
    expect(ref.current).toBe(container.firstChild);
  });

  it("passes extra HTML attributes", () => {
    render(<Stack data-testid="stack" aria-label="layout" />);
    expect(screen.getByTestId("stack")).toHaveAttribute("aria-label", "layout");
  });
});
