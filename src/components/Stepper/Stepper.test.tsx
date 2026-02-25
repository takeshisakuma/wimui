import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
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
});
