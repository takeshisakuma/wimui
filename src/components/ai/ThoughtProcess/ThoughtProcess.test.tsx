import { describe, it, expect } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import { ThoughtProcess, ThoughtStep } from "./ThoughtProcess";

describe("ThoughtStep", () => {
  it("renders child content", () => {
    render(
      <ThoughtProcess>
        <ThoughtStep isLast>Reasoning step A</ThoughtStep>
      </ThoughtProcess>,
    );
    expect(screen.getByText("Reasoning step A")).toBeInTheDocument();
  });

  it("renders an optional label above the content", () => {
    render(
      <ThoughtProcess>
        <ThoughtStep label="Step label" isLast>Content</ThoughtStep>
      </ThoughtProcess>,
    );
    expect(screen.getByText("Step label")).toBeInTheDocument();
  });

  it("marks the item as aria-busy when status is pending", () => {
    const { container } = render(
      <ThoughtProcess>
        <ThoughtStep status="pending" isLast>Loading…</ThoughtStep>
      </ThoughtProcess>,
    );
    expect(container.querySelector('[aria-busy="true"]')).not.toBeNull();
  });

  it("does not set aria-busy for completed status", () => {
    const { container } = render(
      <ThoughtProcess>
        <ThoughtStep status="completed" isLast>Done</ThoughtStep>
      </ThoughtProcess>,
    );
    expect(container.querySelector('[aria-busy]')).toBeNull();
  });

  it("does not set aria-busy for error status", () => {
    const { container } = render(
      <ThoughtProcess>
        <ThoughtStep status="error" isLast>Failed</ThoughtStep>
      </ThoughtProcess>,
    );
    expect(container.querySelector('[aria-busy]')).toBeNull();
  });
});

describe("ThoughtProcess", () => {
  const steps = (
    <>
      <ThoughtStep>First step</ThoughtStep>
      <ThoughtStep isLast>Second step</ThoughtStep>
    </>
  );

  // ── Rendering ─────────────────────────────────────────────────────────────

  it("renders the title", () => {
    render(<ThoughtProcess title="My Reasoning">{steps}</ThoughtProcess>);
    expect(screen.getByText("My Reasoning")).toBeInTheDocument();
  });

  it("renders all child steps", () => {
    render(<ThoughtProcess>{steps}</ThoughtProcess>);
    expect(screen.getByText("First step")).toBeInTheDocument();
    expect(screen.getByText("Second step")).toBeInTheDocument();
  });

  // ── Collapsible ───────────────────────────────────────────────────────────

  it("renders a toggle button when isCollapsible is true", () => {
    render(<ThoughtProcess isCollapsible>{steps}</ThoughtProcess>);
    expect(screen.getByRole("button")).toBeInTheDocument();
  });

  it("starts expanded by default", () => {
    render(<ThoughtProcess isCollapsible>{steps}</ThoughtProcess>);
    expect(screen.getByRole("button")).toHaveAttribute("aria-expanded", "true");
  });

  it("starts collapsed when defaultExpanded is false", () => {
    render(
      <ThoughtProcess isCollapsible defaultExpanded={false}>
        {steps}
      </ThoughtProcess>,
    );
    expect(screen.getByRole("button")).toHaveAttribute("aria-expanded", "false");
  });

  it("toggles aria-expanded when the header button is clicked", () => {
    render(<ThoughtProcess isCollapsible>{steps}</ThoughtProcess>);
    const btn = screen.getByRole("button");
    expect(btn).toHaveAttribute("aria-expanded", "true");
    fireEvent.click(btn);
    expect(btn).toHaveAttribute("aria-expanded", "false");
    fireEvent.click(btn);
    expect(btn).toHaveAttribute("aria-expanded", "true");
  });

  it("aria-controls on the button matches the id of the body wrapper", () => {
    render(<ThoughtProcess isCollapsible>{steps}</ThoughtProcess>);
    const btn = screen.getByRole("button");
    const controlsId = btn.getAttribute("aria-controls");
    expect(controlsId).toBeTruthy();
    expect(document.getElementById(controlsId!)).toBeInTheDocument();
  });

  // ── Non-collapsible ───────────────────────────────────────────────────────

  it("renders a heading instead of a button when isCollapsible is false", () => {
    render(<ThoughtProcess isCollapsible={false}>{steps}</ThoughtProcess>);
    expect(screen.queryByRole("button")).not.toBeInTheDocument();
    expect(screen.getByRole("heading", { level: 3 })).toBeInTheDocument();
  });

  it("always shows body content when isCollapsible is false", () => {
    render(<ThoughtProcess isCollapsible={false}>{steps}</ThoughtProcess>);
    expect(screen.getByText("First step")).toBeVisible();
  });
});
