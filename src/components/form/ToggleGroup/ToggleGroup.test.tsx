import { render, screen, fireEvent, waitFor, act } from "@testing-library/react";
import { describe, it, expect, vi, beforeAll, afterAll } from "vitest";
import { ToggleGroup } from "./ToggleGroup";
import styles from "./toggle-group.module.scss";

describe("ToggleGroup", () => {
  const options = [
    { label: "Option 1", value: "opt1" },
    { label: "Option 2", value: "opt2" },
    { label: "Option 3", value: "opt3" },
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
    render(<ToggleGroup options={options} defaultValue="opt1" />);
    await waitFor(() => expect(screen.getByRole("radiogroup")).toHaveClass(styles.ready));
    expect(screen.getByText("Option 1")).toBeInTheDocument();
    expect(screen.getByText("Option 2")).toBeInTheDocument();
    expect(screen.getByText("Option 3")).toBeInTheDocument();
  });

  it("handles single selection", async () => {
    const handleChange = vi.fn();
    render(<ToggleGroup options={options} onChange={handleChange} defaultValue="opt1" />);
    await waitFor(() => expect(screen.getByRole("radiogroup")).toHaveClass(styles.ready));

    act(() => {
      fireEvent.click(screen.getByText("Option 2"));
    });
    expect(handleChange).toHaveBeenCalledWith("opt2");
    await waitFor(() => {
      expect(screen.getByText("Option 2").closest(`.${styles.item}`)).toHaveClass(
        styles.active,
      );
    });

    act(() => {
      fireEvent.click(screen.getByText("Option 2"));
    });
    expect(handleChange).toHaveBeenCalledWith("");
  });

  it("handles multiple selection", async () => {
    const handleChange = vi.fn();
    render(
      <ToggleGroup
        options={options}
        selectionMode="multiple"
        onChange={handleChange}
        defaultValue={["opt1"]}
      />,
    );
    await waitFor(() => expect(screen.getByRole("toolbar")).toHaveClass(styles.ready));

    act(() => {
      fireEvent.click(screen.getByText("Option 2"));
    });
    expect(handleChange).toHaveBeenCalledWith(["opt1", "opt2"]);

    act(() => {
      fireEvent.click(screen.getByText("Option 1"));
    });
    expect(handleChange).toHaveBeenCalledWith(["opt2"]);
  });

  it("applies size and fullWidth classes", async () => {
    const { container } = render(
      <ToggleGroup options={options} size="lg" fullWidth defaultValue="opt1" />,
    );
    await waitFor(() => expect(screen.getByRole("radiogroup")).toHaveClass(styles.ready));
    expect(container.firstChild).toHaveClass(styles.lg);
    expect(container.firstChild).toHaveClass(styles.fullWidth);
  });

  it("disables options when disabled prop is set", async () => {
    const optionsWithDisabled = [
      { label: "Disabled", value: "d", disabled: true },
    ];
    render(<ToggleGroup options={optionsWithDisabled} />);
    await act(async () => {
      await new Promise(r => setTimeout(r, 0));
    });
    expect(screen.getByText("Disabled").parentElement).toBeDisabled();
  });

  describe("ARIA roles", () => {
    it("uses role=radiogroup for single mode", async () => {
      render(<ToggleGroup options={options} selectionMode="single" defaultValue="opt1" />);
      await waitFor(() => expect(screen.getByRole("radiogroup")).toHaveClass(styles.ready));
      expect(screen.getByRole("radiogroup")).toBeInTheDocument();
    });

    it("uses role=toolbar for multiple mode", async () => {
      render(<ToggleGroup options={options} selectionMode="multiple" defaultValue={["opt1"]} />);
      await waitFor(() => expect(screen.getByRole("toolbar")).toHaveClass(styles.ready));
      expect(screen.getByRole("toolbar")).toBeInTheDocument();
    });

    it("items have role=radio in single mode", async () => {
      render(<ToggleGroup options={options} selectionMode="single" defaultValue="opt1" />);
      await waitFor(() => expect(screen.getByRole("radiogroup")).toHaveClass(styles.ready));
      const radios = screen.getAllByRole("radio");
      expect(radios).toHaveLength(3);
    });

    it("items have aria-checked in single mode", async () => {
      render(<ToggleGroup options={options} value="opt2" selectionMode="single" />);
      await waitFor(() => expect(screen.getByRole("radiogroup")).toHaveClass(styles.ready));
      const radios = screen.getAllByRole("radio");
      expect(radios[1]).toHaveAttribute("aria-checked", "true");
      expect(radios[0]).toHaveAttribute("aria-checked", "false");
    });

    it("items have aria-pressed in multiple mode", async () => {
      render(
        <ToggleGroup
          options={options}
          value={["opt1", "opt3"]}
          selectionMode="multiple"
        />,
      );
      await waitFor(() => expect(screen.getByRole("toolbar")).toHaveClass(styles.ready));
      const buttons = screen.getAllByRole("button");
      expect(buttons[0]).toHaveAttribute("aria-pressed", "true");
      expect(buttons[1]).toHaveAttribute("aria-pressed", "false");
      expect(buttons[2]).toHaveAttribute("aria-pressed", "true");
    });
  });

  describe("roving tabindex", () => {
    it("gives tabIndex=0 to the selected item in single mode", async () => {
      render(<ToggleGroup options={options} value="opt2" selectionMode="single" />);
      await waitFor(() => expect(screen.getByRole("radiogroup")).toHaveClass(styles.ready));
      const radios = screen.getAllByRole("radio");
      expect(radios[1]).toHaveAttribute("tabindex", "0");
    });

    it("gives tabIndex=0 to first non-disabled item when nothing is selected", async () => {
      render(<ToggleGroup options={options} selectionMode="single" />);
      await act(async () => { await new Promise(r => setTimeout(r, 0)); });
      const radios = screen.getAllByRole("radio");
      expect(radios[0]).toHaveAttribute("tabindex", "0");
    });
  });

  it("handles uncontrolled state with defaultValue", async () => {
    const onChange = vi.fn();
    render(<ToggleGroup options={options} defaultValue="opt2" onChange={onChange} />);
    await waitFor(() => expect(screen.getByRole("radiogroup")).toHaveClass(styles.ready));
    const radios = screen.getAllByRole("radio");
    expect(radios[1]).toHaveClass(styles.active);
    
    act(() => {
      fireEvent.click(radios[0]);
    });
    expect(onChange).toHaveBeenCalledWith("opt1");
    expect(radios[0]).toHaveClass(styles.active);
  });

  it("toggles off in single mode when clicking active item", async () => {
    const onChange = vi.fn();
    render(<ToggleGroup options={options} value="opt1" onChange={onChange} />);
    await waitFor(() => expect(screen.getByRole("radiogroup")).toHaveClass(styles.ready));
    act(() => {
      fireEvent.click(screen.getByText("Option 1"));
    });
    expect(onChange).toHaveBeenCalledWith("");
  });

  it("renders items with icons only", async () => {
    const iconOptions = [
      { value: "bold", iconName: "CircleIcon" as const },
      { value: "italic", iconName: "SquareIcon" as const },
    ];
    render(<ToggleGroup options={iconOptions} defaultValue="bold" />);
    await waitFor(() => expect(screen.getByRole("radiogroup")).toHaveClass(styles.ready));
    const buttons = screen.getAllByRole("radio");
    expect(buttons[0]).toHaveClass(styles.iconOnly);
  });
});
