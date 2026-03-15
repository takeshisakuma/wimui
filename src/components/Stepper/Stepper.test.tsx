import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import userEvent from "@testing-library/user-event";
import { Stepper } from "./Stepper";

describe("Stepper", () => {
  const steps = [
    { title: "Step 1", description: "First step" },
    { title: "Step 2", status: "error" as const },
    { title: "Step 3" },
  ];

  it("renders all step titles", () => {
    render(<Stepper steps={steps} current={0} />);
    expect(screen.getByText("Step 1")).toBeInTheDocument();
    expect(screen.getByText("Step 2")).toBeInTheDocument();
    expect(screen.getByText("Step 3")).toBeInTheDocument();
  });

  it("applies status classes correctly", () => {
    const { container } = render(
      <Stepper steps={steps} current={0} status="process" />,
    );
    const items = container.querySelectorAll(".wim-stepper__item");
    expect(items[0]).toHaveClass("wim-stepper__item--process");
    expect(items[1]).toHaveClass("wim-stepper__item--error"); // Custom status
    expect(items[2]).toHaveClass("wim-stepper__item--wait");
  });

  it("calls onChange when clickable step is clicked", () => {
    const onChange = vi.fn();
    render(<Stepper steps={steps} current={0} onChange={onChange} />);
    fireEvent.click(screen.getByText("Step 2"));
    expect(onChange).toHaveBeenCalledWith(1);
  });

  it("has tablist role and tab roles when onChange is provided", () => {
    render(<Stepper steps={steps} current={0} onChange={vi.fn()} />);
    expect(screen.getByRole("tablist")).toBeInTheDocument();
    const tabs = screen.getAllByRole("tab");
    expect(tabs).toHaveLength(3);
    expect(tabs[0]).toHaveAttribute("aria-selected", "true");
    expect(tabs[1]).toHaveAttribute("aria-selected", "false");
  });

  it("navigates between steps with ArrowRight/ArrowLeft", async () => {
    const onChange = vi.fn();
    render(<Stepper steps={steps} current={0} onChange={onChange} />);
    const tabs = screen.getAllByRole("tab");
    tabs[0].focus();
    await userEvent.keyboard("{ArrowRight}");
    expect(onChange).toHaveBeenCalledWith(1);
    await userEvent.keyboard("{ArrowLeft}");
    expect(onChange).toHaveBeenCalledWith(0);
  });

  it("navigates to first/last with Home/End", async () => {
    const onChange = vi.fn();
    render(<Stepper steps={steps} current={1} onChange={onChange} />);
    const tabs = screen.getAllByRole("tab");
    tabs[1].focus();
    await userEvent.keyboard("{Home}");
    expect(onChange).toHaveBeenCalledWith(0);
    tabs[1].focus();
    await userEvent.keyboard("{End}");
    expect(onChange).toHaveBeenCalledWith(2);
  });

  it("skips disabled steps during arrow navigation", async () => {
    const stepsWithDisabled = [
      { title: "Step 1" },
      { title: "Step 2", disabled: true },
      { title: "Step 3" },
    ];
    const onChange = vi.fn();
    render(<Stepper steps={stepsWithDisabled} current={0} onChange={onChange} />);
    const tabs = screen.getAllByRole("tab");
    tabs[0].focus();
    await userEvent.keyboard("{ArrowRight}");
    expect(onChange).toHaveBeenCalledWith(2);
  });
});
