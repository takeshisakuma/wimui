import { createRef } from "react";
import { render, screen, fireEvent, act, waitFor } from "@testing-library/react";
import { describe, it, expect, vi, beforeAll, afterAll } from "vitest";
import { SegmentedControl } from "./SegmentedControl";
import styles from "./segmented-control.module.scss";
import fieldStyles from "../FieldTemplate/field-template.module.scss";

describe("SegmentedControl", () => {
  const options = [
    { label: "Option 1", value: "1" },
    { label: "Option 2", value: "2" },
    { label: "Option 3", value: "3" },
  ];
  
  const originalRAF = window.requestAnimationFrame;

  beforeAll(() => {
    window.requestAnimationFrame = (cb) => {
      cb(0);
      return 0;
    };
  });

  afterAll(() => {
    window.requestAnimationFrame = originalRAF;
  });

  it("renders all options", async () => {
    await act(async () => {
      render(
        <SegmentedControl options={options} value="1" onChange={() => {}} />,
      );
    });
    await waitFor(() => expect(screen.getByRole("radiogroup")).toHaveClass(styles.ready));
    expect(screen.getByText("Option 1")).toBeInTheDocument();
    expect(screen.getByText("Option 2")).toBeInTheDocument();
    expect(screen.getByText("Option 3")).toBeInTheDocument();
  });

  it("calls onChange when an option is clicked", async () => {
    const onChange = vi.fn();
    await act(async () => {
      render(
        <SegmentedControl options={options} value="1" onChange={onChange} />,
      );
    });
    await waitFor(() => expect(screen.getByRole("radiogroup")).toHaveClass(styles.ready));
    act(() => {
      fireEvent.click(screen.getByText("Option 2"));
    });
    expect(onChange).toHaveBeenCalledWith("2");
  });

  it("sets active class on selected option", async () => {
    await act(async () => {
      render(
        <SegmentedControl options={options} value="2" onChange={() => {}} />,
      );
    });
    await waitFor(() => expect(screen.getByRole("radiogroup")).toHaveClass(styles.ready));
    const activeItem = screen.getByText("Option 2").closest("button");
    expect(activeItem).toHaveClass(styles.active);
  });

  it("handles keyboard navigation (ArrowRight, ArrowDown, ArrowLeft, ArrowUp)", async () => {
    const onChange = vi.fn();
    await act(async () => {
      render(
        <SegmentedControl options={options} value="1" onChange={onChange} />,
      );
    });
    await waitFor(() => expect(screen.getByRole("radiogroup")).toHaveClass(styles.ready));
    const btns = screen.getAllByRole("radio");

    act(() => {
      fireEvent.keyDown(btns[0], { key: "ArrowRight" });
    });
    expect(onChange).toHaveBeenCalledWith("2");

    act(() => {
      fireEvent.keyDown(btns[0], { key: "ArrowDown" });
    });
    expect(onChange).toHaveBeenCalledWith("2");

    act(() => {
      fireEvent.keyDown(btns[0], { key: "ArrowLeft" });
    });
    expect(onChange).toHaveBeenCalledWith("3");

    act(() => {
      fireEvent.keyDown(btns[0], { key: "ArrowUp" });
    });
    expect(onChange).toHaveBeenCalledWith("3");

    act(() => {
      fireEvent.keyDown(btns[0], { key: "a" });
    });
    expect(onChange).toHaveBeenCalledTimes(4); // No change
    await waitFor(() => expect(screen.getByRole("radiogroup")).toHaveClass(styles.ready));
  });

  it("applies size, fullWidth and custom className", async () => {
    let container: HTMLElement = null!;
    await act(async () => {
      const result = render(
        <SegmentedControl
          options={options}
          value="1"
          onChange={() => {}}
          size="lg"
          fullWidth
          className="my-custom"
        />,
      );
      container = result.container;
    });
    await waitFor(() => expect(screen.getByRole("radiogroup")).toHaveClass(styles.ready));
    const el = screen.getByRole("radiogroup");
    expect(el).toHaveClass(styles.lg);
    expect(el).toHaveClass(styles.fullWidth);
    expect(container.firstChild).toHaveClass("my-custom"); // FieldTemplate container
  });

  it("renders with icon only", async () => {
    // Only iconName, no label
    const iconOptions = [{ value: "1", iconName: "CircleIcon" as const }];
    await act(async () => {
      render(
        <SegmentedControl options={iconOptions} value="1" onChange={() => {}} />,
      );
    });
    await waitFor(() => expect(screen.getByRole("radiogroup")).toHaveClass(styles.ready));
    const btn = screen.getByRole("radio");
    expect(btn).toHaveClass(styles.iconOnly);
    // Icon renders svg
    expect(btn.querySelector("svg")).toBeInTheDocument();
  });

  it("applies small and medium size classes", async () => {
    let rerender: ReturnType<typeof render>["rerender"];
    await act(async () => {
      const result = render(
        <SegmentedControl options={options} value="1" onChange={() => {}} size="sm" />
      );
      rerender = result.rerender;
    });
    await waitFor(() => expect(screen.getByRole("radiogroup")).toHaveClass(styles.sm));

    act(() => {
      rerender(<SegmentedControl options={options} value="1" onChange={() => {}} size="md" />);
    });
    await waitFor(() => expect(screen.getByRole("radiogroup")).toHaveClass(styles.md));
  });

  it("applies horizontal layout class", async () => {
    let container: HTMLElement = null!;
    await act(async () => {
      const result = render(
        <SegmentedControl options={options} value="1" onChange={() => {}} layout="horizontal" />
      );
      container = result.container;
    });
    await waitFor(() => expect(screen.getByRole("radiogroup")).toHaveClass(styles.ready));
    expect(container.querySelector(`.${fieldStyles.root}`)).toHaveClass(fieldStyles.horizontal);
  });

  it("applies error state visuals and aria", async () => {
    await act(async () => {
      render(<SegmentedControl options={options} value="1" onChange={() => {}} error="Required" />);
    });
    const group = screen.getByRole("radiogroup");
    expect(group).toHaveClass(styles.danger);
    expect(group).toHaveAttribute("aria-invalid", "true");
    expect(group).toHaveAttribute("aria-describedby");
    expect(screen.getByRole("alert")).toHaveTextContent("Required");
  });

  it("forwards ref to the container element", async () => {
    const ref = createRef<HTMLDivElement>();
    await act(async () => {
      render(<SegmentedControl ref={ref} options={options} value="1" onChange={() => {}} />);
    });
    expect(ref.current).toBe(screen.getByRole("radiogroup"));
  });

  it("supports asChild prop", async () => {
    await act(async () => {
      render(
        <SegmentedControl asChild options={options} value="1" onChange={() => {}}>
          <div data-testid="segmented-slot" />
        </SegmentedControl>,
      );
    });
    const element = screen.getByTestId("segmented-slot");
    expect(element.tagName).toBe("DIV");
    expect(element).toHaveAttribute("role", "radiogroup");
    expect(element).toHaveClass(styles.root);
  });
});
