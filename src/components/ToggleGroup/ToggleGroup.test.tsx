import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { describe, it, expect, vi, beforeAll, afterAll } from "vitest";
import { ToggleGroup } from "./ToggleGroup";

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

  it("renders all options", () => {
    render(<ToggleGroup options={options} />);
    expect(screen.getByText("Option 1")).toBeInTheDocument();
    expect(screen.getByText("Option 2")).toBeInTheDocument();
    expect(screen.getByText("Option 3")).toBeInTheDocument();
  });

  it("handles single selection", async () => {
    const handleChange = vi.fn();
    render(<ToggleGroup options={options} onChange={handleChange} />);

    fireEvent.click(screen.getByText("Option 1"));
    expect(handleChange).toHaveBeenCalledWith("opt1");
    // Slider position/visibility might update asynchronously via rAF
    await waitFor(() => {
      expect(screen.getByText("Option 1").closest(".wim-toggle-group__item")).toHaveClass(
        "wim-toggle-group__item--active",
      );
    });

    fireEvent.click(screen.getByText("Option 2"));
    expect(handleChange).toHaveBeenCalledWith("opt2");
  });

  it("handles multiple selection", () => {
    const handleChange = vi.fn();
    render(
      <ToggleGroup
        options={options}
        selectionMode="multiple"
        onChange={handleChange}
      />,
    );

    fireEvent.click(screen.getByText("Option 1"));
    expect(handleChange).toHaveBeenCalledWith(["opt1"]);

    fireEvent.click(screen.getByText("Option 2"));
    expect(handleChange).toHaveBeenCalledWith(["opt1", "opt2"]);

    fireEvent.click(screen.getByText("Option 1"));
    expect(handleChange).toHaveBeenCalledWith(["opt2"]);
  });

  it("applies size and fullWidth classes", () => {
    const { container } = render(
      <ToggleGroup options={options} size="large" fullWidth />,
    );
    expect(container.firstChild).toHaveClass("wim-toggle-group--lg");
    expect(container.firstChild).toHaveClass("wim-toggle-group--full-width");
  });

  it("disables options when disabled prop is set", () => {
    const optionsWithDisabled = [
      { label: "Disabled", value: "d", disabled: true },
    ];
    render(<ToggleGroup options={optionsWithDisabled} />);
    expect(screen.getByText("Disabled").parentElement).toBeDisabled();
  });

  describe("ARIA roles", () => {
    it("uses role=radiogroup for single mode", () => {
      render(<ToggleGroup options={options} selectionMode="single" />);
      expect(screen.getByRole("radiogroup")).toBeInTheDocument();
    });

    it("uses role=toolbar for multiple mode", () => {
      render(<ToggleGroup options={options} selectionMode="multiple" />);
      expect(screen.getByRole("toolbar")).toBeInTheDocument();
    });

    it("items have role=radio in single mode", () => {
      render(<ToggleGroup options={options} selectionMode="single" />);
      const radios = screen.getAllByRole("radio");
      expect(radios).toHaveLength(3);
    });

    it("items have aria-checked in single mode", () => {
      render(<ToggleGroup options={options} value="opt2" selectionMode="single" />);
      const radios = screen.getAllByRole("radio");
      expect(radios[1]).toHaveAttribute("aria-checked", "true");
      expect(radios[0]).toHaveAttribute("aria-checked", "false");
    });

    it("items have aria-pressed in multiple mode", () => {
      render(
        <ToggleGroup
          options={options}
          value={["opt1", "opt3"]}
          selectionMode="multiple"
        />,
      );
      const buttons = screen.getAllByRole("button");
      expect(buttons[0]).toHaveAttribute("aria-pressed", "true");
      expect(buttons[1]).toHaveAttribute("aria-pressed", "false");
      expect(buttons[2]).toHaveAttribute("aria-pressed", "true");
    });

    it("sets aria-orientation=horizontal on container", () => {
      render(<ToggleGroup options={options} />);
      expect(screen.getByRole("radiogroup")).toHaveAttribute(
        "aria-orientation",
        "horizontal",
      );
    });

    it("forwards aria-label to container", () => {
      render(<ToggleGroup options={options} aria-label="Text alignment" />);
      expect(screen.getByRole("radiogroup")).toHaveAttribute(
        "aria-label",
        "Text alignment",
      );
    });
  });

  describe("roving tabindex", () => {
    it("gives tabIndex=0 to the selected item in single mode", () => {
      render(<ToggleGroup options={options} value="opt2" selectionMode="single" />);
      const radios = screen.getAllByRole("radio");
      expect(radios[1]).toHaveAttribute("tabindex", "0");
      expect(radios[0]).toHaveAttribute("tabindex", "-1");
      expect(radios[2]).toHaveAttribute("tabindex", "-1");
    });

    it("gives tabIndex=0 to first non-disabled item when nothing is selected", () => {
      render(<ToggleGroup options={options} selectionMode="single" />);
      const radios = screen.getAllByRole("radio");
      expect(radios[0]).toHaveAttribute("tabindex", "0");
    });

    it("gives tabIndex=0 to first non-disabled item in multiple mode", () => {
      render(<ToggleGroup options={options} selectionMode="multiple" />);
      const buttons = screen.getAllByRole("button");
      expect(buttons[0]).toHaveAttribute("tabindex", "0");
    });

    it("skips disabled items for initial tabIndex", () => {
      const optionsWithDisabled = [
        { label: "Option 1", value: "opt1", disabled: true },
        { label: "Option 2", value: "opt2" },
        { label: "Option 3", value: "opt3" },
      ];
      render(<ToggleGroup options={optionsWithDisabled} selectionMode="single" />);
      const radios = screen.getAllByRole("radio");
      expect(radios[0]).toHaveAttribute("tabindex", "-1");
      expect(radios[1]).toHaveAttribute("tabindex", "0");
    });
  });

  describe("keyboard navigation – single mode", () => {
    it("ArrowRight moves focus and selects next item", () => {
      const onChange = vi.fn();
      render(
        <ToggleGroup
          options={options}
          value="opt1"
          selectionMode="single"
          onChange={onChange}
        />,
      );
      const radios = screen.getAllByRole("radio");
      fireEvent.keyDown(radios[0], { key: "ArrowRight" });
      expect(onChange).toHaveBeenCalledWith("opt2");
      expect(document.activeElement).toBe(radios[1]);
    });

    it("ArrowLeft moves focus and selects previous item", () => {
      const onChange = vi.fn();
      render(
        <ToggleGroup
          options={options}
          value="opt3"
          selectionMode="single"
          onChange={onChange}
        />,
      );
      const radios = screen.getAllByRole("radio");
      fireEvent.keyDown(radios[2], { key: "ArrowLeft" });
      expect(onChange).toHaveBeenCalledWith("opt2");
      expect(document.activeElement).toBe(radios[1]);
    });

    it("ArrowRight wraps from last to first", () => {
      const onChange = vi.fn();
      render(
        <ToggleGroup
          options={options}
          value="opt3"
          selectionMode="single"
          onChange={onChange}
        />,
      );
      const radios = screen.getAllByRole("radio");
      fireEvent.keyDown(radios[2], { key: "ArrowRight" });
      expect(onChange).toHaveBeenCalledWith("opt1");
      expect(document.activeElement).toBe(radios[0]);
    });

    it("Home moves focus and selects first item", () => {
      const onChange = vi.fn();
      render(
        <ToggleGroup
          options={options}
          value="opt3"
          selectionMode="single"
          onChange={onChange}
        />,
      );
      const radios = screen.getAllByRole("radio");
      fireEvent.keyDown(radios[2], { key: "Home" });
      expect(onChange).toHaveBeenCalledWith("opt1");
      expect(document.activeElement).toBe(radios[0]);
    });

    it("End moves focus and selects last item", () => {
      const onChange = vi.fn();
      render(
        <ToggleGroup
          options={options}
          value="opt1"
          selectionMode="single"
          onChange={onChange}
        />,
      );
      const radios = screen.getAllByRole("radio");
      fireEvent.keyDown(radios[0], { key: "End" });
      expect(onChange).toHaveBeenCalledWith("opt3");
      expect(document.activeElement).toBe(radios[2]);
    });

    it("skips disabled items when navigating", () => {
      const onChange = vi.fn();
      const optionsWithDisabled = [
        { label: "Option 1", value: "opt1" },
        { label: "Option 2", value: "opt2", disabled: true },
        { label: "Option 3", value: "opt3" },
      ];
      render(
        <ToggleGroup
          options={optionsWithDisabled}
          value="opt1"
          selectionMode="single"
          onChange={onChange}
        />,
      );
      const radios = screen.getAllByRole("radio");
      fireEvent.keyDown(radios[0], { key: "ArrowRight" });
      expect(onChange).toHaveBeenCalledWith("opt3");
      expect(document.activeElement).toBe(radios[2]);
    });
  });

  describe("keyboard navigation – multiple mode", () => {
    it("ArrowRight moves focus without changing selection", () => {
      const onChange = vi.fn();
      render(
        <ToggleGroup
          options={options}
          value={["opt1"]}
          selectionMode="multiple"
          onChange={onChange}
        />,
      );
      const buttons = screen.getAllByRole("button");
      (buttons[0] as HTMLElement).focus();
      fireEvent.keyDown(buttons[0], { key: "ArrowRight" });
      expect(onChange).not.toHaveBeenCalled();
      expect(document.activeElement).toBe(buttons[1]);
    });

    it("ArrowLeft moves focus without changing selection", () => {
      const onChange = vi.fn();
      render(
        <ToggleGroup
          options={options}
          value={["opt3"]}
          selectionMode="multiple"
          onChange={onChange}
        />,
      );
      const buttons = screen.getAllByRole("button");
      fireEvent.keyDown(buttons[2], { key: "ArrowLeft" });
      expect(onChange).not.toHaveBeenCalled();
      expect(document.activeElement).toBe(buttons[1]);
    });

    it("Home/End move focus without changing selection", () => {
      render(<ToggleGroup options={options} selectionMode="multiple" />);
      const buttons = screen.getAllByRole("button");
      fireEvent.keyDown(buttons[2], { key: "Home" });
      expect(document.activeElement).toBe(buttons[0]);
      fireEvent.keyDown(buttons[0], { key: "End" });
      expect(document.activeElement).toBe(buttons[2]);
    });
  });

  it("handles uncontrolled state with defaultValue", () => {
    const onChange = vi.fn();
    render(<ToggleGroup options={options} defaultValue="opt2" onChange={onChange} />);
    const radios = screen.getAllByRole("radio");
    expect(radios[1]).toHaveClass("wim-toggle-group__item--active");
    
    fireEvent.click(radios[0]);
    expect(onChange).toHaveBeenCalledWith("opt1");
    expect(radios[0]).toHaveClass("wim-toggle-group__item--active");
  });

  it("toggles off in single mode when clicking active item", () => {
    const onChange = vi.fn();
    render(<ToggleGroup options={options} value="opt1" onChange={onChange} />);
    fireEvent.click(screen.getByText("Option 1"));
    expect(onChange).toHaveBeenCalledWith("");
  });

  it("renders items with icons only", () => {
    const iconOptions = [
      { value: "bold", iconName: "CircleIcon" as const },
      { value: "italic", iconName: "SquareIcon" as const },
    ];
    render(<ToggleGroup options={iconOptions} />);
    const buttons = screen.getAllByRole("radio");
    expect(buttons[0]).toHaveClass("wim-toggle-group__item--icon-only");
    expect(buttons[0].querySelector("svg")).toBeInTheDocument();
  });
});
